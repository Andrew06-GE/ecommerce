/* ---------- DATA ---------- */
const BRANDS = [
  {name:'Arawaza',   slug:'arawaza'},
  {name:'Adidas',    slug:'adidas'},
  {name:'Tokaido',   slug:'tokaido'},
  {name:'Punok',     slug:'punok'},
  {name:'Dae Do',    slug:'daedo'},
  {name:'Budo Nord', slug:'budo-nord'},
  {name:'Hayashi',   slug:'hayashi'},
  {name:'Shureido',  slug:'shureido'},
];

const CATEGORIES = [
  {id:'uniforms',   name:'Martial Arts Uniforms', emo:'🥋', subs:[
    {id:'kata-gi',   name:'Kata Gi'},
    {id:'kumite-gi', name:'Kumite & Training Gi'}]},
  {id:'protective', name:'Protective Equipment',  emo:'🛡️', subs:[
    {id:'gloves',      name:'Gloves & Wraps'},
    {id:'shinpads',    name:'Shin & Instep Pads'},
    {id:'foot',        name:'Foot Protectors'},
    {id:'head',        name:'Head Guards'},
    {id:'body',        name:'Body & Chest Protectors'},
    {id:'mouthguards', name:'Mouthguards'}]},
  {id:'belts',      name:'Belts',                 emo:'🎯', subs:[
    {id:'competition-belts', name:'Competition Belts'},
    {id:'training-belts',    name:'Training Belts'}]},
  {id:'bags',       name:'Kit Bags',              emo:'🎒', subs:[
    {id:'duffels',   name:'Duffel Bags'},
    {id:'backpacks', name:'Backpacks'},
    {id:'trolley',   name:'Trolley Bags'}]},
];

const PRODUCTS = [
  {id:1,  name:'Kumite Competition Gi',  brand:'Arawaza',   cat:'uniforms',   sub:'kumite-gi',         price:89.99,  emo:'🥋', desc:'Lightweight gi cut for speed in kumite matches.'},
  {id:2,  name:'Kata Heavyweight Gi',    brand:'Tokaido',   cat:'uniforms',   sub:'kata-gi',           price:104.00, emo:'🥋', desc:'Traditional heavyweight canvas gi for sharp, powerful kata lines.'},
  {id:3,  name:'Kata Competition Gi',    brand:'Shureido',  cat:'uniforms',   sub:'kata-gi',           price:119.00, emo:'🥋', desc:'Premium kata gi with a crisp drape and reinforced seams.'},
  {id:4,  name:'Club Training Gi',       brand:'Adidas',    cat:'uniforms',   sub:'kumite-gi',         price:64.00,  emo:'🥋', desc:'Durable mid-weight gi for daily dojo training.'},
  {id:5,  name:'Kumite Lightweight Gi',  brand:'Budo Nord', cat:'uniforms',   sub:'kumite-gi',         price:74.50,  emo:'🥋', desc:'Breathable gi built for fast movement and easy washing.'},
  {id:6,  name:'Sparring Gloves Pro',    brand:'Punok',     cat:'protective', sub:'gloves',            price:34.50,  emo:'🥊', desc:'Padded open-palm gloves for full-contact sparring and grip control.'},
  {id:7,  name:'Competition Gloves',     brand:'Arawaza',   cat:'protective', sub:'gloves',            price:29.00,  emo:'🥊', desc:'Lightweight foam gloves for tournament point-fighting.'},
  {id:8,  name:'Hand Wraps (Pair)',      brand:'Hayashi',   cat:'protective', sub:'gloves',            price:9.99,   emo:'🧤', desc:'Elastic cotton wraps for wrist and knuckle support under gloves.'},
  {id:9,  name:'Shin & Instep Guards',   brand:'Hayashi',   cat:'protective', sub:'shinpads',          price:28.00,  emo:'🦵', desc:'Contoured foam guards protecting shin and instep during kicks.'},
  {id:10, name:'Foot Protectors',        brand:'Dae Do',    cat:'protective', sub:'foot',              price:22.00,  emo:'🦶', desc:'Flexible sole guards that keep striking speed while protecting toes.'},
  {id:11, name:'Head Guard',             brand:'Punok',     cat:'protective', sub:'head',              price:42.00,  emo:'🪖', desc:'Ventilated head protection for point-fighting competition.'},
  {id:12, name:'Mouth Guard',            brand:'Adidas',    cat:'protective', sub:'mouthguards',       price:6.50,   emo:'🦷', desc:'Boil-and-bite mouth guard, compact case included.'},
  {id:13, name:'Rank Belt',              brand:'Budo Nord', cat:'belts',      sub:'training-belts',    price:12.00,  emo:'🎯', desc:'Cotton rank belt available in all standard grading colours.'},
  {id:14, name:'Embroidered Black Belt', brand:'Shureido',  cat:'belts',      sub:'training-belts',    price:24.00,  emo:'🎯', desc:'Satin-finish black belt with custom name embroidery slot.'},
  {id:15, name:'Gear Duffel Bag',        brand:'Adidas',    cat:'bags',       sub:'duffels',           price:39.00,  emo:'🎒', desc:'Ventilated duffel with a separate compartment for gi and gloves.'},
  {id:16, name:'Gi Backpack',            brand:'Dae Do',    cat:'bags',       sub:'backpacks',         price:45.00,  emo:'🎒', desc:'Structured backpack sized for a folded gi and protective gear.'},
  {id:17, name:'Competition Belt',       brand:'Dae Do',    cat:'belts',      sub:'competition-belts', price:18.00,  emo:'🎯', desc:'Red and blue competition belt for kata and kumite events.'},
  {id:18, name:'Body & Chest Protector', brand:'Arawaza',   cat:'protective', sub:'body',              price:48.00,  emo:'🛡️', desc:'Lightweight chest protection for sparring and competition.'},
  {id:19, name:'Trolley Bag',            brand:'Hayashi',   cat:'bags',       sub:'trolley',           price:79.00,  emo:'🧳', desc:'Wheeled kit bag with room for a full competition set.'},
];

