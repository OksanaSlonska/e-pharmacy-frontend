"use client";

import Image from "next/image";
import { useNavigation } from "@/providers/NavigationProvider";
import styles from "./Header.module.css";
import { LogoutBtn } from "../ui/LogoutBtn/LogoutBtn";
import Link from "next/link";

export const Header = () => {
  const { toggleMenu } = useNavigation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <button className={styles.burgerBtn} onClick={toggleMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="#1D1E21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#1D1E21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="#1D1E21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={styles.logoGroup}>
            <Link href="/dashboard" className={styles.logoLink}>
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </Link>

            <div className={styles.textGroup}>
              <h1 className={styles.title}>Medicine store</h1>
              <div className={styles.headerInfo}>
                <Link href="/dashboard" className={styles.subTitleLink}>
                  Dashboard
                </Link>

                <span className={styles.divider}>|</span>
                <span className={styles.userEmail}>vendor@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
};
