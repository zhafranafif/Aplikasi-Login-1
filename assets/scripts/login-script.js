/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Comment : Membuat variabel untuk setiap elemen view.
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// Comment : Membuat variabel untuk menyimpan informasi email dan password.
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';
// Menambahkan aksi klik pada button.
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    // Mendapatkan nilai dari setiap input ketika tombol di tekan.
      const email = inputEmailElement.value;
      const password = inputPasswordElement.value;
    
    // Memastikan nilai email dan password sesuai dengan nilai yang tersimpan.
    if (email == expectedEmail && password == expectedPassword){
      // Jika sesuai maka program akan berpindah ke halaman home.
      goToHome();
    } else {
      // Jika tidak sesuai maka menampilkan informasi input salah.
      showPopUp();
    }
});
