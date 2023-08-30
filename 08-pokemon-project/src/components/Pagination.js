import React from 'react'

function Pagination ({goToNextPage, goToPrevPage}) {
  return (
    <>
    <br/>   
        {goToPrevPage && <button onClick={goToPrevPage}>prev</button>}
        {goToNextPage && <button onClick={goToNextPage}>next</button>}
    </>
  )
}

export default Pagination;
