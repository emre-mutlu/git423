/**
 * ==========================================================================
 * WEEK 5 MODULE: Tipografi ve Renk (Görsel İletişim Tasarımı Odaklı)
 * Uygulamalı Seri · Ders 4 / 8 · Renk ve yazıyı bir sisteme oturtmak
 * ==========================================================================
 *
 * ⚠ DURUM: %80 İSKELET (2026-06-22). Bölüm yapısı + tüm slayt başlıkları +
 * her slaytın amaç taslağı hazır. Tam interaktif demolar (canlı editör,
 * tıkla-cevap perdeleri, palet/kontrast oynatıcıları) `TODO` olarak işaretli;
 * Çarşamba doldurulacak. Hedef: ~28 slayt, 2 saatlik ders.
 *
 * Bu deste week4 (CSS Temelleri) destesinin devamıdır. week4 renk ve yazıyı
 * "çalışır" hale getirdi (color, font-family, font-size giriş) ve son slaytı
 * (css-koprusu) şöyle kapattı: "İskelet → İlk Renk → SİSTEM (palet, kontrast,
 * tipografik ölçek) sırada... Renk çalışmaktan çıkar, bir KARARA dönüşür."
 * Bu deste o sözü tutar: rastgele değerleri birer tasarım kararına çevirir.
 *
 * OMURGA METAFORU (week4'ten devam): "eskiz → renklendirme → SİSTEM". week3
 * iskeleti, week4 ilk rengi/yazıyı kurdu; bu deste onları uyumlu bir palet,
 * yeterli kontrast ve tutarlı bir tipografik ölçeğe oturtur. Çıplak renk =
 * "rastgele seçim"; sistemli renk = "karar".
 *
 * ANLATIM TONU (week4 ile aynı): konuyu anlatan dil (açıklayıcı, 3. şahıs/
 * edilgen), öğrenciye doğrudan emir/davet DEĞİL ("görelim/uygula" yok). Sıcak
 * ve anlaşılır kalır (benzetmeler korunur). Buton/UI metinleri emir kipinde olabilir.
 *
 * OMURGA: "Renk ve yazı birer KARARDIR" (tasarımcı gözü). week4 mekanikti;
 * bu deste sistematik: font yığını + web fontları, birimler + ölçek, palet +
 * renk rolleri, kontrast + a11y (4.5:1), CSS değişkenleriyle mini tasarım sistemi.
 *
 * "Tasarım Gözü" köşesi bu destede CONTRAST (kontrast) ilkesini işler
 * (geçen hafta Consistency idi): boyut/ağırlık/renk ile görsel hiyerarşi.
 * Teknik bağ: tip hiyerarşisi + 4.5:1 + palet.
 *
 * İLERİ-İŞARET: Ders 5 (Box Model + Boşluk + AI ile Debugging, week6.js).
 *
 * Stil/desen referansı: week4.js (vcd-* + playgrounds.css yardımcı sınıfları).
 * Devamlılık kancaları: week1 teaser (serif/sans/mono → Bölüm 1), week4
 * (HEX/RGB → Bölüm 3; Consistency köşesi → Bölüm 5 tek-kaynak; css-koprusu sözü).
 */

