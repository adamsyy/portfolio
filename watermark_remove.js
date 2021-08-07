document.addEventListener('DOMContentLoaded', (event) => {
    console.log("I am ready");

    setInterval(()=>{
        if( document.getElementsByClassName("w-webflow-badge").length!=0)
        {
        document.getElementsByClassName("w-webflow-badge")[0].remove();
        console.log("Gone Boom!!!!");
        }else{}
    },0.1);
  }) 