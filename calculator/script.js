console.log("HEllo");
let string="";
let buttons=document.querySelectorAll('.btn');
console.log(buttons[0]);const paragraph = document.querySelector("input");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            
            paragraph.setAttribute(
            "style",
            "color:blue; font-size: 30px; font-weight:bold;"
            );
            string=eval(string);
            document.querySelector('input').value=string; 
            // Removing the attribute
            // paragraph.removeAttribute("style");
        }
        else if(e.target.innerHTML=='AC'){
            string='';
            paragraph.removeAttribute("style");
            document.querySelector('input').value=string;
            document.getElementById('input').innerHTML=string;
        }
        else if(e.target.innerHTML=='C'){
            paragraph.removeAttribute("style");

            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;
        }
        else{
            paragraph.removeAttribute("style");
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})

