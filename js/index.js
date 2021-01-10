//轮播
window.onload=function(){
    (imgs());
    setInterval(imgs,3000);
    // alert('仅供学习交流,部分功能未开发');
}
let index =0 ;
function imgs(){
    var img = document.getElementById('i');
     index++;
       if(index>5){
        index = 1;
        };
     img.src ="./img/"+index+".jpg";
    var uls =document.getElementById('point');
    var lis =uls.getElementsByTagName('li');

    //  console.log(index);
function switchif(){
    switch(index){
        case 1 : lis[0].style.backgroundColor ="#ee1d24"; 
        break;
        case 2 : lis[1].style.backgroundColor ="#ee1d24";
        break; 
        case 3 : lis[2].style.backgroundColor ="#ee1d24";
        break;
        case 4 : lis[3].style.backgroundColor ="#ee1d24";
        break;
        case 5 : lis[4].style.backgroundColor ="#ee1d24";
        break;
    };
   }
   switchif();


 function ifelse(){
    if(index != 1) {lis[0].style.backgroundColor ="rgba(255, 255, 255, 0.3)"};
    if(index != 2) {lis[1].style.backgroundColor ="rgba(255, 255, 255, 0.3)"};
    if(index != 3) {lis[2].style.backgroundColor ="rgba(255, 255, 255, 0.3)"};
    if(index != 4) {lis[3].style.backgroundColor ="rgba(255, 255, 255, 0.3)"};
    if(index != 5) {lis[4].style.backgroundColor ="rgba(255, 255, 255, 0.3)"};
} 
ifelse();

function switchonct(){
       switch(index){
        case 5 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/7.html");window.history.back(-1);};
        break;
        case 1 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/3.html");window.history.back(-1);};
        break;
        case 2 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/8.html");window.history.back(-1);};
        break;
        case 3 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/0.html");window.history.back(-1);};
        break;
        case 4: img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/1.html");window.history.back(-1);};
        break;
    };
}
switchonct();

    let item;
    for(var i=0; i<lis.length; i++){
            lis[i].item =i+1;
            lis[i].onclick=function(){
            img.src ="./img/"+this.item+".jpg";
            lis[this.item-1].style.backgroundColor ="#ee1d24";
            index = this.item;
            ifelse();
            switchonct();       
      }

  
}


}
function cooperation(){
    alert("请留言");
};
function J(){
    alert('您现在用的就是中文简体');
};
function En() {
    alert('抱歉,暂未开发');
}
function R() {
    alert('抱歉,暂未开发');
}
function S() {
    alert('抱歉,暂未开发');
}
  
let next =document.getElementById('next');
next.onclick =function(){
    let prologues =document.getElementById('prologues');
    // console.log(prologues);
    setTimeout(function(){
          let X =document.getElementById('X');
    // prologues.attr("id","X");
    prologues.style.display ="none";
    X.style.display ="block";
    },500)
  
}
let previous =document.getElementById('previous');
previous.onclick =function(){
    let prologues =document.getElementById('prologues');
    // console.log(prologues);
    setTimeout(function(){
          let X =document.getElementById('X');
    // prologues.attr("id","X");
    X.style.display ="none";
    prologues.style.display ="block";
    },500)
  
}



