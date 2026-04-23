import { NavigationProvider } from "@/providers/NavigationProvider";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Header } from "@/components/Header/Header";
import styles from "./layout.module.css";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
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
