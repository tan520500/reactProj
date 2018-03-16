import React, { Component } from 'react'

function ViewValue(props) {
    const styleObj = {
        width: "100%",
        backgroundColor: "#858694",
        height: "80px",
        color: "#fff",
        fontSize: "30px",
        lineHeight:"80px",
        padding: '20px 50px 20px 10px',
        textAlign:'right',
        boxSizing:'border-box',

    }
    return <div style={styleObj}>{props.value}</div>
}

export default ViewValue