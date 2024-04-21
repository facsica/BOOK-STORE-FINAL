<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // ข้อมูลที่รับมาจากฟอร์ม
    $email = $_POST['Email'];
    $password = $_POST['Password'];

    // เชื่อมต่อฐานข้อมูล
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "auth";

    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // คิวรีสำหรับตรวจสอบข้อมูลผู้ใช้ (ใช้ prepared statements)
    $query = "SELECT * FROM login WHERE Email=? AND Password=?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows == 0) {
        // ถ้าไม่พบผู้ใช้ในฐานข้อมูล ให้เด้งไปยังหน้า error.html
        header("Location: error.html");
        exit();
    } else {
        // ถ้าพบผู้ใช้ ให้เด้งไปยังหน้า main.html
        header("Location: success.html");
        exit();
    }

    $stmt->close();
    $conn->close();
}
?>
