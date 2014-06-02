# Intro
[]({'id':'intro', 'data-menu':'Intro'})

## Specification
[]({'id':'intro-specification', 'data-menu':'Specification'})

baas.io는 Android App을 개발하기 위한 SDK를 제공합니다. SDK는 **Static Library형태의 jar파일과 Open Source로 제공**되며, [Download](#android/intro/intro-download)를 통해 다운받으실 수 있습니다.

baas.io Android SDK는 아래와 같은 개발 환경을 지원합니다.

- OS 버전: Android 2.2 이상
- Tool: Intelli J, Eclipse

또한, 아래와 같은 외부 Library를 사용하고 있습니다.

- [Google Cloud Messaging Service](http://developer.android.com/google/gcm/index.html)
    - gcm.jar
- [Spring for android](http://www.springsource.org/spring-android)
    - spring-android-core-1.0.1.RELEASE.jar
    - spring-android-rest-template-1.0.1.RELEASE.jar
- [Jackson Java JSON-processor](http://jackson.codehaus.org/)
    - jackson-core-asl-1.9.1.jar
    - jackson-mapper-asl-1.9.1.jar

##### UTF-8 설정
이클립스 또는 ADT를 쓰실때에는 Workspace의 Encoding을 UTF-8로 설정하시기 바랍니다.

- Mac
 - ADT 또는 Eclipse의 Preferences > General > Workspace 이동
 - Text file encoding이 UTF-8로 되어 있지 않다면 UTF-8로 변경
- Windows
 - Window > Prefernces > General > Workspace 이동
 - Text file encoding이 UTF-8로 되어 있지 않다면 UTF-8로 변경

![](/images/develop/android/eclipse-preferences-utf-8.png)

## Download
[]({'id':'intro-download', 'data-menu':'Download'})

- SDK Library Binary(v0.8.6) [`Download`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.6.zip)
- SDK Source code [`Github`](http://github.com/baasio/baas.io-sdk-android) [`Download`](http://github.com/baasio/baas.io-sdk-android/archive/master.zip)
- Sample Project [`GitHub`](https://github.com/baasio/baas.io-sample-android) [`Download`](https://github.com/baasio/baas.io-sample-android/archive/master.zip)
- Startup Project [`GitHub`](https://github.com/baasio/baas.io-startup-android) [`Download`](https://github.com/baasio/baas.io-startup-android/archive/master.zip)
- HelpCenter Sample Project [`GitHub`](https://github.com/baasio/baas.io-helpcenter-android) [`Download`](https://github.com/baasio/baas.io-helpcenter-android/archive/master.zip)

## Version History
[]({'id':'intro-version-history', 'data-menu':'Version History'})

- v0.8.6 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.6.zip)
	- 카카오톡을 통한 인증 기능 추가
- v0.8.5 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.5.zip)
	- 푸시 단말 등록 과정 개선
- v0.8.4 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.4.zip)
	- Connection Timeout 및 Read Timeout을 설정할 수 있도록 setTimeout() 추가
    - sender id 변경시 단말 등록이 다시 진행되도록 수정
    - AggregateCounterSet, AggregateCounter 클래스 수정
- v0.8.3 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.3.zip)
	- 로그인된 사용자 업데이트시 기능 개선
    - connect/disconnect 기능 개선
    - 비밀번호 리셋 기능 추가
    - Push 메시지의 custom 필드 지원
    - Entity Bulk 생성 기능 추가
    - Push 단말 등록시 Tag의 길이 제한 변경(12자 => 36자)
    - Spring for android 버전 교체(v1.0.0 => v1.0.1)
    - HTTP 401 오류의 예외처리 개선
    - BaasioLocation의 위도, 경도의 타입을 Double로 변경
- v0.8.2 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.2.zip)
    - 비밀번호 변경 및 초기화 제공
    - Push 단말 등록 개선
    - 파일 다운로드 기능 개선
    - [Hotfix]로그인시 단말등록 관련 버그 수정
- v0.8.1 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.1.zip)
    - 엔터티별 disconnect 기능 제공
    - 회원 탈퇴시 자동 로그아웃 처리
    - Push 단말 등록시 Tag 길이 제한(12자) 및 문자 제한 적용
- v0.8.0 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baas.io-sdk-android-v0.8.0.zip)
    - 간단한 설정으로 프로젝트 구성 지원
    - 고객센터 등의 새로운 기능 제공
    - 파일 사용성 강화
    - 비동기 처리 기능 개선
    - 클라이언트 SDK간의 구성과 사용법 표준화
- v0.1.0 [`다운로드`](http://baasio.github.com/baas.io-sdk-android/libraries/baasio_android_client_SDK_V0.1.0.zip)
	- 최초 배포

## Class Structure
[]({'id':'intro-class-structure', 'data-menu':'Class Structure'})

baas.io Android SDK는 baas.io에서 제공하는 서비스에 따라 아래와 같은 클래스를 제공합니다.

- Users(회원관리): BaasioUser
- Data(데이터관리): BaasioEntity
- Query(조회): BaasioQuery
- Group(그룹관리): BaasioGroup
- File(파일관리): BaasioFile
- Push(푸시메시지): BaasioPush
- Help Center(고객센터): BaasioHelp

## Method Rule
[]({'id':'intro-method-rule', 'data-menu':'Method Rule'})

Android는 Main UI Thread에서 네트워크 통신을 하지 않도록 하고 있습니다.
따라서, baas.io는 모든 클래스의 메소드에 대해 **동기/비동기 방식**을 지원하며, 쌍으로 제공하고 있습니다.

메소드의 이름은 방식에 따라, 동기식의 경우, 동사(Verb)로 명명하고 있으며, 비동기식은 동사(Verb)+InBackground 명명하고 있습니다.
아래의 예는 save(저장)이라는 동사에 따른 동기/비동기식 함수의 예를 보여주고 있습니다.

차이점은, 동기식은 메소드의 리턴(Return)값으로 결과를 전달되고 있으며, 비동기식은 메소드로 전달된 Callback을 통해 결과가 전달되고 있음을 알 수 있습니다.

```java
//동기식
BaasioEntity entity = new BaasioEntity("friend");
BaasioEntity savedEntity = entity.save();
```

```java
//비동기식
BaasioEntity entity = new BaasioEntity("friend");
entity.saveInBackground(
    new BaasioCallback<BaasioEntity> {  //결과를 받을 Callback
            @Override
            public void onResponse(BaasioEntity response) {
                // 성공
                BaasioEntity savedEntity = response;
            }
            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

## Exception Handling
[]({'id':'intro-exception-handling', 'data-menu':'Exception Handling'})

baas.io에서 제공되는 함수를 통해 요청을 할 때, 문제가 있어 성공되지 못한 경우, **에러 코드와 관련 오류 내용을 전달**합니다.
baas.io Android SDK에서는 전달된 **에러 코드, 오류 내용을 BaasioException을 통하여 앱에 전달**합니다.

```java
//동기식
BaasioEntity entity = new BaasioEntity("friend");
try {
    BaasioEntity savedEntity = entity.save();
} catch (BaasioException e){
    // 실패
    Log.e("Error", e.toString());	// 전체 내용

    // String statusCode = e.getStatusCode();	// Http Status Code
    // long errorCode = e.getErrorCode();		// 에러 코드
    //String errorDescription = e.getErrorDescription();	// 오류 내용
}
```

```java
//비동기식
BaasioEntity entity = new BaasioEntity("friend");
entity.saveInBackground(
    new BaasioCallback<BaasioEntity> {  //결과를 받을 Callback
            @Override
            public void onResponse(BaasioEntity response) {
                // 성공
                BaasioEntity savedEntity = response;
            }
            @Override
            public void onException(BaasioException e) {
                // 실패
                Log.e("Error", e.toString());
                //String statusCode = e.getStatusCode();	// Http Status Code
    			//long errorCode = e.getErrorCode();		// 에러 코드
    			//String errorDescription = e.getErrorDescription();	// 오류 내용
            }
        });
```

에러 코드는 다음과 같습니다.

|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.|
|101|404|요청받은 리소스가 서버에 존재하지 않습니다.|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|103|400|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.|
|190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|201|401|잘못된 id이거나 password 입니다.|
|202|401|접근 권한이 없습니다.|
|210|401|인증 토큰에 문제가 있습니다.|
|211|401|만료된 인증 토큰입니다.|
|212|401|차단된 사용자입니다.|
|213|401|탈퇴된 사용자입니다.|
|600|400|Push 기능이 활성화 되어 있지 않습니다.|
|620|400|Push 관련 에러가 발생했습니다.|
|911|400|이미 존재하는 리소스입니다.|
|912|400|예약된 리소스 이름입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|
|915|400|잘못된 쿼리입니다.|
|-100|500|알수 없는 에러입니다.|

[]({'class':'table table-striped table-bordered'})




# Users
[]({'id':'users', 'data-menu':'Users'})

baas.io는 가입/로그인/로그아웃/탈퇴 등의 **회원관리 기능을 제공**하고 있습니다. 또한 **Facebook을 통한 가입/로그인 기능**도 제공이 되고 있으며, 이런 기능들은 모두 BaasioUser 클래스를 이용하여 구현하실 수 있습니다. 

## BaasioUser 클래스
[]({'id':'users-class', 'data-menu':'Baasio User 클래스'})

BaasioUser클래스는 "users" Collection으로 관리되며, **"users" Collection으로 "user" entity를 생성/삭제하여 회원을 가입/탈퇴** 할 수 있습니다. 회원을 가입하는 방법은 username으로 가입하는 방법과 Facebook 계정으로 가입하는 방법을 지원합니다.

-----
`Note` Facebook, 카카오톡 가입
> Facebook 또는 카카오톡 계정을 통해 회원 가입하면 해당 서비스에 저장된 프로필 정보들이 함께 저장됩니다.

-----


## Sign Up
[]({'id':'users-sign-up', 'data-menu':'Sign Up'})

회원을 가입하기 위해서는, **username과 비밀번호**가 꼭 필요합니다. 이 외에, 이메일 주소, 이름을 추가로 넣을 수 있습니다.
username은 영문과 숫자, 특수기호를 사용할 수 있으며, 유일한 값이어야 합니다.
또한, 비밀번호 변경 또는 초기화를 위해서 가급적 이메일 주소를 받는 것이 좋습니다.

```java
BaasioUser.signUpInBackground(
    username                // ID(username)
    , name                  // 이름
    , email                 // 이메일
    , password              // 비밀번호
    , new BaasioSignUpCallback() {

            @Override
            public void onException(BaasioException e) {
                if (e.getErrorCode() == 913) {
                    // 이미 가입된 사용자
                    return;
                }

                // 기타 오류
            }

            @Override
            public void onResponse(BaasioUser response) {
                if (response != null) {
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```

#### 관련 에러코드
|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|201|401|잘못된 username이거나 password 입니다.|
|202|401|접근 권한(Permission)이 없습니다.|
|911|400|이미 존재하는 리소스입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|

[]({'class':'table table-striped table-bordered'})


## Sign Up with Facebook
[]({'id':'users-signup-via-facebook', 'data-menu':'Sign Up with Facebook'})
Facebook 계정을 통해 회원 가입을 할 수 있습니다. 이 기능을 이용하기 위해서는 먼저 **Facebook Api Key를 발급받으셔야 하며, Facebook Api Key와 Facebook SDK를 이용하여 인증 과정을 통해 Facebook Access Token을 발급** 받아야 합니다.

관련 내용은 [Facebook 가이드](#android/users/users-facebook)에 자세하게 설명되어 있습니다.

관련 샘플도 [Sample Project](https://github.com/baasio/baas.io-sample-android/archive/master.zip)에 구현되어 있으니, 참고하셔도 좋습니다.

Facebook Access Token을 발급 받은 후에는 아래와 같이 가입을 진행할 수 있습니다.

```java
BaasioUser.signUpViaFacebookInBackground(
    context			// Context
    , fb_access_token	// Facebook access token
    , new BaasioSignInCallback() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if(response != null) {
                    // 성공
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```
#### 관련 에러코드
|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|201|401|잘못된 username이거나 password 입니다.|
|202|401|접근 권한(Permission)이 없습니다.|
|911|400|이미 존재하는 리소스입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|

[]({'class':'table table-striped table-bordered'})

## Sign Up with Kakaotalk
[]({'id':'users-signup-via-kakaotalk', 'data-menu':'Sign Up with Kakaotalk'})
카카오톡 계정을 통해 회원 가입을 할 수 있습니다. 이 기능을 이용하기 위해서는 먼저 **Kakaotalk Api Key를 발급받으셔야 하며, Kakaotalk Api Key와 Kakaotalk SDK를 이용하여 인증 과정을 통해 Kakaotalk Access Token을 발급** 받아야 합니다.

관련 내용은 [Kakaotalk 개발가이드](https://developers.kakao.com/docs/android)에 자세하게 설명되어 있습니다.

관련 샘플도 [Sample Project](https://github.com/baasio/baas.io-sample-android/archive/master.zip)에 구현되어 있으니, 참고하셔도 좋습니다.

Kakaotalk Access Token을 발급 받은 후에는 아래와 같이 가입을 진행할 수 있습니다.

```java
BaasioUser.signUpViaKakaotalkInBackground(
    context			// Context
    , kkt_access_token	// Kakaotalk access token
    , new BaasioSignInCallback() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if(response != null) {
                    // 성공
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```
#### 관련 에러코드
|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|201|401|잘못된 username이거나 password 입니다.|
|202|401|접근 권한(Permission)이 없습니다.|
|911|400|이미 존재하는 리소스입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|

[]({'class':'table table-striped table-bordered'})

## Sign In
[]({'id':'users-sign-in', 'data-menu':'Sign In'})
회원가입이 되어 있으면 로그인을 하여 인증을 받을 수 있습니다. 로그인이 성공하면, 결과로 회원의 인증 토큰(Access Token)이 단말에 저장되어 SDK를 통해 관리되며, 이 인증 토큰(Access Token)은 로그인된 회원의 [역할(Role)](#basic_concept/security/security-role) 및 [권한(Permission)](#basic_concept/security/security-permission)을 체크하는 용도로 사용됩니다.

또한, **로그인이 성공되면 현재 로그인한 회원의 정보가 단말에 저장되며, SDK에서 로그인 상태에 따라 관리됩니다.**

아래와 같이 로그인을 진행할 수 있습니다.

```java
BaasioUser.signInInBackground(
    context			// Context
    , username		// Username
    , password		// Password
    , new BaasioSignInCallback() {

            @Override
            public void onException(BaasioException e) {
                if (e.getStatusCode() != null) {
                    if (e.getErrorCode() == 201) {
                        // username(ID) 또는 비밀번호 오류
                        return;
                    }
                }

                //기타 오류
            }

            @Override
            public void onResponse(BaasioUser response) {
                if (response != null) {
                    // 로그인 성공
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```

-----
`Note` 현재 로그인한 회원의 정보는 어떻게 확인하나요?
> Baas.io().getSignedInUser()를 호출하면 BaasioUser 객체로 Return됩니다.

`Warning` Access Token의 유효기간
> Access Token은 1일 간 유효합니다.

> **Access Token을 앱이 실행될때 마다 발급받아 처리하는 것은 좋은 방법이 아닙니다.**

> Twitter나 Facebook과 같은 앱들도 OAuth정책에 따라 유효시간이 존재하며, 이 유효시간이 지나면 회원으로부터 Username과 Password를 입력받아 직접 로그인하도록 처리하는 것이 좋습니다.

> 사용자의 Username, Password를 저장하여 자동으로 로그인하는 방법은 Username, Password가 유출될 수 있으므로 권장하지 않습니다.

-----

#### 관련 에러코드
|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|201|401|잘못된 username이거나 password 입니다.|
|202|401|접근 권한(Permission)이 없습니다.|
|212|401|차단된 사용자입니다.|
|213|401|탈퇴된 사용자입니다.|
|911|400|이미 존재하는 리소스입니다.|

[]({'class':'table table-striped table-bordered'})


## Sign In with Facebook
[]({'id':'users-signin-via-facebook', 'data-menu':'Sign In With Facebook'})

Facebook 계정을 통해 가입된 회원을 로그인합니다. 마찬가지로 Facebook Api Key가 필요하며, Facebook Api Key와 Facebook SDK를 이용하여 인증 과정을 통해 Facebook Access Token을 발급 받아 로그인을 진행합니다.

관련 내용은 [Facebook 가이드](#android/users/users-facebook)에 자세하게 설명되어 있습니다.

관련 샘플도 [Sample Project](https://github.com/baasio/baas.io-sample-android/archive/master.zip)에 구현되어 있으니, 참고하셔도 좋습니다.

Facebook Access Token을 발급 받은 후에는 아래와 같이 로그인을 진행할 수 있습니다.

```java
BaasioUser.signInViaFacebookInBackground(
    context
    , fb_access_token   //Facebook access token
    , new BaasioSignInCallback() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if(response != null) {
                    // 성공
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
201|401|잘못된 username이거나 password 입니다.
202|401|접근 권한(Permission)이 없습니다.
212|401|차단된 사용자입니다.
213|401|탈퇴된 사용자입니다.
911|400|이미 존재하는 리소스입니다.

[]({'class':'table table-striped table-bordered'})

## Sign In with Kakaotalk
[]({'id':'users-signin-via-kakaotalk', 'data-menu':'Sign In With Kakaotalk'})

카카오톡 계정을 통해 가입된 회원을 로그인합니다. 마찬가지로 Kakaotalk Api Key가 필요하며, Kakaotalk Api Key와 Kakaotalk SDK를 이용하여 인증 과정을 통해 Kakaotalk Access Token을 발급 받아 로그인을 진행합니다.

관련 내용은 [Kakaotalk 가이드](https://developers.kakao.com/docs/android)에 자세하게 설명되어 있습니다.

관련 샘플도 [Sample Project](https://github.com/baasio/baas.io-sample-android/archive/master.zip)에 구현되어 있으니, 참고하셔도 좋습니다.

Kakaotalk Access Token을 발급 받은 후에는 아래와 같이 로그인을 진행할 수 있습니다.

```java
BaasioUser.signInViaKakaotalkInBackground(
    context
    , kkt_access_token   //Kakaotalk access token
    , new BaasioSignInCallback() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if(response != null) {
                    // 성공
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
201|401|잘못된 username이거나 password 입니다.
202|401|접근 권한(Permission)이 없습니다.
212|401|차단된 사용자입니다.
213|401|탈퇴된 사용자입니다.
911|400|이미 존재하는 리소스입니다.

[]({'class':'table table-striped table-bordered'})

## Update User
[]({'id':'users-update', 'data-menu':'Update User'})
가입되어 있는 회원의 정보를 추가하거나 수정합니다. 정보는 **Entity의 Property**로 저장하며, 즉, Key와 Value의 쌍으로 저장할 수 있습니다.

아래는 성별 정보와 주소를 추가로 등록하는 예제입니다.

```java
BaasioUser user = Baas.io().getSignedInUser();
user.setProperty("gender","female");
user.setProperty("address","서울시");
user.updateInBackground(
    new BaasioCallback<BaasioUser>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if (response != null) {
                    // 성공
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```

이미 저장된 정보를 수정하기 위해서는 똑같은 이름의 Key에 수정할 내용을 Value로 설정하여 아래와 같이 요청합니다.

```java
BaasioUser user = Baas.io().getSignedInUser();
user.setProperty("gender","male");
user.updateInBackground(
    new BaasioCallback<BaasioUser>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if (response != null) {
                    // 성공
                    String name = response.getUsername(); // ID(Username)
                }
            }
        });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
212|401|차단된 사용자입니다.
213|401|탈퇴된 사용자입니다.
912|400|예약된 리소스 이름입니다.
913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.

[]({'class':'table table-striped table-bordered'})


## Change Password
[]({'id':'users-changepassword', 'data-menu':'Change Password'})
현재 로그인되어 있는 User의 비밀번호를 변경합니다. 기존 비밀번호와 새로운 비밀번호를 이용하여 비밀번호를 변경합니다.

```java
BaasioUser.changePasswordInBackground(
    oldPassword, newPassword
    new BaasioCallback<Boolean>() {

        @Override
        public void onException(BaasioException e) {
            // 실패
        }

        @Override
        public void onResponse(Boolean response) {
            if (response == true) {
                //성공
            }
        }
    });
```

#### 관련 에러코드

Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
103|400|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
201|401|잘못된 id이거나 password 입니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
212|401|차단된 사용자입니다.
213|401|탈퇴된 사용자입니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})


## Reset Password
[]({'id':'users-resetpassword', 'data-menu':'Reset Password'})
이메일을 이용하여 특정 User의 비밀번호를 초기화 합니다. **초기화를 위해서는 User의 가입 정보에 이메일 정보가 꼭 설정되어 있어야 합니다.**

초기화는 두 가지 방법으로 제공하고 있습니다.
첫 번째는 초기화 URL 주소를 얻어와 웹브라우저에서 해당 URL을 열어 이메일을 발송하여 초기화하는 방법이며, 두 번쨰는 API를 호출하여 이메일을 발송하여 초기화하는 방법입니다.

#### URL을 얻어 브라우저를 통한 초기화

회원 가입시에 입력된 이메일 주소 또는 User의 uuid, username을 파라미터로 전달하여 비밀번호를 초기화하기 위한 URL을 만들어 줍니다.

이렇게 얻어낸 URL을, 아래의 예제와 같이 웹브라우저로 열어 초기화를 진행합니다.
웹브라우저에는 초기화를 위한 이메일을 발송할 것인지 물어보는 화면이 나타납니다.

```java
Uri uri = BaasioUser.getResetPasswordUrl(email);

Intent intent = new Intent(Intent.ACTION_VIEW, uri);
startActivity(intent);
```

#### API를 호출하여 초기화

API를 호출하여 초기화를 위한 이메일이 발송되도록 요청합니다. 회원 가입시에 입력된 이메일 주소 또는 User의 uuid 나 username을 파라미터로 전달합니다.

```java
BaasioUser.resetPasswordInBackground(email, new BaasioCallback< Boolean>() {
    @Override
    public void onResponse(Boolean response) {
        if(response) {
            // 성공
        }
    }

    @Override
    public void onException(BaasioException e) {
        // 실패
    }
});
```

#### 관련 에러코드

Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
103|400|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
201|401|잘못된 id이거나 password 입니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
212|401|차단된 사용자입니다.
213|401|탈퇴된 사용자입니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})


## Unsubscribe User
[]({'id':'users-unsubscribe', 'data-menu':'Unsubscribe User'})
가입되어 있는 회원을 탈퇴 시킵니다. 이 함수를 호출하면 "users" Collection으로부터 해당 회원의 "user" Entity를 삭제합니다.

[역할(Role)](#basic_concept/security/security-role)과 [권한(Permission)](#basic_concept/security/security-permission)의 설정상태와 앱의 구현방법에 따라 현재 로그인된 회원이 아닌 다른 회원을 탈퇴시킬 수도 있습니다.

```java
BaasioUser user = Baas.io().getSignedInUser();
user.unsubscribeInBackground(
    new BaasioCallback<BaasioUser>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if (response != null) {
                    //성공 - 로그인되어 있는 사용자와 같은 사용자일 경우, 내부에서 로그아웃 처리됨.(v0.8.1 부터 지원)
                }
            }
        });
```

-----
`Warning` 회원 탈퇴
> 현재 로그인한 회원이 임의의 다른 회원을 탈퇴시킬 수 없도록, [역할(Role)](#basic_concept/security/security-role)과 [권한(Permission)](#basic_concept/security/security-permission) 설정을 올바르게 해야 합니다.

> 관련 가이드는 Basic Concepts의 [Security(보안)](#basic_concept/security/security)를 참고바랍니다.

-----

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.

[]({'class':'table table-striped table-bordered'})


## Facebook
[]({'id':'users-facebook', 'data-menu':'Facebook'})

baas.io는 **Facebook으로 로그인/가입하는 기능을 제공**하고 있습니다. 이 기능을 이용하기 위해서는 Facebook의 Access Token이 필요합니다.

이 가이드를 통해 Facebook SDK for Android v3.0을 이용하여 Facebook의 Access token을 얻는 방법을 가이드합니다. 더 자세한 내용은 [Facebook SDK for Android 페이지](https://developers.facebook.com/docs/android/)를 참고바랍니다.

관련 샘플은 baas.io-sample-project v0.8.1버전 이후부터 제공되고 있으니 참고 바랍니다.

##### Step1. Facebook 가입
[]({'id':'users-facebook-step1'})

Facebook 계정이 필요합니다. 계정이 없다면 가입해주세요.

##### Step2. Facebook SDK for Android 다운로드
[]({'id':'users-facebook-step2'})

Facebook SDK for Android에서 SDK를 다운로드하여 적당한 위치에 압축을 풀어줍니다.

##### Step3. Key Hash 생성
[]({'id':'users-facebook-step3'})

Debug용 Key의 Hash를 얻기 위해, 아래와 같은 명령어를 prompt에서 실행시킵니다. Windows에서 개발하시는 분들은 [openssl](http://slproweb.com/products/Win32OpenSSL.html) 설치가 필요합니다.

- OSX

```
keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
```

- Windows

```
keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%\.android\debug.keystore | openssl sha1 -binary | openssl base64
```

실행시키면 비밀번호를 묻는데, 'android'라고 입력하면 30글자로 된 Hash 값이 결과로 나옵니다.
**이 Key Hash 값은 앱 생성을 위해 사용되니 잘 적어놓습니다.**

![](../../images/develop/android/users-facebook-keyhash.png)

-----
`Warning` 개발용과 배포용
> 개발시에는 Debug용 Key의 Hash만 얻어내면 되지만, 배포할때는 배포용 Key의 Hash도 필요합니다. 등록한 Key와 앱에 설정된 인증키(keystore)가 다르면 Facebook에서 오류가 나옵니다.

-----

##### Step4. Facebook 개발자 설정
[]({'id':'users-facebook-step4'})

Facebook에 로그인을 하면 오른쪽 상단에 Dropdown 메뉴가 있습니다.(Profile 이름 옆에)

![](/images/develop/android/users-facebook-profile-menu.png)

Settings 메뉴를 선택하고, 왼쪽 세션에 Developer Settings를 선택하면 Developer 등록창이 나타납니다. 등록을 마칩니다.

![click developer settings](/images/develop/android/users-facebook-click-developer-settings.png)

이제 [Step3](#facebook-step3)에서 얻어낸 Key Hash를 입력하면 개발자 등록이 완료됩니다.

![facebook developer settings](/images/develop/android/users-facebook-developer-settings.png)

##### Step5. Facebook 앱 생성
[]({'id':'users-facebook-step5'})

App Dashboard 페이지로 이동하여, '새 앱 만들기(Create New App)'를 선택합니다.

![click create new app](/images/develop/android/users-facebook-click-create-new-app.png)

나타나는 '새 앱 만들기(Create New App)'창에 원하는 이름을 입력해줍니다.

![facebook create new app](/images/develop/android/users-facebook-create-new-app.png)

생성이 완료되면 아래와 같은 App ID가 나옵니다. **이 App ID는 개발하시는 애플리케이션에서 사용될 것이므로 기억해 둡니다.**

![facebook app id](/images/develop/android/users-facebook-info-app-id.png)

이제 '앱 수정(Edit App)'을 선택합니다.

![click edit app](/images/develop/android/users-facebook-click-edit-app.png)

'네이티브 Android 앱(Native Android App)'세션을 엽니다. Key Hash란에 Step2에서 얻어낸 Key Hash를 입력하고 저장합니다.

##### Step6. 새로운 Android 앱 프로젝트 생성 및 App ID 등록
[]({'id':'users-facebook-step6'})

Eclipse에서 File < New > Project를 선택하여 새로운 Android 프로젝트를 생성합니다.

생성된 프로젝트에서 오른쪽을 클릭하여 "properties"를 선택하고, Android탭을 선택하여, Step 2에서 다운로드 받은 Facebook SDK를 선택해줍니다.

![input key hash](/images/develop/android/users-facebook-input-key-hash.png)

res/values 위치에 있는 string.xml 파일에 아래와 같이 app_id라는 string 값을 추가하고, Step 5에서 얻은 Facebook App ID를 넣어줍니다.

```xml
<resources>

    ...

    <!-- Facebook app_id -->
    <string name="app_id">497906953566757</string>

    ...

</resources>
```

AndroidManifest.xml파일을 열어 'permission'과 'meta-data'정보, Facebook의 로그인 화면인 LoginActivity를 등록해 줍니다.

```xml
< manifest xmlns:android="http://schemas.android.com/apk/res/android"
    ... >

    ...

    <uses-permission android:name="android.permission.INTERNET" >

    ...

    <application
        ... >

        ...

        <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/app_id">

        <activity
            android:name="com.facebook.LoginActivity">
        </activity>

        ...

    </application>
</manifest>
```

##### Step7. Android 앱 정보 등록
[]({'id':'users-facebook-step7'})

다시 Facebook의 App Dashboard로 돌아가 생성한 Android 앱의 package name과 Facebook의 로그인을 시도할 Activity의 Class name을 등록합니다.

![facebook register app info](/images/develop/android/users-facebook-register-app-info.png)

##### Step8. Facebook 로그인 및 baas.io 로그인
[]({'id':'users-facebook-step8'})

Facebook SDK의 Session.openActiveSession를 호출하여 Facebook 로그인을 진행합니다.

Facebook 로그인에 성공하면, Facebook Access Token을 얻을 수 있으며, 이를 이용하여 baas.io로 로그인을 할 수 있습니다.

아래는 Facebook Access Token을 얻어와, baas.io로 로그인을 시도하는 예제입니다.

```java
public class MainActivity extends Activity {

    ...

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // start Facebook Login
        Session.openActiveSession(this, true, new Session.StatusCallback() {

                // callback when session changes state
                @Override
                public void call(Session session, SessionState state, Exception exception) {
                    if (session.isOpened()) {
                        // Facebook 로그인 성공
                        String accessToken = session.getAccessToken();

                        BaasioUser.signInViaFacebookInBackground(mContext, accessToken,
                            new BaasioSignInCallback() {

                                @Override
                                public void onException(BaasioException e) {
                                    // baas.io 로그인 실패
                                }

                                @Override
                                public void onResponse(BaasioUser response) {
                                    // baas.io 로그인 성공
                                }
                            });
                    }
                }
            });
    }

    ...

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        Session.getActiveSession().onActivityResult(this, requestCode, resultCode, data);
    }

    ...
}
```

# Data(Entity)
[]({'id':'data', 'data-menu':'Data'})

baas.io는 **데이터를 저장하고 조회, 삭제하는 기능을 제공**합니다. 또한, Entity와 Entity를 Connect(연결)하여 **Relationship(관계)**를 만들 수 있습니다.

Relationship(관계)에 대한 자세한 내용은 Basic Concepts의 Relationship을 참고하시기 바랍니다.


## BaasioEntity 클래스
[]({'id':'data-clas', 'data-menu':'BaasioEntity 클래스'})

BaasioUser 클래스가 "users" Collection의 "user" Entity를 관리하기위해 제공되는 것과 비교하면, BaasioEntity 클래스는 사용자가 정의한 Type의 Entity를 관리하기위해 제공됩니다.

Entity와 Collection의 관계는 [Basic Concepts의 Entity 페이지](#basic_concept/entity), [Basic Concepts의 Collection 페이지](#basic_concept/collection)을 참고하시기 바랍니다.


## Create Entity
[]({'id':'data-create', 'data-menu':'createEntity'})

데이터를 저장하여 Entity를 생성합니다.

동기식인 BaasioEntity.save() 메소드와 BaasioEntity.saveInBackground() 메소드를 제공합니다.

Entity를 생성하기 위해서는, **Type이 꼭 정의 되어야 하며, Type은 Collection의 이름을 결정**하게됩니다. Type은 BaasioEntity의 setType() 메소드를 통해 설정할 수 있으며, 생성자를 통해서도 설정할 수 있습니다.

데이터의 세부 정보는 setProperty() 메소드를 이용하여 Key, Value 쌍으로 설정할 수 있습니다. 이 때, Predefined Property와 중복되지 않도록 유의 바랍니다. 

**Predefined Property 중에 "name" Property는, 같은 Collection내에서 유일하게 식별될 수 있는 값**으로 저장되어야 합니다. 특히, "name" Property는 최초 저장된 Value를 수정할 수 없으니 유의하시기 바랍니다. 즉, 해당 Entity를 삭제하고 새로운 "name" Property로 생성해야 합니다.

관련 자세한 내용은 [Basic Concepts의 Entity 페이지](#basic_concept/entity)를 참고하시기 바랍니다.

**Entity 생성이 성공되면, baas.io로 부터 유일한 uuid를 부여받게되고, 이 uuid는 모든 데이터를 통틀어 유일하게 식별하기 위한 용도로 사용됩니다.** uuid는 BaasioEntity.getUuid() 메소드를 통해 알 수 있습니다.

**Property의 Value는, JSON의 Value가 될 수 있는, String, Number, Object, Array, Boolean, null로 설정**할 수 있습니다.

아래의 코드는, "friend" Type의 Entity에 String, Integer, Double 데이터를 저장하는 예를 보여주고 있습니다.

```java
BaasioEntity entity = new BaasioEntity("friend");       // "friend" Entity
entity.setProperty("custom_key1", "custom_string_value");   // String
entity.setProperty("custom_key2", 1);                       // Integer
entity.setProperty("custom_key3", Double.valueOf(2));       // Double
entity.saveInBackground(
    new BaasioCallback<BaasioEntity>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioEntity response) {
                if (response != null) {
                    // 성공
                    String customKey1 = response.getProperty("custom_key1").getTextValue();
                    int customKey2 = response.getProperty("custom_key2").getIntValue();
                    double customKey3 = response.getProperty("custom_key3").getDoubleValue();
                }
            }
        });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
201|401|잘못된 id이거나 password 입니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
911|400|이미 존재하는 리소스입니다.
912|400|예약된 리소스 이름입니다.
913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})


## Create Bulk Entities
[]({'id':'data-create-bulk', 'data-menu':'Create Bulk Entities'})
여러 개의 데이터를 **한꺼번에 생성합니다.**

동기식인 BaasioEntity.save() 메소드, 비동기식인 BaasioEntity.saveInBackground() 메소드를 제공합니다.

아래의 코드는, "bulks" Collection으로 "bulk" Type의 Entity들을 저장하는 예입니다.

```java
BaasioEntity entity1 = new BaasioEntity("bulk");
entity1.setProperty("test","test1");

BaasioEntity entity2 = new BaasioEntity("bulk");
entity2.setProperty("test","test2");

List< BaasioEntity> entities = new ArrayList< BaasioEntity>();
entities.add(entity1);
entities.add(entity2);

BaasioEntity.saveInBackground("bulk", entities,
    new BaasioCallback<List<BaasioEntity>>() {

            @Override
            public void onResponse(List<BaasioEntity> response) {
                if(response != null && response.size() > 0) {
                    // 성공
                }
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
911|400|이미 존재하는 리소스입니다.
912|400|예약된 리소스 이름입니다.
913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})


## Get Entity
[]({'id':'data-get', 'data-menu':'Get Entity'})

baas.io에 **저장되어 있는 Entity를 얻어 옵니다.** 어떤 Entity를 읽어올지 식별할 수 있도록, "uuid" 또는 "name" Property를 설정하여 이에 해당하는 Entity를 읽어 옵니다.

동기식은 BaasioEntity.get() 메소드, 비동기식은 BaasioEntity.getInBackground() 메소드를 제공합니다.

참고로, 여러 Entity를 특정 조건으로 조회하는 방법은 [Query 가이드 페이지](#android/query)를 참고하시기 바랍니다.

아래의 코드는, "friends" Collection으로부터, 특정 uuid를 가지고 있는 "friend" Type의 Entity를 읽어오는 예입니다.

```java
BaasioEntity entity = new BaasioEntity("friend");   // "friend" entity
entity.setUuid(uuid);                               // Entity의 uuid
entity.getInBackground(
        new BaasioCallback<BaasioEntity>() {

                @Override
                public void onException(BaasioException e) {
                    // 실패
                }

                @Override
                public void onResponse(BaasioEntity response) {
                    if (response != null) {
                        // 성공
                    }
                }
            });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
911|400|이미 존재하는 리소스입니다.
913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})


## Update Entity
[]({'id':'data-update', 'data-menu':'Update Entity'})
baas.io에 저장되어 있는 **Entity를 수정합니다.** 어떤 Entity를 수정할 지 식별할 수 있도록, "uuid" 또는 "name" Property를 설정하여 이에 해당하는 Entity를 수정 합니다.

동기식은 BaasioEntity.update() 메소드, 비동기식은 BaasioEntity.updateInBackground() 메소드를 제공합니다.

```java
BaasioEntity entity = new BaasioEntity("friend");   // "friend" entity
entity.setUuid(uuid);                               // Entity의 uuid
entity.setProperty("custom_key", "custom_value");
entity.updateInBackground(
        new BaasioCallback<BaasioEntity>() {

                @Override
                public void onException(BaasioException e) {
                    // 실패
                }

                @Override
                public void onResponse(BaasioEntity response) {
                    if (response != null) {
                        // 성공
                        String customKey = response.getProperty("custom_key").getTextValue();
                    }
                }
            });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
912|400|예약된 리소스 이름입니다.
913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})


## Remove Entity
[]({'id':'data-remove', 'data-menu':'Remove Entity'})
baas.io에 저장되어 있는 **Entity를 삭제합니다.** 어떤 Entity를 삭제할 지 식별할 수 있도록, “uuid” 또는 “name” Property를 설정하여 이에 해당하는 Entity를 삭제 합니다.

동기식은 BaasioEntity.delete() 메소드, 비동기식은 BaasioEntity.deleteInBackground() 메소드를 제공합니다.

```java
BaasioEntity entity = new BaasioEntity("friend");   // "friend" entity
entity.setUuid(uuid);                               // Entity의 uuid
entity.deleteInBackground(
    new BaasioCallback<BaasioEntity>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioEntity response) {
                if (response != null) {
                    // 성공
                }
            }
        });
```

#### 관련 에러코드
Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
912|400|예약된 리소스 이름입니다.
913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})


## Connection between Entities(Relationship)
[]({'id':'data-connect', 'data-menu':'Connection between Entities'})

**Entity와 Entity 사이에 Relationship(관계)을 만들 수 있습니다.** 이렇게 만들어진 관계를 이용하여, Twitter의 following/follower 또는 Facebook의 like를 구현할 수 있습니다.

Relationship은 BaasioConnectableEntity를 상속받은 객체라면 서로 연결을 할 수 있습니다. 예를 들어, BaasioConnectableEntity를 상속받은 BaasioUser, BaasioEntity, BaasioFile, BaasioGroup 등은 서로 Relationship으로 연결할 수 있습니다. 연결할 때, 서로의 클래스가 같지 않아도 연결할 수 있습니다.

Relationship과 관련된 자세한 설명은 [Basic Concepts의 Relationship 가이드 페이지](#basic_concept/relation)를 참고하시기 바랍니다.

### Connect
**Entity와 Entity를 Relationship으로 연결**합니다.

동기식은 BaasioEntity.connect() 메소드, 비동기식은 BaasioEntity.connectInBackground() 메소드를 제공합니다.

연결을 위해서는 각각의 Entity를 식별하기 위한 "uuid" 또는 "name" Property가 설정되어 있어야 합니다.

아래의 코드는 "dog" Type을 가진 Entity와 "cat" Type을 가진 Entity를 "love"라는 관계를 만들어 준것으로, happy라는 강아지가 kitty라는 고양이를 love하고 있다는 의미로 Relationship을 만들어 준 것입니다.

```java
BaasioEntity dog = new BaasioEntity("dog");
dog.setName("happy");

BaasioEntity cat = new BaasioEntity("cat");
cat.setName("kitty");

doc.connectInBackground(
    "love"
    , cat
    , BaasioEntity.class // cat의 클래스
    , new BaasioCallback<BaasioEntity>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioEntity response) {
                if (!ObjectUtils.isEmpty(response)) {
                    // 성공
                }
            }
        });
```

**Relationship으로 연결에 성공하면 결과로 연결된 대상을 전달합니다.** 위의 예제에서는 cat이 전달됩니다.

#### 관련 에러코드

Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
912|400|예약된 리소스 이름입니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})

### Disconnect
**Entity와 Entity의 Relationship을 해제**합니다.

연결을 해제하기 위해서는 각각의 Entity를 식별하기 위한 "uuid" 또는 "name" Property가 설정되어 있어야 합니다.

동기식은 BaasioEntity.disconnect() 메소드, 비동기식은 BaasioEntity.disconnectInBackground() 메소드를 제공합니다.

아래의 코드는 "dog" Type을 가진 Entity와 "cat" Type을 가진 Entity를 "love"라는 관계를 해제한 것으로, happy라는 강아지가 kitty라는 고양이를 더 이상 love하고 있지 않다는 의미로 Relationship을 해제한 것입니다.

```java
BaasioEntity dog = new BaasioEntity("dog");
dog.setName("happy");

BaasioEntity cat = new BaasioEntity("cat");
cat.setName("kitty");

dog.disconnectInBackground(
    "love"
    , cat
    , BaasioEntity.class	// cat의 클래스
    , new BaasioCallback<BaasioEntity>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioEntity response) {
                if (!ObjectUtils.isEmpty(response)) {
                    // 성공
                }
            }
        });
```

**Relationship 해제에 성공하면 결과로 연결이 해제된 대상을 전달합니다.** 위의 예제에서는 cat이 전달됩니다.

#### 관련 에러코드

Error Code | HTTP Status Code | 설명
:---------:|:----------------:|:----
100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.
101|404|요청받은 리소스가 서버에 존재하지 않습니다.
102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.
103|400|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.
190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.
200|401|인증 또는 권한과 관련된 문제가 발생했습니다.
202|401|접근 권한이 없습니다.
210|401|인증 토큰에 문제가 있습니다.
211|401|만료된 인증 토큰입니다.
-100|500|알수 없는 에러입니다.

[]({'class':'table table-striped table-bordered'})




# Query
[]({'id':'query', 'data-menu':'Query'})
baas.io에 저장된 데이터를 **특정 조건으로 조회하는 기능을 제공**합니다. **SQL 구문과 비슷한 형태**로 조회할 수 있습니다.


## BaasioQuery 클래스
[]({'id':'query-class', 'data-menu':'BaasioQuery 클래스'})
baas.io는 BaasioQuery클래스를 이용하여 아래의 세 가지 조회 방법을 제공합니다.

- "users" Collection의 "user" Entity, "groups" Collection의 "group" Entity, "files" Collection의 "file" Entity와 같이, 어떤 Collection의 Entity를 조회 (Custom Collection 포함)
- 어떤 Group에 속한 "user" Entity를 조회
- 어떤 Entity와 연결(connect)되어 Relationship을 가지고 있는 Entity를 조회

또한, 복잡하거나 다양한 검색을 지원하기 위해 **직접 질의문(Raw Query String)을 입력**하여 요청할 수 있습니다.

조회는 **queryInBackground() 메소드를 이용하여 특정 갯수만큼만 조회**해 올 수 있으며, 그 다음 **데이터를 조회하기 위해서는 nextInBackground() 메소드, 이전 데이터를 조회하기 위해서는 prevInBackground() 메소드를 이용**합니다.

조회를 위한 메소드들은 동기화 방식도 물론 제공하고 있으며, 각각의 메소드는 **query(), next(), prev()**입니다.

**최초 조회할 때는 query() 또는 queryInBackground()로 먼저 요청해야하는 것에 유의**바랍니다.

## Query Entities from Collection
[]({'id':'query-collection', 'data-menu':'Query Entities from Collection'})
Collection으로부터 데이터를 조회할때는 **setType() 메소드를 이용하여 조회할 Entity의 Type을 설정**합니다.

아래의 예는 "friends" Collection으로부터 "friend" Entity를 조회해 오는 예입니다.

setType() 메소드를 설정하여 Entity의 Type으로 "friend"를 지정해주고 있으며, setOrderBy()를 이용하여 수정시간을 기준으로 내림차순 정렬하도록 합니다. 또한 setLimit()를 설정하여 10개씩 받도록 합니다.

```java
BaasioQuery mQuery = new BaasioQuery();
mQuery.setType("friend");						// 조회할 Entity type
mQuery.setOrderBy(
	BaasioBaseEntity.PROPERTY_MODIFIED			// 정렬 기준
	, ORDER_BY.DESCENDING);					// 정렬 순서
mQuery.setLimit(10);							// 한번에 받을 갯수 설정
mQuery.queryInBackground(                   // 조회 요청
    new BaasioQueryCallback() { 

            @Override
            public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
                mQuery = query;	// 결과로 들어온 Query 객체로 교체
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

이렇게 queryInBackground()를 이용하여 최초 데이터를 요청한 이후에는, nextInBackground(), prevInBackground()를 이용하여 다음 또는 이전 데이터를 조회해 올 수 있습니다.

결과가 전달되는 BaasioQueryCallback.onResponse()에 BaasioQuery 인스턴스가 들어오며, 그 인스턴스를 이용하여 nextInBackground(), prevInBackground()를 호출하여 다음 또는 이전 데이터를 조회하는 것에 유의 바랍니다.

아래는 다음 데이터를 조회하는 요청입니다.

```java
mQuery.nextInBackground(    // 조회 요청
    new BaasioQueryCallback() {

            @Override
            public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
                // 성공
                mQuery = query;						// 결과로 들어온 Query 객체로 교체
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

아래는 이전 데이터를 조회하는 요청입니다.

```java
mQuery.prevInBackground(    // 조회 요청
    new BaasioQueryCallback() {

            @Override
            public void onResponse(List<BaasioBaseEntity>; entities, List<Object> list, BaasioQuery query, long timestamp) {
                // 성공
                mQuery = query;					// 결과로 들어온 Query 객체로 교체
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

### setLimit()
[]({'id':'query-setLimit'})
한 번에 조회해 올 수 있는 데이터의 갯수는 **기본 10개**이며, 이 갯수는 **setLimit()를 호출하여 원하는 값으로 설정**할 수 있습니다.

-----
`Warning` 한꺼번에 받을 수 없나요?
> 데이터를 한꺼번에 받게되면 응답시간이 느려지게 됩니다. 느린 응답시간은 서비스의 질을 떨어뜨리는 요소가 될 것입니다. 더구나, 응답시간이 느려지면, 중간에 네트워크의 이상으로 실패할 가능성이 많아집니다.

>적당한 양의 데이터를 요청하여 좋은 UX를 제공하는 것을 권장합니다.

-----

### setOrderBy()
[]({'id':'query-setOrderBy'})
**조회할 데이터의 순서를 설정**합니다. 특정 Property에 대해, **오름차순(ORDER_BY.ASCENDING) 또는 내림차순(ORDER_BY.DESCENDING)의 순서로 데이터를 조회**할 수 있습니다.

### setWheres()
[]({'id':'query-setWheres'})
**조회할 조건을 설정**합니다. Entity의 Property 값이 어떤 조건에 부합하는 Entity만 조회할 수 있습니다.

아래의 예는 회원 중에 나이가 20살 이상인 회원을 "users" Collection에서 조회하는 예입니다.

```java
BaasioQuery query = new BaasioQuery();
query.setType(BaasioUser.ENTITY_TYPE);						// 조회할 Entity type
query.setWheres("age >= 20");
query.setLimit(10);							// 한번에 받을 갯수 설정
query.queryInBackground(    // 조회 요청
    new BaasioQueryCallback() {

            @Override
            public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
                //성공
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

-----
`Warning` 숫자형, 문자형
> Property의 값이 숫자(Number)형이 아닌 문자열(String) 형으로 저장되어 있으면, 실제 값이 숫자라고 해도 문자열로 인식하여 원하는 결과를 얻을 수 없습니다.

-----

아래는 조건에 사용되는 데이터의 타입을 어떻게 표현하는지 보여주는 예입니다.

데이터 타입|예제
:------:|:-:
문자열 (String)|'데이터', 유니코드 문자열 '\uFFFF'
정수형 (Integer)|365 , -1360
실수형 (Float)|3.14156 , -3.14159 , 10e10, 10E-10

[]({'class':'table table-striped table-bordered'})


아래는 조건에 사용되는 연산자의 종류 입니다.

연산자 종류|연산자 설명|예제
:------:|:------:|:-:
비교 연산자|보다 작다|'<' 또는 'lt'
|보다 작거나 같다|'<=' 또는 'lte'
|같다|'=' 또는 'eq'
|보다 크거나 같다|'>=' 또는 'gte'
|보다 크다|'>' 또는 'gt'
검색 연산자|문자열 전문 검색 (String full text search)|property contains '[검색할 문자열]'
||property contains '[검색할 문자열]*'
|시작 문자열 비교|name = 'foo*'
|위치검색|location.coordinates within .5 of 37.56621 , 126.9779
논리 연산자|결과의 교집합|and
|결과의 합집합|or
|결과의 차집합|not

[]({'class':'table table-striped table-bordered'})

연산자 중에 **"contains" 연산자는 문자열에 어떤 문자가 포함되어 있는지 검색하는 용도**로 사용됩니다.

예를 들어, 어떤 Entity에 "contents" Property가 "서울 강남구 청담동"이라는 값을 가지고 있을때, 해당 Entity를 검색하기 위한 조건에 따른 결과는 아래와 같습니다.

예시|동작여부
:-:|:-:
contents contains '강남'|검색결과 없음
contents contains '강남구'|검색됨
contents contains '강남&#x0204e;'|검색됨
contents contains '강남구&#x0204e;'|검색됨
contents contains '&#x0204e;남&#x0204e;'|잘못된 사용법으로 검색결과 없음 (*를 앞에는 붙일 수 없음)

[]({'class':'table table-striped table-bordered'})

### setProjectionIn()
[]({'id':'query-setProjectionIn'})
**조회할 Entity중에 필요한 Property만 요청**합니다.

아래의 예는 "friend" Collection으로부터 "friend" Entity를 조회하는데, "age" Property와 "gender" Property만 조회하는 예입니다.

```java
BaasioQuery query = new BaasioQuery();
query.setType("friend");
query.setProjectionIn("age, gender");
query.setLimit(10);                            // 한번에 받을 갯수 설정
query.queryInBackground(    // 조회 요청
    new BaasioQueryCallback() { 

            @Override
            public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
                if (list != null) {
        				if (list.size() &gt; 0) {
        					for (Object object : list) {
        						List<Object> item = (List)object;
        						for (int i = 0; i < item.size(); i++) {
        							int age = (Integer)item.get(0);		// age
        							String gender = (String)item.get(1);	// gender
        					}
        				}
        			}
        		}
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```


## Query User Entities from Group
[]({'id':'query-group', 'data-menu':'Query User Entities from Group'})
**특정 Group에 속해있는 User를 조회**합니다.

BaasioGroup 인스턴스를 생성하고, setPath() 메소드를 이용하여 조회할 Group의 Path를 설정한 후, BaasioQuery의 setGroup() 메소드를 이용하여 앞서 생성한 BaasioGroup 인스턴스를 설정합니다.

**다음 또는 이전 데이터를 조회하는 방법, 즉, nextInBackground(), prevInBackground()를 이용하는 방법은, Collection 조회와 동일합니다. 또한 [setWheres()](#android/query/query-setWheres), [setLimit()](#android/query/query-setLimit), [setOrderBy()](#android/query/query-setOrderBy), [setProjectionIn()](#android/query/query-setProjectionIn)도 동일하게 적용됩니다.**

아래의 예는 family라는 그룹에 속한 "user" Entity를 "username" Property의 오름차순으로 10개 조회하는 예입니다.

```java
BaasioGroup group = new BaasioGroup();
group.setPath("family");

BaasioQuery query = new BaasioQuery();
query.setGroup(group);                  // 검색하려는 그룹
query.setOrderBy(
    BaasioUser.PROPERTY_USERNAME        // 정렬 기준
    , ORDER_BY.ASCENDING);              // 정렬 방법
query.setLimit(10);                     // 한번에 받을 갯수 설정
query.queryInBackground(
    new BaasioQueryCallback() {
            @Override
            public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
                // 성공
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

## Query Entities with Relationship
[]({'id':'relationship', 'data-menu':'Query Entities with Relationship'})

**어떤 Entity와 Entity가 서로 Relationship으로 연결되어 있을 때, 연결된 Entity들을 조회할 수 있습니다.**

**다음 또는 이전 데이터를 조회하는 방법, 즉, nextInBackground(), prevInBackground()를 이용하는 방법은, Collection 조회와 동일합니다. 또한 [setWheres()](#android/query/query-setWheres), [setLimit()](#android/query/query-setLimit), [setOrderBy()](#android/query/query-setOrderBy), [setProjectionIn()](#android/query/query-setProjectinIn)도 동일하게 적용됩니다.**

조회할 Entity는 Entity를 유일하게 식별할 수 있는 Property인 "uuid" Property 또는 "name" Property가 설정되어 있어야 합니다.

-----
`Warning` 유일하게 식별할 수 있는 Property
> 기본적으로 유일하게 식별할 수 있는 Property는 "uuid"와 "name" Property입니다.
몇 가지 예외가 있습니다.
* "user" Entity는 "name" Property가 아닌, BaasioUser.getUsername() 메소드로 얻을 수 있는, "username" Property가 유일하게 식별할 수 있는 Property입니다.
* "group" Entity는 BaasioGroup.getPath() 메소드로 얻을 수 있는 "path" Property가 유일하게 식별할 수 있는 Property입니다.

-----

아래 예는 happy라는 강아지(dog)와 "love"라는 Relationship으로 연결되어 있는 Entity들을 조회하는 예입니다.

```java
BaasioEntity dog = new BaasioEntity("dog");
dog.setName("happy");

BaasioQuery query = new BaasioQuery();
query.setRelation(
        dog			// happy라는 강아지
        , "love"); 	// 관계 이름

query.queryInBackground(
    new BaasioQueryCallback() {

            @Override
            public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
                // 성공
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```


## Query with Raw Query String
[]({'id':'query-rawstring', 'data-menu':'Query with Raw Query String'})
앞서 살펴본 기본적인 조회 방법외에 **직접 질의문을 만들어 복잡한 조회를 할 수 있습니다.** **setRawString() 메소드를 이용하여 Raw Query String을 설정하며, URL Encoding하여 설정**하여야 합니다.

다음 또는 이전 데이터를 조회하는 방법, 즉, nextInBackground(), prevInBackground()를 이용하는 방법은, Collection 조회와 동일합니다.

**다만, setWheres(), setOrderBy(), setLimit(), setProjectionIn()은 Raw Query String이 포함하고 있으므로 무시됩니다.**

Raw Query String은 SQL구문과 비슷한 문법으로 구성되어 있습니다.

SQL구문과 다른 점은, "ql"이라는 URL Parameter에 Query String을 설정하며, SQL구문에서 조회할 Table을 넣는 from 절의 표시 방법이 다르다는 점입니다.

몇 가지 예를 들어 보겠습니다.

|SQL 구문|baas.io의 Raw Query String|설명|
|:-:|:-:|:-:|
|select * from friends where age &gt;= 20 order by modified desc|friends?ql=select * where age &gt;= 20 order by modified desc|friends에서 age가 20이상인 데이터를 modified의 내림차순으로 조회|
|select * from users where area = '서울' and age &gt;=20|users?ql=select * where area = '서울' and age &gt;= 20|users에서 area가 서울이며, age가 20이상인 데이터 조회|
|select * from users where name = '김&#x0204e;' and gender 'M'|users?ql=select * where name = '김&#x0204e;' and gender = 'M'|users에서 이름이 '김'으로 시작하며 gender 가 'M'인 데이터 조회|
|select * from users order by created asc|users?ql=select * order by created asc| users에서 created의 오름차순으로 조희(가입한 순서)|
|select * from cities where nation = 'Korea' limit 12|cities?ql=select * where nation = 'Korea'&limit=12|cities에서 nation이 'Korea'인 데이터를 12개 조회|
|select * from cities where name like '강남%'|cities?ql=select * where name contains '강남&#x0204e;'|cities에서 name이 '강남'으로 시작되는 데이터 조회|
|select name, age, gender from users order by age desc|users?ql=select name, age, gender order by age desc|users에서 age의 내림차순으로, 데이터의 name, age, gender만 조회|

[]({'class':'table table-striped table-bordered'})

조건문을 설정하는 방법은 **setWheres()에서 설명한 내용과 동일**합니다. 즉, setWheres()에서 설정된 값과 Raw Query String의 "where"절에 들어가는 방법이 같습니다.

아래의 예는 "friends" Collection에서 나이(age)가 20이상인 Entity를 수정된 시간(modified)의 내림차순으로 조회하는 예입니다.

```java
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

String queryString;
try {
	queryString = URLEncoder.encode("friends?ql=select * where age &gt;= 20 order by modified desc", "UTF-8");
} catch (UnsupportedEncodingException e) {
	e.printStackTrace();
}

BaasioQuery mQuery = new BaasioQuery();
mQuery.setRawString(queryString);
mQuery.queryInBackground(
		new BaasioQueryCallback() {
		
		@Override
		public void onResponse(List entities, List list, BaasioQuery query, long timestamp) {
			// 성공
		}
		
		@Override
		public void onException(BaasioException e) {
			// 실패
		}
    });
```




# Group
[]({'id':'group', 'data-menu':'Group'})

baas.io는 **회원 그룹관리 기능을 제공**하고 있습니다.

BaasioGroup 클래스를 이용하여 그룹을 생성/수정/삭제할 수 있으며, 생성된 그룹에 회원을 추가하거나 제거할 수 있습니다.

어떤 그룹에 속한 User를 조회하기 위해서는 BaasioQuery를 이용합니다. 관련 내용은 [Query > Query User Entities from Group 가이드](#android/query/query-groupp)를 참고바랍니다.


## BaasioGroup 클래스
[]({'id':'group-class', 'data-menu':'BaasioGroup 클래스'})
BaasioGroup클래스는  **"groups" Collection으로 관리**되며, "groups" Collection에 "group" Entity를 생성/삭제하여 그룹을 생성하거나 삭제합니다.


## Create Group
[]({'id':'group-create', 'data-menu':'Create Group'})
그룹을 생성할 때는, 그룹을 유일하게 식별할 수 있는, "path" Property를 꼭 설정해줘야 합니다. 이 Predefined Property는 setPath() 메소드로 설정할 수 있습니다.

이 외에 "title"이라는 Predefined Property가 있으며, 그룹의 표시명으로 사용됩니다. 이 Property는 setTitle() 메소드로 설정할 수 있습니다.

동기식은 save(), 비동기식은 saveInBackground() 메소드를 제공합니다.

아래의 예는, 표시명(title)은 "가족", "path" Property는 "family"인 그룹을 생성하는 예입니다.

```java
BaasioGroup group = new BaasioGroup();
group.setTitle("가족");         // 그룹 표시내용
group.setPath("family");                // 그룹 Unique한 Path 이름
group.saveInBackground(
    new BaasioCallback<BaasioGroup>() {

        @Override
        public void onException(BaasioException e) {
            // 실패
        }

        @Override
        public void onResponse(BaasioGroup response) {
            if (response != null) {
                // 성공
                String path = response.getPath(); // Group path
            }
        }
    });
```


## Get Group
[]({'id':'group-get', 'data-menu':'Get Group'})
**그룹 Entity의 정보를 얻어옵니다.**

동기식은 get(), 비동기식은 getInBackground() 메소드를 제공합니다.

아래는 "path" Property가 "family"인 그룹의 정보를 가져오는 예입니다.

```java
BaasioGroup group = new BaasioGroup();
group.setPath("family");                // 그룹 Unique한 Path 이름
group.getInBackground(
    new BaasioCallback<BaasioGroup>() {

        @Override
        public void onException(BaasioException e) {
            // 실패
        }

        @Override
        public void onResponse(BaasioGroup response) {
            if (response != null) {
                // 성공
                String path = response.getPath(); // Group path
            }
        }
    });
```


## Update Group
[]({'id':'group-update', 'data-menu':'Update Group'})
**그룹 Entity의 정보를 수정합니다.**

동기식은 update(), 비동기식은 updateInBackground() 메소드를 제공합니다.

아래는 "path" Property가 "family"인 그룹의 정보를 수정하는 예입니다. 즉, "family" 그룹에 "description"이 "가족 또는 친척 그룹"이라는 정보를 추가합니다.

```java
BaasioGroup entity = new BaasioGroup();
entity.setPath("family");                   // Group의 uuid
entity.setProperty("description", "가족 또는 친척 그룹");
entity.updateInBackground(
    new BaasioCallback<BaasioGroup>() {

        @Override
        public void onException(BaasioException e) {
            // 실패
        }

        @Override
        public void onResponse(BaasioGroup response) {
            if (response != null) {
                // 성공
                String path = response.getPath(); // Group path
            }
        }
    });
```


## Remove Group
[]({'id':'group-remove', 'data-menu':'Remove Group'})
**그룹 Entity를 삭제합니다.**

동기식은 delete(), 비동기식은 deleteInBackground() 메소드를 제공합니다.

아래는 "path" Property가 "family"인 그룹을 삭제하는 예입니다.

```java
BaasioGroup entity = new BaasioGroup();
entity.setPath("family");                   // Group의 uuid
entity.deleteInBackground(
    new BaasioCallback<BaasioGroup>() {

        @Override
        public void onException(BaasioException e) {
            // 실패
        }

        @Override
        public void onResponse(BaasioGroup response) {
            if (response != null) {
                // 성공
            }
        }
    });
```


## Add User To Group
[]({'id':'add-user', 'data-menu':'Add User To Group'})
**그룹에 User를 추가합니다.**

동기식은 add(), 비동기식은 addInBackground() 메소드를 제공합니다.

아래는 "username"이 "john.doe@foo.com"인 User를 "family" 그룹에 추가하는 예입니다.

```java
BaasioUser user = new BaasioUser();
user.setUsername("john.doe@foo.com");         // 추가하려는 User의 username 

BaasioGroup entity = new BaasioGroup();
entity.setPath("family");                   // Group의 path
entity.addInBackground(
    user
    , new BaasioCallback<BaasioUser>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if (response != null) {
                    // 성공
                    String username = response.getUsername(); // ID(Username)
                }
            }
        });
```


## Remove User From Group
[]({'id':'remove-user', 'data-menu':'Remove User From Group'})
**그룹에 추가되어 있는 User를 제외합니다.**

동기식은 remove(), 비동기식은 removeInBackground() 메소드를 제공합니다.

아래는 "username"이 "john.doe@foo.com"인 User를 "family" 그룹으로 부터 제외하는 예입니다.

```java
BaasioUser user = new BaasioUser();
user.setUsername("john.doe@foo.com");         // 제외하려는 User의 username 

BaasioGroup entity = new BaasioGroup();
entity.setPath("family");                   // Group의 path
entity.removeInBackground(
    user
    , new BaasioCallback<BaasioUser>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(BaasioUser response) {
                if (response != null) {
                    // 성공
                    String username = response.getUsername(); // ID(Username)
                }
            }
        });
```





# File
[]({'id':'file', 'data-menu':'File'})

baas.io는 **파일을 저장하고 조회, 삭제, 수정하는 기능을 제공**합니다. 


## BaasioFile 클래스
[]({'id':'file-class', 'data-menu':'BaasioFile 클래스'})

BaasioFile 클래스는 **"files" Collection으로 관리됩니다.** "files" Collection에 "file" Entity는 다른 Entity들과 마찬가지로, Predefined Property를 가지고 있으며, 필요한 다른 Property를 추가로 저장할 수 있습니다.


## Create File With Content
[]({'id':'create-with-content', 'data-menu':'Create File With Content'})

**Property로 구성된 파일 정보와 실제 파일을 함께 저장하여 "file" Entity를 생성합니다.**

비동기식인 fileUploadInBackground() 메소드만 제공되며, 비동기식 메소드는 제공되지 않습니다.
또한, Callback의 onProgress() 함수로 파일이 전송되는 진행상황을 전달합니다.

아래는 "/mnt/sdcard/test.txt" 파일과 함께 다른 Property들을 업로드하여 "file" Entity를 생성하는 예입니다. 특이한 점은, "test.txt" 파일을 "test2.txt"라는 이름으로 업로드하는 점입니다.

```java
String srcFilePath = "/mnt/sdcard/test.txt";
String filename = "test2.txt";

BaasioFile uploadFile = new BaasioFile();
uploadFile.setProperty("memo", "안녕하세요. baas.io입니다.");   // 파일 추가 정보1
uploadFile.setProperty("integer", 1);                       // 파일 추가 정보2
uploadFile.setProperty("long", Long.valueOf("1"));          // 파일 추가 정보3

BaasioUploadAsyncTask uploadFileAsyncTask = uploadFile.fileUploadInBackground(
    srcFilePath             // 업로드하려는 파일 경로
    , filename              // 설정하려는 파일 이름
    , new BaasioUploadCallback() {

            @Override
            public void onResponse(BaasioFile response) {
                // 성공
                String memo = response.getProperty("memo").getTextValue();
                int intValue = response.getProperty("integer").getIntValue();
                long longValue = response.getProperty("long").getLongValue();
            }

            @Override
            public void onProgress(long total, long current) {
                // 진행 상황
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

**만약 filename을 전달하지 않으면, 실제 업로드하는 파일의 이름으로 설정됩니다.**

#### 관련 에러코드

|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|103|400|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.|
|190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|202|401|접근 권한이 없습니다.|
|210|401|인증 토큰에 문제가 있습니다.|
|211|401|만료된 인증 토큰입니다.|
|911|400|이미 존재하는 리소스입니다.|
|912|400|예약된 리소스 이름입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|
|915|400|잘못된 쿼리입니다.|
|-100|500|알수 없는 에러입니다.|

[]({'class':'table table-striped table-bordered'})


## Create File Without Content
[]({'id':'create-without-content', 'data-menu':'Create File Without Content'})

**파일 없이 Property만으로 "file" Entity를 생성합니다.** 여기서 주의하실 점은, **실제 파일을 업로드하지 않더라도, filename을 setFilename()을 통해 설정해 주어야 합니다.**

물론, 나중에 필요할때 파일만 업로드할 수도 있습니다.

동기식은 save(), 비동기식은 saveInBackground() 메소드를 제공합니다.

아래는 "test.txt"라는 이름을 가지며, 기타 다른 Property들을 가진 "file" Entity를 생성하는 예입니다.

```java
BaasioFile uploadFile = new BaasioFile();
uploadFile.setFilename("test.txt");     // 파일을 업로드하지 않더라도 Filename은 필수로 넣어줘야함(v0.8.1)
uploadFile.setProperty("memo", "안녕하세요. baas.io입니다.");
uploadFile.setProperty("integer", 1);
uploadFile.setProperty("long", Long.valueOf("1"));

uploadFile.saveInBackground(
    new BaasioCallback<BaasioFile>() {
            @Override
            public void onResponse(BaasioFile response) {
                if (response != null) {
                    // 성공
                    String memo = response.getProperty("memo").getTextValue();
                    int intValue = response.getProperty("integer").getIntValue();
                    long longValue = response.getProperty("long").getLongValue();
                }
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

#### 관련 에러코드

|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|103|400|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.|
|190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|202|401|접근 권한이 없습니다.|
|210|401|인증 토큰에 문제가 있습니다.|
|211|401|만료된 인증 토큰입니다.|
|911|400|이미 존재하는 리소스입니다.|
|912|400|예약된 리소스 이름입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|
|915|400|잘못된 쿼리입니다.|
|-100|500|알수 없는 에러입니다.|

[]({'class':'table table-striped table-bordered'})


## Download File
[]({'id':'download-content', 'data-menu':'Download File'})

업로드되어 있는 **파일을 다운로드**합니다.

비동기식인 fileDownloadInBackground() 메소드만 제공되며, 비동기식 메소드는 제공되지 않습니다.
또한, Callback의 onProgress() 함수로 파일이 전송되는 진행상황을 전달합니다.

아래는 uuid를 통해 파일을 다운로드하는 예입니다.

-----
`Warning` 다운로드 경로
> 다운로드 경로가 파일이름을 포함하고 있는 경우와 포함하지 않는 경우를 구분해서 사용해야 합니다. **즉, 파일이름이 포함되어 있을 경우에는 uuid를 통해 다운로드가 가능하지만, 파일이름이 포함되어 있지 않을 경우에는, setFilename() 메소드를 통해 다운받을 파일의 이름을 설정해줘야 합니다.**

-----

```java
String localPath = "/mnt/sdcard/baasio/test.txt";

BaasioFile downloadFile = new BaasioFile();
downloadFile.setUuid(uuid);
BaasioDownloadAsyncTask downloadFileAsyncTask = downloadFile.fileDownloadInBackground(
    localPath       // 다운로드 경로
    , new BaasioDownloadCallback() {

            @Override
            public void onResponse(String localFilePath) {
                // 성공
            }

            @Override
            public void onProgress(long total, long current) {
                // 진행 상황
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

아래는 **다운로드 경로가 파일이름을 포함하지 않았을 때**, setFilename() 메소드로 파일이름을 설정하여 다운로드 하는 예입니다.

```java
String localPath = "/mnt/sdcard/baasio/";

BaasioFile downloadFile = new BaasioFile();
downloadFile.setUuid(uuid);
downloadFile.setFilename("test.txt");
BaasioDownloadAsyncTask downloadFileAsyncTask = downloadFile.fileDownloadInBackground(
    localPath       // 다운로드 경로
    , new BaasioDownloadCallback() {

            @Override
            public void onResponse(String localFilePath) {
                // 성공
            }

            @Override
            public void onProgress(long total, long current) {
                // 진행 상황
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```

#### 관련 에러코드

|Error Code | HTTP Status Code | 설명 |
|:---------:|:----------------:|:----|
|100|400|잘못된 요청입니다. 각 API 별 Request 형식을 참고해서 다시 요청하시기 바랍니다.|
|101|404|요청받은 리소스가 서버에 존재하지 않습니다.|
|102|400|전송된 데이터(entity)에 반드시 필요한 속성이 누락되었습니다. 요청 형식을 다시 확인해주세요.|
|103|400|해당 Request 를 처리하기 위한 위한 선행 작업이 이루어지지 않았습니다.|
|190|501|추후 공개를 위해 예약된 기능들에 대해 접근했을때 발생합니다.|
|200|401|인증 또는 권한과 관련된 문제가 발생했습니다.|
|201|401|잘못된 id이거나 password 입니다.|
|202|401|접근 권한이 없습니다.|
|210|401|인증 토큰에 문제가 있습니다.|
|211|401|만료된 인증 토큰입니다.|
|600|400|Push 기능이 활성화 되어 있지 않습니다.|
|620|400|Push 관련 에러가 발생했습니다.|
|911|400|이미 존재하는 리소스입니다.|
|912|400|예약된 리소스 이름입니다.|
|913|400|유일해야하는 속성을 중복해서 가질 수 없습니다.|
|915|400|잘못된 쿼리입니다.|
|-100|500|알수 없는 에러입니다.|

[]({'class':'table table-striped table-bordered'})


## Get File
[]({'id':'file-get', 'data-menu':'Get File'})

**파일을 다운로드하지 않고, Entity의 정보만 얻어옵니다.**

동기식은 get(), 비동기식은 getInBackground() 메소드를 제공합니다.

아래는 uuid를 통해 "file" Entity를 얻어오는 예입니다.

```java
BaasioFile file = new BaasioFile();
file.setUuid(uuid);           // 가져오려는 File entity의 uuid

file.getInBackground(
    new BaasioCallback() {
            @Override
            public void onResponse(BaasioEntity response) {
                if (response != null) {
                    // 성공
                }
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```


## Update File With Content
[]({'id':'update-with-content', 'data-menu':'Update File With Content'})

이미 생성되어 있는 "file" Entity를 **파일 정보와 실제 파일을 전송하여 수정**합니다.

비동기식인 fileUpdateInBackground() 메소드만 제공되며, 비동기식 메소드는 제공되지 않습니다.
또한, Callback의 onProgress() 함수로 파일이 전송되는 진행상황을 전달합니다.

아래는 uuid를 통해 해당 "file" Entity의 파일 내용과 정보를 수정하는 예입니다.
즉, "/mnt/sdcard/test2.txt"파일로 파일 내용을 변경하면서, "memo" Property의 값도 변경합니다.

파일을 생성할 때와 마찬가지로, 서버에 저장되는 파일이름은 "test3.txt"가 되는 점 유의 바랍니다.

```java
String srcFilePath = "/mnt/sdcard/test2.txt";
String filename = "test3.txt";

BaasioFile updateFile = new BaasioFile();
updateFile.setUuid(uuid);                       // 수정하려는 File entity의 uuid
updateFile.setProperty("memo","수정합니다.");      // 수정하려는 정보

BaasioUploadAsyncTask uploadFileAsyncTask = updateFile.fileUpdateInBackground(
    srcFilePath             // 수정하려는 파일 전체 경로
    , filename              // 설정하려는 파일 이름
    , new BaasioUploadCallback() {

            @Override
            public void onResponse(BaasioFile response) {
                if (response != null) {
                    // 성공
                    String memo = response.getProperty("memo").getTextValue();
                }
            }

            @Override
            public void onProgress(long total, long current) {
                // 진행 상황
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```


## Update File Without Content
[]({'id':'update-without-content', 'data-menu':'Update File Without Content'})

파일 내용은 바꾸지 않고 **파일 정보만 수정**합니다.

아래는 uuid를 통해 "memo" Property를 수정하는 예입니다.

```java
BaasioFile uploadFile = new BaasioFile();
uploadFile.setUuid(uuid);                   // 수정하려는 File entity의 uuid
uploadFile.setProperty("memo","수정합니다.");  // 수정하려는 정보

uploadFile.updateInBackground(
    new BaasioCallback<BaasioFile>() {
            @Override
            public void onResponse(BaasioFile response) {
                if (response != null) {
                    // 성공
                    String memo = response.getProperty("memo").getTextValue();
                }
            }

            @Override
            public void onException(BaasioException e) {
                // 실패
            }
        });
```


## Remove File
[]({'id':'file-remove', 'data-menu':'Remove File'})

파일을 삭제합니다. **파일 정보와 실제 파일이 함께 삭제**됩니다.

아래는 uuid를 통해 삭제하는 예입니다.

```java
BaasioFile deleteFile = new BaasioFile();
deleteFile.setUuid(uuid);                       // 삭제하려는 File entity의 uuid
deleteFile.deleteInBackground(
        new BaasioCallback<BaasioFile>() {
                @Override
                public void onResponse(BaasioFile response) {
                    if (response != null) {
                        // 성공
                    }
                }

                @Override
                public void onException(BaasioException e) {
                    // 실패
                }
            });
```


## Cancel Upload/Download
[]({'id':'upload-download-cancel', 'data-menu':'Cancel Upload/Download'})

파일을 생성하거나 수정하기 위해 수행되는 **업로드 작업 또는 파일을 다운로드하는 작업 중에 해당 작업을 취소**할 수 있습니다.

아래는 R.id.upload에 해당하는 메뉴를 눌러 파일을 업로드 하고, R.id.upload_canel에 해당하는 메뉴를 눌러 파일 업로드를 취소하는 예입니다.

```java
public class MainActivity extends Activity {
	
	...

	BaasioUploadAsyncTask uploadFileAsyncTask;

	...

	@Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {

            case R.id.upload: {
            	String srcFilePath = "/mnt/sdcard/test.txt";
				String filename = "test2.txt";

				BaasioFile uploadFile = new BaasioFile();
				uploadFile.setProperty("memo", "안녕하세요. baas.io입니다.");   // 파일 추가 정보1
				uploadFile.setProperty("integer", 1);                       // 파일 추가 정보2
				uploadFile.setProperty("long", Long.valueOf("1"));          // 파일 추가 정보3

				uploadFileAsyncTask = uploadFile.fileUploadInBackground(
				    srcFilePath             // 업로드하려는 파일 경로
				    , filename              // 설정하려는 파일 이름
				    , new BaasioUploadCallback() {

    				        @Override
    				        public void onResponse(BaasioFile response) {
    				            // 성공
    				            String memo = response.getProperty("memo").getTextValue();
    				            int intValue = response.getProperty("integer").getIntValue();
    				            long longValue = response.getProperty("long").getLongValue();
    				        }

    				        @Override
    				        public void onProgress(long total, long current) {
    				            // 진행 상황
    				        }

    				        @Override
    				        public void onException(BaasioException e) {
    				            // 실패
    				        }
    				    });
                break;
            }

            case R.id.upload_canel: {
            	uploadFileAsyncTask.cancel(true); // 업로드 취소
            	break;
            }
        }

        return super.onOptionsItemSelected(item);
    }

    ...
}
```

**다운로드를 취소하는 방법도 동일합니다.** 

아래는 R.id.download에 해당하는 메뉴를 눌러 파일을 업로드 하고, R.id.download_canel에 해당하는 메뉴를 눌러 파일 업로드를 취소하는 예입니다.

```java
public class MainActivity extends Activity {
	
	...

	BaasioDownloadAsyncTask downloadFileAsyncTask;

	...

	@Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {

            case R.id.download: {
            	String localPath = "/mnt/sdcard/baasio/test.txt";

				BaasioFile downloadFile = new BaasioFile();
				downloadFile.setUuid(uuid);
				downloadFileAsyncTask = downloadFile.fileDownloadInBackground(
			        localPath       // 다운로드 경로
			        , new BaasioDownloadCallback() {

    			            @Override
    			            public void onResponse(String localFilePath) {
    			                // 성공
    			            }

    			            @Override
    			            public void onProgress(long total, long current) {
    			                // 진행 상황
    			            }

    			            @Override
    			            public void onException(BaasioException e) {
    			                // 실패
    			            }
    			        });
                break;
            }

            case R.id.download_canel: {
            	downloadFileAsyncTask.cancel(true); // 다운로드 취소
            	break;
            }
        }

        return super.onOptionsItemSelected(item);
    }

    ...
}
```




# Push
[]({'id':'push', 'data-menu':'Push'})

baas.io는 **GCM을 이용한 Push 기능을 제공**합니다.
이 Push 서비스를 이용하기 위해서는 몇 가지 준비작업이 필요합니다.

기타 GCM 관련 자세한 사항은 [Google Cloud Messaging for Android 페이지](http://developer.android.com/google/gcm/index.html)를 참고하시기 바랍니다.


## BaasioPush 클래스
[]({'id':'push-class', 'data-menu':'BaasioPush 클래스'})

BaasioPush 클래스는, **단말을 등록/해제/갱신 시켜주기 위한 기능 및 메시지를 전송하는 기능을 제공**합니다.

이 함수의 등록/해제/갱신 함수를 이용하여 직접 GCM 기능을 구현하기 위해서는 깊은 이해가 필요합니다. **baas.io Android SDK는 등록/해제/갱신을 쉽게 내부적으로 처리하고 있으며, 많은 테스트를 통해 검증되어 있어, 쉽게 Push 기능을 구현하실 수 있습니다.**


## Quick Start For Push
[]({'id':'quick-start', 'data-menu':'Quick Start For Push'})

이 가이드를 통해 **Push 기능을 활성화** 시킬 수 있습니다. 이미 Google API Key와 Sender ID를 가지고 계시다면 [다음 과정으로 건너뛰기](#push-quick-start-setup) 하셔도 됩니다.

-----
`Warning` Quick Start를 하셨나요?
> 이 가이드를 보시기 전에 [Quick Start](/develop/android/quickstart.html)를 먼저 수행하셔서 기본적인 설정이 되어 있어야 합니다.

-----

### Google API Key &amp; Sender ID
[]({'id':'quick-start-key-and-senderid'})

GCM을 이용하기 위해서는 먼저 **Google API Key와 Sender ID**를 Google Console 페이지를 통해 발급 받아야합니다.

이 과정으로 통해 **Google API Key와 Sender ID**를 발급 받으실 수 있습니다.

###### Step1. Google 계정 만들기

Google 계정을 만듭니다. 이미 있으시다면 있는 것을 사용하실 수 있습니다.

###### Step2. GCM Sender ID 얻기

[Google APIs Console Page 페이지](https://code.google.com/apis/console)로 이동합니다.

생성된 API Project가 없다면 아래의 화면이 보일 것입니다.

![push-gcm-create-apis-project](../../images/develop/android/push-gcm-create-apis-project.png)

-----
`Note` 이미 생성이 되어 있나요?
> 이미 생성된 Project가 있다면 Dashboard 화면이 보일 것입니다. 여기서 새로운 Project를 더 생성할 수 있습니다.

-----

Create Project를 클릭하면 브라우저의 URL이 아래와 같은 형태로 보여질 것입니다.

```
https://code.google.com/apis/console/#project:4815162342
```

**여기에서 #project: 다음에 표시되는 숫자가 GCM Sender ID 입니다. 여기서는 4815162342가 GCM Sender ID입니다.**

###### Step3. GCM Service 활성화

[Google APIs Console Page 페이지](https://code.google.com/apis/console)에서 Services를 선택합니다.

![push-gcm-console-services.png](/images/develop/android/push-gcm-console-services.png)

Google Cloud Messaging for Android를 ON으로 설정하여 활성화시킵니다.

![push-gcm-console-services-gcm-on](/images/develop/android/push-gcm-console-services-gcm-on.png)

활성화를 시키면 약관을 확인하기 위한 화면이 나옵니다. **약관을 확인하여, 승인을 합니다.**

###### Step4. Google API Key 생성

[Google APIs Console Page 페이지](https://code.google.com/apis/console)에서 API Access를 선택합니다. 그러면 아래와 같은 화면이 보여집니다.

![push-gcm-console-api-access](/images/develop/android/push-gcm-console-api-access.png)

Create new Server key 버튼을 클릭하면 아래와 같은 화면이 나타납니다. 특별히 입력하지 않으셔도 됩니다.

![push-gcm-console-config-server-key](/images/develop/android/push-gcm-console-config-server-key.png)

Create 버튼을 클릭하면 아래와 같이 Api key가 생성되어 보여집니다. 아래 화면에서는 **YourKeyWillBeShownHere라는 글자 위치**에 표시됩니다.

![push-gcm-console-api-key](/images/develop/android/push-gcm-console-api-key.png)

-----
`Note` API Key 변경하기
> Key를 변경할 필요가 있으시면 Generate new key를 선택하여 새로운 키를 발급 받으실 수 있습니다. 새로운 키를 발급받으시면 이전 키는 24시간까지는 활성화된 상태로 유지됩니다.

-----

### Setting Up Push
[]({'id':'quick-start-setup', 'data-menu':'Setting Up Push'})

baas.io의 Push 기능을 이용하기 위해서는 ["Google API Key 와 Sender ID 생성"](#push-quick-start-key-and-senderid) 과정을 통해 Google API Key와 Sender ID를 발급 받아야 합니다.

아래의 입력창에, **적용하시려는 앱의 Package Name과 baas.io ID, Application ID, 발급받으신 Sender ID를 입력해주세요.**

<div class="center"><input class="package-name" type="text" placeholder="Your App's PackageName" value="com.example.app"></div>
<div class="center"><input class="member-id" type="text" placeholder="Member ID" value="PUT_YOUR_BAASIO_MEMBER_ID"></div>
<div class="center"><input class="app-id" type="text" placeholder="Application ID" value="PUT_YOUR_APPLICATION_ID"></div>
<div class="center"><input class="sender-id" type="text" placeholder="GCM Sender ID" value="PUT_YOUR_GCM_SENDER_ID"></div>

###### Step1. 백엔드앱의 설정에 Google API Key 등록

**baas.io 로그인 > My page > 백엔드앱 선택 > 설정 > 푸쉬인증서 관리**에 Google API Key를 등록합니다.

![push-register-google-api-key](/images/develop/android/push-register-google-api-key.png)
<div class="center"><img src="../../../images/develop/android/push-register-google-api-key.png" class="img-polaroid"/></div>

###### Step2. BaasioConfig.java 수정

아래 코드를 복사하여 "src/<span class="package-name-rep">com.example.app</span>" 위치의 **BaasioConfig.java 파일을 수정**합니다.

```java
package <span class="package-name-rep str">com.example.app</span>;

public class BaasioConfig {
	public static final String BAASIO_URL = "https://api.baas.io";

	// baas.io member ID
	public static final String BAASIO_ID = "<span class="member-id-rep str">PUT_YOUR_BAASIO_MEMBER_ID</span>";

	// baas.io application ID
	public static final String APPLICATION_ID = "<span class="app-id-rep str">PUT_YOUR_APPLICATION_ID</span>";

	// GCM(google cloud messaging service) sender ID
	public static final String GCM_SENDER_ID = "<span class="sender-id-rep str">PUT_YOUR_GCM_SENDER_ID</span>";
}
```

###### Step3. BaasioApplication.java 수정

BaasioApplication의 onCreate()에서 Baas.io().init()을 호출해 준 후에 Baas.io().setGCMEnabled()를 호출합니다. 이때, 리턴되는 AsyncTask는 앱이 종료될때 정상 종료될 수 있도록 onTerminate()에서 cancel()을 호출하여 줍니다.

baas.io().setGcmEnabled()를 호출하면 Main UI Thread가 아닌 background에서 단말 등록을 시도합니다. 이때 결과는 BaasioDeviceCallback으로 전달됩니다.

-----
`Note` 최초 실행시에는 setGcmEnabled()가 null을 리턴합니다.
> 최초 실행할때는 setGcmEnabled()가 호출되면 null을 리턴하며, 이는 정상 동작입니다. 이때 Sender ID를 GCM 서버에 등록하는 과정이 이루어지며, 등록이 완료되면 자동으로 GCM이 활성화 됩니다.

-----

"src/<span class="package-name-rep">com.example.app</span>"위치의 **BaasioApplication.java파일이 아래의 코드와 같이 setGcmEnabled()를 제대로 호출하고 있는지 확인합니다. 그대로 복사해서 사용하셔도 됩니다.**

```java
package <span class="package-name-rep">com.example.app</span>;

import com.kth.baasio.Baas;
import com.kth.baasio.callback.BaasioDeviceCallback;
import com.kth.baasio.entity.push.BaasioDevice;
import com.kth.baasio.exception.BaasioException;
import com.kth.common.utils.LogUtils;

import android.app.Application;
import android.os.AsyncTask;

public class BaasioApplication extends Application {
    private static final String TAG = LogUtils.makeLogTag(BaasioApplication.class);

    AsyncTask mGCMRegisterTask;

    @Override
    public void onCreate() {
        super.onCreate();

        Baas.io().init(this, BaasioConfig.BAASIO_URL, BaasioConfig.BAASIO_ID,
                BaasioConfig.APPLICATION_ID);

        mGCMRegisterTask = Baas.io().setGcmEnabled(this, null, new BaasioDeviceCallback() {

	            @Override
	            public void onException(BaasioException e) {
	                LogUtils.LOGE(TAG, "init onException:" + e.toString());
	            }

	            @Override
	            public void onResponse(BaasioDevice response) {
	                LogUtils.LOGD(TAG, "init onResponse:" + response.toString());
	            }
	        }, BaasioConfig.GCM_SENDER_ID);

    }

    @Override
    public void onTerminate() {
        if (mGCMRegisterTask != null) {
            mGCMRegisterTask.cancel(true);
        }

        Baas.io().uninit(this);
        super.onTerminate();
    }
}
```

###### Step4. GCMIntentService.java 생성

GCMIntentService.java는 GCM에서 보내주는 각종 메시지를 처리하는 역할을 하며, onMessage()에서 해당 메시지를 이용하여 Notification Bar에서 메시지를 보여주는 등의 처리를 할 수 있습니다.

먼저, "src/<span class="package-name-rep">com.example.app</span>" 위치에 gcm이라는 path를 생성합니다.

생성한 경로에 **GCMIntentService.java를 생성하여 아래의 코드를 붙여넣기 합니다.**

붙여넣기 한 코드는 기본적으로 Notification Bar에 메시지를 보여주도록 처리하고 있습니다. 이를 수정하려면 onMessage()를 수정하면 됩니다.

```java
/*
 * Copyright 2012 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package <span class="package-name-rep">com.example.app</span>.gcm;

import com.google.android.gcm.GCMBaseIntentService;
import com.kth.baasio.entity.push.BaasioPayload;
import com.kth.baasio.entity.push.BaasioPush;
import com.kth.baasio.exception.BaasioException;
import <span class="package-name-rep">com.example.app</span>.BaasioConfig;
import <span class="package-name-rep">com.example.app</span>.R;
import <span class="package-name-rep">com.example.app</span>.MainActivity;
import com.kth.baasio.utils.JsonUtils;
import com.kth.baasio.utils.ObjectUtils;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.support.v4.app.NotificationCompat;

import java.util.Random;

/**
 * {@link android.app.IntentService} responsible for handling GCM messages.
 */
public class GCMIntentService extends GCMBaseIntentService {

	private static final String TAG = LogUtils.makeLogTag("GCM");

	public GCMIntentService() {
		super(BaasioConfig.GCM_SENDER_ID);
	}

	@Override
	protected void onRegistered(Context context, String regId) {
		LogUtils.LOGI(TAG, "Device registered: regId=" + regId);

		try {
		    BaasioPush.register(context, regId);
		} catch (BaasioException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		}
	}

	@Override
	protected void onUnregistered(Context context, String regId) {
		LogUtils.LOGI(TAG, "Device unregistered");

		try {
		    BaasioPush.unregister(context);
		} catch (BaasioException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		}
	}

	@Override
	protected void onMessage(Context context, Intent intent) {
		String announcement = intent.getStringExtra("message");
		if (announcement != null) {
		    generateNotification(context, announcement);
		    return;
		}
	}

	/**
	 * Issues a notification to inform the user that server has sent a message.
	 */
	private static void generateNotification(Context context, String message) {
		BaasioPayload msg = JsonUtils.parse(message, BaasioPayload.class);
		if (ObjectUtils.isEmpty(msg)) {
		    return;
		}

		String alert = "";
		if (!ObjectUtils.isEmpty(msg.getAlert())) {
		    alert = msg.getAlert().replace("\\r\\n", "\n");
		}

		int icon = R.drawable.ic_launcher;
		long when = System.currentTimeMillis();
		NotificationManager notificationManager = (NotificationManager)context
		        .getSystemService(Context.NOTIFICATION_SERVICE);

		Intent notificationIntent = new Intent(context, MainActivity.class);
		// set intent so it does not start a new activity
		notificationIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP
		        | Intent.FLAG_ACTIVITY_SINGLE_TOP);
		PendingIntent intent = PendingIntent.getActivity(context, 0, notificationIntent, 0);

		Notification notification = new NotificationCompat.Builder(context).setWhen(when)
		        .setSmallIcon(icon).setContentTitle(context.getString(R.string.app_name))
		        .setContentText(alert).setContentIntent(intent).setTicker(alert)
		        .setAutoCancel(true).getNotification();

		notificationManager.notify(0, notification);
	}

	@Override
	public void onError(Context context, String errorId) {
		LogUtils.LOGE(TAG, "Received error: " + errorId);
	}

	@Override
	protected boolean onRecoverableError(Context context, String errorId) {
		// log message
		LogUtils.LOGW(TAG, "Received recoverable error: " + errorId);
		return super.onRecoverableError(context, errorId);
	}
}
``

###### Step5. GCMRedirectedBroadcastReceiver.java 구현

GCMRedirectedBroadcastReceiver.java는 GCMIntentService가 메시지를 받을 수 있도록 전달해주는 역할을 합니다.

"src/<span class="package-name-rep">com.example.app</span>" 위치에 **GCMRedirectedBroadcastReceiver.java를 생성하여 아래의 코드를 붙여넣기하시기 바랍니다.**

```java
/*
 * Copyright 2012 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package <span class="package-name-rep">com.example.app</span>.gcm;

import com.google.android.gcm.GCMBroadcastReceiver;

import android.content.Context;

/**
 * @author trevorjohns@google.com (Trevor Johns)
 */
public class GCMRedirectedBroadcastReceiver extends GCMBroadcastReceiver {

	/**
	 * Gets the class name of the intent service that will handle GCM messages.
	 * Used to override class name, so that GCMIntentService can live in a
	 * subpackage.
	 */
	@Override
	protected String getGCMIntentServiceClassName(Context context) {
	return GCMIntentService.class.getCanonicalName();
	}
}
```

###### Step6. AndroidManifest.xml 수정

Push를 이용하기 위해 아래와 같이 AndroidManifest.xml에 관련 클래스를 등록하고 퍼미션을 설정합니다.

```xml
<permission
    android:name="<span class="package-name-rep str">com.example.app</span>.permission.C2D_MESSAGE"
    android:protectionLevel="signature" />
<uses-permission android:name="<span class="package-name-rep str">com.example.app</span>.permission.C2D_MESSAGE" />

<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.USE_CREDENTIALS" />

<!--  전역 클래스 등록 -->
<application
    android:name="<span class="package-name-rep str">com.example.app</span>.BaasioApplication"
    android:icon="@drawable/ic_launcher"
    android:label="@string/app_name"&gt;

    ...

    <!--  GCM관련 모듈 등록 -->
    <!--
      BroadcastReceiver that will receive the C2DM messages from GCM
      services and handle them to the custom IntentService.

      The com.google.android.c2dm.permission.SEND permission is necessary
      so only GCM services can send data messages for the app.
    -->
    <receiver
        android:name="<span class="package-name-rep str">com.example.app</span>.gcm.GCMRedirectedBroadcastReceiver"
        android:permission="com.google.android.c2dm.permission.SEND" >
        <intent-filter>
            <!-- Receives the actual messages. -->
            <action android:name="com.google.android.c2dm.intent.RECEIVE" />
            <!-- Receives the registration id. -->
            <action android:name="com.google.android.c2dm.intent.REGISTRATION" />

            <category android:name="<span class="package-name-rep str">com.example.app</span>" />
        </intent-filter>
    </receiver>

    <!--
      Application-specific subclass of GCMBaseIntentService that will
      handle received messages.

      By default, it must be named .GCMIntentService, unless the
      application uses a custom BroadcastReceiver that redefines its name.
    -->
    <service android:name="<span class="package-name-rep str">com.example.app</span>.gcm.GCMIntentService" />
</application>
```

###### Step7. 푸쉬 확인해보기

**baas.io 로그인 > My page > 백엔드앱을 선택 > 푸시관리 > 푸시발송**에서 내용을 입력하고 메시지를 보내보세요.

테스트 하실 때에는 Google Play가 설치된 실제 안드로이드 단말에서 테스트 바랍니다. 특히, 에뮬레이터는 메시지를 받을 수 없습니다.

테스트하시는 단말로 메시지가 도착하셨나요?

-----
`Note` 잘 안되시나요? Push가 정상 설정되었는지 확인해 보세요.
> Google Play가 설치된 실제 안드로이드 단말에서 테스트하셔야합니다.
* baas.io 로그인 > My page 이동 > Application 선택
* 설정 > 푸시인증서 관리 Android API KEY 등록되었는지 확인
* 푸시 사용 설정이 사용함인지 확인
* 데이터브라우저 > Role 선택 > guest 선택 > Permission 탭 선택
* "/devices" Create 체크됨 확인(v0.8.1 이전 버전은 "/pushes/devices")
* "/devices/*" Update, Delete 체크됨 확인(v0.8.1 이전 버전은 "/pushes/devices/*")
* 데이터브라우저 > Role 선택 > default 선택 > Permission 탭 선택
* 설정된 Role이 "/device" Create와 "/devices/*" Update, Delete를 포함하고 있는지 확인(v0.8.1 이전 버전은 "/pushes/devices", "/pushes/devices/*")
* 프로젝트의 AndroidMenifest.xml 파일을 열어 아래와 같이 package 명이 제대로 들어가 있는지 확인합니다.
```xml
<permission
	android:name="<span class="package-name-rep str">com.example.app</span>.permission.C2D_MESSAGE"
	android:protectionLevel="signature" />
...
	<receiver
		android:name="<span class="package-name-rep str">com.example.app</span>.gcm.GCMRedirectedBroadcastReceiver"
		android:permission="com.google.android.c2dm.permission.SEND" >
		<intent-filter>
			<!-- Receives the actual messages. -->
			<action android:name="com.google.android.c2dm.intent.RECEIVE" />
			<!-- Receives the registration id. -->
			<action android:name="com.google.android.c2dm.intent.REGISTRATION" />
			<category android:name="<span class="package-name-rep str">com.example.app</span>" />
		</intent-filter>
	</receiver>
...
<service android:name="<span class="package-name-rep str">com.example.app</span>.gcm.GCMIntentService" />
```

-----


## Device Register
[]({'id':'device-register', 'data-menu':'Device Register'})

**단말을 baas.io로 등록 합니다.** 등록하는 방법은 **Tag정보를 포함하여 등록하는 방법과 그냥 등록하는 방법**, 두 가지가 있습니다.

각 **Tag는 36자까지 길이를 허용**합니다.

```java
// 단말 등록
BaasioDeviceAsyncTask mGCMRegisterTask = BaasioPush.registerInBackground(
        context
        , new BaasioDeviceCallback() {

	            @Override
	            public void onException(BaasioException e) {
	                // 등록 실패
	            }

	            @Override
	            public void onResponse(BaasioDevice response) {
	                if (response != null) {
	                    // 등록 성공
	                }

	            }
	        });

// 태그 정보와 함께 단말 등록
BaasioDeviceAsyncTask mGCMRegisterTask = BaasioPush.registerWithTagsInBackground(
        context
        , tags          // 태그 정보
        , new BaasioDeviceCallback() {

	            @Override
	            public void onException(BaasioException e) {
	                // 등록 실패
	            }

	            @Override
	            public void onResponse(BaasioDevice response) {
	                if (response != null) {
	                    // 등록 성공
	                }

	            }
	        });
```

## Device Unregister
[]({'id':'device-unregister', 'data-menu':'Device Unregister'})

**등록된 단말을 해제** 합니다. 해제되면 더이상 메시지를 받을 수 없습니다.

```java
BaasioPush.unregisterInBackground(
        context
        , new BaasioResponseCallback() {

	            @Override
	            public void onException(BaasioException e) {
	                // 해제 실패
	            }

	            @Override
	            public void onResponse(BaasioResponse response) {
	                if (response != null) {
	                    // 해제 성공
	                }
	            }
    		});
```

-----
`Caution` Push On/Off
> Push기능을 On/Off 하기위해 register/unregister를 이용하지 말아야합니다. 즉, 앱의 설정으로 Push 메시지 수신 기능을 On/Off 하시려면, 메시지를 수신하는 부분인 GCMIntentService.java에서 메시지를 무시하도록 구현하시기 바랍니다. 관련 링크는 [GCM Advanced Topics - Unregistration](http://developer.android.com/google/gcm/adv.html#unreg)를 참고바랍니다.

-----

## Sending Pushes
[]({'id':'sending-push', 'data-menu':'Sending Pushes'})

**Push 메시지 구성을 쉽게 하기 위해 BaasioMessage 클래스가 제공**됩니다. 필요한 데이터를 채워 BaasioPush 클래스를 이용하여 메시지를 전송합니다.

메시지를 전송하는 방법은 **setMessage()와 setPayload()**, 이렇게 두 가지 방법이 있습니다.

setMessage()는 비교적 간단한 메시지를 전송하기 위해 사용하고, **setPayload()는 기본 메시지 규격외에 Custom한 데이터를 전송하기 위해 사용**합니다.

### Push for All
[]({'id':'sending-push-all'})

**모든 단말로 Push를 발송합니다.**

```java
// setMessage를 이용한 방법
BaasioMessage message = new BaasioMessage();
message.setMessage(
	"전체 발송"         // 전송할 메시지
	, "homerun.caf"     // iOS APNS의 sound
	, 1);               // iOS APNS badge 갯수

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});

// setPayload를 이용한 방법
BaasioPayload payload = new BaasioPayload();
payload.setAlert("전체 발송");      // 전송할 메시지
payload.setSound("homerun.caf");    // iOS APNS의 sound
payload.setBadge(1);                // iOS APNS badge 갯수

BaasioMessage message = new BaasioMessage();
message.setPayload(payload);

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});
```

### Push by Platform
[]({'id':'sending-push-platform', 'data-menu':'Push by Platform'})

**setPlatform()를 호출하여 메시지를 받을 플랫폼을 설정하여 발송합니다.** 

안드로이드만 푸시를 보내기 위해서는 **BaasioMessage.PLATFORM_FLAG_TYPE_GCM**, iOS만 보내기위해서는 **BaasioMessage.PLATFORM_FLAG_TYPE_IOS**를 설정합니다.

두 플랫폼을 모두 보내려면 **BaasioMessage.PLATFORM_FLAG_TYPE_GCM | BaasioMessage.PLATFORM_FLAG_TYPE_IOS**로 설정합니다.

```java
// setMessage를 이용한 방법
BaasioMessage message = new BaasioMessage();
message.setMessage(
	"안드로이드만 발송" // 전송할 메시지
	, "homerun.caf"     // iOS APNS의 sound
	, 2);               // iOS APNS badge 갯수
message.setPlatform(BaasioMessage.PLATFORM_FLAG_TYPE_GCM); // Android GCM으로만 발송

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});

// setPayload를 이용한 방법
BaasioPayload payload = new BaasioPayload();
payload.setAlert("안드로이드만 발송");  // 전송할 메시지
payload.setSound("homerun.caf");        // iOS APNS의 sound
payload.setBadge(2);                    // iOS APNS badge 갯수

BaasioMessage message = new BaasioMessage();
message.setPayload(payload);
message.setPlatform(BaasioMessage.PLATFORM_FLAG_TYPE_GCM); // Android GCM으로만 발송

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});
```

### Push by Tags
[]({'id':'sending-push-tag', 'data-menu':'Push by Tags'})

**단말을 등록할 때 설정된 태그별로 메시지를 발송합니다.**

```java
// setMessage를 이용한 방법
BaasioMessage message = new BaasioMessage();
message.setMessage(
"태그별 발송"          // 전송할 메시지
, "homerun.caf"     // iOS APNS의 sound
, 3);               // iOS APNS badge 갯수
message.setTarget(BaasioMessage.TARGET_TYPE_TAG);   // 태그별 발송
message.setTo("friend,male");                       // friend와 male tag로 등록된 단말로 발송

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

	        @Override
	        public void onException(BaasioException e) {
	            // 실패
	        }

	        @Override
	        public void onResponse(BaasioMessage response) {
	            if (response != null) {
	                // 성공
	            }

	        }
	    });

// setPayload를 이용한 방법
BaasioPayload payload = new BaasioPayload();
payload.setAlert("태그별 발송");       // 전송할 메시지
payload.setSound("homerun.caf");    // iOS APNS의 sound
payload.setBadge(3);                // iOS APNS badge 갯수

BaasioMessage message = new BaasioMessage();
message.setPayload(payload);
message.setTarget(BaasioMessage.TARGET_TYPE_TAG);   // 태그별 발송
message.setTo("friend,male");                       // friend와 male tag로 등록된 단말로 발송

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

	        @Override
	        public void onException(BaasioException e) {
	            // 실패
	        }

	        @Override
	        public void onResponse(BaasioMessage response) {
	            if (response != null) {
	                // 성공
	            }

	        }
    	});
```

### Push by User, Device
[]({'id':'sending-push-each', 'data-menu':'Push by User, Device'})

**회원별로 또는 단말별로 개별 발송할 수 있습니다.**

개별 전송은 **최대 50개의 대상**에게 발송할 수 있습니다.

```java
// setMessage를 이용한 방법
BaasioMessage message = new BaasioMessage();
message.setMessage(
	"개별 발송"         // 전송할 메시지
	, "homerun.caf"     // iOS APNS의 sound
	, 5);   // iOS APNS badge 갯수
message.setTarget(BaasioMessage.TARGET_TYPE_USER);  // 회원 개별 발송
message.setTo("uuid1,uuid2");                       // uuid1, uuid2의 회원에게 전송

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});

// setPayload를 이용한 방법
BaasioPayload payload = new BaasioPayload();
payload.setAlert("개별 발송");      // 전송할 메시지
payload.setSound("homerun.caf");    // iOS APNS의 sound
payload.setBadge(5);                // iOS APNS badge 갯수

BaasioMessage message = new BaasioMessage();
message.setPayload(payload);
message.setTarget(BaasioMessage.TARGET_TYPE_USER);  // 회원 개별 발송
message.setTo("uuid1,uuid2");                       // uuid1, uuid2의 회원에게 전송

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});
```

### Reserved Push
[]({'id':'reserved', 'data-menu':'Reserved Push'})

**정해진 시간에 메시지가 발송되도록 요청합니다.**

시간은 **KST 기준**이며, 예약 발송으로 전송된 시간의 남은 시간이 **5분 이내일 경우에는 바로 발송 처리**됩니다.

```java
// setMessage를 이용한 방법
BaasioMessage message = new BaasioMessage();
message.setMessage(
	"예약 발송"         // 전송할 메시지
	, "homerun.caf"     // iOS APNS의 sound
	, 4);   // iOS APNS badge 갯수
message.setReserve("201301251422"); // 2013년 1월 25일 오후 2시 22분

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});

// setPayload를 이용한 방법
BaasioPayload payload = new BaasioPayload();
payload.setAlert("예약 발송");      // 전송할 메시지
payload.setSound("homerun.caf");    // iOS APNS의 sound
payload.setBadge(4);                // iOS APNS badge 갯수

BaasioMessage message = new BaasioMessage();
message.setReserve("201301251422"); // 2013년 1월 25일 오후 2시 22분
message.setPayload(payload);

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});
```


### Push with Custom Fields
[]({'id':'custom', 'data-menu':'Push with Custom Fields'})

**setPayload()를 이용하면, 추가로 다른 필드를 넣어서 메시지를 전송할 수 있습니다.**

```java
BaasioPayload payload = new BaasioPayload();
payload.setAlert("커스텀 필드와 함께 전체발송");
payload.setProperty("extra", "커스텀필드");

BaasioMessage message = new BaasioMessage();
message.setPayload(payload);

BaasioPush.sendPushInBackground(
	message
	, new BaasioCallback<BaasioMessage>() {

		    @Override
		    public void onException(BaasioException e) {
		        // 실패
		    }

		    @Override
		    public void onResponse(BaasioMessage response) {
		        if (response != null) {
		            // 성공
		        }

		    }
		});
```




# Help Center
[]({'id':'helpcenter', 'data-menu':'Help Center'})

baas.io는 고객님의 앱이 **고객님의 회원분들에게 더 나은 서비스를 제공할 수 있도록, 고객센터 서비스를 제공**해드리고 있습니다.
baas.io 고객센터 서비스는 **자주하는 질문(FAQ), 문의하기 기능**을 제공해드리고 있습니다.

특히, baas.io Android SDK에서는 모바일에서 고객센터를 쉽게 구현하실 수 있도록 고객센터 UI 라이브러리를 오픈소스 라이브러리 형태로 제공해드리고 있습니다. 이 UI 라이브러리를 이용하시면 간단히 구현하실 수 있습니다.


## BaasioHelp 클래스
[]({'id':'helpcenter-class', 'data-menu':'BaasioHelp 클래스'})

BaasioHelp 클래스를 통해 고객센터의 FAQ를 조회하고 문의사항을 전송하는 기능을 제공합니다.


## Quick Start For Help Center
[]({'id':'helpcenter-quick-start', 'data-menu':'Quick Start For Help Center'})

고객센터 UI 라이브러리를 프로젝트에 적용하는 방법을 가이드합니다.

개발 툴은 Eclipse 또는 Android Studio, IntelliJ를 이용하시길 권장합니다.

순서대로 따라하시면 baas.io를 이용하기 위한 프로젝트 설정을 완료하실 수 있습니다.

-----
`Warning` Quick Start를 하셨나요?
> 이 가이드를 보시기 전에 [Quick Start](/develop/android/quickstart.html)를 먼저 수행하셔서 기본적인 설정이 되어 있어야 합니다.

-----

##### Step1. UI 라이브러리 다운받기

Git를 이용하거나 Zip으로 다운로드 받으실 수 있습니다.

- Git

```text
git clone https://github.com/baasio/baas.io-helpcenter-android.git
```

- [Zip 다운로드](https://github.com/baasio/baas.io-helpcenter-android/archive/master.zip)

##### Step2. UI 라이브러리 Import하기

<!-- <div class="tab-content">
	<div class="btn-tab btn-group" data-toggle="buttons-radio">
    	<button type="button" class="btn btn-android-guide active" href="#quickstart-eclipse"><i class="icon-ok"> </i>Eclipse</button>
    	<button type="button" class="btn btn-android-guide" href="#quickstart-intellij"><i class="icon-ok hidden"> </i>Android Studio 또는 IntelliJ</button>
    </div>
</div> -->
Eclipse의 **File > Import 메뉴**를 선택합니다.

![quickstart eclipse import](/images/develop/android/quickstart-eclipse-import.png)

Import 다이얼로그에서 **"General-Existing Projects into Workspace"**를 선택하고 **"Next"버튼**을 선택합니다.

![](/images/develop/android/quickstart-eclipse-import-exist.png)

다음 Import 다이얼로그 화면에서 **"Select root directory"의 "Browse"버튼**을 눌러 다운로드 받은 폴더를 선택하고, **"Projects:"에서 ActionBarSherlock, BaasioHelpCenter, BaasioHelpCenterSampleProject 프로젝트를 선택**하고 **"Finish"**를 선택합니다.

![](/images/develop/android/select_BaasioHelpCenter.png)

BaasioHelpCenterSampleProject 프로젝트는 샘플 앱으로, 고객 센터를 실행하기 위한 샘플이 이미 구현되어 있으니 참고 바랍니다.

##### Step3. UI 라이브러리 연동하기</h5>

Eclipse의 **Package Exploror 화면**에서 생성하신 프로젝트에서 오른쪽 마우스를 클릭하여 **Properties**를 선택합니다.

![](/images/develop/android/Project-Properties.png)

Properties 다이얼로그에서 **Android**를 선택하고 아래에 있는 **Library에서 Add버튼**을 선택합니다.

![](/images/develop/android/Project-Properties-Dialog.png)

Projection Selection 다이얼로그에서 **BaasioHelpCenter프로젝트를 선택**하고, **"OK"**를 선택합니다.

![](/images/develop/android/Project_HelpCenter_Selection.png)



## Get FAQ List
[]({'id':'get-faq', 'data-menu':'Get FAQ List'})

**FAQ 리스트를 조회해 옵니다.**

```java
BaasioHelp.getHelpsInBackground(
    new BaasioCallback<List<FaqCategory>>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(List<FaqCategory> response) {

                if (response != null) {
                    // 성공
                }
            }
        });
```


## Get FAQ Content
[]({'id':'get-faq-content', 'data-menu':'Get FAQ Content'})

** FAQ 내용을 가져옵니다.</**strong>

```java
BaasioHelp.getHelpDetailInBackground(
    uuid        // 도움말 항목의 uuid
    , new BaasioCallback<Faq>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(Faq response) {
                if (response != null) {
                    // 성공
                }
            }
        });
```


## Search FAQ
[]({'id':'search-faq', 'data-menu':'Search FAQ'})

**검색할 단어를 포함하는 FAQ를 조회해 옵니다.**

```java
BaasioHelp.searchHelpsInBackground(
    keyword     // 찾으려는 키워드
    , new BaasioCallback<List<FaqCategory>>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(List<FaqCategory> response) {

                if (response != null) {
                    // 성공
                }
            }
        });
```


## Create Question
[]({'id':'helpcenter-create', 'data-menu':'Create Question'})

**문의 사항을 보냅니다.**

```java
BaasioHelp.sendQuestionInBackground(
    context
    , email     // 이메일 주소
    , body      // 문의사항
    , new BaasioCallback<Question>() {

            @Override
            public void onException(BaasioException e) {
                // 실패
            }

            @Override
            public void onResponse(Question response) {
                if(response != null) {
                    // 성공
                }
            }
        });
```
