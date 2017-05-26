//global variables used in most/all functions
var tile1 = 0;
var tile2 = 0;
var tile3 = 0;
var tile4 = 0;
var tile5 = 0;
var tile6 = 0;
var tile7 = 0;
var tile8 = 0;
var tile9 = 0;
var tile10 = 0;
var tile11 = 0;
var tile12 = 0;
var tile13 = 0;
var tile14 = 0;
var tile15 = 0;
var tile16 = 0;
var score = 0;
var nothing = 0;
//function that outputs a random value in the range specified
function random(min,max){
    var appear1;
    appear1 = Math.floor(Math.random() * (max - min)) + min;
    return appear1;
}
//function that sets all tiles and score to 0, then add to random tiles and prints them with color.
function restart(){
    tile1 = 0;
    tile2 = 0;
    tile3 = 0;
    tile4 = 0;
    tile5 = 0;
    tile6 = 0;
    tile7 = 0;
    tile8 = 0;
    tile9 = 0;
    tile10 = 0;
    tile11 = 0;
    tile12 = 0;
    tile13 = 0;
    tile14 = 0;
    tile15 = 0;
    tile16 = 0;
    score = 0;
    add();
    add();
    color();
    print();
}
//function that adds a random tile at a random location of value 0 in the board
function add() {
    /*tile value, global variables */
    var list = [tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14,tile15,tile16];
    /*check how many are empty, glocal variables */
    var list1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    /*check length of empty tiles, glocal variables */
    /*appear is a random number */
    var appear = random(1,11);
    /*vriable create for functionality */
    var o = 0;
    /*Everytime a value in the list of tile values does not equal 0, it is removed from the list and +1 is added to the corre*/
    for(var i = 0; i < 16; i++){
        var value = list[i-o];
        if (value != 0){
            list.splice(i-o,1);
            o = o + 1;
            list1[i]++;
            }
    }
    var length = list.length;
    if (appear > 3 && length > 0){
        appear = random(0,length);
        list[appear]= list[appear] + 2;
        var p = 0;
        if (list1[0]==0 && p < length){
            tile1= list[p];
            p++;
        }
        if (list1[1]==0 && p < length){
            tile2= list[p];
            p++;
        }   
        if (list1[2]==0 && p < length){
            tile3= list[p];
            p++;
        }
        if (list1[3]==0 && p < length){
            tile4= list[p];
            p++;
        }
        if (list1[4]==0 && p < length){
            tile5= list[p];
            p++;
        }   
        if (list1[5]==0 && p < length){
            tile6= list[p];
            p++;
        }
        if (list1[6]==0 && p < length){
            tile7= list[p];
            p++;
        }
        if (list1[7]==0 && p < length){
            tile8= list[p];
            p++;
        }
        if (list1[8]==0 && p < length){
            tile9= list[p];
            p++;
        }
        if (list1[9]==0 && p < length){
            tile10= list[p];
            p++;
        }
        if (list1[10]==0 && p < length){
            tile11= list[p];
            p++;
        }
        if (list1[11]==0 && p < length){
            tile12= list[p];
            p++;
        }
        if (list1[12]==0 && p < length){
            tile13= list[p];
            p++;
        }
        if (list1[13]==0 && p < length){
            tile14= list[p];
            p++;
        }
        if (list1[14]==0 && p < length){
            tile15= list[p];
            p++;
        }
        if (list1[15]==0 && p < length){
            tile16= list[p];
            p++;
        }
    }
	else if (appear < 4 && length > 0){
        appear = random(0,length);
        list[appear]= list[appear] + 4;
        var p = 0;
        if (list1[0]==0 && p < length){
            tile1 = list[p];
            p++;
        }
        if (list1[1]==0 && p < length){
            tile2= list[p];
            p++;
        }
        if (list1[2]==0 && p < length){
            tile3= list[p];
            p++;
        }
        if (list1[3]==0 && p < length){
            tile4= list[p];
            p++;
        }
        if (list1[4]==0 && p < length){
            tile5= list[p];
            p++;
        }
        if (list1[5]==0 && p < length){
            tile6= list[p];
            p++;
        }
        if (list1[6]==0 && p < length){
            tile7= list[p];
            p++;
        }
        if (list1[7]==0 && p < length){
            tile8= list[p];
            p++;
        }
        if (list1[8]==0 && p < length){
            tile9= list[p];
            p++;
        }
        if (list1[9]==0 && p < length){
            tile10= list[p];
            p++;
        }
        if (list1[10]==0 && p < length){
            tile11= list[p];
            p++;
        }
        if (list1[11]==0 && p < length){
            tile12= list[p];
            p++;
        }
        if (list1[12]==0 && p < length){
            tile13= list[p];
            p++;
        }
        if (list1[13]==0 && p < length){
            tile14= list[p];
            p++;
        }
        if (list1[14]==0 && p < length){
            tile15= list[p];
            p++;
        }
        if (list1[15]==0 && p < length){
            tile16= list[p];
            p++;
        }
    }
}
//function that prints the value of the tiles on the page
function print(){
        document.getElementById('tile1').innerHTML = tile1;
        document.getElementById('tile2').innerHTML = tile2;
        document.getElementById('tile3').innerHTML = tile3;
        document.getElementById('tile4').innerHTML = tile4;
        document.getElementById('tile5').innerHTML = tile5;
        document.getElementById('tile6').innerHTML = tile6;
        document.getElementById('tile7').innerHTML = tile7;
        document.getElementById('tile8').innerHTML = tile8;
        document.getElementById('tile9').innerHTML = tile9;
        document.getElementById('tile10').innerHTML = tile10;
        document.getElementById('tile11').innerHTML = tile11;
        document.getElementById('tile12').innerHTML = tile12;
        document.getElementById('tile13').innerHTML = tile13;
        document.getElementById('tile14').innerHTML = tile14;
        document.getElementById('tile15').innerHTML = tile15;
        document.getElementById('tile16').innerHTML = tile16;
        document.getElementById('score').innerHTML = score;
}
//depending on the direction of motion, this function creates a list for the moving algorithm and checks if movement happenned and then calls printing and adding a tile
function movement(move){
    if (move == 1){
        var list = [tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14,tile15,tile16];
    }
    if (move == 2){
        var list = [tile1,tile5,tile9,tile13,tile2,tile6,tile10,tile14,tile3,tile7,tile11,tile15,tile4,tile8,tile12,tile16];
    }
    if (move == 3){
        var list = [tile4,tile3,tile2,tile1,tile8,tile7,tile6,tile5,tile12,tile11,tile10,tile9,tile16,tile15,tile14,tile13];
    }
    if (move == 4){
        var list = [tile13, tile9, tile5, tile1, tile14, tile10, tile6, tile2, tile15, tile11, tile7, tile3, tile16, tile12, tile8, tile4];
    }
    list = moving(list);
    console.log(nothing);
    if (nothing < 4){
        if (move == 1){
    tile1= list[0];
    tile2= list[1];
    tile3= list[2];
    tile4= list[3];
    tile5= list[4];
    tile6= list[5];
    tile7= list[6];
    tile8= list[7];
    tile9= list[8];
    tile10= list[9];
    tile11= list[10];
    tile12= list[11];
    tile13= list[12];
    tile14= list[13];
    tile15= list[14];
    tile16= list[15];
    }
        if (move == 2){
    tile1 = list[0];
    tile5 = list[1];
    tile9 = list[2];
    tile13 = list[3];
    tile2 = list[4];
    tile6 = list[5];
    tile10 = list[6];
    tile14 = list[7];
    tile3 = list[8];
    tile7 = list[9];
    tile11 = list[10];
    tile15 = list[11];
    tile4 = list[12];
    tile8 = list[13];
    tile12 = list[14];
    tile16 = list[15];
    }
        if (move == 3){
    tile1= list[3];
    tile2= list[2];
    tile3= list[1];
    tile4= list[0];
    tile5= list[7];
    tile6= list[6];
    tile7= list[5];
    tile8= list[4];
    tile9= list[11];
    tile10= list[10];
    tile11= list[9];
    tile12= list[8];
    tile13= list[15];
    tile14= list[14];
    tile15= list[13];
    tile16= list[12];
    }
        if (move == 4){
    tile1 = list[3];
    tile5 = list[2];
    tile9 = list[1];
    tile13 = list[0];
    tile2 = list[7];
    tile6 = list[6];
    tile10 = list[5];
    tile14 = list[4];
    tile3 = list[11];
    tile7 = list[10];
    tile11 = list[9];
    tile15 = list[8];
    tile4 = list[15];
    tile8 = list[14];
    tile12 = list[13];
    tile16 = list[12];
    }
        add();
        color(); 
        print();
    }
    nothing = 0;
}
//algorithm to move the tiles in a certain direction and verify if movement is possible and happenned
function moving(list){
    for(var i = 0; i < 13; i = i + 4){
        if (list[i] == 0){
            if (list[i+1] == 0){
                if (list[i+2] == list[i+3] && list[i+2] != 0){
                    list[i+3] = list[i+3] * 2;
                    score = score + list[i+3];
                    list[i+2] = 0;
                }
                else if (list[i+2] != 0 && list[i+3] ==0){
                    list[i+3] = list[i+2];
                    list[i+2] = 0;
                }
                else{
                    nothing = nothing + 1;
                }
            }
            else if (list[i+3] == 0){
                list[i+3]=list[i+2];
                list[i+2]=list[i+1];
                list[i+1]=0;
                if (list[i+3]==0){
                    list[i+3]=list[i+2];
                    list[i+2]=0;
                }
                else if(list[i+3]==list[i+2]){
                    list[i+3] = list[i+3] * 2;
                    score = score + list[i+3];
                    list[i+2] = 0;
                }
            }
            else if (list[i+2] == 0){
                list[i+2]=list[i+1];
                list[i+1]=0;
                if(list[i+3]==list[i+2]){
                    list[i+3] = list[i+3] * 2;
                    score = score + list[i+3];
                    list[i+2] = 0;
                }
                
            }
            else if (list[i+2] == list[i+3]){
                list[i+3] = list[i+3] * 2;
                score = score + list[i+3];
                list[i+2] = list[i+1];
                list[i+1] = list[i];
                list[i] = 0;
            }
            else if(list[i+2] == list[i+1]){
                list[i+2] = list[i+2] * 2;
                score = score + list[i+2];
                list[i+1] = list[i];
                list[i] = 0;
            }
            else{
                  nothing = nothing + 1;
            }
        }
        else if (list[i+1] == 0){
            list[i+1]=list[i];
            list[i]=0;
            if (list[i+2] == 0) {
                list[i+2]=list[i+1];
                list[i+1]=0;
                if (list[i+3] == 0) {
                    list[i+3]=list[i+2];
                    list[i+2]=0;
                }
                else if (list[i+2] == list[i+3]) {
                    list[i+3] = list[i+3] * 2;
                    score = score + list[i+3];
                    list[i+2] = 0;
                }
            }
            else if (list[i+3] == 0) {
                list[i+3]=list[i+2];
                list[i+2]=list[i+1];
                list[i+1]=0;
                if (list[i+3]==list[i+2]) {
                    list[i+3] = list[i+3] * 2;
                    score = score + list[i+3];
                    list[i+2] = 0;
                }
            }
            else if (list[i+2] == list[i+3]) {
                list[i+3] = list[i+3] * 2;
                score = score + list[i+3];
                list[i+2] = list[i+1];
                list[i+1] = list[i];
                list[i] = 0;
            }
            else if (list[i+2] == list[i+1]) {
                list[i+2] = list[i+2] * 2;
                score = score + list[i+2];
                list[i+1] = list[i];
                list[i] = 0;
            }
        }
        else if (list[i+2] == 0){
            list[i+2] = list[i+1];
            list[i+1] = list[i];
            list[i] = 0;
            if (list[i+3] == 0) {
                list[i+3]=list[i+2];
                list[i+2]=list[i+1];
                list[i+1]=0;
                if (list[i+2] == list[i+3]) {
                    list[i+3] = list[i+3] * 2;
                    score = score + list[i+3];
                    list[i+2] = 0;
                }
            }
            else if (list[i+2] == list[i+3]) {
                list[i+3] = list[i+3] * 2;
                score = score + list[i+3];
                list[i+2] = list[i+1];
                list[i+1] = 0;
            }
            else if (list[i+2] == list[i+1]) {
                list[i+2] = list[i+2] * 2;
                score = score + list[i+2];
                list[i+1] = 0;
            }
        }
        else if (list[i+3] == 0){
            list[i+3] = list[i+2] 
            list[i+2] = list[i+1];
            list[i+1] = list[i];
            list[i] = 0;
            if (list[i+2] == list[i+3]) {
                list[i+3] = list[i+3] * 2;
                score = score + list[i+3];
                list[i+2] = list[i+1];
                list[i+1] = 0;
            }
            else if (list[i+2] == list[i+1]) {
                list[i+2] = list[i+2] * 2;
                score = score + list[i+2];
                list[i+1] = 0;
            }
        }
        else if (list[i+2] == list[i+3]){
            list[i+3] = list[i+3] * 2;
            score = score + list[i+3];
            list[i+2] = list[i+1];
            list[i+1] = list[i];
            list[i] = 0;
        }
        else if(list[i+2] == list[i+1]){
            list[i+2] = list[i+2] * 2;
            score = score + list[i+2];
            list[i+1] = list[i];
            list[i] = 0;
        }
        else if(list[i] == list[i+1]){
            list[i+1] = list[i+1] * 2;
            score = score + list[i+1];
            list[i] = 0;
        }
        else{
             nothing = nothing + 1;
        }
    }
    return list;
}
//function to give color to tile depending on their value
function color(){
    var list = [tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14,tile15,tile16];
    for(var i = 0; i < 16; i++){
        var value = list[i];
        var string1 = (i+1).toString();
        var string = "tile" + string1;
        if(value == 0){
        document.getElementById(string).style.backgroundColor="GhostWhite ";
        document.getElementById(string).style.color="GhostWhite ";
        } 
        else if(value == 2){
        document.getElementById(string).style.backgroundColor="00FFFF";
        document.getElementById(string).style.color="black";
        }
        else if(value == 4){
        document.getElementById(string).style.backgroundColor="0099FF";
        document.getElementById(string).style.color="black";
        }
        else if(value == 8){
        document.getElementById(string).style.backgroundColor="0033FF";
        document.getElementById(string).style.color="black";
        }
        else if(value == 16){
        document.getElementById(string).style.backgroundColor="0033FF";
        document.getElementById(string).style.color="white";
        }
        else if(value == 32){
        document.getElementById(string).style.backgroundColor="0033FF";
        document.getElementById(string).style.color="white";
        }
        else if(value == 64){
        document.getElementById(string).style.backgroundColor="000000";
        document.getElementById(string).style.color="white";
        }
        else if(value == 128){
        document.getElementById(string).style.backgroundColor="003300";
        document.getElementById(string).style.color="white";
        }
        else if(value == 256){
        document.getElementById(string).style.backgroundColor="009900";
        document.getElementById(string).style.color="black";
        }
        else if(value == 512){
        document.getElementById(string).style.backgroundColor="00FF00";
        document.getElementById(string).style.color="black";
        }
        else if(value == 1024){
        document.getElementById(string).style.backgroundColor="00FF66";
        document.getElementById(string).style.color="black";
        }
        else if(value == 2048){
        document.getElementById(string).style.backgroundColor="00FFFF";
        document.getElementById(string).style.color="black";
        }
        else if(value == 4096){
        document.getElementById(string).style.backgroundColor="	6699FF";
        document.getElementById(string).style.color="gray";
        }
        else if(value == 8192){
        document.getElementById(string).style.backgroundColor="	6699FF";
        document.getElementById(string).style.color="gray";
        }
        else if(value == 16384){
        document.getElementById(string).style.backgroundColor="gray";
        document.getElementById(string).style.color="gray";
        }
        else if(value == 32768){
        document.getElementById(string).style.backgroundColor="gray";
        document.getElementById(string).style.color="gray";
        }
    }
}
