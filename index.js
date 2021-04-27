const switchbtn = document.getElementById('switch');
const display = document.getElementById('display');
const input = document.getElementById('input');
let value = '';
switchbtn.addEventListener('click', ()=>{
    if(switchbtn.checked == true){
        document.body.setAttribute('data-theme', 'dark');
    }
    else{
        document.body.setAttribute('data-theme', '');
    }
});
input.forEach((e) => {
    e.addEventListener("click", (event)=>{
        if(event.target.value == "="){
            if(value.length !=0){
                value = newval;
                display.value = value;
            }
        }else if(event.target.value == 'C'){
            value = '';
            display.value = value;
        }else if(event.target.value == "switch"){
        }else{
            value += event.target.value;
            display.value = value;
        }

        if(!event.target.classList.contains("switch")){
            event.target.classList.add("active");
            setTimeout(()=>{
                event.target.classlist.remove("active");
            },400);
        }
    });
});