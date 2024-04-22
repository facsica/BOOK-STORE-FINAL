document.addEventListener('DOMContentLoaded', function() {
    // ตรวจสอบว่ามีข้อมูลจำนวนสินค้าใน localStorage หรือไม่
    if (!localStorage.getItem('cartCount')) {
        // หากไม่มี ให้ตั้งค่าเริ่มต้นให้เป็น 0
        localStorage.setItem('cartCount', '0');

        // ตั้งค่าจำนวนสินค้าบนหน้าเว็บให้เป็น 0
        document.querySelector('.total-item').textContent = '0';
    }
});
