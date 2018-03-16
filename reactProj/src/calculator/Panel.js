import React,{Component} from 'react'
import './panel.css'

function Cell(props) {
    return <button value={props.value} className={props.klass?props.klass+" cell":"cell"} >{props.value}</button>
}

class Panel extends Component  {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const input = e.target.value;
        this.props.handleClick(input);
    }
    render() {
        return(
            <div onClick={this.handleClick} className="panel clearfix">
                <Cell value="AC" />
                <Cell value="+/-" />
                <Cell value="%" />
                <Cell klass="yellow" value="÷" />
                <Cell value="7" />
                <Cell value="8" />
                <Cell value="9" />
                <Cell klass="yellow" value="x" />
                <Cell value="4" />
                <Cell value="5" />
                <Cell value="6" />
                <Cell klass="yellow" value="-" />
                <Cell value="1" />
                <Cell value="2" />
                <Cell value="3" />
                <Cell klass="yellow" value="+" />
                <Cell klass="width50" value="0" />
                <Cell value="." />
                <Cell klass="yellow" value="=" />
            </div>
        )
    }
}

export default Panel