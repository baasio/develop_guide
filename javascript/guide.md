# Overview
[]({'id':'overivew','data-menu':'Overview'})

앱 서비스에 연결하여 javascript/html 또는 hybrid app에 사용을 간단하게 해주는 오픈 소스 SDK다.

Repository 주소 :

[https://github.com/baasio/baas.io-sdk-javascript](https://github.com/baasio/baas.io-sdk-javascript)

Package 다운로드 주소 :

Download as a zip file: https://github.com/baasio/baas.io-sdk-javascript/archive/master.zip

Download as a tar.gz file: https://github.com/baasio/baas.io-sdk-javascript/archive/master.tar.gz

baas.io 앱 개발에 대한 더 많은 정보 :

https://baas.io/docs/ko/devguide/

## Quickstart
[]({'id':'overivew-quickstart','data-menu':'Quickstart'})

```javascript
<DOCTYPE html>
<html>
    <head>
        <script src="http://baasio.github.io/baas.io-sdk-javascript/baas.io.min.js"></script>
        <script type="text/javascript">


            // Initializing the SDK
            var io = new Baas.IO({
                orgName:'yourorgname', // Your baas.io organization name (or baas.io username for App Services)
                appName:'sandbox' // Your baas.io app name
            });

            // members colllection을 만들고, 데이터를 읽음
            var options = {
                type:'members',
                qs:{ql:'order by created DESC'}
            }

            var members;

            io.createCollection(options, function (err, members) {
                if (err) {
                    alert("Couldn't get the list of members.");
                } else {
                    while(members.hasNextEntity()) {
                        var member = members.getNextEntity();
                        alert(member.get("name")); // Output the name of the members
                    }
                }
            });

            // member 의 추가를 원한다면, 아래의 4줄의 주석을 제거

            // member = { "title": "r2fresh" };
            // members.addEntity(member, function (error, response) {
            //  if (error) { alert("Couldn't add the member.");
            //  } else { alert("The member was added."); } });
        </script>
    </head>
    <body></body>
</html>
```

## Changelog
[]({'id':'overivew-changelog','data-menu':'Changelog'})

###0.9.0

- merge usergrid sdk v0.10.6
- bugs fix
- add push class function
- add file class function
- add utill class function
- 가이드 문서 업데이트


####0.4.0rc0

- 가이드 문서 업데이트
- merge usergrid sdk v0.10.3

####0.3.0

- 스타트업 프로젝트 작성

####v0.2.0

- 키친싱크 앱 작성
- API 문서 자동화

####v0.1.0

- merge usergrid sdk v0.9.0

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

		// 회원가입이 되고 성공이 되었을 때

	} else {

		// 회원 가입 되지 않고 실패를 했을때

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

		// 로그인이 성공하였을 경우

	} else {

		// 로그인이 실패하였을 경우

	}
})
```

## Update User
[]({'id':'user-update-user','data-menu':'Update User'})

가입되어 있는 회원의 `property`를 추가하거나 수정합니다.  
추가하는 `property`가 기존의 회원정보에 존재하면 덮어쓰기를 하며, 없을 경우 추가합니다.  
정보는 Entity의 `Property`의 Key와 Value 형태로 저장됩니다.

아래는 성별 정보와 주소를 추가로 등록하는 예제입니다.

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

// Property를 추가하는 방법
entity.set({'nickname':'r2fresh','age':'30'});

entity.save(function(errorFlag, responseData, userEntity){
	if(errorFlag){

		//

	} else {

		//

	}
});
```

