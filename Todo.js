// let btn = document.querySelector("button");
// let input=document.querySelector("input");
// let ul=document.querySelector("ul");
// btn.addEventListener("click",function(){
//     let item= document.createElement("li");
//     item.innerText=input.value;

//     let dlt=document.createElement("button");
//     dlt.innerText="Delete";
//     dlt.classList.add("delete");
//     item.appendChild(dlt);
//     ul.appendChild(item);
// input.value="";
// });
// ul.addEventListener("click",function(event){
// if(event.target.nodeName=="BUTTON"){
//     let listitem=event.target.parentElement;
//     listitem.remove();
// }
// })

let h1=document.querySelector("h1");
var colors= ['Red','Green','Orange','Grey'];
var currentIndex = 0;
        
        function changeColor() {
            h1.style.color = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
            setTimeout(changeColor, 1000); 
        }
        
       
        changeColor();
      

        let inp=document.querySelector("input");
        let ul=document.querySelector("ul");
        let btn=document.querySelector("button");
        btn.addEventListener("click",function(){
          console.log("click");
          if(inp.value==""||inp.value=="/"){
            alert("Please add valid task");
          }
          else{
          let item=document.createElement("li");
          item.innerText=inp.value;
          ul.appendChild(item);
          let dltbtn=document.createElement("button");
          dltbtn.innerText="Delete"
          dltbtn.classList.add("delete");
          item.appendChild(dltbtn);
          inp.value=""}
        });
        ul.addEventListener("click",function(event){
            if(event.target.nodeName=="BUTTON"){
                let list= event.target.parentElement;
                list.remove();
               
                setTimeout(() => {
                    alert("Your task is successfully deleted!");
                }, 1000);
            }
        })