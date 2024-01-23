let numberOfStudents = prompt("Nhập số lượng sinh viên:");
let students = [];

for (let i = 0; i < numberOfStudents; i++) {
    let student = {}; 

    student.id = prompt("Nhập ID của sinh viên thứ " + (i + 1) + ":");
    student.name = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ":");
    students.push(student);
}
console.log("Danh sách sinh viên:");
console.log(students);
