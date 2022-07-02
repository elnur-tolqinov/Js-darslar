// object array ga o'xshagan ro'yhat farqi objectga kalit so'z yoziladi
let moshina={rangi:"oq"}

// objectga malumot qo'shish
moshina.yili="2020" //malumot qo'shishda objectni chaqirib kalit so'z yozib faqat takrorlanmas kalit so'z yozish kerak
moshina.tonirovka=true  //true tonirovkani borligini bildiradi
moshina.haydovchilar=['Anvar'] //objectga array qo'shsa ham bo'ladi

// objectdagi ma'lumotlarni o'zgartirish
moshina.rangi='qora'
moshina.tonirovka='false'

// objectdagi arrayga malumot qo'shish
moshina.haydovchilar[1]='Qobil'

// objectdagi ma'lumotlarni o'chirish
delete moshina.tonirovka
delete moshina.yili

// objectdagi ma'lumotlarni consolga chiqarish
console.log(moshina)