# Backend App
[]({'id':'backend-app','data-menu':'Backend App'})

baas.io에서 생성한 Backend Application을 지칭합니다.
가입하면 기본 Backend App인 "sandbox"가 생성이 되어 있으며, 필요에 따라 여러개의 Backend App을 생성할 수 있습니다. "sandbox" Backend App은 보안이 처리되어 있지 않은 Backend App으로 개발 용도로 기본 생성됩니다.
각각의 Backend App은 독립적으로 관리되어, 서로 공유할 수 없습니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/backend-app.png)

`caution` "sandbox" Backend App

"sandbox" 앱은 개발시에 사용하는 앱으로, 모든 권한이 열려있어 자유롭게 작업할 수 있습니다.
다만, 모든 권한이 열려있어 그대로 배포할 경우, 심각한 보안문제가 있을 수 있습니다
따라서, 배포할 때는 새로운 Backend App을 생성하고 Role과 Permission을 설정하여 보안에 문제가 없도록 유의하시기 바랍니다.

# Entity
[]({'id':'entity','data-menu':'Entity'})

baas.io에서 저장되는 모든 데이터들은 Entity(엔터티)라고 지칭됩니다.

각 Entity들은 Key(이름)와 Value(값)의 쌍으로 구성된 Property(속성)들을 가지고 있습니다. Entity는 Type(타입)이라는 속성을 필수로 가지고 있으며, 같은 Type의 Entity들의 집합을 Collection(컬렉션)이라고 합니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/collection-entity.png)

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

## Property
[]({'id':'entity-property','data-menu':'Property'})

하나의 Entity는 여러 속성을 가질 수 있습니다. 이 속성들을 Porperty라고 합니다. 예를 들어, "철수"라는 사람은, '이름', '나이', '주소', '외모' 등의 Property가 있습니다. 이 Property가 많으면 많을 수록 좀 더 명확하게 Entity의 특징을 구분할 수 있습니다.

Property는 baas.io에서 이미 정의하여 사용하고 있는 Predefined Property(기본 속성)들과 사용자가 정의하여 사용할 수 있는 Custom Property(사용자 정의 속성)들로 구분됩니다.






## Predefined vs. Custom Property
[]({'id':'entity-predefined-property','data-menu':'Predefined vs. Custom Property'})

Entity가 가질 수 있는 Custom Property의 갯수는 이론적으로 제한이 없습니다.
다만, Custom Property의 Key의 이름을 정할 때, Predefined Property의 Key와 동일하게 사용하지 않도록 주의해야 합니다.

Custom Property의 Value는 JSON에서 Value가 될 수 있는 String, Number, Object, Array, Boolean, null로 설정할 수 있습니다. JSON은 다양한 데이터 형태를 저장하는데 넓게 쓰이고 있어, 사용에 제약은 거의 없습니다.

Predefined Property는 아래와 같은 종류가 있습니다.

|Property | Type | Description
|:-----------:|:------------:|:----------:|
|uuid|uuid|Entity의 고유한 ID이며 baas.io로부터 부여됩니다.
|type|string|Entity의 타입이며 꼭 정의되어야 합니다. (e.g. "user")
|created|long|Entity의 생성 시간이며 baas.io로부터 생성됩니다.(UNIX timestamp - milisec 포함)
|modified|long|Entity의 최종 수정 시간이며 baas.io로부터 생성됩니다. (UNIX timestamp - milisec 포함)
|name|string|Entity의 고유한 이름
[]({'class':'table table-striped table-bordered'})

`Warning` "name" Property

"users" Collection을 제외한 모든 Collection은 "name" Property를 추가로 가질 수 있으며, 고유한 값을 가지고 있어야합니다. 이 Property의 값은 변경할 수 없으니 바뀔수 있는 용도로 사용하지 않도록 주의 바랍니다. "users" Collection은 "username" Property가 같은 용도로 사용되고 있습니다.














