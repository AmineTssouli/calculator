
function compute(number1,number2,operator){
    result = 0
    switch(operator) {
        case  "+":
          result = number1+number2 
          break;
        case  "*":
          result = number1*number2
          break;
        case  "-":
            result = number1-number2
          break;
        case  "/":
            result = number1/number2
          break;
}
  return result
}
function increment(field) {
    
    document.getElementById(field).value = Number(document.getElementById(field).value) + 1
}

function decrement(field) {

    document.getElementById(field).value = Number(document.getElementById(field).value) - 1
}
function display() {

    number1 = Number(document.getElementById("firstValue").value)
    number2 = Number(document.getElementById("secondValue").value)
    operator = document.getElementById("operator-1").value
    result = compute(number1,number2,operator)
    document.getElementById("result").innerHTML=  "Result is "+ result

}


function display2() {

    number1 = Number(document.getElementById("firstValue2").value)
    number2 = Number(document.getElementById("secondValue2").value)
    radiobuttons = document.querySelectorAll('input[name="operator-2"]')
    
    let operator;
    for (const rb of radiobuttons) {
        if (rb.checked) {
            operator = rb.value;
            break;
        }
    }
    result = compute(number1,number2,operator)
    document.getElementById("result2").innerHTML=  "Result is "+ result

}
function display3() {

    number1 = Number(document.getElementById("firstValue3").value)
    number2 = Number(document.getElementById("secondValue3").value)
    operator = document.getElementById("operator-3").value
    result = compute(number1,number2,operator)
    document.getElementById("result3").innerHTML=  "Result is "+ result

}