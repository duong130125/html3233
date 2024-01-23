class Book {
    constructor(author, name) {
      this.author = author;
      this.name = name;
    }
  }
  const books = [
    new Book("Dale Carnegie", "Đắc Nhân Tâm"),
    new Book("Margaret Mitchell", "Cuốn Theo Chiều Gió"),
    new Book("Paulo Coelho", "Nhà Giả Kim"),
  ];
  const userInput = prompt("Nhập tên tác giả:");
  let foundBook = null;
  for (let key of books) {
    if (key.author === userInput) {
      foundBook = key;
      break;
    }
  }

  if (foundBook) {
    console.log("Thông tin sách tìm được:");
    console.log(foundBook);
  } else {
    console.log("Không tìm thấy sách.");
  }
  