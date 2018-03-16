import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import ViewValue from './ViewValue'
import Panel from './Panel'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.inputType = this.inputType.bind(this);
        this.calculate = this.calculate.bind(this);
        this.toggleNeg = this.toggleNeg.bind(this);
        this.changeNeg = this.changeNeg.bind(this);
        this.state = {
            viewValue: 0,
            num1: '0',
            num2: '0',
            operator: '',
        }
    }
    toggleNeg(numStr) {
        const num = Number(numStr);
        const toggledNum = num < 0 ? (numStr.slice(1)) : ("-" + numStr);
        return toggledNum;
    }

    changeNeg(num1, num2) {
        if (num2) {
            const swapNum2 = this.toggleNeg(num2);
            this.setState({
                viewValue: swapNum2,
                num2: swapNum2,
            })
        } else if (num1) {
            const swapNum1 = this.toggleNeg(num1);
            this.setState({
                viewValue: swapNum1,
                num1: swapNum1,
            })
        }
        return;
    }

    handleDot(input, num1, num2, operator) {
        const reg = /\./g;
        if (operator && !reg.test(num2)) {
            this.setState({
                viewValue: num2 + input,
                num2: num2 + input,
            })
        } else if (!reg.test(num1)) {
            this.setState({
                viewValue: num1 + input,
                num1: num1 + input,
            })
        }
        return;
    }


    inputType(input, state) {
        const { viewValue, num1, num2, operator } = state;
        if (input === "AC") {
            this.setState({
                viewValue: 0,
                num1: '',
                num2: '',
                operator: '',
            })
            return;
        } else if (input === "+/-") {
            this.changeNeg(num1, num2);
        } else if (/\d/.test(Number(input))) {
            if (!operator) {
                this.setState({
                    viewValue: num1 + input,
                    num1: num1 + input,
                });
                return;
            }
            this.setState({
                viewValue: num2 + input,
                num2: num2 + input,
            });
        } else if (/[%÷x+-]/.test(input)) {
            this.setState({
                operator: input
            })
            console.log(input)
        } else if (input === ".") {
            this.handleDot(input, num1, num2, operator);
        } else if (input === "=") {
            this.calculate(num1,num2,operator);
        }
    }

    calculate(numIpt1,numIpt2,operator) {
        if (numIpt1 && numIpt1 && operator) {
            const num1 = Number(numIpt1);
            const num2 = Number(numIpt2);
            switch (operator) {
                case "%":
                    const result1 = (num1 % num2).toString();
                    this.setState({
                        viewValue: result1,
                        num1: result1,
                        num2: '',
                        operator: '',
                    })
                    break;
                case "÷":
                    const result2 = (num1 / num2).toString();
                    this.setState({
                        viewValue: result2,
                        num1: result2,
                        num2: '',
                        operator: '',
                    })
                    break;
                case "x":
                    const result3 = (num1 * num2).toString();
                    this.setState({
                        viewValue: result3,
                        num1: result3,
                        num2: '',
                        operator: '',
                    })
                    break;
                case "-":
                    const result4 = (num1 - num2).toString();
                    this.setState({
                        viewValue: result4,
                        num1: result4,
                        num2: '',
                        operator: '',
                    })
                    break;
                case "+":
                    const result5 = (num1 + num2).toString();
                    this.setState({
                        viewValue: result5,
                        num1: result5,
                        num2: '',
                        operator: '',
                    })
                    break;
            }
        }
    }

    handleClick(value) {
        this.inputType(value, this.state);
    }
    render() {
        const { viewValue, handleClick } = this.state;
        return (
            <div>
                <ViewValue value={viewValue} />
                <Panel handleClick={this.handleClick} />
            </div>
        )
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
)