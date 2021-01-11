import React, { Component } from "react";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
