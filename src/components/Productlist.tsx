import React from "react";
import Productform from "./Productform";
import Product from "./Product";
import Button from "./Button";
import Searchclear from "./Searchclear";

export interface ProductitemUI {
  id: number;
  product_name: string;
  category: string;
  size: string;
  colour: string;
  status: string;
  customers_initials: string;
}

export interface ProductlistUI {
  loading: boolean;
  handleProductSubmit: () => void;
  setformvalues: {
    productname: (value: string) => void;
    category: (value: string) => void;
    size: (value: string) => void;
    colour: (value: string) => void;
    productstatus: (value: string) => void;
    customerinitials: (value: string) => void;
    productimage?: string;
  };
  productformdata: {
    productname?: string;
    category?: string;
    size?: string;
    colour?: string;
    productstatus?: string;
    customerinitials?: string;
    productimage: string;
  };
  products: ProductitemUI[];
  handleProductRemove: (id: number, productname: string) => void;
  handleImageUpload: (e: any) => void;
  toggleForm: () => void;
  formopen: boolean;
  searchresult: boolean;
  handleShowAllProducts: (e: any) => void;
}

const Productlist = (props: ProductlistUI) => {
  if (props.loading) return <p>Product list is loading...</p>;
  return (
    <div data-test="productlist">
      {props.formopen ? (
        <Button color={`#ff3300`} onClick={props.toggleForm}>
          Cancel
        </Button>
      ) : (
        <Button onClick={props.toggleForm}>Add product</Button>
      )}
      <Productform
        handleProductSubmit={props.handleProductSubmit}
        setformvalues={props.setformvalues}
        handleImageUpload={props.handleImageUpload}
        formopen={props.formopen}
        productformdata={props.productformdata}
      />
      {props.searchresult ? (
        <Searchclear onClick={props.handleShowAllProducts}>
          Show all products
        </Searchclear>
      ) : (
        ""
      )}
      {props.products.length > 0 ? (
        props.products.map((product: ProductitemUI, idx) => (
          <Product
            key={product.id}
            product={product}
            position={idx + 1}
            handleProductRemove={props.handleProductRemove}
          />
        ))
      ) : props.searchresult ? (
        <p>There are no orders with this status</p>
      ) : (
        <p>There are no orders to display</p>
      )}
    </div>
  );
};

export default Productlist;
