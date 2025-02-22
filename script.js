function login() {
    let username = document.getElementById("username").value.trim();
    
    if (username) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index1.html"; // ไปยังหน้าข้อความ
    } else {
        alert("กรุณาใส่ชื่อของคุณ!");
    }
}
// ฟังก์ชันโหลดข้อมูลผู้ใช้
function loadMessage() {
    let username = localStorage.getItem("loggedInUser");

    if (!username) {
        window.location.href = "index.html"; // กลับไปล็อกอิน ถ้าไม่มีข้อมูล
        return;
    }

    document.getElementById("username").innerText = username;

    // กำหนดข้อความสำหรับแต่ละคน
    let messages = {
        "Prem": "ขอบคุณที่เป็นเพื่อนที่ดีของฉันเสมอมา! 😊",
        "Pang": "นายเป็นแรงบันดาลใจที่ดีสำหรับเรา! 🚀",
        "Milk": "ขอบคุณที่อยู่ข้างกันตลอดนะ! 💕",
        "Mook": "เวลามีปัญหา นายคือคนแรกที่ช่วยเสมอ! 🙌",
        "Tong": "ขอให้เธอมีความสุขในทุกๆ วัน 🌸"
    };

    // ถ้ามีข้อความสำหรับชื่อนั้นให้แสดง ถ้าไม่มีให้แสดงข้อความเริ่มต้น
    document.getElementById("personal-message").innerText = messages[username] || "ดีใจที่ได้รู้จักเธอ! 🌿";
}

// ฟังก์ชันออกจากระบบ
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html"; // กลับไปหน้าล็อกอิน
}

// โหลดข้อความเมื่อเปิดหน้า
window.onload = loadMessage;
