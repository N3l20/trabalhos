let tela= document.querySelector('#tela')
let op=undefined


function bteq(){
    let n2= Number(tela.innerHTML)
    
    if (op==1){
        globalThis.res=n1+n2
        
    }

    if (op==2){
        globalThis.res=n1-n2
        
    }

    if (op==3){
        globalThis.res=n1*n2
        
    }

    if (op==4){
        globalThis.res=n1/n2
        
    }

    tela.innerHTML= res
}

function btc(){
    tela.innerHTML=''
}

function btplus(){
    globalThis.n1= Number(tela.innerHTML)
    tela.innerHTML=''
    op=1
}

function btmin(){
    globalThis.n1= Number(tela.innerHTML)
    tela.innerHTML=''
    op=2
}

function btx(){
    globalThis.n1= Number(tela.innerHTML)
    tela.innerHTML=''
    op=3
}

function btdiv(){
    globalThis.n1= Number(tela.innerHTML)
    tela.innerHTML=''
    op=4
}

function bt1(){
    let bt=document.querySelector('#btn1')
    
    tela.innerHTML+=bt.value
}

function bt2(){
    let bt=document.querySelector('#btn2')
    
    tela.innerHTML+=bt.value
}

function bt3(){
    let bt=document.querySelector('#btn3')
    
    tela.innerHTML+=bt.value
}

function bt4(){
    let bt=document.querySelector('#btn4')
    
    tela.innerHTML+=bt.value
}

function bt5(){
    let bt=document.querySelector('#btn5')
    
    tela.innerHTML+=bt.value
}

function bt6(){
    let bt=document.querySelector('#btn6')
    
    tela.innerHTML+=bt.value
}

function bt7(){
    let bt=document.querySelector('#btn7')
    
    tela.innerHTML+=bt.value
}

function bt8(){
    let bt=document.querySelector('#btn8')
    
    tela.innerHTML+=bt.value
}

function bt9(){
    let bt=document.querySelector('#btn9')
    
    tela.innerHTML+=bt.value
}

function bt0(){
    let bt=document.querySelector('#btn0')
    
    tela.innerHTML+=bt.value
}