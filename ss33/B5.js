class Sach {
    constructor(tieuDe, tacGia, namXuatBan) {
        this.tieuDe = tieuDe;
        this.tacGia = tacGia;
        this.namXuatBan = namXuatBan;
        this.coSan = true; 
    }
    hienThiThongTin() {
        console.log(`Tiêu đề: ${this.tieuDe}, Tác giả: ${this.tacGia}, Năm xuất bản: ${this.namXuatBan}, Có sẵn: ${this.coSan}`);
    }
    muonSach() {
        if (this.coSan) {
            this.coSan = false;
            console.log(`Sách "${this.tieuDe}" đã được mượn.`);
        } else {
            console.log(`Sách "${this.tieuDe}" không có sẵn để mượn.`);
        }
    }
    traSach() {
        if (!this.coSan) {
            this.coSan = true;
            console.log(`Sách "${this.tieuDe}" đã được trả.`);
        } else {
            console.log(`Sách "${this.tieuDe}" đã có sẵn.`);
        }
    }
}

class ThuVien {
    constructor() {
        this.sach = [];
    }
    themSach(sach) {
        this.sach.push(sach);
    }
    hienThiThuVien() {
        console.log("Danh sách sách trong thư viện:");
        this.sach.forEach(sach => {
            sach.hienThiThongTin();
        });
    }
    laSachCoSan(tieuDe) {
        const sach = this.sach.find(sach => sach.tieuDe === tieuDe);
        if (sach) {
            return sach.coSan;
        }
        return false;
    }
}

const thuVienCuaToi = new ThuVien();
const sach1 = new Sach("Gatsby Vĩ Đại", "F. Scott Fitzgerald", 1925);
const sach2 = new Sach("Giết Con Chim Nhại", "Harper Lee", 1960);
const sach3 = new Sach("1984", "George Orwell", 1949);

thuVienCuaToi.themSach(sach1);
thuVienCuaToi.themSach(sach2);
thuVienCuaToi.themSach(sach3);

thuVienCuaToi.hienThiThuVien();
sach1.muonSach();
sach2.muonSach();
sach2.traSach();
sach3.muonSach();

thuVienCuaToi.hienThiThuVien();
console.log(`Có sẵn sách "Giết Con Chim Nhại"? ${thuVienCuaToi.laSachCoSan("Giết Con Chim Nhại")}`);
