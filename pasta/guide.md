# 파스타(Pasta) 란?
[]({'id':'pasta_define','data-menu':'파스타[Pasta]란?'})

별도로 서버를 구입하거나, API를 개발할 필요 없이 앱을 만들 수 있는 것이 바스아이오(baas.io)의 철학입니다.   

바스아이오에서는 백엔드 서버에서 데이터 저장소와 일부 공통기능의 로직(사용자, 그룹, 푸시, 파일, 고객센터)을 이미 구축하여 제공하고 있습니다. 하지만 자신만의 로직을 넣고 싶다면 별도의 서버를 구축하여 처리해야 했습니다.

파스타는(Pasta) 모바일 앱/웹 개발자가 서버 필요 없이 자신만의 API를 쉽게 만들 수 있도록 도와줍니다.
Javascript SDK를 사용하여 기존 어플리케이션을 만들듯 여러분들의 API를 작성할 수 있습니다.
모바일 앱/웹 개발자가 작성된 코드를 파스타(Pasta)로 옮겨 사용하면 됩니다.

![architecture](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/architecture.png)

기존 API는 모두 기존 서비스가 담당하고, 파스타 API 는 여러분들의 코드의 로직을 수행하여 응답을 보내줍니다.

자, 빠르게 시작해볼까요?!

# Overview
[]({'id':'overview','data-menu':'Overview'})

## 기본 구조
[]({'id':'basic-constructor','data-menu':'기본 구조'})
- 작성할 코드의 파라미터는 2개이며, 순서대로 request, response 이다.

    ```
    var sample = function (request, response) {
    }
    ```
    즉, 아래 형태도 무방하다.
    ```
    var sample = function (_req, _resp) {
    }
    ```

- 작성한 코드의 시작점을 runnable.function에 넘겨 준다.
	```
    runnable.function = sample;
    ```
- 파일명이 API Endpoint가 된다.
    - sample.js라고 저장하면 `https://pasta-api.baas.io/${org_name}/${app_name}/pasta/sample` 로 접근 할 수 있다.

