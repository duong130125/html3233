let person = {
    name: "Dương",
    age: 19,
    address: "Yên Thàng, Nghệ An",
};
console.log("Thông tin ban đầu:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

person.birthDate = "13-01-2005";
console.log("\nSau khi thêm ngày sinh:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

delete person.age;
console.log("\nSau khi xóa tuổi:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
