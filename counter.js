let countEL=document.getElementById("count-el")
let count =0
let saveEL=document.getElementById("save-el")

function increment(){
count+=1
countEL.innerText=count
}

function save(){
    let countstr=count+" - "

    saveEL.textContent=countstr

     countEL.innerHTML = 0
     count=0
}