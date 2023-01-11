import React from "react";
import "./pagination.scss";
import ReactPaginate from "react-paginate";
import { HomeContext } from "../../App";

export const Pagination = () => {
  const { currentPage, setCurrentPage } = React.useContext(HomeContext);

  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        forcePage={currentPage - 1}
      />
    </>
  );
};
