import Image from "next/image";

import styles from "./page.module.css";
import { LoginForm } from "@/components/LoginForm/LoginForm";

export const metadata = {
  title: "Login | E-Pharmacy",
  description: "Welcome to the Administrative Panel",
};

export default function LoginPage() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.decorElements}>
        <Image
          src="/images/elements.png"
          alt="decoration"
          width={300}
          height={300}
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      <div className={styles.contentContainer}>
        <section className={styles.heroSection}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              priority
            />
            <span>E-Pharmacy</span>
          </div>

          <div className={styles.heroTextWrapper}>
            <h1 className={styles.heroText}>
              Your medication, delivered Say goodbye to all{" "}
              <span className={styles.highlight}>your healthcare</span> worries
              with us
            </h1>

            <div className={styles.pillImageWrapper}>
              <Image
                src="/images/pill.png"
                alt="Flying pill decoration"
                width={179}
                height={175}
                className={styles.pillImage}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <LoginForm />
        </section>
      </div>
    </main>
  );
}
