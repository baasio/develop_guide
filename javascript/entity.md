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

