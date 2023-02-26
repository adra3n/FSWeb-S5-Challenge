import axios from 'axios';

const Card = (data) => {
  

  let kategoriler = Object.keys(data?.makaleler);
  let articles = [];
  kategoriler.forEach(kategori => {
    articles.push(data?.makaleler[kategori])

    articles.forEach(makale => {
      console.log (makale);
      let makaleBaslik = makale.anabaslik;
      let yazarFoto = makale.yazarFoto;
      let yazarAdi = makale.yazarAdi;

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      const anaBaslik = document.createElement("div");
      anaBaslik.classList.add("headline");
      anaBaslik.textContent = makaleBaslik;
      cardDiv.append(anaBaslik);

      cardDiv.addEventListener("click", () => {
        console.log(makaleBaslik)
      });
      
      const authorDiv = document.createElement("div");
      authorDiv.classList.add("author");
      cardDiv.append(authorDiv);
      
      const imgYazar = document.createElement("div");
      imgYazar.setAttribute("src", yazarFoto)
      imgContainer.append(imgYazar);
      
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("img-container");
      authorDiv.append(imgContainer);
      
      const yazarSpan = document.createElement("span");
      yazarSpan.textContent = `${yazarAdi} tarafından`
      cardDiv.append(yazarSpan);

    });
  });

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
      const cardItem = Card(res?.data);
      cardContainer.append(cardItem);
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
