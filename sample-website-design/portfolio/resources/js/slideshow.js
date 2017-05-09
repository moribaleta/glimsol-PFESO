function setCurrent(count){
    console.log(count);
    sessionStorage.setItem('current',count);
}
function getCurrent(){
    return sessionStorage.getItem('current');
}