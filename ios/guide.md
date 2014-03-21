# iOS Intro
[]({'id':'intro', 'data-menu':'iOS Intro'})


## Specification
[]({'id':'intro-specification', 'data-menu':'Specification'})
baas.io는 iOS App을 개발하기 위한 SDK를 제공합니다. SDK는 Framework 형태로 제공되며 Download 페이지 & github를 통해 다운 받으실 수 있습니다.

baas.io iOS SDK는 아래와 같은 개발 환경을 지원합니다.

- iOS 5.1.1 이상

또한 아래와 같은 외부 Library를 사용하고 있습니다.

- AFNetworking


## Class Structure
[]({'id':'intro-class-structure', 'data-menu':'Class Structure'})

baas.io SDK는 baas.io에서 제공하는 서비스에 따라 아래와 같은 클래스를 제공합니다.

- Users(회원관리): BaasioUser
- Data(데이터관리): BaasioEntity
- Query(조회): BaasioQuery
- Group(그룹관리): BaasioGroup
- File(파일관리): BaasioFile
- Push(푸시메시지): BaasioPush
- Help Center(고객센터): BaasioHelp


## Method Rule
[]({'id':'method-rule'})

baas.io는 모든 클래스의 메소드에 대해 **동기/비동기 방식**을 지원하며, 쌍으로 제공하고 있습니다.

메소드의 이름은 방식에 따라, 동기식의 경우, 동사(Verb)로 명명하고 있으며, 비동기식은 동사(Verb)+InBackground 명명하고 있습니다.
아래의 예는 save(저장)이라는 동사에 따른 동기/비동기식 함수의 예를 보여주고 있습니다.

##### 동기식 코드
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"Collection Name"];
[entity save:error];

if (!error) {
    //성공
} else {
    //실패
}
```

##### 비동기식 코드
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"Collection Name"];
[entity saveInBackground:^(BaasioEntity *entity) {
				// Success
            }
            failureBlock:^(NSError *error) {
            	// Failure
            }];
```

차이점은, 동기식은 메소드의 리턴(Return)값으로 결과를 전달되고 있으며, 비동기식은 메소드로 전달된 Callback을 통해 결과가 전달되고 있음을 알 수 있습니다.

비동기 작업의 경우 Blocks를 이용하였습니다. 처음에는 조금 어려워 보일 수도 있지만 Delegate를 사용하는 것보다 더 편하다는 것을 알게 될 것입니다.

