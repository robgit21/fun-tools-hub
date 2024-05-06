import React from "react";
import styles from "./navigationComp.module.css";
import Link from "next/link";

export default function NavigationComp() {
  return (
    <div className={`${styles.container}`}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>Info</div>
    </div>
  );
}
