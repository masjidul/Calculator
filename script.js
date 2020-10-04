class Calculator {
    constructor(previousOperandTxtElement,currentOperandTxtElement) {
    this.previousOperandTxtElement = previousOperandTxtElement
    this.currentOperandTxtElement = currentOperandTxtElement
    this.clear()
    }     
clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
    }
delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}
appendNum(number){
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}
chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

compute(){
    let computation 
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch(this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '/':
            computation = prev / current
            break     
        default:
            return      
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}
getDisplayNumber(number){
    return number
}
updateDisplay(){
    this.currentOperandTxtElement.innerText = 
    this.getDisplayNumber(this.currentOperand)
    if(this.operation != null) {
     this.previousOperandTxtElement.innerText = 
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }
  }
}


const numberButtons = document.querySelectorAll('[data-num]')
const equalsButton = document.querySelector('[data-equals]')
const operationButton = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTxtElement = document.querySelector('[data-previous-operand]')
const currentOperandTxtElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTxtElement, currentOperandTxtElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
        
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
        
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})