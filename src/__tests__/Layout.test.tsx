import { mount } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Layout from "../components/Layout";

describe("Layout renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Layout />);
    const component = wrapper.find('[data-test="layout"]');
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("renders snapshot of Layout", () => {
    const wrapper = mount(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});