## Predefined vs. Custom Type
[]({'id':'entity-type','data-menu':'Predefined vs. Custom Type'})

앞서 말한 바와 같이, Entity는 Type이라는 필수 Property를 가지고 있어야합니다.
이 Type은 Collection의 이름을 결정하며, Type의 복수형으로 결정됩니다. 즉, 'user'라는 Type을 가진 Entity는 'users' 라는 Collection에 속하게 됩니다.

Type도 Property와 비슷하게 baas.io에서 이미 정의하여 사용하고 있는 Predefined Type(기본 타입)과 사용자가 정의하여 사용할 수 있는 Custom Type(사용자 정의 타입)으로 구분됩니다. Custom Type을 정의할 때는 Predefined Type과 동일하게 정의하지 않도록 주의해야 합니다.

Predefined Type의 종류는 아래와 같습니다.

|Predefined Type |Predefined Collection 이름 및 위치 |	용도
|:-----------:|:------------:|:----------:|
|user |/users|	회원정보
|group |/groups|	회원그룹
|role |/roles|	역할
|activity |/activities|	Activity Stream
|device |/devices|	단말정보
|file |/files|	파일
|event|/events|	(예약)이벤트
|help|helps|	고객센터
|push|/pushes|	푸시정보
|location|/locations|	(예약)위치정보
|script|/scripts|	(예약)스크립트
|service|/services|	(예약)서비스
[]({'class':'table table-striped table-bordered'})

`Note` (예약)된 컬렉션

현재는 제공되고 있지 않지만, 앞으로 제공될 기능을 위해 미리 정의된 컬렉션입니다.


















# Collection
[]({'id':'collection','data-menu':'Collection'})

Collection은 같은 Type의 Entity들을 모아놓은 것을 지칭합니다. Collection의 이름은 Entity Type의 복수형으로 정해집니다. 예를들어 'person'이라는 Type의 Collection 이름은 'people'이 됩니다. 만들려는 이름의 Collection이 없더라도 Entity를 생성하면, 생성하려는 Entity Type의 복수형으로 Collection이 생성됩니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/collection-entity.png)

## Predefined vs. Custom Collection
[]({'id':'collection-predefined','data-menu':'Predefined vs. Custom Collection'})

Collection은, Entity Type의 복수형이 Collection의 이름이므로, baas.io에서 이미 정의하여 사용하고 있는 Predefined Collection(기본 컬렉션)과 사용자가 정의하여 사용할 수 있는 Custom Collection(사용자 정의 컬렉션)으로 구분됩니다. Custom Collection을 정의할 때는 Predefined Collection과 동일하게 정의하지 않도록 주의해야 합니다.

Predefined Collection의 종류는 아래와 같습니다

|Predefined Type|Predefined Collection 이름 및 위치|용도|
|:-----------:|:------------:|:----------:|
|user|	/users|	회원정보|
|group|	/groups|	회원그룹|
|role|	/roles|	역할|
|activity|	/activities|	Activity Stream|
|device|	/devices|	단말정보|
|file|	/files|	파일|
|event|	/events|	(예약)이벤트|
|help|	/helps|	고객센터|
|push|	/pushes|	푸시정보|
|location|	/locations|	(예약)위치정보|
|script|	/scripts|	(예약)스크립트|
|service|	/services|	(예약)서비스|
[]({'class':'table table-striped table-bordered'})


`note` (예약)된 컬렉션

현재는 제공되고 있지 않지만, 앞으로 제공될 기능을 위해 미리 정의된 컬렉션입니다.



# Relationship
[]({'id':'relation','data-menu':'Relationship'})

Entity와 Entity사이에 관계를 만들 수 있습니다. 이 Relationship 기능을 이용하여, Twitter의 Following/Follower 기능이나 Facebook의 Like 기능을 구현할 수 있습니다.

## Following/Followers
[]({'id':'relationship-following','data-menu':'Following/Followers'})

