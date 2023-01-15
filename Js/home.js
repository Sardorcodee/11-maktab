



setInterval(() => {
  const vaqt = new Date();
  let y = vaqt.getFullYear();
  let o = vaqt.getMonth();
  let k = vaqt.getDate();
  let s = vaqt.getHours();
  let m = vaqt.getMinutes();
  let se = vaqt.getSeconds();
  oy = nol(o + 1);
  document.getElementById("yil").innerHTML = y;
  document.getElementById("oy").innerHTML = oy;
  document.getElementById("kun").innerHTML = nol(k);
  document.getElementById("soat").innerHTML = nol(s);
  document.getElementById("minut").innerHTML = nol(m);
  document.getElementById("sekund").innerHTML = nol(se);
}, 1000);
function nol(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
