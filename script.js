setInterval(()=>{
    const container = document.getElementById('container');
    container.innerHTML = new Date().toLocaleTimeString();
     
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    UpdatedColour = 'rgb(' + r + ',' + g + ',' + b + ')';
    
    container.style.color = UpdatedColour;
}, 1000)