- 'use strict' 모드로 작성해야 한다.
	- [MSDN - Strict 모드(JavaScript)](http://msdn.microsoft.com/ko-kr/library/ie/br230269.aspx)
	- [Mozilla Developer Network - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FFunctions_and_function_scope%2FStrict_mode)

- 사용자가 만든 파일을 `require`하려면 __HOME이라는 예약어를 사용해야 한다.

	
	```
	// custom.js 파일을 require 하려면	
	var custom = require(__HOME + 'custom');
	```
	
	**이 부분은 정식 버전 때 바뀔 수 있다. 하지만 비슷한 기능을 제공할 것이다**

## 기본 객체
[]({'id':'basic-object','data-menu':'기본 객체'})

### request
[]({'id':'basic-object','data-menu':'request'})
현재 요청에 대한 정보가 담겨있는 JSON 객제이다.

method, headers, body, params, url, path, host 등의 정보가 담겨있다.


아래와 같이 코드를 이용하면 request 정보를 알 수 있다.

* sample code
    ```javascript
    var sample = function (request, response) {
        response.finish(request);
    };

    runnable.function = sample;
    ```
* 결과
    ```javascript
    {
      "method": "GET",
      "headers": {
        "host": "127.0.0.1:8080",
        "connection": "keep-alive",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.66 Safari/537.36",
        "accept-encoding": "gzip,deflate,sdch",
        "accept-language": "en-US,en;q=0.8"
      },
      "body": {},
      "params": {
        "a": "1",
        "b": "2"
      },
      "url": "/request?a=1&b=2",
      "path": "/request",
      "host": "127.0.0.1"
    }
    ```


### response
response 객체를 이용하여 화면에 데이터를 출력 할 수 있다.

**주의 할 점은 response로 객체를 전송하면 해당 request가 끝나기 때문에 제일 마지막에 사용해야 한다.**

~~method는 `finish`와 `error`가 있으며 샘플은 아래와 같다.~~ (베타 버전에서는 지원하지 않음)

* sample code
```javascript
    var sample = function (request, response) {
        if (request == null) {
            response.error(error);	//HTTP Status Code : 400
        } else {
            var resp = {
                title: "hello world"
            }
            response.finish(resp);	//HTTP Status Code : 200
        }
    };

    runnable.function = sample;
```

### logger
logger 객체를 이용하여 로그를 출력 할 수 있다.
로그는 Pasta IDE에서 확인 가능하다.

* sample code

    ```javascript
    var sample = function (request, response) {
        var resp = {
            title: "Hello Pasta!"
        }
        logger.log(resp);
        response.finish(resp);
    };

    runnable.function = sample;
    ```
![pasta.quickstart.7](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart7.png)
	
### io

io는 `baas.io Pasta SDK`가 아래와 같이 인스턴스 된 객체이다.
```
var io = new Baas.IO({
	orgName:'yourorgname', // 물론 여러분의 정보를 이용하여 생성한다. 
	appName:'sandbox'
});
```

즉 (생성 할 필요 없이) 그냥 쓰면 된다.

`baas.io Pasta SDK`는 `baas.io javascript SDK`와 사용법이 같다.

자세한 사항은 아래 링크를 참고하면 된다.
그래서 SDK를 사용할 때 아래와 같이 쓰면 된다.


- [baas.io Pasta & javascript SDK](/develop_guide/#javascript)

#### 회원 정보를 가져오는 샘플

```javascript
var sample = function (request, response) {

    var options = {
        method: 'GET',
        endpoint: 'user'
    };

    io.request(options, function (err, data) {
        if (err) {
            response.error(data);
        } else {
            response.finish(data);
        }
    });
};

runnable.function = sample;
```
혹은 

```javascript
var sample = function (request, response) {

    var options = {
        'client':io,
        'type':'user'
    }
    
    var users = new Baas.Collection(options, function(errorFlag, entity){
        if(errorFlag){
            response.error(errorFlag);
        } else {
            response.finish(entity);
        }
    });
};

runnable.function = sample;
```


# 빠르게 시작하기
[]({'id':'quickstart','data-menu':'빠르게 시작하기'})

* [파스타(Pasta) 에디터에서 API 만들기](#pasta/quickstart/step1)
	* [1. 에티터로 이동하기](#pasta/quickstart/step1.1)
	* [2. 새로운 API 만들기](#pasta/quickstart/step1.2)
	* [3. 코드 작성 후 저장](#pasta/quickstart/step1.3)
	* [4. API 실행하기](#pasta/quickstart/step1.4)

* [다양한 앱 플랫폼에서 사용하기](#pasta/quickstart/step2)
	* [안드로이드 플랫폼에서 API 사용하기](#pasta/quickstart/step2.1)
	* [iOS 플랫폼에서 API 사용하기](#pasta/quickstart/step2.2)
* [참고. 고급사용자를 위한 파스타 이용방법 (git)](#pasta/quickstart/step3)

파스타는(Pasta) 모바일 앱/웹 개발자가 서버 필요없이 쉽게 자신만의 API를 만들 수 있도록 도와줍니다. Javascript SDK를 사용하여 기존 어플리케이션을 만들듯 여러분들의 API를 만들 수 있습니다.

## <a id="step1"></a> 파스타(Pasta) 에디터에서 API 만들기
[]({'id':'quickstart-apicreate','data-menu':'파스타 에디터에서 API 만들기'})

### <a id="step1.1"></a> 1. 에티터로 이동하기

1) MyPage 에서 앱 선택 후 대시보드로 이동
2) 파스타(Pasta) 아이콘 클릭

![pasta.quickstart.1](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart1.png)

### <a id="step1.2"></a> 2. 새로운 API 만들기

1) 파스타(Pasta) 에디터에서 상단 프로젝트 선택 후 오른쪽 마우스 버튼 클릭

![pasta.quickstart.2](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart2.png)

2) 새파일 선택

![pasta.quickstart.3](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart3.png)

3) "hello.js" 파일이름을 넣고 [Create] 버튼 클릭

![pasta.quickstart.4](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart4.png)

### <a id="step1.3"></a> 3. 코드 작성 후 저장

	var sample = function (request, response) {
	     var resp = {
	        title: "Hello Pasta!"
	     }
	     response.finish(resp);
	};
	runnable.function = sample;

![pasta.quickstart.5](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart5.png)

### <a id="step1.4"></a> 4. API 실행하기

파스타(Pasta) 에디터에서 배포를 하려면 오른쪽 메뉴에서 Deploy or Deploy All 버튼을 클릭하여 배포를 진행하면 됩니다.

![pasta.quickstart.6](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart6.png)

실제 테스트를 하려면 다음과 같은 REST API 혹은 아래에서 다양한 앱 플랫폼에서 사용하는 방법이 있습니다.

	# {endpoint} : API명
	curl https://pasta-api.baas.io/my-baasio-id/my-app-id/pasta/{endpoint}

에디터에서 저장한 코드를 실행시킨 결과는 다음과 같다.
	
	curl https://pasta-api.baas.io/baasio/sandbox/pastas/test

	{
	  "action" : "get",
	  "application" : "2e11bd49-2ef0-11e3-bcbe-0200502e0005",
	  "params" : { },
	  "path" : "/pastas",
	  "uri" : "https://pasta-api.baas.io/baasio/sandbox/pastas",
	  "entities" : [ ],
	  "response" : {
	    "title" : "Hello Pasta!"
	  },
	  "timestamp" : 1382322304809,
	  "duration" : 788,
	  "applicationName" : "sandbox",
	  "baasio_id" : "baasio",
	  "error_code" : 0
	}

### <a id="step1.5"></a> 5. API 실행하기 & 로그 보기

오른쪽 메뉴에서 APITest 메뉴를 클릭한 후 Request 버튼을 누르면 실행결과와 로그를 직접 볼 수 있다.

![pasta.quickstart.8](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart8.png)

![pasta.quickstart.9](https://raw.githubusercontent.com/baasio/develop_guide/develop/pasta/images/quickstart9.png)

## <a id="step2"></a> 다양한 앱 플랫폼에서 사용하기
[]({'id':'quickstart-appplatform','data-menu':'다양한 앱 플랫폼에서 사용하기'})

### <a id="step2.1"></a> 안드로이드 플랫폼에서 API 사용하기
	
자신만의 API를 만든다는 것은 API 응답형식 또한 개발자가 정한다는 것입니다. 즉, 자신이 설계한 응답형식대로 String으로 전달되며, 원하는 방식으로 사용할 수 있습니다.

안드로이드 SDK 에서 제공하는 BaasioPasta 클래스를 사용하면 쉽게 이용할 수 있습니다. 아래 예제는 hello_world라는 API를 호출하여 onResponse()의 response로 결과 값을 받는 예제입니다.

```java
BaasioPasta.requestInBackground(
	HttpMethod.GET, 				// HTTP Method
    BaasioResponse.class, 			// 결과로 받을 Class
    null, 							// url param
    null,							// body로 보낼 내용
    new BaasioCallback<BaasioResponse>() {
            @Override
            public void onResponse(BaasioResponse response) {
                Log.e("baas.io", response.toString());
                String result = response.getProperties().get("response");
            }

            @Override
            public void onException(BaasioException e) {
                Log.e("baas.io", e.toString());
            }
    }, 
    "hello_world");					// Pasta API endpoint
```

### <a id="step2.2"></a> iOS 플랫폼에서 API 사용하기

iOS SDK에서는 외부의 RESTFul API를 쉽고 빠르게 쓸 수 있는 `SimpleNetworkManager`를 제공한다.

SDK를 사용한 앱이 로그인 상태이면, 해당 사용자의 token 정보가 자동으로 실려서 호출 된다.

자세한 사항은 아래 링크를 참고하면 된다.
- [Baas.io iOS SDK - Rest Network API](/develop_guide/#ios/etc/restapi)



##<a id="step3"></a>참고. 고급사용자를 위한 파스타 이용방법 (git)
[]({'id':'quickstart-git','data-menu':'참고. 고급사용자를 위한 파스타 이용방법 - git'})

파스타(Pasta)는 고급 사용자를 위해서 git 을 활용한 배포방법을 제공하고 있습니다.

git은 소스 코드 관리를 위한 분산 버전 시스템입니다. 여기에서는 git 사용법을 다루지 않습니다. 자세한 내용은 다음의 링크에서 확인하세요.

	git : http://ko.wikipedia.org/wiki/%EA%B8%B0%ED%8A%B8
	git 간편 안내서 http://rogerdudler.github.io/git-guide/index.ko.html

파스타(Pasta)는 어플리케이션 별 저장소를 제공하며 2가지의 브랜치(branch)를 제공합니다.

	master : 상용
	develop : 테스트용

다음과 같은 방법으로 git을 사용하시면 됩니다.

	변수 {branch} : 브랜치명
	변수 {endpoint} : API 이름
	$ git clone https://code.baas.io/my-baasio-id/my-app-id my-app-id
	$ cd my-app-id
	코드 작성 후 커밋
	$ git push origin {branch}
	API 확인하기
	$ curl https://pasta-api.baas.io/my-baasio-id/my-app-id/pasta/{endpoint}


# 모듈
[]({'id':'module','data-menu':'모듈'})

Pasta는 편리하고 빠른 개발을 위해, 다양한 Third-Party Module을 제공한다. 

- [Underscore](#pasta/module/module-underscore)
- [Class](#pasta/module/module-Class)
- [Q](#pasta/module/module-q)
- [Lo-Dash](#pasta/module/module-lodash)
- [Async](#pasta/module/module-async)
- [Base64](#pasta/module/module-base64)
- [Hashish](#pasta/module/module-hashish)
- [Node Mailer](#pasta/module/module-nodemailer)
- [Mailgun](#pasta/module/module-mailgun)
- [Mandrill](#pasta/module/module-mandrill)
- [SendGrid](#pasta/module/module-sendgrid)
- [Minimatch](#pasta/module/module-minimatch)
- [Moment](#pasta/module/module-moment)
- [Qs](#pasta/module/module-qs)
- [Traverse](#pasta/module/module-traverse)
- [UUID](#pasta/module/module-uuid)
 
`일반적인 npm 모듈 중에서 node.js에 깊은 의존성이 있는 것은 사용이 불가능하다.
추가를 원하는 모듈이 있다면 고객센터를 통해서 문의 하시라..`

## [Underscore](https://npmjs.org/package/underscore)
[]({'id':'module-underscore','data-menu':'underscore'})
JavaScript's functional programming helper library.


## [Class](https://npmjs.org/package/Class)
[]({'id':'module-Class','data-menu':'Class'})
Port of Prototype.js inheritance implementation for Node.js.


## [Q](https://npmjs.org/package/q)
[]({'id':'module-q','data-menu':'Q'})
A library for promises (CommonJS/Promises/A,B,D)

## [Lo-Dash (lodash)](https://npmjs.org/package/lodash)
[]({'id':'module-lodash','data-menu':'Lo-Dash'})
A utility library delivering consistency, customization, performance, & extras.

## [Async](https://npmjs.org/package/async)
[]({'id':'module-async','data-menu':'Async'})
Higher-order functions and common patterns for asynchronous code

## [Base64](https://npmjs.org/package/base64)
[]({'id':'module-base64','data-menu':'Base64'})
A C++ module for node-js that does base64 encoding and decoding.

```javascript
var sample = function (request, response) {
    var base64_encode = require('base64').encode;
    var base64_decode = require('base64').decode;

    var txt = "hello pasta!!";

    var buff = new Buffer(txt);
    var encode = base64_encode(buff);
    var decode = base64_decode(encode);

    var resp = {
        base64:{
            origin: txt,
            encode: encode,
            decode: decode
        }
    };

    response.finish(resp);
};
runnable.function = sample;
```
```json
{
  "base64": {
    "origin": "hello pasta!!",
    "encode": "aGVsbG8gcGFzdGEhIQ==",
    "decode": "hello pasta!!"
  }
}
```

## [Hashish](https://npmjs.org/package/hashish)
[]({'id':'module-hashish','data-menu':'Hashish'})
Hash data structure manipulation functions

```javascript
var sample = function (request, response) {
    var Hash = require('hashish');

    var resp = new Array();
    Hash({ a : 1, b : 2, c : 3, d : 4 })
        .map(function (x) { return x * 10 })
        .filter(function (x) { return x < 30 })
        .forEach(function (x, key) {
            resp[resp.length] = key + ' => ' + x;
        });

    response.finish(resp);
};

runnable.function = sample;
```
```json
[
  "a => 10",
  "b => 20"
]
```

## [Node Mailer](https://npmjs.org/package/nodemailer)
[]({'id':'module-nodemailer','data-menu':'Node Mailer'})
Easy to use module to send e-mails, supports unicode and SSL/TLS

```javascript
var sample = function (request, response) {
    var nodemailer = require("nodemailer");

    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "gmail.user@gmail.com",
            pass: "userpass"
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "Baas.io ✔ <gmail.user@gmail.com>", // sender address
        to: "cetauri@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world ✔", // plaintext body
        html: "<b>Hello world ✔</b>" // html body
    }

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, resp){
        if(error){
            response.error(error);
        }else{
            response.finish("Message sent: " + resp.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
};

runnable.function = sample;
```

## [Mailgun](https://npmjs.org/package/mailgun)
[]({'id':'module-mailgun','data-menu':'Mailgun'})
Mailgun is a set of powerful APIs that allow you to send, receive and track email effortlessly.
```javascript
var sample = function (request, response) {

    var Mailgun = require('mailgun').Mailgun;

    var mg = new Mailgun('some-api-key');
    mg.sendText('example@example.com', ['Recipient 1 <rec1@example.com>', 'rec2@example.com'],
        'This is the subject',
        'This is the text',
        'noreply@example.com', {},
        function(err) {
            if (err){
                response.error('Oh noes: ' + err);
            } else {
                response.finish("Success");
            }
        });
};

runnable.function = sample;
```


## [Mandrill](https://npmjs.org/package/mandrill)
[]({'id':'module-mandrill','data-menu':'Mailgun'})
Mandrill is a transactional email platform from MailChimp.
```javascript
var sample = function (request, response) {
    var mandrill = require('node-mandrill')('<Your Api Key Here>');
    mandrill('/messages/send', {
            message: {
                to: [
                    {email: 'git@jimsc.com', name: 'Jim Rubenstein'}
                ],
                from_email: 'you@domain.com',
                subject: "Hey, what's up?",
                text: "Hello, I sent this message using mandrill."
            }
        },
        function (error, _response) {
            //uh oh, there was an error
            if (error) {
                response.error(error);
            } else {
                //everything's good, lets see what mandrill said
                response.finish(_response);
            }
        }
    );
}

runnable.function = sample;
```

## [SendGrid](https://npmjs.org/package/sendgrid)
[]({'id':'module-sendgrid','data-menu':'SendGrid'})
Learn why more developers choose SendGrid for their email deliverability service to send transactional emails triggered by web apps. Get started for free.


## [Minimatch](https://npmjs.org/package/minimatch)
[]({'id':'module-minimatch','data-menu':'Minimatch'})
```javascript
var sample = function (request, response) {
    var minimatch = require("minimatch");

    var resp = {
        minimatch:{
            "*.foo": minimatch("bar.foo", "*.foo"), // true!
            "*.bar": minimatch("bar.foo", "*.bar") // false!
        }
    };

    response.finish(resp);
};

runnable.function = sample;
```
```json
{
  "minimatch": {
    "*.foo": true,
    "*.bar": false
  }
}
```

## [Moment](https://npmjs.org/package/moment)
[]({'id':'module-moment','data-menu':'Moment'})
Parse, manipulate, and display dates.
```javascript
var sample = function (request, response) {
    var moment = require('moment');
    var resp = {
        moment:{
            "Now" : moment().format('YYYY-MM-DD, h:mm:ss a'),
            "From 20111031": moment("20111031", "YYYYMMDD").fromNow(),
            "Day of the week": moment().format('dddd')
        }
    };

    response.finish(resp);
};

runnable.function = sample;
```
```json
{
  "moment": {
    "Now": "2013-10-11, 11:58:24 am",
    "From 20111031": "2 years ago",
    "Day of the week": "Friday"
  }
}
```

## [Qs](https://npmjs.org/package/qs)
[]({'id':'module-qs','data-menu':'Qs'})
querystring parser
```javascript
var sample = function (request, response) {
    var qs = require("qs");

    var query = 'user[name][first]=Tobi&user[email]=tobi@learnboost.com';
    var parseQuery = qs.parse(query);
    var stringifyQuery = qs.stringify(parseQuery);

    var resp = {
        qs: {
            parse: parseQuery,
            stringify: stringifyQuery
        }
    };

    response.finish(resp);
};

runnable.function = sample;
```
```json
{
  "qs": {
    "parse": {
      "user": {
        "name": {
          "first": "Tobi"
        },
        "email": "tobi@learnboost.com"
      }
    },
    "stringify": "user[name][first]=Tobi&user[email]=tobi%40learnboost.com"
  }
}
```

## [Traverse](https://npmjs.org/package/traverse)
[]({'id':'module-traverse','data-menu':'Traverse'})
traverse and transform objects by visiting every node on a recursive walk
```javascript
var sample = function (request, response) {
    var traverse = require("traverse");

    var obj = [ 5, 6, -3, [ 7, 8, -2, 1 ], { f : 10, g : -13 } ];

    traverse(obj).forEach(function (x) {
        if (x < 0) this.update(x + 128);
    });

    var resp = {
        traverse: obj
    };

    response.finish(resp);
};

runnable.function = sample;
```
```json
{
  "traverse": [
    5,
    6,
    125,
    [
      7,
      8,
      126,
      1
    ],
    {
      "f": 10,
      "g": 115
    }
  ]
}
```

## [UUID](https://npmjs.org/package/uuid)
[]({'id':'module-uuid','data-menu':'UUID'})
Rigorous implementation of RFC4122 (v1 and v4) UUIDs.
```javascript
var sample = function (request, response) {
    var uuid = require('uuid');

    var resp = {
        uuid: {
            // Generate a v1 (time-based) id
            v1: uuid.v1(), // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'

            // Generate a v4 (random) id
            v4: uuid.v4() // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
        }
    };

    response.finish(resp);
};

runnable.function = sample;
```

```json
{
  "uuid": {
    "v1": "3b8ad270-3221-11e3-a433-df8d14999478",
    "v4": "a1d1e2da-0f1e-498b-938e-6f4f7507e6e0"
  }
}
```
