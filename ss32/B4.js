let product = {
    id: 1,
    name: "Sản phẩm 1",
    price: 50.99,
    quantity: 10
};
console.log("Thông tin sản phẩm:");
for (let key in product) {
     console.log(key, product[key]);
}
