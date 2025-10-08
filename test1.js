const inventarisGudangAwal = [
  { id: "B001", nama: "Buku Tulis", stok: 150, harga: 5000 },
  { id: "P002", nama: "Pulpen Gel", stok: 200, harga: 3000 },
  { id: "B003", nama: "Buku Gambar", stok: 80, harga: 8000 },
  { id: "P004", nama: "Pensil Warna", stok: 120, harga: 12000 }
];

const manajemenInventaris = {
    data: [...inventarisGudangAwal],

    tambahBarang(barangBaru) {
        const duplikat = this.data.find(item => item.id === barangBaru.id);
        if (duplikat) {
            throw new Error(`ID ${barangBaru.id} sudah ada di data`);
        }
        this.data.push(barangBaru);
        console.log(`Barang ${barangBaru.nama} sudah di tambahkan`);
    },

    updateStok(id, StokBaru) {
        const barang = this.data.find(item => item.id === id);
        if (!barang) {
            throw new Error(`Barang dengan ID ${id} tidak di temukan`);
        }
        barang.stok = barangBaru;
        console.log(`Stok ${barang.nama} diperbaarui menjadi ${StokBaru}`);
    },

    cariBarang(id) {
        const barang = this.data.find(item => item.id === id);
        if(!barang) {
            throw new Error(`Barang dengan Id ${id} tidak ada`);
        }
        return barang;
    },

    totalNilaiInventaris() {
        return this.data.reduce((total, item) => total + (item.stok * item.harga), 0);
    }
};

try {
    // console.log("Total Nilai AWal :", manajemenInventaris.totalNilaiInventaris());
    // manajemenInventaris.tambahBarang({id: "B007", nama: "ADE", stok: 50, harga: 4000});
    // manajemenInventaris.updateStok("B002", 180);
    // console.log("Cari Barang :", manajemenInventaris.cariBarang("B003"));
    console.log("Total Nilai Sekarang :", manajemenInventaris.totalNilaiInventaris());
} catch (error) {
    console.error(error.message)
}