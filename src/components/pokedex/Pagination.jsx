import React from 'react'
import './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {
  const pagesPerBlock = 8
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const blockLength = Math.ceil(pagesLength / pagesPerBlock)

  const arrPages = []
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
  // initialPage + oagesPerBlock - 1
  const limitPages = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock

  for (let i = initialPage; i <= limitPages; i++) {
    arrPages.push(i)
  }

  const handlePrev = () => {
    setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  const handlePage = currentPage => {
    setPage(currentPage)
  }

  const handleStart = () => {
    setPage(1)
  }

  const handleLast = () => {
    setPage(pagesLength)
  }

  const handleDoblePrev = () => {
    setPage(page - 8)
  }
  const handleDobleNext = () => {
    setPage(page + 8)
  }

  return (
    <div className='pagination'>

      <ul className='pagination__container'>
        <li className='pagination__page points' onClick={handleStart}>...</li>
        {
          arrPages.map(e => (
            <li
              onClick={() => handlePage(e)}
              className={`pagination__page ${page === e && 'pagination__active'}`}
              key={e}>{e}</li>
          ))
        }
        <li className='pagination__page points' onClick={handleLast}>...</li>
      </ul>
      <div className='next_prev'>
        <div className='doble'>

          <div onClick={page > 8 && handleDoblePrev} className={`pagination__prev ${ page > 8 && 'pagination__active'}`}>&#60;&#60;</div>
          <div onClick={page > 1 && handlePrev} className={`pagination__prev ${ page > 1 && 'pagination__active'}`}>&#60;</div>
        </div>
        <div className="doble">
          <div onClick={page < pagesLength && handleNext} className={`pagination__next ${ page < pagesLength && 'pagination__active'}`}>&#62;</div>
          
          <div onClick={page < pagesLength-8 && handleDobleNext} className={`pagination__next ${ page < pagesLength-8 && 'pagination__active'}`}>&#62;&#62;</div>

        </div>
      </div>
    </div>

  )
}

export default Pagination