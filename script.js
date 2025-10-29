// Toggle Menu Mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Tutup menu mobile saat link diklik
    document.querySelectorAll(".nav-links li a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Portfolio Modal Functionality
const modal = document.getElementById("project-modal");
const closeModal = document.querySelector(".close-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDemo = document.getElementById("modal-demo");
const modalCode = document.getElementById("modal-code");

// Project data
const projects = {
    1: {
        title: "Aplikasi To-Do List",
        description: "Aplikasi manajemen tugas sederhana menggunakan Flutter dengan fitur tambah, edit, hapus, dan centang tugas yang sudah selesai. Aplikasi ini memiliki antarmuka yang user-friendly dan responsif.",
        image: "tdl.jpg",
        demo: "https://todo-app-ansori.netlify.app",
        code: "https://github.com/ansorimuhammad2206/todo-app"
    },
    2: {
        title: "Website Company Profile",
        description: "Website responsif untuk UMKM lokal menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan informasi perusahaan, produk, layanan, dan kontak dengan desain modern dan menarik.",
        image: "cp.png",
        demo: "https://company-profile-ansori.netlify.app",
        code: "https://github.com/ansorimuhammad2206/company-profile"
    },
    3: {
        title: "Kalkulator Sederhana",
        description: "Aplikasi kalkulator berbasis web dengan fungsionalitas dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian. Dilengkapi dengan antarmuka yang bersih dan mudah digunakan.",
        image: "ks.jpg",
        demo: "https://calculator-ansori.netlify.app",
        code: "https://github.com/ansorimuhammad2206/calculator"
    }
};

// Open modal when portfolio item is clicked
document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("click", () => {
        const projectId = item.getAttribute("data-project");
        const project = projects[projectId];
        
        // Fallback jika gambar tidak ditemukan
        const img = item.querySelector('img');
        modalImage.src = img.getAttribute('src');
        modalImage.alt = img.getAttribute('alt');
        
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalDemo.href = project.demo;
        modalCode.href = project.code;
        
        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent background scroll
        }
    });
});

// Close modal
if (closeModal) {
    closeModal.addEventListener("click", () => {
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Restore scroll
        }
    });
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert("Harap lengkapi semua field!");
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Saya akan membalas ke email ${email} segera.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading state untuk images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.addEventListener('error', function() {
            console.log('Gambar tidak ditemukan:', this.src);
        });
    });
});

// Fix untuk viewport mobile
function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
setViewportHeight();

// Error handling untuk elemen yang mungkin tidak ada
window.addEventListener('error', function(e) {
    console.log('Error occurred:', e.error);
});
// Deteksi browser support untuk gradient text
function checkGradientTextSupport() {
    const navBrand = document.querySelector('.nav-brand');
    const testElement = document.createElement('div');
    
    // Test untuk background-clip text support
    if ('backgroundClip' in testElement.style) {
        navBrand.classList.add('gradient-text');
    }
}

// Panggil saat halaman load
document.addEventListener('DOMContentLoaded', checkGradientTextSupport);