let number =document.getElementById('number');
let buttons=document.querySelectorAll('button');
let string=""
let arr=Array.from(buttons);
arr.forEach(buttons=>{
  buttons.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="="){
   string=eval(string);
   number.value=string;
    }
    else if(e.target.innerHTML=="AC"){
      string="";
      number.value=string;

    }
    else if (e.target.innerHTML=="DEL") {
     string=string.substring(0,string.length-1);
      number.value=string;
    }
    else{
      string += e.target.innerHTML;
      number.value = string
    }
       
  })
})