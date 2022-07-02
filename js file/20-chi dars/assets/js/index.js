 document.querySelector('.valyuta').addEventListener('change',function(event){
    let val = event.target.value;

    let hhtpSorov = new XMLHttpRequest();

    hhtpSorov.onreadystatechange = function () {
        
        if(this.readyState == 4 && this.status == 200) {
            let natija = JSON.parse(this.responseText);
            console.log(natija[0].CcyNm_UZ);
            console.log(natija[0].Date);
            console.log(natija[0].Rate);

            document.querySelector('.sarlavha').innerHTML = natija[0].CcyNm_UZ;
            document.querySelector('.sana').innerHTML = natija[0].Date;
            document.querySelector('.kurs').innerHTML = natija[0].Rate;
        }
    }

    hhtpSorov.open("GET", "https://cbu.uz/ru/arkhiv-kursov-valyut/json/" + val + "/2020-08-04/", true);
    hhtpSorov.send();
 })