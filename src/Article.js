import React, {Component} from 'react';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        }
    }
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        );
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        const {article} = this.props;
        const body = this.state.isOpen ?  <section>{article.text}</section> : null;
        return body;
    };
}


/*export default function Article(props) {
    const {article} = props;
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    );
}*/
