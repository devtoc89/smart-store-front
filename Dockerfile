FROM node:23-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
## prisma orm을 위해 apk 필요(orm 미사용 시, os 이미지 및 apk 제거로 50mb정도 감소 가능으로 보임)
RUN corepack enable && apk add --no-cache openssl musl-dev libc6-compat

# dependecies 
FROM base AS build_base
WORKDIR /usr/src/app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build user Service
FROM build_base AS user_builder
RUN pnpm --filter=user build 

FROM base AS user
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3332
ENV HOSTNAME=0.0.0.0

COPY --from=user_builder /usr/src/app/apps/user/.next/standalone  ./
COPY --from=user_builder /usr/src/app/apps/user/public ./public
COPY --from=user_builder /usr/src/app/apps/user/.next/static ./public/_next/static

COPY ./.env .
EXPOSE 3332
CMD [ "node", "server.js" ]
