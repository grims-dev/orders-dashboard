import { render } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Button from "../components/Button";

describe("Button renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = render(<Button />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
