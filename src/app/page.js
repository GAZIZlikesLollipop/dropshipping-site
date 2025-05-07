"use client"; // Указывает, что это клиентский компонент

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(0);
  const text = "hello";
  const products = ["egegge","jgjejgjfe","ebebebe"];

  const handleButton = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
        <ul>
            {products.map((item, index) => (
            <li className={styles.text} key={index}>{item}</li>
            ))}
        </ul>
        <p className={styles.text}>{count}</p>
        <button onClick={handleButton} className={styles.button}>click me</button>
    </div>
  );
}