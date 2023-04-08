var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start(){

    document.getElementById("textbox").innerHTML="";
recognition.start();

}

recognition.onresult=function run(event){

console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie"){

console.log("taking selfie");
speak();

}

}

function speak (){

var synth=window.speechSynthesis;
var speak_data="Taking your selfie in 5 seconds";

var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(cameraa);

setTimeout (function(){

takeSnapshot();
save();

},5000) ;

}

Webcam.set({

width:360,
height:250,
image_format:'png',
png_quality:90

});
cameraa=document.getElementById("camera");

function takeSnapshot(){

Webcam.snap(function(data_uri){
    document.getElementById("camera1").innerHTML="<img id='imagerts' src='" + data_uri+"'>";
});

}

function save (){

downloader=document.getElementById("downloader");
image=document.getElementById("imagerts").src;
downloader.href=image;
downloader.click();


}
