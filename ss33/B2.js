let phoneBook = [
    {
        name: "Hoàng Nam",
        phoneNumber: "123-456-789",
        email: "nam@gmail.com",
    },
    {
        name: "Hùng Anh",
        phoneNumber: "987-654-321",
        email: "hunganh@gmail.com",
    },
    {
        name: "Phúc Răm",
        phoneNumber: "555-123-4567",
        email: "phuc@gmail.com",
    }
];
console.log("Thông tin danh bạ điện thoại:");
for (let contact of phoneBook) {
    console.log("Tên:", contact.name);
    console.log("Số điện thoại:", contact.phoneNumber);
    console.log("Email:", contact.email);
    console.log("--------------------------");
}