const FEATURED_IDS = [1, 2, 6, 9, 13, 15, 10, 3];
const NEW_IDS      = [4, 7, 12, 16, 17, 18, 19, 8];
const SIZES = ['XS','S','M','L','XL'];

const SLIDES = [
  {eyebrow:'Competition-ready gear', title:'Train hard. Fight smart.',
   text:'Gis, protective equipment and belts for kumite, kata and daily training.',
   cta:'Shop equipment', action:'showShop()'},
  {eyebrow:'Top brands', title:'Shop by brand',
   text:'Arawaza, Adidas, Tokaido, Punok, Dae Do, Budo Nord, Hayashi and Shureido.',
   cta:'Browse brands', action:"scrollToId('brandStrip')"},
  {eyebrow:'Kata & kumite', title:'Gis built for the mat',
   text:'Heavyweight canvas for kata, lightweight cuts for kumite.',
   cta:'Shop uniforms', action:"openCategory('uniforms')"},
];

/* ---------- STATE ---------- */
const state = {q:'', cat:'all', sub:'all', brand:'all', sort:'default'};
let cart = JSON.parse(localStorage.getItem('dojo_cart') || '[]');
let activeProduct = null, activeSize = SIZES[1], activeQty = 1;
let slideIdx = 0, slideTimer = null;

function fmt(n){ return '$' + n.toFixed(2); }
function saveCart(){ try{ localStorage.setItem('dojo_cart', JSON.stringify(cart)); }catch(e){} }
function catById(id){ return CATEGORIES.find(c => c.id === id); }
function subName(p){
  const c = catById(p.cat);
  const s = c && c.subs.find(x => x.id === p.sub);
  return s ? s.name : (c ? c.name : '');
}

