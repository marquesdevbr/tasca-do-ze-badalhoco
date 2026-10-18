document.documentElement.classList.add("js");
"use strict";

/* ===== MÚSICA =====
   Cola aqui apenas links oficiais que tenhas verificado (YouTube ou Spotify).
   Deixa "" para não mostrar leitor. Nada toca automaticamente. */
const MUSICA = {
  destaque: { titulo: "Tu Me Traíste", youtube: "", spotify: "https://open.spotify.com/track/0c9LyOfljcl4XRkWzLIaF3" },
  playlist: [
    { titulo: "Budista", youtube: "", spotify: "https://open.spotify.com/track/5vaoVFR53Y8NwutRMFHoAL" },
    { titulo: "Fumeiro ao Picadeiro", youtube: "", spotify: "https://open.spotify.com/track/5qPwrHQWVaPV7U8ZLZfj7O" },
    { titulo: "Tenho Calos", youtube: "", spotify: "https://open.spotify.com/track/6DWwYH6d0Qz7txKepTIhh5" },
    { titulo: "Cenoura", youtube: "", spotify: "https://open.spotify.com/track/0Bg8mu1wi6WDuI9pnQJxSx" },
    { titulo: "Culinaria", youtube: "", spotify: "https://open.spotify.com/track/6OSRICCQriZw6pxAqVrFXP" }
  ]
};

function idYoutube(url) {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (/(^|\.)youtube\.com$/.test(u.hostname)) return u.searchParams.get("v");
  } catch (e) {}
  return null;
}
function idSpotify(url) {
  try {
    const u = new URL(url);
    if (u.hostname !== "open.spotify.com") return null;
    const m = u.pathname.match(/\/(track|album|playlist)\/([A-Za-z0-9]+)/);
    return m ? m[1] + "/" + m[2] : null;
  } catch (e) {}
  return null;
}
function criarPlayer(faixa) {
  const caixa = document.createElement("div");
  caixa.className = "player";
  const yt = faixa.youtube && idYoutube(faixa.youtube);
  const sp = faixa.spotify && idSpotify(faixa.spotify);
  if (yt && /^[\w-]{6,15}$/.test(yt)) {
    const f = document.createElement("iframe");
    f.className = "yt";
    f.title = "YouTube: " + faixa.titulo;
    f.src = "https://www.youtube-nocookie.com/embed/" + yt;
    f.loading = "lazy";
    f.allow = "encrypted-media; picture-in-picture";
    f.allowFullscreen = true;
    caixa.appendChild(f);
  }
  if (sp) {
    const f = document.createElement("iframe");
    f.className = "sp";
    f.title = "Spotify: " + faixa.titulo;
    f.src = "https://open.spotify.com/embed/" + sp;
    f.loading = "lazy";
    f.allow = "encrypted-media";
    caixa.appendChild(f);
  }
  if (!caixa.children.length) {
    const p = document.createElement("p");
    p.className = "vazio";
    p.textContent = "Link oficial ainda por verificar. Quando o tiveres, cola-o no início do ficheiro script.js.";
    caixa.appendChild(p);
  }
  return caixa;
}
document.getElementById("destaque-player").appendChild(criarPlayer(MUSICA.destaque));
const lista = document.getElementById("playlist");
if (!MUSICA.playlist.length) {
  const p = document.createElement("p");
  p.className = "vazio";
  p.textContent = "A playlist está vazia de propósito: só entram músicas com título e fonte verificados.";
  lista.appendChild(p);
}
MUSICA.playlist.forEach(f => {
  const art = document.createElement("article");
  const h = document.createElement("h4");
  h.textContent = f.titulo;
  art.append(h, criarPlayer(f));
  lista.appendChild(art);
});

/* ===== MÁXIMAS (humor de fãs, não são citações) ===== */
const MAXIMAS = [
  "Quem tem tinto na mesa não precisa de wi-fi.",
  "O som só está bom quando o vizinho já conhece a letra.",
  "Pá, a vida é como um petisco: acaba sempre antes do que devia.",
  "Não há coração partido que resista a uma boa moelas.",
  "Mais vale um refrão na mão do que dois afinados a voar.",
  "Quem desafina com convicção chega mais longe."
];
let ultima = -1;
document.getElementById("btn-maxima").addEventListener("click", () => {
  let i;
  do { i = Math.floor(Math.random() * MAXIMAS.length); } while (i === ultima);
  ultima = i;
  document.getElementById("maxima").textContent = MAXIMAS[i];
});

