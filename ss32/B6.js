class Product {
    constructor(id, product_name, price) {
      this.id = id;
      this.product_name = product_name;
      this.price = price;
    }
  }
  const products = [
    new Product(1, "Rau Mùi", 50),
    new Product(2, "Cà Rốt", 30),
    new Product(3, "Khoai Tây", 70),
  ];
  products.sort((a, b) => a.price - b.price);
  console.log(products);
  