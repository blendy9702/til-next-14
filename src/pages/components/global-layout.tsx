import { ReactNode } from "react";
import styles from "./global-layout.module.css";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href={"/"}>
          <FaAmazon style={{ fontSize: "40px" }} />
          Amazon Shopping Mall
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        Copyright 2025. Shopping Mall. All rights reserved.
      </footer>
    </div>
  );
}