baas.io는 "user" Entity 간에 "following"이라는 특별한 Relationship을 제공합니다. 이 "following"관계를 형성하면, 반대 방향으로 "followers"라는 가상 관계가 함께 생성이 됩니다.

아래 그림을 살펴보겠습니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/following-follower.png)

즉, user A가 user B를 following 할 경우, user A의 following을 조회하면 user B가 나오지만, user B의 following 목록에는 user A가 나오지 않습니다. user B는 followers를 조회해야 user A가 나오는 것입니다.

## Custom Relationship
[]({'id':'relationship-custom','data-menu':'Custom Relationship'})

직접 관계를 정의하여, Custom Relationship을 만들 수도 있습니다.
이 Custom Relationship은 "following/followers"와는 다르게, "user" Entity가 아닌 다른 Custom Type을 Entity끼리도 관계를 만들 수 있습니다. 다만, "followers" 같은, 반대 방향의 가상 관계를 만들어 주지는 않습니다.
다시말하면, Following/Followers Relationship의 그림에서 보았듯이 following 관계가 만들어지면, followers라는 반대 방향의 가상관계가 만들어 지지만, "like"라는 Custom Relationship은 그렇지 않은 것을 알 수 있습니다.
즉, 아래의 그림과 같이 Relationship이 만들어집니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/custom-relationship.png)




























# Data Model
[]({'id':'data-model', 'data-menu':'Data Model'})

앞서 살펴본 Backend App, Entity, Collection 섹션을 읽어보았다면, 데이터 모델이 Backend App > Collection > Entity > Property 순서로 구조화 되어있다는 것을 알 수 있습니다. 바스아이오에서는 MySQL, Oracle, PostgreSQL 같은 일반적인 관계형 데이터베이스(RDBMS)의 기능을 모두 제공하지 않습니다. 즉, 바스아이오에서 제공하는 데이터 서비스는 제약사항이 있고 이를 이해하고 데이터 모델링을 해야합니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/datamodel.png)









## 데이터 모델링 시 알아두어야 할 점
[]({'id':'you-should-know', 'data-menu':'데이터 모델링 시 알아두어야 할 점'})

- Collection, Property, Relationship 을 미리 정의 해야 함
	* Property 속성(연결검색여부, 전문검색여부)을 정의해야 함
	* Property 속성이 정의되어있지 않을 시 기본값(검색안함, 전문검색안함)으로 설정됨
	* Relationship 속성은 Property 속성과 동일함
- Property, Relationship 속성 변경에는 제약사항이 있음
	* 소량의 데이터는 즉시 반영 (시스템이 판단 - 엔티티 수가 1000건 이하이고, 프로퍼티 수가 많지 않을 때)
	* 대량의 데이터가 있을 시 기존 데이터까지 변경해야하므로 전체 시스템에 부하를 발생시키지 않도록 점진적인 변경 진행
	* 대량의 데이터 수정작업은 전체 시스템의 부하를 고려하여 내부에서 조절 됨, 변경작업을 할 수 없을 때 사용자에게 메세지를 노출 함







## Property 속성이란
[]({'id':'property-metadata', 'data-menu':'Property 속성이란'})

Property는 name, value 구성된 간단한 구조입니다. Property 속성은 검색여부, 전문검색여부, 유일값여부로 구성되는데, 데이터를 조회할 시 영향을 받습니다.

어플리케이션에 id, price, item_type 3가지 Property를 가진 items 컬렉션이 있다고 가정해봅시다. 그리고 3가지 프로퍼티의 속성을 아래와 같이 설정했다고 가정합니다.

```
id = 검색 O, 전문검색 X, 유일값 O
price = 검색 X, 전문검색 X, 유일값 X
item_type = 검색 O, 전문검색 O, 유일값 X
```

`note` 전문검색여부(Full Text Search) : Property의 모든 text에 대해 단어 또는 구문의 검색 기능을 지원

