
Webcam.set({width:350,height:300,image_format:"png",png_quality:90});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function tomar_foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version : ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MkRa3Oyi0/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelo cargado");
    
}
function check_foto(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);

}
function gotResult(error,results){
if(error){
    console.error(error);

}else{
    console.log(results);
    document.getElementById("resultado_nombre").innerHTML=results[0].label;
    document.getElementById("resultado_porcetaje").innerHTML=results[0].confidence.toFixed(2);
}
}