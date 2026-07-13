


let items = JSON.parse(localStorage.getItem("nicegood")) || [];

 const inputElem1=document.getElementById("userinput1");
 const output=document.getElementById("useroutput");
 
 window.addEventListener('keydown',function(event){
        if(event.key=='Enter'){
            

            event.preventDefault();

            handleInput();
            // handleOutput();
            
        }
    });
    function handleInput(){

        const txt=inputElem1.value.trim();
        if(txt==="")
        {
            return ;
        }
        items.push(txt);

        localStorage.setItem("nicegood",JSON.stringify(items));
        inputElem1.value="";
        readerlist();



    }
    function deleteitem(index){

        items.splice(index,1);
        localStorage.setItem("nicegood",JSON.stringify(items));
        readerlist();
    }

    function readerlist(){
        output.innerHTML=items.map(function(thing,index){
            return `
            <div class="item-row">
            <h3>${thing}</h3>
            <button class ="delbut" onclick="deleteitem(${index})">-</button>
            </div>`;

        }).join("");
    }
            // <button class ="delete-btn" onclick="deleteitem(${index})">x</button>  
    

    readerlist();