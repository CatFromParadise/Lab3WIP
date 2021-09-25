function y(x)
{
    sum=Math.exp(0.2*Math.pow(x,2))
    return(sum)
}
function myFunc1(){
    let x=parseFloat(document.forms.F1.x1.value)
    let y1=parseFloat(document.forms.F1.x2.value)
    let z1=parseFloat(document.forms.F1.x3.value)
    if(x<4&&z1==0.1&&y1>1){
        y1+=0.1;
}
    console.log("do while:")
    do{z=y(x)
        console.log("value = "+(x).toFixed(2))
        console.log("result = "+(z).toFixed(4))
        x+=z1
    }
    while(x<y1)
    graph();
    
}
function myFunc2(){
    let x=parseFloat(document.forms.F1.x1.value)
    let y1=parseFloat(document.forms.F1.x2.value)
    let z1=parseFloat(document.forms.F1.x3.value)
    if(x<4&&z1==0.1&&y1>1){
        y1+=0.1;
}
    console.log("while:")
    while(y1>=x){
        z=y(x)
        console.log("value = "+(x).toFixed(2))
        console.log("result = "+(z).toFixed(4))
        x+=z1
    }
    graph();
}
function myFunc3(){
    let x=parseFloat(document.forms.F1.x1.value)
    let y1=parseFloat(document.forms.F1.x2.value)
    let z1=parseFloat(document.forms.F1.x3.value)
       if(x<4&&z1==0.1&&y1>1){
               y1+=0.1;
       }
        for (x; x<=y1; x+=z1) {
            z=y(x)
            console.log("value = "+(x).toFixed(2))
            console.log("result = "+(z).toFixed(4))
        }
        // }
        graph();
}
function graph(){
    let x=parseFloat(document.forms.F1.x1.value)
    let y1=parseFloat(document.forms.F1.x2.value)
    let z1=parseFloat(document.forms.F1.x3.value)
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(1,10,300,300);
    //X
    ctx.beginPath();
    ctx.moveTo(0, myCanvas.height/2);
    ctx.lineTo(myCanvas.width, myCanvas.height/2);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke()
    ctx.save();
    //Y
    ctx.beginPath();
    ctx.moveTo(myCanvas.width/2, 0);
    ctx.lineTo(myCanvas.width/2, myCanvas.height);
    ctx.strokeStyle = 'green';
    ctx.closePath();
    ctx.stroke();
    ctx.save();
    ctx.strokeStyle='blue';
    console.log("for:")
    ctx.save()
    ctx.beginPath()
    ctx.translate(myCanvas.width/2, myCanvas.height/2)
    ctx.scale(1,-1);
  //  ctx.rotate((Math.PI / 180) * 180);
    for (x; x<=y1; x+=z1) {
        z=y(x)
        ctx.lineTo(x,z)
    }
    ctx.stroke();

    ctx.restore();
}



