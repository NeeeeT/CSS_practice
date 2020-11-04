window.onload = ()=>{
    let btn = document.getElementById('graphic');
    let hamBtn = document.getElementById('header-img2');

    let tri = document.getElementById('t');
    let hBox = document.getElementsByClassName('hambox');

    btn.addEventListener("click", ()=>{
        let box8 = document.getElementById('box8');
        let det = (box8.style.visibility == 'hidden');
        box8.style.visibility = det ? 'visible' : 'hidden';
        box8.style.opacity = det ? 1:0;
        box8.style.height = det ? '316px' : '0px';
        tri.style.transform = `rotate(${det ? 180:360}deg)`;
    })
    hamBtn.addEventListener("click", ()=>{
        for(let i = 0; i < hBox.length; i++){
            let cond = (hBox[i].style.visibility == 'hidden');
            hBox[i].style.visibility = cond ? 'visible' : 'hidden';
            hBox[i].style.height = cond ? '100px' : '0px';
        }
    })
    plotSine();
    function plotSine() {
        var ctx = canvas.getContext('2d');
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        // var scale = 20;
    
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#FABCF0";
        
        var x = 0;
        var y = 0;
        var amplitude = 5.5;
        var frequency = 2;
        //ctx.moveTo(x, y);
        while (x < width) {
            y = height/2 + amplitude * Math.sin(x/frequency);
            ctx.lineTo(x, y);
            x = x + 10.2;
        }
        ctx.stroke();
    }
}