/* ---------- NAVIGATION ---------- */
function navigateTo(page){
  document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if(target) target.classList.add('active');
  document.querySelectorAll('.mainnav a').forEach(a => a.classList.remove('active'));
  const link = document.getElementById('nav-' + page);
  if(link) link.classList.add('active');
  closeDropdowns();
  window.scrollTo({top:0, behavior:'auto'});
}
function scrollToId(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function toggleDropdown(id, e){
  if(e) e.stopPropagation();
  const dd = document.getElementById(id);
  const wasOpen = dd.classList.contains('open');
  closeDropdowns();
  if(!wasOpen) dd.classList.add('open');
}
function closeDropdowns(){
  document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
}
document.addEventListener('click', closeDropdowns);

function resetState(){ state.q=''; state.cat='all'; state.sub='all'; state.brand='all'; state.sort='default'; }
function showShop(){ resetState(); navigateTo('shop'); renderShop(); }
function openCategory(catId, subId){
  resetState(); state.cat = catId; state.sub = subId || 'all';
  navigateTo('shop'); renderShop();
}
function openBrand(name){
  resetState(); state.brand = name;
  navigateTo('shop'); renderShop();
}
function headerSearch(){
  const q = document.getElementById('hsInput').value.trim();
  const cat = document.getElementById('hsCat').value;
  resetState(); state.q = q; state.cat = cat;
  navigateTo('shop'); renderShop();
}

/* ---------- STATIC CONTROLS ---------- */
function imgFallback(img){
  const span = document.createElement('span');
  span.className = 'emo-fallback';
  span.textContent = img.dataset.emo;
  img.replaceWith(span);
}
const IMG_EXTS = {brand:['png','svg','webp','jpg'], product:['jpg','png','webp','jpeg']};
function imgTryNext(img){
  const exts = IMG_EXTS[img.dataset.kind];
  const i = parseInt(img.dataset.i || '0', 10) + 1;
  if(i < exts.length){ img.dataset.i = i; img.src = img.dataset.base + '.' + exts[i]; }
  else if(img.dataset.kind === 'brand'){ logoFallback(img); }
  else { imgFallback(img); }
}
function logoFallback(img){
  const span = document.createElement('span');
  span.className = 'brand-wordmark';
  span.textContent = img.dataset.name;
  img.replaceWith(span);
}

function renderStaticControls(){
  document.getElementById('hsCat').innerHTML =
    '<option value="all">All categories</option>' +
    CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  document.getElementById('megaCats').innerHTML = CATEGORIES.map(c => `
    <div class="mega-col">
      <a class="mega-head" onclick="openCategory('${c.id}')">${c.name}</a>
      ${c.subs.map(s => `<a onclick="openCategory('${c.id}','${s.id}')">${s.name}</a>`).join('')}
    </div>`).join('');

  document.getElementById('brandMenu').innerHTML =
    BRANDS.map(b => `<a onclick="openBrand('${b.name}')">${b.name}</a>`).join('');

  document.getElementById('footerBrands').innerHTML =
    BRANDS.map(b => `<a onclick="openBrand('${b.name}')">${b.name}</a>`).join('');

  document.getElementById('shopCat').innerHTML =
    '<option value="all">All categories</option>' +
    CATEGORIES.map(c => `
      <optgroup label="${c.name}">
        <option value="${c.id}">All ${c.name}</option>
        ${c.subs.map(s => `<option value="${c.id}/${s.id}">${s.name}</option>`).join('')}
      </optgroup>`).join('');

  document.getElementById('shopBrand').innerHTML =
    '<option value="all">All brands</option>' +
    BRANDS.map(b => `<option value="${b.name}">${b.name}</option>`).join('');
}

/* ---------- HOME ---------- */
function productCard(p){
  return `
    <div class="card" onclick="openProduct(${p.id})">
      <div class="card-img">
        <img src="images/products/${p.id}.jpg" alt="${p.name}" data-kind="product" data-base="images/products/${p.id}" data-emo="${p.emo}" onerror="imgTryNext(this)">
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-cat">${subName(p)}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-price">${fmt(p.price)}</div>
        <button class="card-add" onclick="event.stopPropagation(); openProduct(${p.id})">Select options</button>
      </div>
    </div>`;
}

function renderHome(){
  document.getElementById('brandStrip').innerHTML = BRANDS.map(b => `
    <button class="brand-tile" onclick="openBrand('${b.name}')" title="${b.name}">
      <img src="images/brands/${b.slug}.png" alt="${b.name} logo" data-kind="brand" data-base="images/brands/${b.slug}" data-name="${b.name}" onerror="imgTryNext(this)">
    </button>`).join('');

  document.getElementById('featuredRow').innerHTML =
    FEATURED_IDS.map(id => productCard(PRODUCTS.find(p => p.id === id))).join('');

  document.getElementById('catTiles').innerHTML = CATEGORIES.map(c => `
    <div class="cat-tile" onclick="openCategory('${c.id}')">
      <span class="emo">${c.emo}</span>
      <h3>${c.name}</h3>
    </div>`).join('');

  document.getElementById('newGrid').innerHTML =
    NEW_IDS.map(id => productCard(PRODUCTS.find(p => p.id === id))).join('');
}

function scrollRow(id, dir){
  document.getElementById(id).scrollBy({left: dir * 480, behavior:'smooth'});
}

/* ---------- HERO SLIDER ---------- */
function renderHero(){
  document.getElementById('heroSlides').innerHTML = SLIDES.map((s,i) => `
    <div class="slide ${i===slideIdx?'active':''}">
      <div class="eyebrow">${s.eyebrow}</div>
      <h2>${s.title}</h2>
      <p>${s.text}</p>
      <button class="btn-primary" onclick="${s.action}">${s.cta}</button>
    </div>`).join('');
  document.getElementById('heroDots').innerHTML = SLIDES.map((s,i) =>
    `<button class="dot ${i===slideIdx?'active':''}" onclick="goSlide(${i})" aria-label="Slide ${i+1}"></button>`).join('');
}
function goSlide(i){
  slideIdx = (i + SLIDES.length) % SLIDES.length;
  renderHero();
  startHero();
}
function startHero(){
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goSlide(slideIdx + 1), 5000);
}

