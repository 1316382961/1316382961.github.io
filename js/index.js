//轮播 每3秒自动
window.onload=function(){
    (imgs());
    setInterval(imgs,3000);
   
}
 alert('仅供学习交流');
//定义一个索引为0
let index =0 ;
//定义一个函数 图片轮播
function imgs(){
    //获取id i 
    var img = document.getElementById('i');
    // 索引自增
     index++;
     //如果 索引大于5时 索引为1
       if(index>5){
        index = 1;
        };
        //图片的路径等于索引自增
     img.src ="./img/"+index+".jpg";
     //获取ul 的id
    var uls =document.getElementById('point');
    //获取 li 的id
    var lis =uls.getElementsByTagName('li');
      //封装 switch
function switchif(){
    // 判断index 
    switch(index){
        case 1 : bgCor(lis[0],"#ee1d24")
        break;
        case 2 : bgCor(lis[1],"#ee1d24")
        break; 
        case 3 : bgCor(lis[2],"#ee1d24")
        break;
        case 4 : bgCor(lis[3],"#ee1d24")
        break;
        case 5 : bgCor(lis[4],"#ee1d24")
        break;
    };
   }
   switchif();


 function ifelse(){
    if(index != 1) {bgCor(lis[0],"rgba(255, 255, 255, 0.3)")};
    if(index != 2) {bgCor(lis[1],"rgba(255, 255, 255, 0.3)")};
    if(index != 3) {bgCor(lis[2],"rgba(255, 255, 255, 0.3)")};
    if(index != 4) {bgCor(lis[3],"rgba(255, 255, 255, 0.3)")};
    if(index != 5) {bgCor(lis[4],"rgba(255, 255, 255, 0.3)")};
} 
ifelse();

function bgCor(name,colors){
        name.style.backgroundColor = colors;
}

function switchonct(){
       switch(index){
        case 5 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/7.html");history()};
        break;
        case 1 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/3.html");history()};
        break;
        case 2 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/8.html");history()};
        break;
        case 3 :img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/0.html");history()};
        break;
        case 4: img.onclick =function(){window.open("https://www.bizhizu.cn/photoview/27492/1.html");history()};
        break;
    };
}
switchonct();

function history(){
    window.history.back(-1);
}


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
  //获取下一页的id
let next =document.getElementById('next');
//获取上一页的id
let previous =document.getElementById('previous');
//获取序章的id
var prologues =document.getElementById('prologues');
//获取 X 的id
var X =document.getElementById('X');
//获取BU的id
var BU = document.getElementById('BU');
//获取CT的id
var CT = document.getElementById('CT');
//获取TCM的id
var TZM = document.getElementById('TZM');
//获取WR的id
var WR = document.getElementById('WR');

disp(previous,"none");
var onIndex = 0;
if(onIndex=0){
   disp(previous,"none");

}
var text =[prologues,X,BU,CT,TZM,WR];
disp(text[0],"block");
next.onclick =function(){
    onIndex++;
    disp(previous,"block");
    if(onIndex>5){
        onIndex = 0;
        if(text[0].style.display ="block"){
            disp(text[1],"none");
            disp(text[2],"none");
            disp(text[3],"none");
            disp(text[4],"none");
            disp(text[5],"none");
            disp(previous,"none");
}
    }
        OnIde();
 
}
previous.onclick =function(){
    onIndex--;
    OnIde();
}

function disp(name,none){
        name.style.display = none;
}
function OnIde(){
    switch(onIndex){
        case 0:  setTimeout(function(){disp(prologues,"block");disp(BU,"none");disp(CT,"none");disp(X,"none");disp(TZM,"none");disp(WR,"none"); disp(previous,"none");},300);
        break;
        case 1:  setTimeout(function(){disp(prologues,"none");disp(X,"block");disp(BU,"none");disp(CT,"none");disp(TZM,"none");disp(WR,"none");},300);
        break;
        case 2:  setTimeout(function(){disp(X,"none");disp(prologues,"none");disp(BU,"block");disp(CT,"none");disp(TZM,"none");disp(WR,"none");},300);
        break;
        case 3:  setTimeout(function(){disp(X,"none");disp(prologues,"none");disp(BU,"none");disp(CT,"block");disp(TZM,"none");disp(WR,"none");},300);
        break;
        case 4:  setTimeout(function(){disp(X,"none");disp(prologues,"none");disp(BU,"none");disp(CT,"none");disp(TZM,"block");disp(WR,"none");},300);
        break;
        case 5:  setTimeout(function(){disp(X,"none");disp(prologues,"none");disp(BU,"none");disp(CT,"none");disp(TZM,"none");disp(WR,"block");},300);
        break;
    }
   }
