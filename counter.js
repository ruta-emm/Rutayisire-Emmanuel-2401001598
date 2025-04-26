function counter(){

    let count =0;
    return function(){
        count ++;
        document.getElementById('counter').innerHTML=count;
    }
   
}
const kount=counter();
setInterval(kount,1000)
