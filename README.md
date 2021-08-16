# Project

## 1. SoldeskTeamProject (21.6 ~ 21.7 / 4주)

### 프로젝트 개요
* 캠핑, 차박 여행 증가에 따라 캠핑 물품, 캠핑장 예약을 한 번에 할 수 있는 홈페이지 제작을 프로젝트 주제로 선정.
* 프로젝트 내에서 회원가입, 로그인, 회원정보수정 등의 부분 제작 

### 사용 기술
* Back-End : Java, Spring, Mybatis
* Front-End : HTML, CSS, Javascript, JQuery, Bootstrap
* Database : Oracle
* Tool : Eclipse

### 주요 내용
1. Spring security를 이용하여 권한에 따른 페이지의 차이

![3](https://user-images.githubusercontent.com/82365664/129558137-441b6cfe-545e-4093-aff5-1118f30213a5.png)

2. 회원가입을 위한 이메일 인증 구현

![mail](https://user-images.githubusercontent.com/82365664/129559002-6181248b-6f00-439f-9738-5b27a553d73b.png)

3. Spring security를 통해 BCryptPasswordEncoder로 회원의 비밀번호 암호화

![암호화](https://user-images.githubusercontent.com/82365664/129558659-76419010-6cd8-462b-9ae4-728a82b1afe1.png)

4. 네이버 아이디 로그인 API 불러오기

### 수정할 부분
1. 네이버 아이디 로그인 API 완성 : 정보 불러온 후 DB에 저장 구현
2. main 사진 부분 각 게시판에 연결

### 수정 사항
* 21.8.10 : leave.jsp 권한 별 표시 수정 / main 사진 잠시 수정(게시판 연동 예정)
* 21.8.9 : 팀플 최종 내용 커밋
* 21.8.8 : jsp 내용 js로 이동중, admin 마이페이지 수정 2차(예약내역 숨김)
* 21.8.4 : 마이페이지 admin 수정 1차(구매내역 숨김)
* 21.8.2 : 이메일 인증 구현
