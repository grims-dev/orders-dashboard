import React from "react";
import styled from "styled-components";
const StatusFiltersStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 0 40px;

  .status {
    all: unset;
    padding: 5px;
    margin: 0 15px;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 20px;
    transition: 0.1s ease;
    border: 1px solid rgba(255, 255, 255, 0);
    user-select: none;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &:focus {
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:last-child {
      margin-right: 0;
    }

    &::before {
      content: "";
      display: inline-block;
      border: 1px solid #fefefe;
      height: 20px;
      width: 20px;
      border-radius: 100%;
      margin-right: 8px;
      vertical-align: bottom;
    }

    &.readytotry {
      &::before {
        background: var(--status-readytotry);
      }
    }
    &.ontheway {
      &::before {
        background: var(--status-ontheway);
      }
    }
    &.inthequeue {
      &::before {
        background: var(--status-inthequeue);
      }
    }
    &.outofstock {
      &::before {
        background: var(--status-outofstock);
      }
    }

    &.status-selected {
      border-color: #fff;
    }
  }
`;

export interface StatusFilterUI {
  handleStatusSelect: (e: any) => void;
  selectedFilter: string;
}

const StatusFilter = (props: StatusFilterUI) => {
  return (
    <StatusFiltersStyled data-test="statusfilter">
      <button
        data-status="readytotry"
        className={`status readytotry ${
          props.selectedFilter === "readytotry" && "status-selected"
        }`}
        onClick={(e) => props.handleStatusSelect(e)}
      >
        Ready to Try
      </button>

      <button
        data-status="ontheway"
        className={`status ontheway ${
          props.selectedFilter === "ontheway" && "status-selected"
        }`}
        onClick={(e) => props.handleStatusSelect(e)}
      >
        On the Way
      </button>

      <button
        data-status="inthequeue"
        className={`status inthequeue ${
          props.selectedFilter === "inthequeue" && "status-selected"
        }`}
        onClick={(e) => props.handleStatusSelect(e)}
      >
        In the Queue
      </button>

      <button
        data-status="outofstock"
        className={`status outofstock ${
          props.selectedFilter === "outofstock" && "status-selected"
        }`}
        onClick={(e) => props.handleStatusSelect(e)}
      >
        Out of Stock
      </button>
    </StatusFiltersStyled>
  );
};

export default StatusFilter;
