# Five-Per-Week Algorithms

> 👨‍💻 일주일에 최소 5개의 알고리즘 문제를 푸는 스터디

<!-- Summary Start -->
## 이번 주(45주차) 요약
> 이 요약은 자동으로 생성됩니다.
[이전 요약들](https://github.com/five-per-week/algorithms/blob/master/LOG.md)
<!-- Summary End -->

## 스터디 규칙

>📌 2~4의 과정은 `npm run create` 명령어를 사용할 수 있습니다. 
> 
> 사용 전 `npm i -g create-ps-directory` 로 [create-ps-directory](https://github.com/younho9/create-ps-directory)를 설치해주세요.

1.  문제를 풀기 전 `branch`를 이동합니다.

2.  문제 출처 별로 분류하여 `problems` 디렉토리에 폴더를 생성합니다.

    -   ex) `problems/programmers`

3.  문제 번호 별로 분류하여 문제 출처 별 디렉토리에 폴더를 생성합니다.

    -   ex) `problems/programmers/42576-an-uncompleted-player`

4.  유저 이름으로 문제 풀이 코드를 작성합니다.

    -   ex) `younho9.js`, `agrajak.py`

5.  문제 풀이를 완료하면 [PR 템플릿](https://github.com/five-per-week/algorithms/blob/master/.github/PULL_REQUEST_TEMPLATE.md)에 따라 `Pull Request`합니다.

6.  `Assigner`에 자신을 등록하고, `Reviewer`에는 다른 스터디원들을 등록합니다.

7.  스터디원은 다른 스터디원의 `Pull Request`에 대해 리뷰하거나 간단한 코멘트를 작성할 수 있습니다.

    -   1명 이상의 팀원이 승인해야 `Merge` 할 수 있습니다.

8.  승인된 `Pull Request`는 `Assigner`가 직접 `Squash and Merge` 합니다.

## Git 브랜치 네이밍

> 브랜치 타입에 따라 `/`로 분류하고 간략한 설명을 추가합니다.

### 일반

-   문서 : `docs/summary`
-   기능 : `feat/summary`
-   리팩토링 : `refactor/summary`
-   환경 설정 : `env/summary`
-   버그 수정 : `fix/summary`
-   기타 : `chore/summary`
-   기타 필요에 따라 제안할 수 있습니다.

### 문제 풀이

> 문제 풀이에 대해서는 다음과 같이 작성합니다.

-   문제 풀이 : `username/problem-reference/problem-number`
    -   ex) `younho9/programmers/42576`

## Git 커밋 메시지

-   `커밋 타입: 커밋에 대한 설명`으로 메시지를 남깁니다.
-   문제 풀이에 대한 커밋 메시지 끝에는 유저 이름을 태그합니다.
    -   ex) `✅ solved: Programmers 42576 @younho9`

### 가능한 타입 명

-   `docs` : 문서와 관련된 커밋입니다.
-   `feat` : 기능 개발과 관련된 커밋입니다.
-   `style` : 스타일링과 관련된 커밋입니다.
-   `refactor` : 코드 리팩토링과 관련된 커밋입니다.
-   `fix` : 버그 해결과 관련된 커밋입니다.
-   `hotfix` : 급한 버그 해결과 관련된 커밋입니다.
-   `test` : 테스트 코드와 관련된 커밋입니다.
-   `env` : 개발 환경 설정에 사용하는 커밋입니다.
-   `chore` : 기타 변경사항에 사용하는 커밋입니다.
-   `✅ solved` : 문제를 해결했을 때 사용하는 커밋입니다.
-   `❌ unsolved` : 문제를 해결하지 못하고 중지했을 때 사용하는 커밋입니다.
-   기타 필요에 따라 제안할 수 있습니다.