이때, 프로퍼티 속성이 어떤지에 따라서 데이터를 조회할 수 있을지 없을지가 결정됩니다.

|조회 가능여부|요청|비고
|:-----------:|:------------:|:----------:|
|가능|/{baasid}/{app}/items?ql=select * where id = 10|&nbsp;
|가능|/{baasid}/{app}/items?ql=select * where id = '10adf'|&nbsp;
|<font color='red'>불가능</font>|/{baasid}/{app}/items?ql=select * where id contains %10|전문검색이 비활성화라 안됨
|<font color='red'>불가능</font>|/{baasid}/{app}/items?ql=select * where price = 30|검색여부가 비활성화라 안됨
|<font color='red'>불가능</font>|/{baasid}/{app}/items?ql=select * where price > 30|검색여부가 비활성화라 안됨
|가능|/{baasid}/{app}/items?ql=select * where item_type = '100'|&nbsp;
|가능|/{baasid}/{app}/items?ql=select * where item_type = '100%'|&nbsp;
[]({'class':'table table-striped table-bordered'})

이 모든 과정은 포탈 > MyPage > Backend App > Data Browser > 컬렉션 생성, 수정란을 통해서 할 수 있습니다. 아래 이미지를 참고하세요.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/databrowser-role-list.png)


<!--
## Relationship 속성이란
[]({'id':'relationship-metadata', 'data-menu':'Relationship 속성이란'})

엔티티와 엔티티를 연결하는 것을 Relationship 이라고 합니다. Relationship 속성은 두 엔티티가 연결된 상태에서 데이터를 조회 시 영향을 끼칩니다. 속성은 검색여부, 전문검색여부입니다.

어플리케이션에 title, description 2가지 프로퍼티를 가진 games 컬렉션과 id, price, item_type 3가지 프로퍼티를 가진 items 컬렉션이 컬렉션이 있다고 가정해봅시다. 그리고 2개의 컬렉션의 프로퍼티와 Relationship 속성을 아래와 같이 설정했다고 가정합니다.

```
Collection : games
title = 검색여부 O, 연결 전문검색여부 O, 유일값여부 X
description = 검색여부 X, 전문검색여부 X, 유일값여부 X

Collection : items
id = 검색여부 O, 전문검색여부 X, 유일값여부 O, 연결검색 가능여부 O, 연결전문검색 가능여부 X
price = 검색여부 X, 전문검색여부 X, 유일값여부 X, 연결검색 가능여부 X, 연결전문검색 가능여부 X
item_type = 검색여부 O, 전문검색여부 O, 유일값여부 X, 연결검색 가능여부 O, 연결전문검색 가능여부 O
```

1개의 게임 엔티티에 다수의 아이템이 연결될 수 있습니다. 이때, Relationship 속성이 어떤지에 따라서 데이터를 조회할 수 있을지 없을지가 결정됩니다.

|조회 가능여부|요청|비고
|:-----------:|:------------:|:----------:|
|가능|/{baasid}/{app}/games/{game_item}/have/items?ql=select * where id = 10|연결검색이 활성화라 검색이 됨
|가능|/{baasid}/{app}/games/{game_item}/have/items?ql=select * where id = '10adf'|연결검색이 활성화라 검색이 됨
|불가능|/{baasid}/{app}/games/{game_item}/have/items?ql=select * where id contains %10|연결전문검색이 비활성화라 안됨
|불가능|/{baasid}/{app}/games/{game_item}/have/items?ql=select * where price = 30|연결검색이 비활성화라 안됨
|불가능|/{baasid}/{app}/games/{game_item}/have/items?ql=select * where price > 30|연결검색이 비활성화라 안됨
|가능|/{baasid}/{app}/games/{game_item}/have/items?ql=select * where item_type = '100'|연결검색이 활성화라 검색이 됨
|가능|/{baasid}/{app}/games/{game_item}/have/items?ql=select * where item_type = '100%'|연결전문검색이 활성화라 검색이 됨
[]({'class':'table table-striped table-bordered'})
 -->





