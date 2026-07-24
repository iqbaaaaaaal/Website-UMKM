const { config, umkm, gallery } = SITE_DATA;
const $ = (selector) => document.querySelector(selector);
const escapeHtml = (text) => String(text).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const waLink = (number, message = "Halo, saya ingin bertanya mengenai produk UMKM.") => `https://wa.me/${String(number).replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

function populateSite() {
  document.title = `UMKM ${config.village}`;
  $("#navVillage").textContent = config.village.replace(/^Desa\s+/i, "");
  $("#footerVillage").textContent = config.village.replace(/^Desa\s+/i, "");
  $("#copyrightVillage").textContent = config.village;
  $("#heroVillage").textContent = config.village;
  $("#heroDescription").textContent = config.heroDescription;
  $("#teamLabel").textContent = config.team;
  $("#villageDescription").textContent = config.villageDescription;
  $("#villageLocation").textContent = config.location;
  $("#villagePotential").textContent = config.potential;
  $("#footerTeam").textContent = config.team;
  $("#footerUniversity").textContent = config.university;
  $("#footerAddress").textContent = config.contacts.address;
  $("#currentYear").textContent = new Date().getFullYear();
  const email = $("#contactEmail"); email.href = `mailto:${config.contacts.email}`; email.textContent = config.contacts.email;
  const instagram = $("#contactInstagram"); instagram.href = config.contacts.instagram;
  const whatsapp = $("#contactWhatsapp"); whatsapp.href = waLink(config.contacts.whatsapp, `Halo ${config.team}, saya ingin bertanya tentang UMKM ${config.village}.`);
  $("#ctaWhatsapp").href = whatsapp.href;
}

function renderFilters() {
  const categories = ["Semua", ...new Set(umkm.map((item) => item.category))];
  $("#categoryFilters").innerHTML = categories.map((category, index) => `<button class="filter ${index === 0 ? "active" : ""}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("");
}

function renderUmkm(items) {
  $("#umkmGrid").innerHTML = items.map((item) => {
    const index = umkm.indexOf(item);
    return `<article class="umkm-card"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.classList.add('image-error')" /><div class="card-body"><span class="category" style="--accent:${escapeHtml(item.accent || '#c8a66a')}">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p><div class="card-footer"><strong>${escapeHtml(item.price)}</strong><button class="detail-button" data-index="${index}">Detail <span>→</span></button></div></div></article>`;
  }).join("");
  $("#emptyState").hidden = items.length !== 0;
}

function renderGallery() {
  $("#galleryGrid").innerHTML = gallery.map((item) => `<figure><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.caption)}" loading="lazy" /><figcaption>${escapeHtml(item.caption)}</figcaption></figure>`).join("");
}

function filterUmkm() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const active = $(".filter.active")?.dataset.category || "Semua";
  const filtered = umkm.filter((item) => (active === "Semua" || item.category === active) && `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query));
  renderUmkm(filtered);
}

function openModal(item) {
  $("#modalContent").innerHTML = `<img class="modal-image" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" /><div class="modal-body"><span class="category" style="--accent:${escapeHtml(item.accent || '#c8a66a')}">${escapeHtml(item.category)}</span><h2>${escapeHtml(item.name)}</h2><p>${escapeHtml(item.description)}</p><div class="modal-meta"><span>Pemilik: <strong>${escapeHtml(item.owner)}</strong></span><span>Harga: <strong>${escapeHtml(item.price)}</strong></span></div><a class="button button-gold" target="_blank" rel="noopener" href="${waLink(item.whatsapp, `Halo ${item.owner}, saya tertarik dengan ${item.name}.`)}">Pesan via WhatsApp →</a></div>`;
  $("#umkmModal").showModal();
}

function bindEvents() {
  $("#searchInput").addEventListener("input", filterUmkm);
  $("#categoryFilters").addEventListener("click", (event) => { if (!event.target.matches(".filter")) return; document.querySelectorAll(".filter").forEach((button) => button.classList.remove("active")); event.target.classList.add("active"); filterUmkm(); });
  $("#umkmGrid").addEventListener("click", (event) => { const button = event.target.closest(".detail-button"); if (button) openModal(umkm[Number(button.dataset.index)]); });
  $("#modalClose").addEventListener("click", () => $("#umkmModal").close());
  $("#umkmModal").addEventListener("click", (event) => { if (event.target === $("#umkmModal")) $("#umkmModal").close(); });
  $("#menuButton").addEventListener("click", () => { const open = $("#navLinks").classList.toggle("open"); $("#menuButton").setAttribute("aria-expanded", open); });
  document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => $("#navLinks").classList.remove("open")));
  $("#brandLogo").addEventListener("error", () => $("#brandLogo").classList.add("is-missing"));
}

populateSite(); renderFilters(); renderUmkm(umkm); renderGallery(); bindEvents();
