/**
 * ==========================================================================
 * WEEK 2 MODULE: HTML Temelleri (Görsel İletişim Tasarımı Odaklı)
 * Uygulamalı Seri · Ders 1 / 8 — İlk kez kod yazanlar için
 * ==========================================================================
 *
 * Bu deste "2. Hafta: Web Tasarımına Giriş" genel bakışının DEVAMIDIR.
 * Odak: yalnızca HTML. CSS öğretimi YOK (o Ders 3). Sonu, stilsiz bir
 * "kendini tanıt" mini pratiği ve CSS köprüsüdür. Tam portfolyo = final (Ders 8).
 *
 * Stil/desen referansı: week1.js (vcd-* + playgrounds.css yardımcı sınıfları).
 * "Kod → Tarayıcı Çıktısı" örnekleri .html-kod / .html-cikti sınıflarını kullanır;
 * çıktı paneli tarayıcının gerçek varsayılan görünümünü gösterir.
 */

export const week2 = {
    title: "3. Hafta: HTML Temelleri",
    slides: [

        // Slide 1: Karşılama (Hero)
        {
            id: "giris",
            title: "HTML Temelleri",
            subtitle: "Görsel İletişim Tasarımı · 3. Hafta · İlk kodumuzu yazıyoruz",
            type: "hero",
            html: `
                <div style="margin-top: 26px; display:flex; align-items:center; gap:20px; justify-content:center; flex-wrap:wrap;">
                    <div style="text-align:left;">
                        <div class="pane-label kod">Yazdığın</div>
                        <pre class="html-kod" style="font-size:0.95rem;"><span class="t">&lt;h1&gt;</span>Merhaba!<span class="t">&lt;/h1&gt;</span></pre>
                    </div>
                    <span style="font-size:1.9rem; color:var(--color-secondary); align-self:flex-end; padding-bottom:8px;">→</span>
                    <div style="text-align:left;">
                        <div class="pane-label cikti">Tarayıcının gösterdiği</div>
                        <div class="html-cikti" style="min-width:190px;"><h1>Merhaba!</h1></div>
                    </div>
                </div>
            `
        },

        // Slide 2: Hatırlatma — büyük resimden ilk tuğlaya
        {
            id: "hatirlatma",
            category: "Hatırlatma",
            title: "Üç Katmanın İlki: HTML",
            className: "slide-center-composite",
            html: `
                <p class="vcd-content-intro" style="max-width:none;">Genel bakışta web'in nasıl çalıştığını, nereden geldiğini ve <strong style="color:var(--color-text-primary);">üç katmandan</strong> oluştuğunu gördük. Bugün ilk katmanla, yani <strong style="color:#e34f26;">HTML</strong> ile başlıyoruz.</p>
                <div class="vcd-grid-3" style="margin-top:0; margin-bottom:16px;">
                    <div class="vcd-glass-card" style="padding:16px; border-color:rgba(227,79,38,0.35);">
                        <div style="font-size:1.4rem;margin-bottom:6px;">🧱</div>
                        <strong style="color:#e34f26; font-size:0.9rem; display:block; margin-bottom:4px;">HTML · bugün</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">İçerik ve yapı: başlıklar, paragraflar, listeler, görseller. Binanın iskeleti.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; opacity:0.65;">
                        <div style="font-size:1.4rem;margin-bottom:6px;">🎨</div>
                        <strong style="color:#0284c7; font-size:0.9rem; display:block; margin-bottom:4px;">CSS · sırada</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Görünüm: renk, tipografi, boşluk, hizalama. Boya ve mobilya.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; opacity:0.5;">
                        <div style="font-size:1.4rem;margin-bottom:6px;">⚡</div>
                        <strong style="color:#eab308; font-size:0.9rem; display:block; margin-bottom:4px;">JavaScript · sonra</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Etkileşim ve mantık. Asansör ve akıllı sistemler.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:0;">
                    <h4>Bugünün Sonunda</h4>
                    <p>Kendi bilgisayarınızda gerçek bir <code>.html</code> dosyası oluşturup, kendinizi tanıtan stilsiz ama <strong>çalışan</strong> bir web sayfası yazmış olacaksınız.</p>
                </div>
            `
        },

        // Slide 3: HTML Nedir? — işaretleme, programlama değil
        {
            id: "html-nedir",
            category: "Bölüm 1: Tag Mantığı",
            title: "HTML: Programlama Değil, Markup (İşaretleme)",
            html: `
                <div class="vcd-grid-2-1" style="align-items:center;">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom:12px;">
                            <strong style="color:var(--color-text-primary);">HTML</strong> = <em>HyperText Markup Language</em> (Köprü Metni İşaretleme Dili). Adındaki anahtar kelime <strong>markup</strong>: içeriği <strong style="color:var(--color-text-primary);">tag'lerle (etiketlerle)</strong> sararak tarayıcıya "bu bir başlıktır, bu bir paragraftır, bu bir görseldir" dersiniz.
                        </p>
                        <p style="font-size:0.88rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">
                            Karmaşık bir mantık, döngü ya da matematik yok. Bir editörün metni kırmızı kalemle işaretlemesi gibi: parçaları <strong>ne olduklarıyla</strong> adlandırırsınız. Bu yüzden HTML, koda ilk adım için en nazik yerdir.
                        </p>
                    </div>
                    <div class="vcd-glass-card primary" style="padding:16px;">
                        <div style="font-size:0.62rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-primary); font-weight:700; margin-bottom:10px;">Aynı metin, işaretlenmiş hâli</div>
                        <pre class="html-kod" style="font-size:0.72rem; margin:0;"><span class="t">&lt;h1&gt;</span>Sergi Açılışı<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;p&gt;</span>Bu cuma kapımız açık.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;ul&gt;</span>
  <span class="t">&lt;li&gt;</span>14 Mart<span class="t">&lt;/li&gt;</span>
<span class="t">&lt;/ul&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:10px 0 0;">Her parçayı "ne olduğuyla" sardık: başlık, paragraf, liste. Markup tam olarak budur.</p>
                    </div>
                </div>
            `
        },

        // Slide 4: Etiketin Anatomisi
        {
            id: "etiket-anatomisi",
            category: "Bölüm 1: Tag Mantığı",
            title: "Bir Tag'in (Etiket) Anatomisi",
            html: `
                <p class="vcd-content-intro">Neredeyse her HTML parçası üç bölümden oluşur. Bu üçlünün tamamına <strong style="color:var(--color-text-primary);">element (öğe)</strong> denir:</p>
                <div class="vcd-glass-card" style="padding:28px 20px; margin-top:0; display:flex; flex-direction:column; align-items:center; gap:8px;">
                    <div style="font-family:'JetBrains Mono',monospace; font-size:1.7rem; letter-spacing:1px; display:flex; align-items:flex-end;">
                        <span style="color:#818cf8;">&lt;p&gt;</span><span style="color:#fafafa; padding:0 6px;">Merhaba</span><span style="color:#818cf8;">&lt;/p&gt;</span>
                    </div>
                    <div style="display:flex; width:100%; max-width:420px; justify-content:space-between; font-size:0.7rem; color:var(--color-text-muted); padding:0 4px;">
                        <span style="text-align:center; flex:1;">↑</span>
                        <span style="text-align:center; flex:1;">↑</span>
                        <span style="text-align:center; flex:1;">↑</span>
                    </div>
                    <div style="display:flex; width:100%; max-width:440px; justify-content:space-between; gap:10px;">
                        <div style="flex:1; text-align:center;">
                            <div style="font-size:0.78rem; font-weight:600; color:#818cf8;">Açılış tag'i</div>
                            <div style="font-size:0.7rem; color:var(--color-text-secondary); margin-top:2px;">İçeriği başlatır</div>
                        </div>
                        <div style="flex:1; text-align:center;">
                            <div style="font-size:0.78rem; font-weight:600; color:#fafafa;">İçerik</div>
                            <div style="font-size:0.7rem; color:var(--color-text-secondary); margin-top:2px;">Görünen metin/öge</div>
                        </div>
                        <div style="flex:1; text-align:center;">
                            <div style="font-size:0.78rem; font-weight:600; color:#818cf8;">Kapanış tag'i</div>
                            <div style="font-size:0.7rem; color:var(--color-text-secondary); margin-top:2px;">Eğik çizgi <code>/</code> ile biter</div>
                        </div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Püf Noktası</h4>
                    <p>Kapanış tag'i, açılış tag'inin aynısıdır; tek farkı baştaki eğik çizgi: <code>&lt;p&gt;</code> açar, <code>&lt;/p&gt;</code> kapatır. Tarayıcı, içeriğin nerede bittiğini bu çizgiden anlar.</p>
                </div>
            `
        },

        // Slide 5: Açılır-Kapanır ve Kendiliğinden Kapanan Etiketler
        {
            id: "acilir-kapanir",
            category: "Bölüm 1: Tag Mantığı",
            title: "Çiftli ve Tekli Tag'ler",
            html: `
                <div class="vcd-grid-2" style="align-items:stretch;">
                    <div class="vcd-glass-card primary" style="display:flex; flex-direction:column; gap:10px;">
                        <strong style="color:var(--color-primary); font-size:0.95rem;">Çiftli (açılır + kapanır)</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Tag'lerin çoğu çift gelir: bir açılış, bir kapanış. Arasındaki her şey o tag'e aittir.</p>
                        <pre class="html-kod" style="font-size:0.74rem;"><span class="t">&lt;h1&gt;</span>Başlık<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;p&gt;</span>Bir paragraf.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;strong&gt;</span>Kalın<span class="t">&lt;/strong&gt;</span></pre>
                    </div>
                    <div class="vcd-glass-card secondary" style="display:flex; flex-direction:column; gap:10px;">
                        <strong style="color:var(--color-secondary); font-size:0.95rem;">Tekli (kendiliğinden kapanan)</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Bazı tag'lerin içeriği yoktur, tek başına iş görürler. Kapanış tag'i yazılmaz.</p>
                        <pre class="html-kod" style="font-size:0.74rem;"><span class="c">&lt;!-- görsel --&gt;</span>
<span class="t">&lt;img</span> <span class="a">src</span>=<span class="v">"foto.jpg"</span><span class="t">&gt;</span>
<span class="c">&lt;!-- satır sonu --&gt;</span>
<span class="t">&lt;br&gt;</span>
<span class="c">&lt;!-- yatay çizgi --&gt;</span>
<span class="t">&lt;hr&gt;</span></pre>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">💡</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Çoğu hata "kapanışı unutmaktan" çıkar. İlk refleksiniz: bir tag açtıysanız, hemen kapanışını da yazın, sonra arasını doldurun.</span>
                </div>
            `
        },

        // Slide 6: Attribute (Öznitelik)
        {
            id: "attribute",
            category: "Bölüm 1: Tag Mantığı",
            title: "Attribute (Öznitelik): Tag'e Ek Bilgi",
            html: `
                <p class="vcd-content-intro">Bazı tag'lerin ekstra bilgiye ihtiyacı vardır: bir bağlantı <em>nereye</em> gider, bir görsel <em>hangi dosyadır</em>? Bu bilgiyi <strong style="color:var(--color-text-primary);">attribute'ler (öznitelikler)</strong> taşır ve daima <strong>açılış tag'inin içine</strong> yazılır.</p>
                <div class="vcd-glass-card" style="padding:26px 20px; margin-top:0; display:flex; flex-direction:column; align-items:center; gap:14px;">
                    <div style="font-family:'JetBrains Mono',monospace; font-size:1.35rem;">
                        <span style="color:#818cf8;">&lt;a</span> <span style="color:#f59e0b; background:rgba(245,158,11,0.12); border-radius:4px; padding:1px 4px;">href</span><span style="color:#c8cad0;">=</span><span style="color:#34d399; background:rgba(52,211,153,0.1); border-radius:4px; padding:1px 4px;">"https://site.com"</span><span style="color:#818cf8;">&gt;</span>
                    </div>
                    <div style="display:flex; gap:40px; font-size:0.78rem;">
                        <div style="text-align:center;">
                            <div style="color:#f59e0b; font-weight:600;">attribute adı</div>
                            <div style="color:var(--color-text-secondary); margin-top:2px;">ne tür bilgi</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="color:#34d399; font-weight:600;">değer</div>
                            <div style="color:var(--color-text-secondary); margin-top:2px;">tırnak içinde</div>
                        </div>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px;">
                    <div style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">
                        <strong style="color:var(--color-text-primary);">Sık görülen örnekler:</strong>
                        <ul class="vcd-bullet-list" style="gap:5px; margin-top:6px;">
                            <li style="font-size:0.78rem;"><code>href</code> → bağlantının gideceği adres</li>
                            <li style="font-size:0.78rem;"><code>src</code> → görselin dosya yolu</li>
                            <li style="font-size:0.78rem;"><code>alt</code> → görselin metin açıklaması</li>
                        </ul>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                        <span style="font-size:1.1rem;">⚠️</span>
                        <span style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5;">Değeri <strong>tırnak içine</strong> almayı unutmayın: <code>href="..."</code>. Tırnaksız değer en sık başlangıç hatalarından.</span>
                    </div>
                </div>
            `
        },

        // Slide 7: İç İçe Geçme (Nesting)
        {
            id: "nesting",
            category: "Bölüm 1: Tag Mantığı",
            title: "Nesting (İç İçe Geçme): Doğru Sırayla Kapat",
            html: `
                <p class="vcd-content-intro">Tag'ler birbirinin içine girebilir. Tek kural: <strong style="color:var(--color-text-primary);">en son açılan, en önce kapanır.</strong> Tıpkı iç içe geçen kutular ya da parantezler gibi.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:10px; border-color:rgba(39, 166, 68,0.3);">
                        <span class="kod-durum dogru">✓ Doğru</span>
                        <pre class="html-kod" style="font-size:0.76rem;"><span class="t">&lt;p&gt;</span>Merhaba <span class="t">&lt;strong&gt;</span>dünya<span class="t">&lt;/strong&gt;</span><span class="t">&lt;/p&gt;</span></pre>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.5; margin:0;"><code>strong</code> en son açıldı, en önce kapandı. <code>p</code> dıştan sarmaya devam ediyor.</p>
                    </div>
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:10px; border-color:rgba(239,68,68,0.3);">
                        <span class="kod-durum yanlis">✕ Yanlış</span>
                        <pre class="html-kod" style="font-size:0.76rem;"><span class="t">&lt;p&gt;</span>Merhaba <span class="t">&lt;strong&gt;</span>dünya<span style="color:#fca5a5; text-decoration:line-through;">&lt;/p&gt;</span><span style="color:#fca5a5; text-decoration:line-through;">&lt;/strong&gt;</span></pre>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Tag'ler "çaprazlandı": <code>p</code>, <code>strong</code>'dan önce kapandı. Tarayıcı şaşırır.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Matruşka Kuralı</h4>
                    <p>İç içe Rus bebeklerini düşünün: en içe son koyduğunuzu, en önce çıkarırsınız. Tag'leri kapatırken de hep en içtekinden başlayın.</p>
                </div>
            `
        },

        // Slide 8: Tarayıcı Nasıl Okur? (DOM hatırlatma)
        {
            id: "tarayici-okur",
            category: "Bölüm 1: Tag Mantığı",
            title: "Tarayıcı Kodunuzu Nasıl Okur?",
            html: `
                <p class="vcd-content-intro">Tarayıcı dosyanızı <strong style="color:var(--color-text-primary);">yukarıdan aşağı</strong> okur, her tag'i bir kutuya çevirir ve aralarındaki iç içe ilişkiyi bir <strong>ağaca</strong> dizer (geçen hafta gördüğümüz DOM). Sonra bu ağacı ekrana çizer.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center;">
                    <div>
                        <div class="pane-label kod">Sizin yazdığınız</div>
                        <pre class="html-kod" style="font-size:0.74rem;"><span class="t">&lt;body&gt;</span>
  <span class="t">&lt;h1&gt;</span>Galeri<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;p&gt;</span>Hoş geldiniz.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;/body&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">Tarayıcının kurduğu ağaç</div>
                        <div class="vcd-glass-card" style="padding:12px;">
                            <div style="border:1px solid rgba(125,211,252,0.3); border-radius:7px; padding:6px 10px;">
                                <span style="font-family:monospace; font-size:0.7rem; color:#7dd3fc; font-weight:600;">body</span>
                                <div style="display:flex; gap:8px; margin:6px 0 0 12px;">
                                    <div style="flex:1; border:1px solid rgba(192,132,252,0.3); border-radius:6px; padding:5px 8px;">
                                        <div style="font-family:monospace; font-size:0.66rem; color:#c084fc; font-weight:600;">h1</div>
                                        <div style="font-size:0.6rem; color:var(--color-text-muted); font-style:italic;">"Galeri"</div>
                                    </div>
                                    <div style="flex:1; border:1px solid rgba(192,132,252,0.3); border-radius:6px; padding:5px 8px;">
                                        <div style="font-family:monospace; font-size:0.66rem; color:#c084fc; font-weight:600;">p</div>
                                        <div style="font-size:0.6rem; color:var(--color-text-muted); font-style:italic;">"Hoş geldiniz."</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="font-size:0.78rem; color:var(--color-text-muted); margin-top:12px; text-align:center;">Bu yüzden <strong style="color:var(--color-text-secondary);">sıralama</strong> ve <strong style="color:var(--color-text-secondary);">iç içe geçme</strong> önemlidir: ağacı siz kuruyorsunuz, tarayıcı sadece çiziyor.</p>
            `
        },

        // Slide 8.5 (YENİ): DevTools "Öğeyi İncele"
        {
            id: "devtools-incele",
            category: "Bölüm 1: Tag Mantığı",
            title: "Keşfet: Tarayıcıda \"Öğeyi İncele\"",
            html: `
                <p class="vcd-content-intro">Az önceki ağacı (DOM) <strong style="color:var(--color-text-primary);">canlı</strong> görebilirsiniz: her sitenin HTML'i size açıktır. Sayfada bir yere sağ tıklayıp <strong>"İncele"</strong> deyin; tarayıcının geliştirici araçları açılır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center;">
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div style="display:flex; gap:12px; align-items:flex-start;">
                            <span style="width:24px; height:24px; border-radius:50%; background:var(--color-primary); color:#0a0a0b; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; flex-shrink:0;">1</span>
                            <span style="font-size:0.83rem; color:var(--color-text-secondary); line-height:1.45;">Bir öğeye <strong>sağ tık → "İncele"</strong>. Kısayol: <code>F12</code> ya da <code>Cmd/Ctrl + Shift + I</code>.</span>
                        </div>
                        <div style="display:flex; gap:12px; align-items:flex-start;">
                            <span style="width:24px; height:24px; border-radius:50%; background:var(--color-primary); color:#0a0a0b; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; flex-shrink:0;">2</span>
                            <span style="font-size:0.83rem; color:var(--color-text-secondary); line-height:1.45;"><strong>Elements (Öğeler)</strong> sekmesinde sayfanın tüm HTML ağacı görünür.</span>
                        </div>
                        <div style="display:flex; gap:12px; align-items:flex-start;">
                            <span style="width:24px; height:24px; border-radius:50%; background:var(--color-primary); color:#0a0a0b; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; flex-shrink:0;">3</span>
                            <span style="font-size:0.83rem; color:var(--color-text-secondary); line-height:1.45;">Satırların üzerine gelin: ilgili parça sayfada <strong>vurgulanır</strong>. Kod ile görüntü arasındaki bağı canlı görürsünüz.</span>
                        </div>
                    </div>
                    <div style="border-radius:10px; overflow:hidden; border:1px solid rgba(255,255,255,0.12); background:#0f172a;">
                        <div style="display:flex; align-items:center; gap:10px; background:#1e293b; padding:6px 12px;">
                            <span style="font-size:0.66rem; color:#e2e8f0; font-weight:600;">Elements</span>
                            <span style="font-size:0.66rem; color:#64748b;">Console</span>
                            <span style="font-size:0.66rem; color:#64748b;">Network</span>
                        </div>
                        <pre class="html-kod" style="margin:0; border:none; border-radius:0; font-size:0.72rem; background:transparent; box-shadow:none;"><span class="t">&lt;body&gt;</span>
  <span style="background:rgba(212,255,0,0.16); border-radius:3px; padding:0 3px;"><span class="t">&lt;h1&gt;</span>Sergi Açılışı<span class="t">&lt;/h1&gt;</span></span>
  <span class="t">&lt;p&gt;</span>Bu cuma kapımız açık.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;/body&gt;</span></pre>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>En İyi Öğrenme Hilesi</h4>
                    <p>Beğendiğiniz bir siteyi inceleyin: hangi tag'leri nasıl kullanmışlar, kendi gözünüzle görün. Web'in tamamı, okunmayı bekleyen bir ders kitabıdır.</p>
                </div>
            `
        },

        // Slide 9: İlk Dosya — index.html
        {
            id: "ilk-dosya",
            category: "Bölüm 2: İlk Dosya",
            title: "İlk Dosyamız: index.html",
            html: `
                <div class="vcd-grid-2-1" style="align-items:start;">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom:12px;">Web sayfaları <code>.html</code> uzantılı düz metin dosyalarıdır. VS Code'da oluşturmak çok basit:</p>
                        <div style="display:flex; flex-direction:column; gap:10px;">
                            <div style="display:flex; gap:12px; align-items:flex-start;">
                                <span style="width:24px; height:24px; border-radius:50%; background:var(--color-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; flex-shrink:0;">1</span>
                                <span style="font-size:0.83rem; color:var(--color-text-secondary); line-height:1.45;">VS Code'da bir <strong>klasör</strong> açın (projeniz burada yaşayacak).</span>
                            </div>
                            <div style="display:flex; gap:12px; align-items:flex-start;">
                                <span style="width:24px; height:24px; border-radius:50%; background:var(--color-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; flex-shrink:0;">2</span>
                                <span style="font-size:0.83rem; color:var(--color-text-secondary); line-height:1.45;"><strong>Yeni dosya</strong> oluşturun ve adını <code>index.html</code> koyun.</span>
                            </div>
                            <div style="display:flex; gap:12px; align-items:flex-start;">
                                <span style="width:24px; height:24px; border-radius:50%; background:var(--color-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.72rem; font-weight:700; flex-shrink:0;">3</span>
                                <span style="font-size:0.83rem; color:var(--color-text-secondary); line-height:1.45;">İçine kod yazın, <code>Cmd/Ctrl + S</code> ile kaydedin.</span>
                            </div>
                        </div>
                    </div>
                    <div class="vcd-glass-card primary" style="padding:16px;">
                        <div style="font-size:0.62rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-primary); font-weight:700; margin-bottom:8px;">Neden "index"?</div>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin:0;"><code>index.html</code> sihirli bir isimdir: bir <strong>web sunucusu</strong>, klasöre gelen ziyaretçiyi <strong>varsayılan olarak</strong> bu dosyaya yönlendirir (Live Server da böyle). Yani sitenizin <strong style="color:var(--color-text-primary);">ana sayfasıdır</strong>.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">📁</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Dosya ve klasör adlarında <strong>Türkçe karakter, boşluk ve büyük harf kullanmayın</strong>: <code>index.html</code>, <code>hakkimda.html</code>, <code>foto-1.jpg</code> gibi. Web bunu sever.</span>
                </div>
            `
        },

        // Slide 10: İskelet (Boilerplate) — anatomi
        {
            id: "iskelet",
            category: "Bölüm 2: İlk Dosya",
            title: "Her Sayfanın İskeleti",
            html: `
                <p class="vcd-content-intro">Her HTML dosyası aynı <strong style="color:var(--color-text-primary);">boilerplate (iskelet)</strong> ile, yani aynı dört temel parçayla başlar. Üzerine gelin, her birinin görevini görün:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <pre class="html-kod" style="font-size:0.78rem; line-height:1.9;"><span class="hl-line" data-part="p-doctype"><span class="t">&lt;!DOCTYPE html&gt;</span></span>
<span class="hl-line" data-part="p-html"><span class="t">&lt;html</span> <span class="a">lang</span>=<span class="v">"tr"</span><span class="t">&gt;</span></span>
<span class="hl-line" data-part="p-head">  <span class="t">&lt;head&gt;</span></span>
<span class="hl-line" data-part="p-head">    <span class="t">&lt;title&gt;</span>Sayfam<span class="t">&lt;/title&gt;</span></span>
<span class="hl-line" data-part="p-head">  <span class="t">&lt;/head&gt;</span></span>
<span class="hl-line" data-part="p-body">  <span class="t">&lt;body&gt;</span></span>
<span class="hl-line" data-part="p-body">    <span class="t">&lt;h1&gt;</span>Merhaba<span class="t">&lt;/h1&gt;</span></span>
<span class="hl-line" data-part="p-body">  <span class="t">&lt;/body&gt;</span></span>
<span class="hl-line" data-part="p-html"><span class="t">&lt;/html&gt;</span></span></pre>
                    <div style="display:flex; flex-direction:column; gap:8px; justify-content:space-between;">
                        <div class="part-box" data-part="p-doctype" style="border:1px solid var(--border-light); border-radius:9px; padding:10px 12px; transition:background 0.15s, border-color 0.15s;">
                            <strong style="font-size:0.8rem; color:#818cf8;">&lt;!DOCTYPE html&gt;</strong>
                            <p style="font-size:0.74rem; color:var(--color-text-secondary); margin:3px 0 0; line-height:1.45;">"Bu modern bir HTML dosyasıdır" der. Daima ilk satır.</p>
                        </div>
                        <div class="part-box" data-part="p-html" style="border:1px solid var(--border-light); border-radius:9px; padding:10px 12px; transition:background 0.15s, border-color 0.15s;">
                            <strong style="font-size:0.8rem; color:#818cf8;">&lt;html&gt;</strong>
                            <p style="font-size:0.74rem; color:var(--color-text-secondary); margin:3px 0 0; line-height:1.45;">Tüm sayfayı saran en dış kök. <code>lang="tr"</code> dili belirtir.</p>
                        </div>
                        <div class="part-box" data-part="p-head" style="border:1px solid var(--border-light); border-radius:9px; padding:10px 12px; transition:background 0.15s, border-color 0.15s;">
                            <strong style="font-size:0.8rem; color:#7dd3fc;">&lt;head&gt;</strong>
                            <p style="font-size:0.74rem; color:var(--color-text-secondary); margin:3px 0 0; line-height:1.45;">Görünmeyen bilgiler: sekme başlığı, dil, ayarlar.</p>
                        </div>
                        <div class="part-box" data-part="p-body" style="border:1px solid var(--border-light); border-radius:9px; padding:10px 12px; transition:background 0.15s, border-color 0.15s;">
                            <strong style="font-size:0.8rem; color:#c084fc;">&lt;body&gt;</strong>
                            <p style="font-size:0.74rem; color:var(--color-text-secondary); margin:3px 0 0; line-height:1.45;">Ekranda <strong>görünen</strong> her şey burada: başlıklar, metin, görseller.</p>
                        </div>
                    </div>
                </div>
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
                    const box = slideEl.querySelector('.part-box[data-part="' + part + '"]');
                    if (box) { box.style.background = BG; box.style.borderColor = BORD; }
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

        // Slide 11: head vs body
        {
            id: "head-body",
            category: "Bölüm 2: İlk Dosya",
            title: "Görünmeyen head, Görünen body",
            html: `
                <p class="vcd-content-intro">İki bölge, iki farklı dünya. <code>&lt;head&gt;</code> tarayıcıya bilgi verir ama ekranda görünmez; <code>&lt;body&gt;</code> ise kullanıcının gördüğü her şeydir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <pre class="html-kod" style="font-size:0.74rem;"><span class="t">&lt;head&gt;</span>
  <span class="t">&lt;title&gt;</span>Sanat Galerisi<span class="t">&lt;/title&gt;</span>
<span class="t">&lt;/head&gt;</span>
<span class="t">&lt;body&gt;</span>
  <span class="t">&lt;h1&gt;</span>Sanat Galerisi<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;p&gt;</span>Bu hafta açıldı.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;/body&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">Tarayıcıda</div>
                        <div style="border-radius:10px; overflow:hidden; border:1px solid rgba(255,255,255,0.12); background:#0f172a;">
                            <div style="display:flex; align-items:center; gap:8px; background:#1e293b; padding:6px 10px;">
                                <div style="display:flex; gap:5px;"><span style="width:7px;height:7px;border-radius:50%;background:#ef4444;"></span><span style="width:7px;height:7px;border-radius:50%;background:#eab308;"></span><span style="width:7px;height:7px;border-radius:50%;background:#22c55e;"></span></div>
                                <div style="background:#0f172a; border-radius:5px; padding:3px 10px; font-size:0.68rem; color:#cbd5e1; display:flex; align-items:center; gap:6px;">📄 Sanat Galerisi <span style="color:#475569;">← title burada</span></div>
                            </div>
                            <div class="html-cikti" style="border:none; border-radius:0;"><h1 style="font-size:1.5em;">Sanat Galerisi</h1><p>Bu hafta açıldı.</p><div style="font-size:11px; color:#828289; font-family:'Geist',sans-serif; margin-top:6px;">↑ body burada görünür</div></div>
                        </div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Dikkat</h4>
                    <p><code>&lt;title&gt;</code>, sayfanın içinde değil <strong>tarayıcı sekmesinde</strong> ve yer imlerinde görünür. İyi bir başlık, 20 sekme açıkken sizi bulmanın tek yoludur.</p>
                </div>
            `
        },

        // Slide 12: Çalıştırma + Live Server
        {
            id: "calistirma",
            category: "Bölüm 2: İlk Dosya",
            title: "Sayfayı Çalıştırmak: Live Server",
            html: `
                <div class="vcd-grid-2" style="align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:8px;">
                        <span class="vcd-badge" style="font-size:0.62rem; align-self:flex-start;">Yöntem 1 · Basit</span>
                        <strong style="font-size:0.9rem; color:var(--color-text-primary);">Dosyaya çift tıkla</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;"><code>index.html</code> dosyasına çift tıklayın; varsayılan tarayıcınızda açılır. Çalışır, ama her değişiklikte <strong>elle yenilemeniz</strong> gerekir.</p>
                    </div>
                    <div class="vcd-glass-card primary" style="padding:16px; display:flex; flex-direction:column; gap:8px;">
                        <span class="vcd-badge badge-primary" style="font-size:0.62rem; align-self:flex-start;">Yöntem 2 · Önerilen</span>
                        <strong style="font-size:0.9rem; color:var(--color-primary);">🚀 Live Server</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Geçen hafta kurduğumuz eklenti. Dosyaya <strong>sağ tık → "Open with Live Server"</strong>. Artık kaydettiğiniz an tarayıcı <strong style="color:var(--color-text-primary);">kendiliğinden yenilenir</strong>.</p>
                    </div>
                </div>
                <div class="vcd-glass-card" style="margin-top:14px; padding:14px 18px;">
                    <div style="font-size:0.62rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-text-muted); font-weight:700; margin-bottom:10px;">Çalışma Akışınız</div>
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                        <div style="text-align:center; flex:1; min-width:90px;"><div style="font-size:1.3rem;">⌨️</div><div style="font-size:0.74rem; color:var(--color-text-secondary); margin-top:2px;">Kodu yaz</div></div>
                        <span style="color:var(--color-text-muted);">→</span>
                        <div style="text-align:center; flex:1; min-width:90px;"><div style="font-size:1.3rem;">💾</div><div style="font-size:0.74rem; color:var(--color-text-secondary); margin-top:2px;">Kaydet (Cmd/Ctrl+S)</div></div>
                        <span style="color:var(--color-text-muted);">→</span>
                        <div style="text-align:center; flex:1; min-width:90px;"><div style="font-size:1.3rem;">🔄</div><div style="font-size:0.74rem; color:var(--color-text-secondary); margin-top:2px;">Tarayıcı yenilenir</div></div>
                        <span style="color:var(--color-text-muted);">↩</span>
                        <div style="text-align:center; flex:1; min-width:90px;"><div style="font-size:1.3rem;">🔁</div><div style="font-size:0.74rem; color:var(--color-text-secondary); margin-top:2px;">Tekrar et</div></div>
                    </div>
                </div>
            `
        },

        // Slide 13: İlk Canlı Editör (type → render)
        {
            id: "canli-editor",
            category: "Bölüm 2: İlk Dosya",
            title: "Şimdi Sen Dene: Canlı Editör",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">İşte sihir: soldaki kodu değiştirin, sağdaki "tarayıcı" <strong style="color:var(--color-text-primary);">anında</strong> güncellensin. Bilgisayarınızdaki Live Server tam olarak böyle çalışır. (Korkmayın, bozarsanız sayfayı yenileyin.)</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch;">
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label kod">Kod · düzenleyebilirsin ✏️</div>
                            <textarea class="html-editor live-src" spellcheck="false" style="flex:1; min-height:180px;">&lt;h1&gt;Merhaba!&lt;/h1&gt;
&lt;p&gt;Bu benim ilk satırım.&lt;/p&gt;

&lt;p&gt;Burayı &lt;strong&gt;değiştirmeyi&lt;/strong&gt; dene!&lt;/p&gt;</textarea>
                        </div>
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label cikti">Tarayıcı çıktısı · canlı</div>
                            <iframe class="html-live-frame live-out" title="Canlı önizleme" style="flex:1; min-height:180px;"></iframe>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const ta = slideEl.querySelector('.live-src');
                const frame = slideEl.querySelector('.live-out');
                if (!ta || !frame) return;
                const render = () => { frame.srcdoc = ta.value; };
                // Editöre yazarken slayt gezinmesini engelle (Enter, Space, oklar editörde kalsın)
                ta.addEventListener('keydown', (e) => e.stopPropagation());
                ta.addEventListener('input', render);
                render();
            }
        },

        // Slide 14: Başlıklar h1–h6
        {
            id: "basliklar",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Başlıklar: &lt;h1&gt; – &lt;h6&gt;",
            html: `
                <p class="vcd-content-intro">Altı seviye başlık vardır. <code>&lt;h1&gt;</code> en önemli ve en büyük, <code>&lt;h6&gt;</code> en küçüktür. Bir başlık <strong style="color:var(--color-text-primary);">hiyerarşi</strong> kurar, tıpkı bir dergideki ana başlık ve alt başlıklar gibi.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.76rem;"><span class="t">&lt;h1&gt;</span>Ana Başlık<span class="t">&lt;/h1&gt;</span>
<span class="t">&lt;h2&gt;</span>Alt Başlık<span class="t">&lt;/h2&gt;</span>
<span class="t">&lt;h3&gt;</span>Daha Küçük<span class="t">&lt;/h3&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA</div>
                        <div class="html-cikti"><h1>Ana Başlık</h1><h2>Alt Başlık</h2><h3>Daha Küçük</h3></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">🎯</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Kural: Her sayfada <strong>tek bir <code>&lt;h1&gt;</code></strong> bulunur (sayfanın ana konusu). Başlıkları boyut için değil <strong>anlam sırası</strong> için seçin. Her seviyenin tarayıcıda bir <strong>varsayılan boyutu</strong> vardır (yandaki çıktı tam o boyutları gösteriyor); görünümü sonra CSS ile değiştireceğiz.</span>
                </div>
            `
        },

        // Slide 15 (YENİ): Başlıkların varsayılan boyutları
        {
            id: "baslik-boyutlari",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Başlıkların Varsayılan Boyutları",
            html: `
                <p class="vcd-content-intro">Hiçbir CSS yazmadan bile her başlık seviyesinin bir boyutu vardır: bunlar tarayıcının <strong style="color:var(--color-text-primary);">dahili stil sayfasından</strong> (user-agent stylesheet) gelir. Taban yazı boyutu <code>16px</code> kabul edilir, seviyeler ona göre ölçeklenir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center;">
                    <table class="vcd-table">
                        <thead>
                            <tr><th>Tag</th><th>Varsayılan</th><th>16px tabanda</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><code>&lt;h1&gt;</code></td><td>2.00em</td><td>32px</td></tr>
                            <tr><td><code>&lt;h2&gt;</code></td><td>1.50em</td><td>24px</td></tr>
                            <tr><td><code>&lt;h3&gt;</code></td><td>1.17em</td><td>~18.7px</td></tr>
                            <tr><td><code>&lt;h4&gt;</code></td><td>1.00em</td><td>16px</td></tr>
                            <tr><td><code>&lt;h5&gt;</code></td><td>0.83em</td><td>~13.3px</td></tr>
                            <tr><td><code>&lt;h6&gt;</code></td><td>0.67em</td><td>~10.7px</td></tr>
                        </tbody>
                    </table>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA · gerçek boyutlar</div>
                        <div class="html-cikti"><h1>h1 başlık</h1><h2>h2 başlık</h2><h3>h3 başlık</h3><h4>h4 başlık</h4><h5>h5 başlık</h5><h6>h6 başlık</h6></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(2, 184, 204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">📐</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Web'de ölçü birimi <strong>px / em / rem</strong>'dir, baskıdaki <strong>pt</strong> değil. <code>em</code> = tabanın katı (2em = 2 × 16px). Bu değerler yalnızca başlangıç; gerçek boyut ve aralıkları CSS ile siz belirleyeceksiniz.</span>
                </div>
            `
        },

        // Slide 16: Paragraf p (+ boşluk kuralı)
        {
            id: "paragraf",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Paragraf: &lt;p&gt;",
            html: `
                <p class="vcd-content-intro">Metin blokları <code>&lt;p&gt;</code> ile yazılır. Tasarımcılar için sürpriz bir kural: HTML, kodunuzdaki <strong style="color:var(--color-text-primary);">fazladan boşlukları ve satır atlamalarını yok sayar.</strong></p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD · bol boşlukla yazsak bile</div>
                        <pre class="html-kod" style="font-size:0.74rem;"><span class="t">&lt;p&gt;</span>Çok        boşluk
ve  satır
atlama.<span class="t">&lt;/p&gt;</span>
<span class="t">&lt;p&gt;</span>Ayrı bir paragraf.<span class="t">&lt;/p&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA · hepsi tek boşluğa iner</div>
                        <div class="html-cikti"><p>Çok        boşluk
ve  satır
atlama.</p><p>Ayrı bir paragraf.</p></div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Neden Önemli?</h4>
                    <p>Word'de olduğu gibi Enter'a basarak boşluk yaratamazsınız. Boşluğu ve aralığı <strong>yapı</strong> (ayrı tag'ler) ve ileride <strong>CSS</strong> ile kurarsınız. Bu, "tasarımı koddan ayırma" fikrinin ilk kanıtı.</p>
                </div>
                <div style="display:flex; align-items:flex-start; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">↔️</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;"><strong>Peki boşluk gerekiyorsa?</strong> Ayrı <code>&lt;p&gt;</code> ya da başlık gibi <strong>ayrı tag'ler</strong> kullanın; tek bir zorunlu boşluk için <code>&amp;nbsp;</code> yazın; bir satır atlamak için <code>&lt;br&gt;</code> (idareli). Gerçek aralıkları sonra CSS <code>margin</code> / <code>padding</code> ile vereceğiz.</span>
                </div>
            `
        },

        // Slide 16: strong & em
        {
            id: "vurgu",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Vurgu: &lt;strong&gt; ve &lt;em&gt;",
            html: `
                <p class="vcd-content-intro">İki tag metne önem katar: <code>&lt;strong&gt;</code> güçlü vurgu (genelde <strong>kalın</strong>), <code>&lt;em&gt;</code> ise vurgulu okuma (genelde <em>italik</em>). İsimleri görünüme değil <strong style="color:var(--color-text-primary);">anlama</strong> göredir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.74rem;"><span class="t">&lt;p&gt;</span>Son teslim
<span class="t">&lt;strong&gt;</span>Cuma günü<span class="t">&lt;/strong&gt;</span>.
Lütfen <span class="t">&lt;em&gt;</span>geç kalmayın<span class="t">&lt;/em&gt;</span>.<span class="t">&lt;/p&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA</div>
                        <div class="html-cikti"><p>Son teslim <strong>Cuma günü</strong>. Lütfen <em>geç kalmayın</em>.</p></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(2, 184, 204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">♿</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Ekran okuyucular <code>&lt;strong&gt;</code> ve <code>&lt;em&gt;</code>'i sesli olarak <strong>vurgular</strong>. Yani anlamı seçmek, görme engelli kullanıcılar için de fark yaratır.</span>
                </div>
            `
        },

        // Slide 17: Listeler ul/ol/li
        {
            id: "listeler",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Listeler: &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;",
            html: `
                <p class="vcd-content-intro">İki tür liste: <code>&lt;ul&gt;</code> sırasız (madde işaretli), <code>&lt;ol&gt;</code> sıralı (numaralı). Her madde bir <code>&lt;li&gt;</code> (list item) içine girer ve listenin <strong style="color:var(--color-text-primary);">içine</strong> yerleşir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.72rem;"><span class="t">&lt;ul&gt;</span>
  <span class="t">&lt;li&gt;</span>Tipografi<span class="t">&lt;/li&gt;</span>
  <span class="t">&lt;li&gt;</span>Renk<span class="t">&lt;/li&gt;</span>
<span class="t">&lt;/ul&gt;</span>
<span class="t">&lt;ol&gt;</span>
  <span class="t">&lt;li&gt;</span>Eskiz<span class="t">&lt;/li&gt;</span>
  <span class="t">&lt;li&gt;</span>Tasarım<span class="t">&lt;/li&gt;</span>
<span class="t">&lt;/ol&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA</div>
                        <div class="html-cikti"><ul><li>Tipografi</li><li>Renk</li></ul><ol><li>Eskiz</li><li>Tasarım</li></ol></div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Aslında Her Yerdeler</h4>
                    <p>Menüler, özellik listeleri, adım adım yönergeler: web'in büyük kısmı aslında listelerden oluşur.</p>
                </div>
            `
        },

        // Slide 18: Bağlantı a
        {
            id: "baglanti",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Bağlantı: &lt;a&gt; · Web'in Kalbi",
            html: `
                <p class="vcd-content-intro">Köprü (hyperlink), web'i "web" yapan şeydir; geçen hafta Tim Berners-Lee'nin icadını hatırlayın. <code>&lt;a&gt;</code> tag'i, <code>href</code> attribute'ü ile nereye gideceğini söyler.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.72rem;"><span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"https://acmmuze.com"</span><span class="t">&gt;</span>
  Müzeyi ziyaret et
<span class="t">&lt;/a&gt;</span>

<span class="c">&lt;!-- yeni sekmede açmak için --&gt;</span>
<span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"https://...."</span> <span class="a">target</span>=<span class="v">"_blank"</span><span class="t">&gt;</span>...<span class="t">&lt;/a&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA</div>
                        <div class="html-cikti"><p><a href="https://example.com" target="_blank" rel="noopener">Müzeyi ziyaret et</a></p><p style="font-size:13px;">Tıklanabilir, altı çizili ve mavi: tarayıcının bağlantı için varsayılan görünümü.</p></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">🔗</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;">Bağlantı metni anlamlı olsun: "buraya tıkla" yerine <strong>"Müzeyi ziyaret et"</strong>. Hem kullanıcı hem arama motorları nereye gittiğini anlar.</span>
                </div>
            `
        },

        // Slide 19: Görsel img
        {
            id: "gorsel",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Görsel: &lt;img&gt;",
            html: `
                <p class="vcd-content-intro">Görseller <code>&lt;img&gt;</code> ile eklenir; tekli (kendiliğinden kapanan) bir tag'dir. İki önemli attribute'ü vardır: <code>src</code> (kaynak dosya) ve <code>alt</code> (metin açıklaması).</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.73rem;"><span class="t">&lt;img</span>
  <span class="a">src</span>=<span class="v">"manzara.jpg"</span>
  <span class="a">alt</span>=<span class="v">"Dağ manzarası"</span><span class="t">&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA</div>
                        <div class="html-cikti"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='130'%3E%3Crect width='220' height='130' fill='%23c7d2fe'/%3E%3Ccircle cx='168' cy='38' r='20' fill='%23facc15'/%3E%3Cpath d='M0 130 L60 70 L110 105 L165 60 L220 130 Z' fill='%238b5cf6'/%3E%3C/svg%3E" alt="Dağ manzarası" width="220" height="130"></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(2, 184, 204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">♿</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;"><code>alt</code> metnini boş geçmeyin: görsel yüklenmezse onun yerine görünür ve görme engelli kullanıcılara görseli <strong>tarif eder</strong>. İyi tasarım, görmeyen için de çalışır.</span>
                </div>
                <div style="display:flex; align-items:flex-start; gap:10px; margin-top:10px; padding:10px 14px; background:rgba(139, 92, 246,0.06); border:1px dashed rgba(139, 92, 246,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">🖼️</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;"><strong>Tasarım ipucu:</strong> Henüz gerçek görsel yoksa <strong>yer tutucu (placeholder)</strong> üreten siteler iş görür: <code>placehold.co</code>, <code>picsum.photos</code>, <code>dummyimage.com</code>. Örneğin <code>&lt;img src="https://placehold.co/600x400"&gt;</code> anında 600×400 bir kutu verir.</span>
                </div>
            `
        },

        // Slide 19.5 (YENİ): Çok sayfalı site & göreli yollar
        {
            id: "cok-sayfa",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Çok Sayfalı Site: Sayfaları Bağlamak",
            html: `
                <p class="vcd-content-intro">Bir site genelde birden çok <code>.html</code> dosyasıdır: hepsi aynı klasörde yaşar ve birbirine <code>&lt;a&gt;</code> ile bağlanır. Dosyalara <strong style="color:var(--color-text-primary);">relative path (göreli yol)</strong> ile, yani bulunduğunuz yere göre işaret edersiniz.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">PROJE KLASÖRÜ</div>
                        <pre class="html-kod" style="margin:0; font-size:0.76rem; line-height:1.7;"><span style="color:#7dd3fc;">site/</span>
  index.html
  hakkimda.html
  <span style="color:#7dd3fc;">images/</span>
    portre.jpg</pre>
                    </div>
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">index.html İÇİNDE</div>
                        <pre class="html-kod" style="margin:0; font-size:0.72rem;"><span class="c">&lt;!-- aynı klasördeki sayfa --&gt;</span>
<span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"hakkimda.html"</span><span class="t">&gt;</span>Hakkımda<span class="t">&lt;/a&gt;</span>

<span class="c">&lt;!-- alt klasördeki görsel --&gt;</span>
<span class="t">&lt;img</span> <span class="a">src</span>=<span class="v">"images/portre.jpg"</span><span class="t">&gt;</span></pre>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Relative Path Kuralları</h4>
                    <p>Aynı klasör: sadece <code>dosya.html</code>. Alt klasör: <code>klasor/dosya.jpg</code>. Bir üst klasör: <code>../dosya.html</code>. Adreste Türkçe karakter, boşluk ve büyük harf yok.</p>
                </div>
            `
        },

        // Slide 20: br & hr
        {
            id: "br-hr",
            category: "Bölüm 3: Temel Tag'ler",
            title: "Satır Sonu ve Ayraç: &lt;br&gt;, &lt;hr&gt;",
            html: `
                <p class="vcd-content-intro">İki küçük tekli tag: <code>&lt;br&gt;</code> tek bir satır sonu ekler, <code>&lt;hr&gt;</code> ise konuyu ayıran yatay bir çizgi çizer. İkisinin de kapanışı yoktur.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start;">
                    <div>
                        <div class="pane-label kod">KOD</div>
                        <pre class="html-kod" style="font-size:0.74rem;"><span class="t">&lt;p&gt;</span>Ada Lovelace<span class="t">&lt;br&gt;</span>
Tasarımcı &amp; Geliştirici<span class="t">&lt;/p&gt;</span>

<span class="t">&lt;hr&gt;</span>

<span class="t">&lt;p&gt;</span>Yeni bölüm.<span class="t">&lt;/p&gt;</span></pre>
                    </div>
                    <div>
                        <div class="pane-label cikti">TARAYICIDA</div>
                        <div class="html-cikti"><p>Ada Lovelace<br>Tasarımcı &amp; Geliştirici</p><hr><p>Yeni bölüm.</p></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:10px 14px; background:rgba(245,158,11,0.06); border:1px dashed rgba(245,158,11,0.3); border-radius:10px;">
                    <span style="font-size:1.1rem;">✋</span>
                    <span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.5;"><code>&lt;br&gt;</code>'yi boşluk yaratmak için üst üste kullanmayın. Gerçek aralık ve düzeni ileride <strong>CSS</strong> ile kuracağız. <code>&lt;br&gt;</code> sadece şiir/adres gibi gerçek satır sonları içindir.</span>
                </div>
            `
        },

        // Slide 21: Girinti + Yorum (Temiz Kod)
        {
            id: "temiz-kod",
            category: "Bölüm 4: Temiz Kod",
            title: "İyi Alışkanlık: Girinti ve Yorum",
            html: `
                <div class="vcd-grid-2" style="align-items:start;">
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px;">
                        <strong style="font-size:0.9rem; color:var(--color-text-primary);">↹ Indentation (Girinti)</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">İçteki tag'leri biraz içeriden başlatın. Kod çalışmasını etkilemez ama <strong>hiyerarşiyi göz</strong> ile okunur kılar.</p>
                        <pre class="html-kod" style="font-size:0.72rem;"><span class="t">&lt;ul&gt;</span>
  <span class="t">&lt;li&gt;</span>İçeride<span class="t">&lt;/li&gt;</span>
  <span class="t">&lt;li&gt;</span>2 boşluk girintili<span class="t">&lt;/li&gt;</span>
<span class="t">&lt;/ul&gt;</span></pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); margin:0;">Prettier eklentisi (geçen hafta) bunu sizin için otomatik yapar.</p>
                    </div>
                    <div class="vcd-glass-card" style="display:flex; flex-direction:column; gap:8px;">
                        <strong style="font-size:0.9rem; color:var(--color-text-primary);">💬 Comment (Yorum)</strong>
                        <p style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Kendinize not. <code>&lt;!--</code> ile başlar, <code>--&gt;</code> ile biter; arasındaki her şeyi tarayıcı <strong>görmez</strong>, ekrana çizmez. Bölümleri ayırmak ya da bir şeyi geçici kapatmak için.</p>
                        <pre class="html-kod" style="font-size:0.72rem;"><span class="c">&lt;!-- Üst menü başlıyor --&gt;</span>
<span class="t">&lt;nav&gt;</span>...<span class="t">&lt;/nav&gt;</span>

<span class="c">&lt;!-- &lt;img src="eski.jpg"&gt; --&gt;</span>
<span style="color:#828289;">(yorumdaki kod çalışmaz)</span></pre>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Neden Şimdiden?</h4>
                    <p>Düzenli kod, gelecekteki size (ve grup projesinde ekip arkadaşınıza) bırakılan bir nezakettir. Tasarım dosyalarınızı katman katman adlandırmanız gibi.</p>
                </div>
            `
        },

        // Slide 22: Sık Yapılan Hatalar (interaktif "kapanışı unutma")
        {
            id: "sik-hatalar",
            category: "Bölüm 4: Temiz Kod",
            title: "Sık Yapılan Hatalar",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Herkes bu hataları yapar; siz de yapacaksınız, sorun değil. Önemli olan tanımak. En meşhuru: <strong style="color:var(--color-text-primary);">kapanış tag'ini unutmak.</strong> Aşağıdaki butona basıp etkisini görün.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch;">
                        <div style="display:flex; flex-direction:column; gap:10px; min-height:0;">
                            <button class="sim-btn hata-toggle" style="align-self:flex-start;">Kapanış tag'ini kaldır</button>
                            <div class="pane-label kod">KOD</div>
                            <pre class="html-kod hata-kod" style="flex:1; font-size:0.74rem; margin:0;"></pre>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:10px; min-height:0;">
                            <div class="pane-label cikti" style="margin-top:34px;">TARAYICIDA</div>
                            <iframe class="html-live-frame hata-out" title="Hata önizleme" style="flex:1; min-height:120px;"></iframe>
                        </div>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; flex-shrink:0;">
                        <div style="background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.22); border-radius:8px; padding:8px 10px;">
                            <div style="font-size:0.7rem; font-weight:700; color:#fca5a5; margin-bottom:3px;">✕ Kapanışı unutmak</div>
                            <div style="font-size:0.66rem; color:var(--color-text-secondary); line-height:1.4;">Sonraki içerik de o tag'in içinde sanılır; sayfanın geri kalanı kayar.</div>
                        </div>
                        <div style="background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.22); border-radius:8px; padding:8px 10px;">
                            <div style="font-size:0.7rem; font-weight:700; color:#fca5a5; margin-bottom:3px;">✕ Çapraz iç içe geçme</div>
                            <div style="font-size:0.66rem; color:var(--color-text-secondary); line-height:1.4;"><code>&lt;p&gt;&lt;b&gt;…&lt;/p&gt;&lt;/b&gt;</code>: tarayıcı sırayı kendince düzeltir, sonuç şaşırtır.</div>
                        </div>
                        <div style="background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.22); border-radius:8px; padding:8px 10px;">
                            <div style="font-size:0.7rem; font-weight:700; color:#fca5a5; margin-bottom:3px;">✕ Tag adında yazım hatası</div>
                            <div style="font-size:0.66rem; color:var(--color-text-secondary); line-height:1.4;"><code>&lt;p1&gt;</code> gibi tanınmayan tag yok sayılır; metin stilsiz kalır.</div>
                        </div>
                        <div style="background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.22); border-radius:8px; padding:8px 10px;">
                            <div style="font-size:0.7rem; font-weight:700; color:#fca5a5; margin-bottom:3px;">✕ Tırnaksız attribute</div>
                            <div style="font-size:0.66rem; color:var(--color-text-secondary); line-height:1.4;"><code>href=...</code> değeri boşluk içerince kırılır; bağlantı çalışmaz.</div>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const btn = slideEl.querySelector('.hata-toggle');
                const kod = slideEl.querySelector('.hata-kod');
                const out = slideEl.querySelector('.hata-out');
                if (!btn || !kod || !out) return;

                const dogruKod = '<h1>Davet</h1>\n<p><strong>Bugün</strong> sergi açılışı.</p>\n<p>Hepiniz davetlisiniz.</p>';
                const hataliKod = '<h1>Davet</h1>\n<p><strong>Bugün sergi açılışı.</p>\n<p>Hepiniz davetlisiniz.</p>';

                const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const renkle = (s) => esc(s)
                    .replace(/(&lt;\/?[a-z0-9]+&gt;)/g, '<span style="color:#818cf8;">$1</span>');

                let hatali = false;
                const guncelle = () => {
                    const src = hatali ? hataliKod : dogruKod;
                    kod.innerHTML = hatali
                        ? renkle(src).replace('&lt;strong&gt;', '<span style="color:#fca5a5;">&lt;strong&gt;</span>')
                        : renkle(src);
                    out.srcdoc = src;
                    btn.textContent = hatali ? 'Kapanışı geri ekle' : "Kapanış tag'ini kaldır";
                    btn.classList.toggle('active', hatali);
                };
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    hatali = !hatali;
                    guncelle();
                });
                guncelle();
            }
        },

        // Slide 23: Mini Pratik — Kendini Tanıt (canlı editör, şablon)
        {
            id: "mini-pratik",
            category: "Bölüm 5: Uygulama",
            title: "Mini Pratik: Kendini Tanıt",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <div style="display:flex; gap:16px; align-items:flex-start; flex-shrink:0;">
                        <p class="vcd-content-intro" style="margin:0; flex:1;">Sıra sizde. Aşağıdaki şablonu <strong style="color:var(--color-text-primary);">kendinize göre</strong> doldurun: bugün öğrendiğimiz tag'lerle kendinizi tanıtan küçük bir sayfa. <strong>Stil yok</strong>, sadece içerik ve yapı.</p>
                        <div class="vcd-analogy-box" style="flex:0 0 280px; margin:0;">
                            <h4>Bu portfolyo DEĞİL</h4>
                            <p style="font-size:0.78rem;">Şimdilik çirkin ve stilsiz olacak; olması gereken bu. Gerçek portfolyo sitesi dönem sonu finali.</p>
                        </div>
                    </div>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch;">
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label kod">Şablon · doldur ✏️</div>
                            <textarea class="html-editor pratik-src" spellcheck="false" style="flex:1; min-height:170px;">&lt;h1&gt;Adın Soyadın&lt;/h1&gt;

&lt;p&gt;Görsel İletişim Tasarımı öğrencisiyim.
&lt;strong&gt;Bir cümleyle&lt;/strong&gt; kendini anlat.&lt;/p&gt;

&lt;h2&gt;İlgi Alanlarım&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Tipografi&lt;/li&gt;
  &lt;li&gt;İllüstrasyon&lt;/li&gt;
  &lt;li&gt;Fotoğraf&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;İletişim:
&lt;a href="https://instagram.com"&gt;Instagram&lt;/a&gt;&lt;/p&gt;</textarea>
                        </div>
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label cikti">Senin sayfan · canlı</div>
                            <iframe class="html-live-frame pratik-out" title="Kendini tanıt önizleme" style="flex:1; min-height:170px;"></iframe>
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

        // Slide 24: Çirkin ama Normal → CSS Köprüsü (kapanış)
        {
            id: "css-koprusu",
            category: "Bölüm 5: Uygulama",
            title: "Çirkin mi? Tam da Olması Gerektiği Gibi",
            html: `
                <p class="vcd-content-intro">Sayfanız sade, hatta çirkin görünüyor olabilir: siyah beyaz, Times New Roman, süssüz. <strong style="color:var(--color-text-primary);">Bu bir hata değil, bir aşama.</strong> HTML iskelettir; giysiyi bir sonraki katman giydirir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div class="pane-label" style="color:var(--color-text-muted);">Bugün · sadece HTML</div>
                        <div class="html-cikti" style="flex:1;"><h1 style="font-size:1.4em;">Adın Soyadın</h1><p>Görsel İletişim Tasarımı öğrencisi.</p><ul><li>Tipografi</li><li>İllüstrasyon</li></ul></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:6px;">
                        <div class="pane-label" style="color:var(--color-accent);">İleride · CSS ile</div>
                        <div style="flex:1; border-radius:10px; padding:18px; background:linear-gradient(135deg, rgba(212, 255, 0,0.18), rgba(2, 184, 204,0.12)); border:1px solid rgba(212, 255, 0,0.3); display:flex; flex-direction:column; justify-content:center; gap:8px;">
                            <div style="font-size:1.3rem; font-weight:700; background:linear-gradient(135deg,#fff,var(--color-secondary)); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">Adın Soyadın</div>
                            <div style="font-size:0.8rem; color:var(--color-text-secondary);">Görsel İletişim Tasarımı öğrencisi.</div>
                            <div style="display:flex; gap:6px; margin-top:4px;"><span class="vcd-badge badge-primary" style="font-size:0.6rem;">Tipografi</span><span class="vcd-badge badge-secondary" style="font-size:0.6rem;">İllüstrasyon</span></div>
                        </div>
                    </div>
                </div>
                <p style="font-size:0.78rem; color:var(--color-text-muted); text-align:center; margin-top:10px;">Aynı içerik, aynı HTML; fark sadece CSS. (Geçen haftaki CSS Zen Garden'ı hatırlayın.)</p>
                <div style="display:flex; align-items:center; justify-content:center; gap:16px; margin-top:14px; flex-wrap:wrap;">
                    <span class="ileri-pin"><span style="font-size:0.8rem;">→</span> Sıradaki: <strong style="color:var(--color-text-primary);">Yapı &amp; Semantic</strong></span>
                    <span class="ileri-pin" style="color:var(--color-accent); background:rgba(139, 92, 246,0.07); border-color:rgba(139, 92, 246,0.25);"><span style="font-size:0.8rem;">🎯</span> Hedef: <strong style="color:var(--color-text-primary);">dönem sonu canlı portfolyo</strong></span>
                </div>
            `
        }

    ]
};
