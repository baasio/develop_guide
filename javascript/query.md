# Query
[]({'id':'guery','data-menu':'Query'})

baas.io에 저장된 데이터를 특정 조건으로 조회하는 기능을 제공합니다. SQL 구문과 비슷한 형태로 조회할 수 있습니다.

지정된 데이터를 특정 조건으로 조회하는 기능을 제공합니다.

SQL 구문과 비슷한 형태로 조회를 할 수 있습니다.

## Query Entities from Collection
[]({'id':'guery-entities-from-collection','data-menu':'Query Entities from Collection'})

Collection에서 특정 조건에 맞는 Entity의 리스트를 조회 합니다.

아래는 animals Collection의 리스트를 내림차순으로 조회해 오라는 Query입니다.

```javascript
var options = {
	'client':io,
	'type':'animals',
	'qs':{
		'ql':'order by created DESC'
	}
}

var callback = function(errorFlag, collectionData){
	if(errorFlag){
		// animals entity list 조회 실패한 경우
	} else {
		// animals entity list 조회 성공한 경우
	}
}

var animals = new Baas.Collection( options, callback})
```

### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/animals/\*** | O | X | X | X |
[]({'class':'table-bordered'})

## Query User Entities from Group
[]({'id':'guery-user-entities-from-group','data-menu':'Query User Entities from Group'})

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

## Query Entities with Relationship
[]({'id':'guery-entities-with-relationship','data-menu':'Query Entities with Relationship'})

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
		cat.getConnections('love',function(errorFlag, data, entityList){
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