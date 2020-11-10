//找到switch元素
let swch = document.getElementById('switch');
// var imgs = document.getElementById('img');
//绑定点击事件
swch.addEventListener ("click",(e)=>{
    

    //可以实用切换  toggle 是jqery中响应被选元素的 click 事件之间的切换
    // swch.classList.toggle('switched');

    //为后期留预备空间使用循环
    //contains为jqery判断指定元素内是否包含另一个元素
    if(swch.classList.contains('switched')){

        // 删除样式
        swch.classList.remove('switched');

    }else{
        // 增加样式
        swch.classList.add("switched");
        // alert("开启快乐每一天");
    }
})

