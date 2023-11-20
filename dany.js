let grosirData = [
  { namaBarang: 'Minyak', harga: 15000, stok: 58 },
  { namaBarang: 'Beras', harga: 18000, stok: 44 },
  { namaBarang: 'Kopi', harga: 8000, stok: 61 }

];

function tambahGrosir() {
  const namaBarang = document.getElementById("namaBarang").value;
  const harga = parseFloat(document.getElementById("harga").value);
  const stok = parseInt(document.getElementById("stok").value);

  if (namaBarang && !isNaN(harga) && !isNaN(stok)) {
    const grosir = { namaBarang, harga, stok };
    grosirData.push(grosir);
    updateTabelGrosir();
    document.getElementById("grosirForm").reset();
  } else {
    alert("Isi semua data dengan benar.");
  }
}

function updateTabelGrosir() {
  const daftarGrosir = document.getElementById("daftarGrosir");
  daftarGrosir.innerHTML = "";

  grosirData.forEach((grosir, index) => {
    const row = daftarGrosir.insertRow();
    row.innerHTML = `
      <td>${grosir.namaBarang}</td>
      <td>${grosir.harga}</td>
      <td>${grosir.stok}</td>
      <td>
        <button onclick="editGrosir(${index})">Edit</button>
        <button onclick="hapusGrosir(${index})">Hapus</button>
      </td>
    `;
  });
}

function checkout() {
  // Dapatkan total stok yang akan di-checkout
  const totalCheckout = grosirData.reduce((total, item) => total + item.stok, 0);
  alert(`Total stok yang akan di-checkout: ${totalCheckout}`);
}

updateTabelGrosir();
function editGrosir(index) {
  // Mendapatkan data grosir berdasarkan index
  const grosir = grosirData[index];

  // Menetapkan nilai input form sesuai dengan data grosir yang dipilih
  document.getElementById("namaBarang").value = grosir.namaBarang;
  document.getElementById("harga").value = grosir.harga;
  document.getElementById("stok").value = grosir.stok;

  // Menghapus data grosir dari array
  grosirData.splice(index, 1);

  // Memperbarui tampilan tabel grosir setelah data dihapus
  updateTabelGrosir();
}

function hapusGrosir(index) {
  // Menghapus data grosir dari array berdasarkan index
  grosirData.splice(index, 1);

  // Memperbarui tampilan tabel grosir setelah data dihapus
  updateTabelGrosir();
}

