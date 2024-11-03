// Validasi form
function validateForm() {
    let isValid = true;

    // Validasi Nama
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = "Nama hanya boleh mengandung huruf dan spasi.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validasi Email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Masukkan email yang valid.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validasi Nomor Telepon
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = "Nomor telepon hanya boleh angka (10-13 digit).";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Validasi Negara
    const countryInput = document.getElementById("country");
    const countryError = document.getElementById("countryError");
    if (countryInput.value === "") {
        countryError.textContent = "Silakan pilih negara.";
        isValid = false;
    } else {
        countryError.textContent = "";
    }

    // Jika validasi berhasil, tampilkan modal
    if (isValid) {
        showDiscordModal();
    }
    return false; // Mencegah submit form sebenarnya
}

// Menampilkan modal Discord
function showDiscordModal() {
    const modal = document.getElementById("discordModal");
    modal.style.display = "block";
}

// Menutup modal ketika tombol "X" diklik
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
    const modal = document.getElementById("discordModal");
    modal.style.display = "none";
});

// Menutup modal ketika pengguna mengklik di luar konten modal
window.addEventListener("click", (event) => {
    const modal = document.getElementById("discordModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Fetch daftar negara untuk dropdown "Negara"
document.addEventListener("DOMContentLoaded", () => {
    const countrySelect = document.getElementById("country");

    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement("option");
                option.value = country.name.common;
                option.textContent = country.name.common;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching countries:", error));
});
