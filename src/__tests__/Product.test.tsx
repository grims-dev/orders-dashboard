import { mount } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Product, { ProductUI } from "../components/Product";

function mountProduct(props: Partial<ProductUI> = {}) {
  const defaultProps: ProductUI = {
    position: 1,
    product: {
      id: 1,
      product_name: "Nike Air Max 95",
      category: "Category",
      size: "10",
      colour: "blue",
      status: "On the way",
      customers_initials: "CG",
    },
    handleProductRemove: jest.fn(),
  };

  return mount(<Product {...defaultProps} />);
}

describe("Product renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = mountProduct();
    const component = wrapper.find('[data-test="product"]');
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("renders snapshot of product app", () => {
    const wrapper = mountProduct();
    expect(wrapper).toMatchSnapshot();
  });
});
