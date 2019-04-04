import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/actions';
import ArticleTile from '../ArticleTile';
import PropTypes from 'prop-types';
import { Grid, Pagination} from 'semantic-ui-react'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1,
          productsPerPage: 12
        };
  
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
      }

  

      handlePaginationChange(e, { activePage }) {
        this.setState({
            currentPage: Number(activePage)
          });
      }

    render() {
       const { currentPage, productsPerPage } = this.state;
        // Logic for displaying current products
      const indexOfLastproduct = currentPage * productsPerPage;
      const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
      const currentproducts = this.props.items.hits && this.props.items.hits.slice(indexOfFirstproduct, indexOfLastproduct);

      const renderproducts = currentproducts && currentproducts.map((product) => {
        return (
            <Grid.Column key ={product.path}>
                    <ArticleTile product={product} ></ArticleTile>
            </Grid.Column>
        )
      });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.items.total / productsPerPage); i++) {
          pageNumbers.push(i);
        }

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        if (this.props.items.total) {
        return (
            
            <React.Fragment>
                <h3 className="prod-title">{this.props.items.total} search results found</h3> 
                <ul>                   
                            {renderproducts}                                      
                </ul>
                <Pagination totalPages={pageNumbers.length} onPageChange={this.handlePaginationChange} activePage={currentPage}/>
            </React.Fragment>
        );
        }
        return <p></p>
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);




ItemList.propTypes = {
    isLoading: PropTypes.bool,
    hasErrored:  PropTypes.bool,
    fetchData : PropTypes.func,
    items : PropTypes.object
}