let userInput = document.getElementById('date')
//impede que se selecione datas no futuro
//userInput.max = new Date().toISOString().split('T')[0]
let today = new Date()

let toDay = today.getDate()
let todayMonth = today.getMonth() + 1
let todayYear = today.getFullYear()

const validate = () =>{
    let birthday = document.getElementById('birthday').value
    let  birthdayDate = new Date(birthday)
    console.log(birthdayDate)

    let birthDay = birthdayDate.getDate() + 1
    let birthMonth = birthdayDate.getMonth() + 1
    let birthYear = birthdayDate.getFullYear()

    if(!birthDay || !birthMonth || !birthYear){
        alert('Enter a valid date!')
    } else if( birthYear > todayYear){
        alert('The year should be in the past!')
    } else {
        //diferença
        calcularIdade(birthDay, birthMonth, birthYear)
    }
}

const btn = document.getElementById('btn')
btn.addEventListener('click', validate)

const calcularIdade = (birthDay, birthMonth, birthYear) =>{
    //diferença

    let ageYear = todayYear - birthYear
    
    if(todayMonth >= birthMonth){
        //significa que já fez anos 
        ageMonth = todayMonth - birthMonth
    } else {
        ageYear--
        ageMonth = 12 + todayMonth - birthMonth
    }

    if(toDay >= birthDay){
        ageDay = toDay - birthDay
    }else{
        ageMonth--
        ageDay = getDaysInMonth(birthYear, birthMonth) + toDay - birthDay
        
    }

    if(ageMonth < 0){
        ageMonth = 11
        ageYear--
    }

    function getDaysInMonth(year, month){
        //vai returnar o ultimo dia do mes - o dia do mes
        return new Date(year, month, 0).getDate()
    }

    exibeIdade(ageYear, 0)
    exibeIdade(ageMonth, 1)
    exibeIdade(ageDay, 2)
}

var dataNascimento = ['ageYear', 'ageMonth', 'ageDay']

const exibeIdade = (data, index) =>{
    let numeros = []

    for(var i = 1; i <= data; i++){
        numeros.push(i)
    }

    numeros.forEach((numero) => {
        setTimeout(() => {
            document.querySelector(`.${dataNascimento[index]}`).innerHTML = numero
        }, 75 * numero)
    })
}

