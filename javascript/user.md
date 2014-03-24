#User
[]({'id':'user','data-menu':'User'})

baas.io는 가입/로그인/로그아웃/탈퇴 등의 회원관리 기능을 제공하고 있습니다.

또한 Facebook을 통한 가입/로그인 기능도 제공이 되고 있으며, Baas.IO와 Baas.Entity를 사용하여 구현이 가능합니다.

##Sign up
[]({'id':'user-signup','data-menu':'Sign up'})

회원을 가입하기 위해서는, **username과 비밀번호**가 꼭 필요합니다.

이 외에, 이메일 주소, 이름을 추가로 넣을 수 있습니다.
username은 영문과 숫자, 특수기호를 사용할 수 있으며, 유일한 값이어야 합니다.
또한, 비밀번호 변경 또는 초기화를 위해서 가급적 이메일 주소를 받는 것이 좋습니다.

```javascript
$(document).ready(function(){
	// 필수 요소
	var appInfo = {
		orgName: //baas.io ID
		appName: //Application ID
	}

	var io = new Baas.IO(appInfo);

	var username = 'baasID'; //ID(username)

	var password = 'baas1234'; //user password

	var email = 'baas@baas.io'; //user email address

	var name = 'baas'; //user name

    // errorFlag가 true이면 error가 발생
    // errorFlag가 false이면 error 없이 가입 완료
	var callback = function(errorFlag, entity) {

		if(errorFlag){

			console.log('entity :', entity);

		} else {

			console.log('entity :', entity);

		}

	}

	io.signup(username, password, email, name, callback)
})
```

### Error Code

|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|201|401|잘못된 username이거나 password 입니다.|
|202|401|접근 권한(Permission)이 없습니다.|
|911|400|이미 존재하는 리소스입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|