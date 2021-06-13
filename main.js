Webcam.set({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("cam");
Webcam.attach('#cam');


function cap()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured" src="'+data_uri+'"/>'
    }); 
}

console.log('ml5 version:', ml5.version);

classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VyBRXYsOJ/model.json",modelLoaded);

function modelLoaded(){
    console.log('Model Loaded')
}

function image(){
    img = document.getElementById('captured');
    classifer.classify(img,gotResult);
}

function gotResult(error,result){
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label; 
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}



