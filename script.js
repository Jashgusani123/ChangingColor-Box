let main = document.querySelector("#main");
for (let i = 0; i < 300; i++) {
    let div = document.createElement("div");
    div.classList.add("alldiv");
    div.style.backgroundColor = color();
    div.innerText = color();
    div.addEventListener("click",function (){
      alert("Copied to clipboard");
    })
    main.appendChild(div);
}

function color(){
   let arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
   let color = [];
   let r = "#";
   for(let i = 0 ; i < 6 ; i++){
    color.push(Math.floor(Math.random()*16));
    }
    for(let j =0 ; j<6 ; j++){
        r+= arr[color[j]];

    }
  return r;
}