# Authentication
[]({'id':'authentication','data-menu':'Authentication'})

baas.io 의 Authentication 은 OAuth 2.0 에 기반하고 있습니다. OAuth 는 사용자가 모바일 앱 등을 사용해서 웹서비스를 사용할 때, 패스워드를 안전하게 관리하면서 서비스를 사용할 수 있도록 해주는 인증기술 입니다. 원하는 권한만을 제한해서 부여할 수 있는 기능을 가진 제한된 권한의 열쇠라고 생각하시면 편리합니다. 종종 트렁크를 열 수 없는 발렛파킹 전용 열쇠에 비유되기도 합니다. Application에 비밀번호를 저장하는 대신에 OAuth 는 디바이스의 앱에 할당된, 인증토큰 이라는 것을 통해서 인증 할 수 있도록 해줍니다.

반드시 라이브러리를 사용해서 구현해야 하는 OAuth 1.0과 달리 OAuth 2.0은 간단하면서도 안전한 인증을 제공합니다. OAuth 2.0은 Google 이나 Facebook등에서 사용하고 있으며 자세한 내용은 oauth.net 을 참고하시기 바랍니다.

## Access Token
[]({'id':'authentication-accesstoken','data-menu':'Access Token'})

baas.io는 OAuth 2.0의 표준을 따르며 데이터를 요청하는 작업에서 Access Token(인증토큰)을 요구합니다. 이 Access Token을 이용하여 baas.io는 접근 권한을 확인하여 요청을 처리합니다.

**Authentication Type**

인증토큰을 얻기 위해서는 아래의 방법을 따라서 자신을 인증해야 합니다. 인증 방법은 접근하려는 권한의 종류에 따라 다릅니다.

기본적으로 2가지의 인증 타입이 있습니다.

|인증 타입	|설명|
|:-----------:|:------------:|
|Application	|해당 Application의 모든 권한을 가지는 인증입니다.|
|Application User	|Application을 사용하는 회원이 가지는 인증입니다. (Role 설정에 따른 접근 제한을 가지게 됩니다.)|
[]({'class':'table table-striped table-bordered'})

Application 인증 타입은 기본적으로 Application 내에서 거의 제약이 없는 슈퍼유저와 같은 권한을 가지고 있기 때문에 서버 기반의 Application을 위한 방법 입니다. OAuth 를 사용해서 로그인할 때, Application의 client ID 와 client secret을 인증 정보로 사용합니다.

Application User는 Application의 사용자 계정을 위한 접근 타입 입니다. 이 접근 타입으로 OAuth 로그인하기 위해서는 사용자의 유저네임과 패스워드를 사용해서 로그인 하실 수 있습니다.

Application 권한을 얻기위한 방법은 SDK로는 제공되지 않으며, REST API를 통해 이용하실 수 있습니다.


`Warning` Application의 Client ID 와 Client Secret

Client ID와 Client Secret을 이용하여 얻게되는 Application 권한은 모든 정보를 접근할 수 있습니다.
따라서, 이 Client ID, Client Secret이 유출되지 않도록 각별히 유의하시기 바라며, 유출될 경우 Dashboard를 통하여 재발급 받으시기 바랍니다.
특히 유의하실 점은, Client ID, Client Secret을 단말에 설치되는 앱의 소스코드에 넣어서 전체권한을 갖도록 하지마시기 바랍니다.

## Policy
[]({'id':'authentication-policy','data-menu':'Policy'})

Access Token은 유효시간이 있으며, 기본 설정은 24시간으로 설정되어 있습니다. 유효시간이 지난 Access Token을 사용하여 baas.io에 요청하면, HTTP 401을 수신하게 됩니다.
HTTP 401은 Unauthorized(인증되지 않음)를 의미하며, 이 응답을 받게되면 사용하던 Access Token을 폐기하고 새로운 Token을 다시 발급 받아야합니다.
유효시간은 Access Token 요청 시 원하는 유효시간으로 요청하여 받을 수 있습니다. 유효시간으로 설정되는 값은 msec(밀리세컨드)이며 최대 604800000msec, 즉, 7일 까지 설정할 수 있습니다.

