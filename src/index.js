import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * The plan:
 *  Have the converter class carry the form and pass on the inputs as proper to the convert function which returns back the value in the form of element tags.
 * 
 *  Have the radio button influence the state of the Converter class and change a boolean that we pass a prop to the convert function.
 */

class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toUnit: "Celsius",
            value: '',
            result: 0.0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onRadioChange(event) {
        this.setState({
            toUnit: event.target.value
        });
    }

    handleSubmit(event) {
        const unit = this.state.toUnit;
        const temp = this.state.value;
        if (unit === "Celsius") {
            this.setState({
                result: Math.round(temp*(9/5) + 32, 2)
            });
        } else {
            this.setState({
                result: Math.round((temp-32) * (5/9), 2)
            });
        }
        event.preventDefault();
    }

    render() {
        return(
            <form class="converterForm" onSubmit={this.handleSubmit}>
                <label>
                    Degrees:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label> 
                <br/>
                <label for="celsius">Celsius</label>
                <input type="radio" id="celsius" name="type" value="Celsius" 
                checked={this.state.toUnit === "Celsius"} 
                onChange={this.onRadioChange} />

                <label for="farenheit">Farenheit</label>
                <input type="radio" id="farenheit" name="type" value="Farenheit" 
                checked={this.state.toUnit === "Farenheit"} 
                onChange={this.onRadioChange} />

                <p>{this.state.result}</p> 

                <input type="submit" value="Convert"/>
                
            </form>
        );
    }
}

ReactDOM.render(
    <div class="screen">
        <h1 class="title"> Temperature Converter</h1>
        <Converter/>
    </div>,
    document.getElementById('root')
);