# Blog-app for Desktop

- MongoDB와 Node.js로 Javascript만을 사용하여 어떻게 서버를 만드는지 학습하면서 만든 블로그 웹사이트입니다.
- MongoDB를 사용하여 데이터베이스를 관리하고 HTTP 에러와 서버를 만들때 오류와 같은 시행 착오를 겪으면서 웹이 어떻게 만들어지는지 학습했습니다
- useContext를 활용하여 REST로 로그인,회원가입,업데이트 과정을 학습했습니다
- Bcrypt의 hash방식으로 패스워드를 사용하여 보안성에 대해 학습했습니다

##

<details>
<summary><span style="color:red">&#128293; 클릭 하시면 느낀점 리뷰를 보실 수 있습니다. &#128591;</span></summary>
<div markdown="1">       
  
블로그앱은 Node.js와 Node.express를 사용하여 웹 서버를 직접 구현해보고 백엔드와의 협업 과정을 알아보고자 기초적인 REST API를 학습하기 위해 제작한 웹사이트입니다.

데이터플랫폼은 몽고 DB를 이용하고 요청한 파일이나 데이터들을 관리해주었습니다. 서버 쪽은 Model 파일을 생성하여 몽고 스키마를 통해 데이터의 구조와 형식을 정의하는 방법을 학습했고 AUTH CRUD를 구현하면서 비밀번호를 hash로 바꿔주는 비크립트 사용법을 학습했습니다.
프론트 쪽에선 기존 리액트 스테이트 관리는 상위 컴포넌트에서 스테이트를 관리하여 내려주는 방식인데 이를 한번에 관리하고자 useContext를 사용하여 전역 스테이트 관리 공간을 만들어 로컬 스토리지에 담아 관리하였습니다

</div>
</details>

##

## --> [Link](https://kdn-blog.herokuapp.com/)

## [![Repository Card](https://widget.realdeveloper.pro/api/card?user=kdn0325&repo=blog-app)](https://github.com/kdn0325/blog-app')

### Initial Screen
<img width="1677" alt="blog" src="https://user-images.githubusercontent.com/91298955/168579324-ffb5dc01-6697-4909-b6b2-ed06ad74e036.png">
