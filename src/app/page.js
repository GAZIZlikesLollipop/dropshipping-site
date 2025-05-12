"use client"; // Указывает, что это клиентский компонент

import styles from "./page.module.css";
import ProductCard, {Product} from "@/app/components/ProductCard";
import Link from "next/link";

export default function Home() {
    const products = [
        new Product(1, "iPhone 14", "2 431 462", "/product1.jpg", "Latest iPhone with A16 Bionic."),
        new Product(2, "Samsung Galaxy S23", "6 543 342", "/led.jpg", "Flagship Samsung phone."),
        new Product(3, "Google Pixel 8", "30 343", "/tool.jpg", "Smartphone with stock Android."),
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