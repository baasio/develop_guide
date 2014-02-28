# Backend App []({'id':'backend-app'})

baas.io에서 생성한 Backend Application을 지칭합니다.

가입하면 기본 Backend App인 "sandbox"가 생성이 되어 있으며, 필요에 따라 여러개의 Backend App을 생성할 수 있습니다. "sandbox" Backend App은 보안이 처리되어 있지 않은 Backend App으로 개발 용도로 기본 생성됩니다.

각각의 Backend App은 독립적으로 관리되어, 서로 공유할 수 없습니다.

![](https://stage.baas.io/images/develop/common/backend-app.png)

`caution` "sandbox" Backend App

> "sandbox" 앱은 개발시에 사용하는 앱으로, 모든 권한이 열려있어 자유롭게 작업할 수 있습니다.

> 다만, 모든 권한이 열려있어 그대로 배포할 경우, 심각한 보안문제가 있을 수 있습니다

> 따라서, 배포할 때는 새로운 Backend App을 생성하고 Role과 Permission을 설정하여 보안에 문제가 없도록 유의하시기 바랍니다.

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


| Property | Type | Description |
|----------|----------|-------------|
|uuid|uuid|Entity의 고유한 ID이며 baas.io로부터 부여됩니다.|
|type|string|Entity의 타입이며 꼭 정의되어야 합니다. (e.g. "user")|
|created|long|Entity의 생성 시간이며 baas.io로부터 생성됩니다.(UNIX timestamp - milisec 포함)|
|modified|long|Entity의 최종 수정 시간이며 baas.io로부터 생성됩니다. (UNIX timestamp - milisec 포함)|
|name|string|Entity의 고유한 이름.|

[]({'class':'table-bordered'})

`Warning` "name" Property

"users" Collection을 제외한 모든 Collection은 "name" Property를 추가로 가질 수 있으며, 고유한 값을 가지고 있어야합니다. 이 Property의 값은 변경할 수 없으니 바뀔수 있는 용도로 사용하지 않도록 주의 바랍니다. "users" Collection은 "username" Property가 같은 용도로 사용되고 있습니다.














## Predefined vs. Custom Type []({'id':'entity-type'})

앞서 말한 바와 같이, Entity는 Type이라는 필수 Property를 가지고 있어야합니다.

이 Type은 Collection의 이름을 결정하며, Type의 복수형으로 결정됩니다. 즉, 'user'라는 Type을 가진 Entity는 'users' 라는 Collection에 속하게 됩니다.

Type도 Property와 비슷하게 baas.io에서 이미 정의하여 사용하고 있는 Predefined Type(기본 타입)과 사용자가 정의하여 사용할 수 있는 Custom Type(사용자 정의 타입)으로 구분됩니다. Custom Type을 정의할 때는 Predefined Type과 동일하게 정의하지 않도록 주의해야 합니다.

Predefined Type의 종류는 아래와 같습니다.

|Predefined Type|Predefined Collection 이름 및 위치|	용도|
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

[]({'class':'table-bordered'})

`Note` (예약)된 컬렉션

현재는 제공되고 있지 않지만, 앞으로 제공될 기능을 위해 미리 정의된 컬렉션입니다.















# Query

## 데이터 질의(Query) 하기

baas.io 는 사용자의 데이터를 검색하기 위한 2가지 방법들을 제공합니다. 

**filter Parameter**

일반적인 Query 형식은 다음과 같습니다.

```
/users?filter=querystring
```

예를 들어, 아래 요청은 이름이 '길동'인 모든 사용자를 찾습니다. (페이스북 인증을 한 사용자의 경우 필드는 facebook.first_name)

```
/users?filter=facebook.first_name%3D'길동'
```

*querystring* 값은 URL-Encoding 된 값이기 때문에 위의 Query문은 아래 내용을 의미합니다.

```
facebook.first_name="길동"
```

여러개의 필터 조합하여 적용하는 것도 가능합니다. (단, AND 연산만 가능)

```
/users?filter=facebook.first_name%3D'길동'&filter=facebook.last_name%3D'홍'
```

## SQL-like Query 사용하기|queryClause

데이터 검색을 위한 Query는 SQL-like query 를 사용하는 방식으로도 사용 가능합니다.
아래의 두 가지 Query는 같은 결과를 보여 줍니다.

```
/users?filter=birth%3D'2012-12-10'&filter=username%3D'손님'

/users?ql=select * where birth='2012-12-10' and username='손님'
```

SQL-like query 를 이용한다면 Query된 [Entity](data-model.html#entity) 중 필요한 [Property](data-model.html#property) 만을 조회할 수 있습니다.

```
/users?ql=select username, birth where birth='2012-12-10'

	{
    "list": [
        [
            "손님",
            "2012-12-10"
        ]
    ],
	}
```

**Query를 위한 연산자들**

복합 Query를 위해서 아래와 같은 연산자들을 사용할수 있습니다.

| 연산자 종류 	|연산자 설명 | 예제 |
|------------|--------------|--------------|
|데이터 타입	| 문자열 (String)	| '데이터', 유니코드 문자열 '\uFFFF'|
|			| 정수형 (Integer) | 365 , -1360|
|			| 실수형 (Float) | 3.14156 , -3.14159 , 10e10, 10E-10|
|비교 연산자 	| 보다 작다 		| '<' 또는 'lt'|
|			| 보다 작거나 같다 | '<=' 또는 'lte'|
|			| 같다			| '=' 또는 'eq'|
|			| 보다 크거나 같다 | '>=' 또는 'gte'|
|			| 보다 크다 		| '>' 또는 'gt'|
|검색 연산자	| [문자열 전문 검색 (String full text search)](#containsOperand) | property contains '[검색할 문자열]'<br> property contains '[검색할 문자열]*'|
|			| 시작 문자열 비교 | name = 'foo\*'|
|			| [위치검색](location.html#searchLocation) | location.coordinates within .5 of 37.56621 , 126.9779|
|논리 연산자 	| 결과의 교집합 	| and|
|			| 결과의 합집합		| or|
|			| 결과의 차집합		| not|
|결과의 제한	| 결과 크기 		| limit|

[]({'class':'table-bordered'})

**Sample**
* username 이 baas 인 사용자 조회하기

```
	`GET` /my-baasio-id/my-app/users?ql=select * where username = 'baas'
```

```
	`GET` /my-baasio-id/my-app/users?ql=select * where username eq 'baas'
```

* 나이(age)가 20살 이상인 경우 조회하기

```
	`GET` /my-baasio-id/my-app/users?ql=select * where age >= 20
```

* 지역(area)가 '서울'이면서 나이(age)가 20살 이상인 경우 조회하기

```
	`GET` /my-baasio-id/my-app/users?ql=select * where area = '서울' and age >= 20
```

* 이름(name)이 '김'으로 시작되는 남성(gender is 'M')인 경우 조회하기

```
	`GET` /my-baasio-id/my-app/users?ql=select * where name = '김*' and gender = 'M'
```

**결과 정렬하기**

Query 결과를 보다 편리하게 접근할 수 있도록 정렬기능을 준비하고 있습니다.
정식 지원하지 않지만, 제한적인 조건에서 사용 가능합니다. 다른 Query 조건과 함께 사용할 때 오작동 할 수 있습니다.
현재 기능 개선을 위한 개발이 진행되고 있으며 조만한 안정적인 서비스를 제공할 수 있기를 기대하고 있습니다.

|	연산자 종류	|	연산자 설명	|	예제|
|---------------|--------------|--------------|
|	정렬자	|	오름 차순 정렬	|	order by name asc |
|	|내림 차순 정렬| order by name desc|

[]({'class':'table-bordered'})

**Sample**
* username 으로 오름차순(ASC) 정렬하기

```
	`GET` /my-baasio-id/my-app/users?ql=select * order by username asc
```
* username 으로 내림차순(DESC) 정렬하기

```
	`GET` /my-baasio-id/my-app/users?ql=select * order by username desc
```

**[Predefined Property](data-model.html#predefinedProperty) 기준 정렬 하기**

|Property | 설명 | 동작여부|
|------------|--------------|--------------|
|uuid        | unique ID    | 동작하지 않음|
|type        | Entity Type  | 모두 동일하여 의미 없음|
|created     | 생성시간       | *정렬 가능*|
|modified    | 최종 수정 시간  | *정렬 가능*|

[]({'class':'table-bordered'})

**Sample**
* 가입한 순서(created)로 유저 정보 가져오기

```
	`GET` /my-baasio-id/my-app/users?ql=select * order by created asc
```
* 최근 가입한 순서(created)로 유저 정보 가져오기

```
	`GET` /my-baasio-id/my-app/users?ql=select * order by created desc
```


**limit 연산자**

limit 연산자는 정해진 갯수의 데이터를 가져올 때 사용됩니다.
가령 10개의 데이터를 가져와야 할 경우 ql 파라미터외에 limit 파라미터를 추가적으로 지정해주어야 합니다. 

**Sample**
* 5개의 게시글( boards collection )을 가져오기

```
	`GET` /my-baasio-id/my-app/boards?limit=5
```
* 12개의 한국( nation property ) 도시( cities collection )을 가져오기

```
	`GET` /my-baasio-id/my-app/cities?ql=select * where nation = 'Korea'&limit=12
```

**limit 연산자 사용시 참고사항**
>info|Note|limit 연산자 사용시 참고사항|데이터 Query시에 기본적으로 가져오는 데이터의 갯수(limit)가 10개로 한정되어 있습니다. 만일 더 많은 데이터를 가져와야 하는 경우 Query시 limit 을 최대 999개까지 설정하여 사용가능합니다.


**contains 연산자 ( FullText Search 연산자 )**

contains 의 경우 SQL의 FullText 검색과 유사한 기능입니다. 단어 단위로 검색 혹은 특정 문자가 포함된 단어 단위로 검색 됩니다. 

조건 데이터 

```
{
	  "contents" : "서울 강남구 청담동"
}
```
결과

|예시 | 동작여부|
|------------|--------------|
|contents contains '강남' | 검색결과 없음|
|contents contains '강남구' | 검색됨
|contents contains '강남\*' | 검색됨|
|contents contains '강남구\*' | 검색됨|
|contents contains '\*남\*' | 잘못된 사용법으로 검색결과 없음 (\*를 앞에는 붙일 수 없음)|

[]({'class':'table-bordered'})

**contains 연산자 사용시 유의사항**
contains 연산자는 unique property에는 사용할 수 없습니다.
[Predefined Collection](data-model.html#predefined_collection)인 users 컬렉션의 username 의 속성이나, Custom Collection의 name 속성에는 사용할 수 없습니다. 해당 경우에는 다음과 같은 에러 메시지를 리턴받을 것입니다.

```
	"error_description" : "Entity 'user' with property named 'username' is not full text indexed.  You cannot use the 'contains' operand on this field"
```
```
	"error_description": "Entity 'test' with property named 'name' is not full text indexed.  You cannot use the 'contains' operand on this field"
```

## 데이터 Query하여 변경하기

baas.io 가  제공하는 데이터 Query는 데이터 조회 뿐 아니라 변경시에도 사용할 수 있습니다.

staffes [Collection](data-model.html#collection) ([Entity-Type](data-model.html#entity_type) staff) 의 [Entity](data-model.html#entity) 중에서 name 의 값이 '홍길동'인 [Entity](data-model.html#entity) 에 새로운 [Property](data-model.html#property) 인 birthday 를 추가하려고 한다면 

```
PUT ~/staffes?filter=name%3D'홍길동' {"birthday":"1998-10-31"}
```
를 사용할 수 있습니다.
만약 조건에 일치하는 [Entity](data-model.html#entity) 가 2개 이상이라면 2개 모두 변경됩니다.


## Query 기능과 관련하여
현재 baas.io에서 제공하는 Query 기능은 일부 복합적인 조건에서 그 결과를 신뢰 할 수 없습니다.

그 밖에도 아직 검증되지 않는 Query 오동작에 대해 발견시 저희에게 해당 사항을 알려주시면(support@baas.io 혹은 [고객지원 페이지](/support)) 기능 개선에 반영하도록 하겠습니다.
확인된 Query 오류에 대해서는 현재 개발 검증 중에 있으며 개선되는대로 반영후 관련 사항에 대해서 공유할 예정입니다.

**\#Query 오류 케이스**
| 쿼리문 | 동작여부 | 설명 |
|-------|---------|-------|
| select * where gender = 'male' and name = 'bill' | OK | 2가지 조건의 and Query |
| select * where gender = 'male' or name = 'bill' | OK | 2가지 조건의 or Query |
| select * where age >= 20 and age < 40 and gender = 'female' | OK | 3가지 조건의 and Query |
| select * where name = 'a\*' and gender = 'male' and age >= 20 or gender = 'female' | FAIL | 3가지 조건의 and 및 1가지 조건의 or 복합 Query |
| select * where name = 'a\*' and gender = 'male' and age >= 20 or gender = 'female', limit 20 | OK | 조건에 의해 결과가 달라짐, 1개의 조건이라도 limit 설정된 수치보다 많은 결과가 나올 경우 제대로 동작하지 않음. |
| select * where gender = 'male' and age >= 35 or gender = 'female' order by age desc | FAIL | 2가지 조건의 and 및 1가지 조건의 or 복합 Query, 1개 필드의 sort |
| select * where gender = 'male' and age >= 35 order by name desc | FAIL | 2가지 조건의 and Query, 1개 필드의 sort, 1개의 조건이라도 limit 설정된 수치보다 많은 결과가 나올 경우 제대로 동작하지 않음. |
| select * where gender = 'male' and age >= 35 order by age desc, limit 100 | FAIL | 조건에 사용된 필드로 sort 하면 비정상 동작 |
| select * where gender = 'male' and age >= 35 order by name desc, limit 100 | OK | 조건에 사용되지 않은 필드로 sort 하면 정상 동작 |

[]({'class':'table-bordered'})

* 여러조건문과 Query 할경우 특히 1개의 조건이 limit ( default 10 ) 을 넘어갈 경우 제대로 오동작 함.
* where 조건문과 order by 의 조건에 쓰인 필드가 겹칠 경우 오동작 함.











