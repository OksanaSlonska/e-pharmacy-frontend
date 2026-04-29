"use client";

import { useState, KeyboardEvent } from "react";
import { Filter } from "lucide-react";
import styles from "./SharedFilter.module.css";

interface SharedFilterProps {
  onFilter: (value: string) => void;
  placeholder?: string;
  buttonText?: string;
}

export const SharedFilter = ({
  onFilter,
  placeholder = "Search...",
  buttonText = "Filter",
}: SharedFilterProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleApply = () => {
    onFilter(inputValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleApply();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button className={styles.button} onClick={handleApply}>
        <Filter size={16} />
        {buttonText}
      </button>
    </div>
  );
};
