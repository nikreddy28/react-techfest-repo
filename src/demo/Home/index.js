import React from 'react';
import { connect } from 'react-redux';
import { articlesFetchData, FetchPageData } from '../../store/actions';


import Articles from '../Articles'
//import Category from '../Category';

import './index.scss';


import { Grid , Icon } from 'semantic-ui-react'


class Home extends React.Component {

    componentDidMount() {
        this.props.fetchPageDetails('https://afs-64-dev-publish1.adobecqms.net/content/experience-fragments/amazon_hr/kb-search-panel/kiosk.model.json');
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

        var temp = this.props.pageDetails[':items'];
        var header = (temp && temp['root'][':items']['portal_container'][':items']['text']['text'])
        var footer = (temp && temp['root'][':items']['portal_container'][':items']['contentfragment']['text'])
        return (
            <React.Fragment>

                <div className="content-wrapper">
                <section className="row">
                  <div className="col-md-4 kbpanel-container">

                  <h1 className="title-heading-left" dangerouslySetInnerHTML={{ __html: header }} ></h1>
                        <div className="search-wrapper">
                        <div />
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
                        <section className="row alert-container">
                            <div className="col-12 alert alert-warning alert-dismissible fade show" role="alert">
                                <strong className="section-header">NOTE: </strong> <span className="body-text"  dangerouslySetInnerHTML={{ __html: footer }} ></span>
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                     </section>
                     </div>
                     </section>
                </div>



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
