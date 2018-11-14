
let score=0;
var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
  }
var result = generateRandom(0, 9);
document.getElementById('div'+result).classList.add('black');
let i=0;
tap();
function tap(){
    document.getElementsByClassName('black').item(0).onclick=function(){
        console.log(this);
        this.classList.remove('black');
        var result = generateRandom(0, 9);
        document.getElementById('div'+result).classList.add('black');
        i++;
        delete this;
        tap();
        document.getElementById("result").innerHTML=i;
    }
  }