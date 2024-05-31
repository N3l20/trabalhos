let money=0
let txtm= document.createElement('p')
let c=0
let op=[]
let prod={}
txtm.innerHTML=money+' €'
document.body.querySelector('main').appendChild(txtm)

document.querySelector('#clicker').addEventListener('click', click)


function click(){
    money++
    txtm.innerHTML=money+" €"
}

class Product{
    constructor(name, price){
        this.name=name
        this.price=price
    }

    display(){
        let wrap= document.createElement('div')
        let txtn=document.createElement('h1')
        let txtp=document.createElement('p')
        let btn=document.createElement('input')
        let close=document.createElement('span')

        let tp= document.createAttribute('type')
        let vl= document.createAttribute('value')
        let css=document.createAttribute('class')
        let id=document.createAttribute('id')
        let css2=document.createAttribute('class')
        let click=document.createAttribute('onclick')
        let click2=document.createAttribute('onclick')
        

        css.value='wrap-product'
        id.value='wrap-'+ this.name
        css2.value='btn'
        vl.value='Buy'
        tp.value='button'
        click.value=`prod[${c}].buy()`
        click2.value=`prod[${c}].delete()`

        wrap.setAttributeNode(css)
        wrap.setAttributeNode(id)
        btn.setAttributeNode(vl)
        btn.setAttributeNode(tp)
        btn.setAttributeNode(css2)
        btn.setAttributeNode(click)
        close.setAttributeNode(click2)

        txtn.innerHTML=this.name
        txtp.innerHTML=this.price+' €'
        close.innerHTML='X'
        document.body.querySelector('main').appendChild(wrap)

        wrap.appendChild(txtn)
        wrap.appendChild(txtp)
        wrap.appendChild(btn)
        wrap.appendChild(close)
        c++
    }

    buy(){
        if(money>=this.price){
            money-=this.price
            txtm.innerHTML=money+" €"

            let list=document.querySelector('#list')
            op[c]=document.createElement('option')
            op[c].innerHTML=this.name
            list.appendChild(op[c])
            console.log=op[c]
        }else{
            alert(`You don't have enough money`)
            throw new Error(`You don't have enough money`)
        }
    }

    delete(){
        document.getElementById('wrap-'+ this.name).remove()
    }
}

function create(name, price){
    prod[c]= new Product(name, price)
    prod[c].display()
}