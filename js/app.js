/**
 * GAMEBOX PlayStation Cafe - Sade, Modern & Lüks Menü Mantığı
 */

(function () {
  "use strict";

  const config = window.GAMEBOX_CONFIG || {};
  const data = window.GAMEBOX_APP_DATA || {};
  const categories = data.categories || [];
  const products = data.products || [];

  // State
  const state = {
    category: "all",
    search: ""
  };

  // DOM Elemanları
  const elements = {
    categoryChips: document.getElementById("categoryChips"),
    mainContent: document.getElementById("mainContent"),
    searchInput: document.getElementById("searchInput"),
    searchClear: document.getElementById("searchClear"),
    previewModal: document.getElementById("previewModal"),
    previewImg: document.getElementById("previewImg"),
    previewTitle: document.getElementById("previewTitle"),
    previewDesc: document.getElementById("previewDesc"),
    previewPrice: document.getElementById("previewPrice")
  };

  // ===================================================================
  // KATEGORİ RENDER
  // ===================================================================
  function renderCategories() {
    if (!elements.categoryChips) return;
    elements.categoryChips.innerHTML = "";

    categories.forEach(cat => {
      const count = cat.id === "all" ? products.length : products.filter(p => p.categoryId === cat.id).length;

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `category-chip ${state.category === cat.id ? "active" : ""}`;
      chip.innerHTML = `
        <span>${cat.name}</span>
        <span class="count-badge">${count}</span>
      `;

      chip.onclick = () => {
        state.category = cat.id;
        state.search = "";
        if (elements.searchInput) elements.searchInput.value = "";
        if (elements.searchClear) elements.searchClear.style.display = "none";

        document.querySelectorAll(".category-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");

        renderProducts();
      };

      elements.categoryChips.appendChild(chip);
    });
  }

  // ===================================================================
  // ÜRÜNLER RENDER
  // ===================================================================
  function renderProducts() {
    if (!elements.mainContent) return;
    elements.mainContent.innerHTML = "";

    const query = state.search.trim().toLowerCase();
    const isSearch = query.length > 0;

    const filtered = products.filter(p => {
      const matchCat = state.category === "all" || p.categoryId === state.category;
      const matchSearch = !isSearch || p.name.toLowerCase().includes(query) || (p.description && p.description.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      elements.mainContent.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <h3 style="color: #fff; font-size: 1.1rem; font-weight: 600;">Sonuç bulunamadı</h3>
          <p style="font-size: 0.85rem; margin-top: 4px; color: var(--text-dim);">"${query}" ile eşleşen bir ürün yok.</p>
        </div>
      `;
      return;
    }

    let titleText = "Tüm Ürünler";
    if (isSearch) {
      titleText = `"${query}" Arama Sonuçları`;
    } else {
      const currentCat = categories.find(c => c.id === state.category);
      if (currentCat && currentCat.id !== "all") {
        titleText = currentCat.name;
      }
    }

    const sec = document.createElement("section");
    sec.innerHTML = `
      <div class="section-header">
        <h2>${titleText}</h2>
        <span class="item-counter">${filtered.length} Ürün</span>
      </div>
      <div class="products-grid" id="productsGrid"></div>
    `;
    elements.mainContent.appendChild(sec);

    const grid = sec.querySelector("#productsGrid");

    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <div class="product-thumb">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.style.display='none'">
        </div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.description || ""}</div>
        </div>
        <div class="product-price-tag">
          <div class="price-pill">
            <span class="price-num">${p.price}</span>
            <span class="price-curr">₺</span>
          </div>
        </div>
      `;

      card.onclick = () => openPreview(p);
      grid.appendChild(card);
    });
  }

  // ===================================================================
  // BÜYÜK GÖRSEL ÖNİZLEME MODALI
  // ===================================================================
  function openPreview(product) {
    if (!elements.previewModal) return;
    elements.previewImg.src = product.image;
    elements.previewTitle.textContent = product.name;
    elements.previewDesc.textContent = product.description || "";
    elements.previewPrice.textContent = `${product.price} ₺`;

    elements.previewModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeAllModals() {
    document.querySelectorAll(".preview-modal-backdrop").forEach(m => m.classList.remove("open"));
    document.body.style.overflow = "";
  }

  // ===================================================================
  // CANLI GOOGLE SHEETS SENKRONİZASYONU
  // ===================================================================
  async function syncLivePricesFromGoogleSheet() {
    const sheetUrl = config.googleSheetCsvUrl || localStorage.getItem("gamebox_live_sheet_url");
    if (!sheetUrl) return;

    try {
      const fetchUrl = sheetUrl.includes("?") ? `${sheetUrl}&_t=${Date.now()}` : `${sheetUrl}?_t=${Date.now()}`;
      const response = await fetch(fetchUrl);
      if (!response.ok) return;

      const csvText = await response.text();
      const lines = csvText.split(/\r?\n/).filter(line => line.trim().length > 0);
      if (lines.length <= 1) return;

      let updatedCount = 0;
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(",").map(c => c.trim().replace(/^"|"$/g, ""));
        if (cols.length < 4) continue;

        const id = cols[0];
        const name = cols[2];
        const priceNum = parseFloat(cols[3]);
        const desc = cols[4];

        if (isNaN(priceNum)) continue;

        const target = products.find(p => p.id === id || p.name.toLowerCase() === name.toLowerCase());
        if (target) {
          if (target.price !== priceNum) {
            target.price = priceNum;
            updatedCount++;
          }
          if (desc && desc !== target.description) {
            target.description = desc;
          }
        }
      }

      if (updatedCount > 0) {
        renderProducts();
      }
    } catch (err) {
      console.warn("Canlı fiyatlar senkronize edilemedi.", err);
    }
  }

  // ===================================================================
  // INIT & EVENTS
  // ===================================================================
  function init() {
    renderCategories();
    renderProducts();

    // Google Sheets senkronizasyonu
    syncLivePricesFromGoogleSheet();

    // Arama
    if (elements.searchInput) {
      elements.searchInput.oninput = (e) => {
        state.search = e.target.value;
        if (elements.searchClear) {
          elements.searchClear.style.display = state.search ? "block" : "none";
        }
        renderProducts();
      };
    }

    if (elements.searchClear) {
      elements.searchClear.onclick = () => {
        state.search = "";
        elements.searchInput.value = "";
        elements.searchClear.style.display = "none";
        renderProducts();
      };
    }

    // Modal Kapatma
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.onclick = closeAllModals;
    });

    document.querySelectorAll(".preview-modal-backdrop").forEach(backdrop => {
      backdrop.onclick = (e) => {
        if (e.target === backdrop) closeAllModals();
      };
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
