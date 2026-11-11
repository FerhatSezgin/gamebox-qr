/**
 * GAMEBOX PlayStation Cafe - Sadece Yiyecek & İçecek Menüsü
 * Birebir güncel 38 ürün ve fiyat listesi
 */

const GAMEBOX_CONFIG = {
  // Google Sheets canlı fiyat tablosu URL'si (Opsiyonel):
  // Google E-Tablo oluşturup 'Web'de Yayınla' (CSV) linkini buraya yapıştırabilirsiniz.
  // Boş bırakılırsa aşağıdaki yerel fiyatlar kullanılır.
  googleSheetCsvUrl: ""
};

const GAMEBOX_DATA = {
  cafe: {
    name: "GAMEBOX",
    tagline: "PlayStation & Cafe",
    instagram: "gameboxcafe",
    wifi: {
      name: "GAMEBOX_GUEST",
      pass: "gamebox123"
    }
  },

  categories: [
    { id: "all", name: "Tümü", icon: "✨" },
    { id: "yiyecekler", name: "Yiyecekler", icon: "🥪" },
    { id: "soguk-icecek", name: "Soğuk İçecekler", icon: "🥤" },
    { id: "sicak-icecek", name: "Sıcak İçecekler", icon: "☕" },
    { id: "atistirmalik", name: "Atıştırmalıklar", icon: "🍿" }
  ],

  products: [
    // ==========================================
    // YİYECEKLER (2 Ürün)
    // ==========================================
    {
      id: "f1",
      categoryId: "yiyecekler",
      name: "Karışık Tost",
      description: "Kasap sucuk ve bol erimiş kaşar peyniri",
      price: 100,
      image: "assets/products/karisik-tost.jpeg"
    },
    {
      id: "f2",
      categoryId: "yiyecekler",
      name: "Kaşarlı Tost",
      description: "Taze tost ekmeğinde bol kaşar peyniri",
      price: 100,
      image: "assets/products/kasarli-tost.jpeg"
    },

    // ==========================================
    // SOĞUK İÇECEKLER (15 Ürün)
    // ==========================================
    {
      id: "c1",
      categoryId: "soguk-icecek",
      name: "Su",
      description: "Doğal kaynak suyu pet şişe",
      price: 15,
      image: "assets/products/su.jpeg"
    },
    {
      id: "c2",
      categoryId: "soguk-icecek",
      name: "Coca Cola Şişe",
      description: "Soğuk cam şişe orijinal lezzet",
      price: 60,
      image: "assets/products/coca-cola-sise.jpeg"
    },
    {
      id: "c3",
      categoryId: "soguk-icecek",
      name: "Coca Cola Kutu",
      description: "330ml kutu Coca-Cola",
      price: 90,
      image: "assets/products/coca-cola-kutu.jpeg"
    },
    {
      id: "c4",
      categoryId: "soguk-icecek",
      name: "Fanta",
      description: "Kutu portakal aromalı gazoz",
      price: 90,
      image: "assets/products/fanta.jpeg"
    },
    {
      id: "c5",
      categoryId: "soguk-icecek",
      name: "Sprite",
      description: "Kutu limon & misket limonu ferahlığı",
      price: 90,
      image: "assets/products/sprite.jpeg"
    },
    {
      id: "c6",
      categoryId: "soguk-icecek",
      name: "Sade Soda",
      description: "Beypazarı doğal zengin mineralli maden suyu",
      price: 25,
      image: "assets/products/sade-soda.jpeg"
    },
    {
      id: "c7",
      categoryId: "soguk-icecek",
      name: "Meyveli Soda Çeşitleri",
      description: "Freşa meyve aromalı maden suyu",
      price: 30,
      image: "assets/products/meyveli-soda.jpeg"
    },
    {
      id: "c8",
      categoryId: "soguk-icecek",
      name: "Cappy Çeşitleri",
      description: "Kutu meyve suyu çeşitleri",
      price: 90,
      image: "assets/products/cappy.jpeg"
    },
    {
      id: "c9",
      categoryId: "soguk-icecek",
      name: "Limonata",
      description: "Uludağ ferahlatıcı limonata",
      price: 60,
      image: "assets/products/limonata.jpeg"
    },
    {
      id: "c10",
      categoryId: "soguk-icecek",
      name: "Dimes Kutu",
      description: "Kutu meyve nektarı çeşitleri",
      price: 50,
      image: "assets/products/dimes-kutu.jpeg"
    },
    {
      id: "c11",
      categoryId: "soguk-icecek",
      name: "Lipton Ice Tea Çeşitleri",
      description: "Şeftali / Limon soğuk çay",
      price: 70,
      image: "assets/products/lipton-icetea.jpeg"
    },
    {
      id: "c12",
      categoryId: "soguk-icecek",
      name: "Redbull",
      description: "250ml enerji içeceği",
      price: 120,
      image: "assets/products/redbull.jpeg"
    },
    {
      id: "c13",
      categoryId: "soguk-icecek",
      name: "Nescafe Orjinal",
      description: "Nescafé Xpress soğuk kahve 250ml",
      price: 100,
      image: "assets/products/nescafe-xpress.jpeg"
    },
    {
      id: "c14",
      categoryId: "soguk-icecek",
      name: "Link",
      description: "B vitaminli çilek aromalı içecek",
      price: 30,
      image: "assets/products/link.jpeg"
    },
    {
      id: "c15",
      categoryId: "soguk-icecek",
      name: "CapriSun",
      description: "Pipetli meyveli ferahlatıcı içecek",
      price: 35,
      image: "assets/products/caprisun.jpeg"
    },

    // ==========================================
    // SICAK İÇECEKLER (5 Ürün)
    // ==========================================
    {
      id: "h1",
      categoryId: "sicak-icecek",
      name: "Americano",
      description: "Taze çekilmiş sıcak sade kahve",
      price: 100,
      image: "assets/products/americano.jpeg"
    },
    {
      id: "h2",
      categoryId: "sicak-icecek",
      name: "Nescafe Çeşitleri",
      description: "Sıcak kupada sütlü / sade Nescafé",
      price: 40,
      image: "assets/products/nescafe.jpeg"
    },
    {
      id: "h3",
      categoryId: "sicak-icecek",
      name: "Küçük Çay",
      description: "İnce belli bardakta taze demlenmiş çay",
      price: 20,
      image: "assets/products/kucuk-cay.jpeg"
    },
    {
      id: "h4",
      categoryId: "sicak-icecek",
      name: "Kupa Çay",
      description: "Büyük cam kupada taze demlenmiş çay",
      price: 30,
      image: "assets/products/kupa-cay.jpeg"
    },
    {
      id: "h5",
      categoryId: "sicak-icecek",
      name: "Bitki Çayı",
      description: "Ihlamur, adaçayı, yeşil çay",
      price: 30,
      image: "assets/products/bitki-cayi.jpeg"
    },

    // ==========================================
    // ATIŞTIRMALIKLAR (16 Ürün)
    // ==========================================
    {
      id: "s1",
      categoryId: "atistirmalik",
      name: "İkram",
      description: "Ülker İkram çikolata kremalı bisküvi",
      price: 40,
      image: "assets/products/ikram.jpeg"
    },
    {
      id: "s2",
      categoryId: "atistirmalik",
      name: "Gong",
      description: "Eti Gong bal & hardal mısır patlağı",
      price: 30,
      image: "assets/products/gong.jpeg"
    },
    {
      id: "s3",
      categoryId: "atistirmalik",
      name: "Kruvasan",
      description: "Bien çikolata dolgulu kruvasan",
      price: 30,
      image: "assets/products/kruvasan.jpeg"
    },
    {
      id: "s4",
      categoryId: "atistirmalik",
      name: "Karam",
      description: "Eti Karam Gurme bitter çikolata",
      price: 50,
      image: "assets/products/karam.jpeg"
    },
    {
      id: "s5",
      categoryId: "atistirmalik",
      name: "Tadelle",
      description: "Fındık dolgulu sütlü çikolata",
      price: 60,
      image: "assets/products/tadelle.jpeg"
    },
    {
      id: "s6",
      categoryId: "atistirmalik",
      name: "Çokonat",
      description: "Ülker fındıklı çikolatalı gofret",
      price: 45,
      image: "assets/products/cokonat.jpeg"
    },
    {
      id: "s7",
      categoryId: "atistirmalik",
      name: "Popkek",
      description: "Eti Popkek bitter çikolata soslu kek",
      price: 30,
      image: "assets/products/popkek.jpeg"
    },
    {
      id: "s8",
      categoryId: "atistirmalik",
      name: "Albeni",
      description: "Bisküvili karamelli çikolata kaplama",
      price: 35,
      image: "assets/products/albeni.jpeg"
    },
    {
      id: "s9",
      categoryId: "atistirmalik",
      name: "Çikolatalı Gofret",
      description: "Ülker çıtır çikolatalı gofret",
      price: 45,
      image: "assets/products/cikolatali-gofret.jpeg"
    },
    {
      id: "s10",
      categoryId: "atistirmalik",
      name: "Metro",
      description: "Ülker karamelli nuga bar çikolata",
      price: 35,
      image: "assets/products/metro.jpeg"
    },
    {
      id: "s11",
      categoryId: "atistirmalik",
      name: "Ülker Fındıklı Çikolata",
      description: "Bütün fındıklı sütlü çikolata",
      price: 60,
      image: "assets/products/ulker-findikli.jpeg"
    },
    {
      id: "s12",
      categoryId: "atistirmalik",
      name: "Browni Intense",
      description: "Eti yoğun çikolatalı browni kek",
      price: 40,
      image: "assets/products/browni-intense.jpeg"
    },
    {
      id: "s13",
      categoryId: "atistirmalik",
      name: "Rondo",
      description: "Ülker muz kremalı bisküvi",
      price: 30,
      image: "assets/products/rondo.jpeg"
    },
    {
      id: "s14",
      categoryId: "atistirmalik",
      name: "Probis Bisküvi",
      description: "Proteinli muz & kakao kremalı bisküvi",
      price: 40,
      image: "assets/products/probis.jpeg"
    },
    {
      id: "s15",
      categoryId: "atistirmalik",
      name: "Eti Crax",
      description: "Daha baharatlı gevrek çubuk kraker",
      price: 35,
      image: "assets/products/eti-crax.jpeg"
    },
    {
      id: "s16",
      categoryId: "atistirmalik",
      name: "Çubuk Kraker",
      description: "Ülker tuzlu çıtır çubuk kraker",
      price: 15,
      image: "assets/products/cubuk-kraker.jpeg"
    }
  ]
};

window.GAMEBOX_CONFIG = GAMEBOX_CONFIG;
window.GAMEBOX_APP_DATA = GAMEBOX_DATA;
