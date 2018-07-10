import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC';

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
        this.props.dispatchIncrement();
    }
}

const mapStateToProps = (state) => ({
    counter: state.count
});

const mapToDispatch = {
    dispatchIncrement: increment
};



const decorator = connect(mapStateToProps, mapToDispatch);



export default decorator(Counter);
