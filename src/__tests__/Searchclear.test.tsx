import { render } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Searchclear from "../components/Searchclear";

describe("Search clear link renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = render(<Searchclear />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
