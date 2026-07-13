


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

    function edititem(index,newtext){
        items[index]=newtext;
        localStorage.setItem("nicegood",JSON.stringify(items));
    }
    function readerlist(){
        output.innerHTML=items.map(function(thing,index){
            return `
            <div class="item-row">
            <h3 contenteditable="true" onblur="edititem(${index},this.innerText)">${thing}</h3>
            <button class ="delbut" onclick="deleteitem(${index})" >-</button>
            </div>`;
          

        }).join("");
    }
        

    

    readerlist();