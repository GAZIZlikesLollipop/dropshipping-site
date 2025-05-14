import styles from "@/app/page.module.css";

export class Product {
    constructor(id, name, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

export class User {
    constructor(id, name, place, payment, cart) {
        this.id = id;
        this.name = name;
        this.place = place;
        this.payment = payment;
        this.cart = cart;
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