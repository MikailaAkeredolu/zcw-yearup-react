import React, {Component} from 'react';
import emoji from './../src/emoji.svg';
export default class Instructions extends Component{
    render(){
        return(
            <div className="instructions">
                <img src={emoji} alt="some emoji" />
                <p>Click an emoji to see its short name</p>
            </div>
        )
    }
}