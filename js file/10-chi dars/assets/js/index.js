let text = "salom hammaga yaxshimi sizlar"
let dostlar = ["Javlon", "Shahobiddin", "Ibrohim"]

// for tikili ichidagi malumotlar takrorlab turadi
// for(ismlar of dostlar){
//     console.log(ismlar); //bunda arraydi ichidagi ismlar alohida takrorlanib chiqadi ismlar array dagi ismlarga teng
// }

//  for(ismlar of dostlar){
//     console.log(ismlar.toUpperCase()); //bunda ismlar hamma harfini katta harfda o'zgartiradi
//  }

// for(index in text){ //bunda in digani harflarni indexni yani raqamin chiqarib beradi
//     if(index == 10){ //bunda index 10index ga teng bo'lsa o'sha harfni chiqaradi
//         console.log(text.charAt(index));
//     }
// }

for(index in text){ //bunda in digani harflarni indexni yani raqamin chiqarib beradi
    if(index > 10){ //bunda index 10index katta bo'lsa 10chi index dani boshlab qolgan barcha harflarni ko'rsatadi
        console.log(text.charAt(index));
    }
}