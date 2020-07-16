import { render } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Productform, { ProductformUI } from "../components/Productform";

function renderProductform(props: Partial<ProductformUI> = {}) {
  const defaultProps: ProductformUI = {
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
    handleImageUpload: jest.fn(),
    formopen: false,
  };

  return render(<Productform {...defaultProps} />);
}

describe("Product renders successfully", () => {
  it("renders", () => {
    const wrapper = renderProductform();
    const component = wrapper.find('[data-test="productform"]');
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("renders snapshot of add product form", () => {
    const wrapper = renderProductform();
    expect(wrapper).toMatchSnapshot();
  });
});
