//https://randomuser.me/api/

// JSON
//var list = '[]';


fetch('https://randomuser.me/api/') //fetch sayt lenkini uladi yani saytdan malumot olishga yordam beradi
    .then(response => response.json()) //.then saytdan kelayot malumotlarni response tenglab json formatga o'tqizadi yani response.json
    .then(response => {

        let jins = response.results[0].gender == "female"?"Ayol":"Erkak"; //bunda .gender female teng bo'las ayol chiqara teng bolmasa Erkak chiqaradi
//document.querySelector htmldagi classlarni js chaqirb beradi
        document.querySelector('.first').innerText = response.results[0].name.first; //first class berilgan h2 ga saytdan kelayotgan malumotni joylayabdi
        document.querySelector('.last').innerText = response.results[0].name.last;
        document.querySelector('.phone').innerText = response.results[0].name.phone;
        document.querySelector('.email').innerText = response.results[0].name.email;
        document.querySelector('.gender').innerText = jins;
        document.querySelector('.country').innerText = response.results[0].location.country;
        document.querySelector('.img').src = response.results[0].picture.medium;
        console.log(response.results[0]);
    });