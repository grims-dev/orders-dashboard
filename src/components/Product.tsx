import React from "react";
import styled, { StyledComponent } from "styled-components";
import pending from "../assets/images/pending.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

let midwayBreakpoint = "850px";
console.log(midwayBreakpoint);
type productBreakpoint = {
  breakpoint: string;
};
const StyledProduct: StyledComponent<"div", any, {}, never> = styled.div`
  padding: 45px 10px 25px;
  margin-bottom: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  color: #999;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (min-width: ${midwayBreakpoint}) {
    padding: 10px 25px 10px 45px;
    flex-direction: row;
  }
  .status-border {
    height: 20px;
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    @media (min-width: ${midwayBreakpoint}) {
      height: 100%;
      width: 20px;
    }
    &.status-readytotry {
      background: var(--status-readytotry);
    }
    &.status-ontheway {
      background: var(--status-ontheway);
    }
    &.status-inthequeue {
      background: var(--status-inthequeue);
    }
    &.status-outofstock {
      background: var(--status-outofstock);
    }
  }
  .shoe-thumbnail {
    border-radius: 10px;
    width: 100px;
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }
  .shoe-name {
    color: #fefefe;
    margin: 10px;
    font-size: 20px;
    line-height: 100%;
    @media (min-width: ${midwayBreakpoint}) {
      margin: 10px 100px 10px 30px;
      max-width: 120px;
    }
  }
  .shoe-info {
    font-size: 20px;
    line-height: 100%;
    margin: 10px;
    flex-grow: 1;
    flex-basis: 0;
    align-self: start;
    @media (min-width: ${midwayBreakpoint}) {
      align-self: inherit;
    }
  }
  .initials {
    color: #fefefe;
    font-size: 18px;
    border: 1px solid #999;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-remove {
    background-color: transparent;
    border: none;
    color: #fefefe;
    padding: 10px;
    &:hover {
      color: red;
    }
  }
`;

export interface ProductUI {
  position: number;
  product: {
    id: number;
    product_name: string;
    category: string;
    size: string;
    colour: string;
    status: string;
    customers_initials: string;
    product_image?: string;
  };
  handleProductRemove: (id: number, productname: string) => void;
}

const Product = (props: ProductUI) => (
  <StyledProduct data-test="product">
    <div
      className={`status-border status-${props.product.status}`}
      aria-hidden="true"
    />

    <img
      src={props.product.product_image ? props.product.product_image : pending}
      alt={props.product.product_name}
      className="shoe-thumbnail"
      width="100"
      height="100"
    />
    <h2 className="shoe-name">{props.product.product_name}</h2>
    <div className="shoe-info">
      Category:
      <br />
      <strong>{props.product.category}</strong>
    </div>
    <div className="shoe-info">
      Size:
      <br />
      <strong>{props.product.size}</strong>
    </div>
    <div className="shoe-info">
      Colour:
      <br />
      <strong>{props.product.colour}</strong>
    </div>
    <div className="initials">
      <strong>{props.product.customers_initials}</strong>
    </div>
    <button
      className="btn btn-remove"
      onClick={() =>
        props.handleProductRemove(props.product.id, props.product.product_name)
      }
    >
      <FontAwesomeIcon icon={faTimesCircle} />
    </button>
  </StyledProduct>
);

export default Product;
