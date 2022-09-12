img="";
status="";
objdetector="";
object=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(540,540);
    canvas.center();
    objdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting object";
}
function modelLoaded(){
    console.log("model has been successfully loaded");
    status=true;
    objdetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object=results;
    }
    
}

function draw(){
    image(img,0,0,540,540)
   if(status!=""){
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="status:Object has been successfully detected";
        fill("#808080");
        percent=floor(object[i].confidence*100);
        text(object[i].label+" " +percent+"%",object[i].x,object[i].y);
        noFill();
        stroke("#808080");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
   } 
}