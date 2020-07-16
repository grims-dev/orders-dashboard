import { render } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Productlistmain from "../components/Productlistmain";

describe("Main product list renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = render(<Productlistmain />);
    const component = wrapper.find('[data-test="productform"]');
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("Displays a snapshot", () => {
    const wrapper = render(<Productlistmain />);
    expect(wrapper).toMatchSnapshot();
  });
});
