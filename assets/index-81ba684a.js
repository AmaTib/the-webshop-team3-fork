var Z=Object.defineProperty;var K=(e,n,t)=>n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var $=(e,n,t)=>(K(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function J(e,n){e.addEventListener("click",()=>{n.classList.add("--active")})}function R(e,n){e.addEventListener("click",()=>{n.classList.remove("--active")})}function G(){const e=document.getElementById("fullname"),n=document.getElementById("address"),t=document.getElementById("zipcode"),s=document.getElementById("email"),r=document.getElementById("cellPhone");return e.value===""||!Q(e.value)?(e.classList.add("is-invalid"),!1):(e.classList.remove("is-invalid"),n.value===""||!X(n.value)?(n.classList.add("is-invalid"),!1):(n.classList.remove("is-invalid"),t.value===""||!Y(t.value)?(t.classList.add("is-invalid"),!1):(t.classList.remove("is-invalid"),s.value===""||!W(s.value)?(s.classList.add("is-invalid"),!1):(s.classList.remove("is-invalid"),r.value===""||!ee(r.value)?(r.classList.add("is-invalid"),!1):(r.classList.remove("is-invalid"),!0)))))}function Q(e){return/^[A-Za-z]+\s[A-Za-z]+$/.test(e)}function X(e){return e.trim().length>=10}function Y(e){return/^\d{5}$/.test(e)}function W(e){return/@hotmail\.com$|@gmail\.com$|@yahoo\.com$/.test(e)}function ee(e){return/^\d{10}$/.test(e)}const b=()=>{var n,t,s;const e={productPage:document.getElementById("wrapper-product-page"),cart:document.getElementById("cart"),checkout:document.getElementById("checkout")};(n=e.cart)!=null&&n.classList.contains("--active")||(t=e.checkout)!=null&&t.classList.contains("--active")||(s=e.productPage)!=null&&s.classList.contains("--active")?(document.body.classList.add("stop-scroll"),console.log("hej")):document.body.classList.remove("stop-scroll")};class S{constructor(n,t,s,r,a,d){$(this,"quantity");this.title=n,this.imageUrl=t,this.size=s,this.price=r,this.info=a,this.id=d,this.quantity=1}}const l=[new S("Rödgran","./../red_spruce3.webp","230 – 260 cm",499,"Rödgranen, en symbol för julens stämning, är känd för sina stadiga grenar och doftande barr som sprider en friskhet som förtrollar. Med dess frodiga barrverk och praktfulla utseende blir denna gran ett lysande inslag i juldekorationerna. Med rätt underhåll sitter barren kvar länge och ger en varaktig skönhet som fyller hemmet med en känsla av tradition och glädje under helgerna.","001"),new S("Rödgran","./assets/red_spruce.webp","180 – 230 cm",350,"Inget fångar julens anda som den klassiska rödgranen. Dess slanka silhuett och intensiva gröna barr skapar en fantastisk atmosfär och sprider en ljuvlig doft i varje vrå. Rödgranen är mer än en dekoration – den är själva hjärtat i julens festligheter och bjuder in till en tid av gemenskap och värme.","002"),new S("Blågran","../blue_spruce.webp","180 – 230 cm",699,"Blågranen är en storslagen symbol för vinterns charm och elegans. Med sina mjuka, silverblå barr skapar denna gran en atmosfär av frostig skönhet i varje rum. Dess kompakta och välmående grenverk ger en perfekt plats att hänga julens dekorationer och ljus, medan dess hållbara barr behåller sin färg och form under hela säsongen. Blågranen erbjuder en unik och förtrollande touch till julens firande och blir snabbt hjärtat i ditt hem under denna festliga tid.","003"),new S("Bosnisk tall","./bosnian_pine.webp","180 – 230 cm",750,"Bosnisk tall, med sin ståtliga och majestätiska gestalt, är en symbol för vinterens skönhet och styrka. Dess karaktäristiska mörkgröna barr och robusta grenar skapar en imponerande kuliss för julens festligheter. Med en naturlig symmetri och en doft av skogens friskhet blir denna tall en enastående centralpunkt för dekorationer och ljus. Dess hållbara kvalitet och långvariga skönhet gör den till det perfekta valet för att införa en känsla av tradition och elegans i ditt hem under julen.","004"),new S("Rödgran","./red_spruce2.webp","100 – 140 cm",250,"Rödgranen är julens symbol av skönhet och elegans. Dess frodiga barrverk skänker inte bara en frisk doft utan också en levande touch till varje hem. Med en rödgran i huset skapas en atmosfär av tradition och fröjd, där varje barrstrå förmedlar känslan av en härlig julstund.","005"),new S("Rödgran","./red_spruce_xl.webp","300 – 350 cm",990,"Inget fångar julens anda som den klassiska rödgranen. Dess slanka silhuett och intensiva gröna barr skapar en fantastisk atmosfär och sprider en ljuvlig doft i varje vrå. Rödgranen är mer än en dekoration – den är själva hjärtat i julens festligheter och bjuder in till en tid av gemenskap och värme.","006")],c=JSON.parse(sessionStorage.getItem("cartItems")||JSON.stringify([])),j=document.getElementById("cta");j==null||j.addEventListener("click",()=>{const e=document.getElementById("product-list");e==null||e.scrollIntoView({behavior:"smooth"})});let u=0;u=JSON.parse(sessionStorage.getItem("totalPrice")||JSON.stringify(0));let M;const q=document.querySelector(".c-card__header"),P=document.querySelector(".c-card__image"),w=document.querySelector(".c-card__body"),te=document.getElementById("product-page-close-button"),F=document.querySelector("#wrapper-product-page"),ne=document.querySelector(".cart__checkout-button"),V=document.querySelector("#checkout-close-button"),N=document.querySelector(".c-checkout"),U=document.querySelector("#main-cart-button"),x=document.querySelector(".cart__close-button"),I=document.querySelector(".cart"),D=document.createElement("p");R(V,N);J(ne,N);J(U,I);R(x,I);U.addEventListener("click",b);x.addEventListener("click",b);F.addEventListener("click",b);te.addEventListener("click",b);V.addEventListener("click",()=>{I.classList.remove("--active"),document.body.classList.remove("stop-scroll")});q==null||q.addEventListener("click",b);P==null||P.addEventListener("click",b);w==null||w.addEventListener("click",b);const ce=document.getElementById("modalButton");ce.addEventListener("click",se);const O=document.getElementById("product-page-cart-button");O==null||O.addEventListener("click",()=>{c.findIndex(n=>n.id===M.id)!==-1?(M.quantity++,u+=M.price,h(),v(),y()):(c.push(M),u+=M.price,h(),v(),y())});const re=()=>{for(let e=0;e<l.length;e++){const n=document.querySelector(".l-list"),t=document.createElement("li"),s=document.createElement("div"),r=document.createElement("div"),a=document.createElement("h2"),d=document.createElement("div"),i=document.createElement("img"),m=document.createElement("p"),o=document.createElement("p"),L=document.createElement("p"),f=document.createElement("div"),g=document.createElement("button");a.innerHTML=l[e].title,i.innerHTML=l[e].imageUrl,L.innerHTML=l[e].size,m.innerHTML=`${l[e].price.toString()} kr`,i.setAttribute("src",l[e].imageUrl),o.innerHTML="Art.nr: "+l[e].id,g.innerHTML="Lägg i varukorg",t.classList.add("l-list__item"),s.classList.add("c-card"),r.classList.add("c-card__header"),a.classList.add("c-card__title"),d.classList.add("c-card__body"),i.classList.add("c-card__image"),m.classList.add("c-card__price"),L.classList.add("c-card__attribute"),o.classList.add("c-card__text"),f.classList.add("c-card__footer"),g.classList.add("c-button","c-button--primary"),t.appendChild(i),s.appendChild(r),r.appendChild(a),s.appendChild(d),d.appendChild(L),d.appendChild(m),n==null||n.appendChild(t),t.appendChild(s),s.appendChild(f),f.appendChild(g),g.addEventListener("click",()=>{c.findIndex(_=>_.id===l[e].id)!==-1?(l[e].quantity++,u+=l[e].price,h(),v(),y()):(c.push(l[e]),u+=l[e].price,h(),v(),y())});const k=()=>{const E=document.querySelector(".c-product-page"),_=document.getElementById("product-page-title"),C=document.getElementById("product-page-image"),p=document.getElementById("product-page-info"),B=document.getElementById("read-more"),z=document.getElementById("product-page-size"),A=document.getElementById("product-page-price"),T=document.getElementById("wrapper-product-page"),H=document.getElementById("product-page-close-button");M=l[e],T&&T.classList.add("--active"),E==null||E.classList.add("--active"),_&&(_.innerHTML=l[e].title),C&&C.setAttribute("src",l[e].imageUrl),p&&(p.innerHTML=l[e].info),z&&(z.innerHTML="Storlek: "+l[e].size),A&&(A.innerHTML=l[e].price.toString()+" kr"),B==null||B.addEventListener("click",()=>{p!=null&&p.classList.contains("--active")?(p.classList.remove("--active"),B.innerHTML="Läs mer"):(p==null||p.classList.add("--active"),B.innerHTML="Visa mindre")}),H==null||H.addEventListener("click",()=>{T==null||T.classList.remove("--active"),p!=null&&p.classList.contains("--active")&&(p.classList.remove("--active"),B.innerHTML="Läs mer")})};i.addEventListener("click",k),r.addEventListener("click",k),d.addEventListener("click",k)}},h=()=>{var n;sessionStorage.setItem("cartItems",JSON.stringify(c)),sessionStorage.setItem("totalPrice",JSON.stringify(u));const e=document.querySelector("#cart-items");D.innerHTML="Summa: "+u.toString()+" kr",e&&(e.innerHTML="");for(let t=0;t<c.length;t++){const s=document.createElement("li"),r=document.createElement("div"),a=document.createElement("div"),d=document.createElement("h3"),i=document.createElement("figure"),m=document.createElement("img"),o=document.createElement("div"),L=document.createElement("p"),f=document.createElement("p"),g=document.createElement("p"),k=document.createElement("div"),E=document.createElement("button"),_=document.createElement("span"),C=document.createElement("button");s.classList.add("l-list__item"),r.classList.add("c-card-cart"),a.classList.add("c-card__header"),i.classList.add("c-card-cart__figure"),m.classList.add("c-card-cart__image"),o.classList.add("c-card-cart__body"),L.classList.add("c-card__price"),f.classList.add("c-card__id"),g.classList.add("c-card__attribute"),k.classList.add("c-card-cart__footer"),d.innerHTML=c[t].title,m.setAttribute("src",c[t].imageUrl),L.innerHTML=c[t].price.toString()+" kr",g.innerHTML="Storlek: "+c[t].size,f.innerHTML="Art.nr: "+c[t].id,E.innerHTML="+",_.innerHTML=c[t].quantity.toString(),C.innerHTML="-",r.appendChild(i),i.appendChild(m),r.appendChild(o),o.appendChild(d),o.appendChild(L),o.appendChild(g),o.appendChild(f),r.appendChild(k),k.appendChild(C),k.appendChild(_),k.appendChild(E),s.appendChild(r),e==null||e.appendChild(s),E.addEventListener("click",()=>{c[t].quantity++,u+=c[t].price,h(),v(),y()}),C.addEventListener("click",()=>{c[t].quantity===1?(u-=c[t].price,c.splice(t,1),h(),v(),y()):(c[t].quantity--,u-=c[t].price,h(),v(),y())})}(n=document.querySelector(".cart__total-price"))==null||n.appendChild(D)},v=()=>{sessionStorage.setItem("cartItems",JSON.stringify(c)),sessionStorage.setItem("totalPrice",JSON.stringify(u));const e=document.querySelector("#checkout-cart-items");let n=document.getElementById("total-price-checkout");n&&(n.innerHTML="Summa: "+u.toString()+" kr"),e&&(e.innerHTML="");for(let t=0;t<c.length;t++){const s=document.createElement("li"),r=document.createElement("img"),a=document.createElement("div"),d=document.createElement("h3"),i=document.createElement("p"),m=document.createElement("p"),o=document.createElement("div"),L=document.createElement("button"),f=document.createElement("span"),g=document.createElement("button");d.innerHTML=c[t].title,r.setAttribute("src",c[t].imageUrl),i.innerHTML=c[t].price.toString()+" kr",L.innerHTML="+",f.innerHTML=c[t].quantity.toString(),g.innerHTML="-",m.innerHTML="Art.nr: "+c[t].id,s.classList.add("c-card-checkout"),a.classList.add("c-card-checkout__body"),o.classList.add("c-card-checkout__footer"),s.appendChild(r),a.appendChild(d),a.appendChild(i),a.appendChild(m),s.appendChild(a),o.appendChild(g),o.appendChild(f),o.appendChild(L),s.appendChild(o),e==null||e.appendChild(s),L.addEventListener("click",()=>{c[t].quantity++,u+=c[t].price,h(),v(),y()}),g.addEventListener("click",()=>{c[t].quantity===1?(u-=c[t].price,c.splice(t,1),h(),v()):(c[t].quantity--,u-=c[t].price,h(),v())})}};function se(e){e.preventDefault();const t=document.getElementById("email").value;G()&&ae(t)}function ae(e){const n=document.getElementById("purchaseModal");n.classList.add("--active");const t=document.createElement("div");t.classList.add("order-details-container");const s=n.querySelector(".modal-content");s.innerHTML=`
    <div class="checkmark">&#10003;</div>
    <i id="closeModalButton" class="bi bi-x-lg"></i>
    <h3>Ditt köp har genomförts!</h3>
    <p class="purchaseModalEmail">Betalningsinstruktioner kommer skickas till: ${e}</p>
    <h4>Orderdetaljer</h4>
  `;let r=0;for(let i=0;i<c.length;i++){const m=document.createElement("p");m.classList.add("order-details-item");const o=c[i].price*c[i].quantity;r+=o,m.innerHTML=`
      ${c[i].title} - ${o} kr <br> Antal: ${c[i].quantity}
    `,t.appendChild(m)}const a=document.createElement("p");a.innerHTML=`<br>Totalt belopp: ${r} kr`,t.appendChild(a),s.appendChild(t),document.getElementById("closeModalButton").addEventListener("click",()=>{n.classList.remove("--active"),u=0,c.splice(0,c.length),h(),v(),N.classList.remove("--active"),I.classList.remove("--active"),F.classList.remove("--active"),b(),window.scrollTo(0,0),setTimeout(()=>{location.reload()},1e3)})}const y=()=>{const e=document.getElementById("cart-icon");c.length!==0?(e==null||e.classList.remove("bi-cart"),e==null||e.classList.add("bi-cart-fill")):(e==null||e.classList.remove("bi-cart-fill"),e==null||e.classList.add("bi-cart"))};re();h();v();y();
