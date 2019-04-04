import React from 'react';
import { connect } from 'react-redux';
import { articlesFetchData, FetchPageData } from '../../store/actions';


import Articles from '../Articles'
//import Category from '../Category';

import './index.scss';


import { Grid , Icon } from 'semantic-ui-react'


class Home extends React.Component {

    componentDidMount() {
        this.props.fetchPageDetails(`https://fest-be-angular-fest.7e14.starter-us-west-2.openshiftapps.com/api/product`);    
    }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this.data ={
            searchText:"",
            agentType:  "",       
            articleEmployeeClass:"",
            caseType:"",
            articlelocationState:"",
            caseReason:"",
            articleChannel:"",
            businessGroup:"",
            hrSupport:"",
            timeKeeping:"",
            currentTenure:"",
            language:"EN",
            country:"",
            sortBy:"relevance",
            size:10,
            index:0,
            articleType:""
        };
        this.url ="https://afs-64-dev-publish1.adobecqms.net/etc/amazon-hr/paths/search.json";
      }
      
      handleClick(event){
        this.data.searchText =this.inputNode.value;
        this.props.fetchData(this.url,this.data); 
      }

      _handleKeyPress(e){
        if (e.key === 'Enter') {
          this.data.searchText =this.inputNode.value;
          this.props.fetchData(this.url,this.data); 
        }
      }
      

 
    render() {
        return (
            <React.Fragment>
         
                <div className="content-wrapper">
                        <div className="search-wrapper">
                                    <h1 className="title-heading-left">Find, Reach, and Resolve your concerns with Knowledge Base Articles</h1>
                                    <div className="kb-filter-container">
                                    <div className="autocompleteWrapper">
                                        <div className="input-group">
                                            <input className="form-control autocompleteInput" type="text" placeholder="Search here" id="autocompleteInput" ref={node => (this.inputNode = node)} onKeyPress={this._handleKeyPress}/>
                                            <span className="input-group-text"  id="inputGroupPrepend3">
                                                <a className="search-icon" > <Icon  name="search" onClick={this.handleClick.bind(this)} className="trash-icon cursor-ptr"/></a>
                                            </span>
                                        </div>
                                    </div>
                                    </div>
                        </div>

                        <div className="articles-wrapper">
                            <Articles></Articles>
                        </div>  
                </div>
          

            <section className="row alert-container">
                <div className="col-12 alert alert-warning alert-dismissible fade show" role="alert">
                    <strong className="section-header">NOTE: </strong> <span className="body-text">Do you have feedback, ideas, or questions on Amazon Does That?</span>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
	       </section>
       </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        pageDetails: state.pageDetails
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,data) => dispatch(articlesFetchData(url,data)),
        fetchPageDetails: (url) => dispatch(FetchPageData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);


