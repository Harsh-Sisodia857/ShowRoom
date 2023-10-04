import React, { Component } from 'react'

// Input : liked : boolean
// Output : onClick

class Like extends Component {
    render() {
        let classes = "fa fa-lg fa-heart";
        if (!this.props.liked)
            classes += "-o"
        return (
            <i onClick={this.props.onClick} style={{ cursor: "pointer", margin : "10px" }} className={classes}></i>
        );
    }
}

export default Like;