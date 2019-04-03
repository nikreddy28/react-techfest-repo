import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/actions';


import Articles from '../Articles'
//import Category from '../Category';

import './index.scss';


import { Grid , Icon } from 'semantic-ui-react'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
      }

      handleClick(event){
        console.log(this.inputNode.value);
        this.props.fetchData('https://fest-be-angular-fest.7e14.starter-us-west-2.openshiftapps.com/api/product'); 
      }

      _handleKeyPress(e){
        if (e.key === 'Enter') {
          console.log(this.inputNode.value);
          this.props.fetchData('https://fest-be-angular-fest.7e14.starter-us-west-2.openshiftapps.com/api/product'); 
        }
      }
      
 
    render() {
        return (
            <React.Fragment>
           
           <div className="content-wrapper">
                <div className="search-wrapper">
                <h1 className="title-heading-left">Find, Reach, and Resolve your concerns with <br></br><strong> Knowledge Base Articles</strong></h1>
                </div>
           </div>
           <div className="wrapper-pad">
           <Grid columns='equal'>
            <Grid.Column width={16}>
              
                <div className="search-wrapper">
                            <h2 className="title-heading-center">HOW CAN <strong>KNOWLEDGE BASE</strong> HELP YOU TODAY?</h2>
                            <div className="input-group">
                                <input className="form-control autocompleteInput" type="text" placeholder="Search here" id="autocompleteInput" ref={node => (this.inputNode = node)} onKeyPress={this._handleKeyPress}/>
                                <span className="input-group-text"><a className="search-icon" > <Icon  name="search" onClick={this.handleClick.bind(this)} className="trash-icon cursor-ptr"/></a></span>
                            </div>
                        </div> 
       
                </Grid.Column>
                <Grid.Column width={16}>
           
                <div className="articles-wrapper">
                            <Articles></Articles>
                    </div>   
            
                </Grid.Column>
            </Grid>
             
                
           </div>
         
           </React.Fragment>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);


