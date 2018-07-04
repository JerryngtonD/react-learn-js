import React, {Component} from 'react';
 import PropTypes from 'prop-types';

class ArticlesChart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        // d3 works with this.refs.chart

    }

    componentWillReceiveProps(nextProps) {
        // update char for new articles
    }

    render() {
        return (
            <div ref='chart'/>
        )
    };

    componentWillUnmount() {
         //do some cleanUp
    }
}

export default ArticlesChart;