/* ---------- SHOP ---------- */
function filteredProducts(){
  let list = PRODUCTS.slice();
  if(state.cat !== 'all')   list = list.filter(p => p.cat === state.cat);
  if(state.sub !== 'all')   list = list.filter(p => p.sub === state.sub);
  if(state.brand !== 'all') list = list.filter(p => p.brand === state.brand);
  if(state.q){
    const q = state.q.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      subName(p).toLowerCase().includes(q) ||
      catById(p.cat).name.toLowerCase().includes(q));
  }
  if(state.sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  if(state.sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if(state.sort === 'name')       list.sort((a,b) => a.name.localeCompare(b.name));
  return list;
}

function shopTitle(){
  let title = 'All products';
  if(state.q) title = 'Results for "' + state.q + '"';
  else if(state.sub !== 'all'){
    const s = catById(state.cat).subs.find(x => x.id === state.sub);
    title = s ? s.name : title;
  }
  else if(state.cat !== 'all') title = catById(state.cat).name;
  else if(state.brand !== 'all') return state.brand;
  if(state.brand !== 'all') title += ' · ' + state.brand;
  return title;
}

function renderShop(){
  const list = filteredProducts();
  const catValue = state.cat === 'all' ? 'all' : (state.sub === 'all' ? state.cat : state.cat + '/' + state.sub);
  document.getElementById('shopCat').value = catValue;
  document.getElementById('shopBrand').value = state.brand;
  document.getElementById('shopSort').value = state.sort;
  document.getElementById('shopTitle').textContent = shopTitle();
  document.getElementById('resultCount').textContent = list.length + ' product' + (list.length !== 1 ? 's' : '');
  document.getElementById('shopGrid').innerHTML = list.length
    ? list.map(productCard).join('')
    : '<p class="no-results">No gear matches your search. Try a different term, brand or category.</p>';
}

function onShopCat(v){
  if(v === 'all'){ state.cat = 'all'; state.sub = 'all'; }
  else { const parts = v.split('/'); state.cat = parts[0]; state.sub = parts[1] || 'all'; }
  renderShop();
}
function onShopBrand(v){ state.brand = v; renderShop(); }
function onShopSort(v){ state.sort = v; renderShop(); }

/* ---------- PRODUCT MODAL ---------- */
function openProduct(id){
  activeProduct = PRODUCTS.find(p => p.id === id);
  activeSize = SIZES[1]; activeQty = 1;
  document.getElementById('pdImg').innerHTML =
    `<img src="images/products/${activeProduct.id}.jpg" alt="${activeProduct.name}" data-kind="product" data-base="images/products/${activeProduct.id}" data-emo="${activeProduct.emo}" onerror="imgTryNext(this)">`;
  document.getElementById('pdCat').textContent = subName(activeProduct);
  document.getElementById('pdName').textContent = activeProduct.name;
  document.getElementById('pdBrand').textContent = activeProduct.brand;
  document.getElementById('pdPrice').textContent = fmt(activeProduct.price);
  document.getElementById('pdDesc').textContent = activeProduct.desc;
  document.getElementById('pdQty').textContent = activeQty;
  document.getElementById('pdSizes').innerHTML = SIZES.map(s =>
    `<button class="size-btn ${s===activeSize?'active':''}" onclick="pickSize('${s}')">${s}</button>`).join('');
  document.getElementById('pdOverlay').classList.add('open');
}
function pickSize(s){
  activeSize = s;
  document.querySelectorAll('#pdSizes .size-btn').forEach(b => b.classList.toggle('active', b.textContent === s));
}
function changeQty(d){
  activeQty = Math.max(1, activeQty + d);
  document.getElementById('pdQty').textContent = activeQty;
}
function addCurrentToCart(){
  addToCart(activeProduct, activeSize, activeQty);
  closeModal('pdOverlay');
  openCart();
}

/* ---------- CART ---------- */
function addToCart(p, size, qty){
  const existing = cart.find(i => i.id === p.id && i.size === size);
  if(existing){ existing.qty += qty; }
  else{ cart.push({id:p.id, name:p.name, brand:p.brand, price:p.price, emo:p.emo, size, qty}); }
  saveCart(); renderCartUI();
}
function removeItem(idx){ cart.splice(idx,1); saveCart(); renderCartUI(); }
function changeItemQty(idx, d){
  cart[idx].qty += d;
  if(cart[idx].qty <= 0) cart.splice(idx,1);
  saveCart(); renderCartUI();
}
function renderCartUI(){
  const box = document.getElementById('drawerItems');
  const countEl = document.getElementById('cartCount');
  const totalItems = cart.reduce((s,i) => s + i.qty, 0);
  countEl.style.display = totalItems ? 'flex' : 'none';
  countEl.textContent = totalItems;
  if(cart.length === 0){
    box.innerHTML = '<div class="empty-cart">Your cart is empty.<br>Browse the shop to add gear.</div>';
  } else {
    box.innerHTML = cart.map((i,idx) => `
      <div class="cart-item">
        <div class="cart-item-img">${i.emo}</div>
        <div class="cart-item-info">
          <div class="name">${i.name}</div>
          <div class="meta">${i.brand ? i.brand + ' · ' : ''}Size ${i.size} · ${fmt(i.price)}</div>
          <div class="cart-item-ctrl">
            <button onclick="changeItemQty(${idx},-1)">–</button>
            <span>${i.qty}</span>
            <button onclick="changeItemQty(${idx},1)">+</button>
            <button class="remove-link" onclick="removeItem(${idx})">Remove</button>
          </div>
        </div>
      </div>`).join('');
  }
  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  document.getElementById('subtotal').textContent = fmt(subtotal);
  document.getElementById('cartTotal').textContent = fmt(subtotal);
}
function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
}
function openAuth(){ document.getElementById('authOverlay').classList.add('open'); }
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  if(id === 'cartOverlay') document.getElementById('cartDrawer').classList.remove('open');
}

