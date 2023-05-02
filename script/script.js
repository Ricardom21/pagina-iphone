const aside= document.getElementById('aside'),
menu=document.getElementById('menu')

menu.onclick=()=>{
    console.log("LE DISTE CLICK")
    aside.classList.toggle('active');
}