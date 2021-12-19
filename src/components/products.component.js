import React, { Component } from "react";
import ProductService from "../services/product.service";

import { connect } from "react-redux";

class Products extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        products: []
      };
    }
  
    componentDidMount() {
        ProductService.getProducts().then(
          response => {
            this.setState({
              products: response.data.items
              
            });
            console.log(response.data.items)
          },
          error => {
            this.setState({
              content:
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
            });
          }
        );
      }
  
    render() {
      return (
        <div className="d-grid gap-3">         
        {this.state.products.map(function (product, i) {
            return <div className="card" key={i}>
                    
                    <div className="card-body">
                      <h5 className="card-title row">
                        <div className="col-auto me-auto">{product.header}</div>
                        <div className="col-auto">{product.price}$</div>
                        
                      </h5>
                        <p className="card-text">{product.description}</p>
                        <div className="text-end">
                        <a href="#" className="btn btn-primary text-end">Buy</a>
                        </div>
                        
                    </div>
                </div>
        }) }
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
      isLoggedIn,
      message
    };
  }
  
  export default connect(mapStateToProps)(Products);