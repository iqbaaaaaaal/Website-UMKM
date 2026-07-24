# Website UMKM Desa Tambakboyo

Website statis untuk direktori UMKM KKN yang dapat diunggah gratis ke GitHub Pages dan disematkan ke Google Sites.

## Mulai mengedit

Buka `data.js`. Semua data yang biasanya perlu diganti ada di sana:

- nama universitas dan tim KKN;
- informasi Desa Tambakboyo;
- email, Instagram, alamat, dan WhatsApp;
- daftar kartu UMKM;
- daftar foto galeri.

Untuk menambah UMKM, salin salah satu objek di bagian `umkm`, lalu ubah isinya. Nomor WhatsApp harus menggunakan format `62...` tanpa tanda `+`, spasi, atau tanda hubung.

## Memasang logo asli

1. Simpan logo KKN Anda dengan nama `logo.png`.
2. Letakkan di folder `assets/images/` sehingga alamatnya menjadi `assets/images/logo.png`.
3. Muat ulang halaman. Tidak perlu mengubah kode lain.

Saat logo belum dipasang, situs akan otomatis menampilkan monogram huruf **K** sebagai pengganti.

## Mengganti foto

Foto contoh menggunakan URL gambar publik. Untuk memakai foto sendiri, letakkan file di `assets/images/`, misalnya `assets/images/keripik.jpg`, lalu ganti nilai `image` pada item terkait di `data.js` menjadi alamat tersebut.

## Upload ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `website-umkm-tambakboyo`.
2. Upload seluruh isi folder proyek ini (bukan folder induknya saja).
3. Di repository, buka **Settings** → **Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. Tunggu hingga GitHub memberi URL situs, misalnya `https://namapengguna.github.io/website-umkm-tambakboyo/`.

## Embed di Google Sites

1. Buka halaman Google Sites yang ingin diisi.
2. Pilih **Sisipkan / Insert** → **Sematkan / Embed** → **URL**.
3. Tempel URL GitHub Pages Anda.
4. Atur tinggi area embed sekitar 900–1200 px agar tampilan nyaman.
5. Publikasikan Google Sites.

## Menjalankan di komputer

Cukup klik dua kali `index.html`. Untuk hasil yang paling mendekati situs online, buka folder ini menggunakan ekstensi **Live Server** di VS Code.

## Struktur folder

```text
website-umkm-tambakboyo/
├── index.html       # Struktur halaman
├── style.css        # Tampilan hitam dan emas
├── script.js        # Pencarian, filter, modal, navigasi
├── data.js          # Semua konten yang mudah diedit
└── assets/images/   # Logo dan foto milik Anda
```
