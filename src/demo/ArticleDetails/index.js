import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetails } from '../../store/actions';
import { Grid, Segment, Button, Rating } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './index.scss';


class ArticleDetails extends Component {
    componentDidMount() {
        this.props.fetchProductDetails(`https://fest-be-angular-fest.7e14.starter-us-west-2.openshiftapps.com/api/product/description/${this.props.match.params.id}`);    
    }
  

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
        this.props.getProductData(`https://fest-be-angular-fest.7e14.starter-us-west-2.openshiftapps.com/api/product/${this.props.match.params.id}`);   
      }
      render() {

        return (
        <div className="wrapper-pad mar-top-80">
            <Grid columns='equal'>
                <Grid.Column width={4} className="text-center">
                    <Segment><img className="img-100" alt={this.props.productDetails.product && this.props.productDetails.product.name} src={this.props.productDetails.product && this.props.productDetails.product.imageUrl}/></Segment>
                    <Link to="/cart">
                        <Button color='yellow' onClick={this.handleClick.bind(this)}>BUY NOW</Button>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <h3>{this.props.productDetails.product && this.props.productDetails.product.name}</h3>
                    <p>Price : RS.{this.props.productDetails.product && this.props.productDetails.product.name}</p>
                    <Rating icon='star' defaultRating={this.props.productDetails.product && this.props.productDetails.product.rating}maxRating={5} disabled/>
                   <p>{this.props.productDetails.description}</p>
                </Grid.Column>
            </Grid>
            
       </div>

        )
      }

}
const mapStateToProps = (state) => {
    
    return {
        productDetails: state.productDetails 
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductDetails: (url) => dispatch(fetchProductDetails(url))

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);


ArticleDetails.propTypes = {
    productDetails: PropTypes.object,
    getProductData : PropTypes.func,
    fetchProductDetails : PropTypes.func
}


