const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const tarihSpan = document.createElement("span");
  tarihSpan.classList.add("date");
  tarihSpan.textContent = tarih;
  headerDiv.append(tarihSpan);

  const baslikH1 = document.createElement("h1");
  baslikH1.textContent = baslik;
  headerDiv.append(baslikH1);

  const tempSpan = document.createElement("span");
  tempSpan.textContent = yazi;
  tempSpan.classList.add("temp")
  headerDiv.append(tempSpan);

  return headerDiv;
}

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

const headerEkleyici = (secici) => {
 const headerContainer = document.querySelector(secici);
 const headerItem = Header("Teknoloji Zamanı", "25 Şubat 2023", "Bu bir deneme yazısıdır.")
 headerContainer.append(headerItem);
}


  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 


export { Header, headerEkleyici }
