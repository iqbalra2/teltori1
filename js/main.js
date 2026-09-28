AOS.init({
    duration: 1000,
    once: true
});

function handleOrder(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const orderData = {
        name: name,
        phone: phone,
        address: address,
        date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem('teltori_orders') || '[]');
    orders.unshift(orderData);
    localStorage.setItem('teltori_orders', JSON.stringify(orders));

    document.getElementById('orderDetailsSummary').innerHTML = `
        গ্রাহক: <b>${name}</b><br>
        মোবাইল: <b>${phone}</b><br>
        ঠিকানা: <b>${address}</b><br><br>
        খুব শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।
    `;
    document.getElementById('orderModal').style.display = 'flex';
    document.getElementById('orderForm').reset();
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

function openAdminModal() {
    const pass = prompt("অ্যাডমিন পাসওয়ার্ড প্রবেশ করান:");
    if (pass === "teltori2026") {
        window.location.href = "admin.html";
    } else if (pass !== null) {
        alert("ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিয়ে আবার চেষ্টা করুন।");
    }
}
