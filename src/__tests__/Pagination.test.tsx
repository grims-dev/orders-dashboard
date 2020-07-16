import { mount } from "enzyme";
import * as React from "react";
import toJSON from "enzyme-to-json";
import Pagination, { PaginationUI } from "../components/Pagination";

function mountPagination(props: Partial<PaginationUI> = {}) {
  const defaultProps: PaginationUI = {
    totalRecords: 20,
    pageLimit: 5,
    currentpage: 1,
    pageNeighbours: 1,
    onPageChanged: jest.fn(),
  };

  return mount(<Pagination {...defaultProps} />);
}

describe("Pagination renders successfully", () => {
  it("renders without crashing", () => {
    const wrapper = mountPagination();
    const component = wrapper.find('[data-test="pagination"]');
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("renders snapshot of Pagination", () => {
    const wrapper = mountPagination();
    expect(wrapper).toMatchSnapshot();
  });
});
