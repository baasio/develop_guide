# File
[]({'id':'file','data-menu':'File'})

Group 기능은 File Collection을 통해 지원되며, 파일들을 업/다운로드 및 수정/삭제를 할 수 있습니다.

## Upload File
[]({'id':'file-upload-file','data-menu':'Upload File'})

File을 업로드하려면 HTML의 input type이 file인 element를 사용하여 File을 업로드 합니다.  
다음 코드는 HTML과 같이 사용하여 File을 업로드 하는 소스 코드입니다.

**HTML**
```html
<input type="file" name="file" class="_file_upload"/>
<button class="_upload_start">upload start</button>
```

**Javascript**
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options = {
	'client':io
}

var uploadCallback = function(errorFlag, response, entity){
    if(errorFlag){
        // file upload가 실패한 경우
    } else {
        // file upload가 성공한 경우
    }
}

$('._upload_start').click(function(e){
    e.preventDefault();

    var fileInput = document.getElementsByClassName('_file_upload');
    var file  = new Baas.File(options);

    file.upload({'file':fileInput}, uploadCallback)
})
```
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | X | O | X | X |
[]({'class':'table-bordered'})


## Download File
[]({'id':'file-download-file','data-menu':'Download File'})

File을 다운로드르 하기 위해서는 `uusd`가 필요합니다.  
다음 코드는 `uuid` 사용하여 "baas.jpg" 파일을 다운로드하는  소스 코드입니다.

**HTML**
```html
<button class='download_start'>fileDownload</button>
```

**Javascript**
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options = {
	'client':io,
    'data':{'uuid':'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'}
}

var downloadCallback = function(errorFlag, entity){
    if(errorFlag){
        // file download가 실패한 경우
    } else {
        // file download가 성공한 경우
    }
}

$('.download_start').click(function(e){
    e.preventDefault();

    var file  = new Baas.File(options);

    file.download(downloadCallback)
})
```
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | O | X | X | X |
[]({'class':'table-bordered'})

## Get File Entity
[]({'id':'file-get-file-entity','data-menu':'Get File Entity'})

File enitty 정보는 `uusd`를 사용하여 가지고 올수 있습니다.  
다음 코드는 `uuid` 사용하여 file entity 정보를 가지고 오는 소스 코드입니다.

**Javascript**
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
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | O | X | X | X |
[]({'class':'table-bordered'})

## Update File Entity
[]({'id':'file-update-file-entity','data-menu':'Update File Entity'})

File enitty 정보(property)를 추가하거나 기존의 정보(property)를 수정 할 수 있습니다.  
다음 코드는 `nickname`과 `count` 정보(property)를 추가하거나 수정하는 소스 코드입니다.

**Javascript**
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options ={
    'client' : io,
    'data' : {
        'uuid' : 'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'
    }
}

var baas_file = new Baas.File(options)

var saveCallback = function(errorFlag, responseData, entity){
	if(errorFlag){
		// file entity 정보 추가 및 수정이 실패한 경우
	} else {
		// file entity 정보 추가 및 수정이 성공한 경우
	}
}

// property nickname과 count를 추가
baas_file.set({'nickname':'share file','count':'30'});
baas_file.save(saveCallback);
```
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | X | X | O | X |
[]({'class':'table-bordered'})

**Update 되지 않는 정보**
* 업로드 한 파일을 다른 파일로 교체
* 업로드 된 파일이 없는 빈 File Entity에 파일을 추가

## Remove File
[]({'id':'file-remove-file','data-menu':'Remove File'})

**Javascript**
```javascript
// io객체는 미리 선언 되어야 한다. quickstart를 참조 하시기 바랍니다.
var options ={
	'client' : io,
	    'data' : {
	        'uuid' : 'ca3bf5a4-b823-11e3-827d-06f4fe0000b5'
	    }
}

var baas_file = new Baas.File(options)

var destroyCallback = function(errorFlag, entity){
	if(errorFlag){
		// file entity 삭제 실패한 경우
	} else {
		// file entity 삭제 성공한 경우
	}
}

baas_file.destroy(destroyCallback);
```
### Of least permission

| | read | create | update | delete |
|:--------:|:--------:|:--------:|:--------:|:--------:|
| **/files/\*\*** | X | X | X | O |
[]({'class':'table-bordered'})
