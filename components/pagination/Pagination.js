import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import styles from './pagination.module.scss';


const Pagination = props => {

  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
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
  console.log('current page', currentPage);
  return (
    <ul
      className={classnames(styles.paginationContainer, { [className]: className })}
    >
      <li
        className={`${styles.paginationItem} ${(currentPage === 1)?styles.disabled:''}`}
        /* className={classnames(styles.paginationItem, {
          disabled: currentPage === 1
        })} */
        onClick={onPrevious}
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <li className={`${styles.paginationItem} ${styles.dots}`}>&#8230;</li>;
        }

        return (
          <li key={i}
            className={`${styles.paginationItem} ${(pageNumber === currentPage)?styles.selectedItem:''}`}
            
            /* className={classnames(styles.paginationItem, {
              selectedItem: pageNumber === currentPage
            })} */
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${styles.paginationItem} ${(currentPage === lastPage)?styles.disabled:''}`}
        /* className={classnames(styles.paginationItem, {
          disabled: currentPage === lastPage
        })} */
        onClick={onNext}
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
