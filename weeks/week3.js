/**
 * ==========================================================================
 * WEEK 3 MODULE: HTML Yapı + Semantic (Görsel İletişim Tasarımı Odaklı)
 * Uygulamalı Seri · Ders 2 / 8 — Anlamlı sayfa iskeleti kurmak
 * ==========================================================================
 *
 * Bu deste week2 (HTML Temelleri) destesinin devamıdır. Odak: sayfayı
 * bölgelere ayırmak — block/inline, div/span, semantic etiketler, id/class.
 * "Tasarım Gözü" köşesi bu deste ile açılır (UI vs UX + hiyerarşi + F-pattern).
 * CSS öğretimi YOK (sıradaki ders); id/class kanca olarak tanıtılır,
 * her birinde 2 satırlık "sıradaki dersten tadımlık" CSS önizlemesi vardır.
 *
 * Stil/desen referansı: week2.js (vcd-* + playgrounds.css yardımcı sınıfları).
 * "Kod → Tarayıcı Çıktısı" örnekleri .html-kod / .html-cikti sınıflarını kullanır.
 */

export const week3 = {
    title: "4. Hafta: HTML Yapı ve Semantic",
    slides: [

        // Slide 1: Karşılama (Hero)
        {
            id: "giris",
            title: "HTML Yapı ve Semantic",
            subtitle: "Görsel İletişim Tasarımı · 4. Hafta · Sayfaya iskelet kuruyoruz",
            type: "hero",
            html: `
                <div style="margin-top: 26px; display:flex; align-items:center; gap:20px; justify-content:center; flex-wrap:wrap;">
                    <div style="text-align:left;">
                        <div class="pane-label kod">Anlamsız kutular</div>
                        <pre class="html-kod" style="font-size:0.82rem;"><span style="color:#828289;">&lt;div&gt;</span>
  <span style="color:#828289;">&lt;div&gt;</span>...<span style="color:#828289;">&lt;/div&gt;</span>
  <span style="color:#828289;">&lt;div&gt;</span>...<span style="color:#828289;">&lt;/div&gt;</span>
<span style="color:#828289;">&lt;/div&gt;</span></pre>
                    </div>
                    <span style="font-size:1.9rem; color:var(--color-secondary); align-self:center;">→</span>
                    <div style="text-align:left;">
                        <div class="pane-label cikti">Konuşan iskelet</div>
                        <pre class="html-kod" style="font-size:0.82rem;"><span class="t">&lt;header&gt;</span>...<span class="t">&lt;/header&gt;</span>
<span class="t">&lt;main&gt;</span>
  <span class="t">&lt;section&gt;</span>...<span class="t">&lt;/section&gt;</span>
<span class="t">&lt;/main&gt;</span>
<span class="t">&lt;footer&gt;</span>...<span class="t">&lt;/footer&gt;</span></pre>
                    </div>
                </div>
            `
        },

        // Slide 2: Hatırlatma — etiketlerden yapıya
        {
            id: "hatirlatma",
            category: "Hatırlatma",
            title: "Etiketlerden İskelete",
            className: "slide-center-composite",
            html: `
                <p class="vcd-content-intro" style="max-width:none;">Geçen ders tag (etiket) mantığını öğrendik, ilk <code>index.html</code> dosyamızı yazdık ve temel etiketleri gördük. Genel bakışta da <strong style="color:var(--color-text-primary);">"div çorbası"</strong> diye bir kavramla tanışmıştık. Bugün o teaser'ın gerçek dersi: sayfaya anlamlı bir iskelet kurmak.</p>
                <div class="vcd-grid-3" style="margin-top:0; margin-bottom:16px;">
                    <div class="vcd-glass-card" style="padding:16px; opacity:0.65;">
                        <div style="font-size:1.4rem;margin-bottom:6px;">🔤</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.9rem; display:block; margin-bottom:4px;">Geçen ders · parçalar</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Başlık, paragraf, liste, bağlantı, görsel. Tek tek tuğlalar.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; border-color:rgba(212,255,0,0.35);">
                        <div style="font-size:1.4rem;margin-bottom:6px;">🦴</div>
                        <strong style="color:var(--color-primary); font-size:0.9rem; display:block; margin-bottom:4px;">Bugün · iskelet</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Tuğlaları bölgelere ayırmak: üst bölüm, menü, ana içerik, alt bilgi.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; opacity:0.5;">
                        <div style="font-size:1.4rem;margin-bottom:6px;">🎨</div>
                        <strong style="color:#0284c7; font-size:0.9rem; display:block; margin-bottom:4px;">Sıradaki ders · giysi</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">CSS ile renk, yazı tipi ve boşluk. İskelet olmadan giysi duramaz.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:0;">
                    <h4>Bugünün Sonunda</h4>
                    <p>Bugünün hedefi çok bölümlü, anlamlı ve hâlâ stilsiz bir sayfa iskeleti: <strong>gelecekteki final portfolyosunun kemikleri.</strong></p>
                </div>
            `
        },

        // Slide 3: Sorun — uzun sayfa nasıl düzenlenir?
        {
            id: "neden-yapi",
            category: "Hatırlatma",
            title: "Sorun: Her Şey Alt Alta",
            html: `
                <div class="vcd-grid-2" style="align-items:center;">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom:12px;">Temel etiketlerle her şey yazılabilir; ama uzun bir sayfada içerik <strong style="color:var(--color-text-primary);">düz bir akışa</strong> döner:</p>
                        <ul class="vcd-bullet-list" style="gap:8px;">
                            <li style="font-size:0.84rem;">Menü nerede bitiyor, içerik nerede başlıyor belli değil.</li>
                            <li style="font-size:0.84rem;">Kodda bir bölümü bulmak için her satırı okumak gerekiyor.</li>
                            <li style="font-size:0.84rem;">Tarayıcı ve arama motoru için sayfa, anlamsız bir metin yığını.</li>
                        </ul>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-size:0.62rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-text-muted); font-weight:700; margin-bottom:10px;">Tanıdık bir örnek: gazete sayfası</div>
                        <div style="border:1px solid var(--border-light); border-radius:8px; overflow:hidden; font-size:0.6rem;">
                            <div style="background:rgba(212,255,0,0.12); padding:8px 10px; text-align:center; font-weight:700; color:var(--color-text-primary); font-size:0.74rem;">MANŞET</div>
                            <div style="display:flex; gap:1px; background:var(--border-light);">
                                <div style="flex:2; background:var(--color-surface, #141416); padding:8px 10px; color:var(--color-text-secondary); line-height:1.5;">Ana haber sütunu: en geniş alan, asıl içerik burada.</div>
                                <div style="flex:1; background:var(--color-surface, #141416); padding:8px 10px; color:var(--color-text-muted); line-height:1.5;">Yan sütun: ilgili kısa haberler.</div>
                            </div>
                            <div style="background:rgba(255,255,255,0.04); padding:6px 10px; text-align:center; color:var(--color-text-muted);">Künye · sayfa numarası · iletişim</div>
                        </div>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.5; margin:10px 0 0;">Gazete bölgelerle çalışır: manşet, sütunlar, künye. Hiç kimse gazeteyi tek sütun düz metin basmaz.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Bugünün Fikri</h4>
                    <p>Web sayfası da aynı: önce <strong>bölgeler</strong>, sonra içerik. HTML bize bu bölgeleri adlarıyla işaretleyen etiketler verir.</p>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 1: BLOCK vs INLINE
        // ============================================================

        // Slide 4: Block vs Inline kavramı
        {
            id: "block-inline",
            category: "Bölüm 1: Block ve Inline",
            title: "İki Tür Davranış: Block ve Inline",
            html: `
                <p class="vcd-content-intro">Bölgelere geçmeden önce önemli bir ayrım: tarayıcı her elementi bir <strong style="color:var(--color-text-primary);">kutu</strong> olarak çizer ve kutular iki şekilde davranır: <strong>block (blok)</strong> ya da <strong>inline (satır-içi)</strong>.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card primary" style="display:flex; flex-direction:column; gap:10px;">
                        <strong style="color:var(--color-primary); font-size:0.95rem;">Block (Blok)</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Satırın <strong>tamamını</strong> kaplar; bir sonraki element yeni satırdan başlar. Üst üste dizilen koliler gibi.</p>
                        <div style="display:flex; flex-direction:column; gap:4px;">
                            <div style="background:rgba(37,99,235,0.15); border:1px dashed rgba(96,165,250,0.5); border-radius:5px; padding:4px 8px; font-family:monospace; font-size:0.68rem; color:#93c5fd;">&lt;h1&gt;</div>
                            <div style="background:rgba(37,99,235,0.15); border:1px dashed rgba(96,165,250,0.5); border-radius:5px; padding:4px 8px; font-family:monospace; font-size:0.68rem; color:#93c5fd;">&lt;p&gt;</div>
                            <div style="background:rgba(37,99,235,0.15); border:1px dashed rgba(96,165,250,0.5); border-radius:5px; padding:4px 8px; font-family:monospace; font-size:0.68rem; color:#93c5fd;">&lt;ul&gt;</div>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:0;">Örnekler: <code>h1..h6</code>, <code>p</code>, <code>ul</code>/<code>ol</code>/<code>li</code>, <code>div</code> ve bugünkü tüm bölge etiketleri.</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="display:flex; flex-direction:column; gap:10px;">
                        <strong style="color:var(--color-secondary); font-size:0.95rem;">Inline (Satır-içi)</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Yalnızca <strong>içeriği kadar</strong> yer kaplar; metnin akışında, kelimeler gibi yan yana durur.</p>
                        <div style="display:flex; gap:4px; flex-wrap:wrap; align-items:center;">
                            <span style="font-size:0.7rem; color:var(--color-text-muted);">Metin</span>
                            <span style="background:rgba(245,158,11,0.15); border:1px dashed rgba(245,158,11,0.5); border-radius:5px; padding:2px 7px; font-family:monospace; font-size:0.68rem; color:#fcd34d;">&lt;strong&gt;</span>
                            <span style="font-size:0.7rem; color:var(--color-text-muted);">akışı</span>
                            <span style="background:rgba(245,158,11,0.15); border:1px dashed rgba(245,158,11,0.5); border-radius:5px; padding:2px 7px; font-family:monospace; font-size:0.68rem; color:#fcd34d;">&lt;a&gt;</span>
                            <span style="font-size:0.7rem; color:var(--color-text-muted);">bozulmaz</span>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:0;">Örnekler: <code>strong</code>, <code>em</code>, <code>a</code>, <code>img</code>, <code>span</code>.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(2, 184, 204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🧭</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Bu ayrım, ileride yapacağımız <strong>tüm yerleşim (layout) işlerinin</strong> temelidir: sayfa düzeni block kutularla, metin içi vurgular inline kutularla kurulur.</span>
                </div>
            `
        },

        // Slide 5: İnteraktif — kutuları boya
        {
            id: "kutulari-gor",
            category: "Bölüm 1: Block ve Inline",
            title: "Görünmez Kutuları Görelim",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Sıradan bir sayfa parçası aslında kutularla dolu. Aşağıdaki buton bu görünmez yapıyı ortaya çıkarır: <strong style="color:#93c5fd;">block kutular mavi</strong>, <strong style="color:#fcd34d;">inline kutular turuncu</strong>.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch;">
                        <div style="display:flex; flex-direction:column; gap:10px; min-height:0;">
                            <button class="sim-btn kutu-toggle" style="align-self:flex-start;">Kutuları boya</button>
                            <div class="pane-label kod">KOD</div>
                            <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0;"><span class="t">&lt;h2&gt;</span>Sergi Duyurusu<span class="t">&lt;/h2&gt;</span>
<span class="t">&lt;p&gt;</span>Bu cuma <span class="t">&lt;strong&gt;</span>yeni işler<span class="t">&lt;/strong&gt;</span>
ve <span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"#"</span><span class="t">&gt;</span>davet<span class="t">&lt;/a&gt;</span> sizi bekliyor.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;ul&gt;</span>
  <span class="t">&lt;li&gt;</span>Afiş tasarımları<span class="t">&lt;/li&gt;</span>
  <span class="t">&lt;li&gt;</span>Kısa animasyonlar<span class="t">&lt;/li&gt;</span>
<span class="t">&lt;/ul&gt;</span></pre>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:10px; min-height:0;">
                            <div style="display:flex; gap:12px; align-items:center; height:32px; flex-shrink:0;">
                                <span style="display:inline-flex; align-items:center; gap:6px; font-size:0.7rem; color:var(--color-text-secondary);"><span style="width:12px; height:12px; border-radius:3px; background:rgba(37,99,235,0.3); border:1px dashed #60a5fa;"></span> block</span>
                                <span style="display:inline-flex; align-items:center; gap:6px; font-size:0.7rem; color:var(--color-text-secondary);"><span style="width:12px; height:12px; border-radius:3px; background:rgba(245,158,11,0.35); border:1px solid #f59e0b;"></span> inline</span>
                            </div>
                            <div class="pane-label cikti">TARAYICIDA</div>
                            <iframe class="html-live-frame kutu-out" title="Kutu önizleme" style="flex:1; min-height:160px;"></iframe>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const btn = slideEl.querySelector('.kutu-toggle');
                const out = slideEl.querySelector('.kutu-out');
                if (!btn || !out) return;
                const icerik = '<h2>Sergi Duyurusu</h2><p>Bu cuma <strong>yeni işler</strong> ve <a href="#">davet</a> sizi bekliyor.</p><ul><li>Afiş tasarımları</li><li>Kısa animasyonlar</li></ul>';
                const taban = '<style>body{font-family:Arial,sans-serif;padding:14px;color:#1f2937;}</style>';
                const boya = '<style>h2,p,ul,li{outline:2px dashed #2563eb;outline-offset:-2px;background:rgba(37,99,235,0.07);} strong,a{outline:2px solid #f59e0b;background:rgba(245,158,11,0.2);}</style>';
                let boyali = false;
                const guncelle = () => {
                    out.srcdoc = taban + (boyali ? boya : '') + icerik;
                    btn.textContent = boyali ? 'Boyayı kaldır' : 'Kutuları boya';
                    btn.classList.toggle('active', boyali);
                };
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    boyali = !boyali;
                    guncelle();
                });
                guncelle();
            }
        },

        // ============================================================
        // BÖLÜM 2: div ve span
        // ============================================================

        // Slide 6: div
        {
            id: "div",
            category: "Bölüm 2: div ve span",
            title: "&lt;div&gt;: Anlamsız Blok Kutu",
            html: `
                <p class="vcd-content-intro"><code>&lt;div&gt;</code> (division, bölme), <strong style="color:var(--color-text-primary);">hiçbir anlam taşımayan genel amaçlı blok kutudur.</strong> Tek işi vardır: başka elementleri gruplamak.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label kod">KOD · iki parçayı tek kutuda gruplama</div>
                        <pre class="html-kod" style="font-size:0.74rem; flex:1; margin:0;"><span class="t">&lt;div&gt;</span>
  <span class="t">&lt;h2&gt;</span>Afiş Serisi<span class="t">&lt;/h2&gt;</span>
  <span class="t">&lt;p&gt;</span>2026 sergi afişleri.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;/div&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label cikti">TARAYICIDA · görünüm değişmez</div>
                        <div class="html-cikti" style="flex:1;"><h2>Afiş Serisi</h2><p>2026 sergi afişleri.</p></div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Karton Koli</h4>
                    <p><code>div</code> üzerinde etiket olmayan bir kolidir: içinde ne taşıdığını dışarıdan kimse bilemez. Taşımak (gruplamak) için harika, anlatmak için kötü.</p>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">💡</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;"><code>div</code> kötü değildir; <strong>son çaredir</strong>. Birazdan göreceğimiz anlamlı etiketlerden hiçbiri uymuyorsa div kullanılır.</span>
                </div>
            `
        },

        // Slide 7: span
        {
            id: "span",
            category: "Bölüm 2: div ve span",
            title: "&lt;span&gt;: Anlamsız Satır-içi Kutu",
            html: `
                <p class="vcd-content-intro"><code>&lt;span&gt;</code>, div'in satır-içi kardeşidir: metnin akışını bozmadan <strong style="color:var(--color-text-primary);">bir parçayı işaretler</strong>. Görünümü değiştirmez; ileride CSS ile o parçayı hedeflemek için kanca olur.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.74rem; flex:1; margin:0;"><span class="t">&lt;p&gt;</span>Atölye tarihi:
<span class="t">&lt;span&gt;</span>14 Mart Cuma<span class="t">&lt;/span&gt;</span>,
saat 14.00<span class="t">&lt;/p&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label cikti">TARAYICIDA · hiçbir fark yok</div>
                        <div class="html-cikti" style="flex:1;"><p>Atölye tarihi: <span>14 Mart Cuma</span>, saat 14.00</p></div>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:14px; border-color:rgba(39,166,68,0.3);">
                        <span class="kod-durum dogru">✓ span ne zaman</span>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:8px 0 0;">Anlam değil, yalnızca <strong>görsel niyet</strong> varsa: bir tarihi farklı renkte göstermek, bir kelimeyi ileride animasyonla vurgulamak.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:14px; border-color:rgba(239,68,68,0.3);">
                        <span class="kod-durum yanlis">✕ span ne zaman değil</span>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:8px 0 0;">İçerik gerçekten önemliyse doğru araç <code>&lt;strong&gt;</code>, vurguysa <code>&lt;em&gt;</code>: onlar anlam taşır, <code>span</code> taşımaz.</p>
                    </div>
                </div>
            `
        },

        // Slide 8: Div çorbası problemi
        {
            id: "div-corbasi",
            category: "Bölüm 2: div ve span",
            title: "Tuzak: Her Şeyi div Yapmak",
            html: `
                <p class="vcd-content-intro">div bu kadar esnekse neden tüm sayfayı div'lerle kurmayalım? İşte genel bakışta gördüğümüz <strong style="color:var(--color-text-primary);">"div çorbası" (div soup)</strong>: çalışır ama kimse anlamaz.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px; border-color:rgba(239,68,68,0.3);">
                        <span class="kod-durum yanlis">✕ Div çorbası</span>
                        <pre class="html-kod" style="font-size:0.72rem; margin:0;"><span style="color:#828289;">&lt;div&gt;</span>
  <span style="color:#828289;">&lt;div&gt;</span>Logo<span style="color:#828289;">&lt;/div&gt;</span>
  <span style="color:#828289;">&lt;div&gt;</span>Menü<span style="color:#828289;">&lt;/div&gt;</span>
<span style="color:#828289;">&lt;/div&gt;</span>
<span style="color:#828289;">&lt;div&gt;</span>
  <span style="color:#828289;">&lt;div&gt;</span>İçerik...<span style="color:#828289;">&lt;/div&gt;</span>
<span style="color:#828289;">&lt;/div&gt;</span>
<span style="color:#828289;">&lt;div&gt;</span>İletişim<span style="color:#828289;">&lt;/div&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Hangi div menü, hangisi içerik? Kod bu soruya cevap vermiyor.</p>
                    </div>
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px; border-color:rgba(39,166,68,0.3);">
                        <span class="kod-durum dogru">✓ Anlamlı iskelet</span>
                        <pre class="html-kod" style="font-size:0.72rem; margin:0;"><span class="t">&lt;header&gt;</span>
  Logo
  <span class="t">&lt;nav&gt;</span>Menü<span class="t">&lt;/nav&gt;</span>
<span class="t">&lt;/header&gt;</span>
<span class="t">&lt;main&gt;</span>
  İçerik...
<span class="t">&lt;/main&gt;</span>
<span class="t">&lt;footer&gt;</span>İletişim<span class="t">&lt;/footer&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Aynı yapı, ama her bölge kendini <strong>adıyla</strong> tanıtıyor.</p>
                    </div>
                </div>
                <p style="font-size:0.78rem; color:var(--color-text-muted); margin-top:12px; text-align:center;">İki kod da tarayıcıda <strong style="color:var(--color-text-secondary);">aynı görünür</strong>. Fark görünümde değil, <strong style="color:var(--color-text-secondary);">anlamda</strong>. İşte bu farkın adı: semantic.</p>
            `
        },

        // ============================================================
        // BÖLÜM 3: SEMANTIC ETİKETLER
        // ============================================================

        // Slide 9: Semantic nedir + kazançlar
        {
            id: "semantic-nedir",
            category: "Bölüm 3: Semantic Etiketler",
            title: "Semantic (Anlamsal) HTML",
            html: `
                <p class="vcd-content-intro"><strong style="color:var(--color-text-primary);">Semantic HTML</strong>, sayfa bölümlerini işlevini söyleyen etiketlerle işaretlemektir: "burası başlık bölgesi, burası menü, burası ana içerik". Peki bu kime fayda sağlar? Üç ayrı okura:</p>
                <div class="vcd-grid-3" style="margin-top:0;">
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-size:1.4rem; margin-bottom:6px;">🧑‍💻</div>
                        <strong style="color:var(--color-text-primary); font-size:0.9rem; display:block; margin-bottom:4px;">Sen ve ekibin</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Kod kendini anlatır: <code>&lt;nav&gt;</code> görüldüğü anda menünün orada olduğu bellidir. Aylar sonra dosyaya dönüldüğünde de.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-size:1.4rem; margin-bottom:6px;">🔍</div>
                        <strong style="color:var(--color-text-primary); font-size:0.9rem; display:block; margin-bottom:4px;">Google (SEO)</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Arama motoru sayfanın haritasını çıkarır: ana içerik nerede, ne önemli. Doğru yapı, daha iyi anlaşılma demektir.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-size:1.4rem; margin-bottom:6px;">♿</div>
                        <strong style="color:var(--color-text-primary); font-size:0.9rem; display:block; margin-bottom:4px;">Ekran okuyucu</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Görme engelli kullanıcılar "menüye atla", "ana içeriğe git" diyebilir. Adsız kutu yığınında atlanacak bir yer yoktur.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Tasarımcı Diliyle</h4>
                    <p>Photoshop/Figma dosyasındaki katmanları adlandırmak gibi: "Layer 47 copy" yerine "logo", "menu", "hero". Dosya aynı görünür ama <strong>çalışılabilir</strong> olur.</p>
                </div>
            `
        },

        // Slide 10: Bölge haritası (interaktif hover)
        {
            id: "bolge-haritasi",
            category: "Bölüm 3: Semantic Etiketler",
            title: "Sayfanın Bölgeleri",
            html: `
                <p class="vcd-content-intro">Tipik bir sayfanın iskeleti beş ana bölgeden oluşur. Kodun ya da haritanın üzerine gelindiğinde eşleşme görünür:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <pre class="html-kod" style="font-size:0.8rem; line-height:2; margin:0;"><span class="hl-line" data-part="r-header"><span class="t">&lt;header&gt;</span> Logo, site adı <span class="t">&lt;/header&gt;</span></span>
<span class="hl-line" data-part="r-nav"><span class="t">&lt;nav&gt;</span> Menü bağlantıları <span class="t">&lt;/nav&gt;</span></span>
<span class="hl-line" data-part="r-main"><span class="t">&lt;main&gt;</span> Asıl içerik <span class="t">&lt;/main&gt;</span></span>
<span class="hl-line" data-part="r-aside"><span class="t">&lt;aside&gt;</span> Yan bilgi <span class="t">&lt;/aside&gt;</span></span>
<span class="hl-line" data-part="r-footer"><span class="t">&lt;footer&gt;</span> Alt bilgi <span class="t">&lt;/footer&gt;</span></span></pre>
                    <div style="display:flex; flex-direction:column; gap:5px; min-height:240px;">
                        <div class="part-box" data-part="r-header" style="border:1px solid var(--border-light); border-radius:8px; padding:8px 12px; text-align:center; transition:background 0.15s, border-color 0.15s;">
                            <span style="font-family:monospace; font-size:0.72rem; color:#7dd3fc; font-weight:600;">header</span>
                            <span style="font-size:0.66rem; color:var(--color-text-muted);"> · şapka</span>
                        </div>
                        <div class="part-box" data-part="r-nav" style="border:1px solid var(--border-light); border-radius:8px; padding:6px 12px; text-align:center; transition:background 0.15s, border-color 0.15s;">
                            <span style="font-family:monospace; font-size:0.72rem; color:#c084fc; font-weight:600;">nav</span>
                            <span style="font-size:0.66rem; color:var(--color-text-muted);"> · pusula</span>
                        </div>
                        <div style="display:flex; gap:5px; flex:1;">
                            <div class="part-box" data-part="r-main" style="flex:2; border:1px solid var(--border-light); border-radius:8px; padding:12px; display:flex; align-items:center; justify-content:center; transition:background 0.15s, border-color 0.15s;">
                                <div style="text-align:center;">
                                    <span style="font-family:monospace; font-size:0.72rem; color:#34d399; font-weight:600;">main</span>
                                    <div style="font-size:0.66rem; color:var(--color-text-muted); margin-top:2px;">asıl mesele</div>
                                </div>
                            </div>
                            <div class="part-box" data-part="r-aside" style="flex:1; border:1px solid var(--border-light); border-radius:8px; padding:12px; display:flex; align-items:center; justify-content:center; transition:background 0.15s, border-color 0.15s;">
                                <div style="text-align:center;">
                                    <span style="font-family:monospace; font-size:0.72rem; color:#fbbf24; font-weight:600;">aside</span>
                                    <div style="font-size:0.66rem; color:var(--color-text-muted); margin-top:2px;">kenar notu</div>
                                </div>
                            </div>
                        </div>
                        <div class="part-box" data-part="r-footer" style="border:1px solid var(--border-light); border-radius:8px; padding:8px 12px; text-align:center; transition:background 0.15s, border-color 0.15s;">
                            <span style="font-family:monospace; font-size:0.72rem; color:#f472b6; font-weight:600;">footer</span>
                            <span style="font-size:0.66rem; color:var(--color-text-muted);"> · künye</span>
                        </div>
                    </div>
                </div>
                <p style="font-size:0.76rem; color:var(--color-text-muted); margin-top:10px; text-align:center;">Bu yerleşim bir zorunluluk değil, bir gelenek: kullanıcılar bölgeleri <strong style="color:var(--color-text-secondary);">bu yerlerde</strong> bulmaya alışkın. Şimdi tek tek tanışalım.</p>
            `,
            onRender: (slideEl) => {
                const lines = slideEl.querySelectorAll('.hl-line[data-part]');
                const boxes = slideEl.querySelectorAll('.part-box[data-part]');
                const BG = 'rgba(212, 255, 0,0.15)';
                const BORD = 'rgba(212, 255, 0,0.45)';
                const clear = () => {
                    lines.forEach(l => l.style.background = '');
                    boxes.forEach(b => { b.style.background = ''; b.style.borderColor = ''; });
                };
                const on = (part) => {
                    slideEl.querySelectorAll('.hl-line[data-part="' + part + '"]').forEach(l => l.style.background = BG);
                    slideEl.querySelectorAll('.part-box[data-part="' + part + '"]').forEach(b => { b.style.background = BG; b.style.borderColor = BORD; });
                };
                const bind = (el) => {
                    const part = el.dataset.part;
                    el.addEventListener('mouseenter', (e) => { e.stopPropagation(); clear(); on(part); });
                    el.addEventListener('mouseleave', clear);
                };
                lines.forEach(bind);
                boxes.forEach(bind);
            }
        },

        // Slide 11: header + nav
        {
            id: "header-nav",
            category: "Bölüm 3: Semantic Etiketler",
            title: "&lt;header&gt; ve &lt;nav&gt;: Şapka ve Pusula",
            html: `
                <div class="vcd-grid-2" style="align-items:stretch;">
                    <div class="vcd-glass-card primary" style="display:flex; flex-direction:column; gap:8px;">
                        <strong style="color:var(--color-primary); font-size:0.95rem;">&lt;header&gt;</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Sayfanın <strong>tanıtım şapkası</strong>: logo, site adı, slogan. Ziyaretçinin "neredeyim?" sorusunu ilk bakışta cevaplar.</p>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:0;">Dikkat: geçen dersteki <code>&lt;head&gt;</code> ile karışmasın. <code>head</code> görünmez bilgidir; <code>header</code> sayfada görünen üst bölgedir.</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="display:flex; flex-direction:column; gap:8px;">
                        <strong style="color:var(--color-secondary); font-size:0.95rem;">&lt;nav&gt;</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Navigation (gezinme): sayfaları birbirine bağlayan <strong>menü</strong>. İçinde genelde bağlantı listesi yaşar.</p>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:0;">Her bağlantı yığını nav değildir; nav, sitenin <strong>ana yön bulma</strong> aracıdır.</p>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label kod">KOD · nav genelde header içinde yaşar</div>
                        <pre class="html-kod" style="font-size:0.72rem; flex:1; margin:0;"><span class="t">&lt;header&gt;</span>
  <span class="t">&lt;h1&gt;</span>Deniz Demir<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;nav&gt;</span>
    <span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"index.html"</span><span class="t">&gt;</span>Ana Sayfa<span class="t">&lt;/a&gt;</span>
    <span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"isler.html"</span><span class="t">&gt;</span>İşlerim<span class="t">&lt;/a&gt;</span>
  <span class="t">&lt;/nav&gt;</span>
<span class="t">&lt;/header&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label cikti">TARAYICIDA · hâlâ stilsiz, normal</div>
                        <div class="html-cikti" style="flex:1;"><h1 style="font-size:1.5em;">Deniz Demir</h1><p><a href="#">Ana Sayfa</a> <a href="#">İşlerim</a></p></div>
                    </div>
                </div>
            `
        },

        // Slide 12: main
        {
            id: "main-etiketi",
            category: "Bölüm 3: Semantic Etiketler",
            title: "&lt;main&gt;: Sayfanın Asıl Derdi",
            html: `
                <p class="vcd-content-intro"><code>&lt;main&gt;</code>, bu sayfayı diğerlerinden ayıran <strong style="color:var(--color-text-primary);">asıl içeriği</strong> sarar. Header ve footer her sayfada tekrarlanır; main, o sayfaya özel olan her şeydir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.72rem;"><span class="t">&lt;body&gt;</span>
  <span class="t">&lt;header&gt;</span>...<span class="t">&lt;/header&gt;</span>

  <span class="t">&lt;main&gt;</span>
    <span class="t">&lt;h2&gt;</span>Hakkımda<span class="t">&lt;/h2&gt;</span>
    <span class="t">&lt;p&gt;</span>Bu sayfanın asıl konusu...<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;/main&gt;</span>

  <span class="t">&lt;footer&gt;</span>...<span class="t">&lt;/footer&gt;</span>
<span class="t">&lt;/body&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div class="pane-label" style="visibility:hidden; margin-bottom:-4px;">·</div>
                        <div style="display:flex; align-items:center; gap:10px; padding:12px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                            <span style="font-size:1.1rem;">1️⃣</span>
                            <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Kural: her sayfada <strong>yalnızca bir</strong> <code>&lt;main&gt;</code> olur. Tıpkı tek <code>&lt;h1&gt;</code> kuralı gibi: asıl mesele tektir.</span>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px; padding:12px 14px; background:rgba(2, 184, 204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                            <span style="font-size:1.1rem;">♿</span>
                            <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Ekran okuyucuların "ana içeriğe atla" komutu doğrudan <code>main</code> etiketini arar. Bu tek etiket bile sayfayı daha erişilebilir yapar.</span>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 13: section
        {
            id: "section",
            category: "Bölüm 3: Semantic Etiketler",
            title: "&lt;section&gt;: Konu Bölümleri",
            html: `
                <p class="vcd-content-intro"><code>&lt;section&gt;</code>, içeriği <strong style="color:var(--color-text-primary);">konu konu</strong> bölmek içindir. Bir dergideki bölüm başlıkları gibi: her section bir konuyu anlatır ve bir başlık hak eder.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD · main içinde iki konu</div>
                        <pre class="html-kod" style="font-size:0.72rem;"><span class="t">&lt;main&gt;</span>
  <span class="t">&lt;section&gt;</span>
    <span class="t">&lt;h2&gt;</span>Hakkımda<span class="t">&lt;/h2&gt;</span>
    <span class="t">&lt;p&gt;</span>Kısa tanıtım...<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;/section&gt;</span>
  <span class="t">&lt;section&gt;</span>
    <span class="t">&lt;h2&gt;</span>İşlerim<span class="t">&lt;/h2&gt;</span>
    <span class="t">&lt;ul&gt;</span>...<span class="t">&lt;/ul&gt;</span>
  <span class="t">&lt;/section&gt;</span>
<span class="t">&lt;/main&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div class="pane-label" style="visibility:hidden; margin-bottom:-4px;">·</div>
                        <div class="vcd-glass-card" style="padding:14px;">
                            <strong style="font-size:0.84rem; color:var(--color-text-primary);">Pratik test</strong>
                            <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.55; margin:6px 0 0;">"Bu bölüme bir başlık yazabilir miyim?" Evet ise section olabilir. Başlığı yoksa muhtemelen section da değildir, düz bir gruplamadır (div).</p>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px; padding:12px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                            <span style="font-size:1.1rem;">📐</span>
                            <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Tek sayfalık bir portfolyoda tipik bölümler: <strong>Hakkımda, İşler, İletişim</strong>. Her biri birer section adayı.</span>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 14: article + section vs article
        {
            id: "article",
            category: "Bölüm 3: Semantic Etiketler",
            title: "&lt;article&gt;: Kendi Başına Yaşayan İçerik",
            html: `
                <p class="vcd-content-intro"><code>&lt;article&gt;</code>, sayfadan koparılıp tek başına paylaşılsa bile <strong style="color:var(--color-text-primary);">anlamını koruyan</strong> içerik içindir: bir blog yazısı, bir haber, portfolyodaki bir proje kartı.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD · İşler bölümünde iki proje kartı</div>
                        <pre class="html-kod" style="font-size:0.7rem;"><span class="t">&lt;section&gt;</span>
  <span class="t">&lt;h2&gt;</span>İşlerim<span class="t">&lt;/h2&gt;</span>
  <span class="t">&lt;article&gt;</span>
    <span class="t">&lt;h3&gt;</span>Afiş Serisi<span class="t">&lt;/h3&gt;</span>
    <span class="t">&lt;p&gt;</span>Sergi için 3 afiş.<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;/article&gt;</span>
  <span class="t">&lt;article&gt;</span>
    <span class="t">&lt;h3&gt;</span>Logo Çalışması<span class="t">&lt;/h3&gt;</span>
    <span class="t">&lt;p&gt;</span>Kafe markası için kimlik.<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;/article&gt;</span>
<span class="t">&lt;/section&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div class="pane-label" style="visibility:hidden; margin-bottom:-4px;">·</div>
                        <div class="vcd-glass-card" style="padding:14px;">
                            <strong style="font-size:0.84rem; color:var(--color-text-primary);">Kopar-paylaş testi</strong>
                            <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.55; margin:6px 0 0;">"Bu parça tek başına başka bir sitede paylaşılsa anlamlı olur mu?" Evet ise <code>article</code>. Afiş Serisi kartı Instagram'da tek başına da anlamlıdır.</p>
                        </div>
                        <div class="vcd-glass-card" style="padding:14px;">
                            <strong style="font-size:0.84rem; color:var(--color-text-primary);">section ve article farkı</strong>
                            <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.55; margin:6px 0 0;"><code>section</code>: sayfanın bir konusu, bağlama bağlı. <code>article</code>: bağımsız bir bütün. Kararsızlık normaldir; çoğu durumda ikisi de kabul edilir. Asıl hata, ikisini de bırakıp anlamsız div'e dönmek.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 15: aside + footer
        {
            id: "aside-footer",
            category: "Bölüm 3: Semantic Etiketler",
            title: "&lt;aside&gt; ve &lt;footer&gt;: Kenar Notu ve Künye",
            html: `
                <div class="vcd-grid-2" style="align-items:stretch;">
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px; border-color:rgba(251,191,36,0.3);">
                        <strong style="color:#fbbf24; font-size:0.95rem;">&lt;aside&gt;</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Ana içeriğin <strong>kenarındaki</strong> ilgili ama ikincil bilgi: kısa biyografi kutusu, ilgili bağlantılar, küçük duyuru.</p>
                        <pre class="html-kod" style="font-size:0.7rem; margin:0;"><span class="t">&lt;aside&gt;</span>
  <span class="t">&lt;h3&gt;</span>Şu An Masamda<span class="t">&lt;/h3&gt;</span>
  <span class="t">&lt;p&gt;</span>Yeni bir dergi kapağı
  üzerinde çalışıyorum.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;/aside&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:0;">Test: aside silinse ana içerik anlamını korur mu? Korumalı.</p>
                    </div>
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px; border-color:rgba(244,114,182,0.3);">
                        <strong style="color:#f472b6; font-size:0.95rem;">&lt;footer&gt;</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Sayfanın <strong>künyesi</strong>: telif notu, iletişim bağlantıları, sosyal medya. Kullanıcı "bu siteyle nasıl iletişime geçerim" diye en alta bakar.</p>
                        <pre class="html-kod" style="font-size:0.7rem; margin:0;"><span class="t">&lt;footer&gt;</span>
  <span class="t">&lt;p&gt;</span>© 2026 Deniz Demir<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"mailto:..."</span><span class="t">&gt;</span>E-posta<span class="t">&lt;/a&gt;</span>
<span class="t">&lt;/footer&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:0;">header gibi footer da gelenektir: ziyaretçi onu en altta arar.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Dergi Benzetmesi Tamamlandı</h4>
                    <p>header kapak, nav içindekiler, main dosya konusu, section bölümler, article makaleler, aside kenar kutuları, footer künye. Dergi tasarımı bilen biri için semantic HTML tanıdık bir dildir.</p>
                </div>
            `
        },

        // Slide 16: figure + figcaption
        {
            id: "figure",
            category: "Bölüm 3: Semantic Etiketler",
            title: "&lt;figure&gt;: Görsel + Altyazı Çifti",
            html: `
                <p class="vcd-content-intro">Tasarımcının en sevdiği ikili: <code>&lt;figure&gt;</code> görseli ve açıklamasını tek pakette toplar, <code>&lt;figcaption&gt;</code> altyazıyı yazar. "Bu açıklama, bu görsele aittir" der.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.72rem; flex:1; margin:0;"><span class="t">&lt;figure&gt;</span>
  <span class="t">&lt;img</span> <span class="a">src</span>=<span class="v">"afis.jpg"</span>
       <span class="a">alt</span>=<span class="v">"Sergi afişi"</span><span class="t">&gt;</span>
  <span class="t">&lt;figcaption&gt;</span>
    Bahar Sergisi afişi, 2026
  <span class="t">&lt;/figcaption&gt;</span>
<span class="t">&lt;/figure&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label cikti">TARAYICIDA</div>
                        <div class="html-cikti" style="flex:1; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center;"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120'%3E%3Crect width='200' height='120' fill='%23fde68a'/%3E%3Ccircle cx='100' cy='48' r='26' fill='%23f97316'/%3E%3Crect x='30' y='86' width='140' height='10' rx='5' fill='%23475569'/%3E%3C/svg%3E" alt="Sergi afişi" width="200" height="120"><div style="font-size:12px; color:#555; font-style:italic; margin-top:6px;">Bahar Sergisi afişi, 2026</div></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(139, 92, 246,0.06); border:1px dashed rgba(139, 92, 246,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">🖼️</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;"><strong>Portfolyo ipucu:</strong> proje görseli + proje adı/yılı tam olarak bu yapıdır. Final projesindeki her iş, bir <code>figure</code> olmaya aday.</span>
                </div>
            `
        },

        // Slide 17: Tam iskelet (şablon)
        {
            id: "tam-iskelet",
            category: "Bölüm 3: Semantic Etiketler",
            title: "Hepsi Bir Arada: Tam İskelet",
            html: `
                <div class="vcd-grid-2" style="align-items:start;">
                    <div>
                        <div class="pane-label kod">body İÇİ · saklamaya değer şablon</div>
                        <pre class="html-kod" style="font-size:0.66rem; line-height:1.6;"><span class="t">&lt;header&gt;</span>
  <span class="t">&lt;h1&gt;</span>Ad Soyad<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;nav&gt;</span> ... menü ... <span class="t">&lt;/nav&gt;</span>
<span class="t">&lt;/header&gt;</span>

<span class="t">&lt;main&gt;</span>
  <span class="t">&lt;section&gt;</span>
    <span class="t">&lt;h2&gt;</span>Hakkımda<span class="t">&lt;/h2&gt;</span> ...
  <span class="t">&lt;/section&gt;</span>
  <span class="t">&lt;section&gt;</span>
    <span class="t">&lt;h2&gt;</span>İşlerim<span class="t">&lt;/h2&gt;</span>
    <span class="t">&lt;article&gt;</span> ... proje ... <span class="t">&lt;/article&gt;</span>
  <span class="t">&lt;/section&gt;</span>
<span class="t">&lt;/main&gt;</span>

<span class="t">&lt;aside&gt;</span> ... yan not ... <span class="t">&lt;/aside&gt;</span>
<span class="t">&lt;footer&gt;</span> ... iletişim ... <span class="t">&lt;/footer&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div class="pane-label" style="visibility:hidden; margin-bottom:-4px;">·</div>
                        <p class="vcd-content-intro" style="margin:0;">Bu iskelet <strong style="color:var(--color-text-primary);">ezberlenecek bir bilgi değil, saklanacak bir şablon.</strong> Her yeni sayfa buna benzer bir omurgayla başlar; içerik değişir, kemikler kalır.</p>
                        <div class="vcd-glass-card" style="padding:14px;">
                            <strong style="font-size:0.84rem; color:var(--color-text-primary);">Okuma alıştırması</strong>
                            <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.55; margin:6px 0 0;">Soldaki kod metin gibi değil <strong>harita</strong> gibi okunur: girintiler iç içe geçmeyi, etiket adları bölgeleri gösterir. Kod hiç çalıştırılmadan sayfanın krokisi çıkarılabilir.</p>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; background:rgba(2, 184, 204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                            <span style="font-size:1.1rem;">🔍</span>
                            <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Geçen dersteki "Öğeyi İncele" ile herhangi bir siteye bakmak, bu etiketleri gerçek hayatta görmenin en kısa yolu.</span>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 18: Önce taslak (outline) sonra kod
        {
            id: "outline-pratigi",
            category: "Bölüm 3: Semantic Etiketler",
            title: "Önce Kağıt, Sonra Kod",
            html: `
                <p class="vcd-content-intro">İskelet kurmanın sırrı kodda değil, <strong style="color:var(--color-text-primary);">kod öncesinde</strong>: içeriği listele, grupla, sonra her gruba etiket seç. Üç adım:</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:14px; display:flex; flex-direction:column; gap:8px;">
                        <span class="vcd-badge" style="font-size:0.62rem; align-self:flex-start;">1 · Listele</span>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Sayfada ne olacak? Sıra gözetmeden bir döküm:</p>
                        <div style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.7; font-family:'JetBrains Mono',monospace;">adım soyadım<br>kısa tanıtım<br>afiş projem<br>logo projem<br>instagram linki<br>e-posta</div>
                    </div>
                    <div class="vcd-glass-card" style="padding:14px; display:flex; flex-direction:column; gap:8px;">
                        <span class="vcd-badge" style="font-size:0.62rem; align-self:flex-start;">2 · Grupla ve sırala</span>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Outline (taslak): neler birlikte, neler önce?</p>
                        <div style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.7; font-family:'JetBrains Mono',monospace;">Kimlik<br>&nbsp;&nbsp;ad + tanıtım<br>İşler<br>&nbsp;&nbsp;afiş, logo<br>İletişim<br>&nbsp;&nbsp;instagram, e-posta</div>
                    </div>
                    <div class="vcd-glass-card primary" style="padding:14px; display:flex; flex-direction:column; gap:8px;">
                        <span class="vcd-badge badge-primary" style="font-size:0.62rem; align-self:flex-start;">3 · Etiket seç</span>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Her grubun semantic karşılığı:</p>
                        <div style="font-size:0.72rem; line-height:1.7; font-family:'JetBrains Mono',monospace;"><span style="color:#7dd3fc;">header</span> <span style="color:var(--color-text-muted);">← kimlik</span><br><span style="color:#34d399;">main &gt; section</span> <span style="color:var(--color-text-muted);">← işler</span><br><span style="color:#34d399;">&nbsp;&nbsp;article ×2</span> <span style="color:var(--color-text-muted);">← projeler</span><br><span style="color:#f472b6;">footer</span> <span style="color:var(--color-text-muted);">← iletişim</span></div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Tanıdık Geldi mi?</h4>
                    <p>Bu, tasarım sürecindeki eskiz aşamasının kod karşılığıdır. İleride wireframe (tel kafes) konusunda bu alışkanlığı görsel tarafa da taşıyacağız.</p>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 4: id ve class
        // ============================================================

        // Slide 19: id
        {
            id: "id-attr",
            category: "Bölüm 4: id ve class",
            title: "id: Tekil Kimlik",
            html: `
                <p class="vcd-content-intro">İskelet hazır; sıradaki derste ona stil vereceğiz. Ama CSS bir elementi nasıl bulacak? İlk araç: <code>id</code> attribute'u ile elemente <strong style="color:var(--color-text-primary);">benzersiz bir isim</strong> takmak. Bir id sayfada <strong>yalnızca bir kez</strong> kullanılır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label kod">KOD · ismi bugün takıyoruz</div>
                        <pre class="html-kod" style="font-size:0.72rem; flex:1; margin:0;"><span class="t">&lt;section</span> <span class="a">id</span>=<span class="v">"hakkimda"</span><span class="t">&gt;</span>
  ...
<span class="t">&lt;/section&gt;</span>

<span class="t">&lt;section</span> <span class="a">id</span>=<span class="v">"iletisim"</span><span class="t">&gt;</span>
  ...
<span class="t">&lt;/section&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:8px 0 0;">Bonus: <code>href="#iletisim"</code> bağlantısı sayfayı doğrudan bu bölüme kaydırır. id'nin ilk işe yaradığı yer; CSS'e bile gerek yok.</p>
                    </div>
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label cikti">SIRADAKİ DERSTEN TADIMLIK · isim böyle çağrılır</div>
                        <pre class="html-kod" style="font-size:0.72rem; margin:0;"><span style="color:#d4ff00;">#iletisim</span> {
  background: gold;
}</pre>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:column; gap:6px; margin-top:8px;">
                            <div style="padding:8px 10px; border:1px dashed #d1d5db; border-radius:6px; font-size:12px; color:#374151;">Hakkımda bölümü · değişmedi</div>
                            <div style="padding:8px 10px; border:1px dashed #d1d5db; border-radius:6px; font-size:12px; color:#374151; background:gold;">İletişim bölümü · tek kural yalnızca bunu boyadı</div>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:8px 0 0;">CSS, id'yi başına <strong style="color:var(--color-text-secondary);">#</strong> koyarak çağırır. Şimdilik bu kadarı yeter: isim bugünün işi, stil haftaya.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Öğrenci Numarası</h4>
                    <p><code>id</code> öğrenci numarası gibidir: herkese özel, tek. İki kişiye aynı numara verilmez; iki elemente de aynı id verilmez.</p>
                </div>
            `
        },

        // Slide 20: class
        {
            id: "class-attr",
            category: "Bölüm 4: id ve class",
            title: "class: Tür İsmi",
            html: `
                <p class="vcd-content-intro"><code>id</code> tek elemente özeldi. Peki üç proje kartının <strong style="color:var(--color-text-primary);">üçünü birden</strong> hedeflemek istersek? İkinci araç: <code>class</code>, istenildiği kadar elemente verilebilen tür ismidir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label kod">KOD · aynı isim, üç kart</div>
                        <pre class="html-kod" style="font-size:0.72rem; flex:1; margin:0;"><span class="t">&lt;article</span> <span class="a">class</span>=<span class="v">"proje-karti"</span><span class="t">&gt;</span>Afiş Serisi<span class="t">&lt;/article&gt;</span>
<span class="t">&lt;article</span> <span class="a">class</span>=<span class="v">"proje-karti"</span><span class="t">&gt;</span>Logo Çalışması<span class="t">&lt;/article&gt;</span>
<span class="t">&lt;article</span> <span class="a">class</span>=<span class="v">"proje-karti one-cikan"</span><span class="t">&gt;</span>Dergi Kapağı<span class="t">&lt;/article&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:8px 0 0;">Üçüncü karta dikkat: boşlukla ayrılan her kelime ayrı bir class. Bu kart hem <code>proje-karti</code> hem <code>one-cikan</code>.</p>
                    </div>
                    <div style="display:flex; flex-direction:column;">
                        <div class="pane-label cikti">SIRADAKİ DERSTEN TADIMLIK · isimler böyle çağrılır</div>
                        <pre class="html-kod" style="font-size:0.72rem; margin:0;"><span style="color:#d4ff00;">.proje-karti</span> {
  border: 2px solid orange;
}
<span style="color:#d4ff00;">.one-cikan</span> {
  background: gold;
}</pre>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:column; gap:6px; margin-top:8px;">
                            <div style="padding:7px 10px; border:2px solid orange; border-radius:6px; font-size:12px; color:#374151;">Afiş Serisi</div>
                            <div style="padding:7px 10px; border:2px solid orange; border-radius:6px; font-size:12px; color:#374151;">Logo Çalışması</div>
                            <div style="padding:7px 10px; border:2px solid orange; border-radius:6px; font-size:12px; color:#374151; background:gold;">Dergi Kapağı · iki class, iki kural</div>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:8px 0 0;">CSS, class'ı başına <strong style="color:var(--color-text-secondary);">.</strong> (nokta) koyarak çağırır. İlk kural üç kartı birden giydirdi; üçüncü kart iki class taşıdığı için ikinci kuralı da aldı.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Bölüm Adı</h4>
                    <p><code>class</code> bölüm adı gibidir: aynı bölümde birçok öğrenci olabilir, bir öğrenci çift anadal da yapabilir (iki class). Kısa özet: <strong>id bir kez, # ile çağrılır · class sınırsız, . ile çağrılır.</strong></p>
                </div>
            `
        },

        // Slide 21: Adlandırma alışkanlıkları
        {
            id: "adlandirma",
            category: "Bölüm 4: id ve class",
            title: "İyi İsim, Kötü İsim",
            html: `
                <p class="vcd-content-intro">İsimleri takmayı ve CSS'in onları nasıl çağıracağını gördük. İsim bir kez verilir, sonra her yerde kullanılır; baştan iyi alışkanlık edinelim:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px; border-color:rgba(39,166,68,0.3);">
                        <span class="kod-durum dogru">✓ İçeriği anlatan</span>
                        <pre class="html-kod" style="font-size:0.74rem; margin:0;"><span class="a">class</span>=<span class="v">"proje-karti"</span>
<span class="a">class</span>=<span class="v">"ana-menu"</span>
<span class="a">id</span>=<span class="v">"iletisim"</span></pre>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Ne olduğunu söyler. Tasarım değişse de isim geçerli kalır.</p>
                    </div>
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px; border-color:rgba(239,68,68,0.3);">
                        <span class="kod-durum yanlis">✕ Görünüşü anlatan / anlamsız</span>
                        <pre class="html-kod" style="font-size:0.74rem; margin:0;"><span class="a">class</span>=<span class="v">"kirmizi-kutu"</span>
<span class="a">class</span>=<span class="v">"div1"</span>
<span class="a">id</span>=<span class="v">"Yeni Bölüm"</span></pre>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Kutu maviye dönerse "kirmizi-kutu" yalan söyler. "div1" hiçbir şey söylemez. Boşluk ve Türkçe karakter ise teknik sorun çıkarır.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">✍️</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Kural dosya adlarıyla aynı: <strong>küçük harf, Türkçe karakter yok, boşluk yerine tire</strong>. <code>proje-karti</code> ✓ &nbsp;·&nbsp; <code>Proje Kartı</code> ✕</span>
                </div>
            `
        },

        // ============================================================
        // TASARIM GÖZÜ (köşe açılışı)
        // ============================================================

        // Slide 22: Tasarım Gözü açılışı
        {
            id: "tg-acilis",
            category: "Tasarım Gözü",
            title: "Yeni Köşemiz: Tasarım Gözü",
            className: "slide-center-composite",
            html: `
                <p class="vcd-content-intro" style="max-width:none;">Bu dersten itibaren her destenin sonunda kısa bir köşemiz var: <strong style="color:var(--color-primary);">Tasarım Gözü</strong>. Kod yazmayı öğrenirken tasarımcı gözünü de web'e alıştıracağız: her hafta tek bir UI/UX ilkesi, derine inmeden, o haftanın tekniğine bağlanarak.</p>
                <div class="vcd-grid-3" style="margin-top:0; margin-bottom:16px;">
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-size:1.4rem; margin-bottom:6px;">👁️</div>
                        <strong style="color:var(--color-text-primary); font-size:0.88rem; display:block; margin-bottom:4px;">Neden?</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Kod yazmayı bilen çok; <strong>neyin iyi göründüğünü ve iyi çalıştığını</strong> bilen az. Görsel iletişim tasarımcısının avantajı, bu ikisini birleştirebilmek.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-size:1.4rem; margin-bottom:6px;">📏</div>
                        <strong style="color:var(--color-text-primary); font-size:0.88rem; display:block; margin-bottom:4px;">Format</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Her hafta: ilkenin tanımı, kötü/iyi bir karşılaştırma ve haftanın koduyla bağı. Kısa ve öz.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; border-color:rgba(212,255,0,0.35);">
                        <div style="font-size:1.4rem; margin-bottom:6px;">🎬</div>
                        <strong style="color:var(--color-primary); font-size:0.88rem; display:block; margin-bottom:4px;">Bugünün menüsü</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">UI ile UX'in farkı, görsel hiyerarşi ve kullanıcıların sayfayı tarama biçimi (F-pattern).</p>
                    </div>
                </div>
                <p style="font-size:0.78rem; color:var(--color-text-muted); text-align:center; margin:0;">Dönem sonunda bu köşenin ilkeleri, portfolyoyu eleştirel gözle değerlendirmenin araç seti olacak.</p>
            `
        },

        // Slide 23: UI vs UX
        {
            id: "tg-ui-ux",
            category: "Tasarım Gözü",
            title: "UI ve UX: İki Kavram, Bir Karmaşa",
            html: `
                <div class="uiux-soru" style="cursor:pointer; min-height:340px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:24px; border:1px dashed rgba(212,255,0,0.35); border-radius:14px; padding:30px; text-align:center;">
                    <div style="display:flex; align-items:center; gap:20px;">
                        <span style="font-size:2.8rem; font-weight:800; letter-spacing:-0.02em; color:var(--color-primary);">UI</span>
                        <span style="font-size:1.1rem; color:var(--color-text-muted);">vs</span>
                        <span style="font-size:2.8rem; font-weight:800; letter-spacing:-0.02em; color:var(--color-secondary);">UX</span>
                    </div>
                    <p style="font-size:1.4rem; color:var(--color-text-primary); line-height:1.5; margin:0;">Aradaki fark nedir?</p>
                </div>
                <div class="uiux-icerik" style="display:none;">
                <div class="vcd-grid-2" style="align-items:stretch;">
                    <div class="vcd-glass-card primary" style="display:flex; flex-direction:column; gap:8px;">
                        <strong style="color:var(--color-primary); font-size:0.95rem;">UI · User Interface (Kullanıcı Arayüzü)</strong>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Ekranda <strong>görünen</strong> her şey: butonlar, tipografi, renkler, ikonlar, boşluklar. "Nasıl görünüyor?"</p>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); margin:0;">Bölümün ana sahası: grafik tasarım birikiminin web'deki karşılığı büyük ölçüde UI.</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="display:flex; flex-direction:column; gap:8px;">
                        <strong style="color:var(--color-secondary); font-size:0.95rem;">UX · User Experience (Kullanıcı Deneyimi)</strong>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Site kullanılırken <strong>yaşanan</strong> her şey: aradığını bulabilmek, hız, akış, his. "Nasıl hissettiriyor?"</p>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); margin:0;">Görünmez ama her kararda var: menü nereye, içerik hangi sırayla, kaç tıkla?</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Restoran Benzetmesi</h4>
                    <p><strong>UI</strong>, menünün grafik tasarımı ve tabağın sunumudur. <strong>UX</strong> ise bütün akşamdır: rezervasyon kolay mıydı, garson ilgili miydi, hesap şeffaf mıydı? Tabak ne kadar güzel olursa olsun, bir saat servis bekleyen müşteri mutsuz ayrılır.</p>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">⚖️</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Çok şık ama menüsü bulunamayan bir site: <strong>iyi UI, kötü UX</strong>. Çirkin ama her şeyi iki tıkta bulduran site: kötü UI, iyi UX. Hedef ikisi birden.</span>
                </div>
                </div>
            `,
            onRender: (slideEl) => {
                const soru = slideEl.querySelector('.uiux-soru');
                const icerik = slideEl.querySelector('.uiux-icerik');
                if (!soru || !icerik) return;
                soru.addEventListener('click', (e) => {
                    e.stopPropagation();
                    soru.style.display = 'none';
                    icerik.style.display = 'block';
                });
            }
        },

        // Slide 24: Görsel hiyerarşi
        {
            id: "tg-hiyerarsi",
            category: "Tasarım Gözü",
            title: "Görsel Hiyerarşi: Göze Yol Göstermek",
            html: `
                <p class="vcd-content-intro"><strong style="color:var(--color-text-primary);">Görsel hiyerarşi</strong>, izleyicinin gözüne "önce buna, sonra şuna bak" demektir. Araçları tanıdık: <strong>boyut, kontrast, konum, boşluk</strong>. Aynı duyuru, iki kurgu:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div class="pane-label" style="color:#fca5a5;">✕ Hiyerarşi yok · her şey eşit bağırıyor</div>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:column; gap:6px; justify-content:center;">
                            <div style="font-size:14px; color:#333;">BAHAR SERGİSİ AÇILIYOR</div>
                            <div style="font-size:14px; color:#333;">14 MART CUMA SAAT 18.00</div>
                            <div style="font-size:14px; color:#333;">GİT GALERİ KATINDA HERKES DAVETLİDİR</div>
                            <div style="font-size:14px; color:#333;">GİRİŞ ÜCRETSİZDİR KAYIT GEREKMEZ</div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div class="pane-label" style="color:var(--color-primary);">✓ Hiyerarşi var · göz sırayla geziyor</div>
                        <div class="html-cikti" style="flex:1; display:flex; flex-direction:column; gap:4px; justify-content:center;">
                            <div style="font-size:24px; font-weight:800; color:#111;">Bahar Sergisi</div>
                            <div style="font-size:15px; font-weight:600; color:#374151;">14 Mart Cuma · 18.00</div>
                            <div style="font-size:12px; color:#6b7280;">GİT galeri katında, herkes davetlidir.</div>
                            <div style="font-size:11px; color:#9ca3af;">Giriş ücretsizdir, kayıt gerekmez.</div>
                        </div>
                    </div>
                </div>
                <p style="font-size:0.78rem; color:var(--color-text-muted); margin-top:12px; text-align:center;">İçerik birebir aynı. Sağda göz bir saniyede ne, ne zaman, nerede sırasını alıyor; solda her satırı okumak zorunda.</p>
            `
        },

        // Slide 25: F-pattern
        {
            id: "tg-f-pattern",
            category: "Tasarım Gözü",
            title: "Kullanıcı Okumaz, Tarar: F-Pattern",
            html: `
                <div class="vcd-grid-2" style="align-items:center;">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom:12px;">Eye tracking (göz izleme) çalışmalarının klasik bulgusu: kullanıcılar web sayfasını satır satır okumaz, <strong style="color:var(--color-text-primary);">F harfi çizerek tarar</strong>:</p>
                        <ul class="vcd-bullet-list" style="gap:8px;">
                            <li style="font-size:0.84rem;"><strong>Üst satırlar:</strong> sayfanın başını yatay olarak okur.</li>
                            <li style="font-size:0.84rem;"><strong>İkinci yatay:</strong> biraz aşağıda daha kısa bir tarama.</li>
                            <li style="font-size:0.84rem;"><strong>Sol kenar:</strong> sonra sol kenardan aşağı kayar, satır başlarına bakar.</li>
                        </ul>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin-top:12px;">Çıkarım: en önemli mesaj <strong style="color:var(--color-text-primary);">üstte ve satır başlarında</strong> olmalı. Sayfanın sağ altına gömülen şey, çoğu göz için yok demektir.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-size:0.62rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-text-muted); font-weight:700; margin-bottom:10px;">Isı haritası · koyu = çok bakılan</div>
                        <div style="display:flex; flex-direction:column; gap:6px;">
                            <div style="height:14px; border-radius:4px; background:linear-gradient(90deg, rgba(212,255,0,0.85), rgba(212,255,0,0.55) 70%, rgba(212,255,0,0.15));"></div>
                            <div style="height:10px; border-radius:4px; background:rgba(255,255,255,0.07); width:88%;"></div>
                            <div style="height:14px; border-radius:4px; background:linear-gradient(90deg, rgba(212,255,0,0.7), rgba(212,255,0,0.35) 45%, rgba(212,255,0,0.06) 70%); width:92%;"></div>
                            <div style="height:10px; border-radius:4px; background:rgba(255,255,255,0.07); width:85%;"></div>
                            <div style="display:flex; gap:6px;"><div style="width:22%; height:10px; border-radius:4px; background:rgba(212,255,0,0.55);"></div><div style="flex:1; height:10px; border-radius:4px; background:rgba(255,255,255,0.07);"></div></div>
                            <div style="display:flex; gap:6px;"><div style="width:22%; height:10px; border-radius:4px; background:rgba(212,255,0,0.45);"></div><div style="flex:1; height:10px; border-radius:4px; background:rgba(255,255,255,0.07);"></div></div>
                            <div style="display:flex; gap:6px;"><div style="width:22%; height:10px; border-radius:4px; background:rgba(212,255,0,0.35);"></div><div style="flex:1; height:10px; border-radius:4px; background:rgba(255,255,255,0.07);"></div></div>
                            <div style="display:flex; gap:6px;"><div style="width:22%; height:10px; border-radius:4px; background:rgba(212,255,0,0.25);"></div><div style="flex:1; height:10px; border-radius:4px; background:rgba(255,255,255,0.07);"></div></div>
                        </div>
                        <p style="font-size:0.7rem; color:var(--color-text-muted); margin:10px 0 0; text-align:center;">Tarama yoğunluğu F şeklini çiziyor</p>
                    </div>
                </div>
            `
        },

        // Slide 26: Bağ — semantic = hiyerarşinin iskeleti
        {
            id: "tg-bag",
            category: "Tasarım Gözü",
            title: "Bugünün Koduna Bağlayalım",
            html: `
                <p class="vcd-content-intro">Bu üç kavram bugünkü konunun ta kendisi: <strong style="color:var(--color-text-primary);">semantic yapı, hiyerarşinin koddaki karşılığıdır.</strong> Üç eşleşme:</p>
                <div style="display:flex; flex-direction:column; gap:10px; margin-top:0;">
                    <div class="vcd-glass-card" style="padding:14px 18px; display:flex; align-items:center; gap:16px;">
                        <span style="font-size:0.8rem; color:var(--color-text-secondary); flex:1; line-height:1.5;"><strong style="color:var(--color-text-primary);">Görsel hiyerarşi</strong> başlık kademeleriyle başlar: en önemli mesaj büyük, detay küçük.</span>
                        <span style="color:var(--color-text-muted);">↔</span>
                        <span style="font-family:'JetBrains Mono',monospace; font-size:0.76rem; color:var(--color-primary); flex-shrink:0;">h1 &gt; h2 &gt; h3 sırası</span>
                    </div>
                    <div class="vcd-glass-card" style="padding:14px 18px; display:flex; align-items:center; gap:16px;">
                        <span style="font-size:0.8rem; color:var(--color-text-secondary); flex:1; line-height:1.5;"><strong style="color:var(--color-text-primary);">F-pattern</strong> en önemli içeriği üste ister: kimlik ve yön bulma sayfanın başında.</span>
                        <span style="color:var(--color-text-muted);">↔</span>
                        <span style="font-family:'JetBrains Mono',monospace; font-size:0.76rem; color:var(--color-primary); flex-shrink:0;">header + nav üstte</span>
                    </div>
                    <div class="vcd-glass-card" style="padding:14px 18px; display:flex; align-items:center; gap:16px;">
                        <span style="font-size:0.8rem; color:var(--color-text-secondary); flex:1; line-height:1.5;"><strong style="color:var(--color-text-primary);">İyi UX</strong> alışkanlıklara saygıdır: kullanıcı menüyü üstte, iletişimi altta bulmaya alışkın.</span>
                        <span style="color:var(--color-text-muted);">↔</span>
                        <span style="font-family:'JetBrains Mono',monospace; font-size:0.76rem; color:var(--color-primary); flex-shrink:0;">bölgelerin geleneksel yeri</span>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Bir de Görünmeyen Okur Var</h4>
                    <p>Ekran okuyucular ve arama motorları da sayfayı "tarar"; onların F-pattern'i, kurulan etiket ağacıdır. Semantic yapı, görmeyen göz için kurulmuş görsel hiyerarşidir.</p>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 5: UYGULAMA
        // ============================================================

        // Slide 27: Mini pratik — iskeleti kur
        {
            id: "mini-pratik",
            category: "Bölüm 5: Uygulama",
            title: "Mini Pratik: Semantic İskelet",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <div style="display:flex; gap:16px; align-items:flex-start; flex-shrink:0;">
                        <p class="vcd-content-intro" style="margin:0; flex:1;">Bugünün pratiği: geçen dersteki "kendini tanıt" içeriğini <strong style="color:var(--color-text-primary);">semantic iskelete</strong> taşımak. Şablondaki içerik kişiselleştirilir ve sayfaya bir <strong>İletişim section'ı</strong> eklenir.</p>
                        <div class="vcd-analogy-box" style="flex:0 0 270px; margin:0;">
                            <h4>Hâlâ stilsiz, hâlâ normal</h4>
                            <p style="font-size:0.78rem;">Görünüm geçen haftadan farksız; değişen şey kodun anlamı. Giysi sıradaki derste geliyor.</p>
                        </div>
                    </div>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch;">
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label kod">Şablon · düzenlenebilir ✏️</div>
                            <textarea class="html-editor pratik-src" spellcheck="false" style="flex:1; min-height:170px;">&lt;header&gt;
  &lt;h1&gt;Adın Soyadın&lt;/h1&gt;
  &lt;nav&gt;
    &lt;a href="#hakkimda"&gt;Hakkımda&lt;/a&gt;
    &lt;a href="#isler"&gt;İşlerim&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section id="hakkimda"&gt;
    &lt;h2&gt;Hakkımda&lt;/h2&gt;
    &lt;p&gt;Bir cümleyle kendini anlat.&lt;/p&gt;
  &lt;/section&gt;

  &lt;section id="isler"&gt;
    &lt;h2&gt;İşlerim&lt;/h2&gt;
    &lt;article&gt;
      &lt;h3&gt;Proje adı&lt;/h3&gt;
      &lt;p&gt;Bir cümleyle proje.&lt;/p&gt;
    &lt;/article&gt;
  &lt;/section&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;© 2026 · Adın&lt;/p&gt;
&lt;/footer&gt;</textarea>
                        </div>
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label cikti">Önizleme · canlı</div>
                            <iframe class="html-live-frame pratik-out" title="İskelet önizleme" style="flex:1; min-height:170px;"></iframe>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const ta = slideEl.querySelector('.pratik-src');
                const frame = slideEl.querySelector('.pratik-out');
                if (!ta || !frame) return;
                const render = () => { frame.srcdoc = ta.value; };
                ta.addEventListener('keydown', (e) => e.stopPropagation());
                ta.addEventListener('input', render);
                render();
            }
        },

        // Slide 28: Kapanış soruları (tıkla → cevap)
        {
            id: "yansitma",
            category: "Bölüm 5: Uygulama",
            title: "Kapanış: Üç Soru",
            className: "slide-center-composite",
            html: `
                <p class="vcd-content-intro" style="max-width:none;">Deste kapanmadan önce üç kısa soru. Önce düşünüp tartışmaya, sonra karta tıklayıp cevapla karşılaştırmaya değer:</p>
                <div style="display:flex; flex-direction:column; gap:12px; max-width:720px; margin:0 auto; width:100%;">
                    <div class="soru-kart vcd-glass-card" style="padding:14px 20px; text-align:left; cursor:pointer;">
                        <div style="display:flex; gap:14px; align-items:center;">
                            <span style="font-size:1.2rem; flex-shrink:0;">🤔</span>
                            <p style="font-size:0.92rem; color:var(--color-text-primary); line-height:1.5; margin:0; flex:1;"><code>section</code> ile <code>article</code> arasında kararsız kalmak sorun mu?</p>
                            <span class="soru-ok" style="color:var(--color-text-muted); font-size:0.76rem; flex-shrink:0;">▾ cevap</span>
                        </div>
                        <p class="soru-cevap" style="display:none; font-size:0.84rem; color:var(--color-text-secondary); line-height:1.6; margin:10px 0 0; padding-top:10px; border-top:1px solid var(--border-light);">Hayır; bu ayrımda deneyimliler bile durup düşünür. Kopar-paylaş testi çoğu zaman karar verdirir; vermediğinde iki seçim de kabul edilir. Anlamlı bir etiket seçilmişse iş doğru yapılmıştır.</p>
                    </div>
                    <div class="soru-kart vcd-glass-card" style="padding:14px 20px; text-align:left; cursor:pointer;">
                        <div style="display:flex; gap:14px; align-items:center;">
                            <span style="font-size:1.2rem; flex-shrink:0;">🎩</span>
                            <p style="font-size:0.92rem; color:var(--color-text-primary); line-height:1.5; margin:0; flex:1;"><code>&lt;head&gt;</code> ile <code>&lt;header&gt;</code> aynı şeyin kısaltması mı?</p>
                            <span class="soru-ok" style="color:var(--color-text-muted); font-size:0.76rem; flex-shrink:0;">▾ cevap</span>
                        </div>
                        <p class="soru-cevap" style="display:none; font-size:0.84rem; color:var(--color-text-secondary); line-height:1.6; margin:10px 0 0; padding-top:10px; border-top:1px solid var(--border-light);">Hayır; isim benzerliği bir tuzak. <code>head</code> geçen dersten: sayfanın görünmeyen bilgi bölümü, tarayıcıya ve arama motoruna konuşur. <code>header</code> ise bugünden: sayfada gözle görülen üst bölge. Biri perde arkası, öteki sahnenin üst katı.</p>
                    </div>
                    <div class="soru-kart vcd-glass-card" style="padding:14px 20px; text-align:left; cursor:pointer;">
                        <div style="display:flex; gap:14px; align-items:center;">
                            <span style="font-size:1.2rem; flex-shrink:0;">🧭</span>
                            <p style="font-size:0.92rem; color:var(--color-text-primary); line-height:1.5; margin:0; flex:1;">Sayfadaki her bağlantı grubu <code>&lt;nav&gt;</code> içine mi girmeli?</p>
                            <span class="soru-ok" style="color:var(--color-text-muted); font-size:0.76rem; flex-shrink:0;">▾ cevap</span>
                        </div>
                        <p class="soru-cevap" style="display:none; font-size:0.84rem; color:var(--color-text-secondary); line-height:1.6; margin:10px 0 0; padding-top:10px; border-top:1px solid var(--border-light);">Hayır; <code>nav</code> sitenin <strong>ana yön bulma</strong> aracıdır: üst menü gibi. Footer'daki sosyal medya bağlantıları ya da metin içindeki birkaç link, nav olmadan da bağlantıdır. Ekran okuyucu "menüye atla" dediğinde tek ve net bir menüye gitmek ister; her köşe nav olursa bu komut anlamını yitirir.</p>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                slideEl.querySelectorAll('.soru-kart').forEach((kart) => {
                    kart.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const cevap = kart.querySelector('.soru-cevap');
                        const ok = kart.querySelector('.soru-ok');
                        if (!cevap) return;
                        const acik = cevap.style.display !== 'none';
                        cevap.style.display = acik ? 'none' : 'block';
                        if (ok) ok.textContent = acik ? '▾ cevap' : '▴ kapat';
                    });
                });
            }
        },

        // Slide 29: Köprü — CSS geliyor
        {
            id: "css-koprusu",
            category: "Bölüm 5: Uygulama",
            title: "İskelet Hazır. Sırada Giysi Var",
            html: `
                <p class="vcd-content-intro">Artık sayfa anlamlı bölgelerden oluşuyor ve her bölgenin <strong style="color:var(--color-text-primary);">ismi var</strong> (etiketler, id'ler, class'lar). Sıradaki derste CSS bu isimleri tek tek çağırıp giydirecek.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div class="pane-label" style="color:var(--color-text-muted);">Bugün · anlamlı iskelet</div>
                        <div class="html-cikti" style="flex:1;"><h1 style="font-size:1.3em;">Adın Soyadın</h1><p><a href="#">Hakkımda</a> <a href="#">İşlerim</a></p><h2 style="font-size:1.1em;">İşlerim</h2><p>Afiş Serisi: sergi için 3 afiş.</p></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div class="pane-label" style="color:var(--color-accent);">İleride · aynı iskelet, CSS ile</div>
                        <div style="flex:1; border-radius:10px; padding:16px; background:linear-gradient(135deg, rgba(212, 255, 0,0.18), rgba(2, 184, 204,0.12)); border:1px solid rgba(212, 255, 0,0.3); display:flex; flex-direction:column; gap:8px;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <div style="font-size:1.1rem; font-weight:700; background:linear-gradient(135deg,#fff,var(--color-secondary)); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">Adın Soyadın</div>
                                <div style="display:flex; gap:8px; font-size:0.62rem; color:var(--color-text-secondary);"><span>Hakkımda</span><span>İşlerim</span></div>
                            </div>
                            <div style="display:flex; gap:6px; margin-top:4px;">
                                <div style="flex:1; border-radius:8px; background:rgba(255,255,255,0.07); border:1px solid var(--border-light); padding:10px;"><div style="font-size:0.68rem; font-weight:600; color:var(--color-text-primary);">Afiş Serisi</div><div style="font-size:0.6rem; color:var(--color-text-muted); margin-top:3px;">3 afiş, 2026</div></div>
                                <div style="flex:1; border-radius:8px; background:rgba(255,255,255,0.07); border:1px solid var(--border-light); padding:10px;"><div style="font-size:0.68rem; font-weight:600; color:var(--color-text-primary);">Logo Çalışması</div><div style="font-size:0.6rem; color:var(--color-text-muted); margin-top:3px;">Kafe kimliği</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="font-size:0.78rem; color:var(--color-text-muted); text-align:center; margin-top:10px;">İyi kurulmuş iskelet CSS'i kolaylaştırır: giydirilecek her parça adıyla çağrılır.</p>
                <div style="display:flex; align-items:center; justify-content:center; gap:16px; margin-top:14px; flex-wrap:wrap;">
                    <span class="ileri-pin"><span style="font-size:0.8rem;">→</span> Sıradaki: <strong style="color:var(--color-text-primary);">CSS Temelleri</strong></span>
                    <span class="ileri-pin" style="color:var(--color-accent); background:rgba(139, 92, 246,0.07); border-color:rgba(139, 92, 246,0.25);"><span style="font-size:0.8rem;">🎯</span> Hedef: <strong style="color:var(--color-text-primary);">dönem sonu canlı portfolyo</strong></span>
                </div>
            `
        }

    ]
};
