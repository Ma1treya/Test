N = Number(prompt('Nhap so'));
function so(length){
    let line ="";
    for (let j=1; j<=length;j++){
        line+='*';
    }
    return line + "\n";
}

function numberOneTriangle(N){
    let triangle ="";
    for (i=1; i<=N;i++){
        triangle += so(i);
    }
    return triangle + "\n";
}
if(N<1 || N>10){
    alert('Khong Dung du kien')
} else {
    document.getElementById('ve-sao').innerHTML= `${numberOneTriangle(N)}`
}