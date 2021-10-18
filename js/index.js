function draw(image){
    const canvas = document.getElementById("my-canvas");
    const context =canvas.getContext("2d");
    //context.fillStyle = "red";
    //context.fillRect(0,0,50,50);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    const width = image.width();
    const height = image.height();
    const cellsize = 50;
   /* const cells = image.cells();
    for (let x=0; x<width; x++){
        for (let y=0; y<height; y++){
            const index = (y*width+x)*3;
            const color = 'rgb(${cells[index + 0]}, ${cells[index + 1]},${cells[index + 2 ]})';
            context.fillStyle = color;
            context.fillRect(x*cellsize, y*cellsize, cellsize, cellsize);
        } 
    }*/
    for(let x=0;x<=width;x++){
        context.beginPath();
        context.moveTo(x*cellsize+0.5,0);
        context.lineTo(x*cellsize+0.5,height*cellsize);
        context.stroke();
    }
    for(let y=0; y<=height;y++){
        context.beginPath();
        context.moveTo(0,y*cellsize+0.5);
        context.lineTo(width*cellsize,y*cellsize+0.5);
        context.stroke();
    }
}
async function main(){
    const lib= await import("../pkg/index.js").catch(console.error);
    const image = new lib.Image(10,10);
    console.log(image);
    draw(image);
}

main();