import { consumeTypes } from "@module-federation/dts-plugin/core";
import getModuleFederationConfig from "./moduleFederationConfig";

const options = {
  host: {
    moduleFederationConfig: getModuleFederationConfig(),
  },
};

async function run() {
  try {
    console.log("📂 원격 타입 다운로드 시작...");
    await consumeTypes(options);
    console.log("✅ consumeTypes 실행 완료!");
  } catch (error) {
    console.error("❌ 타입 생성 실행 중 오류 발생:", error);
  }
}

run().then(() => console.log("종료"));