`note` 앱을 실행할 때마다 다시 로그인?

Access Token을 앱이 실행될때 마다 발급받아 처리하는 것은 좋은 방법이 아닙니다.
Twitter나 Facebook과 같은 앱들도 OAuth정책에 따라 유효시간이 존재하며, 이 유효시간이 지나면 사용자로부터 ID, Password를 입력받아 직접 로그인하도록 처리합니다.
사용자의 ID, Password를 저장하여 자동으로 로그인하는 방법은 ID, Password가 유출될 수 있으므로 권장하지 않습니다.


# Security
[]({'id':'security','data-menu':'Security'})

baas.io는 Role(역할)과 Permission(권한)을 통하여 강력한 보안 시스템을 제공하고 있습니다.
개발자가 baas.io API 를 호출할때, Client ID 와 Client Secret을 통하여 얻은, Application 권한의 Access Token으로 접근하지 않는다면, Role에 설정된 Permission에 따라 접근이 제한됩니다.
Role과 Permission을 설정하기 위해서는 해당 백앤드앱의 데이터브라우저 > Role을 통하여 수정할 수 있습니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/databrowser-role.png)

## Role
[]({'id':'security-role','data-menu':'Role'})

백엔드앱을 생성하면, 세 가지의 기본 Role을 가지고 있습니다. 각각의 Role은 Permission을 가지고 있으며, Permission을 어떻게 설정하느냐에 따라 접근할 수 있는 범위가 제한됩니다.
데이터브라우저의 Role에는 아래와 같이 세 가지 Role을 보여주고 있습니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/databrowser-role-list.png)

각 Role은 아래와 같은 용도로 사용됩니다.

|기본 Role|	설명|	비고|
|:-----------:|:------------:|:----------:|
|Guest|	인증받지 않은 회원|	가입, 푸시를 위한 단말 등록/해제 권한만 가지고 있습니다.|
|Default|	인증받은 회원	자신의 회원| 정보 접근 및 푸시를 위한 단말 등록/해제 권한만 가지고 있습니다.|
|Administrator|	Administrator로 지정된 회원 또는 그룹|	아무런 권한이 없으며, 필요한 권한만 지정하여 사용합니다.|
[]({'class':'table table-striped table-bordered'})

모든 Role은 새로운 Permission을 생성하거나, 수정 또는 삭제가 가능합니다. 즉, 로그인을 하지 않은 회원의 접근 범위와 로그인한 회원의 접근 범위를 각각 다르게 제한하여, 서비스를 만들 수 있습니다.

`Warning` 개발과 배포

가입과 동시에 이미 생성되어 있는 "sandbox" Backend App은 Default Role 뿐만 아니라, Guest Role에도 모든 데이터에 접근할 수 있는 Permission을 가지고 있습니다.

따라서, 서비스를 개발하는 중에는 "sandbox" Backend App을 이용하여 개발하는 것이 편합니다. 다만, 배포할때는 보안에 문제가 없도록, 새로 Backend App을 생성하고, Role과 Permission을 설정하여 "sandbox"로 배포하지 않도록 해야 합니다.

## Permission
[]({'id':'security-permission','data-menu':'Permission'})

Permission은 접근 위치의 Pattern(패턴)과 Operation(동작)으로 구성되어 있습니다. 동작은 Read(읽기), Create(생성), Update(수정), Delete(삭제)를 중복하여 선택할 수 있으며, 접근 Path의 Pattern은 Apache Ant의 Pattern 매칭 규약을 따릅니다.

