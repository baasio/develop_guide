# Push
[]({'id':'push','data-menu':'Push'})

등록된 Device 또는 User의 앱에 Push Message를 발송 할 수 있습니다.

## Sending Pushes
[]({'id':'push-sending-pushes','data-menu':'Sending Pushes'})

### Push Target
**전체발송**
```javascript
var options = {
	'target' : 'all',
	...
}
```

**특정 User 발송**
```javascript
var options = {
	'target' : 'user',
	'to' : '81014b3a-7026-11e2-96dd-06ebb80000ba',
	...
}
```

**특정 Device 발송**
```javascript
var options = {
	'target' : 'device'
	'to' : 'a6700141-1b62-11e3-a23b-06a6fa0000b9',
	...
}
```

**tag에 발송**
```javascript
var options = {
	'target' : 'tag'
	'to' : 'baas',
	...
}
```

다음 소스는 특정 user에 Android, iOS 모두 특정 일자에 예약 발송하는 소스 코드입니다.

```javascript
var options = {
	'target' : 'user',
	'to' : '81014b3a-7026-11e2-96dd-06ebb80000ba',
	'payload' : {
		'badge' : 10,
		'sound' : 'bingbong.aiff',
		'alert' : 'good luck'
	},
	'reserve' : '201410021500',
	'platform' : 'I,G',
	'memo' : 'portal'
}

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var push = new Baas.Push({'client':io});

push.send(options, function(errorFlag, data){
	if(errorFlag){
		// message 발송 등록이 실패한 경우
	} else {
		// message 발송 등록이 성공한 경우
	}
})
```