export const week5 = {
    title: "6. Hafta: Tipografi ve Renk",
    slides: [

        // ============================================================
        // BÖLÜM 0: AÇILIŞ + KÖPRÜ
        // ============================================================

        // Slide 1: Karşılama (Hero) — çalışan stil → sistemli stil
        {
            id: "giris",
            title: "Tipografi ve Renk",
            subtitle: '<span style="white-space:nowrap; font-size:1.25rem;">Görsel İletişim Tasarımı · 6. Hafta · Renk ve yazıyı bir sisteme oturtmak</span>',
            type: "hero",
            html: `
                <!-- TODO: week4 hero deseni (iki-panel "önce/sonra"). Sol: rastgele
                     renk/font (çalışıyor ama dağınık). Sağ: sistemli palet + tipografik
                     ölçek (aynı içerik, karar verilmiş). Metafor: "çalışıyor → karar". -->
                <p class="vcd-content-intro" style="margin-top:24px;">Renk ve yazı geçen derste <strong style="color:var(--color-text-primary);">çalışır</strong> hale geldi. Bu deste onları rastgele değerlerden çıkarıp birer karara dönüştürür: uyumlu bir palet, yeterli kontrast, tutarlı bir tipografik ölçek.</p>
            `
        },

        // Slide 2: Geri çağrı — week4 sözünü tut (çalışıyor → sistem)
        {
            id: "geri-cagri",
            category: "Hatırlatma",
            title: "Renk Çalışıyor, Sıra Sistemde",
            html: `
                <!-- TODO: week4 css-koprusu üç-kart zincirini sürdür (İskelet → İlk
                     Renk → SİSTEM). Bu slayt "Sistem" kartını açar. -->
                <p class="vcd-content-intro">Geçen ders <code>color</code> ve <code>font-family</code> ile sayfaya ilk görünüm verildi. Ama değerler tek tek, deneme yanılmayla seçilmişti. Bu dersin işi, o seçimleri bir sisteme bağlamak: hangi yazı tipi, hangi ölçek, hangi palet, neden.</p>
            `
        },

        // ============================================================
        // BÖLÜM 1: TİPOGRAFİ — "Yazı tipi bir ses tonudur"
        // ============================================================

        // Slide 3: Font aileleri — serif / sans-serif / mono (week1 teaser'ın dersi)
        {
            id: "font-aileleri",
            category: "Bölüm 1: Tipografi",
            title: "Yazı Tipi Bir Ses Tonudur",
            html: `
                <!-- TODO: serif / sans-serif (sans) / monospace (mono) üç-panel,
                     aynı kelime üç ailede. Her birinin "hissi" (klasik/modern/teknik).
                     week1 genel bakış teaser'ının (serif/sans/mono) gerçek dersi. -->
                <p class="vcd-content-intro">Aynı cümle, farklı yazı tipinde farklı bir <strong style="color:var(--color-text-primary);">ses tonu</strong> taşır. Üç temel aile: serif (tırnaklı, klasik), sans-serif (tırnaksız, modern), monospace (eş aralıklı, teknik). Yazı tipi seçimi bir biçim kararı değil, bir ton kararıdır.</p>
            `
        },

        // Slide 4: font-family yığını (fallback stack)
        {
            id: "font-family-yigini",
            category: "Bölüm 1: Tipografi",
            title: "font-family: Yedekli Yığın",
            html: `
                <!-- TODO: font-family: "Inter", system-ui, sans-serif; — neden birden
                     fazla? İlki yoksa sonrakine düşer (fallback). Sistem fontları kısa not. -->
                <p class="vcd-content-intro">CSS'te yazı tipi tek bir isimle değil, bir <strong style="color:var(--color-text-primary);">yığınla</strong> (stack) verilir: <code>font-family: "Inter", system-ui, sans-serif;</code>. İlk yazı tipi bulunamazsa tarayıcı sıradakine düşer (fallback). En sonda her zaman genel bir aile (sans-serif) bırakılır.</p>
            `
        },

        // Slide 5: Web fontları — Google Fonts <link>
        {
            id: "web-fontlari",
            category: "Bölüm 1: Tipografi",
            title: "Web Fontları: Google Fonts",
            html: `
                <!-- TODO: Google Fonts'tan <link> ile bağlama (head'e), sonra
                     font-family'de kullanma. @font-face'e bir cümle değin (ileri). -->
                <p class="vcd-content-intro">Bilgisayarda olmayan bir yazı tipi web'de nasıl görünür? Google Fonts gibi servisler, yazı tipini sayfayla birlikte indirir. <code>head</code> içine bir <code>&lt;link&gt;</code> eklenir, ardından <code>font-family</code>'de kullanılır. Böylece her ziyaretçi aynı tipografiyi görür.</p>
            `
        },

        // Slide 6: Canlı örnek — aynı metin, farklı font
        {
            id: "font-canli-ornek",
            category: "Bölüm 1: Tipografi",
            title: "Aynı Metin, Farklı Ses",
            html: `
                <!-- TODO: canlı editör (html-editor + iframe srcdoc) ya da tıkla-cevap:
                     font-family değişince aynı paragrafın tonu nasıl değişir. -->
                <p class="vcd-content-intro">Tek bir paragraf, yalnızca yazı tipi değişerek bambaşka bir karakter kazanır. Aynı içerik; resmi mi, sıcak mı, teknik mi hissettirir? Bu karar, okurun ilk izlenimini doğrudan belirler.</p>
            `
        },

        // ============================================================
        // BÖLÜM 2: TİPOGRAFİK ÖLÇEK + RİTİM
        // ============================================================

        // Slide 7: font-size birimleri — px vs rem/em
        {
            id: "font-size-birimleri",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Boyut Birimleri: px, rem, em",
            html: `
                <!-- TODO: px (sabit) vs rem (köke göre) vs em (parent'a göre).
                     Neden rem önerilir (erişilebilirlik + tutarlı ölçek). -->
                <p class="vcd-content-intro">Yazı boyutu farklı birimlerle verilebilir: <code>px</code> sabittir; <code>rem</code> sayfanın kök boyutuna, <code>em</code> ise bulunduğu elementin boyutuna göre ölçeklenir. <code>rem</code>, hem tutarlı bir ölçek hem de kullanıcının tarayıcı ayarına saygı (erişilebilirlik) için tercih edilir.</p>
            `
        },

        // Slide 8: font-weight
        {
            id: "font-weight",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "font-weight: Vurgunun Ağırlığı",
            html: `
                <!-- TODO: 400 normal / 700 bold / ara değerler. Ağırlık = hiyerarşi
                     aracı (başlık ağır, gövde hafif). -->
                <p class="vcd-content-intro">Yazının kalınlığı (<code>font-weight</code>) bir vurgu aracıdır: 400 normal gövde, 700 kalın başlık. Ağırlık farkı, okura "önce şuraya bak" der. Boyut gibi, ağırlık da bir hiyerarşi kararıdır.</p>
            `
        },

        // Slide 9: line-height + letter-spacing
        {
            id: "ritim-line-height",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Satır Aralığı: Okumanın Nefesi",
            html: `
                <!-- TODO: line-height (1.5 civarı gövde okunabilirliği) + letter-spacing
                     (başlıkta hafif) + text-align. Sıkışık vs nefes alan metin örneği. -->
                <p class="vcd-content-intro">Satır aralığı (<code>line-height</code>) metnin nefesidir: çok sıkışık satırlar yorar, çok açık olanlar dağıtır. Gövde metni için 1.5 civarı bir oran rahat okuma sağlar. <code>letter-spacing</code> ise başlıklarda ölçülü bir ferahlık katar.</p>
            `
        },

        // Slide 10: Tipografik hiyerarşi / ölçek
        {
            id: "tip-hiyerarsi",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Tipografik Ölçek: h1'den p'ye",
            html: `
                <!-- TODO: bir ölçek (örn. 1.25 oranlı) ile h1/h2/h3/p boyutları.
                     "Göz nereden başlamalı" — ölçek = okuma sırası. -->
                <p class="vcd-content-intro">Başlıktan gövdeye boyutlar rastgele değil, bir <strong style="color:var(--color-text-primary);">ölçeğe</strong> göre belirlenir. Tutarlı bir oran (örneğin her adımda 1.25 kat) <code>h1</code>, <code>h2</code>, <code>p</code> arasında net bir hiyerarşi kurar. Ölçek, gözün nereden başlayıp nereye gideceğini söyler.</p>
            `
        },

        // ============================================================
        // BÖLÜM 3: RENK — "Palet bir karardır"
        // ============================================================

        // Slide 11: Renk değerleri hatırlatma (week4 HEX/RGB geri-çağrı)
        {
            id: "renk-degerleri",
            category: "Bölüm 3: Renk",
            title: "Renk Değerleri: Kısa Hatırlatma",
            html: `
                <!-- TODO: week4'ten HEX + RGB geri-çağrı (kısa). Neden sınırlı bir
                     palet seçilir, sayısız renk varken. -->
                <p class="vcd-content-intro">Geçen ders renk <code>HEX</code> (#1a1a1a) ve <code>RGB</code> ile verilmişti. Tarayıcı milyonlarca rengi gösterebilir; ama iyi tasarım renkleri çoğaltmaz, <strong style="color:var(--color-text-primary);">sınırlar</strong>. Soru "hangi renk güzel" değil, "hangi birkaç renk birlikte çalışır".</p>
            `
        },

        // Slide 12: Renk rolleri — primary / secondary / accent / nötr
        {
            id: "renk-rolleri",
            category: "Bölüm 3: Renk",
            title: "Renklerin Rolleri",
            html: `
                <!-- TODO: primary (ana) / secondary (ikincil) / accent (vurgu) / nötr
                     (metin + zemin). Her rengin bir GÖREVİ var. -->
                <p class="vcd-content-intro">Bir palette her rengin bir görevi vardır: ana renk (primary) kimliği taşır, ikincil (secondary) onu destekler, vurgu (accent) dikkat çeker, nötrler (metin ve zemin) çoğunluğu kaplar. Renk seçmek değil, renge <strong style="color:var(--color-text-primary);">rol</strong> vermek tasarımdır.</p>
            `
        },

        // Slide 13: Palet kurma — 60-30-10
        {
            id: "palet-kurma",
            category: "Bölüm 3: Renk",
            title: "Palet Kurmak: 60-30-10",
            html: `
                <!-- TODO: 60-30-10 dengesi (nötr 60 / ikincil 30 / vurgu 10).
                     Az vurgu = güçlü vurgu. Örnek palet kartı. -->
                <p class="vcd-content-intro">Dengeli bir palette renkler eşit pay almaz. Yaygın bir rehber 60-30-10'dur: yüzeyin yaklaşık %60'ı nötr, %30'u ikincil, %10'u vurgu rengi. Vurgu az kullanıldığında güçlüdür; her yer vurgu olursa hiçbir yer vurgu olmaz.</p>
            `
        },

        // Slide 14: Canlı örnek — palet uygulanmış kart
        {
            id: "renk-canli-ornek",
            category: "Bölüm 3: Renk",
            title: "Palet İş Başında",
            html: `
                <!-- TODO: aynı kart, paletsiz (rastgele renk) vs paletli (rol+denge).
                     Tıkla-cevap ya da iki-panel. -->
                <p class="vcd-content-intro">Aynı kart bileşeni, rastgele renklerle dağınık; rolleri ve dengesi belli bir paletle ise sakin ve okunaklı görünür. Fark görsel zevk değil, <strong style="color:var(--color-text-primary);">tutarlı bir karar</strong> meselesidir.</p>
            `
        },

        // ============================================================
        // BÖLÜM 4: KONTRAST + OKUNABİLİRLİK (a11y)
        // ============================================================

        // Slide 15: Kontrast nedir — metin/zemin
        {
            id: "kontrast-nedir",
            category: "Bölüm 4: Kontrast",
            title: "Kontrast: Metin Zeminden Ayrılmalı",
            html: `
                <!-- TODO: yüksek vs düşük kontrast metin örneği (açık gri/beyaz =
                     okunmaz). Kontrast = okunabilirliğin temeli. -->
                <p class="vcd-content-intro">Bir metnin okunabilmesi, zeminden yeterince <strong style="color:var(--color-text-primary);">ayrılmasına</strong> (kontrast) bağlıdır. Açık gri zemin üzerinde açık gri yazı zarif görünebilir ama okunmaz. Kontrast bir süs değil, iletişimin ön şartıdır.</p>
            `
        },

        // Slide 16: 4.5:1 kuralı (a11y)
        {
            id: "kontrast-4-5",
            category: "Bölüm 4: Kontrast",
            title: "4.5:1: Erişilebilir Kontrast",
            html: `
                <!-- TODO: WCAG 4.5:1 normal metin kuralı (yüzeysel a11y). Neden:
                     düşük görme, kötü ekran, güneş ışığı. -->
                <p class="vcd-content-intro">Erişilebilirlik (a11y) rehberleri, normal metin için en az <strong style="color:var(--color-text-primary);">4.5:1</strong> kontrast oranı önerir. Bu sayı keyfi değil: düşük görme, parlak güneş, ucuz ekran gibi koşullarda metnin herkes için okunur kalmasını güvenceye alır.</p>
            `
        },

        // Slide 17: Kontrast kontrol aracı
        {
            id: "kontrast-arac",
            category: "Bölüm 4: Kontrast",
            title: "Kontrastı Ölçmek",
            html: `
                <!-- TODO: DevTools renk seçici kontrast göstergesi / online checker.
                     "Gözle tahmin etme, ölç." -->
                <p class="vcd-content-intro">Kontrast gözle tahmin edilmez, ölçülür. Tarayıcının geliştirici araçları (DevTools) bir renk seçilince oranı gösterir; çevrimiçi denetleyiciler de aynı işi yapar. İki renk arasındaki oran 4.5:1'in altındaysa, palet revize edilir.</p>
            `
        },

        // ============================================================
        // BÖLÜM 5: CSS DEĞİŞKENLERİ — Mini Tasarım Sistemi
        // ============================================================

        // Slide 18: Değişken nedir — :root --renk + var()
        {
            id: "degisken-nedir",
            category: "Bölüm 5: CSS Değişkenleri",
            title: "CSS Değişkeni: Bir Kez Tanımla",
            html: `
                <!-- TODO: :root { --renk-ana: #...; } + kullanım: color: var(--renk-ana);
                     Sözdizimi + nereye yazılır. -->
                <p class="vcd-content-intro">Bir renk ya da yazı tipi, sayfanın onlarca yerinde tekrar eder. CSS değişkeni bunu bir kez tanımlamayı sağlar: <code>:root { --renk-ana: #1a1a1a; }</code> ile tanımlanır, <code>color: var(--renk-ana);</code> ile kullanılır.</p>
            `
        },

        // Slide 19: Neden değişken — tek kaynak (week4 Consistency köprüsü)
        {
            id: "degisken-neden",
            category: "Bölüm 5: CSS Değişkenleri",
            title: "Tek Kaynak: Bir Yerden Değiştir",
            html: `
                <!-- TODO: week4 Consistency köşesine bağ. Paleti değiştirmek =
                     tek satırı değiştirmek. Tutarlılığın garantisi. -->
                <p class="vcd-content-intro">Geçen haftanın Tasarım Gözü köşesi tutarlılığı (consistency) "tek kaynaktan stil" olarak tanımlamıştı. CSS değişkenleri bunun aracıdır: ana renk değişince tek satır güncellenir, sayfanın tamamı birlikte değişir. Tutarlılık tesadüf değil, yapı haline gelir.</p>
            `
        },

        // Slide 20: Mini tasarım sistemi — tip + renk birlikte
        {
            id: "mini-sistem",
            category: "Bölüm 5: CSS Değişkenleri",
            title: "Mini Tasarım Sistemi",
            html: `
                <!-- TODO: :root içinde renk rolleri + tipografik ölçek birlikte
                     (hafif giriş). "Senin küçük tasarım sistemin." -->
                <p class="vcd-content-intro">Renk rolleri ve tipografik ölçek bir araya gelince, sayfanın tepesinde küçük bir <strong style="color:var(--color-text-primary);">tasarım sistemi</strong> oluşur: birkaç renk değişkeni, birkaç boyut değişkeni. Bütün sayfa bu kısa listeden beslenir. Tasarım artık dağınık değil, merkezi bir karardır.</p>
            `
        },

        // ============================================================
        // BÖLÜM 6: TASARIM GÖZÜ — CONTRAST
        // ============================================================

        // Slide 21: Köşe açılış + Contrast tanımı
        {
            id: "tg-acilis",
            category: "Bölüm 6: Tasarım Gözü",
            title: "Tasarım Gözü: Contrast",
            html: `
                <!-- TODO: köşe hatırlatma (geçen hafta Consistency). Contrast ilkesi
                     tanımı: farkı abart, benzeri birleştirme. -->
                <p class="vcd-content-intro">Tasarım Gözü köşesi bu hafta <strong style="color:var(--color-text-primary);">contrast</strong> (kontrast) ilkesini ele alır. Geçen hafta tutarlılık benzerlik üzerineydi; contrast ise farktır: iki şey farklıysa, fark belirgin olmalı. Belirsiz farklar gözü yorar, net farklar yönlendirir.</p>
            `
        },

        // Slide 22: Kötü / iyi iki-panel
        {
            id: "tg-kotu-iyi",
            category: "Bölüm 6: Tasarım Gözü",
            title: "Aynı İçerik: Kontrastsız ve Kontrastlı",
            html: `
                <!-- TODO: iki-panel — solda her şey aynı boyut/ağırlık/renk (düz),
                     sağda hiyerarşi kurulmuş (başlık ağır/büyük, gövde sakin). -->
                <p class="vcd-content-intro">Aynı içerik iki kez: solda her öğe aynı boyut, ağırlık ve renkte, hepsi eşit önemde bağırıyor; sağda başlık öne çıkıyor, gövde geri çekiliyor. İkinci panelde göz nereye bakacağını bilir. Fark, contrast kararıdır.</p>
            `
        },

        // Slide 23: Contrast nasıl kurulur — boyut/ağırlık/renk
        {
            id: "tg-hiyerarsi",
            category: "Bölüm 6: Tasarım Gözü",
            title: "Hiyerarşi: Boyut, Ağırlık, Renk",
            html: `
                <!-- TODO: contrast'ın üç temel aracı: boyut farkı + ağırlık farkı +
                     renk farkı. Bu derste öğrenilen her şey buraya bağlanır. -->
                <p class="vcd-content-intro">Görsel hiyerarşi üç temel araçla kurulur: boyut, ağırlık ve renk. Bu üçü, bu dersin tam konusudur. Tipografik ölçek boyutu, <code>font-weight</code> ağırlığı, palet ise renk kontrastını verir. Contrast soyut bir ilke değil, öğrenilen tekniklerin amacıdır.</p>
            `
        },

        // Slide 24: Teknik bağ — tip hiyerarşisi + 4.5:1 + palet
        {
            id: "tg-baglanti",
            category: "Bölüm 6: Tasarım Gözü",
            title: "İlke ve Teknik Buluşuyor",
            html: `
                <!-- TODO: özet bağ — tip hiyerarşisi (Bölüm 2) + 4.5:1 (Bölüm 4) +
                     palet (Bölüm 3) hepsi contrast'a hizmet eder. -->
                <p class="vcd-content-intro">Bu dersin parçaları tek bir ilkede birleşir: tipografik ölçek (Bölüm 2), 4.5:1 okunabilirlik (Bölüm 4) ve renk paleti (Bölüm 3) hepsi contrast'ı hizmete sokar. İyi kontrast hem güzeldir hem erişilebilir; estetik ile a11y aynı kararda buluşur.</p>
            `
        },

        // ============================================================
        // BÖLÜM 7: ENTEGRASYON + ÖDEV + KAPANIŞ
        // ============================================================

        // Slide 25: Hepsi bir arada
        {
            id: "hepsi-bir-arada",
            category: "Bölüm 7: Pratik ve Kapanış",
            title: "Üç Dersin Birleşimi",
            html: `
                <!-- TODO: Ders 2 iskelet + Ders 3 CSS mekaniği + bu hafta tip/renk
                     sistemi → bir sayfada birlikte. Kümülatif çıktı vurgusu. -->
                <p class="vcd-content-intro">Sayfa artık üç dersin birikimini taşıyor: anlamlı iskelet (Ders 2), çalışan CSS (Ders 3) ve bu haftanın tip + renk sistemi. Yapı bir kimliğe kavuştu; rastgele görünüm, bir tasarım kararına dönüştü.</p>
            `
        },

        // Slide 26: Haftalık ödev
        {
            id: "odev",
            category: "Bölüm 7: Pratik ve Kapanış",
            title: "Haftalık Ödev: Sayfana Bir Ses ve Palet Ver",
            html: `
                <!-- TODO: ödev tanımı (week4 deseni). Bir Google Font + bir tipografik
                     ölçek + 3-4 renklik palet (CSS değişkenleriyle) + 4.5:1 kontrol.
                     Teslim hattı + "nasıl yaptım" notu. -->
                <p class="vcd-content-intro">Bu haftanın görevi, sayfaya bir kimlik vermek: bir web fontu seçmek, başlıktan gövdeye tutarlı bir tipografik ölçek kurmak, üç-dört renklik bir paleti CSS değişkenleriyle tanımlamak ve metin kontrastının 4.5:1'i geçtiğini doğrulamak.</p>
            `
        },

        // Slide 27: Yansıtma — üç soru (metacognition kapanışı)
        {
            id: "yansitma",
            category: "Bölüm 7: Pratik ve Kapanış",
            title: "Geriye Bakış: Üç Soru",
            html: `
                <!-- TODO: week4 yansitma deseni. Üç soru: Bu hafta hangi kararı
                     verdin? Neden o palet/font? Neyi hâlâ bilmiyorsun? -->
                <p class="vcd-content-intro">Her destenin sonunda kısa bir geriye bakış vardır. Bu hafta hangi tasarım kararı verildi (hangi ses, hangi palet)? O karar neden verildi? Ve hâlâ belirsiz kalan ne var? Bu sorular, öğrenmeyi alışkanlıktan ayırır.</p>
            `
        },

        // Slide 28: İleri-pin — Ders 5 (Box Model + Boşluk + AI Debugging)
        {
            id: "ders5-koprusu",
            category: "Bölüm 7: Pratik ve Kapanış",
            title: "Sıradaki Adım: Boşluk ve Kutu",
            html: `
                <!-- TODO: week4 css-koprusu deseni (üç-kart zinciri + analogy-box).
                     İleri-işaret: renk/yazı oturdu → şimdi BOŞLUK ve YERLEŞİM
                     (Box Model: content/padding/border/margin) + AI ile debugging. -->
                <p class="vcd-content-intro">Renk ve yazı artık bir sistem. Ama öğeler hâlâ sayfada üst üste dizili; aralarındaki boşluk rastgele. Sıradaki ders bu boşluğu kontrol altına alır: kutu modeli (box model) ile her öğenin kapladığı alan, ve takılınca DevTools ile AI'ı birlikte kullanarak hata çözme.</p>
                <p class="ileri-pin" style="margin-top:14px;"><strong>İleri:</strong> Ders 5 — Box Model, boşluk ritmi ve AI ile debugging.</p>
            `
        }

    ]
};
