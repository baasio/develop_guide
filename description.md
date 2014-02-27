
[]({'element':'<div class=\"bs-docs-section\">'})
# Backend App []({'id':'backend-app'})

baas.io에서 생성한 Backend Application을 지칭합니다.

가입하면 기본 Backend App인 "sandbox"가 생성이 되어 있으며, 필요에 따라 여러개의 Backend App을 생성할 수 있습니다. "sandbox" Backend App은 보안이 처리되어 있지 않은 Backend App으로 개발 용도로 기본 생성됩니다.

각각의 Backend App은 독립적으로 관리되어, 서로 공유할 수 없습니다.

![](https://stage.baas.io/images/develop/common/backend-app.png)

`caution` "sandbox" Backend App

> "sandbox" 앱은 개발시에 사용하는 앱으로, 모든 권한이 열려있어 자유롭게 작업할 수 있습니다.

> 다만, 모든 권한이 열려있어 그대로 배포할 경우, 심각한 보안문제가 있을 수 있습니다

> 따라서, 배포할 때는 새로운 Backend App을 생성하고 Role과 Permission을 설정하여 보안에 문제가 없도록 유의하시기 바랍니다.

<!--bs-docs-section-end-->

<!--bs-docs-section-start-->
# Entity []({'id':'entity'})

baas.io에서 저장되는 모든 데이터들은 Entity(엔터티)라고 지칭됩니다.

각 Entity들은 Key(이름)와 Value(값)의 쌍으로 구성된 Property(속성)들을 가지고 있습니다. Entity는 Type(타입)이라는 속성을 필수로 가지고 있으며, 같은 Type의 Entity들의 집합을 Collection(컬렉션)이라고 합니다.

![](https://stage.baas.io/images/develop/common/collection-entity.png)

아래는 간단한 Entity의 샘플 입니다.

```
{
    "uuid": "40bbbd26-1c46-11e2-b6ff-020026de0053",
    "type": "user",
    "created": 1350909883387,
    "modified": 1350909883387,
    "activated": true,
    "username": "xguru",
    "email": "xguru@baas.io",
    "name": "권정혁"
}
```

## Property []({'id':'entity-property'})

하나의 Entity는 여러 속성을 가질 수 있습니다. 이 속성들을 Porperty라고 합니다. 예를 들어, "철수"라는 사람은, '이름', '나이', '주소', '외모' 등의 Property가 있습니다. 이 Property가 많으면 많을 수록 좀 더 명확하게 Entity의 특징을 구분할 수 있습니다.

Property는 baas.io에서 이미 정의하여 사용하고 있는 Predefined Property(기본 속성)들과 사용자가 정의하여 사용할 수 있는 Custom Property(사용자 정의 속성)들로 구분됩니다.

## Predefined vs. Custom Property []({'id':'entity-predefined-property'})

Entity가 가질 수 있는 Custom Property의 갯수는 이론적으로 제한이 없습니다.

다만, Custom Property의 Key의 이름을 정할 때, Predefined Property의 Key와 동일하게 사용하지 않도록 주의해야 합니다.

Custom Property의 Value는 JSON에서 Value가 될 수 있는 String, Number, Object, Array, Boolean, null로 설정할 수 있습니다. JSON은 다양한 데이터 형태를 저장하는데 넓게 쓰이고 있어, 사용에 제약은 거의 없습니다.

Predefined Property는 아래와 같은 종류가 있습니다.

|Property|Type|Description|
|----------|----------|-------------|
|uuid|uuid|Entity의 고유한 ID이며 baas.io로부터 부여됩니다.|
|type|	string	|Entity의 타입이며 꼭 정의되어야 합니다. (e.g. "user")|
|created|long|Entity의 생성 시간이며 baas.io로부터 생성됩니다. (UNIX timestamp - milisec 포함)|
|modified|long|Entity의 최종 수정 시간이며 baas.io로부터 생성됩니다. (UNIX timestamp - milisec 포함)|
|name|string|Entity의 고유한 이름.|

`Warning` "name" Property

"users" Collection을 제외한 모든 Collection은 "name" Property를 추가로 가질 수 있으며, 고유한 값을 가지고 있어야합니다. 이 Property의 값은 변경할 수 없으니 바뀔수 있는 용도로 사용하지 않도록 주의 바랍니다. "users" Collection은 "username" Property가 같은 용도로 사용되고 있습니다.

## Predefined vs. Custom Type []({'id':'entity-type'})

앞서 말한 바와 같이, Entity는 Type이라는 필수 Property를 가지고 있어야합니다.

이 Type은 Collection의 이름을 결정하며, Type의 복수형으로 결정됩니다. 즉, 'user'라는 Type을 가진 Entity는 'users' 라는 Collection에 속하게 됩니다.

Type도 Property와 비슷하게 baas.io에서 이미 정의하여 사용하고 있는 Predefined Type(기본 타입)과 사용자가 정의하여 사용할 수 있는 Custom Type(사용자 정의 타입)으로 구분됩니다. Custom Type을 정의할 때는 Predefined Type과 동일하게 정의하지 않도록 주의해야 합니다.

Predefined Type의 종류는 아래와 같습니다.


|Predefined Type|	Predefined Collection 이름 및 위치|	용도|
|------------|-------------------|-------------|
|user|/users|	회원정보|
|group|/groups|	회원그룹|
|role|/roles|	역할|
|activity|/activities|	Activity Stream|
|device|/devices|	단말정보|
|file|/files|	파일|
|event|/events|	(예약)이벤트|
|help|helps|	고객센터|
|push|/pushes|	푸시정보|
|location|/locations|	(예약)위치정보|
|script|/scripts|	(예약)스크립트|
|service|/services|	(예약)서비스|


`Note` (예약)된 컬렉션

현재는 제공되고 있지 않지만, 앞으로 제공될 기능을 위해 미리 정의된 컬렉션입니다.












