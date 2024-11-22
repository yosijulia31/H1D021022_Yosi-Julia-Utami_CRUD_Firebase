- Nama : Yosi Julia Utami
- NIM : H1D021022

**Screenshoot**
   Halaman Login
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(215).png)
   Halaman Home
      ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(216).png)
   Create (Form input untuk menambahkan data baru.)
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(218).png)
   Read (Tampilan daftar data aktif dan data yang sudah selesai)
    ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(219).png)
   Apabila di geser makan tampilan akan seperti ini: terdapat fitur lihat dan edit
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(220).png)
   Edit ( untuk mengedit data)
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(221).png)
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(222).png)
   Delete (Opsi hapus pada daftar data)
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(223).png)
   proses loading
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(224).png)
   berhasil dihapus
   ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(225).png)

**Penjelasan CRUD**
   
1. Create (Tambah Data)
- Penjelasan: Proses Create memungkinkan pengguna menambahkan data baru ke aplikasi.
- Input: Pengguna mengisi title dan description pada form yang disediakan.
- Submit: Saat tombol "Add" ditekan, data dikirim ke Firebase melalui fungsi addTodo. Data tersebut disimpan di Firestore Database dengan properti
  
2. Read (Melihat Data)
- Penjelasan: Proses Read adalah menampilkan data yang ada di Firestore pada antarmuka aplikasi.
- Data dibagi menjadi dua kategori:
a. Active Todos: Data yang belum selesai (status: false).
b. Completed Todos: Data yang sudah selesai (status: true).
- Setiap item ditampilkan menggunakan komponen IonCard:
Title: Ditampilkan dengan gaya teks pendek (ellipsis jika panjang).
Description: Deskripsi tugas.
Relative Time: Waktu terakhir diperbarui, seperti "5 minutes ago".

3. Update (Perbarui Data)
- Penjelasan: Proses Update memungkinkan pengguna memperbarui data yang sudah ada. Pengguna mengklik ikon edit (ikon pena), yang membuka modal untuk mengedit data. Data yang sudah ada akan ditampilkan di form untuk diedit.
Saat disubmit, data diperbarui di Firestore melalui fungsi updateTodo.
Firebase akan mencatat waktu terbaru data diperbarui (updatedAt).

4. Delete (Hapus Data)
- Penjelasan: Proses Delete memungkinkan pengguna menghapus data dari aplikasi.
a. Pengguna dapat menghapus data melalui: Geser ke kiri pada item (Swipe to Delete). Klik ikon tong sampah.
b. Konfirmasi penghapusan dilakukan melalui fungsi deleteTodo, yang menghapus data dari Firestore.

5. Transisi Status (Active ke Completed)
- Penjelasan: Pengguna dapat mengubah status tugas dari Active menjadi Completed (sebaliknya juga memungkinkan). Ini dilakukan melalui fungsi updateStatus, yang mengubah properti status pada Firestore.

**Tugas Tambahan**
Build Ionic kalian ke bentuk Apk
 ![Screenshot Login](https://github.com/yosijulia31/H1D021022_Yosi-Julia-Utami_CRUD_Firebase/blob/main/screenshoot/Screenshot%20(227).png)
 Langkah-Langkah:
1. ionic capacitor add android
2. npm install
3. Build Proyek Ionic untuk Produksi Jalankan perintah berikut untuk membangun proyek Ionic dalam mode produksi: ionic build --prod
4. sync proyek dengan android : ionic capacitor copy android
5. buka andorid studio : ionic capacitor open android
6. Terakhir di Android Studio, pilih Build > Build Bundle(s) / APK(s) > Build APK(s). 

