let comment = " Salom hammaga Salom Akosh.dev "
 comment = comment.replace("Salom", "Alik") //bunda .replace commentni ichidagi Salom digan so'zni Alikga o'zgar tiradi
 comment = comment.replace(/Salom/g, "Alik") //bunda .replace commentni ichidagi hamma Salom digan 
//so'zni Alikga o'zgartirish uchun /Salom/g qilib yozilishi kerak g harfi global yani hamma Salom Alikga aylanadi
comment = comment.replace(/Salom/gi, "Alik") //bunda .replace commentni ichidagi Salom digan so'zni hamma katta kichik  so'zni alikga aylantiradi 
ayuayu