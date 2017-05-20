function tambah_tulisan() {
    "use strict"; //deklarasi ini akan membuat semua variable harus dideklarasikan terlebih dahulu
    
    //Deklarasi
    var a = document.getElementById("output-1");
    var b = document.getElementById("output-2");
    //c = document.getElementById("output-3"); // variable tanpa deklarasi ini, yg sharusnya bertipe global, akan error jika ada 'use strict'
    
    //Items
    a.innerHTML += "<p>Tulisan Pertama berhasil keluar!</p>";
    b.innerHTML += "<p>Ini tulisan kedua gan!</p>";
    //c.innerHTML += "<p>LOL Variable GLOBAL nya mau!</p>";
}

function cekPanjang() {
    "use strict";
    
    var a = document.getElementById("edtTeks").value;
    var b = a.length;
    var output = document.getElementById("output-4");
    
    //Outputkan
    output.innerHTML += "<p> Panjang = " + b + " kata</p>";
}

function maunyaGede() {
    "use strict";
    
    var a = document.getElementById("edtTeks").value;
    var b = a.toUpperCase();
    var output = document.getElementById("output-5");
    
    //Outputkan
    output.innerHTML += "<p> Hasil = " + b;
}

function cekLulus() {
    "use strict";
    
    var pesertaLulus = ["Jennifer", "Holly", "Carl", "RNGSama"];
    var pesertaInput = document.getElementById("peserta").value;
    var output = document.getElementById("hasil");
    
    //Operasi Pengecekan
    if (pesertaLulus.indexOf(pesertaInput) > -1) {
        output.innerHTML += "<p style=color:green>Selamat! Nama '" + pesertaInput + "' terdaftar</p>";
    }  else if (pesertaInput !== "" && pesertaLulus.indexOf(pesertaInput) === -1) {
        output.innerHTML += "<p style=color:red>Maaf! nama '" + pesertaInput + "' tidak terdaftar</p>";
    } else {
        output.innerHTML += "";
    }
}