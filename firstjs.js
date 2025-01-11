//公共留言栏
const liuyanlaninput=document.querySelector(".liuyanlaninput");
const liuyanlanul=document.querySelector(".liuyanlanul");
function liuyanlanf1()
{
    if(liuyanlaninput.value==="")
    {
        return;
    }
    const newli= document.createElement('li');
    newli.textContent=liuyanlaninput.value;
    liuyanlanul.append(newli);
    liuyanlaninput.value=""; 
}
function liuyanlanf2(e)
{
    if(e.key==="Enter")
    {
        liuyanlanf1();
    }
}
liuyanlaninput.addEventListener("keyup",liuyanlanf2);