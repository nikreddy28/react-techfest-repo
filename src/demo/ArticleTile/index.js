import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'


import './index.scss'; 


class ArticleTile extends React.Component {

    render() {
        return (
            <React.Fragment>
            <div className="article-tile">
                <Link to={`/`} >
                        {this.props.product['jcr:title']}
                </Link>
                <p><Icon name='sync' />{this.props.product['articleType']}</p>
                <p>Last Updated : {this.props.product['cq:lastModified']} </p>
                <p className="article-body">{this.props.product['articleBody']}</p>
           </div>
           </React.Fragment>
          
        );
    }
};

export default ArticleTile;

ArticleTile.propTypes = {
    product : PropTypes.object
}