/* ---------- SIZING FINDER ---------- */
function calculateSize(){
  const h = parseInt(document.getElementById('userHeight').value, 10);
  const discipline = document.getElementById('userDiscipline').value;
  const box = document.getElementById('sizingResult');
  box.style.display = 'block';

  if(!h || h < 100 || h > 230){
    box.innerHTML = '<p style="margin:0; color:var(--red);">Enter a height between 100 and 230 cm.</p>';
    return;
  }
  const raw = discipline === 'kata' ? Math.ceil(h / 10) * 10 : Math.round(h / 10) * 10;
  const giSize = Math.min(200, Math.max(100, raw));
  const letter = h < 160 ? 'XS' : h < 170 ? 'S' : h < 180 ? 'M' : h < 190 ? 'L' : 'XL';
  const tip = discipline === 'kata'
    ? 'Kata canvas is stiff, so we size up when you fall between sizes.'
    : 'Kumite gis are cut lighter and looser for speed.';

  box.innerHTML = `
    <h3>Gi size ${giSize}</h3>
    <p style="margin:8px 0 6px;">Shop size: <strong>${letter}</strong></p>
    <p class="muted" style="margin:0;">${tip}</p>`;
}

/* ---------- AUTH ---------- */
function switchAuthTab(tab){
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
}
function isValidEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function setFieldError(fieldId, hasError){
  document.getElementById(fieldId).classList.toggle('has-error', hasError);
  document.getElementById(fieldId).querySelector('input').classList.toggle('error', hasError);
}
function mockAuth(mode){
  let valid = true;
  if(mode === 'signup'){
    const nameOk = document.getElementById('signupName').value.trim().length > 0;
    setFieldError('signupNameField', !nameOk); valid = valid && nameOk;
    const emailOk = isValidEmail(document.getElementById('signupEmail').value.trim());
    setFieldError('signupEmailField', !emailOk); valid = valid && emailOk;
    const passOk = document.getElementById('signupPass').value.length >= 6;
    setFieldError('signupPassField', !passOk); valid = valid && passOk;
  } else {
    const emailOk = isValidEmail(document.getElementById('loginEmail').value.trim());
    setFieldError('loginEmailField', !emailOk); valid = valid && emailOk;
    const passOk = document.getElementById('loginPass').value.length >= 6;
    setFieldError('loginPassField', !passOk); valid = valid && passOk;
  }
  if(!valid) return;
  closeModal('authOverlay');
  alert('Form validated — real authentication comes in Phase 4.');
}

/* ---------- INIT ---------- */
renderStaticControls();
renderHome();
renderHero();
startHero();
renderShop();
renderCartUI();