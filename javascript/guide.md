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




# Entity
[]({'id':'entity','data-menu':'Entity '})

baas.io는 data를 `save` `get`, `remove`하는 기능을 제공합니다.  

또한, Entity와 Entity 사이에 Relationship(관계)을 만들 수 있습니다.  
이렇게 만들어진 Relationship(관계)를 이용하여, Twitter의 `following/follower` 또는 Facebook의 `like`를 구현할 수 있습니다.

Relationship에 대한 자세한 내용은 [Basic Concepts/Relationship](./develop_guide/#basic_concept/relation)을 참고하시기 바랍니다.

## Create Entity
[]({'id':'overivew-create-entity','data-menu':'Create Entity'})

생성 권한이 있는 collection에 entity를 생성합니다.  
entity 생성 시`type`과 `name`의 key는 필수 입니다.  
collection내에 같은 `name`으로 entity를 생성하려고 하면 에러가 발생합니다.

다음 코드는 전형적인 entity 생성을 보여줍니다.

```javascript
var options = {
    'type':'collection type',
    'name':'entity name'
}

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.createEntity(options,function(errorFlag, entity){
    if(errorFlag){

        // 해당 Collection에 Entity 생성이 실패 했을때

    } else {

        // 해당 Collection에 Entity 생성 성공 했을때

    }
});
```

## Get Entity
[]({'id':'overivew-get-entity','data-menu':'Get Entity'})

읽기 권한이 있는 Collection에 uuid 또는 name에 해당하는 Entity의 정보를 가져 옵니다.  

다음 코드는 전형적인 entity 읽기를 보여줍니다.

```javascript
var options = {
    'type':'collection type',
    'uuid':'entity uuid' // 또는 'name':'entity name'
}

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.getEntity(options,function(errorFlag, entity){
    if(errorFlag){

        // 해당 Collection에 Entity 생성이 실패 했을때

    } else {

        // 해당 Collection에 Entity 생성 성공 했을때

    }
});
```

## Update Entity
[]({'id':'overivew-update-entity','data-menu':'Update Entity'})

수정 권한이 있는 Collection에 uuid 또는 name에 해당하는 Entity에 정보를 추가하거나 수정 합니다.

다음 코드는 전형적인 entity 수정을 보여줍니다.

```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var basic ={
	'client' : io,
	'data' : {
		'type' : 'collection type',
		'uuid' : 'entity uuid', // or 'name':'entity name'
	}
}

var entity = new Baas.Entity(basic)

// property nickname과 age를 추가하는 방법
entity.set({'nickname':'lionking','age':'30'});

entity.save(function(errorFlag, responseData, entity){
	if(errorFlag){

		// Entity의 정보 추가 및 수정이 실패한 경우

	} else {

		// Entity의 정보 추가 및 수정이 성공한 경우

	}
});
```


## Remove Entity
[]({'id':'overivew-remove-entity','data-menu':'Remove Entity'})

삭제 권한이 있는 Collection에 `uuid` 또는 `name`에 해당하는 Entity를 삭제 합니다.

다음 코드는 전형적인 entity 삭제를 보여줍니다.

```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var basic ={
	'client' : io,
	'data' : {
		'type' : 'collection type',
		'uuid' : 'entity uuid', // or 'name':'entity name'
	}
}

var entity = new Baas.Entity(basic)

entity.destroy(function(errorFlag, entityData){
	if(errorFlag){

		// Entity 삭제가 실패한 경우

	} else {

		// Entity 삭제가 성공한 경우

	}
});
```

## Relationship Entity Connect
[]({'id':'overivew-relationship-entity-connect','data-menu':'Relationship Entity Connect'})

Relationship(관계)를 connect 위해서는 entity 권한은 수정과 읽기 권한 두개 다 있는 것이 좋습니다.

접근을 강화 하기 위해서는 `connector`가 될 entity는 수정 권한을 `connectee`가 될 entity는 읽기 권한을 주시면 됩니다.

다음 코드는 cat(connector)에 `love`라는 Relationship(관계)에 ball(connectee)추가하는 소스 코드 입니다.

```javascript
//cat entity 정보 (connector)
var connector_options = {
	'client':io,
	'data':{
		'type':'animals',
		'name':'cat'
	}
}

// ball entity 정보 (connectee)
var ball_options = {
	'client':io,
	'data':{
		'type':'toylands',
		'name':'ball'
	}
}

// cat Entity 생성
var cat = new Baas.Entity(cat_options);
// ball Entity 생성
var ball = new Baas.Entity(ball_options);

var catCallback = function(errorFlag, responseData, entity){
	if(errorFlag){
    	// cat fetch 실패한 경우
	} else {
    	// cat fetch 성공한 경우

        // ball property 정보 fetch
		ball.fetch(ballCallback);
	}
}

var ballCallback = function(errorFlag, responseData, entity){
	if(errorFlag){
    	// ball fetch 실패한 경우
	} else {
    	// ball fetch 성공한 경우

        // cat entity와 ball entity connect 실행
		cat.connect('love',ball,connectCallback)
	}
}

var connectCallback = function(errorFlag, entity){
	if(errorFlag){

	 	// connection이 실패한 경우

	} else {

        // connection이 성공한 경우

	}
}

// connector property 정보 fetch
cat.fetch(catCallback);
```

## Relationship Entity Disconnect
[]({'id':'overivew-relationship-entity-disconnect','data-menu':'Relationship Entity Disconnect'})

Relationship(관계)를 disconnect 위해서는 Entity 권한은 삭제와 읽기 권한 두개 다 있는 것이 좋습니다.

접근을 강화 하기 위해서는 `connector`가 될 Entity는 삭제 권한을 `connectee`가 될 Entity는 읽기 권한을 주시면 됩니다.

다음 코드는 cat(connector)에 `love`라는 Relationship(관계)에 ball(connectee) 삭제하는 소스 코드 입니다.

```javascript
//cat entity 정보 (connector)
var connector_options = {
	'client':io,
	'data':{
		'type':'animals',
		'name':'cat'
	}
}

// ball entity 정보 (connectee)
var ball_options = {
	'client':io,
	'data':{
		'type':'toylands',
		'name':'ball'
	}
}

// cat Entity 생성
var cat = new Baas.Entity(cat_options);
// ball Entity 생성
var ball = new Baas.Entity(ball_options);

var catCallback = function(errorFlag, responseData, entity){
	if(errorFlag){
    	// cat fetch 실패한 경우
	} else {
    	// cat fetch 성공한 경우

        // ball property 정보 fetch
		ball.fetch(ballCallback);
	}
}

var ballCallback = function(errorFlag, responseData, entity){
	if(errorFlag){
    	// ball fetch 실패한 경우
	} else {
    	// ball fetch 성공한 경우

        // cat entity와 ball entity connect 실행
		cat.disconnect('love',ball,disConnectCallback)
	}
}

var disConnectCallback = function(errorFlag, data){
	if(errorFlag){

	 	// connection이 삭제가 실패한 경우

	} else {

        // connection이 삭제가 성공한 경우

	}
}

// connector property 정보 fetch
cat.fetch(catCallback);
```

## Relationship Entity GetConnection
[]({'id':'overivew-relationship-entity-getconnection','data-menu':'Relationship Entity GetConnection'})

Entity에 Relationship(관계)을 맺은 Entity의 리스트 정보를 읽을 수 있습니다.

다음 코드는 cat(connector)에 Relationship(관계) 맺은 Entity 리스트를 호출하는 소스 코드입니다.

```javascript
var cat_options = {
	'client':io,
	'data':{
		'type':'animals',
		'name':'cat'
	}
}

var cat = new Baas.Entity(cat_options);

var catCallback = function(errorFlag, responseData, entity){
	if(errorFlag){

	} else {
    	// cat의 connection된 entity 리스트 읽기
		cat.getConnections('love',function(errorFlag, data, entitys){
			if(errorFlag){
				// 읽기 실패한 경우
			} else {
				// 성공한 경우
			}
		})
	}
}

// connector property 정보 fetch
cat.fetch(catCallback);
```
# Group
[]({'id':'group','data-menu':'Group '})

Group 기능은 Group Collection을 통해 지원되며, 그룹을 만들어 회원을 관리 할 수 있습니다.

## Create Group
[]({'id':'group-create-entity','data-menu':'Create Group'})

Group 을 생성하려면, `path` property가 필수 조건입니다.  
Group 에서 `uuid`와 `path`는 유일한 Key가 됩니다.  

다음은 코드는 "baas_group" 생성하는 소스 코드입니다.

```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options = {
	'client':io,
	'data':{
		'type':'groups',
		'path':'baas_group'
	}
}

io.createEntity({'type':'groups','path':'baas_group'},function(errorFlag, entity){
	if(errorFlag){
		// 'baas_group' 생성 실패한 경우
	} else {
		// 'baas_group' 생성 성공한 경우
	}
})
```

## Get Group
[]({'id':'group-get-entity','data-menu':'Get Group'})

Group 에 `uuid` 또는 `path`에 해당하는 Group 정보를 가지고 옵니다.

다음 코드는 "baas_group"의 정보를 가지고 옵니다.

```javascript
var options = {
    'type':'groups',
    'uuid':'4d4c5500-b64a-11e3-8b03-06fd000000c2' // 또는 'path':'baas_group'
}

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.getEntity(options,function(errorFlag, entity){
    if(errorFlag){
    	// 'baas_group' 정보 읽기 실패한 경우
    } else {
    	// 'baas_group' 정보 읽기 성공한 경우
    }
});
```

## Update Group
[]({'id':'group-update-entity','data-menu':'Update Group'})

Group 에 `uuid` 또는 `path`에 해당하는 group 에 정보를 추가 또는 수정 합니다.

다음 코드는 "baas_group" 에 `name`, `address` 정보를 추가하는 소스 코드입니다.

```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options ={
	'client' : io,
	'data' : {
		'type' : 'groups',
		'uuid' : '4d4c5500-b64a-11e3-8b03-06fd000000c2' // 또는 'path':'baas_group'
	}
}

var baas_group = new Baas.Group(options)

// property nickname과 age를 추가하는 방법
baas_group.set({'name':'baaio team','address':'seoul'});

baas_group.save(function(errorFlag, responseData, entity){
	if(errorFlag){
		// 'baas_group' 정보 추가 및 수정 실패한 경우
	} else {
		// 'baas_group' 정보 추가 및 수정 성공한 경우
	}
});
```

## Remove Group
[]({'id':'group-remove-entity','data-menu':'Remove Group'})

Group 에 `uuid` 또는 `path`에 해당하는 group 을 삭제 합니다.

다음 코드는 "baas_group" 을 삭제하는 소스 코드입니다.

```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var basic ={
	'client' : io,
	'data' : {
		'type' : 'groups',
		'uuid' : '4d4c5500-b64a-11e3-8b03-06fd000000c2' // 또는 'path':'baas_group'
	}
}

var baas_group = new Baas.Group(basic)

baas_group.destroy(function(errorFlag, entity){
	if(errorFlag){
		// 'baas_group' 삭제 실패한 경우
	} else {
		// 'baas_group' 삭제 성공한 경우
	}
});
```

## Add User to Group
[]({'id':'group-add-user-to-group','data-menu':'Add User to Group'})

Group 에 `uuid`와 `username`에 해당하는 user를 추가합니다.

다음 코드는 "baas_group"에 "baas_user"를 추가하는 소스 코드입니다.
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options ={
	'client' : io,
	'data' : {
		'type' : 'groups'
	},
	'path' : 'baas_group'
}

var baas_group = new Baas.Group(options);

var fetchCallback = function(errorFlag, groupData){
	if(errorFlag){
		// baas_group fetch 실패한 경우
	} else {
		// baas_group fetch 성공한 경우

		// baas_group에 추가할 baas_user 정보 읽기
		io.getEntity({'type':'users','username':'baas_user'}, getEntityCallback)
	}
}

var getEntityCallback = function(errorFlag, entity){
	if(errorFlag){
		// baas_user 정보 읽기 실패한 경우
	} else {
		// baas_user 정보 읽기 성공한 경우

		// baas_group에 baas_user 추가
		baas_group.add({'user':entity}, addCallback)
	}
}

var addCallback = function(errorFlag, data, entityList){
	if(errorFlag){
		// baas_group에 baas_user 추가를 실패한 경우
	} else {
		// baas_group에 baas_user 추가를 성공한 경우
	}

}

baas_group.fetch(fetchCallback);
```
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| /groups/\*\* | O | O | X | X |
| /users/\*\* | O | X | X | X |
[]({'class':'table-bordered'})

## Remove User from Group
[]({'id':'group-remove-user-from-group','data-menu':'Remove User from Group'})

Group에 `uuid`와 `username`에 해당하는 user를 삭제합니다.

다음 코드는 "baas_group"에 "baas_user"를 삭제하는 소스 코드입니다.
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options ={
	'client' : io,
	'data' : {
		'type' : 'groups'
	},
	'path' : 'baas_group'
}

var baas_group = new Baas.Group(options);

var fetchCallback = function(errorFlag, groupData){
	if(errorFlag){
		// baas_group fetch 실패한 경우
	} else {
		// baas_group fetch 성공한 경우

		// baas_group에 추가할 baas_user 정보 읽기
		io.getEntity({'type':'users','username':'baas_user'}, getEntityCallback)
	}
}

var getEntityCallback = function(errorFlag, entity){
	if(errorFlag){
		// baas_user 정보 읽기 실패한 경우
	} else {
		// baas_user 정보 읽기 성공한 경우

		// baas_group에 baas_user 삭제
		baas_group.add({'user':entity}, removeCallback)
	}
}

var removeCallback = function(errorFlag, data, entityList){
	if(errorFlag){
		// baas_group에 baas_user 삭제를 실패한 경우
	} else {
		// baas_group에 baas_user 삭제를 성공한 경우
	}

}

baas_group.fetch(fetchCallback);
```
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| /groups/\*\* | O | X | X | O |
| /users/\*\* | O | X | X | X |
[]({'class':'table-bordered'})

## Get Member of Group
[]({'id':'group-get-member-of-group','data-menu':'Get Member of Group'})

Group에 포함된 member들을 가지고 옵니다.

다음 코드는 "baas_group"에 포함된 "member"들을 가지고 오는 소스 코드 입니다.
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options ={
	'client' : io,
	'data' : {
		'type' : 'groups'
	},
	'path' : 'baas_group'
}

var baas_group = new Baas.Group(options);

var fetchCallback = function(errorFlag, groupData){
	if(errorFlag){
		// baas_group fetch 실패한 경우
	} else {
		// baas_group fetch 성공한 경우

		// baas_group에 포함한 member들 정보 읽기
		baas_group.members(memberCallback)
	}
}

var memberCallback = function(errorFlag, memberList){
	if(errorFlag){
		// baas_group에 포함한 member들 정보 읽기를 실패한 경우
	} else {
		// baas_group에 포함한 member들 정보 읽기를 성공한 경우
	}
}

baas_group.fetch(fetchCallback);
```
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| /groups/\*\* | O | X | X | X |
[]({'class':'table-bordered'})



















[TOC]

# File
[]({'id':'file','data-menu':'File'})

Group 기능은 File Collection을 통해 지원되며, 파일들을 업/다운로드 및 수정/삭제를 할 수 있습니다.

## Upload File
[]({'id':'file-upload-file','data-menu':'Upload File'})

File Collection 에 File을 업로드 합니다.  
다음 코드는 File Collection 에 "baas.jpg" 파일을 업로드하는  소스 코드입니다.

### Of least permission
| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| /groups/\*\* | X | O | X | X |

### - HTML -
```html
<input type="file" name="file" class="_file_upload"/>
<button class="_upload_start">upload start</button>
```

### - Javascript -
```javascript
// 업로드를 시작 버튼 Click
$('._upload_start').bind('click',function(e){
	e.preventDefault();

	// file input element 객체
	var fileInput = document.getElementsByClassName('_file_upload');
	var file = new Baas.File({'client':io});

	file.upload({'file':fileInput},function(errorFlag, response, entity){
		if(errorFlag){
			// file 업로드가 실패한 경우
		} else {
			// file 업로드가 성공한 경우
		}
	})
})
```


## Download File
[]({'id':'file-download-file','data-menu':'Download File'})

File을 다운로드르 하기 위해서는 `uusd`가 필요합니다.  
다음 코드는 `uuid` 사용하여 "baas.jpg" 파일을 다운로드하는  소스 코드입니다.

### Of least permission
| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| /groups/\*\* | O | X | X | X |

### -HTML-
```html
<button class='download_start'>fileDownload</button>
```

### -Javascript-
```javascript
$('.download_start').click(function(e){
    e.preventDefault();

    var file  = new Baas.File({'client':io, 'data':{'uuid':'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'} });

    file.download(function(errorFlag, entity){
     	if(errorFlag){
			// file download가 실패한 경우
		} else {
			// file download가 성공한 경우
		}
    })
})
```

## Get File Entity
[]({'id':'file-get-file-entity','data-menu':'Get File Entity'})

File enitty의 정보는 `uusd`를 사용하여 가지고 올수 있습니다..  
다음 코드는 `uuid` 사용하여 file entity 정보를 가지고 오는 소스 코드입니다.

```javascript
var options = {
	'type':'files',
	'uuid':'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'
}

var getCallback = function(errorFlag, entity){
	if(errorFlag){
		// file entity 정보 가져오기 실패한 경우
	} else {
		// file entity 정보 가져오기 성공한 경우
	}
})

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.getEntity(options,getCallback)
```

### Of least permission
| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| /groups/\*\* | O | X | X | X |


## Update File Entity
[]({'id':'file-update-file-entity','data-menu':'Update File Entity'})

## Remove File
[]({'id':'file-remove-file','data-menu':'Remove File'})

