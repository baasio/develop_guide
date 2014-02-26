[baas.io](https://baas.io)에서는 앱 개발자 분들이 많이 사용하시는 사용자 관리, 파일 업/다운로드, Push 메시지 송/수신, 고객센터 등의 기능을 손쉽게 사용할 수 있는 클라우드 기반 서비스를 제공합니다.

본 가이드는 baas.io Android SDK의 구조와 사용방법, 그리고 SDK를 이용하여 baas.io의 서비스들을 이용하는 방법을 가이드 합니다.

- <b>[SDK 변경이력 및 다운로드](https://github.com/baasio/baas.io-sdk-android/wiki/Version-History)</b>

### ※ 개발하기 전에 다시 한번 체크하기
>- baas.io에 가입이 필요합니다. [baas.io 가입 페이지](https://baas.io/signUp.html)에서 가입하실 수 있습니다.
>- Android ADT 및 SDK를 항상 최신으로 유지하는 것을 권장합니다. 개발툴은 ["Get the Android SDK"](http://developer.android.com/sdk/index.html)를 확인하시기 바랍니다.
>- Text file encoding 방법이 UTF-8 기준으로 개발되어 있습니다. 사용하시는 개발툴의 Text file encoding 설정이 UTF-8로 되어 있는지 확인합니다.
>- 처음 개발하실 때에는 [baas.io Startup Project](https://github.com/baasio/baas.io-startup-android/archive/master.zip)를 다운받아 사용하실 것을 권장합니다.

<br>

## SDK API 구조

Android 앱을 개발할 때, 서버 통신이 필요한 경우 UI Thread에서 처리하지 않고 비동기식으로 처리하는 것을 권장하고 있습니다.

baas.io Android SDK는 아래와 같이 동기식(Sync), 비동기식(Async) 두 가지 방식의 API를 모두 제공하고 있으며, 비슷한 구조로 구현되어 있습니다.

메소드의 이름 규칙은, 동기식(Sync)은 동사, 비동기식(Async)은 동사(Verb)+"InBackground"의 형태로 구현되어 있습니다.


	//동기식
	BaasioEntity entity = new BaasioEntity("friend");
	BaasioEntity savedEntity = entity.save(
			BaasioEntity.class		//결과로 받을 클래스 구조
		);	

	//비동기식
	BaasioEntity entity = new BaasioEntity("friend");
	entity.saveInBackground(
		new BaasioCallback<BaasioEntity> {	//결과를 받을 Callback
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


<br>

## User 서비스

생성하신 애플리케이션에서 회원 관리를 가입/로그인/탈퇴를 통하여 할 수 있습니다. 이런 기능은 BaasioUser 클래스가 담당하고 있습니다.

참고로, baas.io에 저장된 데이터는 로그인 상태에 따라 접근을 제한할 수 있습니다. 이와 관련된 자세한 설명은 [역할과 권한](https://baas.io/docs/ko/devguide/roles.html)에서 확인하실 수 있습니다.

### BaasioUser 클래스

BaasioUser클래스는 "users" collection으로 관리되며, "users" collection으로 "user" entity를 저장/삭제하여 사용자를 가입/탈퇴를 할 수 있습니다.

회원을 가입하는 방법은 username(email)을 통한 가입과 facebook을 통한 가입을 지원합니다.

#### 가입-username(email)

가입을 하기 위해서는 ID(username)와 비밀번호(password)가 필요합니다. 추가로 이름(name), 이메일(email) 정보를 넣을 수 있습니다.

	BaasioUser.signUpInBackground(
			username				// ID(username)
			, name					// 이름
			, email					// 이메일
			, password				// 비밀번호
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

#### 가입-Facebook

Facebook으로 가입을 하기 위해서는 먼저 Facebook의 Access token이 필요합니다. 

자세한 내용은 [Facebook 가이드](https://github.com/baasio/baas.io-sdk-android/wiki/Facebook-Guide)를 참고 바랍니다.

이미 구현되어 있는 [Sample Project](https://github.com/baasio/baas.io-sample-android)를 참고하셔도 좋습니다.

- <b>[Sample Project 바로 다운로드하기](https://github.com/baasio/baas.io-sample-android/archive/master.zip)</b>

```java
BaasioUser.signUpViaFacebookInBackground(mContext, fb_access_token, new BaasioSignInCallback() {
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



#### 회원정보 수정

회원정보에 추가 정보를 저장할 수 있습니다.

	BaasioUser user = Baas.io().getSignedInUser();
	user.setProperty("gender","female");	//추가 정보
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

#### 로그인-username(email)

로그인을 하기 위해서는 username과 password가 필요합니다.

	BaasioUser.signInInBackground(
			mContext
			, username
			, password
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

#### 로그인-Facebook

Facebook Access Token을 이용하여 로그인합니다.

	BaasioUser.signInViaFacebookInBackground(
			mContext
			, fb_access_token	//Facebook access token
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

<a name="unsubscribe"></a>
#### 탈퇴

탈퇴를 하면 애플리케이션에서 해당 회원이 삭제됩니다.

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

#### 비밀번호 변경

현재 로그인되어 있는 사용자의 비밀번호를 변경합니다.
기존 비밀번호와 새로운 비밀번호를 이용하여 비밀번호를 변경할 수 있습니다.

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

#### 비밀번호 초기화

비밀번호를 초기화 하는 방법은 두 가지 방법으로 제공합니다. 현재, 두 방법의 기능상의 차이는 없습니다. 다만, Url을 얻어 Browser로 이동하여 초기화하는 방법은, 초기화를 위한 웹페이지가 꾸며지지 않아 API를 직접 호출하여 초기화 하는 방법을 추천합니다.

##### Url을 얻어 Browser를 통해 초기화

Email주소 또는 username, user의 uuid를 이용하여 비밀번호를 초기화하기 위한 이메일을 발송하기 위한 url주소를 만듭니다.

아래의 예제와 같이, 비밀번호를 초기화하기 위한 url을 브라우저로 열어 초기화를 진행합니다. 

	Uri uri = BaasioUser.getResetPasswordUrl(email);

	Intent intent = new Intent(Intent.ACTION_VIEW, uri);
	startActivity(intent);

##### API를 직접 호출하여 초기화(v0.8.3 이후 지원)
	
API를 직접 호출하여 이메일을 바로 발송할 수도 있습니다.

아래 예제와 같이 호출하여 비밀번호를 초기화하기 위한 이메일을 발송합니다.

	BaasioUser.resetPasswordInBackground(email, new BaasioCallback<Boolean>() {

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

<b>※ AccessToken 과 ACTION_UNAUTHORIZED</b>
>- AccessToken은 로그인할 때 발급되며, 발급된 AccessToken으로 회원을 인증합니다. 

>- baas.io Android SDK는 이 AccessToken을 내부에서 알아서 관리해주어 개발하실 때 특별히 신경쓰지 않으셔도 됩니다. 다만, AccessToken은 24시간이 지나면 만료되어 재발급 받아야 합니다.

>- AccessToken이 만료된 상태에서 API를 호출하면, BaasioException이 발생합니다.
발생한 exception의 getStatusCode로 401이 내려옵니다. 또한, "com.kth.baasio.ACTION_UNAUTHORIZED"란 Action을 Broadcasting 합니다. 이를 이용하여 로그인 화면으로 유도할 수 있습니다.

>- 인증에 대한 자세한 내용은 개발가이드의 [인증 시스템](https://baas.io/docs/ko/devguide/authentication.html)를 참고하시기 바랍니다.

<br>

## Group 서비스

회원들의 그룹을 만들 수 있습니다. 그룹을 생성/삭제/수정할 수 있으며, User를 그룹에 추가 또는 삭제 할 수 있습니다.

### BaasioGroup 클래스

BaasioGroup클래스는 "groups" collection으로 관리되며, "groups" collection으로 "group" entity를 추가/삭제하여 그룹을 생성/삭제하거나, 사용자를 그룹으로 추가/제외 할 수 있습니다.

#### 그룹 만들기(save)

이름을 정하여 그룹을 생성합니다.

	BaasioGroup group = new BaasioGroup();
	group.setTitle("그룹 표시 내용");			// 그룹 표시내용
    group.setPath("group1");				// 그룹 Unique한 Path 이름
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

#### 그룹 가져오기(get)

그룹 정보를 가져옵니다.

	BaasioGroup entity = new BaasioGroup();
	entity.setUuid(uuid);					// Group의 uuid
	entity.getInBackground(
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

#### 그룹 수정하기(update)

그룹 정보를 수정합니다.

	BaasioGroup entity = new BaasioGroup();
	entity.setUuid(uuid);					// Group의 uuid
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

#### 그룹 삭제하기(delete)

그룹을 삭제합니다.

	BaasioGroup entity = new BaasioGroup();
	entity.setUuid(uuid);					// Group의 uuid
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

#### 그룹에 회원 추가하기

그룹에 회원을 추가합니다.

	BaasioUser user = new BaasioUser();
	user.setUuid(uuid);			// 추가하려는 회원의 uuid	

	BaasioGroup entity = new BaasioGroup();
	entity.setUuid(uuid);					// Group의 uuid
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

#### 그룹에 회원 제외하기

그룹에 회원을 제외합니다.

	BaasioUser user = new BaasioUser();
	user.setUuid(uuid);			// 제외하려는 회원의 uuid	

	BaasioGroup entity = new BaasioGroup();
	entity.setUuid(uuid);					// Group의 uuid
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
<br>


## Data 서비스

baas.io는 데이터를 저장하고 조회하는 기능을 제공합니다. 커스텀 Entity를 생성하기 위해서는 BaasioEntity 클래스를 이용합니다.

데이터 서비스에 대한 자세한 내용은 개발가이드의 [데이터모델](https://baas.io/docs/ko/devguide/data-model.html)을 참고하시기 바랍니다.

### BaasioEntity 클래스

모든 Entity는 Type을 가지고 있습니다. Type의 이름에 따라 Collection의 이름이 결정됩니다. 예를들어, "friend"라는 Type을 가진 Entity의 Collection이름은 "friends"가 됩니다.

따라서, 커스텀 Entity를 생성하기 위해서는 Type이 꼭 정해져 있으야 합니다. 

#### Entity 저장(save)

Entity를 저장(생성)합니다.

	BaasioEntity entity = new BaasioEntity("friend");		// "friend" entity
	entity.setProperty("custom_key1", "custom_string_value");	// String
	entity.setProperty("custom_key2", 1);						// Integer
	entity.setProperty("custom_key3", Double.valueOf(2));		// Double
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

#### Entity 한꺼번에 저장(save)

Entity를 한꺼번에 저장(생성)합니다.

	BaasioEntity entity1 = new BaasioEntity("bulk");
	entity1.setProperty("test","test1");

	BaasioEntity entity2 = new BaasioEntity("bulk");
	entity2.setProperty("test","test2");

	List<BaasioEntity> entities = new ArrayList<BaasioEntity>();
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

#### Entity 가져오기(get)

Entity를 얻어옵니다.

	BaasioEntity entity = new BaasioEntity("friend");	// "friend" entity
	entity.setUuid(uuid);								// Entity의 uuid
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


#### Entity 수정(update)

Entity를 수정합니다.

	BaasioEntity entity = new BaasioEntity("friend");	// "friend" entity
	entity.setUuid(uuid);								// Entity의 uuid
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

#### Entity 삭제(delete)

Entity를 삭제합니다.

	BaasioEntity entity = new BaasioEntity("friend");	// "friend" entity
	entity.setUuid(uuid);								// Entity의 uuid
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

### Entity 관계(Relationship)설정

Entity간에는 관계가 있을 수 있습니다. 예를 들어, A라는 게시판글은 여러개의 댓글을 가지고 있을 수 있습니다. 이런 관계를 만들어 줄 수 있습니다.


#### 관계 연결하기(connect)

먼저 연결하려는 Entity를 생성해야합니다. 생성된 Entity를 이미 생성된 Entity에 연결하는 과정입니다. writePost()를 호출하여 게시판 글이 작성된 후, writeComment()를 호출하면 작성된 게시판 글에 댓글이 작성되게 됩니다.

	class BoardActivity extends Activity {
		BaasioEntity mPost;
	
		// 게시판 글 작성
		private void writePost() {
			BaasioEntity entity = new BaasioEntity("post");
		    entity.setProperty("title", "안녕하세요!");							// 게시판 제목
		    entity.setProperty("content", "baas.io를 이용해 주셔서 감사합니다.");	// 게시판 본글
		
		    entity.saveInBackground(
				new BaasioCallback<BaasioEntity>() {
		
		        	@Override
			        public void onException(BaasioException e) {
			            Toast.makeText(getActivity(), "saveInBackground =>" + e.toString(),
			                    Toast.LENGTH_LONG).show();
			        }
			
			        @Override
			        public void onResponse(BaasioEntity response) {
			            if (response != null) {
			                mPost = response;
			            }
			        }
		    });
		}

		// 댓글 작성
		private void writeComment() {
			BaasioEntity entity = new BaasioEntity("comment");
		    entity.setProperty("content", "첫 댓글남깁니다.");		// 게시판 댓글 내용
		
		    entity.saveInBackground(
					new BaasioCallback<BaasioEntity>() {
			
			        	@Override
				        public void onException(BaasioException e) {
				            // 실패
				        }
				
				        @Override
				        public void onResponse(BaasioEntity response) {
							// 댓글 생성 성공 및 댓글을 본글과 연결
				            mPost.connectInBackground(			// 본글(mPost) Entity와 댓글 Entity를 연결
									"write_comment"			// 관계 이름
									, response					// 댓글 Entity
									, BaasioEntity.class		// 댓글 Entity의 Class
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
				        }
		    });
		}
	}

#### 관계 연결 해제하기(disconnect)

연결된 관계를 해제합니다.(v0.8.1 부터 지원)

	mPost.disconnectInBackground(		// 본글 Entity와 댓글 Entity의 연결 해제
			"write_comment"			// 관계 이름
			, comment				// 댓글 Entity
			, BaasioEntity.class	// 댓글 Entity의 Class
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


<br>


## 데이터 질의(Query)

baas.io로 저장된 Entity를 질의하여 검색할 수 있습니다. BaasioQuery를 통하여 모든 Collection의 Entity를 검색할 수 있습니다. 

### BaasioQuery

baas.io는 BaasioQuery클래스를 이용하여 세 가지 질의 방법을 지원합니다.

Collection의 Entity를 검색하기 위한 질의(Query)를 하거나, Group의 User Entity를 검색하기 위한 질의를 할 수 있으며, 마지막으로 어떤 Entity와 연결(connect)되어 Relationship을 가지고 있는 Entity를 검색하기 위한 질의를 할 수 있습니다.

또한, 다양한 검색을 지원하기 위해 직접 질의문(Raw query string)을 입력하여 요청할 수 있습니다. 

질의문 작성에 대한 자세한 설명은 개발가이드의 [Query](https://baas.io/docs/ko/devguide/query.html)를 참고하시기 바랍니다.
	
	
#### Collection의 Entity 질의(Query)하기

	BaasioQuery query = new BaasioQuery();
    query.setType(ENTITY_TYPE);					// 질의하여 검색할 Entity type
    query.setOrderBy(
		BaasioBaseEntity.PROPERTY_MODIFIED		// 정렬 기준
		, ORDER_BY.DESCENDING);					// 정렬 순서
	query.setLimit(10);							// 한번에 받을 갯수 설정
	query.queryInBackground(new BaasioQueryCallback() {	// 질의 요청

        @Override
        public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
			// 성공
		}

		@Override
        public void onException(BaasioException e) {
			// 실패
		}
	});

#### Group의 User Entity 질의(Query)하기

Group에 속한 User를 검색할 수 있습니다. BaasioGroup 객체는 Group entity를 구분짓는 Path property가 꼭 정의되어 있어야합니다.

	BaasioGroup group = new BaasioGroup();
	group.setPath("friend");

	BaasioQuery query = new BaasioQuery();
    query.setGroup(group);					// 검색하려는 그룹
    query.setOrderBy(
		BaasioUser.PROPERTY_USERNAME		// 정렬 기준
		, ORDER_BY.ASCENDING);				// 정렬 방법
	query.setLimit(10);						// 한번에 받을 갯수 설정
	query.queryInBackground(new BaasioQueryCallback() {

        @Override
        public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
			// 성공
		}

		@Override
        public void onException(BaasioException e) {
			// 실패
		}
	});

#### 연결(connect)된 Entity 질의(Query)하기

어떤 Entity가 다른 Entity와 어떤 관계(Relationship)에 의해 연결(connect)되어 있을 경우, 연결된 Entity를 검색할 수 있습니다. 예를들어 A라는 게시판에 여러개의 댓글이 달려 있을 경우, A라는 게시판의 댓글만 검색할 수 있습니다.

 	//댓글 검색
	BaasioQuery query = new BaasioQuery();
	query.setRelation(
			mPost				// 게시판 글
			, "write_comment");	// 관계 이름

	query.queryInBackground(new BaasioQueryCallback() {

        @Override
        public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
			// 성공
		}

		@Override
        public void onException(BaasioException e) {
			// 실패
		}
	});

#### 다음데이터, 이전데이터 질의(Query)하기

질의(Query)한 결과에 따라 다음 또는 이전 데이터가 있을 경우 next(), prev()를 호출하여 쉽게 질의 결과를 얻을 수 있습니다. 

주의할 점은 next(), prev()를 사용하기 위해서는 먼저 query()를 호출해야 합니다.

아래 예제에서 BaasioQuery mQuery가 클래스의 전역으로 선언되어 있음을 주의하시기 바랍니다.

즉, onResponse()로 BaasioQuery가 다시 전달되고 mQuery를 이용하여 nextInBackground(), prevInBackground()를 호출하고 있습니다.

	class MainActivity extends Activity {
		private BaasioQuery mQuery;		//Query 객체 선언
	
		...
	
		// 최초 조회(Query)하기
		void getEntities() {
			mQuery = new BaasioQuery();
	    	mQuery.setType(ENTITY_TYPE);					// 질의하여 검색할 Entity type
		    mQuery.setOrderBy(
				BaasioBaseEntity.PROPERTY_MODIFIED			// 정렬 기준
				, ORDER_BY.DESCENDING);						// 정렬 순서
			mQuery.setLimit(10);							// 한번에 받을 갯수 설정
			mQuery.queryInBackground(new BaasioQueryCallback() {	// 질의 요청
		
		        @Override
		        public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
					// 성공
					mQuery = query;							// 결과로 들어온 Query 객체로 교체
				}
		
				@Override
		        public void onException(BaasioException e) {
					// 실패
				}
			});
		}
	 	
		// 다음 Entity 조회(Query)하기
		void getNext() {
			mQuery.nextInBackground(new BaasioQueryCallback() {	// 질의 요청
	
	       	 	@Override
		        public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
					// 성공
					mQuery = query;							// 결과로 들어온 Query 객체로 교체
				}
		
				@Override
		        public void onException(BaasioException e) {
					// 실패
				}
			});
		}
		
		void getPrev() {
			mQuery.prevInBackground(new BaasioQueryCallback() {	// 질의 요청
			
			        @Override
			        public void onResponse(List<BaasioBaseEntity> entities, List<Object> list, BaasioQuery query, long timestamp) {
						// 성공
						mQuery = query;							// 결과로 들어온 Query 객체로 교체
					}
			
					@Override
			        public void onException(BaasioException e) {
						// 실패
					}
				});
	}


<br>


## File 서비스

baas.io의 파일 서비스는 BaasioFile 클래스로 이용하실 수 있습니다.

### BaasioFile 클래스

BaasioFile을 이용하여 파일을 업로드하거나 다운로드 할 수 있습니다. 업로드/다운로드 진행상황은 Callback의 onProgress를 통하여 전달됩니다.

또한, 진행중인 업로드/다운로드를 취소할 수 있습니다.

#### 파일 정보 생성 및 업로드

파일 정보와 파일을 업로드합니다.

아래의 예제에서 srcFilePath는 실제 파일의 전체 경로이며, 해당 파일이 없으며 실패됩니다. filename은 서버에 저장될 파일 이름으로 설정하지 않아도 되며, 설정하지 않으면 실제 파일의 파일 이름으로 업로드됩니다.

예를 들어, 아래의 코드에서는 실제 파일은 "/mnt/sdcard/test.txt"위치의 파일이 업로드 되지만, 이름은 "test2.txt"로 업로드될 것입니다.

	String srcFilePath = "/mnt/sdcard/test.txt";
	String filename = "test2.txt";

	BaasioFile uploadFile = new BaasioFile();
    uploadFile.setProperty("memo", "안녕하세요. baas.io입니다.");	// 파일 추가 정보1
    uploadFile.setProperty("integer", 1);						// 파일 추가 정보2
	uploadFile.setProperty("long", Long.valueOf("1"));			// 파일 추가 정보3

    BaasioUploadAsyncTask mUploadFileAsyncTask = uploadFile.fileUploadInBackground(
			srcFilePath				// 업로드하려는 파일 경로
			, filename				// 설정하려는 파일 이름
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

#### 파일 다운로드

업로드된 파일을 다운로드 합니다. 다운로드 경로를 폴더, 즉 "/"로 끝나도록 입력하면, BaasioFile에 설정된 filename으로 다운로드합니다. 파일이름으로 입력하면 입력한 파일 이름으로 다운로드합니다.

예를 들어, 아래의 소스코드와 같이, localPath가 "/mnt/sdcard/baasio/test.txt"라고 되어 있으면, 해당 경로의 "test.txt"라는 이름으로 다운로드 되고, localPath가 "/mnt/sdcard/baasio/"라고 되어 있으면, BaasioFile의 filename으로 설정되어 있는 파일 이름으로 다운로드 됩니다. 

filename은 업로드시에 setFilename()으로 설정할 수 있으며, 특별히 설정하지 않으면 업로드 하려는 파일의 이름으로 설정됩니다. 

아래는 localPath에 파일이름을 포함하여 전체 경로가 들어있을 경우입니다.

	String localPath = "/mnt/sdcard/baasio/test.txt";

	BaasioFile downloadFile = new BaasioFile();
	downloadFile.setUuid(uuid);
	BaasioDownloadAsyncTask mDownloadFileAsyncTask = downloadFile.fileDownloadInBackground(
			localPath		// 다운로드 경로
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
            
아래는 localPath에 파일이름을 포함하지 않은 폴더의 경로가 있을 경우입니다.

	String localPath = "/mnt/sdcard/baasio/";

	BaasioFile downloadFile = new BaasioFile();
	downloadFile.setUuid(uuid);
	downloadFile.setFilename("test.txt");
	BaasioDownloadAsyncTask mDownloadFileAsyncTask = downloadFile.fileDownloadInBackground(
			localPath		// 다운로드 경로
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
            
#### 파일 업/다운로드 취소

파일을 업로드/다운로드하던 중에 취소를 할 수 있습니다. 취소를 하기 위해서는 업로드/다운로드시에 Return되는 Task를 이용합니다.

	//업로드 취소
	mUploadFileAsyncTask.cancel(true);

	//다운로드 취소
	mDownloadFileAsyncTask.cancel(true);


#### 파일 정보 생성

파일은 업로드하지 않고 정보만 저장합니다. 여기서 주의하실 점은, 실제 파일을 업로드하지 않더라도, filename을 setFilename()을 통해 설정해 주어야 합니다.

	BaasioFile uploadFile = new BaasioFile();
	uploadFile.setFilename("Test.txt");		// 파일을 업로드하지 않더라도 Filename은 필수로 넣어줘야함(v0.8.1)
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


#### 파일 정보 가져오기

파일 정보를 가져옵니다.

	BaasioFile uploadFile = new BaasioFile();
    uploadFile.setUuid(uuid);			// 가져오려는 File entity의 uuid

	uploadFile.getInBackground(
			new BaasioCallback<BaasioEntity>() {
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

#### 파일 정보 수정

파일 정보를 수정합니다.

	BaasioFile uploadFile = new BaasioFile();
    uploadFile.setUuid(uuid);					// 수정하려는 File entity의 uuid
	uploadFile.setProperty("memo","수정합니다.");	// 수정하려는 정보

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

#### 파일 정보 수정 및 업로드

파일 정보와 파일 내용을 동시에 수정합니다.

아래의 예제에서 srcFilePath는 실제 파일의 전체 경로이며, 해당 파일이 없으며 실패됩니다. filename은 서버에 저장될 파일 이름으로 설정하지 않아도 되며, 설정하지 않으면 실제 파일의 파일 이름으로 업로드됩니다.

예를 들어, 아래의 코드에서는 실제 파일은 "/mnt/sdcard/test.txt"위치의 파일이 업로드 되지만, 이름은 "test2.txt"로 업로드될 것입니다.

	String srcFilePath = "/mnt/sdcard/test.txt";
	String filename = "test2.txt";

	BaasioFile updateFile = new BaasioFile();
    updateFile.setUuid(uuid);						// 수정하려는 File entity의 uuid
	updateFile.setProperty("memo","수정합니다.");		// 수정하려는 정보

	BaasioUploadAsyncTask mUploadFileAsyncTask = updateFile.fileUpdateInBackground(
			srcFilePath				// 수정하려는 파일 전체 경로
			, filename				// 설정하려는 파일 이름
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

#### 파일 삭제

파일을 삭제합니다. 파일 정보 뿐만 아니라, 파일도 삭제됩니다.

	BaasioFile deleteFile = new BaasioFile();
    deleteFile.setUuid(uuid);						// 삭제하려는 File entity의 uuid
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


<br>


## Push 서비스

baas.io의 Push 서비스를 이용하기 위해서는 setGcmEnabled()를 이용하여 활성화를 시켜야 이용하실 수 있습니다. 

다만, Push를 이용하기 위해서는 GCM관련 모듈을 추가 구현해야합니다. [Startup Project](https://github.com/baasio/baas.io-startup-android)에는 기본적인 GCM(Google Cloud Messaging)관련 모듈이 최적화되어 적용되어 있으니, [Startup Project](https://github.com/baasio/baas.io-startup-android)를 참고하여 개발하실 것을 권장합니다.

- <b>[Startup Project 다운로드](https://github.com/baasio/baas.io-startup-android/archive/master.zip)</b>

관련 자세한 내용은 Getting Started의 [Push 기능 활성화](https://github.com/baasio/baas.io-sdk-android/wiki/Getting-Started#step-3-push-%EA%B8%B0%EB%8A%A5-%ED%99%9C%EC%84%B1%ED%99%94)를 참고 바랍니다.

기타 GCM 관련 자세한 사항은 [Google Cloud Messaging for Android](http://developer.android.com/google/gcm/index.html)를 참고하시기 바랍니다. 

### BaasioPush

BaasioPush 클래스는, 단말을 등록/해제/갱신 시켜주기 위한 기능 및 메시지를 전송하는 기능을 제공합니다. 

이 함수의 등록/해제/갱신 함수를 이용하기 위해서는 GCM에 대한 깊은 이해가 필요합니다. 

[Google Cloud Messaging for Android](http://developer.android.com/google/gcm/index.html)를 확인하셔서 BaasioPush 클래스를 이용하여 직접 구현하시는 것도 좋지만, 가급적 [Push 기능 활성화](https://github.com/baasio/baas.io-sdk-android/wiki/Getting-Started#step-3-push-%EA%B8%B0%EB%8A%A5-%ED%99%9C%EC%84%B1%ED%99%94)를 확인하시어 구현하시거나, [Startup Project](https://github.com/baasio/baas.io-startup-android)의 검증된 방법으로 하시길 권장합니다. 

#### 단말 등록하기

단말을 baas.io로 등록 합니다. 등록하는 방법은 Tag정보를 포함하여 등록하는 방법과 그냥 등록하는 방법, 두 가지가 있습니다. 

각 Tag는 36자까지 길이를 허용합니다. 

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
			, tags			// 태그 정보
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

#### 단말 해제하기

등록된 단말을 해제 합니다. 해제되면 더이상 메시지를 받을 수 없습니다. 

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

#### Push 메시지 보내기

Push 메시지 구성을 쉽게 하기 위해 BaasioMessage 클래스가 제공됩니다. 필요한 데이터를 채워 BaasioPush 클래스를 이용하여 메시지를 전송합니다.

메시지를 전송하는 방법은 setMessage()와 setPayload(), 이렇게 두 가지 방법이 있습니다. 

setMessage는 비교적 간단한 메시지를 전송하기 위해 사용하고, setPayload는 기본 메시지 규격외에 Custom한 데이터를 전송하기 위해 사용합니다.  

baas.io Push 서비스는 iOS와 Android 모두 비슷한 용도로 사용할 수 있도록 구현되어 있습니다.

##### 전체 발송

1. setMessage()를 이용한 방법

		BaasioMessage message = new BaasioMessage();
	    message.setMessage(
			"전체 발송"			// 전송할 메시지
			, "homerun.caf"		// iOS APNS의 sound
			, 1);				// iOS APNS badge 갯수
	
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

2. setPayload()를 이용한 방법

		BaasioPayload payload = new BaasioPayload();
		payload.setAlert("전체 발송");		// 전송할 메시지
		payload.setSound("homerun.caf");	// iOS APNS의 sound
		payload.setBadge(1);				// iOS APNS badge 갯수
	
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

##### 플랫폼별 발송

1. setMessage()를 이용한 방법

		BaasioMessage message = new BaasioMessage();
	    message.setMessage(
			"안드로이드만 발송"	// 전송할 메시지
			, "homerun.caf"		// iOS APNS의 sound
			, 2);				// iOS APNS badge 갯수
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

2. setPayload()를 이용한 방법

		BaasioPayload payload = new BaasioPayload();
		payload.setAlert("안드로이드만 발송");	// 전송할 메시지
		payload.setSound("homerun.caf");		// iOS APNS의 sound
		payload.setBadge(2);					// iOS APNS badge 갯수
	
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

##### 태그별 발송

1. setMessage()를 이용한 방법

		BaasioMessage message = new BaasioMessage();
	    message.setMessage(
			"태그별 발송"			// 전송할 메시지
			, "homerun.caf"		// iOS APNS의 sound
			, 3);				// iOS APNS badge 갯수
		message.setTarget(BaasioMessage.TARGET_TYPE_TAG);	// 태그별 발송
		message.setTo("friend,male");						// friend와 male tag로 등록된 단말로 발송 
	
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

2. setPayload()를 이용한 방법

		BaasioPayload payload = new BaasioPayload();
		payload.setAlert("태그별 발송");		// 전송할 메시지
		payload.setSound("homerun.caf");	// iOS APNS의 sound
		payload.setBadge(3);				// iOS APNS badge 갯수
	
		BaasioMessage message = new BaasioMessage();
	    message.setPayload(payload);
		message.setTarget(BaasioMessage.TARGET_TYPE_TAG);	// 태그별 발송
		message.setTo("friend,male");						// friend와 male tag로 등록된 단말로 발송 
	
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

##### 예약 발송

시간은 KST 기준이며, 예약 발송으로 전송된 시간의 남은 시간이 5분 이내일 경우에는 바로 발송 처리됩니다. 

1. setMessage()를 이용한 방법

		BaasioMessage message = new BaasioMessage();
	    message.setMessage(
			"예약 발송"			// 전송할 메시지
			, "homerun.caf"		// iOS APNS의 sound
			, 4);	// iOS APNS badge 갯수
		message.setReserve("201301251422");	// 2013년 1월 25일 오후 2시 22분
	
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

2. setPayload()를 이용한 방법

		BaasioPayload payload = new BaasioPayload();
		payload.setAlert("예약 발송");		// 전송할 메시지
		payload.setSound("homerun.caf");	// iOS APNS의 sound
		payload.setBadge(4);				// iOS APNS badge 갯수
	
		BaasioMessage message = new BaasioMessage();
		message.setReserve("201301251422");	// 2013년 1월 25일 오후 2시 22분
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

##### 개별 발송

개별 전송은 최대 50개의 대상에게 발송할 수 있습니다.

1. setMessage()를 이용한 방법

		BaasioMessage message = new BaasioMessage();
	    message.setMessage(
			"개별 발송"			// 전송할 메시지
			, "homerun.caf"		// iOS APNS의 sound
			, 5);	// iOS APNS badge 갯수
		message.setTarget(BaasioMessage.TARGET_TYPE_USER);	// 회원 개별 발송
		message.setTo("uuid1,uuid2");						// uuid1, uuid2의 회원에게 전송
	
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

2. setPayload()를 이용한 방법

		BaasioPayload payload = new BaasioPayload();
		payload.setAlert("개별 발송");		// 전송할 메시지
		payload.setSound("homerun.caf");	// iOS APNS의 sound
		payload.setBadge(5);				// iOS APNS badge 갯수
	
		BaasioMessage message = new BaasioMessage();
	    message.setPayload(payload);
		message.setTarget(BaasioMessage.TARGET_TYPE_USER);	// 회원 개별 발송
		message.setTo("uuid1,uuid2");						// uuid1, uuid2의 회원에게 전송
	
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

##### 커스텀 필드와 함께 발송(v0.8.3 이후 적용)

setPayload()를 이용하면, 추가로 다른 필드를 넣어서 메시지를 전송할 수 있습니다.

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

<b>※ 잘 안되시나요? Push가 정상 설정되었는지 확인하세요.</b>
>Push를 활성화를 하시면, 정상적으로 동작시키기 위해 아래 체크리스트를 확인 바랍니다.

>1. <b><CHECK!!></b> Google Play가 설치된 실제 안드로이드 단말에서 테스트하셔야합니다.
>2. [baas.io 사이트](http://baas.io) 이동
>3. 로그인 > My page 이동> Application 선택
>4. 설정 > 푸시인증서 관리 
>5. <b><CHECK!!></b> Android API KEY 등록되었는지 확인
>6. <b><CHECK!!></b> 푸시 사용 설정이 사용함인지 확인
>7. 데이터브라우저 > Role 선택 > guest 선택 > Permission 탭 선택
>8. <b><CHECK!!></b>"/devices" Create 체크됨 확인(v0.8.1 이전 버전은 "/pushes/devices")
>9. <b><CHECK!!></b>"/devices/\*" Update, Delete 체크됨 확인(v0.8.1 이전 버전은 "/pushes/devices/\*")
>9. 데이터브라우저 > Role 선택 > default 선택 > Permission 탭 선택
>10. <b><CHECK!!></b>설정된 Role이 "/device" Create와 "/devices/\*" Update, Delete를 포함하고 있는지 확인(v0.8.1 이전 버전은 "/pushes/devices", "/pushes/devices/\*")
>11. <b><CHECK!!></b>프로젝트의 AndroidMenifest.xml 파일을 열어 아래와 같이 package 명이 제대로 들어가 있는지 확인합니다.
>
		<permission
       		android:name="{package명}.permission.C2D_MESSAGE"
	        android:protectionLevel="signature" /> 
		...
		<receiver
            android:name="{package명}.gcm.GCMRedirectedBroadcastReceiver"
            android:permission="com.google.android.c2dm.permission.SEND" >
            <intent-filter>
                <!-- Receives the actual messages. -->
                <action android:name="com.google.android.c2dm.intent.RECEIVE" />
                <!-- Receives the registration id. -->
                <action android:name="com.google.android.c2dm.intent.REGISTRATION" />
                <category android:name="{package명}" />
            </intent-filter>
        </receiver>
		...
		<service android:name="{package명}.gcm.GCMIntentService" />
> 
><b><주></b> Role관련부분은 [역할과 권한](https://baas.io/docs/ko/devguide/roles.html)을 참고 바랍니다.

<br>


## 고객센터 서비스

BaasioHelp 클래스를 이용하여 baas.io 고객센터 서비스를 구현할 수 있습니다. 고객센터의 대한 자세한 내용은 [고객센터 가이드](https://baas.io/docs/ko/devguide/helpcenter.html)를 참고하기 바랍니다.

baas.io Android SDK에서는 모바일에서 고객센터를 쉽게 구현하실 수 있도록 고객센터 UI 라이브러리를 오픈소스 라이브러리 형태로 제공해드리고 있습니다. 이 UI 라이브러리를 이용하시면 간단히 구현하실 수 있습니다. 

- <b>[고객센터 UI 라이브러리 다운로드](https://github.com/baasio/baas.io-helpcenter-android/archive/master.zip)</b>

### BaasioHelp

#### 도움말(FAQ) 가져오기

도움말은 도움말 카테고리와 각 카테고리의 도움말 항목으로 이루어져 있습니다.

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

#### 도움말(FAQ) 검색

특정 키워드로 도움말을 검색할 수 있습니다.

	BaasioHelp.searchHelpsInBackground(
		keyword		// 찾으려는 키워드
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

#### 도움말 상세내용 가져오기

도움말 항목은 uuid를 가지고 있으며, 이 uuid로 개발자가 미리 등록한 답변을 가져올 수 있습니다.

	BaasioHelp.getHelpDetailInBackground(
		uuid		// 도움말 항목의 uuid
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

#### 문의사항 개발자에게 보내기

회원이 앱을 이용하다가 문의사항이 있을 경우 개발자에게 보낼 수 있습니다.

	BaasioHelp.sendQuestionInBackground(
			context
			, email		// 이메일 주소
			, body		// 문의사항
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


