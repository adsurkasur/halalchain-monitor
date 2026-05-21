# Halal Cold Chain Traceability System

## Project Overview

Halal Cold Chain Traceability System adalah platform traceability dan monitoring logistik berbasis IoT yang dirancang untuk mendukung ketertelusuran distribusi produk perikanan secara real-time. Sistem ini dikembangkan sebagai enhancement layer yang dapat terintegrasi dengan STELINA (Sistem Ketertelusuran dan Logistik Ikan Nasional oleh KKP).

Fokus utama sistem bukan hanya tracking lokasi pengiriman, tetapi memastikan integritas distribusi produk melalui monitoring cold chain, validasi penerimaan barang, dan histori pengiriman yang dapat diverifikasi.

Platform memanfaatkan kombinasi:

* GPS tracking
* sensor suhu
* sensor kelembapan
* RFID/NFC validation
* shipment lifecycle monitoring
* halal integrity monitoring

Sistem dirancang sebagai modern operational platform yang membantu perusahaan logistik, distributor, dan penerima barang memantau kondisi pengiriman ikan secara transparan dan real-time.

---

# Main Objectives

Tujuan utama sistem adalah menciptakan platform ketertelusuran logistik yang:

* meningkatkan transparansi distribusi ikan,
* menjaga integritas cold chain,
* mendukung monitoring halal logistics,
* menyediakan proof of delivery digital,
* dan meningkatkan visibility rantai pasok perikanan.

Selain itu, sistem juga bertujuan membantu proses audit, monitoring operasional, dan dokumentasi distribusi produk berbasis data real-time.

---

# Core Concept

Sistem bekerja dengan pendekatan shipment-based traceability.

Setiap pengiriman akan memiliki:

* shipment identity,
* invoice,
* tracking session,
* monitoring configuration,
* dan validation mechanism.

Setiap shipment dipantau secara real-time menggunakan perangkat IoT yang ditempatkan pada kendaraan logistik atau container distribusi.

Data sensor dikirim secara berkala ke server untuk ditampilkan pada dashboard monitoring.

---

# System Workflow

## 1. Shipment Creation

Perusahaan membuat shipment melalui dashboard sistem.

Data yang dimasukkan meliputi:

* informasi pengiriman,
* jenis produk,
* volume,
* tujuan distribusi,
* kendaraan,
* driver,
* dan parameter monitoring.

Setelah shipment dibuat, sistem akan:

* menghasilkan shipment ID,
* membuat tracking session,
* menghasilkan RFID/NFC pairing,
* dan mengaktifkan monitoring shipment.

---

## 2. Real-Time Monitoring

Perangkat IoT pada kendaraan mengirimkan data:

* lokasi GPS,
* suhu,
* kelembapan,
* timestamp.

Data dikirim secara berkala untuk membentuk histori perjalanan shipment.

Monitoring dilakukan secara real-time melalui dashboard.

---

## 3. Cold Chain Integrity Monitoring

Sistem memantau kondisi distribusi menggunakan parameter tertentu.

Contohnya:

* suhu melebihi batas tertentu,
* kelembapan abnormal,
* sensor disconnect,
* route deviation.

Jika terjadi kondisi abnormal, sistem akan menghasilkan alert dan menandai shipment sebagai integrity warning atau integrity risk.

Konsep ini digunakan untuk mendukung monitoring halal logistics dan menjaga kualitas distribusi produk perikanan.

---

## 4. RFID/NFC Validation

Saat shipment diterima, penerima melakukan validasi menggunakan NFC atau RFID.

Proses validasi digunakan untuk:

* memverifikasi shipment,
* memastikan pengiriman diterima,
* mencatat timestamp penerimaan,
* dan membuat digital proof of delivery.

Sistem juga dapat menyediakan QR backup validation sebagai alternatif.

---

# Traceability Concept

Sistem menerapkan konsep end-to-end traceability.

Setiap shipment memiliki histori lengkap:

