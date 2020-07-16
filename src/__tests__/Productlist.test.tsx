import { mount } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Productlist, {
  ProductlistUI,
  ProductitemUI,
} from "../components/Productlist";

function mountProductlist(props: Partial<ProductlistUI> = {}) {
  const defaultProps: ProductlistUI = {
    loading: false,
    handleProductSubmit: jest.fn(),
    setformvalues: {
      productname: jest.fn(),
      category: jest.fn(),
      size: jest.fn(),
      colour: jest.fn(),
      productstatus: jest.fn(),
      customerinitials: jest.fn(),
      productimage: "",
    },
    productformdata: {
      productname: "",
      category: "",
      size: "",
      colour: "",
      productstatus: "",
      customerinitials: "",
      productimage: "",
    },
    products: [
      {
        category: "test",
        customers_initials: "test",
        id: 1,
        product_name: "test",
        size: "test",
        colour: "red",
        status: "test",
      },
    ],
    handleProductRemove: jest.fn(),
    handleImageUpload: jest.fn(),
    toggleForm: jest.fn(),
    formopen: false,
    searchresult: false,
    handleShowAllProducts: jest.fn(),
  };

  return mount(<Productlist {...defaultProps} />);
}

describe("Product list renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = mountProductlist();
    const component = wrapper.find('[data-test="productlist"]');
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("renders snapshot of product list", () => {
    const wrapper = mountProductlist();
    expect(wrapper).toMatchSnapshot();
  });
});
