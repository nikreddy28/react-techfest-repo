import React from 'react';
import { connect } from 'react-redux';
import { Header} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


import './index.scss'; 


class NavHeader extends React.Component {

    render() {
        return (
            <React.Fragment>
            <ul className="header-wrapper">
                <li>
                    <Link to="/">
                    <Header as='h3' color='yellow' className="inline-ele">
                        <img src ="https://www.freeiconspng.com/uploads/amazon-icon-14.png"></img>
                        <Header.Subheader>Knowledge Base</Header.Subheader>
                    </Header></Link>
                </li>
                <li className="search-icon">
                  <img className="keyword-icon" src="https://cdn1.iconfinder.com/data/icons/venetian-red-to-beautify-your-website/512/Search_Magnifying_Glass_Find-512.png"></img>
                     <div className="keyword">Keyword Search</div>
                </li>
               
            </ul>
      
           
           </React.Fragment>
          
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        cartDetails: state.cartDetails 
    };
};

export default connect(mapStateToProps)(NavHeader);

NavHeader.propTypes = {
    cartDetails : PropTypes.array
}
