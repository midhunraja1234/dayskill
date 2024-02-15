      let a=document.querySelector("#one");
      let b=document.querySelector("#two");
      let c=document.querySelector("#three");
      let d=document.querySelector("#four");
      let e=document.querySelector("#five");
      let f=document.querySelector("#six");
      let g=document.querySelector("#seven");
    let arr=[a,b,c,d,e,f,g];
    var i=0;
    let it=arr[i];
    
    function displayPrevious()
    {
        if(i>0){
            arr[i].setAttribute("hidden","");
            i--;
            it=arr[i]; 
            it.removeAttribute("hidden");  
        } 
        else alert("CLICK NEXT TO SEE THE IMAGES");
        console.log("previous button",i);
    }
    function displayNext()
    {
        if(i<arr.length-1){
            arr[i].setAttribute("hidden","");
            i++;
            it=arr[i]; 
            it.removeAttribute("hidden");   
            console.log("NEXT button",i); 
        }
        else alert("CLICK ON THE PREVIOUS BUTTON TO VIEW THE IMAGES");
    }
    // let A="MEHAN"
    // module.exports = A