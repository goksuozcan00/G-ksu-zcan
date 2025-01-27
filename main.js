// Daha Fazla Göster butonunu ve içerik alanını seç
const toggleButton = document.getElementById('toggleButton');
const extraContent = document.getElementById('extraContent');

// Butona tıklama işlevi
toggleButton.addEventListener('click', function() {
    // İçeriği göster veya gizle
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        toggleButton.textContent = "Daha Az Göster"; // Butonun metnini değiştir
    } else {
        extraContent.style.display = "none";
        toggleButton.textContent = "Daha Fazla Göster"; // Butonun metnini değiştir
    }
});
