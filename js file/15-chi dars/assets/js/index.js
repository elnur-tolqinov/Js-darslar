// console.log(document.createElement('span));
let span =  document.createElement('span');
span.innerText = 'uyga vazifa!';
span.classList.add('homework');
span.style.color = 'blue';
    span.style.backgroundColor = 'grey';

console.log(span);

let a = document.createElement('a');
a.innerText = 'Bosh sahifa';
a.href = 'https://youtu.be/JTzm-oSkebU';
a.classList.add('link');
console.log(a);
let a = document.createElement('p');
p.innerText = 'Huquqlar himoyalangan!'
console.log(p);

let div = document.querySelector('div')
div.appendChild(p);
div.appendChild(span);
div.appendChild(a);

setTimeout(function() {
    p.remove();
},3000);
Footer
