
getDisplayNumber(number){
    const stringNumber = number.toString()
    const intDigits = parseFloat(stringNumber.spilt('.')[0])
    const decDigits = stringNumber.spilt('.')[1]
    let intDisplay
 if(isNaN(intDigits)) {
 intDisplay = '' 
} else {
     intDisplay = intDigits.toLocaleString('en', {
         maximumFractionDigits: 0 })
 }
 if (decDigits != null){
     return `${intDisplay}.${decDigits}`
 } else {
     return intDisplay
 }
}
updateDisplay(){
    this.currentOperandTxtElement.innerText = 
    this.getDisplayNumber(this.currentOperand)
    if(this.operation != null) {
     this.previousOperandTxtElement.innerText = 
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
    this.previousOperandTxtElement.innerText = ''
    }
  }