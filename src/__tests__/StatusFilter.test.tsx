import { mount } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import StatusFilter, { StatusFilterUI } from "../components/StatusFilter";

function mountStatusFilter(props: Partial<StatusFilterUI> = {}) {
  const defaultProps: StatusFilterUI = {
    handleStatusSelect: jest.fn(),
    selectedFilter: "readytotry",
  };

  return mount(<StatusFilter {...defaultProps} />);
}

describe("Status Filter renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = mountStatusFilter();
    const component = wrapper.find('[data-test="statusfilter"]');
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("renders snapshot of Status Filter", () => {
    const wrapper = mountStatusFilter();
    expect(wrapper).toMatchSnapshot();
  });
});
