

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




class kisi{
    id : number
    isim : string
    soyisim : string
    mail : string
    tel: string
}

let rehber:kisi[] = []

    // Inputs
    let isimInput = (<HTMLInputElement>document.getElementById("nameInput"));
    let soyisimInput = (<HTMLInputElement>document.getElementById("surnameInput"));
    let telNoInput = (<HTMLInputElement>document.getElementById("numberInput"));
    let mailInput = (<HTMLInputElement>document.getElementById("mailInput"));

function ekleKontrol(){
    
    if(
        isimInput.value == '' || soyisimInput.value == '' || telNoInput.value == '' || mailInput.value == '' 
    ){
        alert("Lütfen Bilgileri Eksiksiz Giriniz!");
    }else{
        ekle();
    }
}


function ekle(){
    
    kisiEkle(isimInput,soyisimInput,telNoInput,mailInput);
} 

function kisiEkle(isimInput,soyisimInput,telNoInput,mailInput){

    let insan = new kisi();
    if(rehber.length > 0){
        insan.id = rehber[rehber.length-1].id+1;
    }else{
        insan.id = 1;
    }
    

    insan.isim = isimInput.value
    insan.soyisim = soyisimInput.value
    insan.mail = mailInput.value
    insan.tel = telNoInput.value
    rehber.push(insan);
    console.log(rehber);
    kisileriEkranaYazdir();
}  

function kisileriEkranaYazdir(){

    let rehberGeneral = document.getElementById('numbers');
    rehberGeneral.innerHTML = "";

    rehber.forEach((element:kisi) => {
// add HTML
let row = document.createElement("div");    
let isim = document.createElement("div");    
let soyisim = document.createElement("div");    
let telNo = document.createElement("div");    
let mail = document.createElement("div");    
let iconlar = document.createElement("div");
let isimText = document.createElement("span");
let soyisimText = document.createElement("span");
let telNoText = document.createElement("span");
let mailText = document.createElement("span");
let guncelleIconKapsayici = document.createElement("a");
let tekSilIconKapsayici = document.createElement("a");
let mailKapsayici = document.createElement("a");
let guncelleIcon = document.createElement("i");
let tekSilIcon = document.createElement("i");

// classList
row.classList.add("row","mx-auto","numbers","p-4","mt-5","test");
isim.classList.add("col-md-2","text-center");    
soyisim.classList.add("col-md-2","text-center");    
telNo.classList.add("col-md-3","text-center");    
mail.classList.add("col-md-2","text-center");    
iconlar.classList.add("col-md-3");
guncelleIcon.classList.add("fas", "fa-edit", "fa-2x");
tekSilIcon.classList.add("fas", "fa-trash-alt", "fa-2x");

// Attribute
guncelleIconKapsayici.setAttribute('href', '#');
tekSilIconKapsayici.setAttribute('href', '#');
mailKapsayici.setAttribute("href", "#");
guncelleIcon.setAttribute('onclick','guncelle(this)');    
guncelleIcon.setAttribute('id',element.id.toString());    
tekSilIcon.setAttribute('onclick','tekSil(this)');
tekSilIcon.setAttribute('id',element.id.toString());
isimText.setAttribute('id','isim');
soyisimText.setAttribute('id','soyisim');
telNoText.setAttribute('id', 'tel');
mailText.setAttribute('id','mail');
iconlar.setAttribute('id','icons');

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

});}
//
function hepsiniSil(){
    let confirmBox = confirm("Emin misiniz?");
    if(confirmBox == true){
        rehber = [];
    kisileriEkranaYazdir(); 
    console.log(rehber);
    }
}
//
function tekSil(silinecekKisi){
    let confirmBox = confirm("Emin misiniz?");
    if(confirmBox == true){
        let findIndex = rehber.findIndex(kisi => {
            return kisi.id == silinecekKisi.id;
        });
        rehber.splice(findIndex,1);
        kisileriEkranaYazdir();
        console.log(rehber);
    }
    
}

//
function guncelle(guncellenecekKisi){
    
    
    let kisi = rehber.find((kisi:kisi) =>{
        return kisi.id == guncellenecekKisi.id;
    })

    
    isimInput.value = kisi.isim; 
    soyisimInput.value = kisi.soyisim;
    telNoInput.value = kisi.tel;
    mailInput.value = kisi.mail;

    let guncelleButon = document.createElement('button');
    guncelleButon.classList.add('btn','btn-outline-primary','guncelle');
    guncelleButon.setAttribute('onclick',`SatiriGuncelle(this)`);
    guncelleButon.setAttribute('type','button');
    guncelleButon.setAttribute('id',kisi.id.toString());
    guncelleButon.innerHTML = "Güncelle";
    let butonKapsayici = document.getElementById('guncelleButonKapsayici');
    butonKapsayici.appendChild(guncelleButon);
    
    let ekleButonu = document.getElementById('ekle1');
    ekleButonu.style.display = 'none';

}
//
function SatiriGuncelle(guncelleButonu){

    

    let kisiIndex = rehber.findIndex((element:kisi) =>{
        return element.id == guncelleButonu.id;
    })
    
    let insan = new kisi();
    if(guncelleButonu){
        insan.id = parseInt(guncelleButonu.id);
        insan.isim = isimInput.value;
        insan.soyisim = soyisimInput.value;
        insan.mail = mailInput.value;
        insan.tel = telNoInput.value;

        rehber.splice(kisiIndex,1,insan);

        kisileriEkranaYazdir(); 
    }
    
    let guncellebuton = document.getElementById(`${guncelleButonu.id.toString()}`);
    guncellebuton.remove();
    
    let ekleButonu = document.getElementById('ekle1');
    ekleButonu.style.display = 'inline-block';

}












