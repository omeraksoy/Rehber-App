// sayfadaki ekle butonuna basildiginda  inputlardaki bilgileri
// alip kisiekle fonksiyonuna gonderen sonrasinda safyadaki 
// kayitlari yenileyen fonksiyonu cagiran bir fonksiyaon yaz
// sayfayi refresh et
// rehber listesini alip dongu ile icindeki her bir kisi icin sayfaya
// div ekleyerek bilgileri dolduran bir fonsion
// satirlardaki silme butonuna satirin index numarasi ile calistiginda 
// kisisil fonsiyonunu calistiran ve sayfadaki kayitlari yenileyen 
// fonksiyonu cagiran fonksiyon
// satirdaki guncelle butonunu satirdaki index numarasi ile calisir 
// index numrasi ile kisiGetir fonsiyonundan kisi bilgilerini alir
// inputlara bu bilgileri doldurur ve guncelnenekindex degiskenine 
// index numatasini yazar.
// inputlardaki guncelle butonu guncellenecekIndex ile guncellenecek
// kisi bilgilerini ceker inputlardaki bilgileri alarak kisi bilgilerini
// gunceller ve sayfayi refresh eder
var kisi = /** @class */ (function () {
    function kisi() {
    }
    return kisi;
}());
var rehber = [];
function ekleKontrol() {
    var isimInput = document.getElementById("nameInput");
    var soyisimInput = document.getElementById("surnameInput");
    var telNoInput = document.getElementById("numberInput");
    var mailInput = document.getElementById("mailInput");
    if (isimInput.value == '' || soyisimInput.value == '' || telNoInput.value == '' || mailInput.value == '') {
        alert("Lütfen Bilgileri Eksiksiz Giriniz!");
    }
    else {
        ekle();
    }
}
function ekle() {
    var isimInput = document.getElementById("nameInput");
    var soyisimInput = document.getElementById("surnameInput");
    var telNoInput = document.getElementById("numberInput");
    var mailInput = document.getElementById("mailInput");
    kisiEkle(isimInput, soyisimInput, telNoInput, mailInput);
}
function kisiEkle(isimInput, soyisimInput, telNoInput, mailInput) {
    var insan = new kisi();
    if (rehber.length > 0) {
        insan.id = rehber[rehber.length - 1].id + 1;
    }
    else {
        insan.id = 1;
    }
    insan.isim = isimInput.value;
    insan.soyisim = soyisimInput.value;
    insan.mail = mailInput.value;
    insan.tel = telNoInput.value;
    rehber.push(insan);
    console.log(rehber);
    kisileriEkranaYazdir();
}
function kisileriEkranaYazdir() {
    var rehberGeneral = document.getElementById('numbers');
    rehberGeneral.innerHTML = "";
    rehber.forEach(function (element) {
        // add HTML
        var row = document.createElement("div");
        var isim = document.createElement("div");
        var soyisim = document.createElement("div");
        var telNo = document.createElement("div");
        var mail = document.createElement("div");
        var iconlar = document.createElement("div");
        var isimText = document.createElement("span");
        var soyisimText = document.createElement("span");
        var telNoText = document.createElement("span");
        var mailText = document.createElement("span");
        var guncelleIconKapsayici = document.createElement("a");
        var tekSilIconKapsayici = document.createElement("a");
        var mailKapsayici = document.createElement("a");
        var guncelleIcon = document.createElement("i");
        var tekSilIcon = document.createElement("i");
        // classList
        row.classList.add("row", "mx-auto", "numbers", "p-4", "mt-5", "test");
        isim.classList.add("col-md-2", "text-center");
        soyisim.classList.add("col-md-2", "text-center");
        telNo.classList.add("col-md-3", "text-center");
        mail.classList.add("col-md-2", "text-center");
        iconlar.classList.add("col-md-3");
        guncelleIcon.classList.add("fas", "fa-edit", "fa-2x");
        tekSilIcon.classList.add("fas", "fa-trash-alt", "fa-2x");
        // Attribute
        guncelleIconKapsayici.setAttribute('href', '#');
        tekSilIconKapsayici.setAttribute('href', '#');
        mailKapsayici.setAttribute("href", "#");
        guncelleIcon.setAttribute('onclick', 'guncelle(this)');
        guncelleIcon.setAttribute('id', element.id.toString());
        tekSilIcon.setAttribute('onclick', 'tekSil(this)');
        tekSilIcon.setAttribute('id', element.id.toString());
        isimText.setAttribute('id', 'isim');
        soyisimText.setAttribute('id', 'soyisim');
        telNoText.setAttribute('id', 'tel');
        mailText.setAttribute('id', 'mail');
        iconlar.setAttribute('id', 'icons');
        // appendChild
        rehberGeneral.appendChild(row);
        row.appendChild(isim);
        row.appendChild(soyisim);
        row.appendChild(telNo);
        row.appendChild(mail);
        row.appendChild(iconlar);
        iconlar.appendChild(guncelleIconKapsayici);
        iconlar.appendChild(tekSilIconKapsayici);
        guncelleIconKapsayici.appendChild(guncelleIcon);
        tekSilIconKapsayici.appendChild(tekSilIcon);
        isim.appendChild(isimText);
        soyisim.appendChild(soyisimText);
        telNo.appendChild(telNoText);
        mail.appendChild(mailText);
        mailText.appendChild(mailKapsayici);
        // innerHTML
        isimText.innerHTML = element.isim;
        soyisimText.innerHTML = element.soyisim;
        telNoText.innerHTML = element.tel;
        mailKapsayici.innerHTML = element.mail;
        var isimInput = document.getElementById("nameInput");
        var soyisimInput = document.getElementById("surnameInput");
        var telNoInput = document.getElementById("numberInput");
        var mailInput = document.getElementById("mailInput");
        isimInput.value = "";
        soyisimInput.value = "";
        telNoInput.value = "";
        mailInput.value = "";
    });
}
//
function hepsiniSil() {
    rehber = [];
    kisileriEkranaYazdir();
    console.log(rehber);
}
//
function tekSil(silinecekKisi) {
    var confirmBox = confirm("Emin misiniz?");
    if (confirmBox == true) {
        var findIndex = rehber.findIndex(function (kisi) {
            return kisi.id == silinecekKisi.id;
        });
        rehber.splice(findIndex, 1);
        kisileriEkranaYazdir();
        console.log(rehber);
    }
}
//
function guncelle(guncellenecekKisi) {
    var isimInput = document.getElementById("nameInput");
    var soyisimInput = document.getElementById("surnameInput");
    var telNoInput = document.getElementById("numberInput");
    var mailInput = document.getElementById("mailInput");
    var kisi = rehber.find(function (kisi) {
        return kisi.id == guncellenecekKisi.id;
    });
    isimInput.value = kisi.isim;
    soyisimInput.value = kisi.soyisim;
    telNoInput.value = kisi.tel;
    mailInput.value = kisi.mail;
    var guncelleButon = document.createElement('button');
    guncelleButon.classList.add('btn', 'btn-outline-primary', 'ekle');
    guncelleButon.setAttribute('onclick', "SatiriGuncelle(this)");
    guncelleButon.setAttribute('type', 'button');
    guncelleButon.setAttribute('id', kisi.id.toString());
    guncelleButon.innerHTML = "Güncelle";
    var butons = document.querySelector('.buttons');
    butons.appendChild(guncelleButon);
    var ekleButonu = document.getElementById('ekle1');
    ekleButonu.style.display = 'none';
}
//
function SatiriGuncelle(guncelleButonu) {
    var isimInput = document.getElementById("nameInput");
    var soyisimInput = document.getElementById("surnameInput");
    var telNoInput = document.getElementById("numberInput");
    var mailInput = document.getElementById("mailInput");
    var kisiIndex = rehber.findIndex(function (element) {
        return element.id == guncelleButonu.id;
    });
    var insan = new kisi();
    if (guncelleButonu) {
        insan.id = parseInt(guncelleButonu.id);
        insan.isim = isimInput.value;
        insan.soyisim = soyisimInput.value;
        insan.mail = mailInput.value;
        insan.tel = telNoInput.value;
        rehber.splice(kisiIndex, 1, insan);
        kisileriEkranaYazdir();
    }
    var guncellebuton = document.getElementById("" + guncelleButonu.id.toString());
    guncellebuton.remove();
    var ekleButonu = document.getElementById('ekle1');
    ekleButonu.style.display = 'inline-block';
}
