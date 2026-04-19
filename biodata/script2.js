function kirimData() {
  var nama = document.getElementById("namaMhs").value;
  var nim = document.getElementById("nimMhs").value;
  var angkatan = document.getElementById("tahunMsk").value;
  var peminatan = document.querySelector("input[name=peminatan]:checked"); 
  var tanggal = document.getElementById("tanggalLahir").value; 
  var alamat = document.getElementById("alamat").value;

  if (!nama || !nim || !angkatan || !tanggal || !alamat) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  if (!peminatan) {
    alert("Mohon pilih salah satu bidang peminatan.");
    return;
  }

  var nilaiPeminatan = peminatan.value; 

  alert(
    "Nama : " + nama +
    "\nNIM : " + nim +
    "\nAngkatan : " + angkatan +
    "\nPeminatan : " + nilaiPeminatan +
    "\nTanggal : " + tanggal +
    "\nAlamat : " + alamat
  );

  clearForm();
}

function clearForm() {
  document.getElementById("namaMhs").value = ""; 
  document.getElementById("nimMhs").value = "";   
  document.getElementById("tahunMsk").value = "";
  document.getElementById("tanggalLahir").value = ""; 
  document.getElementById("alamat").value = ""; 

  var radioButtons = document.querySelectorAll('input[name="peminatan"]');
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}