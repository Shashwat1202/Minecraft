var canvas= new fabric.Canvas("myCanvas");
var block_width=50;
var block_height=50;
var playerx= 100;
var playery= 100;
var player_object="";
var block_object="";
function update_player(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(100);
        player_object.set({
            top:playery,left:playerx
        })
        canvas.add(player_object);
    })
}
function update_block(block){
    fabric.Image.fromURL(block,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToWidth(block_height);
        block_object.set({
            top:playery,left:playerx
        })
        canvas.add(block_object);
    })
}
 window.addEventListener("keydown",kd)
 function kd(e){
     key_number=e.keyCode;
     console.log(key_number);
    if(key_number == 67){
        update_block('cloud.jpg');
    }
    if(key_number == 68){
        update_block("dark_green.png");
    }
    if(key_number == 71){
        update_block("ground.png");
    } 
    if(key_number == 76){
        update_block("light_green.png");
    }
    if(key_number == 82){
        update_block("roof.jpg");
    }
    if(key_number == 84){
        update_block("trunk.jpg");
    }
    if(key_number == 87){
        update_block("wall.jpg");
    }
    if(key_number == 89){
        update_block("yellow_wall.png");
    }
    if(e.shiftKey == true && key_number == 80){
        block_width= block_width+10;
        block_height= block_height+10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    if(e.shiftKey == true && key_number == 77){
       block_width= block_width-10;
       block_height= block_height-10;
       document.getElementById("width").innerHTML=block_width;
       document.getElementById("height").innerHTML=block_height;
    }
    if(key_number == 37){
        left();
    }
    if(key_number == 38){
        up();
    }
    if(key_number == 39){
        right();
    }
    if(key_number == 40){
        down();
    }
 }
