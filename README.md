- Nama : Yosi Julia Utami
- NIM : H1D021022

1. Screenshoot
   Halaman Login
   ![Screenshot Login](https://github.com/yosijulia31/YOSIJULIAUTAMI_H1D021022_IonicVueFirebase/blob/master/screenshoot/Screenshot%20(208).png)
   Halaman Home
    ![Screenshot Login](https://github.com/yosijulia31/YOSIJULIAUTAMI_H1D021022_IonicVueFirebase/blob/master/screenshoot/Screenshot%20(209).png)
   Halaman Profile
   ![Screenshot Login](https://github.com/yosijulia31/YOSIJULIAUTAMI_H1D021022_IonicVueFirebase/blob/master/screenshoot/Screenshot%20(210).png)
   Ketika klik tombol logout maka akan kembali di halaman login
    ![Screenshot Login](https://github.com/yosijulia31/YOSIJULIAUTAMI_H1D021022_IonicVueFirebase/blob/master/screenshoot/Screenshot%20(211).png)
3. Langkah-Langkah Autentikasi Login Google di Aplikasi Ionic 8
   - Setup Firebase : pertama, buat project di firebase console. lalu tambahkan aplikasi android/iOs, aktifkan metode sign-in google di "authentication" > "sign-in method" dan konfigurasi.
   - Membuat project ionic dan Install package Firebase di ionic 'npm install pinia firebase'
   - Pada pembuatan project, Konfigurasi Firebase menghubungkan aplikasi Ionic ke server Firebase tertentu dengan menggunakan kredensial proyek.
   - menambahkan file firebaseconfig.js dan Impor konfigurasi ini di file main.ts atau file utama aplikasi
   - menambahkan folder yang berisi file lainnya seperti: firebase.ts pada folder utils, auth.ts pada folder stores dan jalankan perintah 'npm i --save @codetrix-studio/capacitor-google-auth',
   - loginpage.vue, homepage.vue dan profilepage.vue di folder views, tabsmenu.vue folder components.
   - Membuat fungsi login menggunakan firebase auth dan Masukkan Client ID ke dalam kode yang ada di src/stores/auth.ts
   - ubah konfigurasi router yang berada di src/router/index.ts
   - Implementasi Login Google: Fungsi signInWithPopup memulai proses autentikasi. Firebase membuka popup untuk login Google dan mengembalikan token autentikasi serta informasi pengguna setelah berhasil
   - Mendapatkan data profil: Data seperti displayName, email, dan photoURL tersedia di objek user setelah login sukses. Data ini bisa langsung diproses dan ditampilkan di UI.
     
   
