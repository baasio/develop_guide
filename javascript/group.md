# Group
[]({'id':'group','data-menu':'Group '})

Group 기능은 Group Collection을 통해 지원되며, 그룹을 만들어 회원을 관리 할 수 있습니다.

## Create Group

Group Collection에 Group Entity를 생성하려면, `path` property가 필수 조건입니다.  
Group Collection에서 `uuid`와 `path`는 유일한 Key가 됩니다.  

다음은 "designer"라는 Group Entity를 생성하는 소스 코드입니다.

```javascript
var options = {
	'client':io,
	'data':{
		'type':'groups',
		'path':'designer'
	}
}

io.createEntity({'type':'groups','path':'designer'},function(errorFlag, entity){
	if(errorFlag){
		// groups Collection에 'designer' group 생성이 실패한 경우
	} else {
		// groups Collection에 'designer' group 생성이 성공한 경우
	}
})
```

## Get Group


## Update Group


## Remove Group