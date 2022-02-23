# 🎊 EmotiPop(Remotipop)Cancel changes
## Logo
<img src="https://user-images.githubusercontent.com/73332608/144999214-54e4f52f-d861-41b3-bf65-508dbaf3fa5c.png" width="180" height="140">

----


# 🔗 배포 정보
[📱 EmotiPop](https://play.google.com/store/apps/details?id=com.dropTheCode.EmotiPop)

> **![image](https://img.shields.io/badge/Google%20Play-%23414141?style=for-the-badge&logo=Google%20Play) 에 `EmotiPop`을 검색하세요**
## ** ⁉️수강생 동기의 사정으로 서버가 동작하지 않아 작동하지 않습니다.⁉️ **
### 👏리팩토링 진행되며 바뀐 모습들을 gif파일로 첨부하오니 양해 부탁 드립니다.👏 
> 

# 💡 RemotiPop은 어떤 서비스인가요?
## Final Project Emotipop의 리펙토링 버전(진행중...)
> **이렇게 바뀌는 중이에요**
<div>
 <img src="https://user-images.githubusercontent.com/61442171/155122323-e1618ba1-6059-4675-bcca-a86a34627964.gif" width="180" height="320">
 <img src="https://user-images.githubusercontent.com/61442171/153894940-41a21c23-68ba-493b-9ac4-9c3506ccb9a1.gif" width="180" height="320">
 <img src="https://user-images.githubusercontent.com/61442171/153895363-35bf8be7-688b-4b17-9e98-e2c85b468c17.gif" width="180" height="320">
 <img src="https://user-images.githubusercontent.com/61442171/153894723-57dbed8b-dd5f-4213-a96f-ae3daddae148.png" width="180" height="320">
 <img src="https://user-images.githubusercontent.com/61442171/153894165-fdca9677-9784-4b27-a7bc-f90666aaf82d.png" width="180" height="320">
 <img src="https://user-images.githubusercontent.com/61442171/153895529-2dc2846b-ac42-4b68-b83b-d6111827e833.png" width="180" height="320">
 <img src="https://user-images.githubusercontent.com/61442171/155121250-57769dc0-4b33-41a0-806a-86a92f433442.gif" width="180" height="320">
</div>


 
# 🗞  이 서비스를 기획하게 된 계기는 무엇인가요?
- React-Native expo를 활용해 프로젝트를 진행 하였는데, React-Native를 활용해 리펙토링해 보고 싶어서 시작하게 되었습니다. 
>~~웹툰 원작인 드라마 유미의 세포들을 보면, 다음과 같은 장면이 나옵니다.~~
>
>~~주인공 유미가 남자친구인 웅이에게 불만이 생길 때마다, 웅이에게 불만을 드러내지 않고 유미의 감정 세포들이 박에 콩주머니를 던집니다.~~
>
>~~그리고 이 감정이 쌓여 결국 나중에 박이 터지면서 유미의 감정이 극대화되어 나타나죠.~~
>
>~~이 장면을 보고, 감정이 쌓여서 결국 터진다는 표현을 이렇게 할 수 있구나라고 깨달았고, 이 부분을 활용하여 감정 정리 서비스를 만들어보면 어떨까라는 호기심에서~~
>
> ~~시작하여 결국 EmotiPop을 기획하게 되었습니다.~~


# 🕵️‍♀️ 어떤 기술이 사용되었나요?

## Front
![image](https://img.shields.io/badge/FRONT-JavaScript-%23F7DF1E?style=for-the-badge&logo=JavaScript)

![image](https://img.shields.io/badge/FRONT-React_Native-%2361DAFB?style=for-the-badge&logo=React)

![image](https://img.shields.io/badge/FRONT-React_Hooks-%2361DAFB?style=for-the-badge&logo=React)

![image](https://img.shields.io/badge/FRONT-React%20Navigation-%23664FAB?style=for-the-badge&logo=React)

![image](https://img.shields.io/badge/FRONT-Redux-%23764ABC?style=for-the-badge&logo=Redux)

![image](https://img.shields.io/badge/FRONT-Adobe%20Illustrator-%23FF9A00?style=for-the-badge&logo=Adobe%20Illustrator)

![image](https://img.shields.io/badge/FRONT-FlipaClip-%ffffff?style=for-the-badge)

## Back
![image](https://img.shields.io/badge/BACK-JavaScript-%23F7DF1E?style=for-the-badge&logo=JavaScript)

![image](https://img.shields.io/badge/BACK-Node.js-%23339933?style=for-the-badge&logo=Node.js)

![image](https://img.shields.io/badge/BACK-EXPRESS-%23000000?style=for-the-badge&logo=Express)

![image](https://img.shields.io/badge/BACK-Sequelize-%2352B0E7?style=for-the-badge&logo=Sequelize)

![image](https://img.shields.io/badge/BACK-MySQL-%234479A1?style=for-the-badge&logo=MySQL)


<!-- ![image](https://user-images.githubusercontent.com/73332608/146723346-04e8da96-8f17-41b0-a1b2-1152a76d8e8e.png) -->

# 🔨 Architecture

## 🔔 Service Flow Chart
![image](https://user-images.githubusercontent.com/73332608/146293110-3bf744b4-7745-41b1-853f-f3feeb2899f2.png)

# ⚙️ 달라진 것들
- ## 구조
  - Root Stack
    - Tutorial Stack
      - 튜토리얼 페이지들
      - 로그인 및 회원가입 페이지 
    - MainTab
      - 메인 페이지(Stack)
      - 캘린더 페이지
      - 차트 페이지
      - 마이 페이지
- ## 탭네비게이션
  - Emotipop: Redux 활용 탭 네비게이션 직접 구현
  - Remotipop: BottomTabNavigation 
---
- ## 로그인 & 회원가입 창
  - 컴포넌트화 하여 재활용
  - 인풋, 버튼 컴포넌트화
- ## 메인 페이지(감정일기 작성 메인)
  - 긍정박(긍정적 감정 기록 선택 창)과 부정박(부정적 감정 기록 선택 창) 분리(기존에는 두 박이 하나로 합쳐져 있었음).
  - 긍정방 및 부정방 감정 기록 페이지 컴포넌트 화
  - state에 따라 컴포넌트화 된 방 재활용
  - 긍정 기록과 부정 기록에 따른 애니메이션 재생 페이지 컴포넌트 화
  - 상태와 컴포넌트를 활용해 재활용
- ## 캘린더 페이지 
  - React-Native-calendars 라이브러리 활용
  - 날짜에 쓰여진 글 목록을 달력 메인 페이지와 연동
  - 없는 데이터 처리(보강 필요) 
- ## 차트 페이지
  - React-Native-svg-charts 라이브러리 활용
- ## 마이 페이지
  - 로직 분리
  - 버튼 및 인풋 컴포넌트 재활용해 사용

# 🔧보완 및 보강이 필요한 부분들(추가하고 싶은 기능 등)
- ios 호환
- Modal 제작(현재는 내장 컴포넌트 사용중)
- Alert 제작(현재는 내장 컴포넌트 사용중)
- 인트로 애니메이션(어플 재접속 하면 인트로 애니메이션 살짝 보이는 부분)
- Alert창(dispatch 후 에러에 따라 나타나는 얼럿창의 동작이 의도와는 다르게 작동)
- 차트 라벨 생성
- 다양한 차트 지원(데이터 필터 및 다양화)
- 튜토리얼 페이지 넘김 버튼
