"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import { LogoutBtn } from "../ui/LogoutBtn/LogoutBtn";
import { useNavigation } from "@/providers/NavigationProvider";

const navLinks = [
  { href: "/dashboard", icon: "icon-dashboard" },
  { href: "/orders", icon: "icon-shopping-cart" },
  { href: "/products", icon: "icon-flask-fill" },
  { href: "/customers", icon: "icon-local-pharmacy" },
  { href: "/suppliers", icon: "icon-users" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  const { isOpen, closeMenu } = useNavigation();

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={closeMenu} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.topPart}>
          <button className={styles.closeBtn} onClick={closeMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <nav className={styles.nav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                >
                  <svg className={styles.icon}>
                    <use xlinkHref={`/sprite.svg#${link.icon}`} />
                  </svg>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className={styles.bottomPart}>
          <LogoutBtn className={styles.logoutInSidebar} />
        </div>
      </aside>
    </>
  );
};
