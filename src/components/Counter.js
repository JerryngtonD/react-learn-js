import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick = {this.handleIncrement}>Increment me</button>
            </div>
        )
    }

    handleIncrement = () => {
        console.log('-------', 'incrementing');
    }
}

let mapStateToProps = (state) => ({
    counter: state.count
});

const decorator = connect(mapStateToProps);


export default decorator(Counter);
