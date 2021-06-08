import React, {Component} from 'react';
import "./Display.css";

class Display extends Component {
    render(){
        return(
            <div className="Display" data-testid="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Display;
