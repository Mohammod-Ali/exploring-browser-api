const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        alert('hi chunu punu, How are you')

    }
}

const askSomething = () =>{
    const decision = confirm('Are you coming to picnic')
    console.log(decision)
    if(decision === true){
        alert('dost 500 tk chada de')
    }else{
        console.log('DGM !!!  Dure Giye Mor')
    }
}

const getUserInfo = () =>{
    const name = prompt('What is your name')
    console.log(name)
}