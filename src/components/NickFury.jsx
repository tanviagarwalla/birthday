import React, {Component} from "react";
import nf from '../media/nf.png'

export default class NickFury extends Component {
    render() {
        return (
            <div className="nick-fury">
                <img src={nf}/>
            </div>
        )
    }
}