import React,{ Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.addChessman = this.addChessman.bind(this);
    }
    addChessman(e) {
        const target = e.target
        this.props.changeTopStage();
        target.innerHTML = this.props.stateObj.arr[this.props.stateObj.times]
    }
    componentDidMount() {
        console.log(this.props.stateObj,111111111)
    }
    render() {
        const styleObj = {
            display:'inline-block',
            border:'1px solid #999',
            width:'40px',
            height:'40px',
            lineHeight:'40px',
            textAlign:'center',
            fontSize:'30px',
            WebkitAppearance: 'button',
            marginRight: '-1px',
            marginTop: '-1px',
            background: '#fff',
            outline:'none',
            boxSize:'border-box',
            float:'left',
        }
        return (
            <button style={styleObj} onClick={this.addChessman}>
                {this.props.content}
            </button>
        )
    }
}

class Board extends Component {
    constructor(props) {
        super(props);       
    }
    componentDidMount() {
        console.log(this.props.stateObj)
    }     
    render() {
        const styleObj = {
            display:'inline-block',
            fontSize:'0',
            width:'120px',
            clear:'both',
        }
        return (
            <div style={styleObj}>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                <Cell content={''}  changeTopStage={this.props.handleClick} stateObj={this.props.stateObj}/>
                
            </div>
        )
    }
}

export default Board
