#User
[]({'id':'user','data-menu':'User'})

baas.io는 가입/로그인/로그아웃/탈퇴 등의 회원관리 기능을 제공하고 있습니다.

또한 Facebook을 통한 가입/로그인 기능도 제공이 되고 있으며, Baas.IO와 Baas.Entity를 사용하여 구현이 가능합니다.

##Sign up
[]({'id':'user-signup','data-menu':'Sign up'})

회원을 가입하기 위해서는, `username`과 `password`가 꼭 필요합니다.  
이 외에 `email`, `name`을 추가로 넣을 수 있고, 더 추가 하고 싶은 property는 형식에 맞게 추가 하시면 됩니다.  
`username`은 영문과 숫자, 특수기호를 사용할 수 있으며, 유일한 값이어야 합니다.  
`email`은 `password` 변경 또는 초기화를 위해 필수가 아니지만 가입 시 받는 것이 좋습니다.

**Not use property name**

`uuid`,`type`,`created`,`modified`,`metadata`;

다음 코드는 전형적인 회원가입 보여줍니다.

```javascript
var username = 'my name';
var password = 'my password';
var email = 'my@baas.io';

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.signup( username, password, email, function(errorFlag, entity){
	if(errorFlag){

		// 회원가입이 실패한 경우

	} else {

		// 회원가입이 성공한 경우

	}
});
```

[]({'class':'table table-striped'})

##Sign in , Log in
[]({'id':'user-signin','data-menu':'Sign in, Log in'})

회원가입이 되어 있으면 로그인을 하여 인증을 받을 수 있습니다.

로그인이 성공하면, 결과로 회원의 인증 토큰(Access Token)이 LocalStorage에 저장 되어, 로그인된 회원의 역활 및 권한을 체크하는 용도로 사용됩니다.

다음 코드는 전형적인 로그인 보여줍니다.

```javascript
var username = 'my name';
var password = 'my password'

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.login(username, password, function(errorFlag, responseData, userEntity){
	if(errorFlag){

		// 로그인이 실패한 경우

	} else {

		// 로그인이 성공한 경우

	}
})
```

##Kakao Sign up
[]({'id':'kakao-user-signup','data-menu':'Kakao Sign up'})

회원 가입을 하기 위해 Kako `access-token`이 필요합니다.

다음 코드는 카카오 토근을 사용한 회원가입 예제입니다.

```javascript

var kakao_token = 'kakao token'

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.kakao_signup( {'kkt_access_token':kakao_token}), function(errorFlag, data){
	if(errorFlag){

		// 회원가입이 실패한 경우

	} else {

		// 회원가입이 성공한 경우

	}
});
```

[]({'class':'table table-striped'})

##Kakao Sign in(login)
[]({'id':'kakao-user-signin','data-menu':'Kakao Sign in, Log in'})

로그인을 하기 위해 Kako `access-token`이 필요합니다.

다음 코드는 카카오 토근을 사용한 로그인 예제입니다.

```javascript

var kakao_token = 'kakao token'

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.kakao_signin( {'kkt_access_token':kakao_token}), function(errorFlag, data){
	if(errorFlag){

		// 회원가입이 실패한 경우

	} else {

		// 회원가입이 성공한 경우

	}
});

```

## Update User
[]({'id':'user-updateuser','data-menu':'Update User'})

가입되어 있는 회원의 `property`를 추가하거나 수정합니다.  
추가하는 `property`가 기존의 회원정보에 존재하면 덮어쓰기를 하며, 없을 경우 추가합니다.  
정보는 entity의 `property`의 Key와 Value 형태로 저장됩니다.

다음 코드는 전형적인 property 추가를 보여줍니다.

```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var basic ={
	'client' : io,
	'data' : {
		'type' : 'user',
		'uuid' : 'member uuid', // or 'username':'member username'
	}
}

var entity = new Baas.Entity(basic)

// property nickname과 age를 추가하는 방법
entity.set({'nickname':'r2fresh','age':'30'});

entity.save(function(errorFlag, responseData, userEntity){
	if(errorFlag){

		// 회원 정보 추가 및 수정이 실패한 경우

	} else {

		// 회원 정보 추가 및 수정이 성공한 경우

	}
});
```

## Log out
[]({'id':'user-logout','data-menu':'Logout'})

로그인 된 사용자를 로그아웃합니다.  
로그아웃이 되면 `localstorage`에 저장된 `token`은 삭제 됩니다.

```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.logout();
```



