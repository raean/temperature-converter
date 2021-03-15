import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * The plan:
 *  Have the converter class carry the form and pass on the inputs as proper to the convert function which returns back the value in the form of element tags.
 * 
 *  Have the radio button influence the state of the Converter class and change a boolean that we pass a prop to the convert function.
 */

function Convert(props) {
    
}

class Converter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form class="converterForm">
            <label>
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Convert" />
            </form>
        );
    }
}

ReactDOM.render(
    <Converter/>,
    document.getElementById('root')
);