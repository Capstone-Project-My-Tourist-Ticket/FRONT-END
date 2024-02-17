import ReactPaginate from "react-paginate";

interface Props {
    totalPage: number;
    page: number;
    handlePageClick: (selectedItem: {selected:number}) => void;
}


const Pagination = (props: Props) => {
    const {totalPage, page, handlePageClick} = props;

  return (
    <ReactPaginate
    previousLabel={"Back"}
    nextLabel={"Next"}
    breakLabel={"..."}
    pageCount={totalPage}
    forcePage={page - 1}
    marginPagesDisplayed={1}
    pageRangeDisplayed={3}
    onPageChange={handlePageClick}
    containerClassName={"flex gap-2"}
    pageClassName={
      "h-[35px] w-[35px] relative  rounded-sm hover:bg-gray-500 hover:text-white border-2 border-slate-300 cursor-pointer"
    }
    pageLinkClassName={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center"}
    previousClassName={
      "h-[35px] w-[70px] relative rounded-sm hover:bg-gray-500 hover:text-white border-2 border-slate-300 cursor-pointer"
    }
    previousLinkClassName={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center"}
    nextClassName={
      "h-[35px] w-[70px] relative rounded-sm hover:bg-gray-500 hover:text-white border-2 border-slate-300 cursor-pointer "
    }
    nextLinkClassName={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center"}
    activeClassName={"bg-gray-500 text-white"}
  />
  )
}

export default Pagination