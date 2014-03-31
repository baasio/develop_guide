# File
[]({'id':'file','data-menu':'File'})

Group 기능은 File Collection을 통해 지원되며, 파일들을 업/다운로드 및 수정/삭제를 할 수 있습니다.

## Upload File
[]({'id':'file-upload-file','data-menu':'Upload File'})

File Collection 에 File을 업로드 합니다.  
다음 코드는 File Collection 에 "baas.jpg" 파일을 업로드하는  소스 코드입니다.

**- Of least permission -**

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | X | O | X | X |

**- HTML -**
```html
<input type="file" name="file" class="_file_upload"/>
<button class="_upload_start">upload start</button>
```

**- Javascript -**
```javascript
// 업로드를 시작 버튼 Click
$('._upload_start').bind('click',function(e){
	e.preventDefault();

	// file input element 객체
	var fileInput = document.getElementsByClassName('_file_upload');
	var file = new Baas.File({'client':io});

	file.upload({'file':fileInput},function(errorFlag, response, entity){
		if(errorFlag){
			// file 업로드가 실패한 경우
		} else {
			// file 업로드가 성공한 경우
		}
	})
})
```


## Download File
[]({'id':'file-download-file','data-menu':'Download File'})

File을 다운로드르 하기 위해서는 `uusd`가 필요합니다.  
다음 코드는 `uuid` 사용하여 "baas.jpg" 파일을 다운로드하는  소스 코드입니다.

**- Of least permission -**

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | O | X | X | X |

**- HTML -**
```html
<button class='download_start'>fileDownload</button>
```

**- Javascript -**
```javascript
$('.download_start').click(function(e){
    e.preventDefault();

    var file  = new Baas.File({'client':io, 'data':{'uuid':'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'} });

    file.download(function(errorFlag, entity){
     	if(errorFlag){
			// file download가 실패한 경우
		} else {
			// file download가 성공한 경우
		}
    })
})
```

## Get File Entity
[]({'id':'file-get-file-entity','data-menu':'Get File Entity'})

File enitty 정보는 `uusd`를 사용하여 가지고 올수 있습니다.  
다음 코드는 `uuid` 사용하여 file entity 정보를 가지고 오는 소스 코드입니다.

**- Javascript -**
```javascript
var options = {
	'type':'files',
	'uuid':'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'
}

var getCallback = function(errorFlag, entity){
	if(errorFlag){
		// file entity 정보 가져오기 실패한 경우
	} else {
		// file entity 정보 가져오기 성공한 경우
	}
})

// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
io.getEntity(options,getCallback)
```

**- Of least permission -**

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | O | X | X | X |

## Update File Entity
[]({'id':'file-update-file-entity','data-menu':'Update File Entity'})

File enitty 정보(property)를 추가하거나 기존의 정보(property)를 수정 할 수 있습니다.  
다음 코드는 `nickname`과 `count` 정보(property)를 추가하거나 수정하는 소스 코드입니다.

> 업로드 한 파일을 다른 파일로 교체 하거나,  
> 업로드 된 파일이 없는 빈 File Entity에 파일을 추가 하는 것은 아직 지원되지 않습니다.

**Javascript**
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options ={
    'client' : io,
    'data' : {
        'type' : 'files',
        'uuid' : 'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'
    }
}

var baas_file = new Baas.File(options)

// property nickname과 count를 추가
baas_file.set({'nickname':'share file','count':'30'});

baas_file.save(function(errorFlag, responseData, entity){
    if(errorFlag){
        // file entity 정보 추가 및 수정이 실패한 경우
    } else {
        // file entity 정보 추가 및 수정이 성공한 경우
    }
});
```

**- Of least permission -**

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | X | X | O | X |
## Remove File
[]({'id':'file-remove-file','data-menu':'Remove File'})

