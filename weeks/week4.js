/**
 * ==========================================================================
 * WEEK 4 MODULE: CSS Temelleri (Görsel İletişim Tasarımı Odaklı)
 * Uygulamalı Seri · Ders 3 / 8 · Çizgiyi renklendirmek: CSS'i bağlamak + ilk stiller
 * ==========================================================================
 *
 * Bu deste week3 (HTML Yapı + Semantic) destesinin devamıdır. week3 anlamlı
 * iskeleti kurmuş, id/class isimlerini "CSS kancası" olarak tanıtmış ve
 * "İskelet hazır, sırada görünüm var" diye kapanmıştı. Bu deste o görünümü
 * getirir: CSS'i HTML'e bağlama (inline/internal/external), sözdizimi,
 * seçiciler (element/class/id), ilk renk + yazı stilleri, hafifçe cascade + inheritance.
 *
 * OMURGA METAFORU: "eskiz → renklendirme" (illüstrasyon dili). HTML siyah-beyaz
 * çizgiyi/eskizi kurar; CSS renk, doku, ışık katar; JS hareket (ileride). Çıplak
 * sayfa = "renksiz eskiz". (week3 köprüsü için "iskelet" = yapısal omurga olarak korunur.)
 *
 * ANLATIM TONU: konuyu anlatan dil (açıklayıcı, 3. şahıs/edilgen), öğrenciye
 * doğrudan hitap/emir DEĞİL. Sıcak ve anlaşılır kalır (benzetmeler korunur), ama
 * "görelim / uygula / çözeceğiz" gibi davet kipi kullanılmaz. Buton/UI metinleri
 * (ör. "CSS'i uygula") arayüz dili olduğundan emir kipinde kalabilir.
 *
 * OMURGA: "CSS nasıl çalışır" (mekanik). Renk/font burada yalnızca "çalışıyor"
 * kanıtı düzeyinde; sistematik derinlik (palet, kontrast, font yığını, birimler)
 * Ders 4'e (Tipografi + Renk) ileri-işaret edilir, BURADA İŞLENMEZ.
 *
 * "Tasarım Gözü" köşesi bu destede CONSISTENCY (tutarlılık) ilkesini işler:
 * external CSS = stilin tek kaynağı.
 *
 * Stil/desen referansı: week3.js (vcd-* + playgrounds.css yardımcı sınıfları).
 * CSS sözdizimi renk şeması (inline): element-selector #818cf8 (HTML etiket rengiyle
 * aynı, "o etiketi seçer"), class/id-selector #d4ff00 (lime), property #7dd3fc,
 * value #34d399, noktalama muted. (HTML kodu için .html-kod .t/.a/.v sınıfları.)
 */

