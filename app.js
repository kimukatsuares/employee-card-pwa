// 仮の社員データ（後でAPI連携に変更）
const employee = {
  name: "田中 太郎",
  id: "A123456",
  dept: "総務部",
  photo: "default.jpg"
};

// 表示処理
document.getElementById("name").textContent = employee.name;
document.getElementById("id").textContent = employee.id;
document.getElementById("dept").textContent = employee.dept;
document.getElementById("photo").src = employee.photo;

// QRコード生成（ライブラリ使用）
function generateQRCode(text) {
  const canvas = document.getElementById("qr");
  const qr = new QRious({
    element: canvas,
    value: text,
    size: 150
  });
}

// 一定時間ごとに更新
function updateQR() {
  const token = `${employee.id}-${Date.now()}`;
  generateQRCode(token);
}
updateQR();
setInterval(updateQR, 10000); // 10秒ごとに更新
