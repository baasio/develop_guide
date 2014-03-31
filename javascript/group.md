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
	'path':'baas_group'
}

var createCallback = function(errorFlag, entity){
	if(errorFlag){
		// 'baas_group' 생성 실패한 경우
	} else {
		// 'baas_group' 생성 성공한 경우
	}
}

io.createGroup(options, createCallback)
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




















