import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


import './index.scss'; 


class ArticleTile extends React.Component {

    render() {
        const id= this.props.product.id;
        return (
            <React.Fragment>
            <Link to={`/product/${id}`} >
                {this.props.product.name}
           </Link>
           </React.Fragment>
          
        );
    }
};

export default ArticleTile;

ArticleTile.propTypes = {
    product : PropTypes.object
}
