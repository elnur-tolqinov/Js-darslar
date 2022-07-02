let list = [];
list.push = ("sardor"); //bu arraydi ichiga malumot qo'shadi va eng oson usuli
list.push = ("ali");

list.splice(1,1,"alibek"); //bu arraydagi malumotlarni o'zgartiradi 1 indexdan 1 ta sini o'zgartir deydi 2 qoysak 1 chi
// indexdan 2 indexgacha alikbekka o'zgartiradi
console.log(list);

list.pop(); //bu arraydagi ohirgi gapni o'chirib tashliydi

let oxirgi = list.pop(); //bunda arraydagi oxirgi gapni ajratib chiqarib ko'rsatadi
console.log(oxirgi);

list.splice(1,1); //bunda 1chi indexdan 1ta gapni ochiradi

console.log(list.join()); // bunda gaplarni hammasi birlashtiradi

console.log(list.join(",")); //bunda har bitta gapni arasini , bila achratib chiqaradi

list.sort(); //bunda arraydagi gaplarni alifbo tartibida taglidi
list.reverse(); //bunda arraydagi gaplarni teskari alifbo tartibida tahlidi