/* ===== MEDIDOR DE BADALHOQUICE ===== */
const ids = ["tinto", "vol", "pa"];
function medir() {
  const t = +document.getElementById("m-tinto").value;
  const v = +document.getElementById("m-vol").value;
  const p = +document.getElementById("m-pa").value;
  ids.forEach(k => document.getElementById("o-" + k).textContent = document.getElementById("m-" + k).value);
  const pct = Math.round((t / 10 * 40) + (v / 100 * 30) + (p / 10 * 30));
  document.getElementById("agulha").style.transform = "rotate(" + (-90 + pct * 1.8) + "deg)";
  const nivel = pct < 25 ? "Badalhoquice: " + pct + "%. Está a ser comedido, chefe. Peça lá mais um tinto."
    : pct < 55 ? "Badalhoquice: " + pct + "%. Temperatura de arraial. Pode ficar."
    : pct < 85 ? "Badalhoquice: " + pct + "%. Já se ouve da rua. Os vizinhos estão a bater palmas (ou na parede)."
    : "Badalhoquice: " + pct + "%. Nível máximo. Convém avisar a junta de freguesia.";
  document.getElementById("resultado").textContent = nivel;
}
ids.forEach(k => document.getElementById("m-" + k).addEventListener("input", medir));
medir();

/* ===== LIVRO DE RECLAMAÇÕES (local, nada é enviado) ===== */
const RESPOSTAS = {
  som: ["Reclamação registada. O gerente já pôs o som a onze, mas o botão só vai até dez.", "Vamos aumentar o volume. Se os copos tremerem, é sinal de que está certo."],
  tinto: ["Falta de tinto? Isso é grave. Foi enviado um miúdo à adega, de bicicleta.", "O tinto está a caminho. Pedimos desculpa pela secura."],
  musica: ["O gerente diz que a música está certa e que o gosto é que está a evoluir.", "Pedido anotado num guardanapo. Os guardanapos têm uma taxa de resposta de 0%."],
  outra: ["Reclamação recebida e arquivada na gaveta de baixo, junto às outras.", "O gerente leu com atenção, suspirou e foi tomar um café."]
};
document.getElementById("form-rec").addEventListener("submit", e => {
  e.preventDefault();
  const cat = document.getElementById("cat").value;
  const opcoes = RESPOSTAS[cat];
  const n = Math.floor(1000 + Math.random() * 9000);
  const caixa = document.getElementById("resposta");
  caixa.replaceChildren();
  const s = document.createElement("strong");
  s.textContent = "Reclamação n.º " + n + " carimbada. ";
  caixa.append(s, opcoes[Math.floor(Math.random() * opcoes.length)] + " Obrigado pela preferência, e volte sempre.");
  caixa.hidden = false;
  e.target.reset();
});

/* ===== RETRATO: usa img/ze-badalhoco.jpg se existir, senão mostra espaço reservado ===== */
(function () {
  const fig = document.getElementById("retrato");
  const img = fig.querySelector("img");
  function semFoto() {
    const d = document.createElement("div");
    d.className = "falta";
    const b = document.createElement("b");
    b.textContent = "Retrato por adicionar";
    const s = document.createElement("span");
    s.textContent = "Coloca uma foto com direitos de uso em img/ze-badalhoco.jpg";
    d.append(b, s);
    img.replaceWith(d);
  }
  img.addEventListener("error", semFoto);
  if (img.complete && img.naturalWidth === 0) semFoto();
})();

/* ===== MENU HAMBÚRGUER ===== */
(function () {
  const btn = document.querySelector(".menu-btn");
  const menu = document.getElementById("menu");
  function definir(aberto) {
    menu.classList.toggle("aberto", aberto);
    btn.setAttribute("aria-expanded", String(aberto));
    btn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  }
  btn.addEventListener("click", () => definir(btn.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", e => { if (e.target.closest("a")) definir(false); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("aberto")) { definir(false); btn.focus(); }
  });
})();
