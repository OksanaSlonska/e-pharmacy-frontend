import { NavigationProvider } from "@/providers/NavigationProvider";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Header } from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";
import styles from "./layout.module.css";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.pageWrapper}>
        <Header />

        <div className={styles.mainLayout}>
          <Sidebar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
}
