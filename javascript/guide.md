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

회원을 가입하기 위해서는, **username과 비밀번호**가 꼭 필요합니다.

이 외에, 이메일 주소, 이름을 추가로 넣을 수 있습니다.
username은 영문과 숫자, 특수기호를 사용할 수 있으며, 유일한 값이어야 합니다.
또한, 비밀번호 변경 또는 초기화를 위해서 가급적 이메일 주소를 받는 것이 좋습니다.

```javascript
// 필수 요소
var io = new Baas.IO(
    orgName,		// baaas.io ID
    appName		// Application ID
);

io.signup(
    username, 	// @String ID(username)
    password, 	// @String user password
    email, 		// @String user email address
    name, 		// @String user name
    callback	// @Fuction callback Function
)
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

[]({'class':'table table-striped'})