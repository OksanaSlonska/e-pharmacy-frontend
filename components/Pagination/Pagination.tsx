"use client";

import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.paginationWrapper}>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.pageDot} ${currentPage === page ? styles.active : ""}`}
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
        />
      ))}
    </div>
  );
};
