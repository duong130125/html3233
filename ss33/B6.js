class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

const jobs = [];
function addJob() {
    const id = prompt("Nhập id công việc:");
    const title = prompt("Nhập tiêu đề công việc:");
    const description = prompt("Nhập mô tả công việc:");
    const completed = prompt("Công việc đã hoàn thành? (true/false):").toLowerCase() === 'true';

    const newJob = new Job(id, title, description, completed);
    jobs.push(newJob);
    console.log("Công việc đã được thêm vào danh sách.");
}


function displayJobs() {
    console.log("Danh sách công việc:");
    jobs.forEach(job => {
        console.log(`ID: ${job.id}, Tiêu đề: ${job.title}, Mô tả: ${job.description}, Hoàn thành: ${job.completed}`);
    });
}

function searchJobById() {
    const searchId = prompt("Nhập ID công việc cần tìm:");
    const foundJob = jobs.find(job => job.id === searchId);

    if (foundJob) {
        console.log(`Thông tin công việc có ID ${searchId}:`);
        console.log(`Tiêu đề: ${foundJob.title}, Mô tả: ${foundJob.description}, Hoàn thành: ${foundJob.completed}`);
    } else {
        console.log("Không tìm thấy công việc với ID đã nhập.");
    }
}

while (true) {
    const choice = prompt("Chọn lựa:\n1. Thêm công việc\n2. Hiển thị danh sách công việc\n3. Tìm kiếm công việc theo ID\n4. Thoát");

    switch (choice) {
        case '1':
            addJob();
            break;
        case '2':
            displayJobs();
            break;
        case '3':
            searchJobById();
            break;
        case '4':
            console.log("Chương trình đã kết thúc.");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}