* origin,
* destination,
* route history,
* sensor history,
* delivery validation,
* dan operational events.

Semua aktivitas shipment disimpan sebagai timeline operasional yang dapat digunakan untuk monitoring maupun audit.

---

# Halal Integrity Concept

Konsep halal pada sistem ini tidak hanya berfokus pada label halal produk, tetapi pada integritas proses distribusi.

Sistem membantu memastikan bahwa:

* cold chain tetap terjaga,
* kondisi distribusi tetap stabil,
* histori distribusi dapat diverifikasi,
* dan proses logistik memiliki dokumentasi digital yang transparan.

Pendekatan ini mendukung konsep halal assurance pada distribusi produk perikanan.

---

# IoT Integration

Sistem memanfaatkan perangkat IoT yang dipasang pada kendaraan logistik atau container.

Perangkat digunakan untuk:

* membaca lokasi GPS,
* memonitor suhu,
* memonitor kelembapan,
* dan mendukung RFID/NFC validation.

IoT device mengirim data secara berkala ke backend platform untuk ditampilkan pada dashboard monitoring.

---

# STELINA Integration

Platform dirancang agar dapat mendukung integrasi dengan STELINA.

Sistem berfungsi sebagai:

* operational monitoring layer,
* IoT traceability layer,
* dan realtime shipment monitoring system.

Integrasi memungkinkan data distribusi dan histori shipment menjadi lebih transparan dan terdokumentasi secara digital.

---

# User Roles

## Company

Perusahaan memiliki akses untuk:

* membuat shipment,
* memonitor pengiriman,
* melihat alert,
* memantau histori shipment,
* dan mengelola operasional distribusi.

---

## Receiver

Penerima memiliki akses untuk:

* memvalidasi shipment,
* melihat status pengiriman,
* dan mengakses histori penerimaan.

---

## Admin

Admin memiliki akses monitoring sistem secara keseluruhan untuk kebutuhan operasional dan pengawasan.

---

# Main Features

## Dashboard Monitoring

Dashboard digunakan untuk:

* memantau shipment aktif,
* melihat kondisi sensor,
* melihat alert,
* dan mengakses aktivitas distribusi secara real-time.

---

## Shipment Management

Fitur shipment management digunakan untuk:

* membuat shipment,
* mengelola pengiriman,
* melihat histori distribusi,
* dan memonitor status shipment.

---

## Live Tracking

Sistem menyediakan live tracking menggunakan GPS dan visualisasi map untuk memantau lokasi kendaraan distribusi.

---

## Cold Chain Monitoring

Monitoring suhu dan kelembapan dilakukan secara real-time untuk memastikan kondisi distribusi tetap sesuai standar.

---

## RFID/NFC Validation

Sistem menyediakan validasi pengiriman menggunakan NFC atau RFID sebagai digital proof of delivery.

---

## Alert System

Sistem memberikan notifikasi jika terjadi:

* suhu abnormal,
* kelembapan abnormal,
* sensor disconnect,
* route deviation,
* atau integrity warning.

---

# UX Direction

Platform dirancang dengan pendekatan:

* industrial modern,
* operational dashboard,
* enterprise SaaS,
* dan logistics monitoring platform.

Fokus utama UX adalah:

* clarity,
* monitoring efficiency,
* operational visibility,
* dan audit-friendly information hierarchy.

---

# Frontend Direction

Frontend dikembangkan menggunakan:

* Next.js
* responsive web architecture
* dashboard-oriented layout
* realtime monitoring interface

Platform diprioritaskan sebagai responsive web application dan dapat dikembangkan menjadi mobile app menggunakan Capacitor.

---

# Platform Vision

Platform ini diharapkan menjadi sistem traceability modern yang membantu meningkatkan:

* transparansi distribusi ikan,
* monitoring cold chain,
* integritas logistik halal,
* dan digitalisasi supply chain perikanan.

Sistem juga diharapkan mampu menjadi fondasi pengembangan traceability berbasis IoT untuk distribusi produk pangan di masa depan.
