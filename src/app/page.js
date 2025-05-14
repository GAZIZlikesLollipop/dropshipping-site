"use client"; // Указывает, что это клиентский компонент

import styles from "./page.module.css";
import ProductCard, {Product} from "@/app/components/ProductCard";
import Link from "next/link";

export default function Home() {
    const products = [
        new Product(1, "iPhone 14", "2 431 462", "/product1.jpg"),
        new Product(2, "Samsung Galaxy S23", "6 543 342", "/led.jpg"),
        new Product(3, "Google Pixel 8", "30 343", "/tool.jpg"),
        new Product(4, "Minecraft board", "324 500", "/product1.jpg"),
        new Product(5, "Кунжут чистый", "117 244", "/led.jpg"),
        new Product(6, "ChinaPhone 16 pro max", "$ 117 321 462", "/chinaPhone.jpg"),
    ];

  return (
    <div className={styles.container} onClick={() => window.scrollTo(0, 0)}>
        {products.map(product => (
            <Link href={`/product/${product.name}-${product.id}`} key={product.id}>
                <ProductCard key={product.id} product={product} />
            </Link>
        ))}
    </div>
  );
}