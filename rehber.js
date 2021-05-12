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
// Inputs
var isimInput = document.getElementById("nameInput");
var soyisimInput = document.getElementById("surnameInput");
var telNoInput = document.getElementById("numberInput");
var mailInput = document.getElementById("mailInput");
function ekleKontrol() {
    if (isimInput.value == '' || soyisimInput.value == '' || telNoInput.value == '' || mailInput.value == '') {
        alert("Lütfen Bilgileri Eksiksiz Giriniz!");
    }
    else {
        ekle();
    }
}
function ekle() {
    kisiEkle(isimInput, soyisimInput, telNoInput, mailInput);
}
function kisiEkle(isimInput, soyisimInput, telNoInput, mailInput) {
    var insan = new kisi();
    insan.id = (new Date()).getTime();
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
        guncelleIcon.setAttribute('onclick', 'guncelle(' + element.id + ')');
        tekSilIcon.setAttribute('onclick', 'tekSil(' + element.id + ')');
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
        isimInput.value = "";
        soyisimInput.value = "";
        telNoInput.value = "";
        mailInput.value = "";
    });
}
//
function hepsiniSil() {
    var confirmBox = confirm("Emin misiniz?");
    if (confirmBox == true) {
        rehber = [];
        kisileriEkranaYazdir();
        console.log(rehber);
    }
}
//
function tekSil(silinecekId) {
    var confirmBox = confirm("Emin misiniz?");
    if (confirmBox == true) {
        var findIndex = rehber.findIndex(function (kisi) {
            return kisi.id == silinecekId;
        });
        rehber.splice(findIndex, 1);
        kisileriEkranaYazdir();
        console.log(rehber);
    }
}
//
function guncelle(guncellenecekId) {
    var kisi = rehber.find(function (kisi) {
        return kisi.id == guncellenecekId;
    });
    isimInput.value = kisi.isim;
    soyisimInput.value = kisi.soyisim;
    telNoInput.value = kisi.tel;
    mailInput.value = kisi.mail;
    var guncelleButon = document.createElement('button');
    guncelleButon.classList.add('btn', 'btn-outline-primary', 'guncelle');
    guncelleButon.setAttribute('onclick', 'SatiriGuncelle(' + kisi.id + ')');
    guncelleButon.setAttribute('type', 'button');
    guncelleButon.setAttribute('id', kisi.id.toString());
    guncelleButon.innerHTML = "Güncelle";
    var butonKapsayici = document.getElementById('guncelleButonKapsayici');
    butonKapsayici.appendChild(guncelleButon);
    var ekleButonu = document.getElementById('ekle1');
    ekleButonu.style.display = 'none';
}
//
function SatiriGuncelle(guncellenecekKisiId) {
    var kisi = rehber.find(function (kisi) {
        return kisi.id == guncellenecekKisiId;
    });
    kisi.isim = isimInput.value;
    kisi.soyisim = soyisimInput.value;
    kisi.mail = mailInput.value;
    kisi.tel = telNoInput.value;
    kisileriEkranaYazdir();
    var guncellebuton = document.getElementById("" + guncellenecekKisiId.toString());
    guncellebuton.remove();
    var ekleButonu = document.getElementById('ekle1');
    ekleButonu.style.display = 'inline-block';
}
