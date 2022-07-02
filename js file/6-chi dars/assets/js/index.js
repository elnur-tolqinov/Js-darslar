var hi = "salom hammaga!";
console.log(hi);
// function aperatori ichiga birnecha kod larni jamlab ishlatadi
function salomBer(ism, yosh) { //ism, yosh digan sozlar html dagi button dan keladigan malumotni qabul qilib oladi
    console.log(hi + ". Mani ismim " + ism + ". Yoshim: " + yosh)
}

function yoshniQaytar(age) {
    if (age < 7) { //bunda age yani malumot qabul qiluvchi 
        return "siz maktab yoshiga yetmagansiz!" //agar berilgan qiymat 7 dan katta bo'lsa shu so'z chiqadi 
    } else {
        return "siz maktabga kirgansiz!" //agar berilgan qiymat 7 dan kichik bo'lsa shu so'z chiqadi
    }
}
var mytext = yoshniQaytar(12) // bunda 12 soni malumot ya'ni 12 age ga teng bo'ladi
console.log(mytext)