## commit rule
효율적인 commit message 관리를 위한, 커밋 템플릿을 사용합니다.
해당 저장소의 .git-commit-template.txt를 commit template으로 지정하여
룰에 맞추어 커밋하여야 합니다.


## 적용 방법
```cmd
git config --global commit.template <template의 절대경로>
```

## 작성 방법
- Commit Message 구조
```markdown
타입(대상) : 이슈키 제목

본문

이슈 연결
```

- 작성 예시
```markdown
fix: Safari에서 모달을 띄웠을 때 스크롤 이슈 수정

모바일 사파리에서 Carousel 모달을 띄웠을 때,
모달 밖의 상하 스크롤이 움직이는 이슈 수정.

resolves: #1137
```

- 이슈 연결은 github의 issue and pull requests 룰을 따릅니다.
- https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests

사용 가능한 키워드
- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved