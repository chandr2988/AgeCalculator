const date = new Date()
var y = date.getFullYear()
var m = date.getMonth()
var d = date.getUTCDate()
console.log(d)
var year,month,day
function readd(event){
    day=event.target.value
}
function readm(event){
    month=event.target.value
}
function ready(event){
    year=event.target.value  
}

function age(){ 
    document.getElementById("displayage").innerHTML = Math.abs(year-y) + " years  " + Math.abs(month-m) + " Months and  " + Math.abs(day-d)+ " days old"
}