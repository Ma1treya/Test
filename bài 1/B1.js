function dieukien(a,b){   
    if (a<= 0 || b <= 0) {
       alert('Không âm')
        return false
    } 
    if(a >= b ){
        alert('a < b')
        return false
    }
    return true 
}
function soNT(a){
    for( let i= 2 ; i < a ; i++){
        if(a%i == 0 ) return false
    } return true
}
function tinhtongsonguyento(a,b){
     a = Number(a)
     b = Number(b)
    let sum = 0; 
    if(dieukien(a,b)){
    for(let i = a ; i < b ; i++){
        if(i == 1 || i == 2|| soNT(i)){
            sum += i
        }
    }
}return sum
}


const a = document.getElementById('numberA')
const b = document.getElementById('numberB')
const btn = document.getElementById('btn')
const result = document.getElementById('result')


btn.onclick = () => {
   const sum = tinhtongsonguyento(a.value,b.value)
   result.innerHTML=`<strong>Result: </strong>${sum}`
}
