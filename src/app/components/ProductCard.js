import styles from "@/app/page.module.css";

export class Product {
    constructor(id, name, price, imageUrl, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}

export default function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage}/>
            <h2 className={styles.productText}>{product.name}</h2>
            <p className={styles.productPrice}>{product.price}</p>
        </div>
    );
}