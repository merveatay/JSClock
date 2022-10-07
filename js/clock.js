myName.innerHTML = prompt("İsminiz nedir?") 
//promt ile alınan kullanıcı ismini #myName id'li HTML elemana eşitle

let günler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"] 
//günleri türkçe görebilmek için bir array tanımla


//zamanı göstermesi için bir fonk. tanımla
function showTime() {
    const today = new Date()  
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let day = günler[today.getDay()] //today.getDay() ile alınan bugünün sayı olarak karşılığı, yukarıda tanımlanan günler[] array'i içerisindeki index içerisindeki değere eşitle
    let info = document.querySelector("#myClock") //alıştırma olması adına getElementById("myClock") yerine querySelector("#myClock") ile myClock id'li eleman info değişkenine eşitle
    second = decimalSecond(second) //second tek basamaklı görünmemesi adına decimalSecond fonk. second argümanını besleyerek çağır
    info.innerHTML = `${hour}:${minute}:${second} ${day}` //info değişkenini HTML içinde olacak şekilde hour:minute:second day formatında ekranda yazdır
}
setInterval(showTime,1000) //1000 değeri 1sn'ye eşit olur böylece zaman her saniye güncellenecek şekilde ekranda gözükür
showTime() //zamanı gösteren fonksiyonu çağır


//second tek basamaklı göstermemesi için fonk. tanımla
function decimalSecond(i) {    
    if (i < 10) {i = "0" + i}  //second 10'dan küçük bir değere sahip oldukça önüne string halinde 0 ekle
    return i
}
