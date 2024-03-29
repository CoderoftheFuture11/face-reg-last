
Webcam.attach('#camera');
camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


 function take_snapshot()
 {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });    
 }

console.log('ml5 version:', ml5.version);

classifer=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uB01L5jnK/model.json',modelLoaded);

function check(){
    img=document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        comsole.error(error);
    } else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);

    }
}