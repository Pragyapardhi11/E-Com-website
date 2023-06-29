console.log("this is my script");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamergun').addEventListener('click',()=>{
document.querySelector('.sidebar').classList.toggle('.sidebarGo');
if(document.querySelector('.sidebar').classList.contains('.sidebarGo')){
    document.querySelector('.navi').style.display='inline'
    document.querySelector('.cross').style.display='none'

}
else{
    document.querySelector('.navi').style.display='none'
    document.querySelector('.cross').style.display='inline'
}
})



