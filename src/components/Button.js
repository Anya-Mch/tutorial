import React, {Component} from "react";

class Button extends Component {
    render(props) {
        return (
            <button onClick={this.props.f}>{this.props.num.length}</button>
        );
    }
}

export default Button