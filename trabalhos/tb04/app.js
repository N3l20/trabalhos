
let tm='light'

function theme(){
    if (tm=='light'){
        document.body.style.backgroundColor='#1E143F'
        document.body.style.color='white'
        document.body.querySelector('#btn-theme').innerHTML=''
        var icon = document.createElement("box-icon");
        var name = document.createAttribute("name");
        var color = document.createAttribute("color");
        var type = document.createAttribute("type");
        name.value="moon";
        color.value="#ffffff";
        type.value="solid";
        icon.setAttributeNode(name);
        icon.setAttributeNode(color);
        icon.setAttributeNode(type);
        document.body.querySelector('#btn-theme').appendChild(icon);
        tm='dark'
    }else if(tm=='dark'){
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        document.body.querySelector('#btn-theme').innerHTML=''
        var icon = document.createElement("box-icon");
        var name = document.createAttribute("name");
        var color = document.createAttribute("color");
        var type = document.createAttribute("type");
        name.value="sun";
        color.value="#ffffff";
        type.value="solid";
        icon.setAttributeNode(name);
        icon.setAttributeNode(color);
        icon.setAttributeNode(type);
        document.body.querySelector('#btn-theme').appendChild(icon);
        tm='dark'
        tm='light'
    }else{
        throw new Error('ERRO')
    }
}

