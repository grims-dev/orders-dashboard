import React, { useState } from "react";
import styled from "styled-components";

export interface PaginationUI {
  totalRecords: number;
  pageLimit?: number;
  currentpage: number;
  pageNeighbours?: number;
  onPageChanged?: (data: {
    currentpage: number;
    totalpages: number;
    pagelimit: number;
  }) => void;
}

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const StyledPaginationContainer = styled.div`
  text-align: center;
  position: relative;
  .page-counter {
    position: absolute;
    right: 0px;
    top: 0px;
    .page-number {
      display: inline-block;
      line-height: 20px;
      font-size: 18px;
      height: 30px;
      padding: 5px;
    }
    .border-right {
      border-right: 2px #999 solid;
    }
    .page-number.secondary {
      font-size: 14px;
    }
  }
`;
function pad(num: number, size: number) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

const StyledPagination = styled.div`
  display: inline-block;
  margin: 10px auto;
  li {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    span {
      display: inline-block;
      position: relative;
      width: 13px;
      height: 13px;
      border-radius: 50%;
    }

    span:before {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 3px;
      background: #fff;
      border-radius: 50%;
    }
  }

  li.active {
    span:before {
      content: "";
      background: #49d5b0;
    }
  }
`;

const Pagination = (props: PaginationUI) => {
  //const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;
  const [currentpage, setCurrentpage] = useState<number>(props.currentpage);
  const pageLimit = typeof props.pageLimit === "number" ? props.pageLimit : 30;
  const totalRecords = props.totalRecords > 0 ? props.totalRecords : 0;
  const pageNeighbours =
    typeof props.pageNeighbours === "number"
      ? Math.max(0, Math.min(props.pageNeighbours, 2))
      : 0;

  const totalPages = Math.ceil(totalRecords / pageLimit);

  /*useLayoutEffect(()=>{
    gotoPage(1)
  }, []) */

  const gotoPage = (page: number) => {
    const currentPage =
      typeof page === "string" ? page : Math.max(0, Math.min(page, totalPages));
    console.log(page);

    const paginationData = {
      currentpage,
      totalpages: totalPages,
      pagelimit: pageLimit,
      totalrecords: totalRecords,
    };

    setCurrentpage(currentPage);
    props.onPageChanged!(paginationData);
  };

  const handleClick = (page: number, evt: any) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentpage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentpage + pageNeighbours * 2 + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentpage - pageNeighbours;
      const rightBound = currentpage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  if (!totalRecords) return null;

  if (totalPages === 1) return null;

  const pages = fetchPageNumbers();

  return (
    <>
      <StyledPaginationContainer
        data-test="pagination"
        aria-label="Order Pagination"
      >
        <StyledPagination>
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="page-item">
                  <span
                    className="page-link"
                    aria-label="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </span>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="page-item">
                  <span
                    className="page-link"
                    aria-label="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </span>
                </li>
              );

            if (typeof page === "number")
              return (
                <li
                  key={index}
                  className={`page-item${
                    currentpage === page ? " active" : ""
                  }`}
                >
                  <span
                    className="page-link"
                    onClick={(e) => handleClick(page, e)}
                  ></span>
                </li>
              );

            return null;
          })}
        </StyledPagination>

        <div className="page-counter">
          <span className="page-number border-right">
            {pad(currentpage, 2)}
          </span>{" "}
          <span className="page-number secondary">{pad(totalPages, 2)}</span>
        </div>
      </StyledPaginationContainer>
    </>
  );
};

export default Pagination;