접근 Path를 만드는 방법을 이해하기 위해서는 URI(Uniform Resource Identifier)를 이해할 필요가 있는데, 어떤 컬렉션의 Entity의 uuid를 uuidA라고 할 때, 이 Entity의 URI는 "/{collection}/uuidA"가 되며, 이를 접근하기 위해서는 Permission의 Path가 Collection의 모든 Entity, 즉, "/{collection}/*"이 되어야 접근이됩니다.

또한, 어떤 Collection의 Entity의 uuid를 uuidA라고 하면, 이 Entity와 Relationship으로 연결된 Entity의 URI는 "/{collection}/uuidA/relationship"로 표시되고, 이를 접근하기위한 Permission의 Path는 "/{collection}/**"가 됩니다.

즉, "*"이 오는 경우는 바로 하위 위치까지 허용하는 Path이며, "**"이 오는 경우는 하위의 모든 하위 위치까지 허용하는 Path입니다.

![](https://raw.githubusercontent.com/baasio/develop_guide/develop/basic_concept/images/databrowser-role-permission.png)

예를 들어, 위 사진은 Guest Role의 기본 Permission이며, 세 개의 Permission이 설정되어 있는 것을 보실 수 있습니다. 이 Permission들은 Backend App을 생성하면 Guest Role에 기본으로 설정되는 Permission입니다.

이 Permission을 살펴보면, "/users"에는 Create Operation만 체크되어 있습니다. 이는 인증을 받지 않은 회원, 즉, 로그인하지 않은 상태의 회원이 가입("users" Collection에 "user" Entity를 생성)을 할 수 있도록 설정되어 있는 것입니다.

또한, "/devices"에는 Create, "/devices/*"에는 Update, Delete Operation이 등록되어 있습니다.

"/devices" 위치는 "devices" Collection을 가리키며, 푸시서비스를 위해 단말의 정보를 저장하기 위해 사용합니다. 즉, "/devices"에 Create만 되어 있는 Permission은 로그인하지 않은 회원들도 공지사항 또는 프로모션용도의 푸시 메시지를 받을 수 있도록, 단말을 등록할 수 있는 권한을 준 것입니다.

"/devices/*"의 의미는, 이미 등록된 단말 정보를 접근하기 위한 것이며, Update와 Delete Operation을 통해, 단말 정보를 갱신하거나 삭제하기위한 용도로 사용됩니다.
몇 가지 Permission의 예는 다음과 같습니다.



|Permission 설명|	Path    |	Operation|        |       |       |
|:-----------:|:------------:|:----------:|:-------:|:--------:|:--------:|
|              |         |Create	  |Read 	|Update	|Delete|
|특정 회원의 회원정보를 조회할 수 있는 권한|	/users/john.doe|     |O    |      |     |
|로그인된 현재 회원이 자신의 회원정보를 생성/조회/수정/삭제 할 수 있는 권한|	/users/${user}/**|	O	|O|O	|O|
|특정 Collection에 새로운 Entity를 생성할 수 있는 Permission|	/{collection}|	O|   |   |   |		
|특정 Collection의 Entity를 조회할 수 있는 Permission|	/{collection}/*|		|O|  |  |
|특정 Collection의 Entity를 수정/삭제할 수 있는 Permission|	/{collection}/*|   |  |O|O|
|특정 Collection과 연결되어 Relationship을 가진 Entity를 조회/수정/삭제할 수 있는 Permission|	/{collection}/**|   |O|	O|	O|
[]({'class':'table table-striped table-bordered'})

`Warning` 푸시 서비스와 Role

Backend App을 생성하면 Guest와 Default Role에 기본 설정되어 있는 Permission이 있습니다. 그 중, "/devices"의 Create Operation, "/devices/*"의 Update, Delete Operation은 푸시를 위한 Permission으로 baas.io의 푸시서비스를 이용하기 위해서는 반드시 선언되어있어야 하는 Permission이니 삭제하지 않도록 유의 바랍니다.