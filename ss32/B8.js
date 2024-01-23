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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return [false, "Email không đúng định dạng."];
    }
    if (password.length < 8) {
        return [false, "Mật khẩu tối thiểu 8 ký tự."];
    }
    return [true, ""];
}

function registerUser() {
    let id = users.length + 1;
    let user_name = prompt("Nhập tên: ");
    let email = prompt("Nhập email: ");
    let password = prompt("Nhập mật khẩu (tối thiểu 8 ký tự): ");

    const [is_valid, error_message] = validateUserData(user_name, email, password);

    if (!is_valid) {
        alert(error_message);
        return;
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Email đã tồn tại. Đăng ký thất bại.");
    } else {
        users.push(new User(id, user_name, email, password));
        alert("Đăng ký thành công!");
    }
}

function loginUser() {
    let email = prompt("Nhập email: ");
    let password = prompt("Nhập mật khẩu: ");

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Đăng nhập thành công!");
        console.log("Thông tin tài khoản:");
        console.log(user);
    } else {
        alert("Đăng nhập thất bại. Email hoặc mật khẩu không chính xác.");
    }
}

function main() {
    while (true) {
        let choice = prompt("1. Đăng ký tài khoản\n2. Đăng nhập\n3. Thoát\nChọn một số (1-3): ");

        switch (choice) {
            case '1':
                registerUser();
                break;
            case '2':
                loginUser();
                break;
            case '3':
                alert("Tạm biệt!");
                return;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

main();
