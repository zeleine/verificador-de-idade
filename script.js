function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var anoCaixa = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (anoCaixa.value.length == 0 || Number(anoCaixa.value) > ano) {
    window.alert("[ERRO] Verifique os dados novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(anoCaixa.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "boy.png");
      } else if (idade < 21) {
        img.setAttribute("src", "youngman.png");
      } else if (idade < 50) {
        img.setAttribute("src", "man.png");
      } else {
        img.setAttribute("src", "oldman.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "girl.png");
      } else if (idade < 30) {
        img.setAttribute("src", "youngwoman.png");
      } else if (idade < 50) {
        img.setAttribute("src", "woman.png");
      } else {
        img.setAttribute("src", "oldwoman.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
