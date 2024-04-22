// จัดการกับการกดปุ่ม "add to cart"
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการเปลี่ยนหน้าเมื่อกดปุ่ม

        // ดึงจำนวนสินค้าปัจจุบันจาก localStorage หรือเริ่มต้นที่ 0 ถ้ายังไม่มี
        let currentCount = parseInt(localStorage.getItem('cartCount') || 0);

        // เพิ่มจำนวนสินค้าขึ้น 1
        localStorage.setItem('cartCount', currentCount + 1);

        // อัปเดตจำนวนสินค้าบนหน้าเว็บ
        document.querySelector('.total-item').textContent = currentCount + 1;
    });
});

// cart-functions.js
function removeFromBasket(productId) {
    console.log("Product removed:", productId);
    
    // Add logic to actually remove product from storage or state here
    
    // Update the item count in Local Storage
    let itemCount = parseInt(localStorage.getItem('cartCount') || 0);
    itemCount = Math.max(0, itemCount - 1);
    localStorage.setItem('cartCount', itemCount);
    
    // Update the displayed item count on the page
    const itemCountElements = document.querySelectorAll('.total-item');
    itemCountElements.forEach(element => {
        element.textContent = itemCount;
    });
}



// จัดการการแสดงจำนวนสินค้าบนไอคอนตะกร้าช้อปปิ้งทุกครั้งที่หน้าเว็บถูกโหลด
document.addEventListener('DOMContentLoaded', function() {
    const cartCount = localStorage.getItem('cartCount') || '0'; // ดึงจำนวนสินค้าจาก localStorage

    // อัปเดตจำนวนสินค้าที่แสดงบนทุกไอคอนตะกร้าช้อปปิ้ง
    const cartIcons = document.querySelectorAll('.fas.fa-shopping-cart');
    cartIcons.forEach(icon => {
        // ตรวจสอบว่ามีส่วนแสดงตัวเลขอยู่ใกล้ๆ กับไอคอนหรือไม่
        if (icon.nextElementSibling && icon.nextElementSibling.classList.contains('total-item')) {
            icon.nextElementSibling.textContent = cartCount;
        }
    });
});
