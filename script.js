document.addEventListener('DOMContentLoaded', function () {
    // Elemen-elemen untuk fitur scroll
    const scrollContainer = document.getElementById('game-cards-container');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const navbar = document.querySelector('.navbar');

    let lastScrollPosition = 0;

    // Event listener untuk mendeteksi scroll dan menampilkan navbar ketika scroll ke atas
    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition < lastScrollPosition) {
            // Scroll ke atas, tampilkan navbar
            navbar.style.top = '0';
        } else {
            // Scroll ke bawah, sembunyikan navbar
            navbar.style.top = '-60px'; // Sesuaikan nilai ini dengan tinggi navbar
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Elemen-elemen form "Contact Me"
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameValidationMessage = document.getElementById('name-validation-message');
    const emailValidationMessage = document.getElementById('email-validation-message');
    const messageValidationMessage = document.getElementById('message-validation-message');

    // Elemen-elemen form "Join Us"
    const joinButton = document.querySelector('.join-button');
    const modal = document.getElementById('join-form-modal');
    const closeButton = document.querySelector('.close-button');
    const joinForm = document.getElementById('join-us-form');

    // Validasi form "Join Us"
    const fullName = document.getElementById('full-name');
    const emailJoin = document.getElementById('email-join');
    const phoneNumber = document.getElementById('phone-number');
    const country = document.getElementById('country');

    const fullNameValidationMessage = document.getElementById('full-name-validation-message');
    const emailJoinValidationMessage = document.getElementById('email-join-validation-message');
    const phoneNumberValidationMessage = document.getElementById('phone-number-validation-message');
    const countryValidationMessage = document.getElementById('country-validation-message');

    // Smooth scrolling untuk navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah aksi default

            // Ambil target elemen berdasarkan href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll ke elemen target dengan smooth
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fungsi untuk scroll
    scrollLeftButton.addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });

    // Event listener untuk form "Contact Me" submit
    contactForm.addEventListener('submit', function (e) {
        let isValid = true;

        // Validasi nama
        if (!validateName(nameInput.value)) {
            nameValidationMessage.textContent = 'Nama hanya boleh mengandung huruf dan spasi';
            nameValidationMessage.style.display = 'block';
            isValid = false;
        } else {
            nameValidationMessage.style.display = 'none';
        }

        // Validasi email
        if (!validateEmail(emailInput.value)) {
            emailValidationMessage.textContent = 'Masukan email yang valid';
            emailValidationMessage.style.display = 'block';
            isValid = false;
        } else {
            emailValidationMessage.style.display = 'none';
        }

        // Validasi pesan
        if (!validateMessage(messageInput.value)) {
            messageValidationMessage.textContent = 'Pesan tidak boleh kosong atau hanya berisi simbol';
            messageValidationMessage.style.display = 'block';
            isValid = false;
        } else {
            messageValidationMessage.style.display = 'none';
        }

        // Jika validasi gagal, cegah form submit
        if (!isValid) {
            e.preventDefault();
            return;
        }

        e.preventDefault(); // Mencegah aksi submit default

        // Membuat elemen notifikasi
        const messageNotification = document.createElement('div');
        messageNotification.textContent = "Pesan terkirim";
        messageNotification.classList.add('message-notification');

        // Menambahkan progress bar
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        messageNotification.appendChild(progressBar);

        document.body.appendChild(messageNotification);

        // Menampilkan notifikasi dengan efek fade-in
        setTimeout(() => {
            messageNotification.classList.add('show');
        }, 10);

        // Memulai animasi progress bar
        setTimeout(() => {
            progressBar.style.width = '0';
        }, 0);

        // Menghilangkan notifikasi dengan efek fade-out
        setTimeout(() => {
            messageNotification.classList.remove('show');
        }, 3000);

        // Menghapus elemen setelah animasi selesai
        setTimeout(() => {
            document.body.removeChild(messageNotification);
        }, 3500);

        // Mereset form setelah dikirim
        contactForm.reset();
    });

    // Event listener untuk tombol "Join Us"
    joinButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Event listener untuk tombol close pada modal
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Menutup modal saat mengklik di luar modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Event listener untuk form "Join Us" submit
    joinForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Validasi nama lengkap
        if (!validateName(fullName.value)) {
            fullNameValidationMessage.textContent = 'Nama hanya boleh mengandung huruf dan spasi';
            fullNameValidationMessage.style.display = 'block';
            isValid = false;
        } else {
            fullNameValidationMessage.style.display = 'none';
        }

        // Validasi email
        if (!validateEmail(emailJoin.value)) {
            emailJoinValidationMessage.textContent = 'Masukan email yang valid';
            emailJoinValidationMessage.style.display = 'block';
            isValid = false;
        } else {
            emailJoinValidationMessage.style.display = 'none';
        }

        // Validasi nomor telepon
        if (!/^\d{10,15}$/.test(phoneNumber.value)) {
            phoneNumberValidationMessage.textContent = 'Masukan nomor telepon yang valid (10-15 digit)';
            phoneNumberValidationMessage.style.display = 'block';
            isValid = false;
        } else {
            phoneNumberValidationMessage.style.display = 'none';
        }

        // Validasi negara
        if (!validateName(country.value)) {
            countryValidationMessage.textContent = 'Nama negara hanya boleh mengandung huruf dan spasi';
            countryValidationMessage.style.display = 'block';
            isValid = false;
        } else {
            countryValidationMessage.style.display = 'none';
        }

        // Jika semua validasi berhasil
        if (isValid) {
            modal.style.display = 'none';
            joinForm.reset();

            // Membuka grup Discord di tab baru
            window.open('https://discord.gg/xKMB5DYZ', '_blank');
        }
    });

    // Fungsi untuk memvalidasi input nama hanya mengandung alfabet
    function validateName(name) {
        const alphabetPattern = /^[A-Za-z\s]+$/; // Hanya huruf dan spasi yang diizinkan
        return alphabetPattern.test(name);
    }

    // Fungsi untuk memvalidasi input email
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Fungsi untuk memvalidasi input pesan
    function validateMessage(message) {
        return message.trim().length > 0;
    }

    // Fungsi untuk mengambil dan menampilkan daftar negara dalam dropdown
    async function loadCountries() {
        const countrySelect = document.getElementById('country');
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countries = await response.json();

            // Mengurutkan negara berdasarkan nama
            const sortedCountries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

            // Menambahkan setiap negara sebagai option di select
            sortedCountries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.cca2; // Menyimpan kode negara sebagai value
                option.textContent = country.name.common; // Nama negara yang ditampilkan
                countrySelect.appendChild(option);
            });
        } catch (error) {
            console.error('Gagal memuat daftar negara:', error);
        }
    }

    // Panggil fungsi loadCountries saat DOM sudah siap
    loadCountries();
});
