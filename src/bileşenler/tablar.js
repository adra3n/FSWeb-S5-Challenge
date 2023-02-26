import axios from 'axios';


const Tablar = (konu) => {
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");
  
  for(let i = 0; i < konu.length; i++){
    const divItem = document.createElement("div");
    divItem.classList.add("tab");
    divItem.textContent = konu[i];
    topicsDiv.append(divItem);
  }

  return topicsDiv;
}

  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //


const tabEkleyici =  (secici) => {
  axios
  .get(`http://localhost:5001/api/konular`)
  .then((res) => {
    const tabContainer = document.querySelector(secici);
    const tabItem = Tablar(res.data.konular);
    tabContainer.append(tabItem);
  })
  .catch((err)=>{
    console.log("Error TabEkleyici", err);
  })
}

  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //


export { Tablar, tabEkleyici }
