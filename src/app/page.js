"use client"; // Указывает, что это клиентский компонент

import { useState } from "react";
import styles from "./page.module.css";
import ProductCard from "./components"
import Product from "./components"

export default function Home() {
    const producta = {
        id: "1",
        name: "Куртка",
        about: "Зимняя, теплая куртка.",
        price: 199.99,
        imageUrl: "/jacket.jpg"
    };
    const products = ["home","human","cum"];

  return (
    <div className={styles.container}>
        <ProductCard product=producta></ProductCard>
        <ul className={styles.container}>
            {products.map((item, index) => (
            <li className={styles.text} key={index}>{item}</li>
            ))}
        </ul>
    </div>
  );
}