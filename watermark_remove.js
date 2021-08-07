document.addEventListener('DOMContentLoaded', (event) => {
    console.log("I am ready");
    
   let inter=setInterval(()=>{
        if( document.getElementsByClassName("w-webflow-badge").length!=0)
        {
        document.getElementsByClassName("w-webflow-badge")[0].remove();
        console.log("Gone Boom!!!!");
        clearInterval(inter);
        }else{}
    },1000);
  })