export const week4 = {
    title: "5. Hafta: CSS Temelleri",
    slides: [

        // ============================================================
        // BÖLÜM 0: AÇILIŞ + KÖPRÜ
        // ============================================================

        // Slide 1: Karşılama (Hero) — renksiz eskiz → renklendirilmiş
        {
            id: "giris",
            title: "CSS Temelleri",
            subtitle: '<span style="white-space:nowrap; font-size:1.25rem;">Görsel İletişim Tasarımı · 5. Hafta · Çizgiyi renklendirmek</span>',
            type: "hero",
            html: `
                <div style="margin-top: 26px; display:flex; align-items:center; gap:18px; justify-content:center; flex-wrap:wrap;">
                    <div style="text-align:left;">
                        <div class="pane-label kod">Renksiz eskiz · stilsiz</div>
                        <div style="width:210px; background:#ffffff; border-radius:6px; padding:14px 16px; font-family:'Times New Roman',Times,serif; color:#000;">
                            <div style="font-size:1.25rem; font-weight:bold; line-height:1.2;">Deniz Demir</div>
                            <div style="font-size:0.78rem;"><span style="color:#0000ee; text-decoration:underline;">Hakkımda</span> <span style="color:#0000ee; text-decoration:underline;">İşlerim</span></div>
                            <div style="font-size:1rem; font-weight:bold; margin-top:8px;">İşlerim</div>
                            <div style="font-size:0.8rem;">Afiş Serisi: sergi için 3 afiş.</div>
                        </div>
                    </div>
                    <span style="font-size:1.5rem; color:var(--color-secondary); align-self:center; font-weight:700; white-space:nowrap;">+ CSS →</span>
                    <div style="text-align:left;">
                        <div class="pane-label cikti">Renklendirilmiş · CSS ile</div>
                        <div style="width:210px; border-radius:10px; padding:14px 16px; background:linear-gradient(135deg, rgba(212,255,0,0.14), rgba(2,184,204,0.10)); border:1px solid rgba(212,255,0,0.3);">
                            <div style="font-size:1.2rem; font-weight:800; background:linear-gradient(135deg,#fff,var(--color-secondary)); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">Deniz Demir</div>
                            <div style="display:flex; gap:10px; font-size:0.62rem; color:var(--color-text-secondary); margin-top:2px;"><span>Hakkımda</span><span>İşlerim</span></div>
                            <div style="font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:8px; letter-spacing:0.02em;">İŞLERİM</div>
                            <div style="font-size:0.66rem; color:var(--color-text-secondary); margin-top:4px; padding:6px 8px; background:rgba(255,255,255,0.05); border-radius:6px; border:1px solid var(--border-light);">Afiş Serisi · sergi için 3 afiş.</div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 2: Geri çağrı — çizgiler hazır ama renksiz
        {
            id: "geri-cagri",
            category: "Hatırlatma",
            title: "İskelet Kuruldu, Sıra Renkte",
            html: `
                <p class="vcd-content-intro">Önceki dersten elde kalan, sayfanın anlamlı iskeleti: <code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>article</code>, <code>footer</code>. Bölümler <code>id</code> ve <code>class</code> ile birer <strong style="color:var(--color-text-primary);">isim</strong> de taşır; bunlar o zaman "CSS'in kancası" diye anılmıştı. Bu dersin işi, o kancaları kullanmak.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label kod">Kurulan iskelet · isimleriyle</div>
                        <pre class="html-kod" style="font-size:0.72rem; flex:1; margin:0;"><span class="t">&lt;header&gt;</span>
  <span class="t">&lt;h1&gt;</span>Deniz Demir<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;/header&gt;</span>
<span class="t">&lt;main&gt;</span>
  <span class="t">&lt;section</span> <span class="a">id</span>=<span class="v">"isler"</span><span class="t">&gt;</span>
    <span class="t">&lt;article</span> <span class="a">class</span>=<span class="v">"proje-karti"</span><span class="t">&gt;</span>...<span class="t">&lt;/article&gt;</span>
  <span class="t">&lt;/section&gt;</span>
<span class="t">&lt;/main&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label cikti">Tarayıcıdaki hali · renksiz eskiz</div>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:column; justify-content:center;"><h1 style="font-size:1.5em;">Deniz Demir</h1><h2 style="font-size:1.1em;">İşlerim</h2><p>Afiş Serisi: sergi için 3 afiş.</p></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🎨</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">İskelet sağlam, isimler takılı; ama sayfa şu an <strong style="color:var(--color-text-primary);">renksiz bir eskizden</strong> farksız. CSS bu derste o <code>#isler</code> ve <code>.proje-karti</code> isimlerini tek tek çağırır ve eskizi renklendirir.</span>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 1: NEDEN ve NE
        // ============================================================

        // Slide 3: Neden CSS — renksiz sayfanın derdi
        {
            id: "neden-css",
            category: "Bölüm 1: Neden ve Ne",
            title: "Sorun: Sayfa Renk İstiyor",
            html: `
                <p class="vcd-content-intro">HTML iskeleti kurar, görünümü CSS verir; stilsiz bir sayfa bu yüzden hep <strong style="color:var(--color-text-primary);">böyle</strong> görünür. Tarayıcının varsayılan stili işlevseldir ama kimliksizdir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label" style="color:var(--color-text-muted);">Tarayıcı varsayılanı · her stilsiz site böyle</div>
                        <div class="html-cikti" style="flex:1;"><h1 style="font-size:1.5em;">Deniz Demir</h1><p>Görsel iletişim tasarımı öğrencisi. Afiş ve marka kimliği üzerine çalışıyorum.</p><p><a href="#">İşlerime bak</a></p></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-text-muted);">Tasarımcı gözü ne görür?</div>
                        <div class="vcd-glass-card" style="flex:1; padding:14px; display:flex; flex-direction:column; gap:9px; justify-content:center;">
                            <div style="display:flex; gap:9px; align-items:center;"><span style="font-size:0.95rem;">🅰️</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.4;">Tek font (Times New Roman), her sayfada aynı.</span></div>
                            <div style="display:flex; gap:9px; align-items:center;"><span style="font-size:0.95rem;">⬛</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.4;">Renk yok: siyah metin, çiğ mavi bağlantı.</span></div>
                            <div style="display:flex; gap:9px; align-items:center;"><span style="font-size:0.95rem;">↔️</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.4;">Boşluk kararı yok, her şey kenara yapışık.</span></div>
                            <div style="display:flex; gap:9px; align-items:center;"><span style="font-size:0.95rem;">🪪</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.4;">Marka, kimlik, ton: hiçbiri yok.</span></div>
                        </div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Söz Tutma Zamanı</h4>
                    <p>Çizgiler bir eskizi okunur kılar ama bitmiş bir iş değildir. CSS (Cascading Style Sheets), sayfaya <strong>renk, yazı tipi, boşluk ve kimlik</strong> katan katmandır. Tasarımcının asıl sahası da burada açılır.</p>
                </div>
            `
        },

        // Slide 4: CSS nedir — üç katman
        {
            id: "css-nedir",
            category: "Bölüm 1: Neden ve Ne",
            title: "CSS: Sunum Katmanı",
            html: `
                <p class="vcd-content-intro">Web <strong style="color:var(--color-text-primary);">üç katmandan</strong> oluşur; genel bakışta bunlara değinilmişti. Her katmanın tek bir işi vardır, bu ayrım sayfayı düzenli ve değiştirilebilir tutar:</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px; opacity:0.7;">
                        <div style="font-size:1.4rem;">✏️</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.9rem;">HTML · Yapı</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Çizgi ve içerik: ne var? Başlık, paragraf, bölgeler. <strong style="color:var(--color-text-secondary);">Bitti</strong> (Ders 1-2).</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px; border-color:rgba(212,255,0,0.4); background:rgba(212,255,0,0.04);">
                        <div style="font-size:1.4rem;">🎨</div>
                        <strong style="color:var(--color-primary); font-size:0.9rem;">CSS · Sunum</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Görünüm: nasıl görünüyor? Renk, yazı tipi, boşluk, yerleşim. <strong style="color:var(--color-primary);">Bu dersin konusu.</strong></p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px; opacity:0.5;">
                        <div style="font-size:1.4rem;">⚡</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.9rem;">JavaScript · Davranış</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Etkileşim: ne yapıyor? Tıklama, animasyon, canlılık. <strong style="color:var(--color-text-secondary);">İleride</strong>, bu dersin dışında.</p>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div class="vcd-analogy-box" style="margin:0;">
                        <h4>Çizim Benzetmesi</h4>
                        <p>Bir illüstrasyon önce siyah-beyaz çizilir (HTML), sonra renklenir (CSS), animasyona dönerse hareketlenir (JavaScript). Çizgi yapıyı kurar, renk kimliği verir, hareket sonraki adımdır.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; justify-content:center; gap:9px; padding:16px 18px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:9px;"><span style="font-size:1.2rem;">🪜</span><strong style="color:var(--color-secondary); font-size:0.9rem;">Cascading: Bir Ön İşaret</strong></div>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Adındaki <strong style="color:var(--color-text-primary);">Cascading</strong> (basamaklanan) bir ipucu taşır: birden çok kural çakıştığında bir öncelik sırası işler. Bu sıralamanın yeri dersin sonu.</p>
                    </div>
                </div>
            `
        },

        // Slide 5: İlk bakış — canlı toggle, ilk "vay be"
        {
            id: "ilk-bakis",
            category: "Bölüm 1: Neden ve Ne",
            title: "Az Kod, Büyük Fark",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Bazen tek bir örnek, sayfalarca açıklamadan daha çok şey anlatır. Solda birkaç satır CSS, sağda Deniz'in renksiz sayfası var. Buton kuralları devreye sokunca aynı HTML <strong style="color:var(--color-primary);">bambaşka</strong> bir sayfaya dönüşür. Bu birkaç satırın tek tek ne yaptığı ilerleyen slaytların konusu.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch;">
                        <div style="display:flex; flex-direction:column; gap:10px; min-height:0;">
                            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
                                <div class="pane-label kod" style="margin:0;">Birkaç satır CSS</div>
                                <button class="sim-btn css-toggle">CSS'i uygula</button>
                            </div>
                            <pre class="html-kod" style="flex:1; font-size:0.74rem; margin:0; line-height:1.6;"><span style="color:#818cf8;">body</span> {
  <span style="color:#7dd3fc;">font-family</span>: <span style="color:#34d399;">sans-serif</span>;
  <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">#faf7f0</span>;
  <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#2d2a26</span>;
}
<span style="color:#818cf8;">h1</span> { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#c0392b</span>; }
<span style="color:#818cf8;">a</span>  { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#2980b9</span>; }</pre>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:10px; min-height:0;">
                            <div class="pane-label cikti">Tarayıcıda · canlı</div>
                            <iframe class="html-live-frame css-out" title="CSS önizleme" style="flex:1; min-height:170px;"></iframe>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const btn = slideEl.querySelector('.css-toggle');
                const out = slideEl.querySelector('.css-out');
                if (!btn || !out) return;
                const icerik = '<h1>Deniz Demir</h1><p>Görsel iletişim tasarımı öğrencisi. Afiş ve marka kimliği üzerine çalışıyorum.</p><p><a href="#">İşlerime bak</a></p>';
                const ciplak = '<style>body{padding:16px;}</style>';
                const giyili = '<style>body{font-family:sans-serif;background:#faf7f0;color:#2d2a26;padding:20px;line-height:1.6;} h1{color:#c0392b;} a{color:#2980b9;}</style>';
                let acik = false;
                const guncelle = () => {
                    out.srcdoc = (acik ? giyili : ciplak) + icerik;
                    btn.textContent = acik ? "CSS'i kaldır" : "CSS'i uygula";
                    btn.classList.toggle('active', acik);
                };
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    acik = !acik;
                    guncelle();
                });
                guncelle();
            }
        },

        // ============================================================
        // BÖLÜM 2: CSS'i HTML'e BAĞLAMA
        // ============================================================

        // Slide 6: Bağlamanın 3 yolu — tam HTML iskeleti üzerinde konum haritası
        {
            id: "baglama-3yol",
            category: "Bölüm 2: CSS'i Bağlama",
            title: "CSS'i HTML'e Bağlamanın Üç Yolu",
            html: `
                <p class="vcd-content-intro">Renk ve yazı kuralları kendi başına bir işe yaramaz; tarayıcının onları sayfayla ilişkilendirmesi gerekir. Bu bağ üç yoldan kurulur ve her yol, kuralın HTML sayfasında durduğu yeri değiştirir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1.15fr 1fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">Bir HTML sayfası · her yöntem nereye yazılır</div>
                        <pre class="html-kod" style="flex:1; font-size:0.7rem; margin:0; line-height:1.85;"><span class="t">&lt;!DOCTYPE html&gt;</span>
<span class="t">&lt;html&gt;</span>
  <span class="t">&lt;head&gt;</span>
    <span class="iskelet-satir" data-y="external" style="transition:opacity .22s;"><span class="t">&lt;link</span> <span class="a">rel</span>=<span class="v">"stylesheet"</span> <span class="a">href</span>=<span class="v">"style.css"</span><span class="t">&gt;</span>  <span style="color:var(--color-primary); font-weight:700;">③</span></span>
    <span class="iskelet-satir" data-y="internal" style="transition:opacity .22s;"><span class="t">&lt;style&gt;</span>  <span style="color:var(--color-secondary); font-weight:700;">②</span>
      <span style="color:#818cf8;">h1</span> { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#c0392b</span>; }
    <span class="t">&lt;/style&gt;</span></span>
  <span class="t">&lt;/head&gt;</span>
  <span class="t">&lt;body&gt;</span>
    <span class="iskelet-satir" data-y="inline" style="transition:opacity .22s;"><span class="t">&lt;h1</span> <span class="a">style</span>=<span class="v">"color:#c0392b"</span><span class="t">&gt;</span>Deniz<span class="t">&lt;/h1&gt;</span>  <span style="color:var(--color-warning); font-weight:700;">①</span></span>
  <span class="t">&lt;/body&gt;</span>
<span class="t">&lt;/html&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:9px;">
                        <div class="pane-label">Üç yol · numarayla</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
                            <div class="yol-kart" data-yontem="inline" data-renk="#f59e0b" style="display:flex; gap:10px; padding:10px 12px; background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.25); border-radius:8px; transition:opacity .22s, box-shadow .22s;">
                                <span style="color:var(--color-warning); font-weight:700; font-size:1rem;">①</span>
                                <div><strong style="color:var(--color-text-primary); font-size:0.82rem;">Inline</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;"><code>&lt;body&gt;</code> içindeki element'in <code>style</code> attribute'ünde. Tek element'i etkiler.</div></div>
                            </div>
                            <div class="yol-kart" data-yontem="internal" data-renk="#02b8cc" style="display:flex; gap:10px; padding:10px 12px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.25); border-radius:8px; transition:opacity .22s, box-shadow .22s;">
                                <span style="color:var(--color-secondary); font-weight:700; font-size:1rem;">②</span>
                                <div><strong style="color:var(--color-text-primary); font-size:0.82rem;">Internal</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;"><code>&lt;head&gt;</code> içindeki bir <code>&lt;style&gt;</code> bloğunda. Yalnız bu sayfada geçerli.</div></div>
                            </div>
                            <div class="yol-kart" data-yontem="external" data-renk="#d4ff00" style="display:flex; gap:10px; padding:10px 12px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.3); border-radius:8px; transition:opacity .22s, box-shadow .22s;">
                                <span style="color:var(--color-primary); font-weight:700; font-size:1rem;">③</span>
                                <div><strong style="color:var(--color-text-primary); font-size:0.82rem;">External</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Ayrı <code>.css</code> dosyası, <code>&lt;head&gt;</code>'de <code>&lt;link&gt;</code> ile çağrılır. Bütün sayfalar paylaşır.</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🎯</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Üçü de çalışır, ama biri profesyonel standarttır. Aralarındaki fark sayfa sayısı arttıkça ortaya çıkar; sıradaki slaytlar bu üç yolu tek tek açar.</span>
                </div>
            `,
            onRender: (slideEl) => {
                const kartlar = Array.from(slideEl.querySelectorAll('.yol-kart'));
                const satirlar = Array.from(slideEl.querySelectorAll('.iskelet-satir'));
                if (!kartlar.length || !satirlar.length) return;
                let aktif = "inline";
                const uygula = () => {
                    satirlar.forEach(s => {
                        const secili = s.dataset.y === aktif;
                        s.style.opacity = secili ? "1" : "0.2";
                    });
                    kartlar.forEach(k => {
                        const secili = k.dataset.yontem === aktif;
                        k.style.opacity = secili ? "1" : "0.4";
                        k.style.boxShadow = secili ? ("inset 0 0 0 1px " + k.dataset.renk + ", 0 0 14px -5px " + k.dataset.renk) : "none";
                    });
                };
                kartlar.forEach(k => {
                    k.style.cursor = "pointer";
                    k.addEventListener("click", (e) => {
                        e.stopPropagation();
                        aktif = k.dataset.yontem;
                        uygula();
                    });
                });
                uygula();
            }
        },

        // Slide 7: inline stil — etikete yapışık, tekrarlı
        {
            id: "inline-stil",
            category: "Bölüm 2: CSS'i Bağlama",
            title: "Inline Stil: Etikete Yapışık",
            html: `
                <p class="vcd-content-intro">İlk yol, stili doğrudan element'in <code>style</code> attribute'üne yazar. Kural en hızlı buradan denenir, ama her element kendi rengini ayrı taşıdığından, sayfa büyüdükçe aynı değer tekrar tekrar yazılır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod"><span lang="en">Inline</span> · her element kendi rengini taşır</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span class="t">&lt;h1</span> <span class="a">style</span>=<span class="v">"color:#c0392b"</span><span class="t">&gt;</span>Deniz<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;h2</span> <span class="a">style</span>=<span class="v">"color:#c0392b"</span><span class="t">&gt;</span>İşlerim<span class="t">&lt;/h2&gt;</span>
<span class="t">&lt;h2</span> <span class="a">style</span>=<span class="v">"color:#c0392b"</span><span class="t">&gt;</span>İletişim<span class="t">&lt;/h2&gt;</span></pre>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Aynı renk üç başlıkta üç kez yazılı; biri değişince üçü de elden geçer.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-warning);"><span lang="en">Inline</span>'ın derdi</div>
                        <div class="vcd-glass-card" style="flex:1; padding:14px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🔁</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Aynı kural çoğalır:</strong> üç başlık, üç kez yazılan aynı renk.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🧵</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Stil içerikle iç içe geçer:</strong> HTML, görünüm bilgisiyle dolar ve okunması zorlaşır.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🧹</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Değişiklik dağınıktır:</strong> rengi güncellemek, her element'i ayrı ayrı elden geçirmek demektir.</span></div>
                        </div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Eskiz Benzetmesi</h4>
                    <p>Inline yazım, her çizgiyi tek tek elde boyamaya benzer: bir kez işe yarar, ama yüz çizgilik bir işte ton tutmaz. Çözüm, kuralları tek bir yerde toplamaktır.</p>
                </div>
            `
        },

        // Slide 8: internal stil — sayfada toplu ama tek sayfaya hapis
        {
            id: "internal-stil",
            category: "Bölüm 2: CSS'i Bağlama",
            title: "Internal Stil: Sayfada Toplu",
            html: `
                <p class="vcd-content-intro">İkinci yol kuralları sayfanın <code>&lt;head&gt;</code> bölümündeki bir <code>&lt;style&gt;</code> bloğunda toplar. Renk artık bir kez yazılır ve o seçiciye uyan her element'e birden uygulanır; inline'ın tekrarı böylece çözülür. Yalnız bu blok, sadece yazıldığı sayfada geçerlidir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">Internal · kurallar &lt;style&gt; içinde toplu</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span class="t">&lt;head&gt;</span>
  <span class="t">&lt;style&gt;</span>
    <span style="color:#818cf8;">h1</span>, <span style="color:#818cf8;">h2</span> { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#c0392b</span>; }
  <span class="t">&lt;/style&gt;</span>
<span class="t">&lt;/head&gt;</span></pre>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Tek kural, sayfadaki bütün <code>h1</code> ve <code>h2</code> başlıklarını birden boyar.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-warning);">Internal'ın derdi</div>
                        <div class="vcd-glass-card" style="flex:1; padding:14px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">✅</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Tekrar çözülür:</strong> renk tek noktada durur, oradan yönetilir.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">📄</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Tek sayfaya hapseder:</strong> blok yalnızca bu dosyada geçerli, ikinci sayfa onu paylaşamaz.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🗂️</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Çok sayfalı sitede tekrar geri döner:</strong> aynı blok her yeni sayfaya yeniden kopyalanır.</span></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">➡️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Bir sayfada tekrar çözüldü, ama bir site çok sayfadan oluşur. Kuralları bütün sayfaların paylaşacağı tek bir yere taşımak gerekir; sıradaki yol tam da bunu yapar.</span>
                </div>
            `
        },

        // Slide 9: external CSS — doğru yol, Consistency ön-işareti
        {
            id: "external-link",
            category: "Bölüm 2: CSS'i Bağlama",
            title: "External CSS: Doğru Yol",
            html: `
                <p class="vcd-content-intro">Üçüncü yol stili içerikten tümüyle ayırır: bütün kurallar ayrı bir <code>.css</code> dosyasında toplanır, her HTML sayfası o dosyayı tek satırlık bir <code>&lt;link&gt;</code> ile çağırır. Profesyonel projelerin neredeyse tamamı bu yolu izler.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css · stilin tek kaynağı</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.65;"><span style="color:#818cf8;">body</span> { <span style="color:#7dd3fc;">font-family</span>: <span style="color:#34d399;">sans-serif</span>; }
<span style="color:#818cf8;">h1</span>   { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#c0392b</span>; }
<span style="color:#d4ff00;">.proje-karti</span> { <span style="color:#7dd3fc;">padding</span>: <span style="color:#34d399;">16px</span>; }</pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Her sayfa aynı dosyayı çağırır</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.65;"><span class="c">&lt;!-- index.html --&gt;</span>
<span class="t">&lt;link</span> <span class="a">rel</span>=<span class="v">"stylesheet"</span> <span class="a">href</span>=<span class="v">"style.css"</span><span class="t">&gt;</span>

<span class="c">&lt;!-- hakkimda.html --&gt;</span>
<span class="t">&lt;link</span> <span class="a">rel</span>=<span class="v">"stylesheet"</span> <span class="a">href</span>=<span class="v">"style.css"</span><span class="t">&gt;</span></pre>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div class="vcd-analogy-box" style="margin:0;">
                        <h4>Tek Palet, Bütün İş</h4>
                        <p>Renk ve yazı kararları tek bir palette toplanır. O dosyada bir değer değişince ona bağlı bütün sayfalar aynı anda güncellenir. Stil bir kez yazılır, her yerde geçerli olur.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; justify-content:center; gap:9px; padding:16px 18px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:9px;"><span style="font-size:1.2rem;">👁️</span><strong style="color:var(--color-secondary); font-size:0.9rem;">Tasarım Gözü'ne Ön İşaret</strong></div>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Stilin tek kaynaktan yönetilmesi, tasarımın <strong style="color:var(--color-text-primary);">tutarlılığını</strong> (consistency) güvenceye alır. Bu ilke dersin Tasarım Gözü köşesinde derinleşir.</p>
                    </div>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 3: SÖZDİZİMİ + SEÇİCİLER
        // ============================================================

        // Slide 10: Sözdizimi — bir kuralın anatomisi
        {
            id: "sozdizimi",
            category: "Bölüm 3: Sözdizimi ve Seçiciler",
            title: "Bir CSS Kuralının Anatomisi",
            html: `
                <p class="vcd-content-intro">Bir CSS kuralı, nereye yazılırsa yazılsın aynı dilbilgisini izler. Önce kimi hedefleyeceğini, sonra ona neyi uygulayacağını söyler; bu kalıp baştan sona değişmez.</p>
                <div style="margin-top:0; padding:24px 20px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:12px; display:flex; justify-content:center;">
                    <div style="display:flex; align-items:flex-end; gap:7px; font-family:'JetBrains Mono',monospace; font-size:1.55rem; line-height:1;">
                        <div style="display:flex; flex-direction:column; align-items:center; gap:9px;">
                            <span style="font-size:0.6rem; font-family:'Geist',sans-serif; color:#818cf8; letter-spacing:0.05em; white-space:nowrap;">selector · seçici</span>
                            <span style="color:#818cf8; font-weight:600;">h1</span>
                        </div>
                        <span style="color:var(--color-text-muted);">{</span>
                        <div style="display:flex; flex-direction:column; align-items:center; gap:9px;">
                            <span style="font-size:0.6rem; font-family:'Geist',sans-serif; color:#7dd3fc; letter-spacing:0.05em; white-space:nowrap;">property · özellik</span>
                            <span style="color:#7dd3fc;">color</span>
                        </div>
                        <span style="color:var(--color-text-muted);">:</span>
                        <div style="display:flex; flex-direction:column; align-items:center; gap:9px;">
                            <span style="font-size:0.6rem; font-family:'Geist',sans-serif; color:#34d399; letter-spacing:0.05em; white-space:nowrap;">value · değer</span>
                            <span style="color:#34d399;">red</span>
                        </div>
                        <span style="color:var(--color-text-muted);">;</span>
                        <span style="color:var(--color-text-muted);">}</span>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div class="vcd-analogy-box" style="margin:0;">
                        <h4>Eskiz Benzetmesi</h4>
                        <p>Bir kural iki şey söyler: hangi çizgi ve hangi renk. Seçici hedefi gösterir (hangi element), ifade ona ne olacağını yazar (hangi görünüm). İkisi birleşince çizgi renge kavuşur.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; justify-content:center; gap:9px; padding:16px 18px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:9px;"><span style="font-size:1.2rem;">🧱</span><strong style="color:var(--color-secondary); font-size:0.9rem;">İfade (declaration)</strong></div>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin:0;"><code>property: value;</code> ikilisine bir <strong style="color:var(--color-text-primary);">ifade</strong> denir. Süslü parantezin içine birçok ifade sığar; her biri sonunda noktalı virgülle (<code>;</code>) ayrılır.</p>
                    </div>
                </div>
            `
        },

        // Slide 11: Element seçici — türün tamamı, geniş fırça
        {
            id: "secici-element",
            category: "Bölüm 3: Sözdizimi ve Seçiciler",
            title: "Element Seçici: Türün Tamamı",
            html: `
                <p class="vcd-content-intro">En yalın seçici, bir element türünü adıyla çağırır: <code>h1</code>, <code>p</code>, <code>a</code>. Tür adı yazıldığında, sayfadaki o türden <strong style="color:var(--color-text-primary);">bütün</strong> element'ler tek kuralla boyanır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">HTML + CSS · element seçici</div>
                        <pre class="html-kod" style="flex:1; font-size:0.74rem; margin:0; line-height:1.7;"><span class="c">&lt;!-- HTML --&gt;</span>
<span class="t">&lt;h2&gt;</span>İşlerim<span class="t">&lt;/h2&gt;</span>
<span class="t">&lt;h2&gt;</span>Hakkımda<span class="t">&lt;/h2&gt;</span>
<span class="t">&lt;h2&gt;</span>İletişim<span class="t">&lt;/h2&gt;</span>

<span class="c">/* CSS: element adıyla seçer */</span>
<span style="color:#818cf8;">h2</span> { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#c0392b</span>; }</pre>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Nokta ya da diyez yok: CSS yalnız element adını yazar, HTML'deki bütün <code>h2</code>'leri yakalar.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Sayfadaki her &lt;h2&gt; · biri kalmadan</div>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:6px;"><h2 style="color:#c0392b; margin:0; font-size:1.25em;">İşlerim</h2><h2 style="color:#c0392b; margin:0; font-size:1.25em;">Hakkımda</h2><h2 style="color:#c0392b; margin:0; font-size:1.25em;">İletişim</h2></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🖌️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Element seçici geniş bir fırçadır: aynı türün hepsini bir anda boyar. Ama yalnızca bir başlık farklı görünmeliyse, element'leri isimle ayırmak gerekir.</span>
                </div>
            `
        },

        // Slide 12: Class seçici — nokta, tekrar eden parça
        {
            id: "secici-class",
            category: "Bölüm 3: Sözdizimi ve Seçiciler",
            title: "Class Seçici: Tekrar Eden Parça",
            html: `
                <p class="vcd-content-intro">Class seçici, ortak bir <code>class</code> adı taşıyan element'leri hedefler. CSS tarafında ad bir <strong style="color:var(--color-primary);">nokta</strong> ile yazılır (<code>.proje-karti</code>); HTML tarafında aynı ad noktasız durur. Bir class birçok element'e takıldığından, kural bir kez yazılır ve hepsine birden uygulanır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">HTML noktasız · CSS noktalı</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span class="c">&lt;!-- HTML: ad noktasız --&gt;</span>
<span class="t">&lt;article</span> <span class="a">class</span>=<span class="v">"proje-karti"</span><span class="t">&gt;</span> ... <span class="t">&lt;/article&gt;</span>
<span class="t">&lt;article</span> <span class="a">class</span>=<span class="v">"proje-karti"</span><span class="t">&gt;</span> ... <span class="t">&lt;/article&gt;</span>

<span class="c">/* CSS: ad nokta ile */</span>
<span style="color:#d4ff00;">.proje-karti</span> {
  <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">#faf7f0</span>;
  <span style="color:#7dd3fc;">padding</span>: <span style="color:#34d399;">16px</span>;
}</pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-primary);">Class neden asıl araç?</div>
                        <div class="vcd-glass-card" style="flex:1; padding:14px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🔗</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Aynı ad, çok element:</strong> kural bir kez yazılır, bütün <code>.proje-karti</code>'lere birden uygulanır.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🔁</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Tekrar kullanılır:</strong> kart, buton, uyarı kutusu, hepsi kendi class'ıyla aynı görünümü paylaşır.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">✍️</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Nokta yalnız CSS'te:</strong> <code>.proje-karti</code> (CSS) ile <code>class="proje-karti"</code> (HTML) aynı adı paylaşır.</span></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🪝</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Önceki dersin "CSS kancası" işte buydu: <code>article</code>'lara verilen <code>.proje-karti</code> adı, burada karşılığını bulur ve renge kavuşur.</span>
                </div>
            `
        },

        // Slide 13: ID seçici — diyez, sayfada tek
        {
            id: "secici-id",
            category: "Bölüm 3: Sözdizimi ve Seçiciler",
            title: "ID Seçici: Sayfada Tek",
            html: `
                <p class="vcd-content-intro">ID seçici tek bir element'i hedefler. Ad bir <strong style="color:var(--color-secondary);">diyez</strong> ile yazılır (<code>#isler</code>) ve aynı id sayfada yalnızca bir element'te bulunabilir. Benzersiz bir bölümü, örneğin tek bir <code>section</code>'ı işaret etmek için kullanılır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">HTML <span lang="en">id</span>'li · CSS diyezli</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span class="c">&lt;!-- HTML: id ada eşit --&gt;</span>
<span class="t">&lt;section</span> <span class="a">id</span>=<span class="v">"isler"</span><span class="t">&gt;</span> ... <span class="t">&lt;/section&gt;</span>

<span class="c">/* CSS: ad diyez ile */</span>
<span style="color:#02b8cc;">#isler</span> {
  <span style="color:#7dd3fc;">padding</span>: <span style="color:#34d399;">48px 0</span>;
}</pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-secondary);">ID'nin kuralı</div>
                        <div class="vcd-glass-card" style="flex:1; padding:14px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">1️⃣</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Sayfada tek:</strong> aynı id ikinci bir element'te tekrar kullanılmaz.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">📍</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Benzersizi işaret eder:</strong> tek bir bölüm, tek bir alan, "şu belirli yer".</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">#️⃣</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Diyez yalnız CSS'te:</strong> <code>#isler</code> (CSS) ile <code>id="isler"</code> (HTML) aynı adı paylaşır.</span></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">⚖️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Class ve id ilk bakışta benzer durur: biri nokta, biri diyez. Aralarındaki seçim sayfanın yapısına bağlıdır ve sıradaki slaytın konusudur.</span>
                </div>
            `
        },

        // Slide 14: Hangi seçici, ne zaman — element / class / id sentezi
        {
            id: "secici-secim",
            category: "Bölüm 3: Sözdizimi ve Seçiciler",
            title: "Hangi Seçici, Ne Zaman?",
            html: `
                <p class="vcd-content-intro">Bu üç seçici hedefe farklı genişlikte uzanır: biri bütün bir türü, biri seçili bir grubu, biri tek bir element'i yakalar. Doğru seçim, kuralın kaç element'i kapsaması gerektiğine bağlıdır.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:8px; border-color:rgba(129,140,248,0.4);">
                        <div style="display:flex; align-items:baseline; gap:8px;"><span style="font-family:'JetBrains Mono',monospace; font-size:1.05rem; color:#818cf8; font-weight:600;">h2</span><strong style="color:#818cf8; font-size:0.85rem;">Element</strong></div>
                        <div style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.4;">İşareti yok · element adı</div>
                        <div style="height:1px; background:var(--border-light); margin:2px 0;"></div>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;"><strong style="color:var(--color-text-primary);">Türün hepsi.</strong> Genel taban: bütün paragraflar, bütün başlıklar aynı kuralla.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:8px; border-color:rgba(212,255,0,0.45); background:rgba(212,255,0,0.04);">
                        <div style="display:flex; align-items:baseline; gap:8px;"><span style="font-family:'JetBrains Mono',monospace; font-size:1.05rem; color:#d4ff00; font-weight:600;">.kart</span><strong style="color:#d4ff00; font-size:0.85rem;">Class</strong></div>
                        <div style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.4;">Nokta (.) · istenen kadar element</div>
                        <div style="height:1px; background:var(--border-light); margin:2px 0;"></div>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;"><strong style="color:var(--color-primary);">Asıl araç.</strong> Tekrar eden parçalar: kart, buton, uyarı. Tasarımın omurgası.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:8px; border-color:rgba(2,184,204,0.4);">
                        <div style="display:flex; align-items:baseline; gap:8px;"><span style="font-family:'JetBrains Mono',monospace; font-size:1.05rem; color:#02b8cc; font-weight:600;">#isler</span><strong style="color:#02b8cc; font-size:0.85rem;">ID</strong></div>
                        <div style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.4;">Diyez (#) · sayfada tek</div>
                        <div style="height:1px; background:var(--border-light); margin:2px 0;"></div>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;"><strong style="color:var(--color-text-primary);">Tek ve benzersiz nokta.</strong> Stil için seyrek; daha çok belirli bir yeri işaretler.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Pratik Kural</h4>
                    <p>Stilin omurgası class'tır: tekrar eden her parça bir class alır. Element seçici geniş temeli kurar, id ise stilden çok belirli bir noktayı işaretlemek için ayrılır. Bir tasarımda en çok class görülür, bu rastlantı değildir.</p>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 4: İLK STİLLER
        // ============================================================

        // Slide 15: İlk renk — color + background
        {
            id: "ilk-renk",
            category: "Bölüm 4: İlk Stiller",
            title: "İlk Renk: color ve background",
            html: `
                <p class="vcd-content-intro">Stilsiz sayfaya sürülen ilk renkler iki property ile gelir: <code>color</code> yazının rengini, <code>background</code> ise arkasındaki alanın rengini belirler. Bu ikisi, kimliksiz sayfaya ilk tonunu verir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">HTML + CSS · ilk renk</div>
                        <pre class="html-kod" style="flex:1; font-size:0.7rem; margin:0; line-height:1.65;"><span class="c">&lt;!-- HTML --&gt;</span>
<span class="t">&lt;body&gt;</span>
  <span class="t">&lt;h1&gt;</span>Deniz Demir<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;p&gt;</span>Görsel iletişim...<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"#"</span><span class="t">&gt;</span>İşlerine bak<span class="t">&lt;/a&gt;</span>
<span class="t">&lt;/body&gt;</span>

<span class="c">/* CSS */</span>
<span style="color:#818cf8;">body</span> { <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">#f4e9d2</span>; <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#2d2a26</span>; }
<span style="color:#818cf8;">h1</span> { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#c0392b</span>; }
<span style="color:#818cf8;">a</span>  { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#2980b9</span>; }</pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Tarayıcıda · renk yerinde</div>
                        <div class="html-cikti" style="flex:1; background:#f4e9d2; color:#2d2a26; display:flex; flex-direction:column; justify-content:center;">
                            <h1 style="color:#c0392b; font-size:1.5em; margin:0 0 8px;">Deniz Demir</h1>
                            <p style="margin:0 0 8px; line-height:1.6;">Görsel iletişim tasarımı öğrencisi. Afiş ve marka kimliği üzerine çalışır.</p>
                            <p style="margin:0;"><a href="#" style="color:#2980b9;">İşlerine bak</a></p>
                        </div>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div class="vcd-analogy-box" style="margin:0;">
                        <h4>Eskiz Benzetmesi</h4>
                        <p><code>color</code> yazıyı, <code>background</code> art alanı boyar; ilk renk sürülünce sayfa kimliksizlikten çıkar. Palet ve kontrast dersin ilerleyen bölümünün işidir; burada renk yalnızca çalışır hale gelir.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; justify-content:center; gap:9px; padding:16px 18px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:9px;"><span style="font-size:1.2rem;">🎨</span><strong style="color:var(--color-secondary); font-size:0.9rem;">Renk: İsim mi, Hex mi?</strong></div>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Bir renk iki türlü yazılır: hazır bir <strong style="color:var(--color-text-primary);">isim</strong> (<code style="color:#34d399;">red</code>, <code style="color:#34d399;">teal</code>) ya da kesin bir <strong style="color:var(--color-text-primary);">hex kodu</strong> (<code style="color:#34d399;">#c0392b</code>). İsim hızlıdır, hex tam denetim verir; ikisi de aynı yere yazılır.</p>
                    </div>
                </div>
            `
        },

        // Slide 16: İlk yazı — font-family + font-size
        {
            id: "ilk-yazi",
            category: "Bölüm 4: İlk Stiller",
            title: "İlk Yazı: font-family ve font-size",
            html: `
                <p class="vcd-content-intro">Yazının görünümü de iki property ile değişir: <code>font-family</code> hangi yazı tipinin kullanılacağını, <code>font-size</code> ne büyüklükte görüneceğini söyler. Tarayıcının varsayılan serif yazısı, tek bir satırla bambaşka bir karaktere kavuşur.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">HTML + CSS · yazı kuralları</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span class="c">&lt;!-- HTML --&gt;</span>
<span class="t">&lt;h1&gt;</span>Deniz Demir<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;p&gt;</span>Görsel iletişim tasarımı...<span class="t">&lt;/p&gt;</span>

<span class="c">/* CSS */</span>
<span style="color:#818cf8;">body</span> { <span style="color:#7dd3fc;">font-family</span>: <span style="color:#34d399;">'Trebuchet MS', sans-serif</span>; }
<span style="color:#818cf8;">h1</span> { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">36px</span>; }
<span style="color:#818cf8;">p</span>  { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">16px</span>; }</pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Trebuchet MS · başlık 36px, metin 16px</div>
                        <div class="html-cikti" style="flex:1; font-family:'Trebuchet MS', sans-serif; display:flex; flex-direction:column; justify-content:center;">
                            <h1 style="font-size:36px; margin:0 0 10px; line-height:1.1;">Deniz Demir</h1>
                            <p style="font-size:16px; margin:0; line-height:1.6;">Görsel iletişim tasarımı öğrencisi. Afiş ve marka kimliği üzerine çalışır.</p>
                        </div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Yazının İki Ayarı</h4>
                    <p><code>font-family</code> yazının kişiliğini kurar, <code>font-size</code> sayfadaki hiyerarşiyi: büyük başlık önce okunur, küçük metin sonra gelir. Yazı tiplerinin nasıl seçildiği, yedek font yığınları ve ölçü birimleri dersin ilerleyen bölümünün konusudur.</p>
                </div>
            `
        },

        // Slide 17: Canlı editör — CSS doğrudan düzenlenir, önizleme anında güncellenir (interaktif)
        {
            id: "canli-editor",
            category: "Bölüm 4: İlk Stiller",
            title: "Canlı Editör: Kod ve Anında Sonuç",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Soldaki CSS doğrudan düzenlenebilir; her değişiklik sağdaki önizlemeye anında yansır. Bir property'nin value'sunu değiştirmek sonucu o an gösterir. Property ile value arasındaki bağ böyle elle denenir.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch;">
                        <div style="display:flex; flex-direction:column; gap:8px; min-height:0;">
                            <div class="pane-label kod">style.css · düzenlenebilir</div>
                            <textarea class="css-edit" spellcheck="false" style="flex:1; min-height:150px; resize:none; font-family:'JetBrains Mono',monospace; font-size:0.82rem; line-height:1.7; background:var(--color-bg-code); color:#e2e8f0; border:1px solid var(--border-light); border-radius:10px; padding:14px 16px; outline:none;">body {
  font-family: sans-serif;
  background: #f4e9d2;
  color: #2d2a26;
  padding: 18px;
}
h1 { color: #c0392b; }
p  { line-height: 1.6; }</textarea>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:8px; min-height:0;">
                            <div class="pane-label cikti">Canlı önizleme</div>
                            <iframe class="html-live-frame editor-out" title="Canlı CSS önizleme" style="flex:1; min-height:150px;"></iframe>
                        </div>
                    </div>
                    <div style="flex-shrink:0; display:flex; align-items:center; gap:10px; padding:10px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                        <span style="font-size:1.05rem;">⌨️</span>
                        <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Bir renk değerini, yazı tipini ya da boyutu değiştirmek yeterli; sonuç anında sağdaki önizlemede belirir.</span>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const ta = slideEl.querySelector('.css-edit');
                const out = slideEl.querySelector('.editor-out');
                if (!ta || !out) return;
                const icerik = '<h1>Deniz Demir</h1><p>Görsel iletişim tasarımı öğrencisi. Afiş ve marka kimliği üzerine çalışır.</p>';
                const ciz = () => { out.srcdoc = '<style>body{margin:0;}' + ta.value + '</style>' + icerik; };
                ta.addEventListener('input', ciz);
                // textarea içinde ok/boşluk tuşları slayt geçişini tetiklemesin
                ta.addEventListener('keydown', (e) => { e.stopPropagation(); });
                ciz();
            }
        },

        // ============================================================
        // BÖLÜM 5: CASCADE + INHERITANCE
        // ============================================================

        // Slide 18: Cascade — çakışan kurallar, öncelik sırası (slayt 4'teki ön işareti açar)
        {
            id: "cascade",
            category: "Bölüm 5: Cascade ve Inheritance",
            title: "Cascade: Kurallar Çakışınca",
            html: `
                <p class="vcd-content-intro">Birden çok kural aynı element'i hedeflerse hangisi geçerli olur? CSS bunu bir öncelik sırasıyla çözer; adındaki <strong style="color:var(--color-text-primary);">Cascading</strong> (basamaklanan) tam da bunu anlatır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">Üç kural · aynı başlığı hedefler</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span style="color:#818cf8;">h1</span>      { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">gray</span>; }
<span style="color:#d4ff00;">.baslik</span> { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">blue</span>; }
<span style="color:#02b8cc;">#ana</span>    { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">red</span>; }

<span class="c">&lt;!-- üç kural da bu h1'e uyar --&gt;</span>
<span class="t">&lt;h1</span> <span class="a">id</span>=<span class="v">"ana"</span> <span class="a">class</span>=<span class="v">"baslik"</span><span class="t">&gt;</span>Deniz<span class="t">&lt;/h1&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Geçerli olan · tek kazanan</div>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:12px;">
                            <h1 style="color:red; margin:0; font-size:1.6em;">Deniz</h1>
                            <div style="display:inline-flex; align-self:flex-start; align-items:center; gap:8px; padding:6px 13px; background:#e8f7f9; border:1px solid #02b8cc; border-radius:20px; font-size:0.8rem;"><span style="color:#0a7d8c; font-weight:800;">#ana</span> <span style="color:#3a3a3a;">kazandı · id en güçlü</span></div>
                        </div>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:14px; flex-wrap:wrap; padding:13px 16px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:10px;">
                    <strong style="font-size:0.8rem; color:var(--color-text-secondary); white-space:nowrap;">Özgüllük (specificity):</strong>
                    <div style="display:flex; align-items:center; gap:9px; flex-wrap:wrap; font-family:'JetBrains Mono',monospace; font-size:0.82rem;">
                        <span style="padding:3px 9px; border-radius:6px; background:rgba(2,184,204,0.14); color:#02b8cc;">#id</span>
                        <span style="color:var(--color-text-muted);">&gt;</span>
                        <span style="padding:3px 9px; border-radius:6px; background:rgba(212,255,0,0.12); color:#d4ff00;">.class</span>
                        <span style="color:var(--color-text-muted);">&gt;</span>
                        <span style="padding:3px 9px; border-radius:6px; background:rgba(129,140,248,0.12); color:#818cf8;">element</span>
                    </div>
                    <span style="font-size:0.78rem; color:var(--color-text-muted); line-height:1.5; flex:1; min-width:200px;">Daha belirgin seçici kazanır. Eşit güçte iki kural çakışırsa, sonra yazılan öne geçer.</span>
                </div>
            `
        },

        // Slide 19: Inheritance — parent'tan miras (ilk-renk'teki body kuralını geriye dönük açıklar)
        {
            id: "inheritance",
            category: "Bölüm 5: Cascade ve Inheritance",
            title: "Inheritance: Parent'tan Miras",
            html: `
                <p class="vcd-content-intro">Bazı property'ler parent element'ten içindekilere kendiliğinden geçer. <code>body</code>'ye yazılan <code>color</code> ve <code>font-family</code>, içindeki başlık ve paragrafların hepsine miras kalır; aynı kuralı her element'e tek tek yazmaya gerek kalmaz.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">Kural yalnız body'de</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span style="color:#818cf8;">body</span> {
  <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#2d2a26</span>;
  <span style="color:#7dd3fc;">font-family</span>: <span style="color:#34d399;">'Trebuchet MS', sans-serif</span>;
}
<span class="c">/* h1 ve p'ye hiçbir şey yazılmadı */</span>

<span class="t">&lt;body&gt;</span>
  <span class="t">&lt;h1&gt;</span>Deniz Demir<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;p&gt;</span>Afiş tasarımı...<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;/body&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Hepsi body'den miras aldı</div>
                        <div class="html-cikti" style="flex:1; font-family:'Trebuchet MS', sans-serif; color:#2d2a26; display:flex; flex-direction:column; justify-content:center;">
                            <h1 style="margin:0 0 8px; font-size:1.5em;">Deniz Demir</h1>
                            <p style="margin:0; line-height:1.6;">Afiş tasarımı ve marka kimliği üzerine çalışır. Yazı tipi ve renk, body'den gelir.</p>
                        </div>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:7px; padding:14px 16px; background:rgba(212,255,0,0.05); border:1px solid rgba(212,255,0,0.25); border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1rem;">⬇️</span><strong style="color:var(--color-primary); font-size:0.85rem;">Miras geçer</strong></div>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Yazıyla ilgili olanlar: <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>line-height</code>.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:7px; padding:14px 16px; background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.22); border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1rem;">🚫</span><strong style="color:var(--color-warning); font-size:0.85rem;">Miras geçmez</strong></div>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Kutu ve yerleşimle ilgili olanlar: <code>background</code>, <code>border</code>, <code>margin</code>, <code>padding</code>.</p>
                    </div>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 6: ENTEGRASYON
        // ============================================================

        // Slide 20: Hepsi bir arada — öğrenilen her şey tek bir style.css'te
        {
            id: "hepsi-bir-arada",
            category: "Bölüm 6: Hepsi Bir Arada",
            title: "Tek Dosya, Bütün Sayfa",
            html: `
                <p class="vcd-content-intro">Bağlama, seçici, property, value, cascade ve inheritance: hepsi tek bir <code>style.css</code> dosyasında buluşur. Aşağıdaki kurallar Deniz'in renksiz eskizini baştan sona biçimlendirilmiş bir sayfaya dönüştürür.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css · her şey bir arada</div>
                        <pre class="html-kod" style="flex:1; font-size:0.68rem; margin:0; line-height:1.5;"><span style="color:#818cf8;">body</span> {
  <span style="color:#7dd3fc;">font-family</span>: <span style="color:#34d399;">'Trebuchet MS', sans-serif</span>;
  <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#2d2a26</span>;
  <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">#f4e9d2</span>;
}
<span style="color:#818cf8;">h1</span> {
  <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#c0392b</span>;
  <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">34px</span>;
}
<span style="color:#d4ff00;">.proje-karti</span> {
  <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">#fff</span>;
  <span style="color:#7dd3fc;">padding</span>: <span style="color:#34d399;">16px</span>;
  <span style="color:#7dd3fc;">border-radius</span>: <span style="color:#34d399;">8px</span>;
}
<span style="color:#818cf8;">a</span> {
  <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">#2980b9</span>;
}</pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Renklendirilmiş sayfa</div>
                        <div class="html-cikti" style="flex:1; background:#f4e9d2; color:#2d2a26; font-family:'Trebuchet MS', sans-serif; display:flex; flex-direction:column; justify-content:center; gap:10px;">
                            <h1 style="color:#c0392b; font-size:1.7em; margin:0;">Deniz Demir</h1>
                            <div style="background:#fff; padding:13px 15px; border-radius:8px;">
                                <strong style="font-size:0.95em;">Afiş Serisi</strong>
                                <p style="margin:5px 0 0; font-size:0.84em; line-height:1.5;">Sergi için üç afiş. <a href="#" style="color:#2980b9;">Detaya bak</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:9px; flex-wrap:wrap; padding:12px 15px; background:rgba(212,255,0,0.05); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:0.78rem; color:var(--color-text-secondary); white-space:nowrap;">Tek dosyada buluşan her şey:</span>
                    <span style="font-size:0.72rem; padding:3px 10px; border-radius:20px; background:rgba(255,255,255,0.05); border:1px solid var(--border-light); color:var(--color-text-secondary);">external link</span>
                    <span style="font-size:0.72rem; padding:3px 10px; border-radius:20px; background:rgba(255,255,255,0.05); border:1px solid var(--border-light); color:var(--color-text-secondary);">element + class seçici</span>
                    <span style="font-size:0.72rem; padding:3px 10px; border-radius:20px; background:rgba(255,255,255,0.05); border:1px solid var(--border-light); color:var(--color-text-secondary);">color · background · font</span>
                    <span style="font-size:0.72rem; padding:3px 10px; border-radius:20px; background:rgba(255,255,255,0.05); border:1px solid var(--border-light); color:var(--color-text-secondary);">inheritance</span>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 7: TASARIM GÖZÜ — CONSISTENCY
        // ============================================================

        // Slide 21: Tasarım Gözü'ne dönüş + UI/UX yasaları haritası
        {
            id: "tg-acilis",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Tasarım Gözü: UI/UX'in Haritası",
            html: `
                <p class="vcd-content-intro">Tasarım Gözü köşesi geçen derste açıldı: her destede kod kadar tasarımcı bakışı da yer alır. UI/UX'in arkasında yılların damıttığı bir teoriler kümesi durur; hepsi tek seferde değil, ders ders açılır. İşte büyük resim:</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:15px; display:flex; flex-direction:column; gap:8px;">
                        <strong style="color:var(--color-secondary); font-size:0.85rem;">Algı ve Tarama</strong>
                        <div style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.6;">
                            <div><span style="color:var(--color-primary);">✓</span> F / Z-Pattern <span style="color:var(--color-text-muted);">· göz nasıl tarar</span></div>
                            <div><span style="color:var(--color-text-muted);">○</span> Gestalt <span style="color:var(--color-text-muted);">· yakınlık, benzerlik</span></div>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px; display:flex; flex-direction:column; gap:8px;">
                        <strong style="color:var(--color-secondary); font-size:0.85rem;">Davranış Yasaları</strong>
                        <div style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.6;">
                            <div><span style="color:var(--color-text-muted);">○</span> Jakob's Law <span style="color:var(--color-text-muted);">· alışkanlık</span></div>
                            <div><span style="color:var(--color-text-muted);">○</span> Hick / Fitts <span style="color:var(--color-text-muted);">· karar, hedef</span></div>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px; display:flex; flex-direction:column; gap:8px;">
                        <strong style="color:var(--color-secondary); font-size:0.85rem;">Tasarım İlkeleri</strong>
                        <div style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.6;">
                            <div><span style="color:var(--color-primary); font-weight:700;">●</span> <strong style="color:var(--color-text-primary);">Consistency</strong> <span style="color:var(--color-text-muted);">· bugün</span></div>
                            <div><span style="color:var(--color-text-muted);">○</span> Contrast · Repetition · Alignment</div>
                        </div>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:14px; flex-wrap:wrap; padding:11px 15px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:10px;">
                    <span style="font-size:0.78rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary);">✓</span> işlendi (F-Pattern, geçen ders) &nbsp; <span style="color:var(--color-primary); font-weight:700;">●</span> bugün &nbsp; <span style="color:var(--color-text-muted);">○</span> ilerleyen derslerde</span>
                    <span style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; flex:1; min-width:200px;">Bu haftanın ilkesi: <strong style="color:var(--color-primary);">Consistency</strong> (tutarlılık). CSS dersinin kapanışına denk gelir, çünkü teknik karşılığı bugünün konusudur.</span>
                </div>
            `
        },

        // Slide 22: Consistency nedir + neden (Jakob's Law bağı)
        {
            id: "tg-consistency",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Consistency: Tahmin Edilebilir Tasarım",
            html: `
                <p class="vcd-content-intro"><strong style="color:var(--color-primary);">Consistency</strong> (tutarlılık), bir arayüzdeki aynı işlevlerin her yerde aynı görünmesi ve aynı davranmasıdır. Aynı buton hep aynı renkte, aynı başlık hep aynı boyutta. Tutarlı bir sayfa, kullanıcıyı her köşede yeniden düşünmeye zorlamaz.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                        <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🧠</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Öğrenme yükü azalır:</strong> kullanıcı bir kez öğrenir, sayfanın geri kalanını tahmin eder.</span></div>
                        <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🤝</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Güven verir:</strong> tutarlı bir yüzey özenli ve profesyonel algılanır.</span></div>
                        <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">⚡</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Hız kazandırır:</strong> beklenen yerde beklenen öğe, kararı hızlandırır.</span></div>
                    </div>
                    <div class="vcd-analogy-box" style="margin:0;">
                        <h4>Bir Adı Var: Jakob's Law</h4>
                        <p>Kullanıcı, bir siteyi daha önce gördüğü onlarca siteye benzer bekler. Menü üstte, logo solda, bağlantılar altı çizili. Tutarlılık bu beklentiyi karşılar; aykırılık ise her seferinde küçük bir duraksama yaratır. Tanıdık olan, kolay olandır.</p>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:10px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">👁️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Tutarlılık tasarımı sıkıcı yapmaz; aksine, gereksiz sürprizleri eler ve dikkati asıl içeriğe bırakır.</span>
                </div>
            `
        },

        // Slide 23: Kötü/iyi karşılaştırma — aynı içerik, tutarsız vs tutarlı
        {
            id: "tg-kotu-iyi",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Aynı İçerik: Tutarsız ve Tutarlı",
            html: `
                <p class="vcd-content-intro">Aynı üç buton, iki kurguda. Tek fark, kuralların ortak olup olmaması; ama göze çarpan etki büyük.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:#fca5a5;">✕ Tutarsız · her öğe ayrı telden</div>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:row; flex-wrap:wrap; gap:14px; justify-content:flex-start; align-items:center;">
                            <button style="background:#c0392b; color:#fff; border:none; border-radius:0; font-family:Georgia,serif; padding:6px 12px; font-size:0.85rem;">Gönder</button>
                            <button style="background:#2980b9; color:#fff; border:none; border-radius:20px; font-family:sans-serif; padding:11px 18px; font-size:0.95rem;">Kaydet</button>
                            <button style="background:#fff; color:#16a085; border:2px solid #16a085; border-radius:6px; font-family:monospace; padding:8px 10px; font-size:0.8rem;">İptal</button>
                        </div>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Üç renk, üç font, üç köşe. Göz hangisinin asıl eylem olduğunu çözemez.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-primary);">✓ Tutarlı · tek dil</div>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:row; flex-wrap:wrap; gap:14px; justify-content:flex-start; align-items:center;">
                            <button style="background:#02b8cc; color:#fff; border:none; border-radius:6px; font-family:sans-serif; padding:9px 16px; font-size:0.9rem;">Gönder</button>
                            <button style="background:#02b8cc; color:#fff; border:none; border-radius:6px; font-family:sans-serif; padding:9px 16px; font-size:0.9rem;">Kaydet</button>
                            <button style="background:#02b8cc; color:#fff; border:none; border-radius:6px; font-family:sans-serif; padding:9px 16px; font-size:0.9rem;">İptal</button>
                        </div>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Tek renk, tek font, tek köşe. Butonlar bir aile gibi okunur, sayfa sakinleşir.</p>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:10px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🎯</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Tutarlılık tek tek butonları değil, aralarındaki <strong style="color:var(--color-text-primary);">ilişkiyi</strong> düzenler. Aynı işi yapan öğeler aynı görünür.</span>
                </div>
            `
        },

        // Slide 24: Tutarlılığın boyutları + Nielsen
        {
            id: "tg-boyutlar",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Tutarlılık Nerede Görünür?",
            html: `
                <p class="vcd-content-intro">Tutarlılık tek bir yerde değil, sayfanın her katmanında çalışır. Dört boyutta düşünmek, neyin ortak tutulacağını netleştirir:</p>
                <div style="margin-top:0; display:grid; grid-template-columns:repeat(4, 1fr); gap:12px;">
                    <div class="vcd-glass-card" style="padding:14px; display:flex; flex-direction:column; gap:7px;">
                        <div style="font-size:1.3rem;">🎨</div>
                        <strong style="color:var(--color-text-primary); font-size:0.83rem;">Renk</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Tek palet: aynı vurgu rengi her yerde aynı işi yapar.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:14px; display:flex; flex-direction:column; gap:7px;">
                        <div style="font-size:1.3rem;">🔤</div>
                        <strong style="color:var(--color-text-primary); font-size:0.83rem;">Tipografi</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Aynı yazı tipleri ve aynı başlık boyutları.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:14px; display:flex; flex-direction:column; gap:7px;">
                        <div style="font-size:1.3rem;">📐</div>
                        <strong style="color:var(--color-text-primary); font-size:0.83rem;">Boşluk</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Tekrar eden bir ritim: aynı iç ve dış boşluklar.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:14px; display:flex; flex-direction:column; gap:7px;">
                        <div style="font-size:1.3rem;">🧩</div>
                        <strong style="color:var(--color-text-primary); font-size:0.83rem;">Bileşen</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Buton, kart, bağlantı: aynı kalıp her sayfada.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Bir Sektör Kuralı: <span lang="en">Consistency &amp; Standards</span></h4>
                    <p>Tutarlılık, Jakob Nielsen'in on kullanılabilirlik (usability) sezgiselinden biridir: arayüz hem kendi içinde tutarlı olmalı, hem de sektörün ortak alışkanlıklarına uymalıdır. Kullanıcı, alışveriş sepetinin sağ üstte olmasını öğrenmek zorunda kalmaz, zaten oraya bakar.</p>
                </div>
            `
        },

        // Slide 25: External CSS = tutarlılığın teknik garantisi (slayt 9 ön işaretini kapatır)
        {
            id: "tg-tek-kaynak",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Tek Kaynak: Tutarlılığın Garantisi",
            html: `
                <p class="vcd-content-intro">Tutarlılık iyi niyetle korunmaz, yapıyla korunur. Bu dersin tekniği tam da bunu sağlar: <strong style="color:var(--color-primary);">external CSS</strong>, stili tek bir dosyada toplar ve her sayfa o tek kaynaktan beslenir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css · tek karar noktası</div>
                        <pre class="html-kod" style="flex:1; font-size:0.74rem; margin:0; line-height:1.7;"><span class="c">/* renk bir kez tanımlanır */</span>
<span style="color:#d4ff00;">.buton</span> {
  <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">#02b8cc</span>;
  <span style="color:#7dd3fc;">border-radius</span>: <span style="color:#34d399;">6px</span>;
}
<span class="c">/* index, hakkimda, iletisim:
   hepsi aynı .buton'u paylaşır */</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Tek değişiklik, her yerde</div>
                        <div class="vcd-glass-card" style="flex:1; padding:16px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🔗</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">Bütün sayfalar aynı dosyaya bağlı, bu yüzden hepsi otomatik tutarlı.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">♻️</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">Renk değişince tek satır yeter; değişiklik her sayfaya birden yansır.</span></div>
                            <div style="display:flex; gap:9px;"><span style="font-size:0.95rem;">🛡️</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">Kopyalanan stil olmadığından, sayfalar zamanla birbirinden uzaklaşmaz.</span></div>
                        </div>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:10px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🧭</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Tutarlılık ilk ilke; tek başına değil. İlerleyen derste <strong style="color:var(--color-text-primary);">contrast</strong> (kontrast) gözü bilerek farklı yöne çeker, asıl mesajı öne çıkarır.</span>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 8: PRATİK + KAPANIŞ
        // ============================================================

        // Slide 26: Haftalık ödev · CSS uygulaması + derste demo için örnek HTML
        {
            id: "odev",
            category: "Bölüm 8: Ödev ve Kapanış",
            title: "Haftalık Ödev: Eskizi Renklendir",
            html: `
                <p class="vcd-content-intro">Bu haftanın ödevi, dersin araçlarını kendi sayfaya taşımak. Önceki derste kurulan HTML iskeletine external bir <code>style.css</code> bağlanır ve sayfa baştan sona renklendirilir. Sağdaki örnek, derste birlikte denenecek başlangıç noktasıdır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:11px;">
                        <div class="pane-label kod">Yapılacaklar · sırayla</div>
                        <div style="display:flex; flex-direction:column; gap:9px;">
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">1</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">External bağlama</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;"><code>style.css</code> oluşturmak ve <code>index.html</code>'e <code>&lt;link&gt;</code> ile bağlamak.</div></div>
                            </div>
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">2</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">Renk ve yazı</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;"><code>body</code>'ye <code>font-family</code> ve <code>background</code>, başlıklara <code>color</code>.</div></div>
                            </div>
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">3</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">Bir class stili</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;"><code>.proje-karti</code>'ye <code>background</code> ve <code>padding</code>.</div></div>
                            </div>
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">4</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">Tutarlılık</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;">Sayfa boyunca tek palet ve tek yazı tipi ailesi (Tasarım Gözü: Consistency).</div></div>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:8px; background:rgba(2,184,204,0.05); border:1px solid rgba(2,184,204,0.18); border-radius:8px; padding:8px 12px; margin-top:2px;">
                            <span style="font-size:0.58rem; color:var(--color-secondary); text-transform:uppercase; letter-spacing:0.06em; font-weight:700; white-space:nowrap;">⏰ Süre</span>
                            <span style="font-size:0.73rem; color:var(--color-text-secondary);">Bir sonraki ders saatine kadar.</span>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Derste demo · index.html</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.7;"><span class="t">&lt;header&gt;</span>
  <span class="t">&lt;h1&gt;</span>Deniz Demir<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;/header&gt;</span>
<span class="t">&lt;main&gt;</span>
  <span class="t">&lt;article</span> <span class="a">class</span>=<span class="v">"proje-karti"</span><span class="t">&gt;</span>
    <span class="t">&lt;h2&gt;</span>Afiş Serisi<span class="t">&lt;/h2&gt;</span>
    <span class="t">&lt;p&gt;</span>Sergi için üç afiş.<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;/article&gt;</span>
<span class="t">&lt;/main&gt;</span></pre>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:13px; flex-wrap:wrap; padding:11px 15px; background:rgba(212,255,0,0.05); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <strong style="font-size:0.75rem; color:var(--color-text-secondary); white-space:nowrap;">Beklenenler:</strong>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> external CSS</span>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> element + <code>.class</code> seçici</span>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> color · background · font</span>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> tek tutarlı palet</span>
                </div>
            `
        },

        // Slide 27: Yansıtma — kısa özet + üç soru
        {
            id: "yansitma",
            category: "Bölüm 8: Pratik ve Kapanış",
            title: "Geriye Bakış: Üç Soru",
            html: `
                <p class="vcd-content-intro">Bu deste CSS'in temel mekaniğini kurdu: stilin HTML'e nasıl bağlandığı, kuralların nasıl yazıldığı ve çakıştığında ne olduğu. Kısa bir özet ve sınanacak üç soru:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-primary);">Bu derste</div>
                        <div class="vcd-glass-card" style="flex:1; padding:15px; display:flex; flex-direction:column; gap:8px; justify-content:center; font-size:0.79rem; color:var(--color-text-secondary); line-height:1.4;">
                            <div>✦ Bağlama: inline, internal, external (<strong style="color:var(--color-text-primary);">external = doğru yol</strong>)</div>
                            <div>✦ Sözdizimi: <code>selector { property: value; }</code></div>
                            <div>✦ Seçiciler: element, <code>.class</code>, <code>#id</code></div>
                            <div>✦ İlk stiller: color, background, font-family, font-size</div>
                            <div>✦ Cascade ve inheritance</div>
                            <div>✦ Tasarım Gözü: Consistency</div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-secondary);">Üç soru</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:10px;">
                            <div style="display:flex; gap:10px; padding:11px 13px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.2); border-radius:9px;"><span style="color:var(--color-secondary); font-weight:700;">1</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">External CSS, inline ve internal'a neden tercih edilir?</span></div>
                            <div style="display:flex; gap:10px; padding:11px 13px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.2); border-radius:9px;"><span style="color:var(--color-secondary); font-weight:700;">2</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;"><code>.class</code> ile <code>#id</code> ne zaman birini, ne zaman ötekini ister?</span></div>
                            <div style="display:flex; gap:10px; padding:11px 13px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.2); border-radius:9px;"><span style="color:var(--color-secondary); font-weight:700;">3</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">Aynı element'e iki kural çakışırsa hangisi geçerli olur?</span></div>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 28: Köprü — CSS mekaniği bitti, sırada tasarım kararı (Tipografi + Renk)
        {
            id: "css-koprusu",
            category: "Bölüm 8: Pratik ve Kapanış",
            title: "Sıradaki Adım: Renk ve Yazı Sistemi",
            html: `
                <p class="vcd-content-intro">Renk ve yazı bu derste <strong style="color:var(--color-text-primary);">çalışır</strong> hale geldi. Sıradaki adım, onları rastgele değerlerden çıkarıp birer tasarım kararına dönüştürmek: uyumlu bir palet, yeterli kontrast ve tutarlı bir tipografik ölçek.</p>
                <div style="margin-top:0; display:flex; align-items:stretch; gap:10px; flex-wrap:wrap;">
                    <div class="vcd-glass-card" style="flex:1; min-width:150px; padding:15px; display:flex; flex-direction:column; gap:5px; opacity:0.6;">
                        <div style="font-size:1.3rem;">✏️</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.85rem;">İskelet</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.45; margin:0;">HTML yapı ve semantic. <strong style="color:var(--color-text-secondary);">Tamam.</strong></p>
                    </div>
                    <div style="display:flex; align-items:center; color:var(--color-text-muted); font-size:1.2rem;">→</div>
                    <div class="vcd-glass-card" style="flex:1; min-width:150px; padding:15px; display:flex; flex-direction:column; gap:5px; border-color:rgba(212,255,0,0.4); background:rgba(212,255,0,0.04);">
                        <div style="font-size:1.3rem;">🎨</div>
                        <strong style="color:var(--color-primary); font-size:0.85rem;">İlk Renk</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">CSS mekaniği çalışıyor. <strong style="color:var(--color-primary);">Bu ders.</strong></p>
                    </div>
                    <div style="display:flex; align-items:center; color:var(--color-text-muted); font-size:1.2rem;">→</div>
                    <div class="vcd-glass-card" style="flex:1; min-width:150px; padding:15px; display:flex; flex-direction:column; gap:5px;">
                        <div style="font-size:1.3rem;">🎯</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.85rem;">Sistem</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.45; margin:0;">Palet, kontrast, tipografik ölçek. <strong style="color:var(--color-text-secondary);">Sırada.</strong></p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Çizgi Renklendi</h4>
                    <p>Bu deste, renksiz eskize ilk rengi sürdü: çizgiler artık bir kimliğe kavuşmaya başladı. Sıradaki ders o renkleri bir palete, yazıları bir tipografik sisteme oturtur. Renk çalışmaktan çıkar, bir karara dönüşür.</p>
                </div>
            `
        }

    ]
};
