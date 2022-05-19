import React, { Component } from "react";
import ECommerceData from "../../ecommerce-data.json";
class SalesForTheCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }
  componentDidMount() {
    this.setState({
      cities: SalesForTheCity.sold_products.city,
    });
  }

  render() {
    return (
      <ul>
        {this.state.cities.map((city) => {
          <li>{city}</li>;
        })}
      </ul>
    );
  }
}

export default SalesForTheCity;
