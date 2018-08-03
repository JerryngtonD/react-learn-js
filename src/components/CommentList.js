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
        const {article, isOpen} = this.props;
        const text = this.props.isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody({article, isOpen})}
            </div>
        )
    }

    getBody({article: {comments = [], id}, isOpen}) {
        console.log(id);
        if (!isOpen) return null;
        if (!comments.length) return (
            <div>
                <p>
                    No comments yet
                </p>
                <CommentForm articleId={id}/>
            </div>
            );


        return (
            <div>
                <ul>
                    {comments.map((id) => {
                        return (<li key={id}><Comment id = {id}/></li>)
                    })}
                </ul>
                <CommentForm articleId = {id}/>
            </div>
        )
    }
}

export default toggleOpen(CommentList);
