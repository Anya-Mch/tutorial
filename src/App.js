import React, {Component} from "react";
import Button from "./components/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '',
        }
    }

    buttonFunc = () => {
        let x = this.state.num;  //  x = "10" -> 5
        x = Number(x / 2);
        alert(x)
    };
    handleChange = (e) => {
        this.setState({num: e.target.value})
    };


    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <Button f={this.buttonFunc} num={this.state.num}/>
            </div>
        )
    }
}

export default App;