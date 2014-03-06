# Intro
[]({'id':'intro'})

baas.io API는 baas.io가 제공하는 Entity,Collection과 다른 데이타에 접근하기 위한 REST 기반의 구조를 제공하고 있습니다. 각 자원들은 URL 경로로 표현되며, 작성하신 앱은 이 URL에 기반하여 다양한 관리 작업들을 요청할수 있게 됩니다.

앱 내에서는 GET/POST/PUT/DELETE 와 같은 HTTP 메소드를 사용하여 각 URL로 되어있는 API를 호출하게 됩니다.

아래 테이블은 baas.io API를 이용하여 접근 가능한 앱 관련 Entity들을 표시합니다. 각 Entity명을 클릭하면 상세정보와 메소드를 볼수 있습니다.

|Entity|Collection|설명|
|:-----|:--------|:--|
|Application|/applications|Application Entity|
|User|/users|사용자 Entity|
|Group|/groups|그룹 Entity|
|Role|/roles|역할 Entity|
|File|/files|파일 Entity|
|Device|/devices|디바이스 Entity - 지원예정|
|Events and counters|/events|이벤트 와 카운터 Entity - 지원예정|
|일반용도|Collection|/|사용자 Entity|

baas.io 의 데이터 구조는 계층형 입니다. 모든 Entity의 타입에 대해서, 그 타입의 모든 Entity를 가지고 있는 Collection이 있습니다. Collection들은 앱에 속해 있고, 앱은 각 사용자에 속해 있습니다.

Collection들은 자동으로 Entity 타입의 영어 복수형 명사로 이름지어 집니다. 예를 들어, user Entity 타입은 users Collection에 저장됩니다.

일반 용도 Collection은 자신만의 Collection을 만드는 것 부터 시작합니다. 특정한 Entity 를 위한 Collection이 아니며 필요한 Entity 를 정의하고 그 Entity 를 저장할 Collection을 자유롭게 생성할 수 있습니다.

## Endpoints
[]({'id':'intro-endpoint'})

