import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

class CommentForm extends Component {
    static  propTypes = {

    };

    state = {
        user: '',
        test: ''
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                user:   <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')}
                        />

                comment:    <input value = {this.state.text}
                                   onChange = {this.handleChange('text')}
                                   className = {this.getClassName('text')}
                            />
                <input type = 'submit' value = 'submit' />
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
    };

    getClassName = type => {
        return this.state[type].length && this.state[type].length < limits[type].min ? 'form_input__error' : '';
    };

    handleChange = type => ev => {
        const {value} = ev.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type] : value
        })
    }
}