Blocks에 대해서는  [Blocks Programming Topics](https://developer.apple.com/library/ios/#documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html)를 참고하기를 바라지만,  짧게 설명하면 2가지로 요약이 가능합니다.

* Method의 argument로  코드 블럭을 넘기는 것입니다.
* baas.io의 경우 ^ 바로 뒤가 리턴값 되도록 구현하였습니다.(\^(void)는  void가, \^(BaasioEntity *entity)는  entity가 리턴된다.)

대부분의 경우 동기(Sync)와 비동기(Async) API를 동시에 제공하나, 일반적으로 대부분의 프로그래밍은 비동기(Async)로 작성됩니다.


## etc
[]({'id':'intro-etc'})

#### Permission
baas.io의 모든 Data관련 Method들은 Permission 설정이 필요합니다. 회원 가입시 자동으로 부여되는 회원의 role은 default입니다.

role에 권한을 추가하거나 유저에게 권한을 추가하는 방법은 SDK에서는 제공하지 않습니다. REST API를 이용하여 권한을 설정하거나 마이 페이지의 데이터 브라우저를 이용하여 권한을 설정하면 됩니다.

#### Unique Value
key가 name인 프로퍼티는 Unique한 속성을 가지고 있습니다. Entity 설계시 참고하기 바랍니다.




# Users
[]({'id':'users'})
User 기능은 **users Collection**을 통해 지원되며, 사용자의 회원가입, 로그인 및 정보의 관리 기능을 제공합니다.


##Sign Up
[]({'id':'sign-up'})
회원을 가입하는 방법은 username(email)을 통한 가입과 Facebook을 통한 가입을 지원합니다.

####동기식 코드
```objc
NSError *e = nil;
BaasioUser *user = [BaasioUser user];
user.username = @"cetauri";       // 다음 코드도 같다. [user setObject:@"user name" forKey:@"username"];
[user setObject:@"password" forKey:@"password"];
[user setObject:@"cetauri@gmail.com" forKey:@"email"];
[user setObject:@"권오상" forKey:@"name"];
[user setObject:@"kwon, ohsang" forKey:@"eng_name"];	 //추가된 정보
[user setObject:@"M" forKey:@"sex"];	 				//추가된 정보
[user signUp:&e];

if(e){
    NSLog(@"fail : %@", e.localizedDescription);
}
```

####비동기식 코드

```objc
BaasioUser *user = [BaasioUser user];
user.username = @"cetauri";       // 다음 코드도 같다. [user setObject:@"user name" forKey:@"username"];
[user setObject:@"password" forKey:@"password"];
[user setObject:@"cetauri@gmail.com" forKey:@"email"];
[user setObject:@"권오상" forKey:@"name"];
[user setObject:@"kwon, ohsang" forKey:@"eng_name"];	 //추가된 정보
[user setObject:@"M" forKey:@"sex"];	 				//추가된 정보

[user signUpInBackground:^(void) {
                NSLog(@"success");
            }
            failureBlock:^(NSError *error){
                NSLog(@"fail : %@", error.localizedDescription);
            }];
```


또한 회원 가입은 static method를 이용하여 간단히 생성 가능하지만, 입력 필드는 "id, 암호, 이름, 메일"로 제한됩니다.

####동기식 코드
```objc
[BaasioUser signUp:@"My ID"
          password:@"My Password"
              name:@"My name"
             email:@"email@baas.io"
             error:&error];

if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

####비동기식 코드
```objc
[BaasioUser signUpInBackground:@"My ID"
                      password:@"My Password"
                          name:@"My name"
                         email:@"email@baas.io"
                  successBlock:^(void) {
                          NSLog(@"success");
                      }
                      failureBlock:^(NSError *error) {
                          NSLog(@"fail : %@", error.localizedDescription);
                      }];
```


## Sign Up with Facebook
[]({'id':'sign-up-via-Facebook'})
Facebook을 이용한 회원가입 방법입니다. 기본 셋팅과 테스트는 [Facebook SDK 이용가이드](http://blog.baas.io/archives/921)에서 확인하실 수 있습니다.

#####동기식 코드
```objc
NSString *accessToken = @"......"	//facebook Token
[BaasioUser signInViaFacebook:accessToken error:&error];

if (!error) {
	//성공
    NSLog(@"Success");
} else {
	//실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
NSString *accessToken = @"......"	//facebook Token
[BaasioUser signInViaFacebookInBackground:accessToken
							 successBlock:^(void){
                                 NSLog(@"success : %@", file.uuid);
                             }
                             failureBlock:^(NSError *error) {
                                 NSLog(@"error : %@", error.localizedDescription);
                             }];
```


## Sign In
[]({'id':'sign-in'})
로그인 방법은 username(email)을 통한 로그인과 Facebook을 통한 로그인을 지원합니다.

#####동기식 코드
```objc
[BaasioUser signIn:@"My ID" password:@"My Password" error:&error];

if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
[BaasioUser signInBackground:@"My ID"
                    password:@"My Password"
                successBlock:^(void) {
                    NSLog(@"success");
                }
                failureBlock:^(NSError *error) {
                    NSLog(@"fail : %@", error.localizedDescription);
                }];
```


## Sign In With Facebook
[]({'id':'users-sign-in-via-facebook'})

#####동기식 코드
```objc
NSString *accessToken = @"......"	//facebook Token
[BaasioUser signUpViaFacebook:accessToken error:&error];

if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
NSString *accessToken = @"......"	//facebook Token
[BaasioUser signUpViaFacebookInBackground:accessToken
                             successBlock:^(void){
                                NSLog(@"success : %@", file.uuid);
                             }
                             failureBlock:^(NSError *error) {
                                NSLog(@"error : %@", error.localizedDescription);
                             }
```


## Update User
[]({'id':'users-update'})
회원의 정보를 수정할 수 있습니다.

#####동기식 코드
```objc
BaasioUser *user = [BaasioUser currentUser];
user.username = @"cetauri";
[user setObject:@"20" forKey:@"age"];
[user update:&error];
```

#####비동기식 코드
```objc
BaasioUser *user = [BaasioUser currentUser];
user.username = @"cetauri";
[user setObject:@"20" forKey:@"age"];
[user updateInBackground:^(BaasioUser *user) {
                 NSLog(@"success.");
            }
            failureBlock:^(NSError *error) {
                 NSLog(@"error : %@", error.localizedDescription);
            }];
```


## Change Password
[]({'id':'change-password'})
현재 로그인되어 있는 User의 비밀번호를 변경합니다. 기존 비밀번호와 새로운 비밀번호를 이용하여 비밀번호를 변경합니다.

#####동기식 코드
```objc
NSError *error = nil;
[BaasioUser changePassword:@"oldPassword" newPassword:@"newPassword" error:&error];

if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error : %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
[BaasioUser changePasswordInBackground:@"oldPassword"
                           newPassword:@"newPassword"
                          successBlock:^(void){
                              NSLog(@"success");
                          }
                          failureBlock:^(NSError *error){
                              NSLog(@"fail : %@", error.localizedDescription);
                          }];
```

##### 관련 에러코드

Error Code|HTTP Status Code|설명
---------|----------------|--------------------------------------------
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





Predefined Type|Predefined Collection 이름 및 위치|	용도
------------|-------------------|-------------
user|/users|	회원정보
group|/groups|	회원그룹
role|/roles|	역할
activity|/activities|	Activity Stream
device|/devices|	단말정보
file|/files|	파일
event|/events|	(예약)이벤트
help|helps|	고객센터
push|/pushes|	푸시정보
location|/locations|	(예약)위치정보
script|/scripts|	(예약)스크립트
service|/services|	(예약)서비스


## Reset Password
[]({'id':'reset-password'})
이메일을 이용하여 특정 User의 비밀번호를 초기화 합니다. **초기화를 위해서는 User의 가입 정보에 이메일 정보가 꼭 설정되어 있어야 합니다.**

이를 호출하면 User의 Email로 초기화메일이 발송됩니다.

#####동기식 코드
```objc
NSError *error = nil;
[BaasioUser resetPassword:@"email" error:&error];

if (!error) {
	//성공
    NSLog(@"Success");
} else {
	//실패
    NSLog(@"Error : ---------------------- %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
[BaasioUser resetPasswordInBackground:@"jeonguechan@gmail.com"
                         successBlock:^{
                         	//성공
                            NSLog(@"success");
                         }
                         failureBlock:^(NSError *error) {
                         	//실패
                            NSLog(@"fail : %@", error.localizedDescription);
                         }];
```

##### 관련 에러코드
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


## Unsubscribe User
[]({'id':'unsubscribe'})
회원탈퇴기능을 구현할 수 있습니다.

#####동기식 코드
```objc
BaasioUser *user = [BaasioUser currentUser];
[BaasioUser unsubscribe error:&error];

if (!error) {
	//성공
	NSLog(@"Success");
} else {
	//실패
	NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
BaasioUser *user = [BaasioUser currentUser];
[user unsubscribeInBackground:^(void) {
					NSLog(@"success.");
                 }
                 failureBlock:^(NSError *error) {
                 	NSLog(@"error : %@", error.localizedDescription);
                 }];
```


## etc.
[]({'id':'users-etc'})

##### 로그인
일단 로그인이 되면 SDK 내부에서 baas.io 서버에서 발급해준 token을 가지고 있습니다.
그리고 token이 있다면 그 후부터는 모든 RESTFul API 접근 시에 자동으로 token을 실어서 보냅니다.

##### 로그인 된 사용자의 정보
```objc
BaasioUser *user = [BaasioUser currentUser];
if(user == nil) {
	//로그인 안됨
} else {
	//로그인 됨
    NSLog(@"user : %@", user.description);
}
```
혹은 아래와 같이 사용하면 된다.
```objc
BOOL isLogin = [[Baasio sharedInstance]hasToken];
```




# Data(Entity)
[]({'id':'data'})


## Entity
[]({'id':'entity'})
baas.io의 Entity 객체는 기본적으로 key/value 형태의 Dictionary입니다.

미리 정의된 값들은  @property 선언되어 바로 참조가 가능하지만 그 외 사용자가 원하는 값은 아래와 같은 방법으로 읽고, 쓰기가 가능합니다.

또한, Entity를 활용하려면 사용하는 Collection에 대한 Permission이 필요합니다. Permission 설정은 Rest API를 활용하거나 마이페이지의 데이터 브라우저를 이용하여 설정할 수 있습니다.

#####이미 정의된 프로퍼티 사용
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"COLLECTION NAME"];

//이미 정의 된 프로퍼티에 셋팅
entity.name = @"cetauri";

//이미 정의 된 프로퍼티 읽기
NSString *name = entity.name;
```

#####커스텀 프로퍼티 사용
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"GameScore"];

//커스텀 프로퍼티 셋팅
[entity setObject:[NSNumber numberWithInt:1337] forKey:@"score"];
[entity setObject:@"Sean Plott" forKey:@"playerName"];
[entity setObject:[NSNumber numberWithBool:NO] forKey:@"cheatMode"];

//커스텀 프로퍼티 읽기
NSString *score = [entity objectForKey:@"score"];
NSString *playerName = [entity objectForKey:@"playerName"];
NSString *cheatMode = [entity objectForKey:@"cheatMode"];
```

미리 정의된 @property는 다음과 같습니다.

name|의미
:----|:----
uuid|키
created|작성일
modified|최종수정일
type|entity 명


## Create Entity
[]({'id':'data-create'})
데이터를 저장 후 error를 확인하여 성공 여부를 확인하여 작업하면 됩니다.

##### 동기식 코드
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"SomeBlog"];
[entity setObject:@"제목"forKey:@"title"];
[entity setObject:@"내용" forKey:@"content"];
[entity setObject:@"작성자" forKey:@"writer"];
[entity save:error];

if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

##### 비동기식 코드
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"SomeBlog"];
[entity setObject:@"제목"forKey:@"title"];
[entity setObject:@"내용" forKey:@"content"];
[entity setObject:@"작성자" forKey:@"writer"];
[entity saveInBackground:^(BaasioEntity *entity) {
                NSLog(@"success : %@", entity.description);
            }
            failureBlock:^(NSError *error) {
                NSLog(@"fail : %@", error.localizedDescription);
            }];
```


## Get Entity
[]({'id':'data-get'})
```objc
[BaasioEntity getInBackground:@"SomeBlog"
                         uuid:uuid
                 successBlock:^(BaasioEntity *entity) {
                     NSLog(@"entity : %@", entity.description);
                 }
                 failureBlock:^(NSError *error) {
                     NSLog(@"fail : %@", error.localizedDescription);
                 }];
```


## Update Entity
[]({'id':'data-update'})
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"SomeBlog"];
entity.uuid = uuid;
[entity setObject:@"30" forKey:@"duration"];

[entity updateInBackground:^(BaasioEntity *entity) {
                                    NSLog(@"entity : %@", entity.description);
                                }
                                failureBlock:^(NSError *error) {
                                    NSLog(@"fail : %@", error.localizedDescription);
                                }];
```


## Delete Entity
[]({'id':'data-delete'})
```objc
BaasioEntity *entity = [BaasioEntity entitytWithName:@"SomeBlog"];
entity.uuid = uuid;
[entity deleteInBackground:^(void) {
                                NSLog(@"success");
                            }
                            failureBlock:^(NSError *error) {
                                NSLog(@"fail : %@", error.localizedDescription);
                            }];
```


## Entity Relationship
[]({'id':'data-connect'})
Entity간의 relation이 필요할 때가 있습니다.

예를 들면 블로그(blogEntity)와 댓글(commentEntity)처럼 1:N 관계를 설정한다고 한다면,
Primary가 되는 Entity에 connect method를 부르고 relation 이름과 해당 Entity를 넘겨주면 됩니다.

##### Connect
```objc
[blogEntity connectInBackground:commentEntity
                   relationship:@"blogWithComment"
                   successBlock:^(void){
                       //성공
                   }
                   failureBlock:^(NSError *error){
                      NSLog(@"fail : %@", error.localizedDescription);
                   }];
```

##### Disconnect
Connect와 같은 방법으로 하면 연결이 해제됩니다.
```objc
[blogEntity disconnectInBackground:commentEntity
                      relationship:@"blogWithComment"
                      successBlock:^(void){
                          //성공
                      }
                      failureBlock:^(NSError *error){
                          NSLog(@"fail : %@", error.localizedDescription);
                      }];
```




# Query
[]({'id':'query'})
Query를 이용하여 조건에 맞는 Entity를 검색하고, 페이징을 구현 할 수 있습니다.

일반적인 쿼리의 사용법은 아래와 같습니다.
BaasioQuery를 생성하고, 값을 셋팅해 준 후에 query(또는 queryInBackground)를 실행해주면 됩니다.

#####예제
```objc
BaasioQuery *query = [BaasioQuery queryWithCollection:@"tests"];
[query setLimit:10];
[query setProjectionIn:@"name, title"];
[query setOrderBy:@"name" order:BaasioQuerySortOrderASC];
[query setWheres:@"name = 'gary'"];

[query queryInBackground:^(NSArray *array) {
    NSLog(@"array : %@", array.description);
}
failureBlock:^(NSError *error) {
    NSLog(@"fail : %@", error.localizedDescription);
}];
```

이 쿼리는 MySQL의 SQL 쿼리와 같습니다.
```sql
select
	name, title
from
	tests
where
	name = 1
order by
	 name asc
limit 10
```


## Paging
[]({'id':'paging'})
baas.io는 게시판의 페이징을 구현 할 수는 없지만, 타임라인과 같이 전/후 페이지 조회는 할 수 있습니다.

내부적으로 cursor을 이용하기 때문에 query(queryInBackground)를 한번 한 후,  
next(nextInBackground), prev(prevInBackground)를 이용하여 다음 Array를 가져 올 수 있습니다.


## Search Users In Group
[]({'id':'search-users-in-group'})
BaasioQuery.queryWithGroup를 이용하여 Group에 속한 회원을 조회하는 쿼리 할 수 있습니다.

아래 예제는  `students` Group에 속한 회원을 조회하는 쿼리
```objc
BaasioQuery *query = [BaasioQuery queryWithGroup:@"students"];
[query queryInBackground:^(NSArray *array) {
                NSLog(@"array : %@", array.description);
            }
            failureBlock:^(NSError *error){
                NSLog(@"fail : %@", error.localizedDescription);
            }];
```


## Search Entity With Relationship
[]({'id':'search-entities-with-relationship'})

BaasioQuery.queryWithRelationship를 이용하여 연결 된 Entities를 쿼리 할 수 있습니다.

아래 예제는 blogEntity에서 아이디가 `fd0c96dc-8573-11e2-9f13-06fd000000c2`이고, `blogWithComment`라는 이름으로 연결된 Entity들을 조회하는 쿼리

```objc
BaasioQuery *query = [BaasioQuery queryWithRelationship:@"blogEntity"
                                               withUUID:@"fd0c96dc-8573-11e2-9f13-06fd000000c2"
                                           withRelation:@"blogWithComment"];

[query queryInBackground:^(NSArray *array){
                NSLog(@"array : %@", array.description);
            }
            failureBlock:^(NSError *error){
                NSLog(@"fail : %@", error.localizedDescription);
            }];
```




# Group
[]({'id':'group'})
Group 기능은 **Group** Collection을 통해 지원되며, 그룹을 만들어 회원을 그룹 지을 수 있습니다.


## Create Group
[]({'id':'group-create'})
**vip**라는 group 생성

#####동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
[group setObject:groupName forKey:@"vip"];
[group save:&error];
if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
[group setObject:groupName forKey:@"vip"];
[group saveInBackground:^(BaasioGroup *group){
               NSLog(@"group : %@", group.description);
           }
           failureBlock:^(NSError *error){
               NSLog(@"fail : %@", error.localizedDescription);
           }];
```


## Get Group
[]({'id':'group-get'})
query를 이용하여 Group정보를 얻을 수 있습니다.


## Update Group
[]({'id':'group-update'})
그룹 정보를 수정할 수 있습니다.

##### 동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc]init];
group.uuid = uuid;
[group setObject:@"Kwon oh-sang" forKey:@"master"];
[group setObject:@"special" forKey:@"nick"];
[group update:&error];

if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc]init];
group.uuid = uuid;
[group setObject:@"Kwon oh-sang" forKey:@"master"];
[group setObject:@"special" forKey:@"nick"];

[group updateInBackground:^(BaasioGroup *group){
                 NSLog(@"group : %@", group.description);
             }
             failureBlock:^(NSError *error){
                 NSLog(@"fail : %@", error.localizedDescription);
             }];
```


## Delete Group
[]({'id':'group-delete'})
group의 uuid로 group 삭제할 수 있습니다.

#####동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
group.uuid = uuid
[group delete:&error];

if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
group.uuid = uuid
[group deleteInBackground:^(BaasioGroup *group){
                 NSLog(@"group : %@", group.description);
             }
             failureBlock:^(NSError *error){
                 NSLog(@"fail : %@", error.localizedDescription);
             }];
```


## Add User To Group
[]({'id':'add-user'})
그룹에 회원을 추가합니다.

#####동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
[group setUserName:@"User Name or User UUID"];
[group setGroupName:@"Group Name"];

[group add:&error];
if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
[group setUserName:@"User Name or User UUID"];
[group setGroupName:@"Group Name"];

[group addInBackground:^(BaasioGroup *group){
              NSLog(@"group : %@", group.description);
          }
          failureBlock:^(NSError *error){
              NSLog(@"fail : %@", error.localizedDescription);
          }];
```


## Delete User To Group
[]({'id':'delete-user-to-group'})
그룹에 있는 회원을 삭제합니다.

#####동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
[group setUserName:@"User Name or User UUID"];
[group setGroupName:@"Group Name"];

[group remove:&error];
if (!error) {
    //성공
    NSLog(@"Success");
} else {
    //실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
BaasioGroup *group = [[BaasioGroup alloc] init];
[group setUserName:@"User Name or User UUID"];
[group setGroupName:@"Group Name"];

[group removeInBackground:^(BaasioGroup *group){
                NSLog(@"group : %@", group.description);
             }
             failureBlock:^(NSError *error){
                 NSLog(@"fail : %@", error.localizedDescription);
             }];
```




# File
[]({'id':'file'})
File 기능은 **file** Collection을 통해 지원되며, 파일들을 업/다운로드 및 수정/삭제를 할 수 있다.


## Upload File
[]({'id':'upload'})
```objc
NSData *data = [@"Baas.io 조쿰 좋음! 15/800" dataUsingEncoding:NSUTF8StringEncoding];

BaasioFile *file = [[BaasioFile alloc] init];
file.data = data;
file.filename = @"테스트.txt";
file.contentType = @"application/json";
[file setObject:@"cetauri" forKey:@"writer"];
[file setObject:@"/testFilder" forKey:@"dir"];

[file fileUploadInBackground:^(BaasioFile *file) {
                    NSLog(@"success : %@", file.uuid);
                }
                failureBlock:^(NSError *error) {
                    NSLog(@"error : %@", error.localizedDescription);
                }
               progressBlock:^(float progress) {
                    NSLog(@"progress : %f", progress);
               }];
```


## Download File
[]({'id':'download'})
```objc
NSString *uuid = @"......";

// 다운로드 위치
NSString *path = [NSString stringWithFormat:@"%@/1.txt", NSTemporaryDirectory()];

BaasioFile *file = [[BaasioFile alloc] init];
file.uuid = uuid;
[file fileDownloadInBackground:path
                  successBlock:^(NSString *downloadPath) {
                      NSLog(@"success : %@", downloadPath);
                  }
                  failureBlock:^(NSError *error) {
                      NSLog(@"error : %@", error.localizedDescription);
                  }
                 progressBlock:^(float progress){
                      NSLog(@"progress : %f", progress);
                  }];
```


## Update File (Blob)
[]({'id':'update-blob'})
수정하고자 하는 File Entity의 UUID를 기반으로 새로운 파일을 업로드할 수 있습니다.
```objc
NSString *uuid = @"......";

BaasioFile *file = [[BaasioFile alloc] init];
file.uuid = uuid;
file.data = [@"Updated Baas.io is great!" dataUsingEncoding:NSUTF8StringEncoding];
file.filename = @"A.txt";
[file setObject:@"Kwon oh sang" forKey:@"owener"];
[file fileUpdateInBackground:^(BaasioFile *entity){
            NSLog(@"success : %@", entity.description);
        }
        failureBlock:^(NSError *error) {
            NSLog(@"error : %@", error.localizedDescription);
        }
       progressBlock:^(float progress){
            NSLog(@"progress : %f", progress);
        }];
```


## Update File Entity
[]({'id':'update-entity'})
파일의 정보가 들어있는 Entity를 수정합니다.
```objc
NSString *uuid = @"......";

BaasioFile *file = [[BaasioFile alloc] init];
file.uuid = uuid;
[file setObject:@"권오상" forKey:@"realname"];
[file setObject:@"cetauri" forKey:@"nickname"];
[file updateInBackground:^(BaasioFile *entity){
				NSLog(@"success : %@, %@", entity.description, entity.filename);
        	}
        	failureBlock:^(NSError *error) {
            	NSLog(@"error : %@", error.localizedDescription);
            }];
```


## Get File Entity
[]({'id':'get-entity'})
File의 정보를 얻을 수 있습니다.
```objc
NSString *uuid = @"......";

BaasioFile *file = [[BaasioFile alloc] init];
file.uuid = uuid;
[file getInBackground:^(BaasioFile *file) {
             NSLog(@"success : %@", file.description);
         }
         failureBlock:^(NSError *error) {
             NSLog(@"error : %@", error.localizedDescription);
         }];
```


## Delete File
[]({'id':'file-delete'})
파일을 삭제합니다.
```objc
NSString *uuid = @"......";

BaasioFile *file = [[BaasioFile alloc] init];
file.uuid = uuid;
[file deleteInBackground:^(void) {
                NSLog(@"Delete success.");
            }
            failureBlock:^(NSError *error) {
                NSLog(@"error : %@", error.localizedDescription);
            }];
```




# Push
[]({'id':'push'})
Push 기능은 **devices** Collection을 통해 지원되며, bass.io 포털에서 인증서 정보를 설정한 후에 사용이 가능합니다.

baas.io Blog에 준비되어있는 [Push Notification구현하기](http://blog.baas.io/archives/782) 를 참고하세요!

iOS의 경우 APNS (Apple Push Notification Services)을 사용하여 각각의 단말까지 전송을 지원하며 예약발송, 개별 발송 및 tag 별 발송 (예: 남자만, 여자만 등등)이 가능합니다.

APNS 관련 정보는 다음 링크를 참조하여 주시고, 푸시서비스의 전반적인 상세 설명은 별도로 제공되는 `Push Notification 개발자 가이드`를 참고하여 주시기 바랍니다.

[APNS (Apple Push Notification Service) Guide](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html#//apple_ref/doc/uid/TP40008194-CH100-SW9)


## Device Register
[]({'id':'register'})
푸쉬를 사용할 시점에 아래 코드를 실행해줍니다.
로그인이 되어 있다면 등록 시점에 로그인 정보가 같이 전송 되기 때문에  로그인이 성공한 후에 아래 코드를 실행해주면 됩니다.

단 Push를 개인별로 아닌 단체 공지 형식으로만 사용하려면 아무데나 넣으면 됩니다.
(AppDelegate의 didFinishLaunchingWithOptions에 넣는걸 추천합니다.)

```objc
[BaasioPush registerForRemoteNotificationTypes:UIRemoteNotificationTypeBadge | UIRemoteNotificationTypeAlert | UIRemoteNotificationTypeSound];
```

위의 코드를 실행하면 AppDelegate의 didRegisterForRemoteNotificationsWithDeviceToken 메소드를 통해 deviceToken을 받을 수 있습니다.
didRegisterForRemoteNotificationsWithDeviceToken 메소드에 아래와 같이 작성하면 서버에 deviceToken을 등록 할 수 있습니다.

tag를 사용하면 tag별로 사용자에게 Push를 보낼 수 있는데,  tag를 안 쓸때는 nil을 주면 됩니다.

또한 이미 등록이 되어 있는 경우에는 skip합니다.

```objc
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
	// 테그를 이용하여 테그별로 사용자에게 Push를 보낼 수 있다.
    NSArray *tags = @[@"male", @"cetauri"];
    BaasioPush *push = [[BaasioPush alloc] init];
    [push didRegisterForRemoteNotifications:deviceToken
                                       tags:tags
                               successBlock:^(void) {
                                   NSLog(@"success");
                               }
                               failureBlock:^(NSError *error) {
                                   NSLog(@"fail : %@", error.localizedDescription);
                               }];
	}
```


## Device Unregister
[]({'id':'unregister'})
로그 아웃 시에 호출해주면 됩니다.
```objc
- (void)unregisterForRemoteNotifications:(void (^)(void))successBlock
                            failureBlock:(void (^)(NSError *error))failureBlock;

BaasioPush *push = [[BaasioPush alloc] init];
[push unregisterForRemoteNotifications:^(void) {
                              NSLog(@"success");
                          }
                          failureBlock:^(NSError *error) {
                              NSLog(@"fail : %@", error.localizedDescription);
                          }];
```


## 발송
[]({'id':'send'})
Push 발송은 **sendPushInBackground** 와 **sendPush** method에 `BaasioMessage` 객체를 넘기면 됩니다.

`BaasioMessage`를 이용하여 예약발송, 테그별 및 플랫폼별 또는 사용자에게 직접 Push를 보낼 수 있는 기능을 구현 할 수 있습니다.

또한 푸시를 보내려면 pushes라는 미리 정의된 Collection에 권한이 필요합니다. 권한 설정은 Rest API 또는 데이터 브라우저에서 할 수 있습니다.

#####동기식 코드
```objc
BaasioPush *push = [[BaasioPush alloc] init];
BaasioMessage *message = [[BaasioMessage alloc]init];

...

[push sendPush:message error:&error];

if (!error) {
	//성공
    NSLog(@"Success");
} else {
	//실패
    NSLog(@"Error: %@", error.localizedDescription);
}
```

#####비동기식 코드
```objc
BaasioPush *push = [[BaasioPush alloc] init];
BaasioMessage *message = [[BaasioMessage alloc]init];

...

[push sendPushInBackground:message
			  successBlock:^(void) {
                  NSLog(@"success.");
              }
              failureBlock:^(NSError *error) {
                  NSLog(@"fail : %@", error.localizedDescription);
              }];
```


## 예약 발송
[]({'id':'reservation'})
BaasioMessage.reserve에  NSDateComponents를 넘겨주면 그 시각에 맞추어 예약 발송이 됩니다.

아래 예제는 `2013/5/8`일에 User.uuid가 `f5df22f9-547e-11e2-b5a4-06ebb80000ba` 인 회원에게, `2`개의 badge표시가 된 push를 보내는 예제

```objc
BaasioPush *push = [[BaasioPush alloc] init];
BaasioMessage *message = [[BaasioMessage alloc]init];

NSDateComponents *reserve = [[NSDateComponents alloc]init];
reserve.year = 2013;
reserve.month = 5;
reserve.day = 8;
reserve.hour = 0;
reserve.minute = 0;

message.reserve = reserve;
message.alert = @"Push 메시지";
message.badge = 2;
message.sound = @"default";
message.to = [NSMutableArray arrayWithObject:@"f5df22f9-547e-11e2-b5a4-06ebb80000ba"];

[push sendPushInBackground:message
              successBlock:^(void) {
                  NSLog(@"success.");
              }
              failureBlock:^(NSError *error) {
                  NSLog(@"fail : %@", error.localizedDescription);
              }];
```


## 태그별 발송
[]({'id':'push-tag'})
BaasioMessage.to에 tag 이름을 입력하면 됩니다.

```objc
BaasioPush *push = [[BaasioPush alloc] init];
BaasioMessage *message = [[BaasioMessage alloc]init];

message.badge = 1;
message.to = [NSMutableArray arrayWithObject:@"man"];

[push sendPushInBackground:message
              successBlock:^(void) {
                  NSLog(@"success.");
              }
              failureBlock:^(NSError *error) {
                  NSLog(@"fail : %@", error.localizedDescription);
              }];
```


## 개별 발송
[]({'id':'individual'})
BaasioMessage.to에 사용자의 UUID를 입력하면 됩니다.
1번 발송에 50개 제한이 있으니 유의하기 바랍니다.

```objc
BaasioPush *push = [[BaasioPush alloc] init];
BaasioMessage *message = [[BaasioMessage alloc]init];
message.badge = 1;
message.to = @[@"f5df22f9-547e-11e2-b5a4-06ebb80000ba", @"a5df22f9-547e-11e2-b5a4-06ebb80000b1", ...];

[push sendPushInBackground:message
              successBlock:^(void) {
                  NSLog(@"success.");
              }
              failureBlock:^(NSError *error) {
                  NSLog(@"fail : %@", error.localizedDescription);
              }];
```


## Push On/Off
[]({'id':'onoff'})

##### Push Off
서버에 여전히 디바이스가 등록 되어 있지만, Push를 받지 않습니다.

```objc
BaasioPush *push = [[BaasioPush alloc] init];
[push pushOffInBackground:^(void) {
                 NSLog(@"success.");
             }
             failureBlock:^(NSError *error) {
                 NSLog(@"fail : %@", error.localizedDescription);
             }];
```

##### Push On
Push를 받을 수 있도록 활성화 합니다. 
```objc
BaasioPush *push = [[BaasioPush alloc] init];
[push pushOnInBackground:^(void) {
                NSLog(@"success.");
            }
            failureBlock:^(NSError *error) {
                NSLog(@"fail : %@", error.localizedDescription);
            }];
```


## Tag 수정
[]({'id':'update-tag'})
등록된 Tag를 수정합니다.

```objc
BaasioPush *push = [[BaasioPush alloc] init];
[push tagUpdateInBackground:@[@"NewTag"]
               successBlock:^{
                   NSLog(@"success.");
               }
               failureBlock:^(NSError *error) {
                   NSLog(@"fail : %@", error.localizedDescription);
               }];
```




# Help
[]({'id':'helpcenter'})
BaasioHelp 클래스를 이용하여 간편하게 고객센터 서비스를 구현할 수 있습니다.

또한 모바일에서 고객센터를 쉽게 구현하실 수 있도록 [고객센터 UI 라이브러리](https://github.com/baasio/baas.io-helpcenter-ios)를 제공하고 있습니다.

직접 UI를 구현하기 보다는 아래 링크에서 UI 템플릿을 받아 수정하기를 권합니다.

-----
**유의하기** 고객센터는 비동기 API만 제공됩니다.
> 고객선터는 비동기 API만 제공됩니다. 혹시 동기식 API가 필요하다고 생각되면, 먼저 진짜 필요한지 아키텍쳐에 대해서 고민해보기 바랍니다.

-----

## 도움말(FAQ) 목록
[]({'id':'helpcenter-get-faq'})

```objc
BaasioHelp *helpdesk = [[BaasioHelp alloc]init];
[helpdesk getHelpsInBackground:^(NSArray *array) {
                         NSLog(@"array : %@", array.description);
                     }
                     failureBlock:^(NSError *error) {
                         NSLog(@"fail : %@", error.localizedDescription);
                     }];
```


## 도움말(FAQ) 검색
[]({'id':'search-faq'})

```objc
NSString *query = @"검색";
BaasioHelp *helpdesk = [[BaasioHelp alloc]init];
[helpdesk searchHelpsInBackground:query
                     successBlock:^(NSArray *array) {
                         NSLog(@"array : %@", array.description);
                     }
                     failureBlock:^(NSError *error) {
                        NSLog(@"fail : %@", error.localizedDescription);
                     }];
```


## 도움말(FAQ) 상세내용 보기
[]({'id':'get-faq-content'})

```objc
NSString *uuid = @"cf334051-2dee-47ef-b787-2d7f5a889db0"; // help entity uuid

BaasioHelp *helpdesk = [[BaasioHelp alloc]init];
[helpdesk getHelpDetailInBackground:uuid
					   successBlock:^(NSDictionary *dictionary) {
                           NSLog(@"dictionary : %@", dictionary);
                       }
                       failureBlock:^(NSError *error) {
                           NSLog(@"fail : %@", error.localizedDescription);
                       }];
```


## 문의하기
[]({'id':'helpcenter-create'})

```objc
BaasioHelp *helpdesk = [[BaasioHelp alloc]init];

[helpdesk sendQuestionInBackground:email
						   content:content
                      successBlock:^(void) {
                          NSLog(@"success.");
                      }
                      failureBlock:^(NSError *error) {
                          NSLog(@"error : %@", error.localizedDescription);
                      }];
```




#etc.
[]({'id':'etc'})


## Debug 모드 (개발용)
[]({'id':'debug'})
didFinishLaunchingWithOptions(권장) 에 아래와 같이 설정하면 디버그 모드로 동작합니다.

기본은 릴리즈 모드입니다. 릴리즈 시 끄는 것을 잊지 마세요!

```objc
[[Baasio sharedInstance] isDebugMode:YES];
```

디버그 모드는 개발의 편의를 위해 만들어진 것인데, 특징은 아래와 같습니다.

- API호출 형태 및 상세한 로그가 찍힙니다.
- 최신 SDK가 있다면 알려줍니다.

SDK에서 최신 기능이 추가되거나 버그에 대한  hotfix 등등으로 인하여 버젼이 올라갔을 경우, 

디버그 모드에서는 아래와 같은 메세지를 보여줍니다.  (눈에 보이기 쉽게 50줄이 표시 됩니다.)

```objc
★☆★☆ The new Baas.io SDK Release. see this link https://github.com/baasio/baas.io-sdk-ios (current : ${설치 된 버젼}, new : ${최신 버젼}) ★☆★☆"
```


## Error
[]({'id':'error'})

-----
**유의하기** Error handling에 대한 고민은 계속되고 있습니다.

> Error handling에 대해서는 계속 고민중이지만, 좋은 아이디어 있으면 Pull Requests를 부탁드립니다. 우리는 항상 열려있습니다.

-----
Error code와 localizedDescription를 통해서 에러를 확인 할 수 있습니다.

```objc
failureBlock:^(NSError *error) {
	NSLog(@"description : %@", error.localizedDescription);
    NSLog(@"code : %i", error.code);
}
```


## Rest Network API
[]({'id':'restapi'})
SimpleNetworkManager 클래스를 이용하면 추가적인 네트워크 라이브러리 없이 간편하게 외부 리소스 접근이 가능합니다.

또한 SDK에서 제공하지 못하는 Rest API도 이 클래스를 이용하면 확장하여 사용이 가능합니다.

-----
**알고가기** AFNetworking을 기본 네트워크 라이브러리로 사용합니다.
> iOS SDK는 [AFNetworking](https://github.com/AFNetworking/AFNetworking)를 기본 네트워크 라이브러리로 사용합니다. 그렇기 때문에 한 프로젝트에 AFNetworking와 baas.io iOS SDK를 동시에 사용하면 "duplicate symbol" 에러가 발생합니다.그 경우, AFNetworking에 관련된 *.m파일을 지우면 해결 할 수 있습니다.

-----

#####동기식 코드
```objc
NSString *path = @"https://api.usergrid.com/status";
NSDictionary *params = @{@"key" : @"value2"};

NSError *e;
NSString *response = [[SimpleNetworkManager sharedInstance]connectWithHTTPSync:path
                                                                    withMethod:@"GET"
                                                                        params:params
                                                                  headerFields:nil
                                                                         error:&e];

NSLog(@"error : %@", e);
NSLog(@"response : %@", response);
```

#####비동기식 코드
```objc
NSString *path = @"https://api.usergrid.com/status";
NSDictionary *params = @{@"key" : @"value2"};

[[SimpleNetworkManager sharedInstance]connectWithHTTP:path
                                           withMethod:@"GET"
                                               params:params
                                         headerFields:nil
                                              success:^(NSString *response) {
                                                  NSLog(@"success : %@", response);
                                              }
                                              failure:^(NSError *error) {
                                                  NSLog(@"error : %@", error.localizedDescription);
                                              }];
```

##### Header 정보 추가
만일 사이트에서 header에 Authorization라는 키로 인증 값을 넘겨야 한다면,  아래와 같이 하면 됩니다.

그 외에도 content-type과 같은 값을 아래와 같이 headerFields형태의 NSDictionary를 만들어 넘기면 됩니다.

```objc
NSString *path = @"https://api.usergrid.com/status";

NSDictionary *headerFields = @{@"Authorization" : @"인증토큰입력"};
[[SimpleNetworkManager sharedInstance]connectWithHTTP:path
                                           withMethod:@"GET"
                                               params:nil
                                         headerFields:headerFields
                                              success:^(NSString *response) {
                                                  NSLog(@"success : %@", response);
                                              }
                                              failure:^(NSError *error) {
                                                  NSLog(@"error : %@", error.localizedDescription);
                                              }];
```

##### 기본 baas.io의 인증 정보
여러분이 인증 정보(로그인 후)를 가지고 이 API를 사용한다면, 내부적으로 인증 정보를 실어서 보낼 것입니다.

즉 추가로 인증에 대한 작업을 하지 않아도 됩니다.


## UIImageView 지원
[]({'id':'imageview'})
AFNetworking에서는 UIImageView 클래스에 외부의 이미지를 비동기로 로딩하는 기능이 있습니다.

`UIImageView+AFNetworking.h`라는 이름의 category로 되어 있는데, baas.io SDK에서도 이것을 이용하여 구현하였습니다.

다음과 같이 import만 하면 UIImageView 클래스가 확장되어 아래의 메소드들을 쓸수 있습니다.

```objc
#import "UIImageView+Baasio.h"

UITableViewCell *listCell nil;
NSURL url = [NSURL URLWithString:@"http://asia.olympus-imaging.com/products/dslr/e520/sample/images/sample_03.jpg"];

//중간 생략

// UIImageView에는 원래 imageWithURL 메소드가 없다.
[listCell.imageView imageWithURL:url
				placeholderImage:[UIImage imageNamed:@"placeholder.png"]];
```

BaasioFile의 경우 아래와 같이 손 쉽게 사용이 가능하다.
```objc
UITableViewCell *listCell nil;
BaasioFile *file = nil;

//중간 생략

// UIImageView에는 원래 imageWithBaasioFile 메소드가 없다.
[listCell.imageView imageWithBaasioFile:file
					   placeholderImage:[UIImage imageNamed:@"placeholder.png"]];
```