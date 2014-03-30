# File
[]({'id':'file','data-menu':'File'})

Group 기능은 File Collection을 통해 지원되며, 파일들을 업/다운로드 및 수정/삭제를 할 수 있습니다.

## Upload File
[]({'id':'file-upload-file','data-menu':'Upload File'})

File Collection 에 File을 업로드 합니다.  
다음 코드는 File Collection 에 "baas.jpg" 파일을 업로드하는  소스 코드입니다.

#### - HTML -
```html
<input type="file" name="file" class="_file_upload"/>
<button class="_upload_start">upload start</button>
```

#### - javascript code -
```javascript
// 업로드를 시작 버튼 Click
$('._upload_start').bind('click',function(e){

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

## Get File Entity
[]({'id':'file-get-file-entity','data-menu':'Get File Entity'})

## Update File Entity
[]({'id':'file-update-file-entity','data-menu':'Update File Entity'})

## Remove File
[]({'id':'file-remove-file','data-menu':'Remove File'})