- [Application](#intro-endpoints-application)
- [Authorization](#intro-endpoints-authorization)
- [User](#intro-endpoints-user)
- [Group](#intro-endpoints-group)
- [Role](#intro-endpoints-role)
- [Push](#intro-endpoints-push)
- [File](#intro-endpoints-file)
- [Help](#intro-endpoints-help)
- [Collection](#intro-endpoints-collection)

##### Application|intro-endpoints-application

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|PUT|{baasio-id}/{app-id}|application/json|Application 정보 수정|

##### Authorization|intro-endpoints-authorization

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|<del>GET</del>|<del>{baasio-id}/{app-id}/token</del>|<del>application/json<del>|<del>Application,Application 사용자 인증하기</del> (Deprecated)|
|POST|{baasio-id}/{app-id}/token|application/json|Application,Application 사용자 인증하기|

##### User|intro-endpoints-user

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|POST|users|application/json|사용자 등록하기|
|GET|users|application/json|사용자 조회하기|
|GET|users?{query}|application/json|사용자를 쿼리로 조회하기|
|GET|users/{uuid or username or email_address}|application/json|사용자 UUID, username, email 으로 조회하기|
|PUT|users/{uuid or username or email_address}|application/json|사용자의 정보를 수정하기|
|DELETE|users/{uuid or username or email_address}|application/json|사용자의 정보를 삭제하기|
|POST|users/{uuid or username or email_address}/password|application/json|사용자의 비밀번호를 변경하기|
|POST|users/resetpw|application/json|사용자의 비밀번호를 재설정하기|
|POST|users/token|application/json|사용자의 인증 토큰 발급하기|
|POST|users/revoketokens|application/json|사용자 발급한 인증 토큰을 만료 시키기|
|POST|users/revoketoken|application/json|사용자가 발급한 인증 토큰 모두 만료 시키기|
|GET|users/{uuid or username or email_address}/activate|application/json|사용자를 활성화 하기(X)|
|GET|users/{uuid or username or email_address}/reactivate|application/json|사용자를 다시 활성화 하기(X)|
|GET|users/{uuid or username or email_address}/feed|application/json|사용자의 피드(Feed) 조회하기|
|GET|users/{uuid or username or email_address}/groups|application/json|사용자가 속한 그룹조회하기|
|POST|groups/{uuid or groupname}/users/{uuid or username}|application/json|그룹에 사용자를 추가하기|
|GET|users/{uuid or username or email_address}/roles|application/json|사용자의 롤 조회하기|
|POST|roles/{uuid}/users/{uuid or username or email_address}|application/json|사용자의 롤 추가하기|
|POST|users/{uuid or username or email_address}/{collection_name}/{collection_uuid}|application/json|사용자와 특정 Entity 관계(Connection) 설정하기|
|DELETE|users/{uuid or username or email_address}/{collection_name}/{collection_uuid}|application/json|사용자와 특정 Entity 관계(Connection) 해제하기|

##### Group|intro-endpoints-group

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|POST|groups|application/json|그룹 만들기|
|GET|groups|application/json|그룹 조회하기|
|GET|groups|application/json|그룹을 쿼리로 조회하기|
|GET|groups/{uuid or groupname}|application/json|그룹명 혹은 UUID로 조회하기|
|PUT|groups/{uuid or groupname}|application/json|그룹 정보 수정하기|
|DELETE|groups/{uuid or groupname}|application/json|그룹 삭제하기|
|POST|groups/{uuid or groupname}/users/{uuid or username}|application/json|그룹에 사용자를 추가하기|
|GET|groups/{uuid or groupname}/users|application/json|그룹에 등록된 사용자을 조회하기|
|GET|groups/{uuid or groupname}/users/{uuid or username}|application/json|그룹에 등록된 사용자를 UUID 혹은 이름으로 조회하기|
|DELETE|groups/{uuid or groupname}/users/{uuid or username}|application/json|그룹에서 사용자를 제외하기|
|GET|groups/{uuid or groupname}/feed|application/json|그룹 피드(feed) 조회하기|

##### Role|intro-endpoints-role

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|POST|roles|application/json|롤 만들기|
|GET|roles|application/json|롤 조회하기|
|GET|roles/{uuid or rolename}|application/json|롤이름 혹은 UUID로 조회하기|
|DELETE|roles/{uuid or rolename}|application/json|롤 삭제하기|
|POST|roles/{uuid or rolename}/permissions|application/json|롤에 권한 추가하기|
|POST|roles/{uuid or rolename}/permissions|application/json|롤에 권한 삭제하기|
|POST|roles/{uuid}/users/{uuid or username or email_address}|application/json|롤에 사용자 추가하기|
|GET|roles/{role_id}/users|application/json|롤에 추가된 사용자 조회하기|
|DELETE|roles/{role_id}/users/{uuid or username or email_address}|application/json|롤에 사용자 삭제하기|

##### Push|intro-endpoints-push

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|POST|pushes|application/json|Push 전송하기|
|GET|pushes|application/json|Push 전송목록 조회하기(X)|
|GET|pushes/{uuid}|application/json|Push 전송결과 UUID로 조회하기(X)|
|POST|pushes/devices|application/json|Device 등록하기|
|GET|pushes/devices|application/json|Device 정보 조회하기(X)|
|GET|pushes/devices/{uuid}|application/json|Device 정보 읽기|
|PUT|pushes/devices/{uuid}|application/json|Device 변경하기|
|DELETE|pushes/devices/{uuid}|application/json|Device 삭제하기|

##### File|intro-endpoints-file

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|POST|files|multipart/form-data|파일 엔티티 생성 및 업로드|
|POST|files|application/json|파일 엔티티 생성|
|POST|https://blob.v1.api.baas.io/../files/{entityID}|application/octet-stream|파일 업로드|
|POST|files/{entityID}/data|application/octet-stream|파일 업로드(DATA 커맨드 이용)|
|POST|{collectionName}/{entityID}/files/{entityID}|N/A|다른 컬렉션의 엔티티와 파일 엔티티 관계 맺기|
|GET|files|N/A|파일 엔티티 조회(전체)|
|GET|files?filter={filter clause}|N/A|필터를 이용한 파일 엔티티 조회|
|GET|files?ql={query clause}|N/A|질의를 이용한 파일 엔티티 조회|
|GET|files/{entityID}|N/A|파일 엔티티 조회(단일)|
|GET|https://blob.v1.api.baas.io/../files/{entityID}|N/A|파일 다운로드|
|GET|files/{entityID}/data|N/A|파일 다운로드(DATA 커맨드 이용)|
|GET|{collectionName}/{entityID}/files|N/A|다른 컬렉션의 엔티티와 관계된 파일 엔티티 조회|
|PUT|files/{entityID}|application/json|파일 엔티티 수정|
|PUT|files?filter={filter clause}|application/json|필터를 이용한 일괄 파일 엔티티 수정|
|PUT|files?ql={query clause}|application/json|질의를 이용한 일괄 파일 엔티티 수정|
|PUT|https://blob.v1.api.baas.io/../files/{entityID}|application/octet-stream|파일 교체|
|PUT|files/{entityID}/data|application/octet-stream|파일 교체(DATA 커맨드 이용)|
|DELETE|files/{entityID}|N/A|파일 삭제(단일)|
|DELETE|files?filter={filter clause}|N/A|필터를 이용한 파일 삭제|
|DELETE|files?ql={query clause}|N/A|질의를 이용한 파일 삭제|
|DELETE|{collectionName}/{entityID}/files/{entityID}|N/A|다른 컬렉션의 엔티티와 파일 엔티티 관계 끊기|

##### Help|intro-endpoints-help

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|GET|help/|application/json|고객센터 코드 조회
|POST|help/questions|application/json|문의하기
|GET|help/questions/my_list|application/json|내 문의 내역
|POST|help/helps|application/json|도움말 등록
|GET|help/helps/{uuid}|application/json|도움말 조회
|PUT|help/helps/{uuid}|application/json|도움말 수정
|DELETE|help/helps/{uuid}|application/json|도움말 삭제
|GET|help/helps?keyword={keyword}&page={page}|application/json|도움말 검색

##### Collection|intro-endpoints-collection

|메소드|uri|Content Type|설명|
|:---|:---|:---|:---|
|POST|{collection}|application/json|Collection/Entity 생성하기|
|GET|{collection}|application/json|Entity 목록 조회하기|
|GET|{collection}?{query}|application/json|쿼리를 사용하여 Entity 목록 조회하기|
|GET|{collection}/{uuid or name}|application/json|Entity 정보 조회하기|
|PUT|{collection}/{uuid or name}|application/json|Entity 정보 수정하기|
|PUT|{collection}?{query}|application/json|쿼리를 사용하여 Entity 정보 수정하기|
|GET|{collection}/{first_entity_id}/{relationship}|application/json|Entity의 Relation Entity 목록을 조회하기|
|POST|{collection}/{first_entity_id}/{relationship}/{second_entity_id}|application/json|Entity의 Relation 을 생성하고 다른 Entity를 등록하기|
|DELETE|{collection}/{first_entity_id}/{relationship}/{second_entity_id}|application/json|Entity의 Relation에서 Entity를 삭제하기|

## Error Handling
[]({'id':'intro-error-handling'})

baas.io 의 REST API 들은 일반적인 HTTP 요청과 마찬가지로 모든 요청은 status code를 가지며, 예외 상황에 대해서 좀 더 구체적인 정보를 제공하기 위해 error code 역시 제공합니다.

- [HTTP Status Codes](#intro-error-handling-statuscode)
- [Error Codes](#intro-error-handling-errorcode)

##### HTTP Status Codes|intro-error-handling-statuscode

HTTP/1.1 Status Code 표준에는 수 많은 코드가 존재하지만, baas.io 에서는 좀 더 단순화 하여 아래의 5개의 코드를 를 주로 사용합니다.

|Status Code|의미|
|:----------|:---|
|200|(OK)|성공|
|400|(Bad Request)|잘못된 요청, 요청 형식을 다시 확인하세요.|
|401|(Unauthorized)|인증이나 권한이 필요한 접근입니다.|
|404|(Not Found)|해당 리소스가 존재하지 않습니다.|
|500|(Internal Server Error)|서버 에러|

baas.io REST API 사용하는 대부분의 경우, 위의 status code 만으로도 성공/실패 여부를 확인할 수 있으며, 사용중이신 클라이언트에서 성공과 실패 callback 을 활용하실 수 있습니다.
Error Codes

HTTP Status code 가 4xx 대 이거나 500 인 경우 에러 상황에 대한 설명과 에러 코드를 포함한 다음과 같은 JSON 데이터가 전송됩니다. 개발과정에서 좀 더 자세한 에러 메시지를 확인하기 위해서 사용하실 수 있습니다.

###### Response payload (Error)

```json
{
    timestamp: 1358932094378,
    duration: 0,
    error_description: "Subject does not have permission",
    error_uuid: "325a3a47-7fbe-43c2-8ef0-bd617b61a63d",
    error_code: 202
}
```

|필드 이름|내용|
|:------|:---|
|error_description|에러에 대한 설명|
|error_uuid|고유 에러에 대한 event UUID로 각각의 에러 상황을 식별하기 위한 값|
|error_code|각 에러별 baas.io 고유 코드|

대부분의 에러는 error_description 속성을 통해 자세한 설명을 얻을 수 있으며, error_uuid 를 통해 baas.io 개발팀의 도움을 받으실 수 도 있습니다.

각 상세 에러코드의 의미는 다음과 같습니다.

##### 상세 Error code|intro-error-handling-errorcode

|이름|status code|error code|	의미|
|:---|:---------|:---------|:---|
|BAD_REQUEST_ERROR|400|100|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.|
|RESOURCE_NOT_FOUND_ERROR|404|101|요청받은 리소스가 서버에 존재하지 않습니다.|
|MISSING_REQUIRED_PROPERTY_ERROR|400|102|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|INVALID_PRECONDITION_ERROR|400|103|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.|
|NOT_IMPLEMENTED_ERROR|501|190|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.|
|AUTH_ERROR|401|200|인증 또는 권한과 관련된 문제가 발생했습니다.|
|INVALID_USERNAME_OR_PASSWORD_ERROR|401|201|잘못된 id이거나 password 입니다.|
|UNAUTHORIZED_ERROR|401|202|접근 권한이 없습니다.|
|BAD_TOKEN_ERROR|401|210|인증 토큰에 문제가 있습니다.|
|EXPIRED_TOKEN_ERROR|401|211|만료된 인증 토큰입니다.|
|PUSH_APPLICATION_NOT_ACTIVATED_ERROR|400|600|Push 기능이 활성화 되어 있지 않습니다.|
|PUSH_ERROR|400|620|Push 관련 에러가 발생했습니다.|
|RESOURCE_ALREADY_EXIST_ERROR|400|911|이미 존재하는 리소스입니다.|
|PRESERVED_RESOURCE_ERROR|400|912|예약된 리소스 이름입니다.|
|DUPLICATED_UNIQUE_PROPERTY_ERROR|400|913|유일해야하는 속성을 중복해서 가질 수 없습니다.|
|QUERY_PARSE_ERROR|400|915|잘못된 쿼리입니다.|
|UNKNOWN_ERROR|500|-100|알수 없는 에러입니다.|



# Application
[]({'id':'application'})

Application Entity는 baas.io 포털의 백엔드 앱 생성 기능을 통해서 생성되는 Entity입니다. Application Entity는 아래와 같은 주소를 통해서 접근이 가능합니다.

```
https://api.baas.io/{baasio-id}/{app-id}
```

대부분의 앱에선 이 Entity에 직접 접근할 필요는 없습니다. 관리목적으로 서버사이드 웹앱을 만들거나, 또한 모바일 개발자가 자신의 앱을 관리하기 위한 관리자앱을 만들 때 사용할수 있습니다.

#### Application을 위한 시스템 기본 속성(Property)

시스템에서 미리 설정된 기본 속성들은 아래와 같습니다. 이 속성외에 추가적으로 Application을 위한 특정 데이터 속성을 마음대로 추가하실수도 있습니다.

|속성|타입|설명|
|:--|:--|:--|
|uuid|UUID|Application의 유일한 Entity ID|
|type|string|"application"|
|created|long|Entity 생성 일자 (UNIX timestamp)|
|modified|long|Entity 최종 수정일자 (UNIX timestamp)|
|name|string|Application 이름/ID (필수)|
|title|string|Application의 제목|
|description|string|Application의 설명|
|activated|boolean|Application이 활성 상태인가?|
|disabled|boolean|Application이 관리목적으로 비활성화 된 상태인가.|
|allowOpenRegistration|boolean|Application에 아무 사용자나 등록이 가능한가|
|registrationRequiresEmailConfirmation|boolean|사용자 등록시 이메일 확인 필요 여부|
|registrationRequiresAdminApproval|boolean|사용자 등록시 관리자 승인 필요 여부|
|accesstokenttl|long|Application 억세스 토큰의 TTL값|

#### Application의 기본 Collection

|Collection|Entity Type|설명|
|:--------:|:--------:|:--:|
|users|user|앱내 사용자 Collection|
|groups|group|앱내 그룹 Collection|
|devices|device|서비스내 등록된 기기들에 대한 Collection|



# Users
[]({'id':'users'})

사용자의 정보(아이디, 이메일, 이름, 주소 등 )를 앱에서 관리하길 원한다면, 아래의 API 를 사용하면 쉽게 적용할 수 있습니다.

## 사용자 등록하기
[]({'id':'postUsers'})

##### Request URI

```
`POST` /{baasio-id}/{app-id}/users
```

##### Parameters

|파라미터|설명|
|:------:|:----|
|baasio-id|회원 ID|
|app-id|앱 ID| 

##### Request Body

User Entity는 미리 정의한 스키마가 있으니 자세한 정보는 [User Entity](#userEntity)에서 살펴보시기 바랍니다. 사용자를 등록하기 위해서는 최소한의 정보가 필요하며 반드시 포함되어야 할 정보는 username 입니다. User 를 등록할 때 password 를 등록하지 않으면 user token 을 발급 받을 수 없습니다. 주의하실 점은 처음에 password 가 설정되지 않으면 다시는 password 를 설정할 수 없습니다.


```json
{
	"username":"bob",
	"email":"bob@company.com",
	"password":"pass1234"
}
```

##### Request URI

```
`POST` https://api.baas.io/my-baasio-id/my-app-id/users

```

##### Request Body

```json
{
	"username":"bob",
	"email":"bob@company.com"
}
```

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "post",
	"application": "81c5c8b8-136a-11e2-8ed5-4061867ca222",
	"params": {},
	"path": "/users",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/users",
	"entities": [
		{
			"uuid": "37a71adc-136c-11e2-8ed5-4061867ca222",
			"type": "user",
			"created": 1349936628563,
			"modified": 1349936628563,
			"activated": true,
			"email": "bob@company.com",
			"metadata": {
				"path": "/users/37a71adc-136c-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/activities",
					"devices": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/devices",
					"feed": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/feed",
					"groups": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/groups",
					"roles": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/roles",
					"following": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/following",
					"followers": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/followers"
				}
			},
			"picture": "https://www.gravatar.com/avatar/217195a2032ff3c42cf8711bd6334b0f",
			"username": "bob"
		}
	],
	"timestamp": 1349936628483,
	"duration": 180,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -d '{\"username\":\"bob\",\"email\":\"bob@company.com\"}' "https://api.baas.io/my-baasio-id/my-app-id/users"
```

## 사용자 조회하기
[]({'id':'getUsers'})

##### Request URI

```
`GET` /{baasio-id}/{app-id}/users
```

##### Parameters

|파라미터|설명|
|:----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|


##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "get",
	"application": "81c5c8b8-136a-11e2-8ed5-4061867ca222",
	"params": {},
	"path": "/users",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/users",
	"entities": [
		{
			"uuid": "37a71adc-136c-11e2-8ed5-4061867ca222",
			"type": "user",
			"created": 1349936628563,
			"modified": 1349938801498,
			"activated": false,
			"email": "bob@company.com",
			"metadata": {
				"path": "/users/37a71adc-136c-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/activities",
					"devices": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/devices",
					"feed": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/feed",
					"groups": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/groups",
					"roles": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/roles",
					"following": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/following",
					"followers": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/followers"
				}
			},
			"picture": "https://www.gravatar.com/avatar/217195a2032ff3c42cf8711bd6334b0f",
			"username": "bob"
		},
		{
			"uuid": "3169497e-136e-11e2-8ed5-4061867ca222",
			"type": "user",
			"created": 1349937477085,
			"modified": 1349937477085,
			"activated": true,
			"email": "jay@company.com",
			"metadata": {
				"path": "/users/3169497e-136e-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/3169497e-136e-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/3169497e-136e-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/3169497e-136e-11e2-8ed5-4061867ca222/activities",
					"devices": "/users/3169497e-136e-11e2-8ed5-4061867ca222/devices",
					"feed": "/users/3169497e-136e-11e2-8ed5-4061867ca222/feed",
					"groups": "/users/3169497e-136e-11e2-8ed5-4061867ca222/groups",
					"roles": "/users/3169497e-136e-11e2-8ed5-4061867ca222/roles",
					"following": "/users/3169497e-136e-11e2-8ed5-4061867ca222/following",
					"followers": "/users/3169497e-136e-11e2-8ed5-4061867ca222/followers"
				}
			},
			"picture": "https://www.gravatar.com/avatar/a3acce29c6ec4882fa6fb0983498817d",
			"username": "jay"
		}
	],
	"timestamp": 1349939158343,
	"duration": 73,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/users"
```

## 사용자를 쿼리로 조회하기
[]({'id':'getUsersByQuery'})

[사용자 조회하기](users.html#getUsers) API 에서 확인한 것처럼 등록된 사용자를 조회할 수 있습니다. 특정한 사용자를 조회하고 싶을 때, 데이터 질의 방법을 사용하여 사용자를 조회할 수 있습니다. 데이터 질의 방법은 [데이터 질의하기](../devguide/query.html)에서 자세한 사항을 확인하세요.

##### Request URI

```
`GET` /{baasio-id}/{app-id}/users?{query}
```

##### URL Parameters

|파라미터|설명|
|:----------:|:------------
|baasio-id	| 회원 ID|
|app-id|앱 ID|

##### Query Parmeters

|파라미터|자료형|기본값|필수|설명|
|:-------:|:-------|:------:|:--------:|:----------|
|ql|문자열 (String)|none|no|질의어|
|filter|문자열 (String)|none|no|연산 조건에 따른 필터|
|cursor|문자열 (String)||no|페이징을 위한 질의 결과셋의 엔코딩된 값|
|limit|정수형 (Integer)|10|no|조회 결과의 데이터 개수 제한|

##### Response

- 성공
	- Code: 200 
	- Contents:
	

```json
{
	"action": "get",
	"application": "81c5c8b8-136a-11e2-8ed5-4061867ca222",
	"params" : {
		"ql" : [ "select * where flag='1'" ]
	},
	"path": "/users",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/users",
	"entities": [
		{
			"uuid": "37a71adc-136c-11e2-8ed5-4061867ca222",
			"type": "user",
			"created": 1349936628563,
			"modified": 1349938801498,
			"activated": false,
			"email": "bob@company.com",
			"metadata": {
				"path": "/users/37a71adc-136c-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/activities",
					"devices": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/devices",
					"feed": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/feed",
					"groups": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/groups",
					"roles": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/roles",
					"following": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/following",
					"followers": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/followers"
				}
			},
			"picture": "https://www.gravatar.com/avatar/217195a2032ff3c42cf8711bd6334b0f",
			"username": "bob",
			"flag":"1"
		},
		{
			"uuid": "3169497e-136e-11e2-8ed5-4061867ca222",
			"type": "user",
			"created": 1349937477085,
			"modified": 1349937477085,
			"activated": true,
			"email": "jay@company.com",
			"metadata": {
				"path": "/users/3169497e-136e-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/3169497e-136e-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/3169497e-136e-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/3169497e-136e-11e2-8ed5-4061867ca222/activities",
					"devices": "/users/3169497e-136e-11e2-8ed5-4061867ca222/devices",
					"feed": "/users/3169497e-136e-11e2-8ed5-4061867ca222/feed",
					"groups": "/users/3169497e-136e-11e2-8ed5-4061867ca222/groups",
					"roles": "/users/3169497e-136e-11e2-8ed5-4061867ca222/roles",
					"following": "/users/3169497e-136e-11e2-8ed5-4061867ca222/following",
					"followers": "/users/3169497e-136e-11e2-8ed5-4061867ca222/followers"
				}
			},
			"picture": "https://www.gravatar.com/avatar/a3acce29c6ec4882fa6fb0983498817d",
			"username": "jay",
			"flag":"1"
		}
	],
	"timestamp": 1349939158343,
	"duration": 73,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/users?ql=select * where flag='1'"
```
	
 

## 사용자 UUID, username, email 으로 조회하기
[]({'id':'getUser'})

##### Request URI

```
`GET` /{baasio-id}/{app-id}/users/{uuid or username or email_address}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 혹은 email|


##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json
{
	"action": "get",
	"application": "81c5c8b8-136a-11e2-8ed5-4061867ca222",
	"params": {},
	"path": "/users",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/users",
	"entities": [
		{
			"uuid": "37a71adc-136c-11e2-8ed5-4061867ca222",
			"type": "user",
			"created": 1349936628563,
			"modified": 1349938801498,
			"activated": false,
			"email": "bob@company.com",
			"metadata": {
				"path": "/users/37a71adc-136c-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/activities",
					"devices": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/devices",
					"feed": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/feed",
					"groups": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/groups",
					"roles": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/roles",
					"following": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/following",
					"followers": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/followers"
				}
			},
			"picture": "https://www.gravatar.com/avatar/217195a2032ff3c42cf8711bd6334b0f",
			"username": "bob"
		}
	],
	"timestamp": 1349939158343,
	"duration": 73,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/users/{user_uuid or username}"
```

 

## 사용자의 정보를 수정하기
[]({'id':'putUser'})

##### Request URI

```
`PUT` /{baasio-id}/{app-id}/users/{uuid or username or email_address}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 혹은 email|

##### Request Body

User Entity는 미리 정의한 스키마가 있으니 자세한 정보는  [User Entity](#userEntity)에서 살펴보시면 됩니다. 예시는 사용자를 활성화, 비활성화 정보를 담당하는 프로퍼티(Property)를 변경해보겠습니다.

```json
{
	"activated":false
}
```

##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json
{
	"action": "put",
	"application": "81c5c8b8-136a-11e2-8ed5-4061867ca222",
	"params": {},
	"path": "/users",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/users",
	"entities": [
		{
			"uuid": "37a71adc-136c-11e2-8ed5-4061867ca222",
			"type": "user",
			"created": 1349936628563,
			"modified": 1349938801498,
			"activated": false,
			"email": "bob@company.com",
			"metadata": {
				"path": "/users/37a71adc-136c-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/activities",
					"devices": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/devices",
					"feed": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/feed",
					"groups": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/groups",
					"roles": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/roles",
					"following": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/following",
					"followers": "/users/37a71adc-136c-11e2-8ed5-4061867ca222/followers"
				}
			},
			"picture": "https://www.gravatar.com/avatar/217195a2032ff3c42cf8711bd6334b0f",
			"username": "bob"
		}
	],
	"timestamp": 1349938801443,
	"duration": 69,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```


- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example

```
curl -X PUT -i -H "Authorization: Bearer {auth_key}" -d '{\"activated\":false }' "https://api.baas.io/my-baasio-id/my-app-id/users/{user_uuid or username}"
```

 

## 사용자의 정보를 삭제하기
[]({'id':'deleteUser'})

##### Request URI

```
`DELETE` /{baasio-id}/{app-id}/users/{user_uuid or username}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|user_uuid or username|사용자 등록 후 반환 받은 UUID 혹은 username|

##### Response

- 성공
	
	- Code: 200 
	- Contents:

```json   
{
	"action": "delete",
	"application": "81c5c8b8-136a-11e2-8ed5-4061867ca222",
	"params": {},
	"path": "/users",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/users",
	"entities": [
		{
			"uuid": "81c5c8b8-136a-11e2-8ed5-4061867ca222",
			"type": "application",
			"name": "my-org/my-app",
			"created": 1349935893928,
			"modified": 1349935893928,
			"metadata": {
				"path": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222",
				"sets": {
					"rolenames": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/rolenames",
					"permissions": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/activities",
					"assets": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/assets",
					"devices": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/devices",
					"events": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/events",
					"files": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/files",
					"folders": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/folders",
					"groups": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/groups",
					"users": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/users",
					"following": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/following",
					"followers": "/users/81c5c8b8-136a-11e2-8ed5-4061867ca222/followers"
				}
			}
		}
	],
	"timestamp": 1349939292961,
	"duration": 167,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/users/{user_uuid or username}"
```

 

## 사용자의 비밀번호를 변경하기
[]({'id':'putPassword'})

[사용자 등록](#postUsers) 시 등록한 사용자의 비밀번호를 변경하려면 해당 API를 이용하면 됩니다. 해당 API는 기존 비밀번호를 알고 있는 경우를 전제로 합니다. 만약, 사용자의 기존 비밀번호를 모른다면 [사용자의 비밀번호를 재설정하기](#resetpassword) 방법으로 비밀번호를 설정하셔야 합니다.

##### Request URI

```
`POST` /{baasio-id}/{app-id}/users/{user_id}/password
```
	
```json
{
	"oldpassword":"old",
	"newpassword":"new"
}
```
	
##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 또는 email|
|oldpassword|변경 전 비밀번호|
|newpassword|변경 할 비밀번호|

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "set user password",
	"timestamp": 1357625390782,
	"duration": 44
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -H "https://api.baas.io/my-baasio-id/my-app-id/users/{user_id}/password"
```


 

## 사용자의 비밀번호를 재설정하기
[]({'id':'resetPassword'})

[사용자 등록](#postUsers) 시에 *이메일 정보를 받지 않은 사용자는 비밀번호를 재설정할 수 없습니다.* 따라서, [사용자 수정 하기](#putUser) 방법으로 이메일 정보를 수정 이용하면 됩니다.

##### 사용자 비밀번호 재설정 단계
1. 사용자의 비밀번호 초기화 API 호출
2. 패스워드를 리셋을 하기 위한 초기화 웹페이지 주소가 함께 포함된 메일 발송
3. 사용자가 baas.io 사이트로부터 메일을 수신 후 웹페이지 클릭
4. 사용자가 초기화할 비밀번호를 입력 한 후 제출 버튼을 누름

##### Request URI

```
`POST` /{baasio-id}/{app-id}/users/{uuid or username or email_address}/resetpw
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 또는 email|

##### Response

- 성공
	- Code: 200 
	- Contents:
	
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "https://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Reset Password</title>
		<link rel="stylesheet" type="text/css" href="../../../css/styles.css" />
	</head>
	<body>
		<p>Email with instructions for password reset sent to bob@company.com</p>
	</body>
</html>
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -H "Content-Type: application/x-www-form-urlencoded" "https://api.baas.io/my-baasio-id/my-app-id/users/{user_id}/resetpw"
```

## 사용자의 인증 토큰 발급하기
[]({'id':'token'})

baas.io 의 Authentication 은 OAuth 2.0 에 기반하고 있습니다. 해당 API는 [인증 시스템](../concept/authentication.html) 기반 하에서 인증 토큰을 발급받을 수 있습니다. 더 자세한 설명은 [인증 시스템](../concept/authentication.html)에서 확인하세요.

##### Request URI

```
`POST` /{baasio-id}/{app-id}/token
```
	
```json
{
	"grant_type":"password",
	"username":"{uuid or username or email_address}",
	"password":"{password}"
}
```
	
##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 또는 email|
|password|사용자의 비밀번호|
 
##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"access_token": "5wuGd-lcEeCUBwBQVsAACA:F8zeMOlcEeCUBwBQVsAACA:YXU6AAABMq0hdy4Lh0ewmmnOWOR-DaepCrpWx9oPmw",
	"expires_in": 86400,
	"user": {
		"uuid": "e70b8677-e95c-11e0-9407-005056c00008",
		"type": "user",
		"username": "bob",
		"email": "bob@company.com",
		"activated": true,
		"created": 1317164604367013,
		"modified": 1317164604367013
	}
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
	
```
curl -X POST -i -d '{\"grant_type\":\"password\",\"username\":\"bob@company.com\",\"password\":\"password\"}' "https://api.baas.io/my-baasio-id/my-app-id/token"
```


 
	
## 사용자 발급한 인증 토큰을 만료 시키기
[]({'id':'revokekoken'})

baas.io 의 Authentication 은 OAuth 2.0 에 기반하고 있습니다. 해당 API는 [인증 시스템](../concept/authentication.html) 기반 하에 발급받은 개별 인증 토큰을 만료시킬 수 있습니다. 인증 토큰 만료는 로그아웃 처리라고 생각하시면 편할듯 합니다. 만약 사용자가 발급받은 모든 인증 토큰을 만료하려면 [사용자가 발급한 인증 토큰 모두 만료 시키기](#revoketokens) API 를 사용하세요. 인증시스템의 자세한 설명은 [인증 시스템](../concept/authentication.html)에서 확인하세요.

##### Request URI

```
`POST` /{baasio-id}/{app-id}/users/{uuid or username or email_address}/revoketoken
```
	
```json
{
	"token":"{token}"
}
```
	
##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 또는 email|
|token|만료시킬 token|
 
##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json
{
	"action": "revoked user token",
	"timestamp": 1357625390782,
	"duration": 44
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
	
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -d '{\"token\":\"{token}\"}' "https://api.baas.io/my-baasio-id/my-app-id/users/{uuid or username or email_address}/revoketoken"
```

## 사용자가 발급한 인증 토큰 모두 만료 시키기
[]({'id':'revoketokens'})

baas.io 의 Authentication 은 OAuth 2.0 에 기반하고 있습니다. 해당 API는 [인증 시스템](../concept/authentication.html) 기반 하에서 발급 받은 인증 토큰을 모두 만료시킬 수 있습니다. 만약 1개의 인증 토큰을 만료하려면 [사용자 발급한 토큰을 만료 시키기](#revoketoken) API 를 사용하면 됩니다. 인증시스템의 자세한 설명은 [인증 시스템](../concept/authentication.html)에서 확인하세요.

##### Request URI

```
`POST` /{baasio-id}/{app-id}/users/{uuid or username or email_address}/revoketokens
```
 
##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 또는 email|

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "revoked user tokens",
	"timestamp": 1357625390782,
	"duration": 44
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
	
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/users/{uuid or username or email_address}/revoketokens"
```

## 사용자가 속한 그룹조회하기
[]({'id':'getGroups'})

##### Request URI

```
`GET` /users/{uuid or username or email_address}/groups
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 또는 email|

##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json
{
  "action": "get",
  "application": "8e59b1fa-18e0-11e2-a311-4061867ca222",
  "params": {},
  "path": "/users/eda4b8c1-1ce5-11e2-9b13-4061867ca222/groups",
  "uri": "https://api.baas.io/my-baasio-id/test//users/eda4b8c1-1ce5-11e2-9b13-4061867ca222/groups",
  "entities": [
	{
	  "uuid": "f51a6aab-1cdf-11e2-9b13-4061867ca222",
	  "type": "user",
	  "name": "bob",
	  "created": 1350975898997,
	  "modified": 1350975898997,
	  "activated": true,
	  "email": "bob@mail.com",
	  "metadata": {
		"path": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222",
		"sets": {
		  "rolenames": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/rolenames",
		  "permissions": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/permissions"
		},
		"collections": {
		  "activities": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/activities",
		  "devices": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/devices",
		  "feed": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/feed",
		  "groups": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/groups",
		  "roles": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/roles",
		  "following": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/following",
		  "followers": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/followers"
		}
	  },
	  "picture": "https://www.gravatar.com/avatar/b150400a18767d0c9b0c24672bc3204f",
	  "username": "realbeast"
	}
  ],
  "timestamp": 1350978519878,
  "duration": 79,
  "organization": "my-baasio-id",
  "applicationName": "test"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example

```
curl -X GET -i -H "Authorization: Bearer {auth_key}" -d "https://api.baas.io/my-baasio-id/my-app-id/users/{uuid or username or email_address}/groups"
```


## 그룹에 사용자를 추가하기
[]({'id':'postGroups'})

해당기능은 Group API [그룹에 사용자를 추가하기](groups.html#postGroupUser) 에서 확인하세요.


## 사용자의 롤 조회하기
[]({'id':'getRoles'})

##### Request URI

```
`GET` /{baasio-id}/{app-id}/users/{uuid or username or email_address}/roles
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|uuid or username or email_address|사용자 등록 후 반환 받은 UUID 혹은 username 또는 email|

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "get",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/users/70f39f36-1825-379d-8385-7a7fbe9ec741/roles",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/users/70f39f36-1825-379d-8385-7a7fbe9ec741/roles",
	"entities": [
		{
			"uuid": "70f39f36-1825-379d-8385-7a7fbe9ec74a",
			"type": "role",
			"name": "admin",
			"created": 1349940834371,
			"modified": 1349940834371,
			"inactivity": 0,
			"metadata": {
				"path": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a",
				"sets": {
					"permissions": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/permissions"
				},
				"collections": {
					"groups": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/groups",
					"users": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/users"
				}
			},
			"roleName": "admin",
			"title": "Administrator"
		}
	],
	"timestamp": 1350005054235,
	"duration": 163,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.	
	
##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/users/{uuid or username or email_address}/roles"
```
	
## 사용자의 롤 추가하기
[]({'id':'postRoleUser'})

롤과 사용자와의 관계를 설정할 수 있습니다. 특정 사용자에서 롤을 등록하는 경우는 Role API [롤에 사용자 추가하기](roles.html#) 에서 확인하세요.


## 사용자와 특정 Entity 관계(Connection) 설정하기
[]({'id':'postConnection'})

Collections 들은 서로간의 관계(Connection)를 만들 수 있습니다. 예를들어, 사용자 로그인 기반의 음악앱을 만든다고 하였을 때, Collection(collection)은 users, musics 2개의 Collection을 생각할 수 있겠죠.

Users는 기본 Collection이기 때문에 생성할 필요는 없으며, musics는 새로운 Collection이기 때문에 Collection 생성 API로 새로운 Collection을 생성(참고. [Collection 가이드 페이지](collection.html))하고, 새로운 음악 정보를 만들 것입니다.

##### Request URI

```
`POST` /{baasio-id}/{app-id}/musics
```


##### Request Body

```json
{
	"artist":"psy",
	"name":"Gangnam Style"
}
```
	
##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "post",
	"application": "8e59b1fa-18e0-11e2-a311-4061867ca222",
	"params": {},
	"path": "/musics",
	"uri": "https://api.baas.io/my-baasio-id/test/musics",
	"entities": [
		{
			"uuid": "2e521eb4-1cdd-11e2-9b13-4061867ca222",
			"type": "music",
			"name": "Gangnam Style",
			"created": 1350974706502,
			"modified": 1350974706502,
			"artist": "psy",
			"metadata": {
				"path": "/musics/2e521eb4-1cdd-11e2-9b13-4061867ca222"
			}
		}
	],
	"timestamp": 1350974706496,
	"duration": 38,
	"organization": "my-baasio-id",
	"applicationName": "test"
}
```


그럼, 음악 앱에서 사용자가 음악을 구매하는 기능을 만들고 싶다고 생각해보죠. 사용자가 곡을 구매하였을 때 musics, users 간의 관계(Connection) 를 설정해야지 내가 구매한 음악정보만 불러 올 수 있겠죠?

따라서, 두 Collection(Collections) 간에 관계를 만들어줘야 합니다. 이럴 때 아래의 API를 활용하면 됩니다. 음악에서는 users, musics 두 Collection 간의 관계를 설정하려면 다음과 같이 요청하면 됩니다.


```
`POST` /{baasio-id}/{app-id}/users/{user_uuid}/musics/{music_uuid}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection_name|Users와 관계를 맺을 Collection 이름|
|collection_uuid|Users와 관계를 맺을 Collection 에 저장된 Entity UUID|
 
	
##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json
{
	"action": "post",
	"application": "8e59b1fa-18e0-11e2-a311-4061867ca222",
	"params": {},
	"path": "/users/0b455770-1cdd-11e2-9b13-4061867ca222/musics",
	"uri": "https://api.baas.io/my-baasio-id/test/users/0b455770-1cdd-11e2-9b13-4061867ca222/musics",
	"entities": [
		{
			"uuid": "2e521eb4-1cdd-11e2-9b13-4061867ca222",
			"type": "music",
			"name": "Gangnam Style",
			"created": 1350974706502,
			"modified": 1350974706502,
			"artist": "psy",
			"metadata": {
				"path": "/users/0b455770-1cdd-11e2-9b13-4061867ca222/musics/2e521eb4-1cdd-11e2-9b13-4061867ca222"
			}
		}
	],
	"timestamp": 1350975377070,
	"duration": 43,
	"organization": "my-baasio-id",
	"applicationName": "test"
}
```

- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -H "Content-Type: application/x-www-form-urlencoded" "https://api.baas.io/my-baasio-id/my-app-id/users/{uuid or username or email_address}/{collection_name}/{collection_uuid}"
```

## 사용자와 특정 Entity 관계(Connection) 해제하기
[]({'id':'deleteConnection'})

Collections 들은 서로간의 관계(Connection)를 해제 할 수 있습니다. 또한, 관계를 맺은 Collection 한쪽의 Entity가 삭제 되었을 시에 자동으로 이 관계(Connection)는 해제됩니다.

##### Request URI
	
```
'DELETE' /{baasio-id}/{app-id}/users/{uuid or username or email_address}/{collection_name}/{collection_uuid}
```
 
##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection_name|Users와 관계를 맺을 Collection 이름|
|collection_uuid|Users와 관계를 맺을 Collection 에 저장된 Entity UUID|
 
	
##### Response

- 성공
	- Code: 200 
	- Contents:

```json  
{
	"action": "delete",
	"application": "8e59b1fa-18e0-11e2-a311-4061867ca222",
	"params": {},
	"path": "/users/0b455770-1cdd-11e2-9b13-4061867ca222/musics",
	"uri": "https://api.baas.io/my-baasio-id/test/users/0b455770-1cdd-11e2-9b13-4061867ca222/musics",
	"entities": [
		{
			"uuid": "2e521eb4-1cdd-11e2-9b13-4061867ca222",
			"type": "music",
			"name": "Gangnam Style",
			"created": 1350974706502,
			"modified": 1350974706502,
			"artist": "psy",
			"metadata": 
				"path": "/users/0b455770-1cdd-11e2-9b13-4061867ca222/musics/2e521eb4-1cdd-11e2-9b13-4061867ca222"
			}
		}
	],

	"timestamp": 1350975377070,
	"duration": 43,
	"organization": "my-baasio-id",
	"applicationName": "test"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example

```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" -H "Content-Type: application/x-www-form-urlencoded" "https://api.baas.io/my-baasio-id/my-app-id/users/{uuid or username or email_address}/{collection_name}/{collection_uuid}"
```


## User Entity
[]({'id':'userEntity'})

##### User 기본 속성(Property)

|속성|형식|설명|
|:----------:|:----------:|:-----------|
|uuid|UUID|User 유일한 Entity ID|
|type|string|"user"|
|created|long|Entity 생성 일자 (UNIX timestamp)|
|modified|long|Entity 최종 수정일자 (UNIX timestamp)|
|username|string|회원 이름/ID (필수)|
|email|string|이메일|
|name|string|이름|
|activated|boolean|사용자 승인여부 ( 현재는 바로 승인처리 됨 )|
|disabled|boolean|관리적으로 해당 사용자를 비활성화 시키는 경우 사용|
|firstname|string|사용자 first 이름|
|middlename|string|사용자 middle 이름|
|lastname|string|사용자 last 이름|
|picture|string|사용자 사진 ( 이메일 입력시 gravatar.com 연동 후 사진을 자동으로 연결함 )|

##### User 기본 Set

|Set|형식|설명|
|:-----------:|:-----------:|:----------|
|connections|string|관계리스트|
|rolenames|string|롤(Role) 리스트 - 참고.[롤(Roles)](roles.html)|
|permissions|string|퍼미션 리스트|
|credentials|string|credentials 리스트|

##### User 기본 Collection

User Entity 에서는 기본으로 제공하는 Collection과의 관계 설정을 위해서 아래의 값들을 미리 가지고 있습니다.
참고.[사용자와 특정 Entity(Collection) 관계(Connection) 설정하기](#postConnection)

|Collection|형식|설명|
|:----------:|:----------:|:------------|
|groups|group|그룹과의 관계들|
|devices|device|디바이스와 관계들|
|activities|activity|활동과의 관계들|
|feed|activity|개인적인 알림들|
|roles|role|롤(Role) 리스트|









# Collection
[]({'id':'collection'})

baas.io의 Data 서비스는 Collection과 Entity 그리고 Entity 간의 Relation으로 이루어진다. 
Entity 는 특정 Collection에 존재하고 각 Entity는 Relation이 형성될 수 있다.
실제로 User 서비스의 Follower/Following/Devices/Group 등도 Relation에 해당한다.
물론 User 서비스의 Follower/Following/Devices/Group은 baas.io가 미리 준비한 특별한 Relation이다.


## Collection/Entity 생성하기
[]({'id':'postCollection'})

특정 Collection을 생성한다. Body 에 Entity 정보가 있다면 생성된 Collection 에 Entity를 등록한다.

##### Request URI

```
`POST`  /{baasio-id}/{app-id}/{collection}
```

  
##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|

##### Request Body

```json
{
	"foo": "bar",
	"a": {
	  	"b": 1,
	  	"c": 2
	}
}
```
    

##### Response

- 성공
	- Code: 200 
	- Contents:

```javascript
{
	"action": "post",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization",
	"entities":  [
	   {
	    "uuid": "89434a5b-1278-11e2-8553-02e81ac5a17b",
	    "type": "foo",
	    "created": 1349831968280,
	    "modified": 1349831968280,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/89434a5b-1278-11e2-8553-02e81ac5a17b"
	    }
	  }
	],
	"timestamp": 1349831968251,
	"duration": 53,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 
- 에러
	
	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```javascript
$.ajax({
	url: "/test-organization/test-apps/foo",
	dataType: "json",
	data : { 
		{
			"foo": "bar",
			"a": {
			    "b": 1,
			    "c": 2
			}
		}
	},
	type : "POST",
	success : function(r) {
	  console.log(r);
	}
});
```

## Entity 목록 조회하기
[]({'id':'getColection'})

모든 Entity를 제한 갯수까지 리턴한다.

##### Request URI

```       
`GET`  /{baasio-id}/{app-id}/{collection}
```


##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|


##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "get",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization",
	"entities":  [
	   {
	    "uuid": "89434a5b-1278-11e2-8553-02e81ac5a17b",
	    "type": "foo",
	    "created": 1349831968280,
	    "modified": 1349831968280,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/89434a5b-1278-11e2-8553-02e81ac5a17b"
	    }
	  }
	],
	"timestamp": 1349834133229,
	"duration": 59,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 	
 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 예외사항 처리](../rest/errors.html)를 살펴보세요.
	  
##### Example

```javascript
$.ajax({
	url: "/test-organization/test-app/foo",
	dataType: "json",
	data : 
	},
	type : "GET",
	success : function(r) {
	  console.log(r);
	}
});
```	

## Query를 사용하여 Collection의 Entity 목록 조회하기
[]({'id':'getCollections'})

Query의 조건에 맞는 Entity 목록을 리턴한다.

##### Request URI
       
```
`GET`  /{baasio-id}/{app-id}/{collection}?{query}
```


##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|


##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "get",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization",
	"entities":  [
	   {
	    "uuid": "89434a5b-1278-11e2-8553-02e81ac5a17b",
	    "type": "foo",
	    "created": 1349831968280,
	    "modified": 1349831968280,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/89434a5b-1278-11e2-8553-02e81ac5a17b"
	    }
	  }
	],
	"timestamp": 1349834133229,
	"duration": 59,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 	
 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 예외사항 처리](../rest/errors.html)를 살펴보세요.
	  
##### Example

```javascript
	$.ajax({
		url: "/test-organization/test-app/foo",
		dataType: "json",
		data : 
		},
		type : "GET",
		success : function(r) {
		  console.log(r);
		}
	});          
```

## Entity 정보 조회하기
[]({'id':'getEntity'})

UUID나 name 속성으로 찾은 Entity를 리턴한다.

##### Request URI

```
`GET`  /{baasio-id}/{app-id}/{collection}/{entity_id}
```

##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|
|entity_id|조회할 Entity uuid|

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "get",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization",
	"entities":  [
	   {
	    "uuid": "89434a5b-1278-11e2-8553-02e81ac5a17b",
	    "type": "foo",
	    "created": 1349831968280,
	    "modified": 1349831968280,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/89434a5b-1278-11e2-8553-02e81ac5a17b"
	    }
	  }
	],
	"timestamp": 1349834312776,
	"duration": 36,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 	 
- 에러
	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```javascript
$.ajax({
	url: "/test-organization/test-app/foo/89434a5b-1278-11e2-8553-02e81ac5a17b",
	dataType: "json",
	data : 
	},
	type : "GET",
	success : function(r) {
	  console.log(r);
	}
});
```

## Entity 정보 수정하기
[]({'id':'putEntity'})

Collection의 Entity를 수정한다. 새로운 속성은 Entity에 저장된다.

##### Request URI
       
```
`PUT`  /{baasio-id}/{app-id}/{collection}/{entity_id}
```

##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|
|entity_id|조회할 Entity uuid|


##### Request Body

```json
{
	"alpha": "bravo"
}
```


##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "put",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization",
	"entities":  [
	   {
	    "uuid": "89434a5b-1278-11e2-8553-02e81ac5a17b",
	    "type": "foo",
	    "created": 1349831968280,
	    "modified": 1349834674960,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "alpha": "bravo",
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/89434a5b-1278-11e2-8553-02e81ac5a17b"
	    }
	  }
	],
	"timestamp": 1349834674944,
	"duration": 87,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 
 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example
  
```javascript
$.ajax({
	url: "/test-organization/test-app/foo/89434a5b-1278-11e2-8553-02e81ac5a17b",
	dataType: "json",
	data : {
		  "alpha": "bravo"
		},
	type : "PUT",
	success : function(r) {
	  console.log(r);
	}
});
```

----

## Query를 사용하여 Entity 정보 수정하기
[]({'id':'putEntities'})

Query의 조건에 맞는 Collection의 Entity를 수정한다. 새로운 속성은 Entity에 저장된다.

##### Request URI

```
`PUT`  /{baasio-id}/{app-id}/{collection}?{query}
```

##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|
|entity_id|수정할 Entity uuid|


##### Request Body

```json
{
	"alpha": "bravo"
}
```


##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "put",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization",
	"entities":  [
	   {
	    "uuid": "89434a5b-1278-11e2-8553-02e81ac5a17b",
	    "type": "foo",
	    "created": 1349831968280,
	    "modified": 1349834674960,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "alpha": "bravo",
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/89434a5b-1278-11e2-8553-02e81ac5a17b"
	    }
	  }
	],
	"timestamp": 1349834674944,
	"duration": 87,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 
 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```javascript
$.ajax({
	url: "/test-organization/test-app/foo/89434a5b-1278-11e2-8553-02e81ac5a17b",
	dataType: "json",
	data : {
		  "alpha": "bravo"
		},
	type : "PUT",
	success : function(r) {
	  console.log(r);
	}
});
```

## Entity 삭제하기
[]({'id':'deleteEntity'})

UUID나 name 속성으로 찾은 Entity를 삭제한다. 삭제된 Entity의 내용을 리턴한다.

##### Request URI

```
`DELETE`  /{baasio-id}/{app-id}/{collection}/{entity_id}
```

##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|
|entity_id|삭제할 Entity uuid|
    

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "delete",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization",
	"entities":  [
	   {
	    "uuid": "89434a5b-1278-11e2-8553-02e81ac5a17b",
	    "type": "foo",
	    "created": 1349831968280,
	    "modified": 1349834674960,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "alpha": "bravo",
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/89434a5b-1278-11e2-8553-02e81ac5a17b"
	    }
	  }
	],
	"timestamp": 1349834807566,
	"duration": 345,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```javascript
$.ajax({
	url: "/test-organization/test-app/foo/89434a5b-1278-11e2-8553-02e81ac5a17b",
	dataType: "json",
	data : 
	},
	type : "DELETE",
	success : function(r) {
	  console.log(r);
	}
});
```         


----------

#### Entity의 Relation Entity 목록을 조회하기
[]({'id':'getConnection'})

Query 기준에 맞는 Entity들을 리턴하거나 Query나 필터가 없다면 모든 Entity를 제한 갯수까지 리턴한다.

##### Request URI

```
`GET`  /{baasio-id}/{app-id}/{collection}/{first_entity_id}/{relationship}
```

##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|
|first_entity_id|조회할 Entity uuid|
|relationship|조회할 relation 이름|

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "get",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes",
	"entities":  [
	   {
	    "uuid": "679105b3-127f-11e2-9e66-02e81adcf3d0",
	    "type": "foo",
	    "created": 1349834918224,
	    "modified": 1349834918224,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "foo": "bar",
	    "metadata":  {
	      "connecting":  {
	        "likes": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes/679105b3-127f-11e2-9e66-02e81adcf3d0/connecting/likes"
	      },
	      "connection": "likes",
	      "path": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes/679105b3-127f-11e2-9e66-02e81adcf3d0"
	    }
	  }
	],
	"timestamp": 1349835516073,
	"duration": 31,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
 

##### Example

```javascript
$.ajax({
	url: "/test-organization/test-app/foo/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes",
	dataType: "json"
	},
	type : "GET",
	success : function(r) {
	console.log(r);
	}
});
```

## Entity의 Relation을 생성하고 다른 Entity와 관계를 생성하기
[]({'id':'postConnection'})
Collection의 특정 Entity에 Connection을 생성하고 다른 Entity를 커넥션에 등록한다.

##### Request URI
  
```    
`POST`  /{baasio-id}/{app-id}/{collection}/{first_entity_id}/{relationship}/{second_entity_id}
```

##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|
|first_entity_id|조회할 Entity uuid|
|relationship|조회할 relation 이름|
|second_entity_id|relation 관계에 있는 entity 의 uuid|

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "post",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes",
	"entities":  [
	   {
	    "uuid": "679105b3-127f-11e2-9e66-02e81adcf3d0",
	    "type": "foo",
	    "created": 1349834918224,
	    "modified": 1349834918224,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "foo": "bar",
	    "metadata":  {
	      "path": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes/679105b3-127f-11e2-9e66-02e81adcf3d0"
	    }
	  }
	],
	"timestamp": 1349835212472,
	"duration": 79,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```

 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```javascript
$.ajax({
	url: "/test-organization/test-app/foo/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes/679105b3-127f-11e2-9e66-02e81adcf3d0",
	dataType: "json"
	},
	type : "POST",
	success : function(r) {
	  console.log(r);
	}
});
```

>info|Notes|"name" Property로 관계 생성하기|
/{baasio-id}/{app-id}/{collection}/{first_entity_id}/{relationship}/{second_entity_type}/{second_entity_id}
Relation을 생성한다. Relation을 생성할 때 두번째 Entity의 타입을 지정하면 UUID가 아니라 이름으로 커넥션을 생성할 수 있다.

## Entity의 Relation에서 Entity를 삭제하기
[]({'id':'deleteRelation'})

Collection의 특정 Entity의 relation 에서 다른 Entity 와의 Relation 을 해제한다. 

##### Request URI
       
```
`DELETE`  /{baasio-id}/{app-id}/{collection}/{first_entity_id}/{relationship}/{second_entity_id}
```

##### URI Parameters
|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|collection|Collection name|
|first_entity_id|Entity uuid|
|relationship|relation 이름|
|second_entity_id|relation 관계에 있는 entity 의 uuid|
    
##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "delete",
	"application": "1bac9dcb-c3e5-11e1-8176-12313d1c4491",
	"params":  {},
	"path": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes",
	"uri": "https://api.baas.io/test-organization/test-app/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes",
	"entities":  [
	   {
	    "uuid": "679105b3-127f-11e2-9e66-02e81adcf3d0",
	    "type": "foo",
	    "created": 1349834918224,
	    "modified": 1349834918224,
	    "a":  {
	      "b": 1,
	      "c": 2
	    },
	    "foo": "bar",
	    "metadata":  {
	      "connecting":  {
	        "likes": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes/679105b3-127f-11e2-9e66-02e81adcf3d0/connecting/likes"
	      },
	      "path": "/test-organization/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes/679105b3-127f-11e2-9e66-02e81adcf3d0"
	    }
	  }
	],
	"timestamp": 1349835718321,
	"duration": 68,
	"organization": "test-organization",
	"applicationName": "test-app"
}
```
 
 
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```javascript
$.ajax({
	url: "/test-organization/test-app/foo/4cc8ca7e-127f-11e2-8553-02e81ac5a17b/likes/679105b3-127f-11e2-9e66-02e81adcf3d0",
	dataType: "json"
	},
	type : "DELETE",
	success : function(r) {
	  console.log(r);
	}
});
```

>info|Notes|"name" Property로 관계 해제하기|
/{baasio-id}/{app-id}/{collection}/{first_entity_id}/{relationship}/{second_entity_type}/{second_entity_name}을 사용한다면 second_entity 의 uuid 가 아니라 name 으로 relation 을 해제할 수 있다.














# File
[]({'id':'file'})

## 파일 엔티티 생성&업로드
[]({'id':'file-create'})

- [파일 엔티티 생성 및 업로드](#createFileEntityAndUploadBLOB)
- [파일 엔티티 생성](#createFileEntity)
- [파일 업로드](#uploadBLOB)
- [파일 업로드(DATA 커맨드 이용)](#uploadBLOBwithDataCMD)

##### 파일 엔티티 생성 및 업로드|createFileEntityAndUploadBLOB

POST 메소드를 사용하여 새로운 파일 엔티티와 그와 연결된 BLOB(Binary Large Object) 를 업로드 할 수 있습니다. 이때 엔티티 정보(예: 메타 정보=이미지 촬영 장치, 화소수, 동영상 코덱 등등)를 같이 등록 할 수도 있습니다.

###### Request URI

```
`POST` /{baasio-id}/{app-id}/files
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |

###### Request Entity Type

```
multipart/form-data 
```
	
>warning|Warning|Request Entity Type|다른 multipart 타입은 지원 안함, 1개 파일만 허용(2013.01 현재), [RFC2388](http://www.ietf.org/rfc/rfc2388.txt) 참조


###### Request Body Entity (Multipart/form-data)

```
... (Headers)
Content-Type: multipart/form-data; boundary="----=_Part_27_1294272899.1358507963208"

------=_Part_27_1294272899.1358507963208
Content-Type: image/jpeg; name="file"
Content-Disposition: form-data; name="file"; filename="test.jpg"

------=_Part_27_1294272899.1358507963208
Content-Type: application/json; name="entity"
Content-Disposition: form-data; name="entity";

{
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

| Part 명 | 설명 | Content Type	| 필수 여부 | 비고 |
|:-------:|:----|:-------------|:---------:|:-----|
| entity | Entity 정보 | application/json | X |
| file | 파일 정보 와 Binary | <파일의 Content Type> | O (1개의 파일만 허용) | Content-Disposition 헤더가 있어야 하며 filename 가 포함되어 있어야 함 |

####### File 파트

- Part 헤더

```
Content-Type: image/jpeg; name="file"
```

| Property 명 | Domain Type	| 값 | 필수 	| 설명 |
|:-----------:|:------------|:---|:----:|:------|
| content-type | 문자열 (String)	| <파일의 content type> | O | 파일의 Content Type |
| name | 문자열 (String)	| file | O | 파트명 |


- Disposition 헤더

```
Content-Disposition: form-data; name="file"; filename="test.jpg"
```

| Property 명  | Domain Type	 | 기본값 | 필수 	| 설명 |
|:------------:|:------------|:-----:|:----:|:----|
| filename    	| 문자열 (String)	|		| O 	| 파일명
| name		| 문자열 (String)	| file		| O	| 파트명


####### Entity 파트 (application/json, optional)

- Part 헤더

```
Content-Type: application/json; name="entity"
```

| Property 명  | Domain Type	 | 기본값 | 필수 	| 설명 |
|:------------:|:------------|:-----:|:----:|:----|
| content-type | 문자열 (String)	| application/json	| O	| 엔티티의 Content Type
| name | 문자열 (String)	| entity		| O	| 파트명


- Body 구성 (application/json)

```json
{
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

| Property 명  | Domain Type	 | 기본값 | 필수 	| 설명 |
|:------------:|:------------|:-----:|:----:|:----|
| <원하는 Property명> | <원하는 자료형> |  | X	| 이용자가 정의한 Property |



###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 102 | 필수 정보 누락 |
| 400 | 103 | 파일 사이즈가 0 이거나 데이터가 없음, 제한 업로드 용량 초과 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 일시적 장애(클라우드 파일 시스템 장애), 시스템 장애 |



###### Example

- Request

```
POST https://api.baas.io/mybaasid/sandbox/files HTTP/1.1
Accept-Encoding: gzip,deflate
Accept: application/json
Authorization: Bearer YWMt4_7W1WFgEeK36wIATRcAPwAAATxSiK0KLCuOik6J6NlNSQ8zgGNId9f_G6k
Content-Type: multipart/form-data; boundary="----=_Part_27_1294272899.1358507963208"
MIME-Version: 1.0
Content-Length: 3277342
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

------=_Part_27_1294272899.1358507963208
Content-Type: image/jpeg; name="file"
Content-Transfer-Encoding: binary
Content-Disposition: form-data; name="file"; filename="test.jpg"

&lt;binary&gt;

------=_Part_27_1294272899.1358507963208
Content-Type: application/json; name="entity"
Content-Disposition: form-data; name="entity";

{
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}

------=_Part_27_1294272899.1358507963208--
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "post",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : { },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "created" : 1358507967778,
    "modified" : 1358507967778,
    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
    "content-length" : 3276800,
    "content-type" : "image/jpeg",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
    "filename" : "test.jpg",
    "location" : "rome",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 3276800,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 파일 엔티티 생성|createFileEntity

POST 메소드를 사용하여 새로운 파일 엔티티를 생성합니다. 파일의 BLOB 는 포함하지 않고 엔티티를 먼저 생성하는 것을 의미합니다. (파일에 대한 메타 정보(예: 메타 정보=파일명, 파일 종류, 이미지 촬영 장치, 화소수, 동영상 코덱 등등)를 통해 먼저 엔티티를 생성)

###### Request URI

```
`POST` /{baasio-id}/{app-id}/files
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |

###### Request Entity Type

```
application/json
```

###### Request Body Entity (application/json)

```json
{
	"filename":"test.jpg",
	"content-type":"image/jpeg",
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

| Property 명 | Domain Type	| 값 | 필수 	| 설명 |
|:-----------:|:------------|:---|:----:|:------|
| filename | 문자열 (String) | 없음 | O | 나중에 올릴 BLOB 의 파일명 |
| content-type | 문자열 (String)	| 나중에 올릴 BLOB 의 Content-type (다운로드시 활용) |
| <원하는 Property명> | <원하는 자료형>	| <없음> | X | 이용자가 정의한 Property |


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 102 | 필수 정보 누락 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |


###### Example

- Request

```
POST https://api.baas.io/mybaasid/sandbox/files HTTP/1.1
Accept-Encoding: gzip,deflate
Accept: application/json
Authorization: Bearer YWMt4_7W1WFgEeK36wIATRcAPwAAATxSiK0KLCuOik6J6NlNSQ8zgGNId9f_G6k
Content-Type: application/json	MIME-Version: 1.0
Content-Length: 174
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

{
	"filename":"test.jpg",
	"content-type":"image/jpeg",
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "post",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : { },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "created" : 1358507967778,
    "modified" : 1358507967778,
    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
    "content-length" : 3276800,
    "content-type" : "image/jpeg",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
    "filename" : "test.jpg",
    "location" : "rome",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 3276800,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 파일 업로드|uploadBLOB

[파일 엔티티 생성](#createFileEntity) 을 통해 만들어진 엔티티에 대한 BLOB 를 업로드 합니다. 파일명, 파일의 Content-type 등의 BLOB 에 대한 메타 정보는 [파일 엔티티 생성](#createFileEntity) 또는 [파일 엔티티 수정](#updateFileEntity) 를 통해 등록 또는 수정되어야 합니다.

###### Request URI

```
`POST` https://blob.baas.io/{baasio-id}/{app-id}/files/{entity-id}
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |

###### Request Entity Type

```
application/octet-stream
```

###### Request Body Entity (application/octet-stream)

```
&lt;binary&gt;
```


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음, 파일 사이즈가 0 이거나 데이터가 없음, 제한 업로드 용량 초과 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 일시적 장애(클라우드 파일 시스템 장애), 시스템 장애 |


###### Example

- Request

```
POST https://blob.baas.io/mybaasid/sandbox/files/febe8ba9-639a-11e2-b7eb-02004d17003f HTTP/1.1

Accept-Encoding: gzip,deflate
Accept: application/json
Authorization: Bearer YWMt4_7W1WFgEeK36wIATRcAPwAAATxSiK0KLCuOik6J6NlNSQ8zgGNId9f_G6k
Content-Type: application/octet-stream	MIME-Version: 1.0
Content-Length: 3276800
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

&lt;binary&gt;
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked
```

##### 파일 업로드(DATA 커맨드 이용)|uploadBLOBwithDataCMD

[파일 엔티티 생성](#createFileEntity) 을 통해 만들어진 엔티티에 대한 BLOB 를 업로드 합니다. 파일명, 파일의 Content-type 등의 BLOB 에 대한 메타 정보는 [파일 엔티티 생성](#createFileEntity) 또는 [파일 엔티티 수정](#updateFileEntity) 를 통해 등록 또는 수정되어야 합니다.

###### Request URI

```
`POST` /{baasio-id}/{app-id}/files/{entity-id}/data
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |

###### Request Entity Type

```
application/octet-stream
```

###### Request Body Entity (application/octet-stream)

```
&lt;binary&gt;
```

###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음, 파일 사이즈가 0 이거나 데이터가 없음, 제한 업로드 용량 초과 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 일시적 장애(클라우드 파일 시스템 장애), 시스템 장애 |


###### Example

- Request

```
POST https://api.baas.io/mybaasid/sandbox/files/febe8ba9-639a-11e2-b7eb-02004d17003f/data HTTP/1.1

Accept-Encoding: gzip,deflate
Accept: application/json
Authorization: Bearer YWMt4_7W1WFgEeK36wIATRcAPwAAATxSiK0KLCuOik6J6NlNSQ8zgGNId9f_G6k
Content-Type: application/octet-stream	MIME-Version: 1.0
Content-Length: 3276800
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

&lt;binary&gt;
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked
```

## 파일 엔티티 조회
[]({'id':'file-get'})

- [파일 엔티티 조회(전체)](#getEntireFileEntities)
- [필터를 이용한 파일 엔티티 조회](#getFilteredFileEntities)
- [질의를 이용한 파일 엔티티 조회](#getFileEntitiesWithQuery)
- [파일 엔티티 조회(단일)](#getFileEntity)

##### 파일 엔티티 조회|getEntireFileEntities

올려진 하나 혹은 전체 파일에 대한 엔티티 정보를 조회할 수 있습니다. 

###### Request URI

	`GET` /{baasio-id}/{app-id}/files

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |

###### Request Entity Type

<없음>


###### Request Body Entity

<없음>


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |


###### Example

- Request

```
GET https://api.baas.io/mybaasid/sanbox/files HTTP/1.

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Mon, 21 Jan 2013 07:20:12 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Sun, 20-Jan-2013 07:20:13 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "get",
  "application" : "f74df243-639a-11e2-b7eb-02004d17003f",
  "params" : {
  },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ 
	  {
	    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
	    "type" : "file",
	    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
	    "created" : 1358507967778,
	    "modified" : 1358507967778,
	    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
	    "content-length" : 3276800,
	    "content-type" : "image/jpeg",
	    "country" : "italy",
	    "dir" : "myPhoto",
	    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
	    "filename" : "test.jpg",
	    "location" : "rome",
	    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
	    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
	    "path" : "/",
	    "size" : 3276800,
	    "title" : "my europe travel memories"
	  },
  	  
  	  ....

  ],
  "timestamp" : 1358752813380,
  "duration" : 19,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 필터를 이용한 파일 엔티티 조회|getFilteredFileEntities

올려진 하나 혹은 전체 파일에 대한 엔티티 정보를 조회할 수 있습니다. 필터를 통해 특정 조건에 맞는 파일들을 조회할 수도 있습니다. 


###### Request URI

```
`GET` /{baasio-id}/{app-id}/files?filter=&lt;filter clause&gt;
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| ql | ql 절 (자세한 내용은 <a href="../devguide/query.html#queryClause">여기서</a> 확인) |

###### Request Entity Type

<없음>


###### Request Body Entity

<없음>


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |


###### Example

- Request

```
GET https://api.baas.io/mybaasid/sanbox/files?filter=dir%3D%27myPhoto%27 HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Mon, 21 Jan 2013 07:20:12 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Sun, 20-Jan-2013 07:20:13 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "get",
  "application" : "f74df243-639a-11e2-b7eb-02004d17003f",
  "params" : {
    "filter" : [ "dir='myPhoto'" ]
  },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ 
	  {
	    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
	    "type" : "file",
	    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
	    "created" : 1358507967778,
	    "modified" : 1358507967778,
	    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
	    "content-length" : 3276800,
	    "content-type" : "image/jpeg",
	    "country" : "italy",
	    "dir" : "myPhoto",
	    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
	    "filename" : "test.jpg",
	    "location" : "rome",
	    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
	    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
	    "path" : "/",
	    "size" : 3276800,
	    "title" : "my europe travel memories"
	  },
  	  
  	  ....

  ],
  "timestamp" : 1358752813380,
  "duration" : 19,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 질의를 이용한 파일 엔티티 조회|getFileEntitiesWithQuery

올려진 하나 혹은 전체 파일에 대한 엔티티 정보를 조회할 수 있습니다. 질의를 통해 조건을 부여하고 원하는 엔티티 속성 그리고 목록 정렬을 해볼 수도 있습니다. (원하는 목록 형태를 구성)


###### Request URI

```
`GET` /{baasio-id}/{app-id}/files?ql=&lt;query clause&gt;
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| ql | ql 절 (자세한 내용은 <a href="../devguide/query.html#queryClause">여기서</a> 확인) |

###### Request Entity Type

<없음>


###### Request Body Entity

<없음>


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |


###### Example

- Request

```
GET https://api.baas.io/mybaasid/sanbox/files?ql=select%20fileName%20where%20dir%3D%27myPhoto%27 HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Mon, 21 Jan 2013 07:20:12 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Sun, 20-Jan-2013 07:20:13 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "get",
  "application" : "f74df243-639a-11e2-b7eb-02004d17003f",
  "params" : {
    "ql" : [ "select fileName where dir='myPhoto'" ]
  },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "list" : [ [ "test.jpg" ], [ "test.png" ], [ "text.log" ] ],
  "timestamp" : 1358752813380,
  "duration" : 19,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 파일 엔티티 조회(단일)|getFileEntity

올려진 파일에 대한 엔티티 정보를 조회할 수 있습니다. 

###### Request URI

```
`GET` /{baasio-id}/{app-id}/files/{entity-id}
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |


###### Request Entity Type

<없음>


###### Request Body Entity

<없음>


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |


###### Example

- Request

```
GET https://api.baas.io/mybaasid/sandbox/files/febe8ba9-639a-11e2-b7eb-02004d17003f HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Mon, 21 Jan 2013 07:20:12 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Sun, 20-Jan-2013 07:20:13 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "get",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : { },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "created" : 1358507967778,
    "modified" : 1358507967778,
    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
    "content-length" : 3276800,
    "content-type" : "image/jpeg",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
    "filename" : "test.jpg",
    "location" : "rome",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 3276800,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

## 파일 다운로드
[]({'id':'file-download'})

- [파일 다운로드](#downloadFile)
- [파일 다운로드(DATA 커맨드 이용)](#downloadFilewithDataCMD)

##### 파일 다운로드|downloadFile

GET 메소드를 이용하여 서버에 저장된 파일을 다운로드 할 수 있습니다.
 
###### Request URI

```
`GET` https://blob.baas.io/{baasio-id}/{app-id}/files/{entity-id}
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| fileName | 파일명 (없을 경우 서버에 올려진 파일명으로 다운로드 하지만 별도로 파일명을 지정하고 싶을때) |


###### Request Entity Type

<없음>


###### Request Body Entity

<없음>


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 404 | N/A | 파일 BLOB 가 없음 |
| 500 | 920 | 일시적 장애(클라우드 파일 시스템 장애), 시스템 장애 |
	

###### Example

- Request

```
GET https://blob.baas.io/mybaasid/sandbox/files/febe8ba9-639a-11e2-b7eb-02004d17003f HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Mon, 21 Jan 2013 07:20:12 GMT
Server: grizzly/2.1.2
Content-Type: image/png
Content-Disposition: attachment; filename=test.png
Last-Modified: Mon, 21 Jan 2013 07:20:12 GMT
ETag: "\"d5d0d3cffeb5d1f9f656d8e99c0d0973\""
Access-Control-Allow-Origin: *
Content-Length: 851
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Sun, 20-Jan-2013 07:20:13 GMT
Connection: close

&lt;binary&gt;
```

##### 파일 다운로드(DATA 커맨드 이용)|downloadFilewithDataCMD

GET 메소드를 이용하여 서버에 저장된 파일을 다운로드 할 수 있습니다.
 
###### Request URI

```
`GET` /{baasio-id}/{app-id}/files/{entity-id}/data
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| fileName | 파일명 (없을 경우 서버에 올려진 파일명으로 다운로드 하지만 별도로 파일명을 지정하고 싶을때) |


###### Request Entity Type

<없음>


###### Request Body Entity

<없음>


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 404 | N/A | 파일 BLOB 가 없음 |
| 500 | 920 | 일시적 장애(클라우드 파일 시스템 장애), 시스템 장애 |
	

###### Example

- Request

```
GET https://api.baas.io/mybaasid/sandbox/files/febe8ba9-639a-11e2-b7eb-02004d17003f/data HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Mon, 21 Jan 2013 07:20:12 GMT
Server: grizzly/2.1.2
Content-Type: image/png
Content-Disposition: attachment; filename=test.png
Last-Modified: Mon, 21 Jan 2013 07:20:12 GMT
ETag: "\"d5d0d3cffeb5d1f9f656d8e99c0d0973\""
Access-Control-Allow-Origin: *
Content-Length: 851
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Sun, 20-Jan-2013 07:20:13 GMT
Connection: close

&lt;binary&gt;
```

## 파일 엔티티 수정 및 교체
[]({'id':'file-update'})

- [파일 엔티티 수정 및 교체](#updateFileEntityAndReplaceBLOB)
- [파일 엔티티 수정](#updateFileEntity)
- [필터를 이용한 일괄 파일 엔티티 수정](#updateFilteredFileEntities)
- [질의를 이용한 일괄 파일 엔티티 수정](#updateFileEntitiesWithQuery)

##### 파일 엔티티 수정 및 교체|updateFileEntityAndReplaceBLOB

PUT 메소드를 사용하여 이미 올려진 파일 엔티티와 그와 연결된 BLOB(Binary Large Object) 를 교체 할 수 있습니다. 이때 엔티티 정보(예: 메타 정보=이미지 촬영 장치, 화소수, 동영상 코덱 등등)를 같이 수정하거나 추가 할 수도 있습니다.

###### Request URI

```
`PUT` /{baasio-id}/{app-id}/files/{entity-id}
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |


###### Request Entity Type

```
multipart/form-data 
```

>warning|Warning|Request Entity Type|다른 multipart 타입은 지원 안함, 1개 파일만 허용(2013.01 현재), [RFC2388](http://www.ietf.org/rfc/rfc2388.txt) 참조

###### Request Body Entity (Multipart/form-data)

```
... (Headers)
Content-Type: multipart/form-data; boundary="----=_Part_27_1294272899.1358507963208"

------=_Part_27_1294272899.1358507963208
Content-Type: image/jpeg; name="file"
Content-Disposition: form-data; name="file"; filename="test.jpg"

------=_Part_27_1294272899.1358507963208
Content-Type: application/json; name="entity"
Content-Disposition: form-data; name="entity";

{
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

| Part 명 | 설명 | Content Type	| 필수 여부 | 비고 |
|:-------:|:----|:-------------|:---------:|:-----|
| entity | Entity 정보 | application/json | X |
| file | 파일 정보 와 Binary | <파일의 Content Type> | O (1개의 파일만 허용) | Content-Disposition 헤더가 있어야 하며 filename 가 포함되어 있어야 함 |



####### File 파트

- Part 헤더

```
Content-Type: image/jpeg; name="file"
```

| Property 명 | Domain Type	| 값 | 필수 	| 설명 |
|:-----------:|:------------|:---|:----:|:------|
| content-type | 문자열 (String)	| <파일의 content type> | O | 파일의 Content Type |
| name | 문자열 (String)	| file | O | 파트명 |


- Disposition 헤더

```
Content-Disposition: form-data; name="file"; filename="test.jpg"
```

| Property 명  | Domain Type	 | 기본값 | 필수 	| 설명 |
|:------------:|:------------|:-----:|:----:|:----|
| filename    	| 문자열 (String)	|		| O 	| 파일명
| name		| 문자열 (String)	| file		| O	| 파트명


####### Entity 파트 (application/json, optional)

- Part 헤더

```
Content-Type: application/json; name="entity"
```

| Property 명  | Domain Type	 | 기본값 | 필수 	| 설명 |
|:------------:|:------------|:-----:|:----:|:----|
| content-type | 문자열 (String)	| application/json	| O	| 엔티티의 Content Type
| name | 문자열 (String)	| entity		| O	| 파트명


- Body 구성 (application/json)

```
{
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

| Property 명  | Domain Type	 | 기본값 | 필수 	| 설명 |
|:------------:|:------------|:-----:|:----:|:----|
| <원하는 Property명> | <원하는 자료형> |  | X	| 이용자가 정의한 Property |


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------:|:-----:|
| 200 | N/A | 성공 |
| 400 | 102 | 필수 정보 누락 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음, 파일 사이즈가 0 이거나 데이터가 없음, 제한 업로드 용량 초과 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 일시적 장애(클라우드 파일 시스템 장애), 시스템 장애 |

###### Example

- Request

```
PUT https://api.baas.io/mybaasid/sandbox/files/febe8ba9-639a-11e2-b7eb-02004d17003f HTTP/1.1

Accept-Encoding: gzip,deflate
Accept: application/json
Authorization: Bearer YWMt4_7W1WFgEeK36wIATRcAPwAAATxSiK0KLCuOik6J6NlNSQ8zgGNId9f_G6k
Content-Type: multipart/form-data; boundary="----=_Part_27_1294272899.1358507963208"
MIME-Version: 1.0
Content-Length: 3277342
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

------=_Part_27_1294272899.1358507963208
Content-Type: image/jpeg; name="file"
Content-Transfer-Encoding: binary
Content-Disposition: form-data; name="file"; filename="test2.jpg"

&lt;binary&gt;

------=_Part_27_1294272899.1358507963208
Content-Type: application/json; name="entity"
Content-Disposition: form-data; name="entity";

{
	"title":"my europe travel memories",
 	"location":"venice",
 	"country":"italy",
 	"dir":"myPhoto"
}

------=_Part_27_1294272899.1358507963208--
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "put",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : { },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test2.jpg",
    "created" : 1358507967778,
    "modified" : 1358507967778,
    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
    "content-length" : 3276800,
    "content-type" : "image/jpeg",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
    "filename" : "test2.jpg",
    "location" : "venice",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test2.jpg",
    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 3276800,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 파일 엔티티 수정|updateFileEntity

PUT 메소드를 사용하여 이미 올려진 파일 엔티티를 수정합니다. 파일의 메타정보(예: 메타 정보=파일명, 파일 종류, 이미지 촬영 장치, 화소수, 동영상 코덱 등등)를 수정하는 것을 의미합니다.

###### Request URI

```
`PUT` /{baasio-id}/{app-id}/files/{entity-id}
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |


###### Request Entity Type

```
application/json
```

###### Request Body Entity (application/json)

```
{
	"filename":"test2.jpg",
	"content-type":"image/jpeg",
	"title":"my europe travel memories",
 	"location":"venice",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

| Property 명 | Domain Type	| 값 | 필수 	| 설명 |
|:-----------:|:------------|:---|:----:|:------|
| filename | 문자열 (String) | 없음 | O | 수정할 BLOB 의 파일명 |
| content-type | 문자열 (String)	| BLOB 의 Content-type (다운로드시 활용) |
| <원하는 Property명> | <원하는 자료형>	| <없음> | X | 이용자가 정의한 Property |


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 102 | 필수 정보 누락 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |


###### Example

- Request

```
PUT https://api.baas.io/mybaasid/sandbox/files/febe8ba9-639a-11e2-b7eb-02004d17003f HTTP/1.1

Accept-Encoding: gzip,deflate
Accept: application/json
Authorization: Bearer YWMt4_7W1WFgEeK36wIATRcAPwAAATxSiK0KLCuOik6J6NlNSQ8zgGNId9f_G6k
Content-Type: application/json	MIME-Version: 1.0
Content-Length: 174
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

{
	"filename":"test.jpg",
	"content-type":"image/jpeg",
	"title":"my europe travel memories",
 	"location":"rome",
 	"country":"italy",
 	"dir":"myPhoto"
}
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "put",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : { },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test2.jpg",
    "created" : 1358507967778,
    "modified" : 1358507967778,
    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
    "content-length" : 3276800,
    "content-type" : "image/jpeg",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
    "filename" : "test2.jpg",
    "location" : "venice",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test2.jpg",
    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 3276800,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 필터를 이용한 일괄 파일 엔티티 수정|updateFilteredFileEntities

올려진 하나 혹은 전체 파일에 대한 엔티티 정보를 수정할 수 있습니다. 필터 및 질의를 통해 특정 조건에 맞는 파일 엔티티를 찾아 수정 할 수도 있습니다. 주의해야 할 점은 한꺼번에 수정되기 때문에 **개별적으로 존재해야 하는 속성(예: 파일명, 파일 Content-type) 을 수정하지는 말아야 합니다.** (이경우 복구가 되지 않습니다.), 이 기능은 특정 속성과 그에 따른 값을 가진 파일들을 일괄 수정하는데 유용합니다.(예: A라는 태그를 가진 파일들을 B라고 전체 변경)


###### Request URI

```
`PUT` /{baasio-id}/{app-id}/files?filter=&lt;filter clause&gt;
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| filter | filter 절 (자세한 내용은 <a href="../devguide/query.html#filterClause">여기서</a> 확인)  |


###### Request Entity Type

```
application/json
```

###### Request Body Entity (application/json)

```
{
 	"location":"venice"
}
```

Property 명 	| Domain Type		| 기본값	| 필수 	| 설명
--------------------|-----------------------|---------------|-------|------------
filename		| 문자열 (String)	| <없음>	| O	| 나중에 올릴 BLOB 의 파일명
content-type	| 문자열 (String)	| <없음>	| O	| 나중에 올릴 BLOB 의 Content-type (다운로드시 활용)
<원하는 Property명> | <원하는 자료형>	| <없음>	| X	| 이용자가 정의한 Property


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 102 | 필수 정보 누락 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |

###### Example

- Request

```
PUT https://api.baas.io/mybaasid/sanbox/files?filter=dir%3D%27myPhoto%27 HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

{
 	"location":"venice"
}
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "put",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : {
    "filter" : [ "dir='myPhoto'" ]
  },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "created" : 1358507967778,
    "modified" : 1358507967778,
    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
    "content-length" : 3276800,
    "content-type" : "image/jpeg",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
    "filename" : "test.jpg",
    "location" : "venice",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 3276800,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 질의를 이용한 일괄 파일 엔티티 수정|updateFileEntitiesWithQuery

올려진 하나 혹은 전체 파일에 대한 엔티티 정보를 수정할 수 있습니다. 필터 및 질의를 통해 특정 조건에 맞는 파일 엔티티를 찾아 수정 할 수도 있습니다. 주의해야 할 점은 한꺼번에 수정되기 때문에 **개별적으로 존재해야 하는 속성(예: 파일명, 파일 Content-type) 을 수정하지는 말아야 합니다.** (이경우 복구가 되지 않습니다.), 이 기능은 특정 속성과 그에 따른 값을 가진 파일들을 일괄 수정하는데 유용합니다.(예: A라는 태그를 가진 파일들을 B라고 전체 변경)


###### Request URI

```
`PUT` /{baasio-id}/{app-id}/files?ql=&lt;query clause&gt;
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| ql | ql 절 (자세한 내용은 <a href="../devguide/query.html#queryClause">여기서</a> 확인) |


###### Request Entity Type

```
application/json
```

###### Request Body Entity (application/json)

```
{
 	"location":"venice"
}
```

Property 명 	| Domain Type		| 기본값	| 필수 	| 설명
--------------------|-----------------------|---------------|-------|------------
filename		| 문자열 (String)	| <없음>	| O	| 나중에 올릴 BLOB 의 파일명
content-type	| 문자열 (String)	| <없음>	| O	| 나중에 올릴 BLOB 의 Content-type (다운로드시 활용)
<원하는 Property명> | <원하는 자료형>	| <없음>	| X	| 이용자가 정의한 Property


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 102 | 필수 정보 누락 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |

###### Example

- Request

```
PUT https://api.baas.io/mybaasid/sanbox/files?ql=select%20fileName%20where%20dir%3D%27myPhoto%27 HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)

{
 	"location":"venice"
}
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "put",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : {
    "ql" : [ "select fileName where dir='myPhoto'" ]
  },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "list" : [ [ "test.jpg" ], [ "test.png" ], [ "text.log" ] ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

## 파일 삭제
[]({'id':'file-delete'})

- [파일 삭제(단일)](#deleteFileEntityAndBLOB)
- [필터를 이용한 파일 삭제](#deleteFilteredFileEntitiesAndBLOB)
- [질의를 이용한 파일 삭제](#deleteFileEntitiesWithQueryAndBLOB)

##### 파일 삭제(단일)|deleteFileEntityAndBLOB

Delete 메소드를 이용해서 파일 엔티티와 그와 함께 저장된 파일 BLOB(Binary Large Object) 를 같이 삭제할 수 있습니다.

###### Request URI

```
`DELETE` /{baasio-id}/{app-id}/files/{entity-id}
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |
| entity-id | 파일 엔티티의 UUID |


###### Request Entity Type

<없음>


###### Request Body Entity

<없음>


###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |


###### Example

- Request

```
DELETE https://api.baas.io/mybaasid/sandbox/files/fee06b8c-639a-11e2-b7eb-02004d17003f HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Mon, 21 Jan 2013 07:20:12 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Sun, 20-Jan-2013 07:20:13 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "delete",
  "application" : "f74df243-639a-11e2-b7eb-02004d17003f",
  "params" : { },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "fee06b8c-639a-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "fee06b8c-639a-11e2-b7eb-02004d17003f_test.png",
    "created" : 1358752812677,
    "modified" : 1358752812958,
    "checksum" : "84949a871e2875e8154528a33bc94b1d",
    "content-length" : 4491,
    "content-type" : "image/png",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"84949a871e2875e8154528a33bc94b1d\"",
    "filename" : "text.png",
    "location" : "rome",
    "metadata" : {
      "path" : "/files/fee06b8c-639a-11e2-b7eb-02004d17003f"
    },
    "name" : "fee06b8c-639a-11e2-b7eb-02004d17003f_test.png",
    "owner" : "f74df243-639a-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 4491,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358752813801,
  "duration" : 141,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 필터를 이용한 일괄 파일 삭제|deleteFilteredFileEntitiesAndBLOB

올려진 하나 혹은 전체 파일을 삭제 할 수 있습니다.(관련 BLOB(Binary Large Object 포함) 주의 해야 할 점은 복구가 되지 않기 때문에 신중을 기해 삭제해야 한다는 점입니다. 

###### Request URI

```
`DELETE` /{baasio-id}/{app-id}/files?filter=&lt;filter clause&gt;
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| filter | filter 절 (자세한 내용은 <a href="../devguide/query.html#filterClause">여기서</a> 확인)  |


###### Request Entity Type

<없음>


###### Request Body Entity

<없음>

###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |

###### Example

- Request

```
DELETE https://api.baas.io/mybaasid/sanbox/files?filter=dir%3D%27myPhoto%27 HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "delete",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : {
    "filter" : [ "dir='myPhoto'" ]
  },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "entities" : [ {
    "uuid" : "ebf1c09a-6160-11e2-b7eb-02004d17003f",
    "type" : "file",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "created" : 1358507967778,
    "modified" : 1358507967778,
    "checksum" : "33b54d2a5525ad8ccd80092ecfc1f4c2",
    "content-length" : 3276800,
    "content-type" : "image/jpeg",
    "country" : "italy",
    "dir" : "myPhoto",
    "etag" : "\"33b54d2a5525ad8ccd80092ecfc1f4c2\"",
    "filename" : "test.jpg",
    "location" : "venice",
    "name" : "ebf1c09a-6160-11e2-b7eb-02004d17003f_test.jpg",
    "owner" : "e48b1147-6160-11e2-b7eb-02004d17003f",
    "path" : "/",
    "size" : 3276800,
    "title" : "my europe travel memories"
  } ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```

##### 질의를 이용한 일괄 파일 삭제|deleteFileEntitiesWithQueryAndBLOB

올려진 하나 혹은 전체 파일을 삭제 할 수 있습니다.(관련 BLOB(Binary Large Object 포함) 주의 해야 할 점은 복구가 되지 않기 때문에 신중을 기해 삭제해야 한다는 점입니다. 

###### Request URI

```
`DELETE` /{baasio-id}/{app-id}/files?ql=&lt;query clause&gt;
```

| Template 명 | 설명 |
|:-----------:|:-----|
| baasio-id | 회원 ID |
| app-id | 앱 ID |

| Query Parameter 명 | 설명 |
|:------------------:|------|
| ql | ql 절 (자세한 내용은 <a href="../devguide/query.html#queryClause">여기서</a> 확인) |


###### Request Entity Type

<없음>


###### Request Body Entity

<없음>

###### Response

- Status Code

| Code | error code	| 의미 |
|:----:|:-----------|:-----|
| 200 | N/A | 성공 |
| 400 | 103 | 등록된 파일 엔티티가 존재하지 않음 |
| 401 | 202 | 유효하지 않은 토큰(토큰 인증 실패), 접근 권한 없음 |
| 404 | 101 | 입력한 baas-id 가 존재하지 않음 또는 app-id 이 실제로 존재하지 않음 |
| 500 | 920 | 시스템 장애 |

###### Example

- Request

```
DELETE https://api.baas.io/mybaasid/sanbox/files?ql=select%20fileName%20where%20dir%3D%27myPhoto%27 HTTP/1.1

Accept-Encoding: gzip,deflate
Authorization: Bearer YWMt9x4vsWOaEeK36wIATRcAPwAAATxhILes5rP7LFcwayF6zUVMSSE1dba9uvk
Host: api.baas.io
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

- Response

```
HTTP/1.1 200 OK
Date: Fri, 18 Jan 2013 11:19:28 GMT
Server: grizzly/2.1.2
Content-Type: application/json
Access-Control-Allow-Origin: *
Set-Cookie: rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Thu, 17-Jan-2013 11:19:25 GMT
Connection: close
Transfer-Encoding: chunked

{
  "action" : "delete",
  "application" : "e48b1147-6160-11e2-b7eb-02004d17003f",
  "params" : {
    "ql" : [ "select fileName where dir='myPhoto'" ]
  },
  "path" : "/files",
  "uri" : "https://api.baas.io/mybaasid/sandbox/files",
  "list" : [ [ "test.jpg" ], [ "test.png" ], [ "text.log" ] ],
  "timestamp" : 1358507967775,
  "duration" : 394,
  "applicationName" : "sandbox",
  "baasio_id" : "mybaasid"
}
```






















# Group|그룹
[]({'id':'group'})

그룹의 경우는 [User](user.html)를 좀 더 잘 활용하기 위해서 사용합니다. 예를 들어, 이벤트(생일, 결혼 등) 같이 특정 사용자들의 모임을 만들고자 합니다. 사용자를 그룹화 할 수 있는 그룹API를 사용하면 편리하게 해당 그룹 사용자들만 조회 가능합니다.

또한, 해당 그룹의 사용자들만 볼 수 있는 [롤(Role)](role.html)을 만들고 특정 Collection을 조회할 수 있도록도 할 수 있습니다. 사용에 따라서 다양한 활용이 가능합니다.

## 그룹 생성하기
[]({'id':'postGroups'})

##### Request URI

```
'POST' /{baasio-id}/{app-id}/groups
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|

##### Request Body

Group Entity는 미리 정의한 스키마가 있으니 자세한 정보는 [Group Entity](#groupEntity)에서 살펴보시면 됩니다. 그룹을 등록하기 위해서는 최소한의 정보가 필요하며 반드시 포함되어야 할 정보는 path 입니다.
	
```
{
	"path":"mygroup"
}
```

##### Request

```
'POST' https://api.baas.io/my-baasio-id/my-app-id/groups 

{
	"name":"manager",
	"title":"Manager"
}
```

##### Response
- 성공
	- Code: 200 
	- Contents:
	
``` 
{
	"action2": "post",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/groups",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/groups",
	"entities": [
		{
			"uuid": "b584c577-138d-11e2-a766-4061867ca222",
			"type": "group",
			"created": 1349951013123,
			"modified": 1349951013123,
			"metadata": {
				"path": "/groups/b584c577-138d-11e2-a766-4061867ca222",
				"sets": {
					"rolenames": "/groups/b584c577-138d-11e2-a766-4061867ca222/rolenames",
					"permissions": "/groups/b584c577-138d-11e2-a766-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/groups/b584c577-138d-11e2-a766-4061867ca222/activities",
					"feed": "/groups/b584c577-138d-11e2-a766-4061867ca222/feed",
					"roles": "/groups/b584c577-138d-11e2-a766-4061867ca222/roles",
					"users": "/groups/b584c577-138d-11e2-a766-4061867ca222/users"
				}
			},
			"path": "mygroup"
		}
	],
	"timestamp": 1349951013054,
	"duration": 176,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

	
##### Example

```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -d '{ \"path\":\"mygroup\" }' "https://api.baas.io/my-baasio-id/my-app-id/groups"
```

## 그룹 조회하기
[]({'id':'getGroups'})

##### Request Body
  
```
'GET' /{baasio-id}/{app-id}/groups
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|

##### Request

```
'GET' https://api.baas.io/my-baasio-id/my-app-id/groups
```

##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json 
{
	"action": "get",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/groups",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/groups",
	"entities": [
		{
			"uuid": "b584c577-138d-11e2-a766-4061867ca222",
			"type": "group",
			"created": 1349951013123,
			"modified": 1349951215587,
			"metadata": {
				"path": "/groups/b584c577-138d-11e2-a766-4061867ca222",
				"sets": {
					"rolenames": "/groups/b584c577-138d-11e2-a766-4061867ca222/rolenames",
					"permissions": "/groups/b584c577-138d-11e2-a766-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/groups/b584c577-138d-11e2-a766-4061867ca222/activities",
					"feed": "/groups/b584c577-138d-11e2-a766-4061867ca222/feed",
					"roles": "/groups/b584c577-138d-11e2-a766-4061867ca222/roles",
					"users": "/groups/b584c577-138d-11e2-a766-4061867ca222/users"
				}
			},
			"path": "mygroup",
			"update": "something"
		},
		{
			"uuid": "68d9793a-138f-11e2-a766-4061867ca222",
			"type": "group",
			"created": 1349951743487,
			"modified": 1349951743487,
			"metadata": {
				"path": "/groups/68d9793a-138f-11e2-a766-4061867ca222",
				"sets": {
					"rolenames": "/groups/68d9793a-138f-11e2-a766-4061867ca222/rolenames",
					"permissions": "/groups/68d9793a-138f-11e2-a766-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/groups/68d9793a-138f-11e2-a766-4061867ca222/activities",
					"feed": "/groups/68d9793a-138f-11e2-a766-4061867ca222/feed",
					"roles": "/groups/68d9793a-138f-11e2-a766-4061867ca222/roles",
					"users": "/groups/68d9793a-138f-11e2-a766-4061867ca222/users"
				}
			},
			"path": "mygroup2"
		}
	],
	"timestamp": 1349951749829,
	"duration": 55,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.


##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/groups"
```

## 그룹을 쿼리로 조회하기
[]({'id':'getGroupsByQuery'})

[그룹 조회하기](#getGroups) API 에서 확인한 것처럼 등록된 그룹을 조회할 수 있습니다. 특정한 그룹을 조회하고 싶을 때, 데이터 질의 방법을 사용하여 그룹을 조회할 수 있습니다. 데이터 질의 방법은 [데이터 질의하기](../devguide/query.html)에서 자세한 사항을 확인하세요.

##### Request URI
  
```
'GET' /{baasio-id}/{app-id}/groups?{query}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|

##### Query Parmeters

|파라미터|자료형|기본값|필수|설명|
|:-----:|:-----:|:----:|:----:|:----------|
|ql|문자열 (String)|none|no|질의어|
|filter|문자열 (String)|none|no|연산 조건에 따른 필터|
|cursor|문자열 (String)||no|페이징을 위한 질의 결과셋의 엔코딩된 값|
|limit|정수형 (Integer)|10|no|조회 결과의 데이터 개수 제한|

##### Request
	
```
'GET' https://api.baas.io/my-baasio-id/my-app-id/groups/mygroup?ql=select * where flag='1'
```

##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "get",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params" : {
		"ql" : [ "select * where flag='1'" ]
	},
	"path": "/groups",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/groups",
	"entities": [
		{
			"uuid": "b584c577-138d-11e2-a766-4061867ca222",
			"type": "group",
			"created": 1349951013123,
			"modified": 1349951215587,
			"metadata": {
				"path": "/groups/b584c577-138d-11e2-a766-4061867ca222",
				"sets": {
					"rolenames": "/groups/b584c577-138d-11e2-a766-4061867ca222/rolenames",
					"permissions": "/groups/b584c577-138d-11e2-a766-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/groups/b584c577-138d-11e2-a766-4061867ca222/activities",
					"feed": "/groups/b584c577-138d-11e2-a766-4061867ca222/feed",
					"roles": "/groups/b584c577-138d-11e2-a766-4061867ca222/roles",
					"users": "/groups/b584c577-138d-11e2-a766-4061867ca222/users"
				}
			},
			"path": "mygroup",
			"update": "something",
			"flag":"1"
		}
	],
	"timestamp": 1349951749829,
	"duration": 55,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	

##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/groups/?ql=select * where flag='1'"
```

## 그룹명 혹은 UUID로 조회하기|getGroup

##### Request URI
  
```
'GET' /{baasio-id}/{app-id}/groups/{group_uuid or group_path}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|

##### Request
	
```
'GET' https://api.baas.io/my-baasio-id/my-app-id/groups/mygroup
```
	
혹은
	
```
'GET' https://api.baas.io/my-baasio-id/my-app-id/groups/b584c577-138d-11e2-a766-4061867ca222
```

##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json 
{
	"action": "get",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/groups",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/groups",
	"entities": [
		{
			"uuid": "b584c577-138d-11e2-a766-4061867ca222",
			"type": "group",
			"created": 1349951013123,
			"modified": 1349951215587,
			"metadata": {
				"path": "/groups/b584c577-138d-11e2-a766-4061867ca222",
				"sets": {
					"rolenames": "/groups/b584c577-138d-11e2-a766-4061867ca222/rolenames",
					"permissions": "/groups/b584c577-138d-11e2-a766-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/groups/b584c577-138d-11e2-a766-4061867ca222/activities",
					"feed": "/groups/b584c577-138d-11e2-a766-4061867ca222/feed",
					"roles": "/groups/b584c577-138d-11e2-a766-4061867ca222/roles",
					"users": "/groups/b584c577-138d-11e2-a766-4061867ca222/users"
				}
			},
			"path": "mygroup",
			"update": "something"
		}
	],
	"timestamp": 1349951749829,
	"duration": 55,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	

##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/groups/{group_uuid or group_path}"
```

## 그룹 정보 수정하기
[]({'id':'putGroup'})

##### Request URI
  
```
'PUT' /{baasio-id}/{app-id}/groups/{group_uuid or group_path}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|

##### Request Body

Group Entity는 미리 정의한 스키마가 있으니 자세한 정보는 [Group Entity](#groupEntity)에서 살펴보시면 됩니다.

```	
{
	"update":"something"
}
```
	
##### Request

```
'POST' https://api.baas.io/my-baasio-id/my-app-id/groups

{
	"update":"something"
}
```

##### Response

- 성공
	- Code: 200 
	- Contents:

```  
{
	"action": "put",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/groups",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/groups",
	"entities": [
		{
			"uuid": "b584c577-138d-11e2-a766-4061867ca222",
			"type": "group",
			"created": 1349951013123,
			"modified": 1349951215587,
			"metadata": {
				"path": "/groups/b584c577-138d-11e2-a766-4061867ca222",
				"sets": {
					"rolenames": "/groups/b584c577-138d-11e2-a766-4061867ca222/rolenames",
					"permissions": "/groups/b584c577-138d-11e2-a766-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/groups/b584c577-138d-11e2-a766-4061867ca222/activities",
					"feed": "/groups/b584c577-138d-11e2-a766-4061867ca222/feed",
					"roles": "/groups/b584c577-138d-11e2-a766-4061867ca222/roles",
					"users": "/groups/b584c577-138d-11e2-a766-4061867ca222/users"
				}
			},
			"path": "mygroup",
			"update": "something"
		}
	],
	"timestamp": 1349951215507,
	"duration": 114,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	

##### Example

```
curl -X PUT -i -H "Authorization: Bearer {auth_key}" -d '{ \"update\":\"something\" }' "https://api.baas.io/my-baasio-id/my-app-id/groups/{group_id}"
```

## 그룹 삭제하기
[]({'id':'deleteGroup'})

##### Request URI
  
```
'DELETE' /{baasio-id}/{app-id}/groups/{group_uuid or group_path}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|

##### Request

```
'DELETE' https://api.baas.io/my-baasio-id/my-app-id/groups/mygroup
```
	
또는
	
```
'DELETE' https://api.baas.io/my-baasio-id/my-app-id/groups/b584c577-138d-11e2-a766-4061867ca222
```
	
##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
	"action": "delete",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/groups",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/groups",
	"entities": [
		{
			"uuid": "b584c577-138d-11e2-a766-4061867ca222",
			"type": "group",
			"created": 1349951013123,
			"modified": 1349951215587,
			"metadata": {
				"path": "/groups/b584c577-138d-11e2-a766-4061867ca222",
				"sets": {
					"rolenames": "/groups/b584c577-138d-11e2-a766-4061867ca222/rolenames",
					"permissions": "/groups/b584c577-138d-11e2-a766-4061867ca222/permissions"
				},
				"collections": {
					"activities": "/groups/b584c577-138d-11e2-a766-4061867ca222/activities",
					"feed": "/groups/b584c577-138d-11e2-a766-4061867ca222/feed",
					"roles": "/groups/b584c577-138d-11e2-a766-4061867ca222/roles",
					"users": "/groups/b584c577-138d-11e2-a766-4061867ca222/users"
				}
			},
			"path": "mygroup",
			"update": "something"
		}
	],
	"timestamp": 1349951810041,
	"duration": 201,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
	
##### Example
 
```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/groups/{group_id}"
```

## 그룹에 사용자를 추가하기
[]({'id':'postGroupUser'})

##### Request URI

```
'POST' /{baasio-id}/{app-id}/groups/{group_uuid or group_path}/users/{user_uuid or username}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|
|user_uuid or username|사용자 등록 후 반환 받은 UUID 혹은 username|


##### Response

- 성공
	- Code: 200 
	- Contents:

```json
{
  "action": "post",
  "application": "8e59b1fa-18e0-11e2-a311-4061867ca222",
  "params": {},
  "path": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users",
  "uri": "https://api.baas.io/my-baasio-id/test/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users",
  "entities": [
	{
	  "uuid": "f51a6aab-1cdf-11e2-9b13-4061867ca222",
	  "type": "user",
	  "name": "realbeast",
	  "created": 1350975898997,
	  "modified": 1350975898997,
	  "activated": true,
	  "email": "realbeast@mail.com",
	  "metadata": {
		"path": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222",
		"sets": {
		  "rolenames": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/rolenames",
		  "permissions": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/permissions"
		},
		"collections": {
		  "activities": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/activities",
		  "devices": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/devices",
		  "feed": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/feed",
		  "groups": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/groups",
		  "roles": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/roles",
		  "following": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/following",
		  "followers": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/followers"
		}
	  },
	  "picture": "https://www.gravatar.com/avatar/b150400a18767d0c9b0c24672bc3204f",
	  "username": "realbeast"
	}
  ],
  "timestamp": 1350978519878,
  "duration": 79,
  "organization": "my-baasio-id",
  "applicationName": "test"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example
 
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/groups/{group_uuid or group_path}/users/{user_uuid or username}"
```

## 그룹에 등록된 사용자을 조회하기
[]({'id':'getGroupUsers'})

##### Request URI

```
'GET' /{baasio-id}/{app-id}/groups/{group_uuid or group_path}/users
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|



##### Response

- 성공
	- Code: 200 
	- Contents:

```
{
  "action": "get",
  "application": "8e59b1fa-18e0-11e2-a311-4061867ca222",
  "params": {},
  "path": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users",
  "uri": "https://api.baas.io/my-baasio-id/my-app-id/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users",
  "entities": [
	{
	  "uuid": "f51a6aab-1cdf-11e2-9b13-4061867ca222",
	  "type": "user",
	  "name": "realbeast",
	  "created": 1350975898997,
	  "modified": 1350975898997,
	  "activated": true,
	  "email": "realbeast@mail.com",
	  "metadata": {
		"path": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222",
		"sets": {
		  "rolenames": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/rolenames",
		  "permissions": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/permissions"
		},
		"collections": {
		  "activities": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/activities",
		  "devices": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/devices",
		  "feed": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/feed",
		  "groups": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/groups",
		  "roles": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/roles",
		  "following": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/following",
		  "followers": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/followers"
		}
	  },
	  "picture": "https://www.gravatar.com/avatar/b150400a18767d0c9b0c24672bc3204f",
	  "username": "realbeast"
	}
  ],
  "timestamp": 1350978519878,
  "duration": 79,
  "organization": "my-baasio-id",
  "applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example

```
curl -X GET -i -H "Authorization: Bearer {auth_key}" -d "https://api.baas.io/my-baasio-id/my-app-id/{uuid|groupname}/users"
```

## 그룹에서 사용자를 제외하기
[]({'id':'deleteGroupUser'})

##### Request URI

```
'DELETE'`' /{baasio-id}/{app-id}/groups/{group_uuid or group_path}/users/{user_uuid or username}
```

##### Parameters

|파라미터|설명|
|:-----------:|:------------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|
|user_uuid or username|사용자 등록 후 반환 받은 UUID 혹은 username|


##### Response

- 성공
	- Code: 200 
	- Contents:

```
{
  "action": "delete",
  "application": "8e59b1fa-18e0-11e2-a311-4061867ca222",
  "params": {},
  "path": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users",
  "uri": "https://api.baas.io/my-baasio-id/my-app-id/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users",
  "entities": [
	{
	  "uuid": "f51a6aab-1cdf-11e2-9b13-4061867ca222",
	  "type": "user",
	  "name": "realbeast",
	  "created": 1350975898997,
	  "modified": 1350975898997,
	  "activated": true,
	  "email": "realbeast@mail.com",
	  "metadata": {
		"path": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222",
		"sets": {
		  "rolenames": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/rolenames",
		  "permissions": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/permissions"
		},
		"collections": {
		  "activities": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/activities",
		  "devices": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/devices",
		  "feed": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/feed",
		  "groups": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/groups",
		  "roles": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/roles",
		  "following": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/following",
		  "followers": "/groups/eda4b8c1-1ce5-11e2-9b13-4061867ca222/users/f51a6aab-1cdf-11e2-9b13-4061867ca222/followers"
		}
	  },
	  "picture": "https://www.gravatar.com/avatar/b150400a18767d0c9b0c24672bc3204f",
	  "username": "realbeast"
	}
  ],
  "timestamp": 1350978519878,
  "duration": 79,
  "organization": "my-baasio-id",
  "applicationName": "my-app-id"
}
```
	
- 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.

##### Example

```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/{uuid|groupname}/users/{uuid|username}"
```

## Group Entity|groupEntity

##### Group 기본 속성(Property)

|프로퍼티명|타입|설명|
|:------:|:-----:|:---------|
|uuid|UUID|Group 유일한 Entity ID|
|type|string|"group"|
|created|long|Entity 생성 일자 (UNIX timestamp)|
|modified|long|Entity 최종 수정일자 (UNIX timestamp)|
|path|string|그룹 Path( 필수 )|
|title|string|화면에 표시할 이름|

##### Group 기본 Set

|Set|타입|설명|
|:-----:|:-----:|:--------|
|connections|string|관계리스트|
|rolenames|string|롤(Role) 리스트 - 참고.[롤(Roles)](roles.html)|
|credentials|string|credentials 리스트|

##### Group 기본 Collection

|Collection|타입|설명|
|:-------:|:--------:|:------------|
|users|users|시용자와의 관계들|
|activities|activity|활동과의 관계들|
|feed|activity|개인적인 알림들|
|roles|role|롤(Role) 리스트|

















# Push
[]({'id':'push'})

Push 서비스는 baas.io 의 API 를 사용하는 앱을 대상으로 Push Notification 을 발송하기 위한 API 로 구성되어 있습니다.

Push 서비스를 사용하기 위해서는 MyPage 의 설정에서 Push 사용을 먼저 활성화 하여 주시기 바랍니다.
Push 사용이 활성화 되면 등록된 Device 를 대상으로 MyPage 의 푸시관리를 통해 전체 혹은 단말 유형이나 개별 사용자를 대상으로 Push Notification 을 발송할 수 있습니다.
물론 제공되는 API를 호출하여 Push Notification 을 발송할 수 있기 때문에 앱에서 발생하는 이벤트에 따라 같은 앱을 사용하는 다른 사용자에게 Push 를 전송할 수 있습니다.

## 준비 하기
[]({'id':'prepare'})

Push 서비스를 사용하기 위해서는 먼저 MyPage에서 Push 사용을 활성화 하고 인증서를 등록하여야 합니다.

- [ios 용 인증서 발급하기](http://www.jamfsoftware.com/libraries/pdf/white_papers/JAMF-Software-Generating-and-Renewing-an-APNs-Certificate.pdf)

- [Android API Key 발급 받기](http://blog.baas.io/2012/11/21/android-api-key-%EB%B0%9C%EA%B8%89-%EB%B0%9B%EA%B8%B0/)

APNS 인증서와 Google APIKey 를 baas.io에 등록합니다.

 - MyPage > 설정 > push인증서 설정 

Push 를 수신할 Device 는 실제 Device 에서 [Device 등록](#postDevice) API를 통해 등록하여야 합니다.

## Push 전송하기
[]({'id':'postPush'})

##### Request URI

```
'POST' /{baasio-id}/{app-id}/pushes
```

##### Parameters

|파라미터|설명|
|:----------:|:----------|
|baasio-id|회원 ID|
|app-id|앱 ID|
	

##### Request Body
	
```
{    
"target" : "user",    
"to" : "1cd2bcfc-48cb-11e2-9f20-06fd000000c2",    
"payload" : {                  
	"badge" : 8,                  
	"sound" : "bingbong.aiff",                  
	"alert" : "오늘은 비가 옵니다. 우산을 준비하세요"                 
	},    
"reserve" : "201210021500",    
"platform" : "I,G",    
"memo" : "portal"
}
```

##### body 구성

|발송 구분|target|to|
|:---------|:-----------:|:--------------------|
|User 발송|user|user entity의 uuid|
|Device 발송|device|device entity의 uuid|
|Tag 발송|tag|device entity의 tags property|
|전체 발송|all|null|

reserve 에 설정된 일자는 KST 기준입니다. 만약 2012년 10월 2일 15시 00분에 전송하기 를 원한다면 "201210021500" 을 설정하세요.

plarform 에 설정되는 I,G 는 ios 와 google android 를 의미합니다. ios 전용 앱이라면 "I" 로 설정하세요.

##### Request

```
'POST' https://api.baas.io/my-baasio-id/my-app-id/pushes 

{ 
    "target" : "user", 
    "to" : "1cd2bcfc-48cb-11e2-9f20-06fd000000c2", 
    "payload" : { 
        "badge" : 8, 
        "sound" : "bingbong.aiff", 
        "alert" : "오늘은 비가 옵니다. 우산을 준비하세요" 
    }, 
    "reserve" : "201210021500", 
    "platform" : "I,G", 
    "memo" : "portal" 
}
```
	
##### Response

- 성공
	- Code: 200 
	- Contents:

```
{
    "action": "post",
    "application": "e92799f5-f308-11e1-90c4-4061867ca222",
    "params": {},
    "path": "/pushes/",
    "uri": "http://api.baas.io/torg/tapp/pushes/apps",
    "entities": [
        {
            "type": "com.kthcorp.baas.PushApplication",
            "uuid": "2db6d191-f639-11e1-b75f-4061867ca222",
            "created": 1346726123835,
            "modified": 1346726123835,
            "target" : "user",
            "to" : [
                { 
                    "uuid" : "1cd2bcfc-48cb-11e2-9f20-06fd000000c2",
                    "name" : "tebeca"
                }
            ],
            "payload" : {
                  "badge" : 8,
                  "sound" : "bingbong.aiff",
                  "alert" : "오늘은 비가 옵니다. 우산을 준비하세요"},
            "reserve" : "201210021500",
            "platform" : "I,G",
            "status" : "sent",
            "count" : 1,
            "memo" : "portal"
        }
    ],
    "timestamp": 1346382949091,
    "duration": 120
}
```
	
- 에러
	- Code: 401 UNAUTHORIZED 
	- Contents:

```
{ error : "Log in" }
```
	
 	                		
##### Example

	curl -X POST https://api.baas.io/my-baasio-id/my-app-id/pushes \
	{"target" : "user",    \
	"to" : "1cd2bcfc-48cb-11e2-9f20-06fd000000c2",    \
	"payload" : {\                  
		"badge" : 8,\
        "sound" : "bingbong.aiff",\
        "alert" : "오늘은 비가 옵니다. 우산을 준비하세요"\
     },\
    "reserve" : "201210021500",\
    "platform" : "I,G",\
    "memo" : "portal"}



## Device 등록하기
[]({'id':'postDevice'})

##### Request URI

	`POST` /{baasio-id}/{app-id}/pushes/devices

##### Parameters

|파라미터|설명|
|:----------:|:----------|
|baasio-id|회원 ID|
|app-id|앱 ID|
	

##### Request Body
	
	{
  	"token" : "kljsdf87sdf987s6sdf5567s9s",
  	"platform" : "G",
  	"tags" : ["korean","male"]
	}

token 은 등록한 device 의 token  으로 단말에 설치된 어플리케이션에 할당된 token 으로 APNS 와 GCM(Google Cloud Message) API 를 통해 확인할 수 있습니다.

사용자가 로그인된 상태에서 user token 으로 device 를 등록하면, 해당 user 의 device 목록에 자동으로 등록됩니다.

이미 존재하는 device token 으로 재등록을 시도한다면 기존이 device 정보를 삭제하고 새로 등록하셔야 합니다.

push 의 수신 여부를 의미하는 state 는 자동 생성 됩니다.
	
##### Response

- 성공
	- Code: 200 
	- Contents:
	
#####  
	{
    "action": "post",
    "application": "e92799f5-f308-11e1-90c4-4061867ca222",
    "params": {},
    "path": "/pushes/devices",
    "uri": "http://api.baas.io/torg/tapp/pushes/apps",
    "entities": [
        {
            "type": "com.kthcorp.baas.PushApplication",
            "uuid": "2db6d191-f639-11e1-b75f-4061867ca222",
            "created": 1346726123835,
            "modified": 1346726123835,
            "token": "kljsdf87sdf987s6sdf5567s9s",
            "platform" : "G"
            "tags" : ["korean","male"]
            "state" : true
        }
    ],
    "timestamp": 1346382949091,
    "duration": 120
	}
	
- 에러
	- Code: 401 UNAUTHORIZED 
	- Contents:

```
{ 
    "error" : "Log in" 
}
```
 	                		
##### Example

```
curl -X POST https://api.baas.io/my-baasio-id/my-app-id/pushes/devices { \
    "token" : "kljsdf87sdf987s6sdf5567s9s", \
	"platform" : "G", \
	"tags" : ["korean","male"] \
}
```


## Device 변경하기
[]({'id':'putDevice'})

##### Request URI

```
'PUT' /{baasio-id}/{app-id}/pushes/devices/{device_id}
```

##### Parameters

|파라미터|설명|
|:----------:|:----------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|device_id|Device 의 uuid|
	

##### Request Body

```json	
{
	"token" : "kljsdf87sdf987s6sdf5567s9s",
	"platform" : "G",
	"tags" : ["korean","male"],
    "state":false
}
```

사용자가 로그인된 상태에서 user token 으로 device 를 등록하면, 해당 user 의 device 목록에 자동으로 등록됩니다.
state 는 수정될 device 의 상태이며 boolean값을 설정합니니다. state 가 false라면 Push 를 수신하지 않습니다.

##### Response

- 성공
	- Code: 200 
	- Contents:
	
```json
{
    "action": "put",
    "application": "e92799f5-f308-11e1-90c4-4061867ca222",
    "params": {},
    "path": "/pushes/devices",
    "uri": "http://api.baas.io/torg/tapp/pushes/apps/e92799f5-f308-11e1-90c4-4061867ca222",
    "entities": [
        {
            "type": "com.kthcorp.baas.PushApplication",
            "uuid": "2db6d191-f639-11e1-b75f-4061867ca222",
            "created": 1346726123835,
            "modified": 1346726123835,
            "token": "kljsdf87sdf987s6sdf5567s9s",
            "platform" : "G"
			"state":false
            "tags" : ["korean","male"]
        }
    ],
    "timestamp": 1346385949091,
    "duration": 120
}
```
	
- 에러
	- Code: 401 UNAUTHORIZED 
	- Contents:

``` 
{ 
    "error" : "Log in" 
}
```


##### Example

```
curl -X PUT https://api.baas.io/my-baasio-id/my-app-id/pushes/devices/2db6d191-f639-11e1-b75f-4061867ca222 { \
  	"token" : "kljsdf87sdf987s6sdf5567s9s", \
  	"platform" : "G", \
  	"tags" : ["korean","male"], \
	"state":false
}
```

## Device 정보 읽기
[]({'id':'getDevice'})

##### Request URI

```
'GET' /{baasio-id}/{app-id}/pushes/devices/{device_id}
```

##### Parameters

|파라미터|설명|
|:----------:|:----------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|device_id|Device 의 uuid|
	
	
##### Response

- 성공
	- Code: 200 
	- Contents:

```
{
    "action": "get",
    "application": "e92799f5-f308-11e1-90c4-4061867ca222",
    "params": {},
    "path": "/pushes/devices/e92799f5-f308-11e1-90c4-4061867ca222",
    "uri": "http://api.baas.io/torg/tapp/pushes/apps",
    "entities": [
        {
            "type": "com.kthcorp.baas.PushApplication",
            "uuid": "2db6d191-f639-11e1-b75f-4061867ca222",
            "created": 1346726123835,
            "modified": 1346726123835,
            "token": "kljsdf87sdf987s6sdf5567s9s",
            "platform" : "G"
			"state":false
            "tags" : ["korean","male"]
        }
    ],
    "timestamp": 1346385949091,
    "duration": 120
}
```

- 에러
	- Code: 401 UNAUTHORIZED 
	- Contents:

```
{ 
    "error" : "Log in" 
}
```
	
 	                		
##### Example

```
curl -X GET https://api.baas.io/my-baasio-id/my-app-id/pushes/devices/2db6d191-f639-11e1-b75f-4061867ca222
```

## Device 삭제하기
[]({'id':'deleteDevice'})

Device 를 삭제한다. 응답으로 삭제된 Device 의 정보를 전송한다.

##### Request URI

```
'DELETE' /{baasio-id}/{app-id}/pushes/devices/{device_id}
```

##### Parameters

|파라미터|설명|
|:----------:|:----------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|device_id|Device 의 uuid|

##### Response

- 성공
	- Code: 200 
	- Contents:

```
{
    "action": "delete",
    "application": "e92799f5-f308-11e1-90c4-4061867ca222",
    "params": {},
    "path": "/pushes/devices/e92799f5-f308-11e1-90c4-4061867ca222",
    "uri": "http://api.baas.io/torg/tapp/pushes/apps",
    "entities": [
        {
            "type": "com.kthcorp.baas.PushApplication",
            "uuid": "2db6d191-f639-11e1-b75f-4061867ca222",
            "created": 1346726123835,
            "modified": 1346726123835,
            "token": "kljsdf87sdf987s6sdf5567s9s",
            "platform" : "G"
			"state":false
            "tags" : ["korean","male"]
        }
    ],
    "timestamp": 1346385949091,
    "duration": 120
}
```
	
- 에러
	- Code: 401 UNAUTHORIZED 
	- Contents:

```
{ 
    "error" : "Log in" 
}
```
	
 	                		
##### Example

```
curl -X DELETE https://api.baas.io/my-baasio-id/my-app-id/pushes/devices/2db6d191-f639-11e1-b75f-4061867ca222
```


















# Help Center
[]({'id':'help'})

## 고객센터 코드 조회
[]({'id':'getHelpConfigurations'})

##### Request URI
  
```
'GET' /{baasio-id}/{app-id}/help
```

##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
    "entities": [
        {
            "created_at": 1351138964,
            "disabled": false,
            "featured_help": true,
            "featured_help_sort": 1,
            "id": 22,
            "is_portal": false,
            "mobile_featured_help": true,
            "mobile_featured_help_limit": 0,
            "mobile_featured_help_sort": 1,
            "name": "9a956e2c-182f-11e2-8d70-020026de0053",
            "official": false,
            "official_email": null,
            "organization_id": 14,
            "organization_uuid": "9a5f1bdd-182f-11e2-8d70-020026de0053",
            "public_accessable": false,
            "updated_at": 1351824877,
            "use_classification": true,
            "use_help": false,
            "use_push": true,
            "use_satisfaction_level": true,
            "use_status": true,
            "uuid": "9a956e2c-182f-11e2-8d70-020026de0053",
            "satisfaction_levels": [
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 1,
                    "disabled": false,
                    "id": 64,
                    "name": "보통",
                    "sort": 1,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 2,
                    "disabled": false,
                    "id": 65,
                    "name": "불만",
                    "sort": 2,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 3,
                    "disabled": false,
                    "id": 66,
                    "name": "칭찬",
                    "sort": 3,
                    "updated_at": "2012-10-25T04:22:44Z"
                }
            ],
            "statuses": [
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 1,
                    "disabled": false,
                    "id": 64,
                    "name": "미처리",
                    "sort": 1,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 2,
                    "disabled": false,
                    "id": 65,
                    "name": "처리중",
                    "sort": 2,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 3,
                    "disabled": false,
                    "id": 66,
                    "name": "완료",
                    "sort": 3,
                    "updated_at": "2012-10-25T04:22:44Z"
                }
            ],
            "classifications": [
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 1,
                    "disabled": false,
                    "id": 211,
                    "name": "일반",
                    "sort": 1,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 2,
                    "disabled": false,
                    "id": 212,
                    "name": "이용방법",
                    "sort": 2,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 3,
                    "disabled": false,
                    "id": 213,
                    "name": "장애",
                    "sort": 3,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 4,
                    "disabled": false,
                    "id": 214,
                    "name": "회원",
                    "sort": 4,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 5,
                    "disabled": false,
                    "id": 215,
                    "name": "요금",
                    "sort": 5,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 6,
                    "disabled": false,
                    "id": 216,
                    "name": "변경",
                    "sort": 6,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 7,
                    "disabled": false,
                    "id": 217,
                    "name": "제안",
                    "sort": 7,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 8,
                    "disabled": false,
                    "id": 218,
                    "name": "신고",
                    "sort": 8,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 9,
                    "disabled": false,
                    "id": 219,
                    "name": "스팸",
                    "sort": 9,
                    "updated_at": "2012-10-25T04:22:44Z"
                },
                {
                    "application_id": 22,
                    "created_at": "2012-10-25T04:22:44Z",
                    "default_id": 10,
                    "disabled": false,
                    "id": 220,
                    "name": "기타",
                    "sort": 10,
                    "updated_at": "2012-10-25T04:22:44Z"
                }
            ]
        }
    ]
}
```
 	                		
##### Example

```
curl -X GET https://api.baas.io/my-baasio-id/my-app-id/help
```

## 문의하기
[]({'id':'postQuestions'})

##### Request URI
  
```
'POST' /{baasio-id}/{app-id}/help/questions
```

##### Body Parameters
 
|파라미터|자료형|기본값|필수|설명|              
|:----:|:------:|:-------:|:-----:|:----------|
|email|string||*|문의자 이메일|
|content|string||*|문의 내용|        
|classification_id|integer||*|문의 분류|
|app_info|string|||모바일 앱 정보|
|device_info|string|||모바일 장비 정보|
|os_info|string|||모바일 OS 정보|
|tags|string|||태그정보|

>info|Note|classification_id?|classification_id는 "고객센터 코드 조회"에서 조회한 classifications Collection의 id값을 의미함

##### Request Body
	
```
{
	"email":"baas@baas.io",
	"content":"content", 
	"classification_id":1
}
```

##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
    "action": "post",
    "application": "9a956e2c-182f-11e2-8d70-020026de0053",
    "params": {},
    "entities": [
        {
            "uuid": "2b270e14-cdd2-412b-9f82-b4bf969a8810",
            "type": "help",
            "accepted_at": "20121025",
            "accepted_number": "121025132300000",
            "answer_count": 0,
            "answers_count": 0,
            "app_info": null,
            "application_id": 22,
            "classification_id": 1,
            "completed_at": null,
            "content": "content",
            "created_at": 1351139026,
            "deleted": false,
            "device_info": null,
            "disabled": false,
            "editable": true,
            "email": "baas@baas.io",
            "id": 2020,
            "official": false,
            "os_info": null,
            "platform": null,
            "public_accessible": false,
            "satisfaction_level_id": 0,
            "status_id": 64,
            "tags": [],
            "temporary_answer": null,
            "title": null,
            "updated_at": 1351139026,
            "user_id": 184,
            "user_name": "user_name184",
            "view_count": 0,
            "vote": 0
        }
    ],
    "timestamp": 1351139025160,
    "duration": 1337,
    "organization": "my-baasio-id",
    "applicationName": "my-app-id"
}
```

* 에러

다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
 	                		
##### Example

```
curl -X POST https://api.baas.io/my-baasio-id/my-app-id/help/questions \
{"email":"baas@baas.io","content":"content", "classification_id":1}
```

## 도움말 등록
[]({'id':'postHelp'})

##### Request URI
  
```
'POST' /{baasio-id}/{app-id}/help/helps
```

##### Request Body
	
```json
{ 
	"title": "baas.io 사용은?", 
	"content": "잘 사용하시면 됩니다.", 
	"classification_id":1 
}
```

##### Body Requests
 
|파라미터|자료형|기본값|필수|설명|              
|:----:|:------:|:-------:|:-----:|:----------|
|title|string||*|도움말 제목|
|content|string||*|도움말 내용|
|classification_id|integer||*|도움말 분류|


##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{	
    "action": "post",
    "application": "9a956e2c-182f-11e2-8d70-020026de0053",
    "params": {},
    "entities": [
        {
            "uuid": "76f3fa3c-6302-461e-8fed-a3c704a8a2b2",
            "type": "help",
            "application_id": 22,
            "classification_id": 1,
            "content": "잘 사용하시면 됩니다.",
            "created_at": 1351149297,
            "disabled": false,
            "id": 47,
            "is_featured": false,
            "title": "baas 사용은?",
            "updated_at": 1351149297,
            "view_count": 0
        }
    ],
    "timestamp": 1351149297803,
    "duration": 81,
    "organization": "my-baasio-id",
    "applicationName": "my-app-id"
}
```

 	                		
##### Example

```
curl -X POST https://api.baas.io/my-baasio-id/my-app-id/help/helps \
{ "title": "baas 사용은?", "content": "잘 사용하시면 됩니다.", "classification_id":1 }
```

## 도움말 조회
[]({'id':'getHelp'})

##### Request URI
  
```
'GET' /{baasio-id}/{app-id}/help/helps/{help_uuid}
```

##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
    "action": "get",
    "application": "9a956e2c-182f-11e2-8d70-020026de0053",
    "params": {},
    "entities": [
        {
            "uuid": "76f3fa3c-6302-461e-8fed-a3c704a8a2b2",
            "type": "help",
            "application_id": 22,
            "classification_id": 1,
            "content": "잘 사용하시면 됩니다.",
            "created_at": 1351149297,
            "disabled": false,
            "id": 47,
            "is_featured": false,
            "title": "baas 사용은?",
            "updated_at": 1351149297,
            "view_count": 0
        }
    ],
    "timestamp": 1351149468265,
    "duration": 24,
    "organization": "my-baasio-id",
    "applicationName": "my-app-id"
}
```

 	                		
##### Example

```
curl -X GET https://api.baas.io/my-baasio-id/my-app-id/help/helps/3ee8a6fe-41d3-4ead-a416-f680cf35bf61
```

## 도움말 수정
[]({'id':'putHelp'})

##### Request URI
  
```
'PUT' /{baasio-id}/{app-id}/help/helps/{help_uuid}
```


##### Request Body
	
```json
{ 
	"title": "baas.io 사용 방법은?", 
	"content": "가이드 문서를 참고 하세요.", 
	"classification_id":4 
}
```

##### Body Requests
 
|파라미터|자료형|기본값|필수|설명|              
|:----:|:------:|:-------:|:-----:|:----------|
|title|string||*|도움말 제목|
|content|string||*|도움말 내용|
|classification_id|integer||*|도움말 분류|  


##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
    "action": "put",
    "application": "9a956e2c-182f-11e2-8d70-020026de0053",
    "params": {},
    "entities": [
        {
            "uuid": "3ee8a6fe-41d3-4ead-a416-f680cf35bf61",
            "type": "help",
            "application_id": 22,
            "classification_id": 4,
            "content": "가이드 문서를 참고 하세요.",
            "created_at": 1351149335,
            "disabled": false,
            "id": 48,
            "is_featured": false,
            "title": "baas 사용 방법은?",
            "updated_at": 1351149468,
            "view_count": 0
        }
    ],
    "timestamp": 1351149468265,
    "duration": 24,
    "organization": "my-baasio-id",
    "applicationName": "my-app-id"
}
```
                		
##### Example

```
curl -X PUT https://api.baas.io/my-baasio-id/my-app-id/help/helps/3ee8a6fe-41d3-4ead-a416-f680cf35bf61 \
{ "title": "baas 사용 방법은?", "content": "가이드 문서를 참고 하세요.", "classification_id":4 }
```

## 도움말 삭제
[]({'id':'deleteHelp'})

##### Request URI
  
```
'DELETE' /{baasio-id}/{app-id}/help/helps/{help_uuid}
```


##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{	
    "action": "delete",
    "application": "9a956e2c-182f-11e2-8d70-020026de0053",
    "params": {},
    "entities": [
        {
            "uuid": "14389952-2b2c-4c43-a396-0d1b8c352c51",
            "type": "help",
            "application_id": 22,
            "classification_id": 1,
            "content": "내용3",
            "created_at": 1351149601,
            "disabled": true,
            "id": 52,
            "is_featured": false,
            "title": "제목3",
            "updated_at": 1351149626,
            "view_count": 0
        }
    ],
    "timestamp": 1351149626750,
    "duration": 20,
    "organization": "my-baasio-id",
    "applicationName": "my-app-id"
}
```
 	                		
##### Example

```
curl -X DELETE https://api.baas.io/my-baasio-id/my-app-id/help/helps/14389952-2b2c-4c43-a396-0d1b8c352c51
```

## 도움말 검색
[]({'id':'searchHelp'})

##### Request URI
  
```
'GET' /{baasio-id}/{app-id}/help/helps?keyword={keyword}&page={page}
```

##### Query String
 
|파라미터|자료형|기본값|필수|설명|              
|:----:|:------:|:-------:|:-----:|:----------|
|page|integer||페이지 번호|
|keyword|string||검색어|


##### Response

* 성공
	* Code: 200 
	* Contents:

```json  
{
    "action": "get",
    "application": "9a956e2c-182f-11e2-8d70-020026de0053",
    "params": {
        "page": [
            "1"
        ],
        "keyword": [
            "baa"
        ]
    },
    "entities": [
        {
            "type": "help",
            "name": "추천 도움말",
            "helps": [
                {
                    "application_id": 22,
                    "classification_id": 0,
                    "content": "",
                    "created_at": 1351149335,
                    "disabled": false,
                    "id": 48,
                    "title": "baas 사용 방법은?",
                    "updated_at": 1351149468,
                    "uuid": "3ee8a6fe-41d3-4ead-a416-f680cf35bf61",
                    "view_count": 0,
                    "is_featured": true
                },
                {
                    "application_id": 22,
                    "classification_id": 0,
                    "content": "",
                    "created_at": 1351149297,
                    "disabled": false,
                    "id": 47,
                    "title": "baas 사용은?",
                    "updated_at": 1351149297,
                    "uuid": "76f3fa3c-6302-461e-8fed-a3c704a8a2b2",
                    "view_count": 0,
                    "is_featured": true
                }
            ],
            "id": 0,
            "sort": 0
        },
        {
            "type": "help",
            "name": "일반",
            "helps": [
                {
                    "application_id": 22,
                    "classification_id": 1,
                    "content": "",
                    "created_at": 1351149297,
                    "disabled": false,
                    "id": 47,
                    "title": "baas 사용은?",
                    "updated_at": 1351149297,
                    "uuid": "76f3fa3c-6302-461e-8fed-a3c704a8a2b2",
                    "view_count": 0,
                    "is_featured": false
                }
            ],
            "id": 211,
            "sort": 1
        },
        {
            "type": "help",
            "name": "이용방법",
            "helps": [],
            "id": 212,
            "sort": 2
        },
        {
            "type": "help",
            "name": "장애",
            "helps": [],
            "id": 213,
            "sort": 3
        },
        {
            "type": "help",
            "name": "회원",
            "helps": [
                {
                    "application_id": 22,
                    "classification_id": 4,
                    "content": "",
                    "created_at": 1351149335,
                    "disabled": false,
                    "id": 48,
                    "title": "baas 사용 방법은?",
                    "updated_at": 1351149468,
                    "uuid": "3ee8a6fe-41d3-4ead-a416-f680cf35bf61",
                    "view_count": 0,
                    "is_featured": false
                }
            ],
            "id": 214,
            "sort": 4
        },
        {
            "type": "help",
            "name": "요금",
            "helps": [],
            "id": 215,
            "sort": 5
        },
        {
            "type": "help",
            "name": "변경",
            "helps": [],
            "id": 216,
            "sort": 6
        },
        {
            "type": "help",
            "name": "제안",
            "helps": [],
            "id": 217,
            "sort": 7
        },
        {
            "type": "help",
            "name": "신고",
            "helps": [],
            "id": 218,
            "sort": 8
        },
        {
            "type": "help",
            "name": "스팸",
            "helps": [],
            "id": 219,
            "sort": 9
        },
        {
            "type": "help",
            "name": "기타",
            "helps": [],
            "id": 220,
            "sort": 10
        }
    ],
    "timestamp": 1351150143821,
    "duration": 1253,
    "organization": "test.help",
    "applicationName": "sandbox"
}
```
 	                		
##### Example

```
curl -X GET https://api.baas.io/my-baasio-id/my-app-id/help/helps?keyword=baa&page=1
```











# Role
[]({'id':'role'})

## 롤 만들기
[]({'id':'postRoles'})

##### Request URI

```
'POST' /{baasio-id}/{app-id}/roles
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
	
##### Request Body

```json	
{
	"name" : "newrole",
	"title" : "NewRole"
}
```
		
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"action": "post",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/roles",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/roles",
	"entities": [
		{
			"uuid": "fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2",
			"type": "role",
			"name": "newrole",
			"created": 1350005364546,
			"modified": 1350005364546,
			"inactivity": 0,
			"metadata": {
				"path": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2",
				"sets": {
					"permissions": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2/permissions"
				},
				"collections": {
					"groups": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2/groups",
					"users": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2/users"
				}
			},
			"roleName": "newrole",
			"title": "NewRole"
		}
	],
	"timestamp": 1350005364464,
	"duration": 288,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.	

##### Example

```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -d '{ \"name\" : \"newrole\", \"title\" : \"NewRole\" }' "https://api.baas.io/my-baasio-id/my-app-id/roles"
```

## 롤 조회하기
[]({'id':'getRoles'})

##### Request URI

```
'GET' /{baasio-id}/{app-id}/roles
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|


	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"action": "get",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/roles",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/roles",
	"entities": [
		{
			"uuid": "70f39f36-1825-379d-8385-7a7fbe9ec74a",
			"type": "role",
			"name": "admin",
			"created": 1349940834371,
			"modified": 1349940834371,
			"inactivity": 0,
			"metadata": {
				"path": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a",
				"sets": {
					"permissions": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/permissions"
				},
				"collections": {
					"groups": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/groups",
					"users": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/users"
				}
			},
			"roleName": "admin",
			"title": "Administrator"
		},
		{
			"uuid": "b8f8f336-30c9-3553-b447-6891f3e1e6bf",
			"type": "role",
			"name": "default",
			"created": 1349940834495,
			"modified": 1349940834495,
			"inactivity": 0,
			"metadata": {
				"path": "/roles/b8f8f336-30c9-3553-b447-6891f3e1e6bf",
				"sets": {
					"permissions": "/roles/b8f8f336-30c9-3553-b447-6891f3e1e6bf/permissions"
				},
				"collections": {
					"groups": "/roles/b8f8f336-30c9-3553-b447-6891f3e1e6bf/groups",
					"users": "/roles/b8f8f336-30c9-3553-b447-6891f3e1e6bf/users"
				}
			},
			"roleName": "default",
			"title": "Default"
		},
		{
			"uuid": "bd397ea1-a71c-3249-8a4c-62fd53c78ce7",
			"type": "role",
			"name": "guest",
			"created": 1349940834580,
			"modified": 1349940834580,
			"inactivity": 0,
			"metadata": {
				"path": "/roles/bd397ea1-a71c-3249-8a4c-62fd53c78ce7",
				"sets": {
					"permissions": "/roles/bd397ea1-a71c-3249-8a4c-62fd53c78ce7/permissions"
				},
				"collections": {
					"groups": "/roles/bd397ea1-a71c-3249-8a4c-62fd53c78ce7/groups",
					"users": "/roles/bd397ea1-a71c-3249-8a4c-62fd53c78ce7/users"
				}
			},
			"roleName": "guest",
			"title": "Guest"
		}
	],
	"timestamp": 1350005054235,
	"duration": 163,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.	
	
##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles"
```

## 롤이름 혹은 UUID로 조회하기
[]({'id':'getRole'})

##### Request URI

```
'GET' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|

	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"action": "get",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/roles",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/roles",
	"entities": [
		{
			"uuid": "70f39f36-1825-379d-8385-7a7fbe9ec74a",
			"type": "role",
			"name": "admin",
			"created": 1349940834371,
			"modified": 1349940834371,
			"inactivity": 0,
			"metadata": {
				"path": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a",
				"sets": {
					"permissions": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/permissions"
				},
				"collections": {
					"groups": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/groups",
					"users": "/roles/70f39f36-1825-379d-8385-7a7fbe9ec74a/users"
				}
			},
			"roleName": "admin",
			"title": "Administrator"
		}
	],
	"timestamp": 1350005054235,
	"duration": 163,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X GET -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/{role_uuid or role_name}"
```

## 롤 삭제하기
[]({'id':'deleteRole'})

##### Request URI

```
'DELETE' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|

	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"action": "delete",
	"application": "027de571-1376-11e2-a5bf-4061867ca222",
	"params": {},
	"path": "/roles",
	"uri": "https://api.baas.io/my-baasio-id/my-app-id/roles",
	"entities": [
		{
			"uuid": "fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2",
			"type": "role",
			"name": "newrole",
			"created": 1350005364546,
			"modified": 1350005364546,
			"inactivity": 0,
			"metadata": {
				"path": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2",
				"sets": {
					"permissions": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2/permissions"
				},
				"collections": {
					"groups": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2/groups",
					"users": "/roles/fa9e1073-9f5f-3e6b-8ae8-5813be89b1c2/users"
				}
			},
			"roleName": "newrole",
			"title": "NewRole"
		}
	],
	"timestamp": 1350005554920,
	"duration": 321,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/{role_uuid or role_name}"
```

## 롤에 권한 추가하기
[]({'id':'postPermission'})

##### Request URI

```
'POST' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}
	
{
	"permission" : "get,put,post,delete:/users/me/groups"
}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|
|permission|URL 패턴과 Operation을 조합하여 만든 규칙 - 참고. [Apache Ant pattern matching](http://ant.apache.org/manual/dirtasks.html#patterns)|

	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
  "action" : "post",
  "application" : "7fb8d891-477d-11e1-b2bd-22000a1c4e22",
  "params" : {
	"_" : [ "1328058543902" ]
  },
  "path": "/roles",
  "uri" : "https://api.baas.io/22000a1c4e22-7fb8d891-477d-11e1-b2bd/7fb8d891-477d-11e1-b2bd-22000a1c4e22",
  "entities":  [
	  {
	   "uuid": "382d0991-74bb-3548-8166-6b07e44495ef",
	   "type": "role",
	   "name": "manager",
	   "created": 1353359536973,
	   "modified": 1353359536973,
	   "inactivity": 0,
	   "metadata":  {
		 "path": "/roles/382d0991-74bb-3548-8166-6b07e44495ef",
		 "sets":  {
		   "permissions": "/roles/382d0991-74bb-3548-8166-6b07e44495ef/permissions"
		},
		"collections":  {
		  "groups": "/roles/382d0991-74bb-3548-8166-6b07e44495ef/groups",
		  "users": "/roles/382d0991-74bb-3548-8166-6b07e44495ef/users"
		}
	  },
	  "roleName": "manager",
	  "title": "Manager"
	}
  ],
	"timestamp": 1350005554920,
	"duration": 321,
	"organization": "my-baasio-id",
	"applicationName": "my-app-id"
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
	
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/manager -d '{"permission":"get,put,post,delete:/users/me/groups" }'
```

## 롤에 권한 삭제하기
[]({'id':'deletePermission'})

##### Request URI

```
'DELETE' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}/permission={grant_url_pattern}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|
|grant_url_pattern|URL 패턴과 Operation을 조합하여 만든 규칙 - 참고. [Apache Ant pattern matching](http://ant.apache.org/manual/dirtasks.html#patterns)|

	
##### Response

* 성공
	* Code: 200 
	* Contents:
	
```json
{
  "action" : "delete",
  "application" : "7fb8d891-477d-11e1-b2bd-22000a1c4e22",
  "params" : {
	"permission":  [
	   "delete"
	]
  },
  "path": "/roles",
  "uri" : "https://api.baas.io/22000a1c4e22-7fb8d891-477d-11e1-b2bd/7fb8d891-477d-11e1-b2bd-22000a1c4e22",
  "entities":  [
	  {
	  "uuid": "382d0991-74bb-3548-8166-6b07e44495ef",
	  "type": "role",
	  "name": "manager",
	  "created": 1353359536973,
	  "modified": 1353359536973,
	  "inactivity": 0,
	  "metadata":  {
		"path": "/roles/382d0991-74bb-3548-8166-6b07e44495ef",
		"sets":  {
		  "permissions": "/roles/382d0991-74bb-3548-8166-6b07e44495ef/permissions"
		},
		"collections":  {
		  "groups": "/roles/382d0991-74bb-3548-8166-6b07e44495ef/groups",
		  "users": "/roles/382d0991-74bb-3548-8166-6b07e44495ef/users"
		}
	  },
	  "roleName": "manager",
			"title": "Manager"
		  }
   ],
   "timestamp": 1353360762403,
   "duration": 181,
   "organization": "my-baasio-id",
   "applicationName": "my-app-id"
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
	
```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/manager/permission?permission=delete"
```

## 롤에 사용자 추가하기
[]({'id':'postRoleUser'})

롤과 사용자와의 관계를 설정할 수 있습니다. 롤에서 대해서 특정 사용자를 등록하는 경우를 알아보겠습니다.

##### Request URI

```
'POST' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}/users/{user_uuid or username}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|
|user_uuid or username|사용자 등록 후 반환 받은 UUID 혹은 username|

	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"timestamp":1350982257160,
	"duration":0
}
```

* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.	

##### Example
 
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/{role_uuid or role_name}/users/{user_uuid or username}"
```

## 롤에 사용자 삭제하기
[]({'id':'deleteRoleUser'})

##### Request URI

```
'DELETE' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}/users/{user_uuid or username}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|
|user_uuid or username|사용자 등록 후 반환 받은 UUID 혹은 username|

	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"timestamp":1350982257160,
	"duration":0
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.
	
##### Example
 
```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/{role_uuid or role_name}/users/{user_uuid or username}"
```

## 롤에 그룹 추가하기
[]({'id':'postRoleGroup'})

롤과 그룹관의 관계를 설정할 수 있습니다. 롤에서 대해서 특정 그룹을 등록하는 경우를 알아보겠습니다.

##### Request URI

```
'POST' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}/groups/{group_uuid or group_path}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|

	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"timestamp":1350982257160,
	"duration":0
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.	

##### Example
 
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/{role_uuid or role_name}/groups/{group_uuid or group_path}"
```

## 롤에 그룹 삭제하기
[]({'id':'deleteRoleGroup'})

##### Request URI

```
'DELETE' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}/groups/{group_uuid or group_path}
```

##### Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|
|group_uuid or group_path|그룹 생성시 만들어진 Group UUID 혹은 Group path|

	
##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"timestamp":1350982257160,
	"duration":0
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.	

##### Example
 
```
curl -X DELETE -i -H "Authorization: Bearer {auth_key}" "https://api.baas.io/my-baasio-id/my-app-id/roles/{role_uuid or role_name}/groups/{group_uuid or group_path}"
```

## 롤에 권한설정하기
[]({'id':'setPermission'})

추가한 사용자, 그룹에 대한 권한설정을 롤을 통해서 할 수 있다. 예를들어,

1. "salery" 라는 Collection을 생성, {baasio-id}/{app-id}/salery URI 가 부여됨
2. "Administrator" 롤을 생성
3. "Administrator" 롤에 특정한 사용자, 그룹을 추가

{baasio-id}/{app-id}/salery URI 는 기본적으로 조회가 안되고, "Administrator" 롤에 대해서만 조회, 추가, 수정, 삭제 권한을 설정하고 싶다. 이같은 상황일 때 해당 API 를 통해서 특정 롤에 대한 권한을 설정할 수 있다.

##### Request URI

```
'POST' /{baasio-id}/{app-id}/roles/{role_uuid or role_name}
```

##### URI Parameters

|파라미터|설명|
|:------:|:-------|
|baasio-id|회원 ID|
|app-id|앱 ID|
|role_uuid or role_name|롤 생성시 만들어진 Role UUID 혹은 name|

##### Request Body

```json
{
	"permission" : "get,put,post,delete:/salery"
}
```

|파라미터|형식|설명|
|:--------:|:----:|:----|
|permission|string|설정정보 - 허용할 HTTP METHOD:URI 패턴 ex. get,put,post,delete:/salery|

##### Response

* 성공
	* Code: 200 
	* Contents:

```json
{
	"timestamp":1350982257160,
	"duration":0
}
```
	
* 에러

	다양한 상황에 따라서 에러는 발생할 수 있습니다. baas.io 에서 예외사항 처리는 [개발가이드의 Error Handling](intro.html#intro-error-handling)을 살펴보세요.	

##### Example
 
```
curl -X POST -i -H "Authorization: Bearer {auth_key}" -d '{ \"permission\" : \"get,put,post,delete:/salery\" }' "https://api.baas.io/my-baasio-id/my-app-id/roles/{role_uuid or role_name}"
```

## Role Entity
[]({'id':'roleEntity'})

##### Role 기본 속성(Property)

|속성|형식|설명|
|:-----:|:-------:|:-----------|
|uuid|UUID|Role 유일한 Entity ID|
|type|string|"role"|
|created|long|Entity 생성 일자 (UNIX timestamp)|
|modified|long|Entity 최종 수정일자 (UNIX timestamp)|
|name|string|롤 이름 ( 필수 )|
|roleName|string|롤 이름|
|name|string|이름|
|title|string|출력되는 이름명|

##### Role 기본 Set

|Set|형식|설명|
|:-------:|:----------:|:-----------|
|permissions|string|퍼미션 리스트|

##### Role 기본 Collection

|Collection|형식|설명|
|:-------:|:---------:|:------------|
|users|users|시용자와의 관계들|
|groups|group|그룹과의 관계들|