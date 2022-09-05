console.log('hejsa')
let hvalDiv = document.querySelector('#endpoints')


document.querySelector('#h21').addEventListener('click', ()=>{
    if(hvalDiv.style.top == '90vh'){
        hvalDiv.style.top = 0;
    }else{
        hvalDiv.style.top = '90vh';
    }

})

document.querySelector('#h22').addEventListener('click', ()=>{
    if(hvalDiv.style.top == '90vh'){
        hvalDiv.style.top = 0;
    }else{
        hvalDiv.style.top = '90vh';
    }

})

document.querySelector('#submitH').addEventListener('click', ()=>{
    fetch('http://localhost:4040/api/hvaler')
        .then(res => res.json())
            .then(json => document.querySelector('#hvaler .json').innerHTML = JSON.stringify(json))
})

document.querySelector('#submitKK').addEventListener('click', ()=>{
    fetch('http://localhost:4040/api/kagerOgKatte')
        .then(res => res.json())
            .then(json => document.querySelector('#kagerOgKatte .json').innerHTML = JSON.stringify(json))
})