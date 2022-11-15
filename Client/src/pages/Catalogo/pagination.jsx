import React from "react";

const Pagination = ({ itensPerPage, totalItens, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i < Math.ceil((totalItens / itensPerPage) + 1); i++){
        pageNumbers.push(i);
    }

   return(
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a className="page-link" onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
   )
}

export default Pagination;

