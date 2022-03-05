
let btn = document.getElementById('btn')
let finalText = document.getElementById('textI')



btn.addEventListener('click', function(){
    let first = document.getElementById('firstInput').value
    let second = document.getElementById('secondInput').value

    let result = (second * 703) / (first * first);
    result = Math.round(result);
    finalText.innerHTML = 'Your BMI is: ' + result;

})