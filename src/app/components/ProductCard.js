// types/Product.ts
class Product {
  constructor(id, name, about, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.about = about;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

export default Product;

const product = {
  id: "1",
  name: "Куртка",
  about: "Зимняя, теплая куртка.",
  price: 199.99,
  imageUrl: "/jacket.jpg"
};

const ProductCard = ({ product, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={product.imageUrl} alt={product.name} width="200" />
    <h3>{product.name}</h3>
    <p>{product.about}</p>
    <strong>${product.price}</strong>
  </div>
);