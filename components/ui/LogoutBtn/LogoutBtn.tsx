"use client";

import { useRouter } from "next/navigation";
import styles from "./LogoutBtn.module.css";

interface LogoutBtnProps {
  className?: string;
}

export const LogoutBtn = ({ className }: LogoutBtnProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      console.log("Logging out...");

      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={`${styles.logoutBtn} ${className || ""}`}
      aria-label="Log out"
    >
      <svg className={styles.icon}>
        <use xlinkHref="/sprite.svg#icon-logout" />
      </svg>
    </button>
  );
};
