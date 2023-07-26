import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "../styles/customPagination.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div>
          <ChevronLeftIcon />
        </div>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={`page -${pageNumber}`}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={`page -${pageNumber}`}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div>
          <ChevronRightIcon />
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
