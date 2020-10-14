import React, {Component} from "react";
import nf from '../media/nf.png'

export default class NickFury extends Component {
    render() {
        return (
            <div className="nick-fury box bounce-1">
                <img src={nf}/>
            </div>
        )
    }
}