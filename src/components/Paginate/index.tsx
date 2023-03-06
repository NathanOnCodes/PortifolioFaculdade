import { useState } from "react";
import { useGetApi } from "../../hooks/useGetApi"
import { Items } from "../Items"
import ReactPaginate from "react-paginate";
import * as classes from "../../types/ProjectStyledComponents";



interface IPaginateProps {
    ItemsPerPage: number
}

export const Paginate = ({ ItemsPerPage }: IPaginateProps) => {
    const { data } = useGetApi();
    const [itemOffSet, setItemOffSet] = useState(0);
    const endOffSet = itemOffSet + ItemsPerPage;
    const pageCount = Math.ceil(data?.length / ItemsPerPage);
    const currentItems = data?.slice(itemOffSet, endOffSet);



    const handlePageClick = (event: any) => {
        const newOffSet = (event.selected * ItemsPerPage) % data.length;
        setItemOffSet(newOffSet);
    }




    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(22rem, 2fr)",
                gridTemplateRows: "repeat(1, 1fr)",
                justifyItems: "center",
                gridGap: "16px",
                backgroundColor: "rgb(240, 239, 243)",
            }}>
                <Items currentItems={currentItems} />
            </div>


            <classes.PreviouStyled>
                {
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={() => null}
                        className="ul"
                        previousClassName="previousClass"
                        nextClassName="nextClass"
                        pageClassName="li"
                        pageLinkClassName="a"
                    />
                }

            </classes.PreviouStyled>



        </>
    )
}
