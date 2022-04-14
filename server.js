const express = require('express');
const app=express();


app.listen(8080, function(){
    console.log('listenin on 8080')
});


//누군가가 /pet 으로 방문하
//ㅔㄷㅅ 관련된 안내문 듸우주가

// app.get('/uploaa', function(요청, 응답){
//     응답.send('동영상을 업로드해주세요.');
// });

//get 요청하면 html파일 보내기

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/upload.html')
});
