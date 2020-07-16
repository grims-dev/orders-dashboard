import { mount } from "enzyme";
import { render } from "enzyme";
import * as React from "react";
import App from "../App";

describe("Main app renders successfully", () => {
  it("renders", () => {
    const wrapper = render(<App />);
    expect(wrapper.find("p").html()).toMatch(/loading/);
  });

  it("renders snapshot of main app", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
