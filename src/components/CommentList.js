import React, {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static defaultProps = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    render() {
        const text = this.props.isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props;
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments yet</p>;


        return (
            <div>
                <ul>
                    {comments.map((id) => {
                        return (<li key={id}><Comment id = {id}/></li>)
                    })}
                </ul>
                <CommentForm />
            </div>
        )
    }
}

export default toggleOpen(CommentList);
