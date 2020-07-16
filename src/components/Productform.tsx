import React from "react";
import styled from "styled-components";

interface Props {
  formopen: boolean;
}

const StyledProductform = styled.div<Props>`
  margin-bottom: 50px;
  display: ${(props) => (props.formopen ? "block" : "none")};

  .form-row {
    display: flex;
    flex-wrap: wrap;
  }

  .form-row + .form-row {
    margin-top: 18px;
  }

  .form-wrapper fieldset {
    padding: 0;
    margin: 0;
    width: 50%;
    border: 0;
  }

  .form-wrapper fieldset:first-child {
    padding-right: 4px;
  }

  .form-wrapper fieldset:last-child {
    padding-left: 4px;
  }

  .form-label {
    display: block;
    margin-bottom: 6px;
    font-size: 12px;
    color: #fff;
  }

  .form-input {
    padding: 8px;
    width: 80%;
    font-size: 14px;
    border: 1px solid #dedede;
    border-radius: 4px;
    transition: border-color 0.25s ease-out;
  }

  .form-input:focus {
    border-color: #3498db;
    box-shadow: 0 0 2px #3498db;
    outline: 0;
  }

  .btn,
  .btn-remove,
  .btn-reset {
    display: block;
    border: 0;
    cursor: pointer;
    transition: all 0.25s ease-out;
  }

  .btn-add {
    padding: 12px 18px;
    margin: 12px auto 0;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #3498db;
    border-radius: 4px;
  }

  .btn-add:hover {
    background-color: #2980b9;
  }

  .btn-remove,
  .btn-reset {
    padding: 0;
    font-size: 12px;
    font-style: italic;
    color: hsl(6, 63%, 46%);
    background-color: transparent;
  }

  .btn-remove:hover,
  .btn-reset:hover {
    color: hsl(6, 63%, 26%);
  }

  .btn-remove {
    background-color: transparent;
    border: none;
  }

  .btn-reset {
    margin: 21px auto 0;
  }
`;

export interface ProductformUI {
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
  handleImageUpload: (e: any) => void;
  formopen: boolean;
}

const Productform = (props: ProductformUI) => {
  return (
    <StyledProductform formopen={props.formopen}>
      <h1>Add new Order</h1>
      <div
        className="form-wrapper"
        data-test="productform"
        onSubmit={props.handleProductSubmit}
      >
        <div className="form-row">
          <fieldset>
            <label className="form-label" htmlFor="product_name">
              Product Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="product_name"
              name="product_name"
              value={props.productformdata.productname}
              onChange={(e) =>
                props.setformvalues.productname(e.currentTarget.value)
              }
            />
          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="category">
              Category:
            </label>
            <input
              className="form-input"
              type="text"
              id="category"
              name="category"
              value={props.productformdata.category}
              onChange={(e) =>
                props.setformvalues.category(e.currentTarget.value)
              }
            />
          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="size">
              Size:
            </label>
            <select
              className="form-input"
              id="status"
              name="size"
              value={props.productformdata.size}
              onChange={(e) => props.setformvalues.size(e.currentTarget.value)}
            >
              <option value="">-- Select order size --</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>{" "}
          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="colour">
              Colour:
            </label>
            <input
              className="form-input"
              type="text"
              id="colour"
              name="colour"
              value={props.productformdata.colour}
              onChange={(e) =>
                props.setformvalues.colour(e.currentTarget.value)
              }
            />
          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="title">
              Status:
            </label>
            <select
              className="form-input"
              id="status"
              name="productstatus"
              value={props.productformdata.productstatus}
              onChange={(e) =>
                props.setformvalues.productstatus(e.currentTarget.value)
              }
            >
              <option value="">-- Select order status --</option>
              <option value="readytotry">Ready to try</option>
              <option value="ontheway">On the way</option>
              <option value="inthequeue">In the queue</option>
              <option value="outofstock">Out of stock</option>
            </select>
          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="customers_initials">
              Customer initials:
            </label>
            <input
              className="form-input"
              maxLength={2}
              type="text"
              id="customers_initials"
              name="category"
              value={props.productformdata.customerinitials}
              onChange={(e) =>
                props.setformvalues.customerinitials(e.currentTarget.value)
              }
            />
          </fieldset>
          <fieldset>
            {props.productformdata.productimage.length > 0 ? (
              <img src={props.productformdata.productimage} alt="" />
            ) : (
              ""
            )}
            <label className="form-label" htmlFor="product_image">
              Product Image:
            </label>
            <input
              className="form-input"
              type="file"
              id="product_image"
              name="product_image"
              placeholder="upload an image"
              onChange={(e) => props.handleImageUpload(e)}
            />
          </fieldset>
        </div>
        <button onClick={props.handleProductSubmit} className="btn btn-add">
          Add product
        </button>
      </div>
    </StyledProductform>
  );
};

export default Productform;
