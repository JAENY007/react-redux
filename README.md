<div align="center">

# React-Redux Practice (To Do List App) <br> 리액트-리덕스 연습 (투두리스트 앱 만들기)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FJAENY007%20react-redux&count_bg=%23FF8989&title_bg=%23B4B4B4&icon=github.svg&icon_color=%23E7E7E7&title=GitHub-Hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

> ## 💡 Project Outline <br> &nbsp;&nbsp;프로젝트 개요

**`Practice Redux` with React** by making TO DO LIST App

투두리스트 앱 만들기로 **리액트 & `리덕스 연습하기`**

<br>

> ## 📖 Index <br> &nbsp;&nbsp;목차

[Run this Project <br> 프로젝트 실행](#-run-this-project----프로젝트-실행)

[Project Introduction <br> 프로젝트 소개](#-project-introduction----프로젝트-소개)
 - [Tech Stacks <br> 사용기술](#-tech-stacks----사용기술)
 - [Implemented Features <br> 구현기능](#-implemented-features----구현-기능)
 - [Directory Structure <br> 폴더구조](#-directory-structure----폴더-구조)
 - [Reasons for using this packages <br> 패키지 사용 근거](#-reasons-for-using-this-packages-librarys-etc----패키지-사용-근거라이브러리-등)

[Retrospect <br> 회고](#-retrospect----회고)
 - [Learning <br> 배운 것](#learning----배운-것)
 - [Want to fix <br> 고치고 싶은 것](#want-to-fix----고치고-싶은-것)
 - [What I think i need to study more <br> 더 공부해야 한다고 생각하는 것](#what-i-think-i-need-to-study-more----더-공부해야-한다고-생각하는-것)

<br>

> ## ⚙ Run This Project <br> &nbsp;&nbsp;프로젝트 실행

- Just Click This Link => [Go To App](https://todolist-jaeny007.vercel.app/)

- 링크를 클릭하세요 => [바로가기](https://todolist-jaeny007.vercel.app/)


If you want `Edit Code` <br> `코드 수정`을 원하신다면

follow this : <br> 아래 내용을 참조하세요

```bash
# open cmd & clone code / 명령창 실행 & 클론 코드
git clone "https://github.com/JAENY007/react-redux.git"

# install package / 패키지 설치
npm i

# run code / 코드 실행
npm start
```

<br>

> ## 🛠 Project Introduction <br> &nbsp;&nbsp;프로젝트 소개

### 🖥 Tech Stacks <br> &nbsp;&nbsp;사용기술

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Create_React_App-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white"/> <img src="https://img.shields.io/badge/React_Router_Dom-CA4245?style=for-the-badge&logo=React-Router&logoColor=white"/> <br> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/> <img alt="React-Query" src="https://img.shields.io/badge/React_Query-FF4154?&style=for-the-badge&logo=reactquery&logoColor=white" /> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> <img alt="Styled Components" src="https://img.shields.io/badge/-Styled_Components-db7092?style=for-the-badge&logo=styled-components&logoColor=white" /> <br> <img src="https://img.shields.io/badge/Npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/Git_Hub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=Vercel&logoColor=white"/>


<br>

### 🕹 Implemented features <br> &nbsp;&nbsp;구현 기능

- [ ] Main Page / 메인 페이지

<div align="center">

</div>

- [ ] SignUp / 회원가입

<div align="center">

</div>

- [ ] SignIn / 로그인

<div align="center">

</div>

- [ ] Get To Do List / 투두리스트 가져오기

<div align="center">

</div>

- [ ] Create To Do / 투두리스트 만들기

<div align="center">

</div>

- [ ] Update To Do / 투두리스트 수정하기

<div align="center">

</div>

- [ ] Delete To Do / 투두리스트 지우기

<div align="center">

</div>

- [ ] User Page / 유저 페이지

<div align="center">

</div>

- [ ] Update User Info / 개인정보 수정

<div align="center">

</div>

- [ ] Upload User Avatar(Image) / 유저 이미지 업로드

<div align="center">

</div>

- [ ] Delete User Avatar(Image) / 유저 이미지 삭제

<div align="center">

</div>


- [ ] Delete User Account / 회원탈퇴(유저 삭제)

<div align="center">

</div>

---

### 📁 Directory Structure <br> &nbsp;&nbsp;폴더 구조

```markdown
src
├─app.component
│  ├─buttons
│  └─icons
├─app.feature
│  ├─myPage
│  └─todo
├─app.layout
├─pages
├─root.modules
│  ├─api
│  └─query
├─root.store
│  ├─action
│  ├─constant
│  └─reducer
└─root.styled

```

- All Folder names use `camelCase` <br> 폴더명은 모두 `camelCase`로 생성
- `pages` : Page Component folder with routing processing <br> 라우팅 처리가 되어있는 페이지 컴포넌트 폴더
- root folders in App are `root.{name}` / `app.{name}` <br> app내의 root폴더
- Global used modules, CSS, state management store // `root.modules` / `root.styled` / `root.store` <br> 전역에서 사용할 모듈, CSS, 상태관리 저장소
- Common folder of App // `app.feature` / `app.layout` / `app.components` <br> app 의 공통 사용 폴더 입니다

- Separation of folder structure by feature <br> 기능별로 폴더구조 분리
    - `screen/Screen~.tsx` : Screen entry point used by one feature <br> 하나의 기능에서 사용되는 화면 시작점
    - `component/` : A component containing business logic used in a single feature <br> 하나의 기능에서 사용되는 비즈니스 로직이 담긴 컴포넌트
    - `query/` : React-Query module Functions(e.g. useQuery, useMutation) <br> useQuery, useMutation 등 react-Query 모듈 함수
    - `app.feature/{feature}/` ~ `constant, store, module, hook` add as needed <br> 필요 시 추가

<br>

**Naming Convention** <br> **네이밍 컨벤션**
  
  - Components(컴포넌트) : `PascalCase`
  - modules, constants(모듈함수, 상수) : `camelCase`
  - CSS ClassNames(CSS 클래스) : `kebab-case`

---

### 🎨 Reasons for using this packages (Librarys etc) <br> &nbsp;&nbsp;패키지 사용 근거(라이브러리 등)

- **`CRA`** : Create-React-App <br>
  For build faster react app <br> 빠른 앱 빌드를 위해 사용

- **`React` & `React-Router-Dom`** <br>
  For build Single-Page-Application <br> SPA 앱 빌드를 위해 사용

- **`Axios` & `React-Query`** <br>
  For server state management : Axios for instance, React-Query for CRUD <br> 서버 상태관리를 위해 사용 : Axios는 인스턴스 생성, React-Query는 데이터 CRUD를 위해 사용

- **`Styled-Components`** <br>
  For CSS management per component <br> 컴포넌트 단위의 CSS 관리를 위해 사용

- **`Vercel`** <br>
  For Deploy the app <br> 앱 배포를 위해 사용

> ## 🏷 Retrospect <br> &nbsp;&nbsp;회고

### Learning <br> &nbsp;&nbsp;배운 것
- React로 앱만들기!
- Vercel로 배포!

### Want to fix <br> &nbsp;&nbsp;고치고 싶은 것
- 이제 시작이다!
- 아직 아무것도 안함

### What i think i need to study more <br> &nbsp;&nbsp;더 공부해야 한다고 생각하는 것
- 모든 기술을 다 잘 알고 사용해야 한다!