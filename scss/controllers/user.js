// Cần call API để lấy danh sách user và hiển thị ra giao diện

// Hàm main sẽ được chạy khi ứng dụng được khởi chạy
main();

function main() {
  // B1: Gọi API lấy danh sách user
  apiGetUsers().then(function (result) {
    // Tạo biến users nhận kết quả trả về từ API
    var users = result.data;
    // Sau khi đã lấy được data từ API thành công
    // Duyệt mảng data và khởi tạo các đối tượng user
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      users[i] = new user(
        user.id,
        user.taiKhoan,
        user.matKhau,
        user.email,
        user.loaiND,
        user.ngonNgu,
        user.moTa,
        user.hinhAnh,
       
      );
    }
    // Gọi hàm display để hiển thị danh sách user ra giao diện
    display(users);
  });
}