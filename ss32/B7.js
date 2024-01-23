let users = [];

class User {
    constructor(id, user_name, email, password) {
        this.id = id;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }
}

function validateUserData(user_name, email, password) {
    if (!user_name || !email || !password) {
        return [false, "Tên, email và mật khẩu không được để trống."];
    }
    if (user_name.length < 3) {
        return [false, "Tên không được ngắn hơn 3 ký tự."];
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return [false, "Email không đúng định dạng."];
    }
    if (password.length < 8) {
        return [false, "Mật khẩu tối thiểu 8 ký tự."];
    }
    return [true, ""];
}

function createUser() {
    let id = prompt("Nhập id: ");
    let user_name = prompt("Nhập tên: ");
    let email = prompt("Nhập email: ");
    let password = prompt("Nhập mật khẩu: ");
    let [is_valid, error_message] = validateUserData(user_name, email, password);
    while (!is_valid) {
        alert(error_message);
        user_name = prompt("Nhập tên: ");
        email = prompt("Nhập email: ");
        password = prompt("Nhập mật khẩu: ");
        [is_valid, error_message] = validateUserData(user_name, email, password);
    }
    users.push(new User(id, user_name, email, password));
}
createUser();
console.log(users);
