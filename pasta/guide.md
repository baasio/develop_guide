# 파스타(Pasta) 란?

별도의 서버를 구축할 필요 없이 앱을 만들 수 있는 것이 바스아이오(baas.io)의 비전입니다. 별도로 서버를 구입하거나 API를 개발할 필요가 없습니다. 하지만, 가끔은 모바일 혹은 웹어플리케이션에서만 처리하기 어려워 서버가 필요한 경우들이 있습니다.

파스타는(Pasta) 모바일 앱/웹 개발자가 서버가 필요없이 쉽게 자신만의 API를 만들 수 있도록 도와줍니다. Javascript SDK를 사용하여 기존 어플리케이션을 만들듯 여러분들의 API를 만들 수 있습니다.

모바일 앱/웹 개발자가 작성된 코드는 파스타(Pasta)에서 동작합니다.

자, 빠르게 시작해볼까요?!

# Overview

## 기본 구조
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
- 파일명이 API Endpoint 이다. `수정되어야 함`
    - sample.js라고 저장하면 `https://api.baas.io/~~~/sample` 로 생성된다

- 'use strict' 모드로 작성해야 한다.
    - 아래 링크를 통해 자세히 알 수 있다.

        - [MSDN - Strict 모드(JavaScript)](http://msdn.microsoft.com/ko-kr/library/ie/br230269.aspx)
        - [Mozilla Developer Network - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FFunctions_and_function_scope%2FStrict_mode)

## 기본 객체

### request
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

주의 할 점은 response로 객체를 전송하면 해당 request가 끝나기 때문에 제일 마지막에 사용해야 한다.

method는 finish와 error가 있으며 샘플은 아래와 같다.

* sample code
```javascript
    var sample = function (request, response) {
        if (error) {
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

`로그는 쌓이고 있지만, 현재 배타 상태로는 로그를 볼 수 있는 곳이 없다!!
조금만 기다리시라..`

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

### baasio
`수정되어야 함`

baasio는 SDK를 new한 객체이다.

즉 request에 포함 되어 있는 authorization 정보와 앱의 아이디등이 셋팅 되어 있다.

그래서 SDK를 사용할 때 아래와 같이 쓰면 된다.

```javascript
    collection = new Baas.Collection({'client':baasio, 'type':'cats'},function(err, data){
        console.log(err);
        console.log(data);
    });
    console.log(collection);
```

# 빠르게 시작하기

* [파스타(Pasta) 에디터에서 API 만들기](#step1)
	* [1. 에티터로 이동하기](#step1.1)
	* [2. 새로운 API 만들기](#step1.2)
	* [3. 코드 작성 후 저장](#step1.3)
	* [4. API 실행하기](#step1.4)

* [다양한 앱 플랫폼에서 사용하기](#step2)
	* [안드로이드 플랫폼에서 API 사용하기](#step2.1)
	* [iOS 플랫폼에서 API 사용하기](#step2.1)
* [참고. 고급사용자를 위한 파스타 이용방법 (git)](#step3)

파스타는(Pasta) 모바일 앱/웹 개발자가 서버 필요없이 쉽게 자신만의 API를 만들 수 있도록 도와줍니다. Javascript SDK를 사용하여 기존 어플리케이션을 만들듯 여러분들의 API를 만들 수 있습니다.

## <a id="step1"></a> 파스타(Pasta) 에디터에서 API 만들기

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
	curl https://api.baas.io/my-baasio-id/my-app-id/pasta/{endpoint}

에디터에서 저장한 코드를 실행시킨 결과는 다음과 같다.
	
	curl https://api.baas.io/baasio/sandbox/pastas/test

	{
	  "action" : "get",
	  "application" : "2e11bd49-2ef0-11e3-bcbe-0200502e0005",
	  "params" : { },
	  "path" : "/pastas",
	  "uri" : "https://api.baas.io/baasio/sandbox/pastas",
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

## <a id="step2"></a> 다양한 앱 플랫폼에서 사용하기

### <a id="step2.1"></a> 안드로이드 플랫폼에서 API 사용하기
	
자신만의 API를 만든다는 것은 API 응답형식 또한 개발자가 정한다는 것입니다. 따라서, 안드로이드에서 해당 API 를 사용하려면 응답값에 대한 형식을 지정해줘야 합니다.
	
1) API 응답 클래스 작성

응답 형식을 어떤식으로 지정해줘야한다는 것은 개발자가 원하는 대로 할 수 있지만 기본적인 정보는 다음과 같습니다.

	public class CustomResponse {
    	private String action;
		private UUID application;
    	private String path;
    	private String response; // 스크립트의 응답값
    	private String uri;
    	private String status;
    	private long timestamp;
    	private long duration;
    }

응답클래스를 어떻게 작성해야할지는 [BaasioResponse 클래스 소스](https://github.com/baasio/baas.io-sdk-android/blob/master/BaasioAndroid/src/com/kth/baasio/response/BaasioResponse.java) 살펴보면 도움이 될 것입니다.

2) API 사용하기

안드로이드 SDK 에서 제공하는 customApiRequest API를 사용하면 쉽게 할 수 있습니다. 세부적인 정보는 다음과 같습니다.

	/**
     * Send baas.io custom API request
     * 
     * @param method HTTP method
     * @param cls Result object class
     * @param params URL parameters
     * @param data HTTP entity
     * @param segments URL segments(paths)
     * @return Response for API request with class type
     */
    public <T> T customApiRequest(HttpMethod method, Class<T> cls, Map<String, Object> params, Object data, String... segments)

실제 위의 예제에서 살펴보았던 서버API를 안드로이드 API에서 사용하면 다음과 같습니다.

	CustomResponse response = Baas.io().customApiRequest(HttpMethod.GET, CustomResponse.class, null, null);

##<a id="step3"></a>참고. 고급사용자를 위한 파스타 이용방법 (git)

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
	$ curl https://api.baas.io/my-baasio-id/my-app-id/pasta/{endpoint}


# 모듈

Pasta는 편리하고 빠른 개발을 위해, 다양한 Third-Party Module을 제공한다. 

- Underscore
- Class
- q
- lodash
- Async
- base64
- hashish
- Nodemailer
- Mailgun
- Mandrill
- SendGrid
- minimatch
- moment
- qs
- traverse
- uuid
 
`일반적인 npm 모듈 중에서 node.js에 깊은 의존성이 있는 것은 사용이 불가능하다.
추가를 원하는 모듈이 있다면 고객센터를 통해서 문의 하시라..`

### [Underscore](https://npmjs.org/package/underscore)
JavaScript's functional programming helper library.


### [Class](https://npmjs.org/package/Class)
Port of Prototype.js inheritance implementation for Node.js.


### [q](https://npmjs.org/package/q)
A library for promises (CommonJS/Promises/A,B,D)

### [Lo-Dash (lodash)](https://npmjs.org/package/lodash)
A utility library delivering consistency, customization, performance, & extras.

### [Async](https://npmjs.org/package/async)
Higher-order functions and common patterns for asynchronous code

### [base64](https://npmjs.org/package/base64)
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

### [hashish](https://npmjs.org/package/hashish)
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

### [Nodemailer](https://npmjs.org/package/nodemailer)
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

### [Mailgun](https://npmjs.org/package/mailgun)
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


### [Mandrill](https://npmjs.org/package/mandrill)
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

### [SendGrid](https://npmjs.org/package/sendgrid)
Learn why more developers choose SendGrid for their email deliverability service to send transactional emails triggered by web apps. Get started for free.


### [minimatch](https://npmjs.org/package/minimatch)
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

### [moment](https://npmjs.org/package/moment)
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

### [qs](https://npmjs.org/package/qs)
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

### [traverse](https://npmjs.org/package/traverse)
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

### [uuid](https://npmjs.org/package/uuid)
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