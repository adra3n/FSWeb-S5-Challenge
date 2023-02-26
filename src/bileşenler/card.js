import axios from 'axios';


const Card = (data) => {      

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const anaBaslik = document.createElement("div");
        anaBaslik.classList.add("headline");
        anaBaslik.textContent = data?.anabaslik;
        cardDiv.append(anaBaslik);

        cardDiv.addEventListener("click", () => {
          console.log(data?.anabaslik);
        });
        
        const authorDiv = document.createElement("div");
        authorDiv.classList.add("author");
        cardDiv.append(authorDiv);

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        authorDiv.append(imgContainer);
        
        const imgYazar = document.createElement("img");
        imgYazar.setAttribute("src", data?.yazarFoto)
        imgContainer.append(imgYazar);
        
     
        const yazarSpan = document.createElement("span");
        yazarSpan.textContent = `${data?.yazarAdi} tarafından`
        authorDiv.append(yazarSpan);
    
  return cardDiv;
}


// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const cardEkleyici = (secici) => {
  axios
    .get(`http://localhost:5001/api/makaleler`)
    .then((res) => {
    
      const cardContainer = document.querySelector(secici);
      const kategoriler = Object.keys(res?.data?.makaleler);
      // console.log (kategoriler + "kategoriler")
        for (let i = 0; i < kategoriler.length; i++) {
          const kategori = kategoriler[i];
          const makaleler = res?.data?.makaleler[kategori];
          // console.log (makaleler + "makaleler")
          // console.log (kategori)
            for (let j = 0; j < makaleler.length; j++) {
              const makale = makaleler[j];         
              cardContainer.append(Card(makale));
            }
        }

    })
    .catch((err) => {
      console.log("Error cardEkleyici", err);
    })
}
// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

export { Card, cardEkleyici }
