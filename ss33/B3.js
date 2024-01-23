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
phoneBook.forEach(contact => {
    contact.showFullInfo = function () {
        console.log("Tên:", this.name);
        console.log("Số điện thoại:", this.phoneNumber);
        console.log("Email:", this.email);
        console.log("--------------------------");
    };
    contact.showFullInfo();
});
