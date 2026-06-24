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
            subtitle: '<span style="font-size:1.05rem; white-space:nowrap;">Görsel İletişim Tasarımı · 6. Hafta</span>',
            type: "hero",
            html: `
                <div style="margin-top:34px; display:flex; align-items:center; gap:28px; flex-wrap:wrap; justify-content:center;">
                    <div style="display:flex; align-items:flex-end; gap:20px;">
                        <div style="text-align:center;">
                            <div style="font-family:Georgia,'Times New Roman',serif; font-size:2.5rem; line-height:1; color:var(--color-text-primary);">Aa</div>
                            <div style="font-size:0.66rem; color:var(--color-text-muted); margin-top:7px; letter-spacing:0.04em;">serif</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-family:'Helvetica Neue',Arial,sans-serif; font-size:2.5rem; line-height:1; color:var(--color-text-primary);">Aa</div>
                            <div style="font-size:0.66rem; color:var(--color-text-muted); margin-top:7px; letter-spacing:0.04em;">sans</div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-family:'JetBrains Mono','Courier New',monospace; font-size:2.5rem; line-height:1; color:var(--color-text-primary);">Aa</div>
                            <div style="font-size:0.66rem; color:var(--color-text-muted); margin-top:7px; letter-spacing:0.04em;">mono</div>
                        </div>
                    </div>
                    <div style="width:1px; height:46px; background:var(--border-light);"></div>
                    <div style="text-align:center;">
                        <div style="display:flex; gap:10px; align-items:center; justify-content:center;">
                            <span style="width:22px; height:22px; border-radius:50%; background:#1a1a1a; border:1px solid var(--border-light);"></span>
                            <span style="width:22px; height:22px; border-radius:50%; background:var(--color-primary);"></span>
                            <span style="width:22px; height:22px; border-radius:50%; background:var(--color-secondary);"></span>
                            <span style="width:22px; height:22px; border-radius:50%; background:#f5f3ee;"></span>
                        </div>
                        <div style="font-size:0.66rem; color:var(--color-text-muted); margin-top:9px; letter-spacing:0.04em;">palet</div>
                    </div>
                </div>
            `
        },

        // Slide 2: Geri çağrı — week4 sözünü tut (çalışıyor → sistem)
        {
            id: "geri-cagri",
            category: "Hatırlatma",
            title: "Renk Çalışıyor, Sıra Sistemde",
            html: `
                <p class="vcd-content-intro">Geçen ders <code>color</code> ve <code>font-family</code> ile sayfaya ilk görünüm verildi; ama değerler tek tek, deneme yanılmayla seçilmişti. Bu deste o seçimleri bir sisteme bağlar. Üç dersin zinciri şöyle ilerler:</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:7px; opacity:0.6;">
                        <div style="font-size:1.4rem;">🦴</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.9rem;">İskelet</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Anlamlı HTML yapısı: ne nerede. <strong style="color:var(--color-text-secondary);">Bitti</strong> (Ders 2).</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:7px; opacity:0.78;">
                        <div style="font-size:1.4rem;">🎨</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.9rem;">İlk Renk</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-muted); line-height:1.5; margin:0;">CSS çalışıyor: ilk renk ve yazı. <strong style="color:var(--color-text-secondary);">Bitti</strong> (Ders 3).</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:7px; border-color:rgba(212,255,0,0.45); background:rgba(212,255,0,0.04);">
                        <div style="font-size:1.4rem;">🧭</div>
                        <strong style="color:var(--color-primary); font-size:0.9rem;">Sistem</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Palet, kontrast, tipografik ölçek. <strong style="color:var(--color-primary);">Bu dersin konusu.</strong></p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Seçimden Karara</h4>
                    <p>Bir değer "çalışıyor" olabilir ama yine de rastgele olabilir. Sistem, her rengi ve her boyutu bir gerekçeye bağlar: hangi yazı tipi, hangi ölçek, hangi palet ve <strong>neden</strong>. Bu dersten sonra görünüm bir tesadüf değil, açıklanabilir bir karar olur.</p>
                </div>
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
                <p class="vcd-content-intro">Aynı cümle, farklı yazı tipinde farklı bir <strong style="color:var(--color-text-primary);">ses tonu</strong> taşır. Üç temel aile vardır; aşağıda aynı kelime üçünde birden, her biri kendi karakteriyle.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:18px 16px; display:flex; flex-direction:column; gap:10px; border-color:rgba(129,140,248,0.4);">
                        <div style="font-family:Georgia,'Times New Roman',serif; font-size:2.6rem; line-height:1; color:var(--color-text-primary);">Aa</div>
                        <div style="font-family:Georgia,'Times New Roman',serif; font-size:1.05rem; color:var(--color-text-secondary);">Tasarım</div>
                        <div style="height:1px; background:var(--border-light); margin:2px 0;"></div>
                        <strong style="color:#818cf8; font-size:0.86rem;">serif</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Harf uçlarında <strong style="color:var(--color-text-primary);">tırnaklar</strong> (ince çıkıntılar). Hissi: klasik, ciddi, edebî. Gazete ve kitap metni.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:18px 16px; display:flex; flex-direction:column; gap:10px; border-color:rgba(212,255,0,0.45); background:rgba(212,255,0,0.04);">
                        <div style="font-family:'Helvetica Neue',Arial,sans-serif; font-size:2.6rem; line-height:1; color:var(--color-text-primary);">Aa</div>
                        <div style="font-family:'Helvetica Neue',Arial,sans-serif; font-size:1.05rem; color:var(--color-text-secondary);">Tasarım</div>
                        <div style="height:1px; background:var(--border-light); margin:2px 0;"></div>
                        <strong style="color:var(--color-primary); font-size:0.86rem;">sans-serif <span style="color:var(--color-text-muted); font-weight:400;">(sans)</span></strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Tırnaksız, temiz uçlar (Fransızca <em>sans</em> = -siz). Hissi: modern, sade, nötr. Ekranların çoğunluk dili.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:18px 16px; display:flex; flex-direction:column; gap:10px; border-color:rgba(2,184,204,0.4);">
                        <div style="font-family:'JetBrains Mono','Courier New',monospace; font-size:2.6rem; line-height:1; color:var(--color-text-primary);">Aa</div>
                        <div style="font-family:'JetBrains Mono','Courier New',monospace; font-size:1.05rem; color:var(--color-text-secondary);">Tasarım</div>
                        <div style="height:1px; background:var(--border-light); margin:2px 0;"></div>
                        <strong style="color:var(--color-secondary); font-size:0.86rem;">monospace <span style="color:var(--color-text-muted); font-weight:400;">(mono)</span></strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Her harf <strong style="color:var(--color-text-primary);">eşit genişlikte</strong>. Hissi: teknik, kod, terminal. Rakam ve hizalama işleri.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Biçim Değil, Ton</h4>
                    <p>Yazı tipi seçmek bir süsleme değil, bir ses tonu seçmektir. Aynı cümle serifte ağırbaşlı, sans-serifte modern, monospace'te teknik durur. Karar, içeriğin nasıl <strong>duyulacağını</strong> belirler.</p>
                </div>
            `
        },

        // İçeriğe göre seçim — hangi içerik, hangi ses (serif/sans/mono'dan hemen sonra)
        {
            id: "font-icerik",
            category: "Bölüm 1: Tipografi",
            title: "Hangi İçerik, Hangi Ses?",
            html: `
                <p class="vcd-content-intro">Doğru yazı tipi mutlak değil, içeriğe <strong style="color:var(--color-text-primary);">bağlıdır</strong>. Aynı font bir bağlamda tam yerinde, başka bir bağlamda yanlış durur. Aşağıdaki üç site türü, üç farklı ses ister.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:9px; border-color:rgba(129,140,248,0.35);">
                        <div style="font-family:Georgia,'Times New Roman',serif; font-size:1.5rem; color:var(--color-text-primary); line-height:1.05;">Hukuk Bürosu</div>
                        <div style="height:1px; background:var(--border-light);"></div>
                        <strong style="color:#818cf8; font-size:0.8rem;">serif · güven</strong>
                        <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Kurumsal, resmi, köklü içerik. Serif ağırbaşlılık ve güven taşır.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:9px; border-color:rgba(212,255,0,0.4); background:rgba(212,255,0,0.03);">
                        <div style="font-family:'Helvetica Neue',Arial,sans-serif; font-size:1.45rem; font-weight:700; color:var(--color-text-primary); line-height:1.05;">Tasarım Stüdyosu</div>
                        <div style="height:1px; background:var(--border-light);"></div>
                        <strong style="color:var(--color-primary); font-size:0.8rem;">sans · modern</strong>
                        <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Yaratıcı, güncel, temiz içerik. Sans-serif modern ve nötr bir zemin verir.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:9px; border-color:rgba(2,184,204,0.4);">
                        <div style="font-family:'JetBrains Mono','Courier New',monospace; font-size:1.2rem; color:var(--color-text-primary); line-height:1.1;">Teknoloji Girişimi</div>
                        <div style="height:1px; background:var(--border-light);"></div>
                        <strong style="color:var(--color-secondary); font-size:0.8rem;">mono · teknik</strong>
                        <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Geliştirici, dijital, teknik içerik. Monospace kod dünyasının kimliğini taşır.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🎯</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Soru "hangi font güzel" değil, "bu içerik ne hissettirmeli". Peki bir yazı tipini seçerken hangi ölçütlere bakılır?</span>
                </div>
            `
        },

        // Font seçim ölçütleri — bir yazı tipi nasıl seçilir
        {
            id: "font-secim",
            category: "Bölüm 1: Tipografi",
            title: "Bir Yazı Tipi Nasıl Seçilir?",
            html: `
                <p class="vcd-content-intro">Yazı tipi seçmek "en güzeli" bulmak değil, içeriğe <strong style="color:var(--color-text-primary);">en çok yarayanı</strong> seçmektir. Birkaç ölçüt kararı kolaylaştırır:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">👁️</span><strong style="color:var(--color-primary); font-size:0.86rem;">Okunabilirlik</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Gövde metni için en önemli ölçüt. Açık harf formları ve yüksek <strong style="color:var(--color-text-primary);">x-yüksekliği</strong> (küçük harflerin boyu) küçük puntoda bile rahat okutur. Süslü değil, net olan kazanır.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">🏋️</span><strong style="color:var(--color-secondary); font-size:0.86rem;">Ağırlık ailesi</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Birden çok ağırlık (Regular, Medium, Bold) sunan bir aile, tek başına hiyerarşi kurar. Çok ince kaybolur, çok kalın "dolar"; orta ağırlıklar en okunaklısıdır.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">🔤</span><strong style="color:#818cf8; font-size:0.86rem;">Türkçe desteği</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Font <strong style="color:var(--color-text-primary);">ş, ğ, ı, İ, ö, ü, ç</strong> karakterlerini eksiksiz taşımalı. Latin-Extended desteği yoksa Türkçe metin bozuk görünür; seçmeden önce denenir.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">🎯</span><strong style="color:var(--color-warning); font-size:0.86rem;">Amaca uygunluk</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Başlık ve gövde aynı işi yapmaz. Başlık büyük puntoda durduğu için daha karakterli bir font olabilir; gövde ise küçük puntoda uzun uzun okunduğundan sade ve okunaklı olmalıdır.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🧭</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Kural basit: <strong style="color:var(--color-text-primary);">az ama doğru</strong>. Bir sayfada en çok iki-üç yazı tipi yeter. Önce ölçüt, sonra zevk; en başta da okunabilirliğin anahtarı x-yüksekliği.</span>
                </div>
            `
        },

        // x-yüksekliği — okunabilirliğin anahtarı (görsel)
        {
            id: "x-yukseklik",
            category: "Bölüm 1: Tipografi",
            title: "Okunabilirliğin Anahtarı: x-Yüksekliği",
            html: `
                <p class="vcd-content-intro">Bir fontun okunaklılığını en çok belirleyen ölçü <strong style="color:var(--color-text-primary);">x-yüksekliğidir</strong>: küçük harflerin (örneğin <em>x</em>) taban çizgisinden ölçülen gövde yüksekliği. Yüksek x-yüksekliği harf içi boşlukları açar, küçük puntoda bile okumayı kolaylaştırır.</p>
                <div style="display:flex; flex-direction:column; gap:14px; margin-top:0;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Harfin anatomisi</div>
                        <div style="background:#faf8f4; border-radius:8px; padding:16px 22px;">
                            <img src="images/typography-line-terms.svg" alt="Harf anatomisi: ascender height, cap height, mean line (median), baseline, descender height ve sağda x-height ölçüsü" style="width:100%; max-width:560px; height:auto; display:block; margin:0 auto;">
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Aynı punto, farklı x-yüksekliği</div>
                        <div style="background:#faf8f4; border-radius:8px; padding:14px 18px;">
                            <img src="images/x-height-samples.jpg" alt="Yedi farklı yazı tipinde aynı punto boyutunda örnek metin; yukarıdan aşağıya x-yüksekliği azalır: en yüksek Antique Olive iri ve okunaklı, en düşük Bernhard Modern küçük görünür" style="width:100%; max-width:600px; height:auto; display:block; margin:0 auto; border-radius:6px;">
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">📏</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Alttaki örneklerin hepsi aynı <code>font-size</code> değerinde; ama yüksek x-yüksekliğine sahip olanlar (ör. Antique Olive) daha büyük ve okunaklı görünür. Buraya kadar tek bir font seçtik; peki başlık ve gövde için iki font birden gerekirse?</span>
                </div>
            `
        },

        // Font pairing — başlık + gövde ikilisi (gerçek Google Fonts)
        {
            id: "font-pairing",
            category: "Bölüm 1: Tipografi",
            title: "Fontları Eşleştirmek",
            html: `
                <p class="vcd-content-intro">Bir sayfa tek bir aileyle de, uyumlu bir <strong style="color:var(--color-text-primary);">ikiliyle</strong> de kurulabilir. İyi bir eşleştirme her zaman <strong style="color:var(--color-text-primary);">ayrım</strong> (hiyerarşi) ile <strong style="color:var(--color-text-primary);">uyumun</strong> dengesidir: yeterince farklı, ama huzursuz değil. İkili kurmanın iki yaygın yolu:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Farklı tip · serif + sans</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; display:flex; flex-direction:column; justify-content:center; gap:9px;">
                            <div style="font-family:'Playfair Display',Georgia,serif; font-size:1.6rem; font-weight:700; line-height:1.1;">Afiş Serisi</div>
                            <div style="font-family:'Source Sans 3','Helvetica Neue',Arial,sans-serif; font-size:0.9rem; line-height:1.55;">Sergi için üç afiş tasarımı. Renk ve tipografi üzerine bir çalışma.</div>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:0;"><strong style="color:#818cf8;">Playfair Display</strong> + <strong style="color:var(--color-primary);">Source Sans 3</strong> · tip kontrastı, güçlü hiyerarşi</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Aynı tip · iki sans-serif</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; display:flex; flex-direction:column; justify-content:center; gap:9px;">
                            <div style="font-family:'Poppins','Helvetica Neue',Arial,sans-serif; font-size:1.5rem; font-weight:700; line-height:1.1;">Afiş Serisi</div>
                            <div style="font-family:'Work Sans','Helvetica Neue',Arial,sans-serif; font-size:0.92rem; line-height:1.55;">Sergi için üç afiş tasarımı. Renk ve tipografi üzerine bir çalışma.</div>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:0;"><strong style="color:var(--color-primary);">Poppins</strong> + <strong style="color:var(--color-primary);">Work Sans</strong> · ikisi de sans, ortak iskelet</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🔤</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">En sade yol ise tek bir aileyi farklı ağırlıklarla kullanmaktır: başlık <strong>bold</strong>, gövde regular. Peki seçilen ikilinin gerçekten uyumlu olduğu nasıl anlaşılır?</span>
                </div>
            `,
            onRender: (slideEl) => {
                if (!document.getElementById('gf-pairing-fonts')) {
                    const l = document.createElement('link');
                    l.id = 'gf-pairing-fonts';
                    l.rel = 'stylesheet';
                    l.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+3:wght@400&family=Poppins:wght@700&family=Work+Sans:wght@400&display=swap';
                    document.head.appendChild(l);
                }
            }
        },

        // İki font uyuyor mu — uyum kontrol listesi (font-pairing'den ayrıldı)
        {
            id: "font-uyum",
            category: "Bölüm 1: Tipografi",
            title: "İki Font Uyuyor mu?",
            html: `
                <p class="vcd-content-intro">Bir ikilinin uyumlu olup olmadığı tahminle değil, birkaç hızlı kontrolle anlaşılır. İyi eşleştirme her zaman <strong style="color:var(--color-text-primary);">kontrast</strong> ile <strong style="color:var(--color-text-primary);">uyumun</strong> dengesidir:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">🔗</span><strong style="color:var(--color-primary); font-size:0.86rem;">Yeterli ayrım</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Tip, ağırlık ya da boyut farkı net olsun: biri öne çıksın (başlık), biri sakin kalsın (gövde). İki gösterişli karakter <strong style="color:var(--color-text-primary);">yarışır</strong>.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">⚖️</span><strong style="color:var(--color-secondary); font-size:0.86rem;">Ortak iskelet</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Benzer <strong style="color:var(--color-text-primary);">x-yüksekliği</strong> ve harf oranları paylaşan fontlar uyumludur; uyumun en güçlü işareti budur.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">🎭</span><strong style="color:#818cf8; font-size:0.86rem;">Aynı ruh hali</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">İkisi de resmi ya da ikisi de samimi olmalı; sert bir font ile narin bir font yan yana <strong style="color:var(--color-text-primary);">huzursuz</strong> durur.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:15px 16px; display:flex; flex-direction:column; gap:7px;">
                        <div style="display:flex; align-items:center; gap:8px;"><span style="font-size:1.05rem;">🚫</span><strong style="color:var(--color-warning); font-size:0.86rem;">Aynı kategori tuzağı</strong></div>
                        <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">İki dekoratif/süslü font (iki el yazısı, iki gösterişli başlık) <strong style="color:var(--color-text-primary);">çarpışır</strong>; nötr sans aileleri istisnadır.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">👀</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;"><strong style="color:var(--color-text-primary);">En pratik test:</strong> ikisini gerçek başlık ve gövde metniyle yan yana koy; biri diğerini destekliyorsa uyum var, yarışıyorlarsa yok. Uyumlu bir <strong style="color:var(--color-text-primary);">superfamily</strong> de baştan güvenlidir (serif + sans birlikte tasarlanmış, ör. IBM Plex). Kararlar tamam; sıra bunları CSS'e yazmakta.</span>
                </div>
            `
        },

        // font-family yığını (fallback stack) — kararı CSS'e yazmak
        {
            id: "font-family-yigini",
            category: "Bölüm 1: Tipografi",
            title: "font-family: Yedekli Yığın",
            html: `
                <p class="vcd-content-intro">CSS'te yazı tipi tek bir isimle değil, bir <strong style="color:var(--color-text-primary);">yığınla</strong> (stack) verilir. Tarayıcı listeyi sırayla dener: ilk yazı tipi yoksa bir sonrakine geçer (fallback). En sonda her zaman genel bir aile bırakılır, ki hiçbiri bulunmazsa bile metin okunur kalsın.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1fr 1.05fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod"><span lang="en">font-family</span> · sırayla denenir</div>
                        <pre class="html-kod" style="flex:1; font-size:0.74rem; margin:0; line-height:1.8;"><span style="color:#818cf8;">body</span> {
  <span style="color:#7dd3fc;">font-family</span>:
    <span class="yig-ad" data-i="0" style="color:#34d399;">"Inter"</span>,
    <span class="yig-ad" data-i="1" style="color:#34d399;">system-ui</span>,
    <span class="yig-ad" data-i="2" style="color:#34d399;">sans-serif</span>;
}</pre>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;"><code>"Inter"</code> indirilen bir web fontu; <code>system-ui</code> kullanıcının sistem fontu; <code>sans-serif</code> ise son güvence (genel aile).</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Hangi font çalışır? · aç / kapat</div>
                        <div class="vcd-glass-card" style="flex:1; padding:16px; display:flex; flex-direction:column; gap:12px; justify-content:center;">
                            <div class="yig-onizleme" style="font-size:1.55rem; color:var(--color-text-primary); line-height:1.2;">Görsel İletişim</div>
                            <div style="display:flex; flex-direction:column; gap:7px;">
                                <div class="yig-satir" data-i="0" style="display:flex; align-items:center; gap:9px; font-size:0.8rem;"><button class="yig-pill sim-btn" data-i="0" style="min-width:64px;">✓ Var</button><code>"Inter"</code><span style="color:var(--color-text-muted); font-size:0.72rem;">web fontu</span></div>
                                <div class="yig-satir" data-i="1" style="display:flex; align-items:center; gap:9px; font-size:0.8rem;"><button class="yig-pill sim-btn" data-i="1" style="min-width:64px;">✓ Var</button><code>system-ui</code><span style="color:var(--color-text-muted); font-size:0.72rem;">sistem fontu</span></div>
                                <div class="yig-satir" data-i="2" style="display:flex; align-items:center; gap:9px; font-size:0.8rem;"><span style="min-width:64px; font-size:0.64rem; color:var(--color-text-muted); text-align:center;">her zaman</span><code>sans-serif</code><span style="color:var(--color-text-muted); font-size:0.72rem;">son güvence</span></div>
                            </div>
                            <p style="font-size:0.72rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Tarayıcı listedeki <strong style="color:var(--color-text-primary);">ilk bulunan</strong> fontu kullanır. Şu an: <strong class="yig-aktif-ad" style="color:var(--color-primary);">Inter</strong>.</p>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🪜</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Yığın bir güvenlik ağıdır: tercih edilen font yüklenmezse sayfa fontsuz kalmaz, listedeki bir sonrakine düşer. Son sıradaki genel aile yüzünden metin her koşulda görünür.</span>
                </div>
            `,
            onRender: (slideEl) => {
                const onizleme = slideEl.querySelector('.yig-onizleme');
                const pills = Array.from(slideEl.querySelectorAll('.yig-pill'));
                const satirlar = Array.from(slideEl.querySelectorAll('.yig-satir'));
                const adlar = Array.from(slideEl.querySelectorAll('.yig-ad'));
                const aktifAd = slideEl.querySelector('.yig-aktif-ad');
                if (!onizleme || !satirlar.length) return;
                const fontlar = ["'Inter','Helvetica Neue',Arial,sans-serif", "system-ui,sans-serif", "sans-serif"];
                const etiket = ["Inter", "system-ui", "sans-serif"];
                const durum = [true, true, true]; // index 2 (sans-serif) her zaman var
                const ilkVar = () => durum.findIndex(v => v);
                const uygula = () => {
                    const aktif = ilkVar();
                    onizleme.style.fontFamily = fontlar[aktif];
                    if (aktifAd) aktifAd.textContent = etiket[aktif];
                    satirlar.forEach((s, i) => {
                        const yok = !durum[i];
                        s.style.opacity = yok ? "0.4" : "1";
                        const code = s.querySelector('code');
                        if (code) {
                            code.style.textDecoration = yok ? "line-through" : "none";
                            code.style.color = (i === aktif) ? "var(--color-primary)" : "";
                        }
                    });
                    pills.forEach(p => {
                        const i = parseInt(p.dataset.i, 10);
                        const yok = !durum[i];
                        p.textContent = yok ? "✗ Yok" : "✓ Var";
                        p.classList.toggle('active', !yok);
                    });
                    adlar.forEach((a, i) => {
                        const yok = !durum[i];
                        a.style.opacity = yok ? "0.32" : "1";
                        a.style.textDecoration = yok ? "line-through" : "none";
                        a.style.fontWeight = (i === aktif) ? "700" : "400";
                    });
                };
                pills.forEach(p => {
                    p.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const i = parseInt(p.dataset.i, 10);
                        durum[i] = !durum[i];
                        uygula();
                    });
                });
                uygula();
            }
        },

        // Slide 5a: Web fontu (1/3) — Seç
        {
            id: "web-font-sec",
            category: "Bölüm 1: Tipografi",
            title: "Web Fontu (1/3): Seç",
            html: `
                <p class="vcd-content-intro">Yığının son güvencesi her zaman çalışır, ama tasarımcı çoğu zaman <strong style="color:var(--color-text-primary);">belirli</strong> bir yazı tipi ister. Ziyaretçinin bilgisayarında kurulu olmayan bir font, Google Fonts gibi servislerden sayfayla birlikte indirilir. İlk adım, <code>fonts.google.com</code>'da yazı tipini seçmektir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">fonts.google.com · font kartı</div>
                        <div class="vcd-glass-card" style="flex:1; padding:18px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                            <div style="font-family:'Helvetica Neue',Arial,sans-serif; font-size:2rem; color:var(--color-text-primary); line-height:1;">Inter</div>
                            <div style="font-family:'Helvetica Neue',Arial,sans-serif; font-size:0.92rem; color:var(--color-text-secondary);">Görsel iletişim tasarımı</div>
                            <div style="height:1px; background:var(--border-light); margin:3px 0;"></div>
                            <div style="display:flex; gap:7px; flex-wrap:wrap; align-items:center;">
                                <span style="font-size:0.7rem; padding:3px 9px; border-radius:20px; background:rgba(212,255,0,0.1); border:1px solid rgba(212,255,0,0.3); color:var(--color-primary);">Regular 400 ✓</span>
                                <span style="font-size:0.7rem; padding:3px 9px; border-radius:20px; background:rgba(212,255,0,0.1); border:1px solid rgba(212,255,0,0.3); color:var(--color-primary);">Bold 700 ✓</span>
                                <span style="font-size:0.66rem; color:var(--color-text-muted);">yalnız gereken iki ağırlık seçilir</span>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Seçerken iki karar</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:9px; justify-content:center;">
                            <div style="display:flex; gap:10px; padding:12px 14px; background:rgba(2,184,204,0.05); border:1px solid rgba(2,184,204,0.22); border-radius:9px;">
                                <span style="font-size:1.1rem;">🔤</span>
                                <div><strong style="color:var(--color-text-primary); font-size:0.83rem;">Aile</strong><div style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">İçeriğin tonuna uygun yazı tipi (Inter: modern, nötr bir sans-serif).</div></div>
                            </div>
                            <div style="display:flex; gap:10px; padding:12px 14px; background:rgba(212,255,0,0.05); border:1px solid rgba(212,255,0,0.22); border-radius:9px;">
                                <span style="font-size:1.1rem;">⚖️</span>
                                <div><strong style="color:var(--color-text-primary); font-size:0.83rem;">Ağırlıklar</strong><div style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Yalnız gereken kalınlıklar (400 gövde + 700 başlık). Her ağırlık ek dosyadır.</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">👉</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Font ve ağırlıklar seçilince Google Fonts hazır bir kod parçası üretir. Sıradaki adım o kodu sayfaya bağlamak.</span>
                </div>
            `
        },

        // Slide 5b: Web fontu (2/3) — Bağla (gerçek embed kodu)
        {
            id: "web-font-bagla",
            category: "Bölüm 1: Tipografi",
            title: "Web Fontu (2/3): Bağla",
            html: `
                <p class="vcd-content-intro">Google Fonts'un verdiği kod, sayfanın <code>&lt;head&gt;</code> bölümüne yapıştırılır. Üç satırdır: ilk ikisi font sunucusuna bağlantıyı önceden açar (<code>preconnect</code>, yüklemeyi hızlandırır), üçüncüsü asıl yazı tipini getirir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1.35fr 1fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div class="pane-label kod" style="margin:0;"><span lang="en">index.html</span> · &lt;head&gt; içine</div>
                            <button class="sim-btn kopyala-btn" data-hedef="#gf-kod">⧉ Kopyala</button>
                        </div>
                        <pre id="gf-kod" class="html-kod" style="flex:1; font-size:0.63rem; margin:0; line-height:1.6;"><span class="t">&lt;head&gt;</span>
  <span class="t">&lt;link</span> <span class="a">rel</span>=<span class="v">"preconnect"</span> <span class="a">href</span>=<span class="v">"https://fonts.googleapis.com"</span><span class="t">&gt;</span>
  <span class="t">&lt;link</span> <span class="a">rel</span>=<span class="v">"preconnect"</span> <span class="a">href</span>=<span class="v">"https://fonts.gstatic.com"</span> <span class="a">crossorigin</span><span class="t">&gt;</span>
  <span class="t">&lt;link</span> <span class="a">href</span>=<span class="v">"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&amp;display=swap"</span> <span class="a">rel</span>=<span class="v">"stylesheet"</span><span class="t">&gt;</span>
<span class="t">&lt;/head&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Üç satır ne yapar</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:9px; justify-content:center;">
                            <div style="padding:11px 13px; background:rgba(129,140,248,0.06); border:1px solid rgba(129,140,248,0.22); border-radius:8px;"><strong style="color:#818cf8; font-size:0.8rem;">preconnect ×2</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Font sunucusuna bağlantıyı erkenden açar; font daha hızlı gelir.</div></div>
                            <div style="padding:11px 13px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.25); border-radius:8px;"><strong style="color:var(--color-primary); font-size:0.8rem;">stylesheet</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Asıl satır: <code>Inter</code>'i 400 ve 700 ağırlıkta indirir.</div></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🔗</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;"><code>family=Inter:wght@400;700</code> bölümü hangi font ve hangi ağırlıkların indirileceğini söyler. Başka bir font seçilince yalnızca bu satır değişir.</span>
                </div>
            `,
            onRender: (slideEl) => {
                slideEl.querySelectorAll('.kopyala-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const hedef = slideEl.querySelector(btn.dataset.hedef);
                        if (!hedef) return;
                        const bitti = () => {
                            btn.textContent = '✓ Kopyalandı';
                            btn.classList.add('active');
                            setTimeout(() => { btn.textContent = '⧉ Kopyala'; btn.classList.remove('active'); }, 1500);
                        };
                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            navigator.clipboard.writeText(hedef.innerText).then(bitti).catch(bitti);
                        } else { bitti(); }
                    });
                });
            }
        },

        // Slide 5c: Web fontu (3/3) — Kullan + yedek yığın
        {
            id: "web-font-kullan",
            category: "Bölüm 1: Tipografi",
            title: "Web Fontu (3/3): Kullan",
            html: `
                <p class="vcd-content-intro">Font bağlandıktan sonra CSS'te kullanılır. İndirilen yazı tipi yığının <strong style="color:var(--color-text-primary);">başına</strong> yazılır, arkasına yedekler bırakılır. Böylece font yüklenene kadar (ya da yüklenmezse) metin yine okunur kalır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css · <span lang="en">font-family</span></div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.75;"><span style="color:#818cf8;">body</span> {
  <span style="color:#7dd3fc;">font-family</span>: <span style="color:#34d399;">"Inter"</span>, <span style="color:#34d399;">system-ui</span>, <span style="color:#34d399;">sans-serif</span>;
}
<span style="color:#818cf8;">h1</span> { <span style="color:#7dd3fc;">font-weight</span>: <span style="color:#34d399;">700</span>; }</pre>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">İndirilen <code>"Inter"</code> başta; <code>system-ui</code> ve <code>sans-serif</code> yedekte. Bu, geçen slaytın yığını. Google Fonts <code>&lt;link&gt;</code>'in yanında bu <code>font-family</code> satırını da hazır verir (<span lang="en">"CSS rules to specify families"</span>); onu kopyalayıp CSS'e koyarsın.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Inter yüklenince · sayfa</div>
                        <div class="html-cikti" style="flex:1; font-family:'Helvetica Neue',Arial,sans-serif; background:#faf8f4; color:#26211c; display:flex; flex-direction:column; justify-content:center; gap:9px;">
                            <div style="font-size:1.5rem; font-weight:700; line-height:1.15;">Deniz Demir</div>
                            <div style="font-size:0.9rem; line-height:1.55;">Görsel iletişim tasarımı öğrencisi. Sayfa artık seçilen yazı tipiyle görünür.</div>
                        </div>
                    </div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div class="vcd-analogy-box" style="margin:0;">
                        <h4>Herkes Aynı Yazıyı Görür</h4>
                        <p>Web fontu sayfayla indiğinden, tasarım ziyaretçinin bilgisayarında o font kurulu olsun olmasın aynı görünür. Yedek yığın da yüklenene kadar metni okunur tutar.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; justify-content:center; gap:9px; padding:16px 18px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:10px;">
                        <div style="display:flex; align-items:center; gap:9px;"><span style="font-size:1.2rem;">⚖️</span><strong style="color:var(--color-secondary); font-size:0.9rem;">Az Font, Hızlı Sayfa</strong></div>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Her font ve her ağırlık indirilen bir dosyadır. Pratikte bir, en çok iki yazı tipi yeter: biri başlık, biri gövde.</p>
                    </div>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 2: TİPOGRAFİK ÖLÇEK + RİTİM
        // ============================================================

        // Slide 7a: Boyut birimi 1/3 — px (sabit)
        {
            id: "birim-px",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Boyut Birimi (1/3): px",
            html: `
                <p class="vcd-content-intro">Yazı boyutu farklı birimlerle verilebilir ve seçim yalnızca teknik değil, bir <strong style="color:var(--color-text-primary);">erişilebilirlik</strong> kararıdır. En basiti <code>px</code> (piksel): ekrandaki sabit bir nokta sayısı.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css</div>
                        <pre class="html-kod" style="flex:1; font-size:0.82rem; margin:0; display:flex; align-items:center;"><span style="color:#818cf8;">p</span> { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">24px</span>; }</pre>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.5; margin:0;"><code>24px</code> her zaman 24 pikseldir: sabit ve öngörülebilir.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Sonuç · değişmez</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Helvetica Neue',Arial,sans-serif; display:flex; flex-direction:column; justify-content:center; gap:6px;">
                            <div style="font-size:24px; line-height:1.15;">Sabit metin</div>
                            <div style="font-size:0.66rem; color:#9a8f7e;">hep 24px · kullanıcı ayarına aldırmaz</div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(245,158,11,0.07); border-left:2px solid var(--color-warning); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">⚠️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Sorun: kullanıcı tarayıcı <strong style="color:var(--color-text-primary);">yazı boyutu ayarını</strong> büyütse bile <code>px</code> metni değişmez; bu yüzden gövde metninde önerilmez. (Sayfa <strong style="color:var(--color-text-primary);">yakınlaştırma</strong>, yani <code>Ctrl/Cmd +</code>, ayrı bir şeydir; o, px dâhil her şeyi büyütür.) Peki ayara saygı gösteren birim hangisi?</span>
                </div>
            `
        },

        // Slide 7b: Boyut birimi 2/3 — rem (köke göre, interaktif)
        {
            id: "birim-rem",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Boyut Birimi (2/3): rem",
            html: `
                <p class="vcd-content-intro"><code>rem</code> sabit değildir, <strong style="color:var(--color-text-primary);">köke göre</strong> ölçeklenir. <code>1rem</code> = sayfanın kök (<code>html</code>) yazı boyutu, varsayılan 16px. Kullanıcı tarayıcı ayarından (<strong style="color:var(--color-text-secondary);">Ayarlar › Görünüm › Yazı tipi boyutu</strong>) kökü büyütünce, <code>rem</code> ile yazılan her metin onunla büyür. Bu yüzden <strong style="color:var(--color-primary);">tercih edilen birimdir</strong>.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:auto 1fr;">
                    <div style="display:flex; flex-direction:column; gap:9px; justify-content:center;">
                        <div class="pane-label">Tarayıcı yazı boyutu (kök)</div>
                        <div style="display:flex; gap:7px;">
                            <button class="kok-btn sim-btn active" data-kok="16">16px</button>
                            <button class="kok-btn sim-btn" data-kok="20">20px</button>
                            <button class="kok-btn sim-btn" data-kok="24">24px</button>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:0; max-width:240px;">Butona bas (kök boyutu değişsin); iki kutuyu izle. Soldaki <code>px</code> sabit kalır, sağdaki <code>rem</code> köke göre büyür.</p>
                    </div>
                    <div style="display:flex; gap:10px; align-items:stretch;">
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Helvetica Neue',Arial,sans-serif; display:flex; flex-direction:column; justify-content:center; gap:5px;">
                            <div style="font-size:0.64rem; color:#b4632a; font-weight:700;"><span lang="en">font-size</span>: 24px</div>
                            <div style="font-size:24px; line-height:1.15; color:#26211c;">Sabit</div>
                            <div style="font-size:0.62rem; color:#9a8f7e;">hep 24px · değişmez</div>
                        </div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Helvetica Neue',Arial,sans-serif; display:flex; flex-direction:column; justify-content:center; gap:5px;">
                            <div style="font-size:0.64rem; color:#0a7d8c; font-weight:700;"><span lang="en">font-size</span>: 1.5rem</div>
                            <div class="rem-ornek" style="font-size:24px; line-height:1.15; color:#26211c;">Ölçeklenir</div>
                            <div class="rem-okuma" style="font-size:0.62rem; color:#0a7d8c; font-weight:600;">şu an 24px · köke göre</div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">♿</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Kök boyutu büyüdükçe <code>rem</code> metni onunla büyür, <code>px</code> sabit kalır. <code>rem</code> kullanmak, kullanıcının yazı boyutu tercihine saygı göstermenin en kolay yoludur.</span>
                </div>
            `,
            onRender: (slideEl) => {
                const btns = Array.from(slideEl.querySelectorAll('.kok-btn'));
                const rem = slideEl.querySelector('.rem-ornek');
                const remOkuma = slideEl.querySelector('.rem-okuma');
                if (!btns.length || !rem) return;
                const uygula = (kok) => {
                    const px = Math.round(kok * 1.5 * 10) / 10; // 1.5rem = 1.5 × kök
                    rem.style.fontSize = px + 'px';
                    if (remOkuma) remOkuma.textContent = 'şu an ' + px + 'px · köke göre';
                    btns.forEach(b => b.classList.toggle('active', b.dataset.kok === String(kok)));
                };
                btns.forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); uygula(parseInt(b.dataset.kok, 10)); }));
                uygula(16);
            }
        },

        // Slide 7c: Boyut birimi 3/3 — em (elemana göre, katlanma)
        {
            id: "birim-em",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Boyut Birimi (3/3): em",
            html: `
                <p class="vcd-content-intro"><code>em</code> de göreceli bir birimdir, ama köke değil <strong style="color:var(--color-text-primary);">içinde bulunduğu üst elemanın</strong> yazı boyutuna oranlıdır. Tek bir yerde kolaydır; ama iç içe kullanılınca <strong style="color:var(--color-text-primary);">katlanır</strong>.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">İç içe 1.5em · gerçek katlanma</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Helvetica Neue',Arial,sans-serif; display:flex; align-items:center;">
                            <div style="font-size:20px; line-height:1.25;">Taban 20px
                                <div style="font-size:1.5em; color:#0a7d8c; margin-top:4px;">↳ 1.5em = 30px
                                    <div style="font-size:1.5em; color:#b4632a; margin-top:4px;">↳ 1.5em = 45px</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:9px; justify-content:center;">
                        <div style="padding:11px 13px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:8px;"><strong style="color:var(--color-secondary); font-size:0.81rem;">Aynı değer, farklı sonuç</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Her katmanda <code>1.5em</code> yazıldı; ama her biri bir üstün boyutunu 1.5'la çarptığı için 20 → 30 → 45px oldu.</div></div>
                        <div style="padding:11px 13px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.22); border-radius:8px;"><strong style="color:var(--color-primary); font-size:0.81rem;">Ne zaman işe yarar</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Bir bileşene göre <em>yerel</em> ölçek için (ör. butonun iç boşluğu yazıyla orantılı büyüsün).</div></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🧭</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Özet: gövde ve genel ölçek için <code>rem</code> (öngörülebilir), yerel/bileşen ölçeği için <code>em</code>, sabit gerektiğinde <code>px</code>. Şüphede kalınca <strong style="color:var(--color-text-primary);">rem</strong>.</span>
                </div>
            `
        },

        // Slide 8: font-weight
        {
            id: "font-weight",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "font-weight: Vurgunun Ağırlığı",
            html: `
                <p class="vcd-content-intro">Yazının kalınlığı (<code>font-weight</code>) bir vurgu aracıdır. Sayısal değerlerle verilir: 100 (en ince) ile 900 (en kalın) arası. Ağırlık farkı, okura "önce şuraya bak" der; boyut gibi ağırlık da bir hiyerarşi kararıdır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1.1fr 1fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Ağırlık merdiveni · tek aile (Inter)</div>
                        <div class="html-cikti fw-demo" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Inter','Helvetica Neue',Arial,sans-serif; display:flex; flex-direction:column; justify-content:center; gap:7px;">
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-weight:300; font-size:1.35rem; min-width:130px;">Tipografi</span><span style="font-size:0.68rem; color:#9a8f7e;">300 · Light</span></div>
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-weight:400; font-size:1.35rem; min-width:130px;">Tipografi</span><span style="font-size:0.68rem; color:#9a8f7e;">400 · Regular</span></div>
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-weight:600; font-size:1.35rem; min-width:130px;">Tipografi</span><span style="font-size:0.68rem; color:#9a8f7e;">600 · SemiBold</span></div>
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-weight:700; font-size:1.35rem; min-width:130px;">Tipografi</span><span style="font-size:0.68rem; color:#9a8f7e;">700 · Bold</span></div>
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-weight:900; font-size:1.35rem; min-width:130px;">Tipografi</span><span style="font-size:0.68rem; color:#9a8f7e;">900 · Black</span></div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Ağırlık = hiyerarşi</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Inter','Helvetica Neue',Arial,sans-serif; display:flex; flex-direction:column; justify-content:center; gap:8px;">
                            <div style="font-weight:700; font-size:1.4rem; line-height:1.15;">Afiş Serisi</div>
                            <div style="font-weight:400; font-size:0.9rem; line-height:1.55;">Sergi için üç afiş tasarımı. Başlık <strong>kalın</strong> olduğu için göz önce ona gider, gövde <strong>normal</strong> ağırlıkta arkadan okunur.</div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(245,158,11,0.06); border-left:2px solid var(--color-warning); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">⚖️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Orta ağırlıklar (400 gövde, 700 başlık) en okunaklısıdır. Çok ince (100-200) ekranda kaybolur; çok kalın (900) küçük puntoda harf içi boşlukları "dolar". Aradaki fark da yeterince belirgin olmalı: 400 ile 500 ayrımı çoğu zaman fark edilmez.</span>
                </div>
            `,
            onRender: (slideEl) => {
                if (!document.getElementById('gf-inter-fonts')) {
                    const l = document.createElement('link');
                    l.id = 'gf-inter-fonts';
                    l.rel = 'stylesheet';
                    l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap';
                    document.head.appendChild(l);
                }
            }
        },

        // Slide 8b: Variable font — tek dosya, sürekli ağırlık ekseni
        {
            id: "variable-font",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Variable Font: Tek Dosya, Tüm Ağırlıklar",
            html: `
                <p class="vcd-content-intro">Az önceki ağırlık merdiveninde her kalınlık (300, 400, 700, 900…) <strong style="color:var(--color-text-primary);">ayrı bir dosyaydı</strong>. <span lang="en">Variable font</span> (değişken yazı tipi) bunu tersine çevirir: tek dosya, bir <strong style="color:var(--color-text-primary);">eksen</strong> (<span lang="en">axis</span>) boyunca sürekli aralık. Inter gibi yazı tiplerinde 100'den 900'e kadar <em>her</em> ara değer tek indirmeyle gelir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1fr 1.05fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">CSS · aralık iste + kullan</div>
                        <pre class="html-kod" style="flex:1; font-size:0.66rem; margin:0; line-height:1.7;"><span style="color:#6b7280;">/* Google Fonts: tek tek yerine ARALIK */</span>
family=Inter:<span style="color:#34d399;">wght@100..900</span>

<span style="color:#818cf8;">h1</span>     { <span style="color:#7dd3fc;">font-weight</span>: <span style="color:#34d399;">437</span>; }   <span style="color:#6b7280;">/* her değer! */</span>
<span style="color:#818cf8;">.ince</span>  { <span style="color:#7dd3fc;">font-variation-settings</span>: <span style="color:#34d399;">"wght" 280</span>; }</pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:0;"><code>..</code> "aralık" demektir. Artık 400/700 gibi basamaklara sıkışmazsın; <code>437</code> bile geçerlidir.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Kaydır · canlı ağırlık (tek dosya)</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Inter','Helvetica Neue',Arial,sans-serif; display:flex; flex-direction:column; justify-content:center; gap:16px; padding:18px 22px;">
                            <div id="vf-ornek" style="font-weight:400; font-size:2.6rem; line-height:1.05;">Tipografi</div>
                            <input id="vf-slider" type="range" min="100" max="900" step="1" value="400" style="width:100%; accent-color:var(--color-secondary); cursor:pointer;">
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.7rem; color:#9a8f7e;"><span>100 · ince</span><span style="font-size:0.78rem;"><code style="color:#26211c;">font-weight: <span id="vf-deger">400</span></code></span><span>900 · kalın</span></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🎚️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Ağırlık tek eksen; başka eksenler de olabilir: <code>wdth</code> (genişlik), <code>slnt</code> (eğim), <code>opsz</code> (optik boyut). Kazanç çift: <strong style="color:var(--color-text-primary);">tek dosya</strong> (beş ayrı ağırlıktan hafif) + <strong style="color:var(--color-text-primary);">sınırsız ara değer</strong>.</span>
                </div>
            `,
            onRender: (slideEl) => {
                if (!document.getElementById('gf-inter-var')) {
                    const l = document.createElement('link');
                    l.id = 'gf-inter-var';
                    l.rel = 'stylesheet';
                    l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap';
                    document.head.appendChild(l);
                }
                const slider = slideEl.querySelector('#vf-slider');
                const ornek = slideEl.querySelector('#vf-ornek');
                const deger = slideEl.querySelector('#vf-deger');
                if (slider && ornek && deger) {
                    const upd = () => { ornek.style.fontWeight = slider.value; deger.textContent = slider.value; };
                    ['input', 'click', 'keydown', 'pointerdown'].forEach(ev => slider.addEventListener(ev, (e) => e.stopPropagation()));
                    slider.addEventListener('input', upd);
                    upd();
                }
            }
        },

        // Slide 9: line-height + letter-spacing
        {
            id: "ritim-line-height",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Satır Aralığı: Okumanın Nefesi",
            html: `
                <p class="vcd-content-intro">Satır aralığı (<code>line-height</code>) metnin nefesidir: çok sıkışık satırlar yorar, çok açık olanlar dağıtır. Aynı paragraf, yalnızca satır aralığı değişerek bambaşka bir okuma deneyimi verir:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-warning);"><span lang="en">line-height</span>: 1.1 · sıkışık</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Helvetica Neue',Arial,sans-serif; display:flex; align-items:center;">
                            <p style="margin:0; font-size:0.9rem; line-height:1.1;">Görsel iletişim tasarımı, bir mesajı doğru tonla iletmektir. Renk, yazı ve boşluk birlikte çalışır. Satırlar birbirine girince göz nerede bittiğini şaşırır ve okumak yorucu olur.</p>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti"><span lang="en">line-height</span>: 1.6 · rahat</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; font-family:'Helvetica Neue',Arial,sans-serif; display:flex; align-items:center;">
                            <p style="margin:0; font-size:0.9rem; line-height:1.6;">Görsel iletişim tasarımı, bir mesajı doğru tonla iletmektir. Renk, yazı ve boşluk birlikte çalışır. Satırlar rahat aralıklı olunca göz her satırı kolayca bulur ve okumak akıcılaşır.</p>
                        </div>
                    </div>
                </div>
                <div class="vcd-grid-3" style="margin-top:14px; align-items:stretch;">
                    <div style="padding:12px 14px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.22); border-radius:9px;">
                        <strong style="color:var(--color-primary); font-size:0.8rem;">↕ line-height ≥ 1.5</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:4px 0 0;">Gövde metni için erişilebilirlik rehberi (WCAG) en az 1.5 önerir. Başlıklar daha sıkı (1.1-1.2) olabilir.</p>
                    </div>
                    <div style="padding:12px 14px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:9px;">
                        <strong style="color:var(--color-secondary); font-size:0.8rem;">↔ letter-spacing</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:4px 0 0;">Harf arası boşluk; <code>letter-spacing</code> ile ayarlanır: <span style="color:var(--color-text-primary);">SERGİ</span> → <code>0.15em</code> <span style="color:var(--color-text-primary); letter-spacing:0.15em;">SERGİ</span>. Büyük başlıkta hafif açmak ferahlatır; gövdede değiştirilmez.</p>
                    </div>
                    <div style="padding:12px 14px; background:rgba(129,140,248,0.06); border:1px solid rgba(129,140,248,0.22); border-radius:9px;">
                        <strong style="color:#818cf8; font-size:0.8rem;">⟷ satır uzunluğu</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:4px 0 0;">Bir satırda 50-75 karakter ideal. Çok uzun satırda göz başa dönmekte zorlanır.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🫁</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Aralık birimsiz yazılır: <code>line-height: 1.6</code>. Bu, font boyutunun 1.6 katı demektir ve boyut değişince oranı korur. Boşluk, metni okunur kılan görünmez bir tasarım kararıdır.</span>
                </div>
            `
        },

        // Slide 10a: Tipografik ölçek — sayılar nereden geliyor (türetme + tablo)
        {
            id: "tip-hiyerarsi",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Tipografik Ölçek: Sayılar Nereden Geliyor?",
            html: `
                <p class="vcd-content-intro">Başlıktan gövdeye boyutlar rastgele seçilmez. Bir <strong style="color:var(--color-text-primary);">taban boyuttan</strong> (genelde 16px) başlanır ve her adım, bir öncekinin sabit bir <strong style="color:var(--color-text-primary);">oranı</strong> (ör. 1.25) kadarıdır. Yani sayılar uydurma değil, hep "bir önceki × oran" ile <strong style="color:var(--color-text-primary);">türetilir</strong>:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1.1fr 1fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">16px taban × 1.25 · adım adım</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; padding:6px 4px; display:flex; align-items:center;">
                            <table style="width:100%; border-collapse:collapse; font-size:0.82rem;">
                                <tr style="color:#9a8f7e; font-size:0.62rem; text-transform:uppercase; letter-spacing:0.04em;">
                                    <td style="text-align:left; padding:6px 10px;">Öğe</td>
                                    <td style="text-align:left; padding:6px 10px;">Hesap</td>
                                    <td style="text-align:right; padding:6px 10px;">px</td>
                                    <td style="text-align:right; padding:6px 12px;">rem</td>
                                </tr>
                                <tr style="border-top:1px solid #e6ddcb;"><td style="padding:8px 10px; font-weight:700;">p</td><td style="padding:8px 10px; color:#9a8f7e;">taban</td><td style="padding:8px 10px; text-align:right; font-weight:700;">16</td><td style="padding:8px 12px; text-align:right; color:#0a7d8c;">1rem</td></tr>
                                <tr style="border-top:1px solid #e6ddcb;"><td style="padding:8px 10px; font-weight:700;">h3</td><td style="padding:8px 10px;">16 × 1.25</td><td style="padding:8px 10px; text-align:right; font-weight:700;">20</td><td style="padding:8px 12px; text-align:right; color:#0a7d8c;">1.25rem</td></tr>
                                <tr style="border-top:1px solid #e6ddcb;"><td style="padding:8px 10px; font-weight:700;">h2</td><td style="padding:8px 10px;">20 × 1.25</td><td style="padding:8px 10px; text-align:right; font-weight:700;">25</td><td style="padding:8px 12px; text-align:right; color:#0a7d8c;">1.56rem</td></tr>
                                <tr style="border-top:1px solid #e6ddcb;"><td style="padding:8px 10px; font-weight:700;">h1</td><td style="padding:8px 10px;">25 × 1.25</td><td style="padding:8px 10px; text-align:right; font-weight:700;">31</td><td style="padding:8px 12px; text-align:right; color:#0a7d8c;">1.95rem</td></tr>
                            </table>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Gözle · aynı merdiven</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; display:flex; flex-direction:column; justify-content:center; gap:7px;">
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-size:1.95rem; font-weight:700; line-height:1;">h1</span><span style="font-size:0.66rem; color:#9a8f7e;">31px</span></div>
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-size:1.56rem; font-weight:700; line-height:1;">h2</span><span style="font-size:0.66rem; color:#9a8f7e;">25px</span></div>
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-size:1.25rem; font-weight:600; line-height:1;">h3</span><span style="font-size:0.66rem; color:#9a8f7e;">20px</span></div>
                            <div style="display:flex; align-items:baseline; gap:12px;"><span style="font-size:1rem; line-height:1;">p · gövde metni</span><span style="font-size:0.66rem; color:#9a8f7e;">16px</span></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🔢</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Anahtar fikir: <strong style="color:var(--color-text-primary);">her satır bir öncekinin 1.25 katı</strong> (16 → 20 → 25 → 31). Tek karar verdiğin sayı orandır; gerisi kendiliğinden gelir. Peki bu oranı neye göre seçeriz?</span>
                </div>
            `
        },

        // Slide 10b: Ölçeği CSS'e yazmak + oran seçmek
        {
            id: "tip-olcek-css",
            category: "Bölüm 2: Tipografik Ölçek",
            title: "Ölçeği CSS'e Yazmak ve Oranı Seçmek",
            html: `
                <p class="vcd-content-intro">Türetilen boyutlar <code>rem</code> ile yazılır; tek karar olan <strong style="color:var(--color-text-primary);">oran</strong> ise hiyerarşinin kişiliğini belirler: küçük oran sakin, büyük oran çarpıcı durur.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1.05fr 1fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css · rem ile ölçek</div>
                        <pre class="html-kod" style="flex:1; font-size:0.72rem; margin:0; line-height:1.85;"><span class="c">/* taban 16px · her adım ×1.25 */</span>
<span style="color:#818cf8;">html</span> { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">16px</span>; }
<span style="color:#818cf8;">p</span>  { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">1rem</span>; }    <span class="c">/* 16 */</span>
<span style="color:#818cf8;">h3</span> { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">1.25rem</span>; } <span class="c">/* 16×1.25=20 */</span>
<span style="color:#818cf8;">h2</span> { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">1.56rem</span>; } <span class="c">/* ×1.25=25 */</span>
<span style="color:#818cf8;">h1</span> { <span style="color:#7dd3fc;">font-size</span>: <span style="color:#34d399;">1.95rem</span>; } <span class="c">/* ×1.25≈31 */</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:9px; justify-content:center;">
                        <div style="display:flex; flex-direction:column; gap:7px; padding:13px 15px; background:rgba(212,255,0,0.05); border:1px solid rgba(212,255,0,0.25); border-radius:10px;">
                            <strong style="color:var(--color-primary); font-size:0.84rem;">Oran 1.25 <span style="color:var(--color-text-muted); font-weight:400;">· yumuşak</span></strong>
                            <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Başlıkla gövde arasında dengeli, sakin bir fark. <span style="color:var(--color-text-muted);">(Yaygın adı: Major Third.)</span></p>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:7px; padding:13px 15px; background:rgba(2,184,204,0.05); border:1px solid rgba(2,184,204,0.22); border-radius:10px;">
                            <strong style="color:var(--color-secondary); font-size:0.84rem;">Oran 1.333 <span style="color:var(--color-text-muted); font-weight:400;">· belirgin</span></strong>
                            <p style="font-size:0.77rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Başlıklar daha çarpıcı, daha güçlü kontrast. <span style="color:var(--color-text-muted);">(Yaygın adı: Perfect Fourth.)</span></p>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">📐</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;"><strong style="color:var(--color-text-primary);">Pratik:</strong> bir oran seç, taban 16px'i her adımda çarp, çıkan rem değerlerini yaz. Sonuç gözün nereden başlayıp nereye gideceğini söyler: <code>h1</code> en güçlü ses, <code>p</code> sakin gövde.</span>
                </div>
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
                <p class="vcd-content-intro">Geçen ders renk <code>HEX</code> ve <code>RGB</code> ile verilmişti. İkisi de aynı rengi farklı yazar; tarayıcı için fark yoktur:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Aynı renk · iki yazım</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; display:flex; align-items:center; gap:16px;">
                            <div style="width:70px; height:70px; border-radius:10px; background:#e67e22; flex-shrink:0; box-shadow:0 2px 8px rgba(0,0,0,0.12);"></div>
                            <div style="display:flex; flex-direction:column; gap:8px;">
                                <div style="font-family:'JetBrains Mono',monospace; font-size:0.92rem;"><span style="color:#9a8f7e;">HEX</span> <strong>#e67e22</strong></div>
                                <div style="font-family:'JetBrains Mono',monospace; font-size:0.92rem;"><span style="color:#9a8f7e;">RGB</span> <strong>rgb(230, 126, 34)</strong></div>
                                <div style="font-size:0.72rem; color:#9a8f7e; line-height:1.4;">İki çift / üç sayı: kırmızı, yeşil, mavi kanalları.</div>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Asıl mesele yazım değil, seçim</div>
                        <div class="vcd-glass-card" style="flex:1; padding:16px; display:flex; flex-direction:column; gap:10px; justify-content:center;">
                            <div style="display:flex; gap:10px; align-items:center;"><span style="font-size:1.1rem;">🌈</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">Tarayıcı <strong style="color:var(--color-text-primary);">16 milyondan</strong> fazla rengi gösterebilir.</span></div>
                            <div style="display:flex; gap:10px; align-items:center;"><span style="font-size:1.1rem;">🎯</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">İyi tasarım renkleri çoğaltmaz, <strong style="color:var(--color-text-primary);">sınırlar</strong>: birkaç renk, net rollerle.</span></div>
                            <div style="display:flex; gap:10px; align-items:center;"><span style="font-size:1.1rem;">❓</span><span style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.45;">Soru "hangi renk güzel" değil, "hangi <strong style="color:var(--color-text-primary);">birkaç renk birlikte</strong> çalışır".</span></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🧩</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Renk de yazı gibi bir sistemdir. Bu bölüm, tek tek "güzel renkler"den sınırlı ve uyumlu bir <strong style="color:var(--color-text-primary);">palete</strong> geçer: her renge bir görev verir.</span>
                </div>
            `
        },

        // Slide 12: Renk rolleri — primary / secondary / accent / nötr
        {
            id: "renk-rolleri",
            category: "Bölüm 3: Renk",
            title: "Renklerin Rolleri",
            html: `
                <p class="vcd-content-intro">Bir palette her renk bir <strong style="color:var(--color-text-primary);">görev</strong> üstlenir. Renk seçmek değil, renge rol vermek tasarımdır:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:0; overflow:hidden; display:flex; flex-direction:column;">
                        <div style="display:flex; height:42px;"><div style="flex:1; background:#f4f1ea;"></div><div style="flex:1; background:#2d2a26;"></div></div>
                        <div style="padding:12px 15px; display:flex; flex-direction:column; gap:3px;">
                            <strong style="color:var(--color-text-primary); font-size:0.85rem;">Nötr <span style="color:var(--color-text-muted); font-weight:400;">· zemin + metin</span></strong>
                            <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Sayfanın çoğunu kaplar: arka plan ve gövde metni. Sessiz, yorucu olmayan.</p>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding:0; overflow:hidden; display:flex; flex-direction:column;">
                        <div style="height:42px; background:#2c3e50;"></div>
                        <div style="padding:12px 15px; display:flex; flex-direction:column; gap:3px;">
                            <strong style="color:var(--color-text-primary); font-size:0.85rem;">Ana renk <span style="color:var(--color-text-muted); font-weight:400;">· primary</span></strong>
                            <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Markanın kimliğini taşır: başlıklar, üst bar, ana öğeler. Sayfanın "sesi".</p>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding:0; overflow:hidden; display:flex; flex-direction:column;">
                        <div style="height:42px; background:#5f7d8c;"></div>
                        <div style="padding:12px 15px; display:flex; flex-direction:column; gap:3px;">
                            <strong style="color:var(--color-text-primary); font-size:0.85rem;">İkincil <span style="color:var(--color-text-muted); font-weight:400;">· secondary</span></strong>
                            <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Ana rengi destekler: kenarlıklar, ikincil bölümler, ayrımlar. Uyumlu bir tamamlayıcı.</p>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding:0; overflow:hidden; display:flex; flex-direction:column; border-color:rgba(230,126,34,0.4);">
                        <div style="height:42px; background:#e67e22;"></div>
                        <div style="padding:12px 15px; display:flex; flex-direction:column; gap:3px;">
                            <strong style="color:var(--color-text-primary); font-size:0.85rem;">Vurgu <span style="color:var(--color-text-muted); font-weight:400;">· accent</span></strong>
                            <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">En canlı renk, en az kullanılır: butonlar, bağlantılar, "buraya tıkla". Dikkati çeker.</p>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🎭</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Aynı renk farklı rollerde farklı iş görür. Önemli olan rengin kendisi değil, ona verilen <strong style="color:var(--color-text-primary);">görev</strong> ve bu görevlerin dengesi. Sıradaki slayt bu dengeyi sayıya döker.</span>
                </div>
            `
        },

        // Slide 13: Palet kurma — 60-30-10
        {
            id: "palet-kurma",
            category: "Bölüm 3: Renk",
            title: "Palet Kurmak: 60-30-10",
            html: `
                <p class="vcd-content-intro">Dengeli bir palette renkler eşit pay almaz. Yaygın bir rehber <strong style="color:var(--color-text-primary);">60-30-10</strong>'dur: yüzeyin payları renkler arasında bu oranla bölünür.</p>
                <div style="margin-top:0; display:flex; height:54px; border-radius:10px; overflow:hidden; font-size:0.82rem; font-weight:700;">
                    <div style="flex:60; background:#f4f1ea; color:#2d2a26; display:flex; align-items:center; justify-content:center; gap:6px;">60% <span style="font-weight:400; font-size:0.72rem;">nötr</span></div>
                    <div style="flex:30; background:#2c3e50; color:#fff; display:flex; align-items:center; justify-content:center; gap:6px;">30% <span style="font-weight:400; font-size:0.72rem;">ana/ikincil</span></div>
                    <div style="flex:10; background:#e67e22; color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.74rem;">10%</div>
                </div>
                <div class="vcd-grid-2" style="margin-top:14px; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Oran iş başında · mini arayüz</div>
                        <div class="html-cikti" style="flex:1; background:#f4f1ea; color:#2d2a26; padding:0; overflow:hidden; display:flex; flex-direction:column;">
                            <div style="background:#2c3e50; color:#fff; padding:9px 14px; font-weight:700; font-size:0.9rem;">Deniz Demir</div>
                            <div style="padding:14px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:0.82rem; line-height:1.5;">Afiş ve marka kimliği üzerine çalışan bir tasarımcı.</div>
                                <button style="align-self:flex-start; background:#e67e22; color:#fff; border:none; padding:7px 16px; border-radius:6px; font-size:0.78rem; font-weight:700;">İletişime geç</button>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:9px; justify-content:center;">
                        <div style="display:flex; gap:10px; align-items:flex-start;"><span style="font-size:1rem;">🔇</span><span style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Az vurgu = güçlü vurgu.</strong> Turuncu yalnız butonda; o yüzden göz hemen oraya gider. Her yer turuncu olsa hiçbir yer öne çıkmazdı.</span></div>
                        <div style="display:flex; gap:10px; align-items:flex-start;"><span style="font-size:1rem;">🎨</span><span style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Renkleri seçerken:</strong> çark üzerinde yan yana renkler (analogous) sakin/uyumlu durur; karşıt renkler (complementary) yüksek kontrast ve enerji verir.</span></div>
                        <div style="display:flex; gap:10px; align-items:flex-start;"><span style="font-size:1rem;">⚫</span><span style="font-size:0.78rem; color:var(--color-text-secondary); line-height:1.45;"><strong style="color:var(--color-text-primary);">Nötr için</strong> saf siyah-beyaz yerine hafif kırık tonlar (krem, antrasit) göze daha yumuşak gelir.</span></div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🛠️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Palet sıfırdan icat edilmez. <strong style="color:var(--color-text-primary);">Coolors</strong> ya da <strong style="color:var(--color-text-primary);">Adobe Color</strong> gibi araçlar uyumlu renk grupları üretir; 60-30-10 ile onları dengede tutmak tasarımcının işidir.</span>
                </div>
            `
        },

        // Slide 14: Canlı örnek — palet uygulanmış kart
        {
            id: "renk-canli-ornek",
            category: "Bölüm 3: Renk",
            title: "Palet İş Başında",
            html: `
                <p class="vcd-content-intro">Aynı kart, iki kez. Soldaki her öğe ayrı bir parlak renk; sağdaki 60-30-10 ile rollere oturmuş. Fark görsel zevk değil, <strong style="color:var(--color-text-primary);">tutarlı bir karar</strong> meselesidir:</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-warning);">Paletsiz · rastgele renkler</div>
                        <div class="html-cikti" style="flex:1; padding:0; overflow:hidden; background:#fff; display:flex; flex-direction:column;">
                            <div style="background:#d63384; color:#fff; padding:9px 14px; font-weight:700; font-size:0.9rem;">Deniz Demir</div>
                            <div style="padding:14px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:0.82rem; line-height:1.5; color:#1565c0;">Afiş ve marka kimliği üzerine çalışan bir tasarımcı.</div>
                                <button style="align-self:flex-start; background:#2e7d32; color:#fff; border:none; padding:7px 16px; border-radius:6px; font-size:0.78rem; font-weight:700;">İletişime geç</button>
                            </div>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Üç çiğ renk yarışıyor; göz nereye bakacağını bilemiyor.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Paletli · 60-30-10, roller</div>
                        <div class="html-cikti" style="flex:1; padding:0; overflow:hidden; background:#f4f1ea; color:#2d2a26; display:flex; flex-direction:column;">
                            <div style="background:#2c3e50; color:#fff; padding:9px 14px; font-weight:700; font-size:0.9rem;">Deniz Demir</div>
                            <div style="padding:14px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:0.82rem; line-height:1.5;">Afiş ve marka kimliği üzerine çalışan bir tasarımcı.</div>
                                <button style="align-self:flex-start; background:#e67e22; color:#fff; border:none; padding:7px 16px; border-radius:6px; font-size:0.78rem; font-weight:700;">İletişime geç</button>
                            </div>
                        </div>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Nötr zemin, lacivert kimlik, tek turuncu vurgu: sakin ve net.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Aynı İçerik, Farklı Karar</h4>
                    <p>İki kartta da aynı bilgi var; değişen yalnızca renk kararı. Palet, sayfayı "renkli" yapmaktan çok <strong>sakinleştirir</strong>: göz dağılmaz, önem sırası belli olur. İyi renk çoğu zaman fark edilmeyen renktir.</p>
                </div>
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
                <p class="vcd-content-intro">Bir metnin okunabilmesi, zeminden yeterince <strong style="color:var(--color-text-primary);">ayrılmasına</strong> (kontrast) bağlıdır. Açık gri zemin üzerinde açık gri yazı zarif görünebilir ama okunmaz. Kontrast bir süs değil, iletişimin ön şartıdır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Aynı metin, artan kontrast</div>
                        <div class="html-cikti" style="flex:1; background:#f4f1ea; padding:0; overflow:hidden; display:flex; flex-direction:column;">
                            <div style="flex:1; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:13px 18px; border-bottom:1px solid #e6ddcb;">
                                <span style="font-size:1.05rem; color:#cfcabf;">Görsel İletişim Tasarımı</span>
                                <span style="font-size:0.66rem; color:#9a8f7e; flex-shrink:0;">çok düşük · okunmaz</span>
                            </div>
                            <div style="flex:1; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:13px 18px; border-bottom:1px solid #e6ddcb;">
                                <span style="font-size:1.05rem; color:#8a8478;">Görsel İletişim Tasarımı</span>
                                <span style="font-size:0.66rem; color:#9a8f7e; flex-shrink:0;">orta · yorucu</span>
                            </div>
                            <div style="flex:1; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:13px 18px;">
                                <span style="font-size:1.05rem; color:#2d2a26; font-weight:600;">Görsel İletişim Tasarımı</span>
                                <span style="font-size:0.66rem; color:#0a7d8c; font-weight:700; flex-shrink:0;">yüksek · net</span>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Kontrast neden önemli</div>
                        <div class="vcd-glass-card" style="flex:1; padding:16px; display:flex; flex-direction:column; gap:11px; justify-content:center;">
                            <div style="display:flex; gap:10px; align-items:flex-start;"><span style="font-size:1.05rem;">📖</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.5;"><strong style="color:var(--color-text-primary);">İletişimin ön şartı.</strong> Okunmayan metin, ne kadar zarif olursa olsun, görevini yapmaz.</span></div>
                            <div style="display:flex; gap:10px; align-items:flex-start;"><span style="font-size:1.05rem;">🌗</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.5;"><strong style="color:var(--color-text-primary);">Açık gri tuzağı.</strong> Soluk gri yazı ekranda şık görünür ama parlak ışıkta ya da zayıf bir ekranda kaybolur.</span></div>
                            <div style="display:flex; gap:10px; align-items:flex-start;"><span style="font-size:1.05rem;">👁️</span><span style="font-size:0.79rem; color:var(--color-text-secondary); line-height:1.5;"><strong style="color:var(--color-text-primary);">Herkes için.</strong> Yeterli kontrast, düşük görme ya da renk körlüğü olan kullanıcılar için de okumayı mümkün kılar.</span></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">📐</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">"Yeterli" kontrast göz kararı değildir; ölçülebilir bir <strong style="color:var(--color-text-primary);">sayısı</strong> vardır. Bir sonraki slayt bu sayının ne demek olduğunu gösterir.</span>
                </div>
            `
        },

        // Slide 15b: Kontrast bir orandır — 1:1 → 21:1 ölçeği
        {
            id: "kontrast-olcek",
            category: "Bölüm 4: Kontrast",
            title: "Kontrast Bir Orandır: 1'den 21'e",
            html: `
                <p class="vcd-content-intro">Kontrast bir sayıyla ölçülür: metin ile zeminin <strong style="color:var(--color-text-primary);">parlaklık oranı</strong>. En düşük <strong style="color:var(--color-text-primary);">1:1</strong> (aynı renk, görünmez), en yüksek <strong style="color:var(--color-text-primary);">21:1</strong> (beyaz üstüne saf siyah). Sayı büyüdükçe metin daha rahat okunur.</p>
                <div style="margin-top:0; display:flex; align-items:center; justify-content:space-between; font-size:0.66rem; color:var(--color-text-muted); padding:0 4px 6px;">
                    <span>← düşük kontrast · zor okunur</span>
                    <span>yüksek kontrast · net okunur →</span>
                </div>
                <div style="display:flex; border-radius:10px; overflow:hidden; border:1px solid var(--border-light);">
                    <div style="flex:1; background:#fff; padding:15px 6px; display:flex; flex-direction:column; align-items:center; gap:5px; border-right:1px solid #eee;">
                        <span style="font-size:1.05rem; color:#ffffff; font-weight:700;">Görsel</span>
                        <span style="font-size:0.7rem; color:#444; font-weight:800;">1:1</span>
                        <span style="font-size:0.56rem; color:#9a8f7e; text-align:center; line-height:1.3;">aynı renk · görünmez</span>
                    </div>
                    <div style="flex:1; background:#fff; padding:15px 6px; display:flex; flex-direction:column; align-items:center; gap:5px; border-right:1px solid #eee;">
                        <span style="font-size:1.05rem; color:#949494; font-weight:700;">Görsel</span>
                        <span style="font-size:0.7rem; color:#444; font-weight:800;">3:1</span>
                        <span style="font-size:0.56rem; color:#9a8f7e; text-align:center; line-height:1.3;">büyük metin sınırı</span>
                    </div>
                    <div style="flex:1; background:#fff; padding:15px 6px; display:flex; flex-direction:column; align-items:center; gap:5px; border-right:1px solid #eee; box-shadow:inset 0 3px 0 var(--color-primary);">
                        <span style="font-size:1.05rem; color:#767676; font-weight:700;">Görsel</span>
                        <span style="font-size:0.7rem; color:#222; font-weight:800;">4.5:1</span>
                        <span style="font-size:0.56rem; color:#0a7d8c; font-weight:700; text-align:center; line-height:1.3;">gövde metni sınırı</span>
                    </div>
                    <div style="flex:1; background:#fff; padding:15px 6px; display:flex; flex-direction:column; align-items:center; gap:5px; border-right:1px solid #eee;">
                        <span style="font-size:1.05rem; color:#595959; font-weight:700;">Görsel</span>
                        <span style="font-size:0.7rem; color:#444; font-weight:800;">7:1</span>
                        <span style="font-size:0.56rem; color:#9a8f7e; text-align:center; line-height:1.3;">rahat okunur</span>
                    </div>
                    <div style="flex:1; background:#fff; padding:15px 6px; display:flex; flex-direction:column; align-items:center; gap:5px;">
                        <span style="font-size:1.05rem; color:#000000; font-weight:700;">Görsel</span>
                        <span style="font-size:0.7rem; color:#444; font-weight:800;">21:1</span>
                        <span style="font-size:0.56rem; color:#9a8f7e; text-align:center; line-height:1.3;">siyah / beyaz · en yüksek</span>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">📊</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Yukarıdaki yazılar aynı "Görsel" sözcüğü; tek fark kontrast oranı. <strong style="color:var(--color-text-primary);">4.5:1</strong>'in solundakiler zorlanır. Peki bu eşiği kim koyar, "AA" ne demek?</span>
                </div>
            `
        },

        // Slide 16: 4.5:1 kuralı (a11y)
        {
            id: "kontrast-4-5",
            category: "Bölüm 4: Kontrast",
            title: "4.5:1: Erişilebilir Kontrast",
            html: `
                <p class="vcd-content-intro"><strong style="color:var(--color-text-primary);">WCAG</strong>, web sayfalarının erişilebilirlik (a11y) kurallarını koyan uluslararası bir kılavuzdur. Üç uyum düzeyi vardır; yaygın hedef <strong style="color:var(--color-text-primary);">AA</strong>, onun normal metin için istediği eşik de <strong style="color:var(--color-text-primary);">4.5:1</strong>'dir:</p>
                <div style="display:flex; gap:8px; margin-bottom:14px;">
                    <div style="flex:1; padding:8px 11px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:8px;"><strong style="color:var(--color-text-secondary); font-size:0.78rem;">A</strong><div style="font-size:0.7rem; color:var(--color-text-muted); line-height:1.4; margin-top:2px;">En düşük, temel düzey; tek başına yetersiz sayılır.</div></div>
                    <div style="flex:1; padding:8px 11px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.3); border-radius:8px;"><strong style="color:var(--color-primary); font-size:0.78rem;">AA <span style="font-weight:400; color:var(--color-text-muted);">· hedef</span></strong><div style="font-size:0.7rem; color:var(--color-text-secondary); line-height:1.4; margin-top:2px;">Pratik standart; yasalar ve kurumlar çoğunlukla bunu ister.</div></div>
                    <div style="flex:1; padding:8px 11px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:8px;"><strong style="color:var(--color-text-secondary); font-size:0.78rem;">AAA</strong><div style="font-size:0.7rem; color:var(--color-text-muted); line-height:1.4; margin-top:2px;">En katı; her içerikte ulaşmak her zaman gerekli değil.</div></div>
                </div>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Kural · iki eşik (WCAG AA)</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:9px; justify-content:center;">
                            <div style="display:flex; align-items:center; gap:13px; padding:13px 15px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.28); border-radius:9px;">
                                <div style="font-size:1.5rem; font-weight:800; color:var(--color-primary); line-height:1; flex-shrink:0;">4.5:1</div>
                                <div><strong style="color:var(--color-text-primary); font-size:0.83rem;">Normal metin</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Gövde yazısı, yaklaşık 24px altındaki her metin. En sık karşılaşılan eşik.</div></div>
                            </div>
                            <div style="display:flex; align-items:center; gap:13px; padding:13px 15px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.24); border-radius:9px;">
                                <div style="font-size:1.5rem; font-weight:800; color:var(--color-secondary); line-height:1; flex-shrink:0;">3:1</div>
                                <div><strong style="color:var(--color-text-primary); font-size:0.83rem;">Büyük metin</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Yaklaşık 24px üstü, ya da kalın 19px üstü. İri harf daha az kontrastla da okunur.</div></div>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Aynı zemin, iki metin</div>
                        <div class="html-cikti" style="flex:1; background:#f4f1ea; padding:0; overflow:hidden; display:flex; flex-direction:column;">
                            <div style="flex:1; display:flex; flex-direction:column; gap:5px; justify-content:center; padding:14px 18px; border-bottom:1px solid #e6ddcb;">
                                <span style="font-size:1rem; color:#2d2a26; font-weight:600;">Görsel İletişim Tasarımı</span>
                                <span style="font-size:0.68rem; color:#0a7d8c; font-weight:700;">≈ 13:1 · ✓ rahat geçer</span>
                            </div>
                            <div style="flex:1; display:flex; flex-direction:column; gap:5px; justify-content:center; padding:14px 18px;">
                                <span style="font-size:1rem; color:#bdb7ab;">Görsel İletişim Tasarımı</span>
                                <span style="font-size:0.68rem; color:#b4632a; font-weight:700;">≈ 1.8:1 · ✗ eşiğin altında</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px; margin-top:14px; padding:11px 15px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">☀️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;"><strong style="color:var(--color-text-primary);">Neden bir sayı?</strong> Kontrast herkeste aynı görünmez: düşük görme, güneş altında bakılan telefon, ucuz bir ekran. 4.5:1 eşiği metnin bu koşulların hepsinde okunur kalmasını güvenceye alır.</span>
                </div>
            `
        },

        // Slide 17: Kontrast kontrol aracı
        {
            id: "kontrast-arac",
            category: "Bölüm 4: Kontrast",
            title: "Kontrastı Ölçmek",
            html: `
                <p class="vcd-content-intro">Kontrast gözle tahmin edilmez, ölçülür. Tarayıcının geliştirici araçları (DevTools) bir renk seçilince oranı gösterir; çevrimiçi denetleyiciler de aynı işi yapar. İki renk arasındaki oran 4.5:1'in altındaysa, palet revize edilir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div class="pane-label cikti" style="margin:0;">Kontrast denetleyici · canlı</div>
                            <button class="sim-btn kontrast-btn">Metin rengini değiştir</button>
                        </div>
                        <div class="vcd-glass-card" style="flex:1; padding:0; overflow:hidden; display:flex; flex-direction:column;">
                            <div style="background:#f4f1ea; padding:18px; display:flex; align-items:center; justify-content:center; min-height:84px;">
                                <span class="kontrast-metin" style="font-size:1.25rem; font-weight:600; color:#2d2a26;">Görsel İletişim</span>
                            </div>
                            <div style="padding:13px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px; border-top:1px solid var(--border-light);">
                                <div style="display:flex; align-items:baseline; gap:7px;">
                                    <span class="kontrast-oran" style="font-size:1.5rem; font-weight:800; color:var(--color-text-primary); line-height:1;">13.0</span>
                                    <span style="font-size:0.8rem; color:var(--color-text-muted);">: 1</span>
                                </div>
                                <span class="kontrast-rozet" style="font-size:0.72rem; font-weight:700; padding:4px 11px; border-radius:20px; background:rgba(52,211,153,0.16); color:#34d399;">✓ AA geçer</span>
                            </div>
                            <div class="kontrast-not" style="padding:0 16px 13px; font-size:0.7rem; color:var(--color-text-muted); line-height:1.45;">Koyu antrasit metin · gövde yazısı için fazlasıyla yeterli.</div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Nerede ölçülür</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:9px; justify-content:center;">
                            <div style="display:flex; gap:10px; padding:11px 13px; background:rgba(129,140,248,0.06); border:1px solid rgba(129,140,248,0.22); border-radius:8px;"><span style="font-size:1.05rem;">🛠️</span><div><strong style="color:#818cf8; font-size:0.81rem;">DevTools renk seçici</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Metne <strong style="color:var(--color-text-primary);">sağ tık → İncele</strong> (ya da <code>F12</code>); açılan panelde <code>color</code> değerinin yanındaki küçük renk karesine tıkla. Renk seçici, kontrast oranını ve AA/AAA ✓/✗ rozetini doğrudan gösterir.</div></div></div>
                            <div style="display:flex; gap:10px; padding:11px 13px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:8px;"><span style="font-size:1.05rem;">🌐</span><div><strong style="color:var(--color-secondary); font-size:0.81rem;">Çevrimiçi denetleyici</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;"><strong style="color:var(--color-text-primary);">WebAIM Contrast Checker</strong> ya da <strong style="color:var(--color-text-primary);">Coolors</strong>: iki rengi yapıştır, oranı gör.</div></div></div>
                            <div style="display:flex; gap:10px; padding:11px 13px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.22); border-radius:8px;"><span style="font-size:1.05rem;">⏱️</span><div><strong style="color:var(--color-primary); font-size:0.81rem;">Ne zaman</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin-top:2px;">Palet kesinleşmeden önce. Renk seçerken kontrol etmek, sonradan düzeltmekten kolaydır.</div></div></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(245,158,11,0.07); border-left:2px solid var(--color-warning); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">⚠️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Butona basınca görülür: orta tonlar göze "yeterli" gelse de ölçünce 4.5:1'in altında kalabilir. <strong style="color:var(--color-text-primary);">Gözle tahmin etme, ölç.</strong></span>
                </div>
            `,
            onRender: (slideEl) => {
                const btn = slideEl.querySelector('.kontrast-btn');
                const metin = slideEl.querySelector('.kontrast-metin');
                const oranEl = slideEl.querySelector('.kontrast-oran');
                const rozet = slideEl.querySelector('.kontrast-rozet');
                const notEl = slideEl.querySelector('.kontrast-not');
                if (!btn || !metin || !oranEl || !rozet) return;
                const zemin = "#f4f1ea";
                const renkler = [
                    { hex: "#2d2a26", not: "Koyu antrasit metin · gövde yazısı için fazlasıyla yeterli." },
                    { hex: "#5f7d8c", not: "İkincil mavi-gri · göze hoş görünür ama gövde metni için sınırda kalır." },
                    { hex: "#bdb7ab", not: "Soluk gri · şık durur ama okunmaz; eşiğin çok altında." }
                ];
                const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
                const lum = (hex) => {
                    const c = hex.replace('#', '');
                    const r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
                    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
                };
                const oran = (a, b) => { const l1 = lum(a), l2 = lum(b); const hi = Math.max(l1, l2), lo = Math.min(l1, l2); return (hi + 0.05) / (lo + 0.05); };
                let i = 0;
                const uygula = () => {
                    const r = renkler[i];
                    const o = oran(r.hex, zemin);
                    metin.style.color = r.hex;
                    oranEl.textContent = o.toFixed(1);
                    notEl.textContent = r.not;
                    const gecer = o >= 4.5;
                    rozet.textContent = gecer ? "✓ AA geçer" : "✗ AA kalır";
                    rozet.style.background = gecer ? "rgba(52,211,153,0.16)" : "rgba(245,158,11,0.16)";
                    rozet.style.color = gecer ? "#34d399" : "#f59e0b";
                };
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    i = (i + 1) % renkler.length;
                    uygula();
                });
                uygula();
            }
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
                <p class="vcd-content-intro">Bir renk ya da yazı tipi, sayfanın onlarca yerinde tekrar eder. CSS değişkeni bu değeri bir kez tanımlamayı sağlar: <code>:root</code> içinde tanımlanır, <code>var()</code> ile çağrılır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1.1fr 1fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css · tanımla ve kullan</div>
                        <pre class="html-kod" style="flex:1; font-size:0.73rem; margin:0; line-height:1.75;"><span style="color:#818cf8;">:root</span> {
  <span style="color:#7dd3fc;">--renk-ana</span>:   <span style="color:#34d399;">#2c3e50</span>;
  <span style="color:#7dd3fc;">--renk-vurgu</span>: <span style="color:#34d399;">#e67e22</span>;
}

<span style="color:#818cf8;">h1</span>   { <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">var(--renk-ana)</span>; }
<span style="color:#d4ff00;">.btn</span> { <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">var(--renk-vurgu)</span>; }</pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Üç parça</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:9px; justify-content:center;">
                            <div style="padding:11px 13px; background:rgba(129,140,248,0.06); border:1px solid rgba(129,140,248,0.22); border-radius:8px;"><code style="color:#818cf8;">:root</code><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:3px;">Sayfanın en tepesi. Burada tanımlanan değişkene tüm sayfa erişebilir.</div></div>
                            <div style="padding:11px 13px; background:rgba(2,184,204,0.06); border:1px solid rgba(2,184,204,0.22); border-radius:8px;"><code style="color:var(--color-secondary);">--renk-ana</code><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:3px;">Kendi seçtiğin isim; iki tireyle (<code>--</code>) başlamak zorunda. Değeri bir kez yazılır.</div></div>
                            <div style="padding:11px 13px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.22); border-radius:8px;"><code style="color:var(--color-primary);">var(--renk-ana)</code><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin-top:3px;">"O değişkenin değerini buraya koy" demek. İhtiyaç olan her yerde çağrılır.</div></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🏷️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Değişken, renge bir <strong style="color:var(--color-text-primary);">isim</strong> verir: <code>#2c3e50</code> değil, "ana renk". Kod hem okunur hem de tek noktadan yönetilir hale gelir.</span>
                </div>
            `
        },

        // Slide 19: Neden değişken — tek kaynak (week4 Consistency köprüsü)
        {
            id: "degisken-neden",
            category: "Bölüm 5: CSS Değişkenleri",
            title: "Tek Kaynak: Bir Yerden Değiştir",
            html: `
                <p class="vcd-content-intro">Geçen haftanın Tasarım Gözü köşesi tutarlılığı (consistency) "tek kaynaktan stil" olarak tanımlamıştı. CSS değişkenleri bunun aracıdır: bir değer tek yerden değişir, sayfanın tamamı birlikte döner. Aşağıdaki butonla dene.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label kod">style.css · tek satır</div>
                        <pre class="html-kod" style="flex:1; font-size:0.73rem; margin:0; line-height:1.8;"><span style="color:#818cf8;">:root</span> {
  <span style="color:#7dd3fc;">--renk-vurgu</span>: <span class="dn-deger" style="color:#34d399;">#e67e22</span>;
}

<span style="color:#d4ff00;">.btn</span>   { <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">var(--renk-vurgu)</span>; }
<span style="color:#818cf8;">a</span>      { <span style="color:#7dd3fc;">color</span>:      <span style="color:#34d399;">var(--renk-vurgu)</span>; }
<span style="color:#d4ff00;">.rozet</span> { <span style="color:#7dd3fc;">border-color</span>: <span style="color:#34d399;">var(--renk-vurgu)</span>; }</pre>
                        <p style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Üç farklı kural, tek değişkene bağlı. Yalnız <span class="dn-deger" style="color:#34d399;">#e67e22</span> satırı değişiyor.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div class="pane-label cikti" style="margin:0;">Sayfa · üç yer birden</div>
                            <button class="sim-btn dn-btn">Vurguyu değiştir</button>
                        </div>
                        <div class="dn-kapsayici html-cikti" style="--renk-vurgu:#e67e22; flex:1; padding:0; overflow:hidden; background:#f4f1ea; color:#2d2a26; display:flex; flex-direction:column;">
                            <div style="background:#2c3e50; color:#fff; padding:9px 14px; font-weight:700; font-size:0.9rem; display:flex; align-items:center; justify-content:space-between;">Deniz Demir <span class="rozet" style="font-size:0.6rem; font-weight:700; padding:2px 8px; border-radius:20px; border:1px solid var(--renk-vurgu); color:var(--renk-vurgu);">yeni</span></div>
                            <div style="padding:14px; display:flex; flex-direction:column; gap:10px;">
                                <div style="font-size:0.82rem; line-height:1.5;">Afiş ve marka kimliği üzerine çalışan bir tasarımcı. <a href="#" onclick="return false;" style="color:var(--renk-vurgu); font-weight:600;">portfolyo →</a></div>
                                <button class="btn" style="align-self:flex-start; background:var(--renk-vurgu); color:#fff; border:none; padding:7px 16px; border-radius:6px; font-size:0.78rem; font-weight:700;">İletişime geç</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Tek Karar, Her Yer</h4>
                    <p>Buton, bağlantı ve rozet ayrı ayrı boyanmadı; üçü de aynı değişkenden besleniyor. Tek satır değişince hepsi birden döner. Tutarlılık iyi niyetle değil, <strong>yapıyla</strong> korunur: değer kopyalanmadığı için sayfa zamanla kendiyle çelişmez.</p>
                </div>
            `,
            onRender: (slideEl) => {
                const btn = slideEl.querySelector('.dn-btn');
                const kapsayici = slideEl.querySelector('.dn-kapsayici');
                const degerler = Array.from(slideEl.querySelectorAll('.dn-deger'));
                if (!btn || !kapsayici) return;
                const renkler = ["#e67e22", "#1f8a4c", "#7b3fa0", "#c0392b"];
                let i = 0;
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    i = (i + 1) % renkler.length;
                    const r = renkler[i];
                    kapsayici.style.setProperty('--renk-vurgu', r);
                    degerler.forEach(d => { d.textContent = r; });
                });
            }
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
                <p class="vcd-content-intro">Tasarım Gözü köşesi bu hafta <strong style="color:var(--color-primary);">contrast</strong> (kontrast) ilkesini ele alır. Geçen hafta tutarlılık benzerliği düzenliyordu; contrast onun tamamlayıcısıdır: farkı düzenler. İki şey farklıysa, fark belirgin olmalı; belirsiz farklar gözü yorar, net farklar yönlendirir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Köşenin haritası · ilkeler</div>
                        <div class="vcd-glass-card" style="flex:1; padding:16px; display:flex; flex-direction:column; gap:10px; justify-content:center; font-size:0.82rem; line-height:1.5;">
                            <div style="display:flex; gap:10px; align-items:flex-start;"><span style="color:var(--color-primary);">✓</span><span style="color:var(--color-text-secondary);"><strong style="color:var(--color-text-primary);">Consistency</strong> · benzeri birleştir <span style="color:var(--color-text-muted);">(geçen hafta)</span></span></div>
                            <div style="display:flex; gap:10px; align-items:flex-start;"><span style="color:var(--color-primary); font-weight:700;">●</span><span style="color:var(--color-text-secondary);"><strong style="color:var(--color-primary);">Contrast</strong> · farkı abart <span style="color:var(--color-text-muted);">(bu hafta)</span></span></div>
                            <div style="display:flex; gap:10px; align-items:flex-start;"><span style="color:var(--color-text-muted);">○</span><span style="color:var(--color-text-secondary);"><strong style="color:var(--color-text-primary);">Repetition</strong> · tekrarla <span style="color:var(--color-text-muted);">(ilerleyen derslerde)</span></span></div>
                            <div style="display:flex; gap:10px; align-items:flex-start;"><span style="color:var(--color-text-muted);">○</span><span style="color:var(--color-text-secondary);"><strong style="color:var(--color-text-primary);">Alignment</strong> · hizala <span style="color:var(--color-text-muted);">(ilerleyen derslerde)</span></span></div>
                        </div>
                    </div>
                    <div class="vcd-analogy-box" style="margin:0; display:flex; flex-direction:column; justify-content:center;">
                        <h4>Contrast Nedir?</h4>
                        <p>İki öğe aynı rolde değilse, görünüşleri de açıkça farklı olmalı. Başlık gövdeden büyük, ana eylem ikincil eylemden parlak, vurgu nötrden canlı. <strong>Yarım fark</strong> en kötüsüdür: göz "bunlar aynı mı, farklı mı" diye takılır. Karar nettir: ya benzet, ya da belirgin ayır.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">👁️</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Contrast yalnız renk değildir: birkaç araç birlikte <strong style="color:var(--color-text-primary);">görsel hiyerarşi</strong> kurar ve göze önce neye bakacağını söyler.</span>
                </div>
            `
        },

        // Slide 22: Kötü / iyi iki-panel
        {
            id: "tg-kotu-iyi",
            category: "Bölüm 6: Tasarım Gözü",
            title: "Aynı İçerik: Kontrastsız ve Kontrastlı",
            html: `
                <p class="vcd-content-intro">Aynı kart iki kez. Soldaki her öğe aynı boyut, ağırlık ve renkte; hepsi eşit önemde, hiçbiri öne çıkmıyor. Sağdaki başlığı büyütüp koyulaştırıyor, meta bilgiyi geri çekiyor. İkinci panelde göz, sıralamayı bir bakışta okur.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label" style="color:var(--color-warning);">✕ Kontrastsız · her şey eşit</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; padding:18px; display:flex; flex-direction:column; gap:7px; justify-content:center;">
                            <div style="font-size:0.95rem; font-weight:400; color:#26211c;">Afiş Serisi</div>
                            <div style="font-size:0.95rem; font-weight:400; color:#26211c;">Sergi için üç afiş tasarımı, renk ve tipografi üzerine bir çalışma.</div>
                            <div style="font-size:0.95rem; font-weight:400; color:#26211c;">12 Haziran · Deniz Demir</div>
                        </div>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Üçü de aynı boyut, ağırlık ve renk. Hangisi başlık, hangisi tarih belli değil.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">✓ Kontrastlı · net hiyerarşi</div>
                        <div class="html-cikti" style="flex:1; background:#faf8f4; color:#26211c; padding:18px; display:flex; flex-direction:column; gap:8px; justify-content:center;">
                            <div style="font-size:1.6rem; font-weight:800; color:#2c3e50; line-height:1.1;">Afiş Serisi</div>
                            <div style="font-size:0.92rem; font-weight:400; color:#3a342e; line-height:1.5;">Sergi için üç afiş tasarımı, renk ve tipografi üzerine bir çalışma.</div>
                            <div style="font-size:0.72rem; font-weight:600; color:#9a8f7e; letter-spacing:0.03em;">12 HAZİRAN · DENİZ DEMİR</div>
                        </div>
                        <p style="font-size:0.73rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Büyük koyu başlık, sakin gövde, soluk meta. Önem sırası bir bakışta okunur.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🎯</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">İçerik aynı; değişen yalnız contrast. Önemli olanı abartmak, önemsizi geri çekmek; göze düşünmeden bir <strong style="color:var(--color-text-primary);">sıra</strong> verir.</span>
                </div>
            `
        },

        // Slide 23: Contrast nasıl kurulur — boyut/ağırlık/renk
        {
            id: "tg-hiyerarsi",
            category: "Bölüm 6: Tasarım Gözü",
            title: "Hiyerarşi: Boyut, Ağırlık, Renk",
            html: `
                <p class="vcd-content-intro">Görsel hiyerarşi üç temel araçla kurulur: <strong style="color:var(--color-text-primary);">boyut</strong>, <strong style="color:var(--color-text-primary);">ağırlık</strong> ve <strong style="color:var(--color-text-primary);">renk</strong>. Bu üçü tam da bu dersin konusudur; contrast soyut bir ilke değil, öğrenilen tekniklerin amacıdır.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:10px; border-color:rgba(212,255,0,0.4);">
                        <div style="background:#faf8f4; border-radius:8px; padding:13px 14px; display:flex; flex-direction:column; gap:3px;">
                            <span style="font-size:1.5rem; color:#26211c; line-height:1; font-weight:700;">Başlık</span>
                            <span style="font-size:0.78rem; color:#26211c; line-height:1.2;">gövde metni</span>
                        </div>
                        <strong style="color:var(--color-primary); font-size:0.86rem;">① Boyut</strong>
                        <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Büyük öğe önce okunur. Tipografik ölçek (Bölüm 2) bu farkı sisteme bağlar.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:10px; border-color:rgba(2,184,204,0.4);">
                        <div style="background:#faf8f4; border-radius:8px; padding:13px 14px; display:flex; flex-direction:column; gap:3px;">
                            <span style="font-size:1rem; color:#26211c; line-height:1.2; font-weight:800;">Önemli satır</span>
                            <span style="font-size:1rem; color:#26211c; line-height:1.2; font-weight:300;">ikincil satır</span>
                        </div>
                        <strong style="color:var(--color-secondary); font-size:0.86rem;">② Ağırlık</strong>
                        <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Aynı boyutta bile kalın öğe öne çıkar. <code>font-weight</code> (Bölüm 2) bu aracı verir.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:10px; border-color:rgba(230,126,34,0.4);">
                        <div style="background:#faf8f4; border-radius:8px; padding:13px 14px; display:flex; flex-direction:column; gap:6px;">
                            <span style="font-size:0.85rem; color:#9a8f7e; line-height:1.2;">normal metin</span>
                            <span style="align-self:flex-start; background:#e67e22; color:#fff; font-size:0.78rem; font-weight:700; padding:4px 12px; border-radius:6px;">vurgu</span>
                        </div>
                        <strong style="color:#e67e22; font-size:0.86rem;">③ Renk</strong>
                        <p style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Canlı renk gözü çeker, soluk renk geri çekilir. Palet ve kontrast (Bölüm 3-4) bu aracı sağlar.</p>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(2,184,204,0.06); border-left:2px solid var(--color-secondary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">🧩</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Üçü genelde birlikte çalışır: başlık hem büyük, hem kalın, hem koyu olur. Birden çok araç aynı yöne işaret edince hiyerarşi <strong style="color:var(--color-text-primary);">tartışmasız</strong> netleşir.</span>
                </div>
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
                <p class="vcd-content-intro">Sayfa artık üç dersin birikimini taşıyor: anlamlı iskelet (Ders 2), çalışan CSS (Ders 3) ve bu haftanın tip + renk sistemi. Soldaki katmanlar, sağdaki tek karta birlikte oturur.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label">Üç katman, tek sayfa</div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:9px; justify-content:center;">
                            <div style="display:flex; gap:11px; align-items:flex-start; padding:11px 13px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:8px;"><span style="font-size:1.1rem;">🦴</span><div><strong style="color:var(--color-text-primary); font-size:0.81rem;">İskelet · Ders 2</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45;">Anlamlı HTML: <code>header</code>, <code>main</code>, <code>article</code>.</div></div></div>
                            <div style="display:flex; gap:11px; align-items:flex-start; padding:11px 13px; background:rgba(255,255,255,0.02); border:1px solid var(--border-light); border-radius:8px;"><span style="font-size:1.1rem;">🎨</span><div><strong style="color:var(--color-text-primary); font-size:0.81rem;">CSS mekaniği · Ders 3</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45;">External stil, seçiciler, <code>color</code> ve <code>background</code>.</div></div></div>
                            <div style="display:flex; gap:11px; align-items:flex-start; padding:11px 13px; background:rgba(212,255,0,0.06); border:1px solid rgba(212,255,0,0.3); border-radius:8px;"><span style="font-size:1.1rem;">🧭</span><div><strong style="color:var(--color-primary); font-size:0.81rem;">Tip + renk sistemi · bu hafta</strong><div style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45;">Web fontu, tipografik ölçek, palet, kontrast, CSS değişkenleri.</div></div></div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Sonuç · tek karar olmuş sayfa</div>
                        <div class="html-cikti" style="flex:1; background:#f4f1ea; color:#2d2a26; padding:0; overflow:hidden; display:flex; flex-direction:column; font-family:'Inter','Helvetica Neue',Arial,sans-serif;">
                            <div style="background:#2c3e50; color:#f4f1ea; padding:13px 16px;"><div style="font-size:1.25rem; font-weight:800; line-height:1;">Deniz Demir</div><div style="font-size:0.68rem; color:rgba(244,241,234,0.7); letter-spacing:0.04em; margin-top:3px;">GÖRSEL İLETİŞİM TASARIMI</div></div>
                            <div style="padding:15px 16px; display:flex; flex-direction:column; gap:9px;">
                                <div style="font-size:1.05rem; font-weight:700; color:#2c3e50; line-height:1.15;">Afiş Serisi</div>
                                <div style="font-size:0.82rem; line-height:1.55; color:#2d2a26;">Sergi için üç afiş tasarımı; renk ve tipografi üzerine bir çalışma.</div>
                                <button style="align-self:flex-start; background:#e67e22; color:#2d2a26; border:none; padding:8px 17px; border-radius:6px; font-size:0.78rem; font-weight:700;">İletişime geç</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:10px; margin-top:14px; padding:11px 14px; background:rgba(212,255,0,0.06); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <span style="font-size:1.1rem;">✨</span>
                    <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Aynı içerik, derslerin başındaki stilsiz HTML'den buraya geldi. Yapı bir kimliğe kavuştu; rastgele görünüm, açıklanabilir bir <strong style="color:var(--color-text-primary);">tasarım kararına</strong> dönüştü.</span>
                </div>
            `
        },

        // Slide 25b: Canlı demo — çıplak sayfayı sınıfta birlikte stillemek
        {
            id: "canli-demo",
            category: "Bölüm 7: Pratik ve Kapanış",
            title: "Canlı Demo: Stüdyo Görev Listesi",
            html: `
                <p class="vcd-content-intro">Soldaki stilsiz <code>index.html</code> + boş <code>style.css</code> başlangıç noktasıdır. Sağdaki beş görev sınıfta sırayla tamamlanır; altta açılan <strong style="color:var(--color-text-primary);">Kullanılacak Değerler</strong> alanında renk paleti ve tipografik ölçek hazır durur.</p>
                <style>
                .demo-board .gorev{display:flex;align-items:center;gap:11px;padding:9px 12px;background:rgba(255,255,255,0.02);border:1px solid var(--border-light);border-left:2px solid rgba(255,255,255,0.09);border-radius:9px;cursor:pointer;transition:transform .18s ease,border-color .18s ease,background .18s ease;}
                .demo-board .gorev:hover{transform:translateX(3px);border-color:rgba(212,255,0,0.35);}
                .demo-board .gorev.tamam{background:rgba(212,255,0,0.06);}
                .demo-board .gorev-govde{flex:1;min-width:0;}
                .demo-board .gorev-badge{flex:none;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;line-height:1;font-size:0.76rem;font-weight:800;color:var(--color-text-secondary);border:1.5px solid rgba(255,255,255,0.18);background:transparent;transition:background .2s ease,color .2s ease,border-color .2s ease,box-shadow .2s ease;}
                .demo-board .gorev.tamam .gorev-badge{background:var(--color-primary);color:#0a0a0a;border-color:var(--color-primary);box-shadow:0 0 12px rgba(212,255,0,0.4);}
                .demo-board .gorev-baslik{font-size:0.82rem;font-weight:700;color:var(--color-text-primary);line-height:1.2;}
                .demo-board .gorev-ipucu{font-size:0.66rem;color:var(--color-text-muted);line-height:1.3;margin-top:3px;}
                .demo-board .gorev-ipucu code{font-size:0.92em;}
                .demo-board .gorev-check{flex:none;font-size:0.98rem;color:var(--color-primary);opacity:0;transform:scale(0.4);transition:opacity .2s ease,transform .2s ease;}
                .demo-board .gorev.tamam .gorev-check{opacity:1;transform:scale(1);}
                .demo-board .gorev-bar{height:5px;border-radius:99px;background:rgba(255,255,255,0.07);overflow:hidden;}
                .demo-board .gorev-bar-fill{height:100%;width:0;border-radius:99px;background:linear-gradient(90deg,var(--color-primary),var(--color-secondary));transition:width .35s cubic-bezier(.4,0,.2,1);}
                .alt-grid{display:grid;grid-template-columns:1.7fr 1fr;gap:14px;margin-top:14px;align-items:stretch;}
                .alt-grid .degerler,.alt-grid .hazir-card{padding:13px 16px;background:rgba(255,255,255,0.02);border:1px solid var(--border-light);border-radius:10px;}
                .degerler{transition:border-color .3s ease,background .3s ease;}
                .degerler.tamam-hepsi{border-color:rgba(212,255,0,0.3);background:rgba(212,255,0,0.04);}
                .alt-grid .kd-baslik{font-size:0.62rem;font-weight:800;letter-spacing:0.09em;text-transform:uppercase;color:var(--color-primary);margin-bottom:11px;}
                .alt-grid .kd-not{font-size:0.69rem;color:var(--color-text-muted);line-height:1.45;}
                .alt-grid .kd-not code{color:var(--color-text-secondary);}
                .hazir-card{display:flex;flex-direction:column;gap:9px;}
                .hazir-card .kd-baslik{margin-bottom:0;}
                .hazir-btnlar{display:flex;flex-direction:column;gap:8px;}
                .hazir-card .sim-btn{width:100%;text-align:center;padding:9px 14px;}
                .degerler .kd-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:22px;align-items:center;}
                .degerler .kd-bolum{display:flex;flex-direction:column;gap:9px;min-width:0;}
                .degerler .kd-alt{font-size:0.59rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--color-text-muted);}
                .degerler .kd-renkler{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
                .degerler .kd-renk{display:flex;align-items:center;gap:8px;padding:5px 9px;background:rgba(255,255,255,0.03);border:1px solid var(--border-light);border-radius:7px;}
                .degerler .kd-swatch{width:19px;height:19px;border-radius:4px;flex:none;border:1px solid rgba(255,255,255,0.4);box-shadow:inset 0 0 0 1px rgba(0,0,0,0.25);}
                .degerler .kd-rol{font-size:0.66rem;color:var(--color-text-secondary);font-weight:600;}
                .degerler .kd-hex{font-size:0.61rem;color:var(--color-text-muted);font-family:ui-monospace,Menlo,monospace;margin-left:auto;}
                .degerler .kd-olcek{display:flex;flex-direction:column;gap:7px;}
                .degerler .kd-tip{display:flex;align-items:center;gap:11px;padding:5px 11px;background:rgba(255,255,255,0.03);border:1px solid var(--border-light);border-radius:7px;}
                .degerler .kd-aa{flex:none;width:38px;text-align:center;font-weight:800;color:var(--color-text-primary);line-height:1;}
                .degerler .kd-et{font-size:0.66rem;color:var(--color-text-secondary);font-weight:600;}
                .degerler .kd-val{font-size:0.61rem;color:var(--color-text-muted);font-family:ui-monospace,Menlo,monospace;margin-left:auto;}
                .demo-board .gorev-bitti{display:none;}
                .demo-board .gorev-sayac-kutu.tamam .gorev-bitti{display:inline;color:var(--color-primary);}
                </style>
                <div class="vcd-grid-2 demo-board" style="margin-top:0; align-items:stretch; grid-template-columns:1fr 1.05fr;">
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div class="pane-label kod" style="margin:0;"><span lang="en">index.html</span> · başlangıç</div>
                            <button class="sim-btn kopyala-btn" data-hedef="#demo-html">⧉ Kopyala</button>
                        </div>
                        <pre id="demo-html" class="html-kod" style="flex:1; font-size:0.58rem; margin:0; line-height:1.5;"><span class="t">&lt;!DOCTYPE html&gt;</span>
<span class="t">&lt;html</span> <span class="a">lang</span>=<span class="v">"tr"</span><span class="t">&gt;</span>
<span class="t">&lt;head&gt;</span>
  <span style="background:rgba(212,255,0,0.12); border-radius:3px; padding:0 2px;"><span class="t">&lt;link</span> <span class="a">rel</span>=<span class="v">"stylesheet"</span> <span class="a">href</span>=<span class="v">"style.css"</span><span class="t">&gt;</span></span>
<span class="t">&lt;/head&gt;</span>
<span class="t">&lt;body&gt;</span>
  <span class="t">&lt;header&gt;</span>
    <span class="t">&lt;h1&gt;</span>Deniz Demir<span class="t">&lt;/h1&gt;</span>
    <span class="t">&lt;p&gt;</span>Görsel iletişim tasarımı öğrencisi<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;/header&gt;</span>
  <span class="t">&lt;main&gt;</span>
    <span class="t">&lt;h2&gt;</span>Afiş Serisi<span class="t">&lt;/h2&gt;</span>
    <span class="t">&lt;p&gt;</span>Sergi için üç afiş tasarımı; renk
       ve tipografi üzerine bir çalışma.<span class="t">&lt;/p&gt;</span>
    <span class="t">&lt;a</span> <span class="a">href</span>=<span class="v">"#"</span><span class="t">&gt;</span>İletişime geç<span class="t">&lt;/a&gt;</span>
  <span class="t">&lt;/main&gt;</span>
<span class="t">&lt;/body&gt;</span>
<span class="t">&lt;/html&gt;</span></pre>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:9px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <div class="pane-label cikti" style="margin:0;">Stüdyo Görevleri</div>
                            <span class="gorev-sayac-kutu" style="font-size:0.74rem; color:var(--color-text-secondary); font-weight:700;"><span class="gorev-sayac" style="color:var(--color-primary);">0</span> / 5 <span class="gorev-bitti">✓</span></span>
                        </div>
                        <div class="gorev-bar"><div class="gorev-bar-fill"></div></div>
                        <div style="display:flex; flex-direction:column; gap:6px; margin-top:2px;">
                            <div class="gorev"><span class="gorev-badge">1</span><div class="gorev-govde"><div class="gorev-baslik">Stil dosyasını bağla</div><div class="gorev-ipucu">index.html → style.css bağlantısı</div></div><span class="gorev-check">✓</span></div>
                            <div class="gorev"><span class="gorev-badge">2</span><div class="gorev-govde"><div class="gorev-baslik">Web fontunu ekle</div><div class="gorev-ipucu">Google Fonts üzerinden Inter</div></div><span class="gorev-check">✓</span></div>
                            <div class="gorev"><span class="gorev-badge">3</span><div class="gorev-govde"><div class="gorev-baslik">Tipografik ölçeği kur (rem)</div><div class="gorev-ipucu">başlık ve metne oranlı boyut</div></div><span class="gorev-check">✓</span></div>
                            <div class="gorev"><span class="gorev-badge">4</span><div class="gorev-govde"><div class="gorev-baslik">Renk paletini tanımla</div><div class="gorev-ipucu">:root değişkenleri, var() ile kullan</div></div><span class="gorev-check">✓</span></div>
                            <div class="gorev"><span class="gorev-badge">5</span><div class="gorev-govde"><div class="gorev-baslik">Kontrastı erişilebilir yap</div><div class="gorev-ipucu">metin / zemin oranı en az 4.5:1</div></div><span class="gorev-check">✓</span></div>
                        </div>
                    </div>
                </div>
                <div class="alt-grid">
                <div class="degerler">
                    <div class="kd-baslik">Kullanılacak Değerler</div>
                    <div class="kd-grid">
                        <div class="kd-bolum">
                            <div class="kd-alt">Renk paleti</div>
                            <div class="kd-renkler">
                                <div class="kd-renk"><span class="kd-swatch" style="background:#f4f1ea;"></span><span class="kd-rol">Zemin</span><span class="kd-hex">#f4f1ea</span></div>
                                <div class="kd-renk"><span class="kd-swatch" style="background:#2d2a26;"></span><span class="kd-rol">Metin</span><span class="kd-hex">#2d2a26</span></div>
                                <div class="kd-renk"><span class="kd-swatch" style="background:#2c3e50;"></span><span class="kd-rol">Ana</span><span class="kd-hex">#2c3e50</span></div>
                                <div class="kd-renk"><span class="kd-swatch" style="background:#e67e22;"></span><span class="kd-rol">Vurgu</span><span class="kd-hex">#e67e22</span></div>
                            </div>
                        </div>
                        <div class="kd-bolum">
                            <div class="kd-alt">Tipografik ölçek (rem)</div>
                            <div class="kd-olcek">
                                <div class="kd-tip"><span class="kd-aa" style="font-size:1.4rem;">Aa</span><span class="kd-et">h1</span><span class="kd-val">1.95rem</span></div>
                                <div class="kd-tip"><span class="kd-aa" style="font-size:1.12rem;">Aa</span><span class="kd-et">h2</span><span class="kd-val">1.56rem</span></div>
                                <div class="kd-tip"><span class="kd-aa" style="font-size:0.9rem;">Aa</span><span class="kd-et">p</span><span class="kd-val">1rem</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hazir-card">
                    <div class="kd-baslik">Hazır Dosyalar</div>
                    <div class="hazir-btnlar">
                        <button class="sim-btn kopyala-btn" data-hedef="#demo-html-full">⧉ HTML'i kopyala</button>
                        <button class="sim-btn kopyala-btn" data-hedef="#demo-css">⧉ CSS'i kopyala</button>
                    </div>
                    <div class="kd-not">Hazır <code>index.html</code> ve <code>style.css</code> kopyalanıp yapıştırılır; kurallar genişletilerek görünüm daha da iyileştirilebilir.</div>
                </div>
                </div>
                <pre id="demo-html-full" style="display:none;">&lt;!DOCTYPE html&gt;
&lt;html lang="tr"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Deniz Demir&lt;/title&gt;
  &lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
  &lt;link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&amp;display=swap" rel="stylesheet"&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Deniz Demir&lt;/h1&gt;
    &lt;p&gt;Görsel iletişim tasarımı öğrencisi&lt;/p&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;section&gt;
      &lt;h2&gt;Hakkımda&lt;/h2&gt;
      &lt;p&gt;Afiş, tipografi ve renk üzerine çalışan bir tasarım öğrencisiyim. Basılı ve dijital projelerde sade, okunaklı düzenler kurmayı seviyorum.&lt;/p&gt;
    &lt;/section&gt;

    &lt;section&gt;
      &lt;h2&gt;Çalışmalar&lt;/h2&gt;

      &lt;article&gt;
        &lt;h3&gt;Afiş Serisi&lt;/h3&gt;
        &lt;p&gt;Sergi için üç afiş tasarımı; renk ve tipografi üzerine bir çalışma.&lt;/p&gt;
      &lt;/article&gt;

      &lt;article&gt;
        &lt;h3&gt;Kitap Kapağı&lt;/h3&gt;
        &lt;p&gt;Bir şiir kitabı için kapak ve sayfa düzeni denemesi.&lt;/p&gt;
      &lt;/article&gt;

      &lt;article&gt;
        &lt;h3&gt;Logo Taslağı&lt;/h3&gt;
        &lt;p&gt;Küçük bir kafe için kimlik ve logo çalışması.&lt;/p&gt;
      &lt;/article&gt;
    &lt;/section&gt;

    &lt;section&gt;
      &lt;h2&gt;İletişim&lt;/h2&gt;
      &lt;p&gt;Projeler ve iş birlikleri için yazabilirsiniz.&lt;/p&gt;
      &lt;a href="#"&gt;İletişime geç&lt;/a&gt;
    &lt;/section&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;© 2026 Deniz Demir&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                <pre id="demo-css" style="display:none;">:root {
  --zemin: #f4f1ea;
  --metin: #2d2a26;
  --ana:   #2c3e50;
  --vurgu: #e67e22;
}

body {
  font-family: "Inter", system-ui, sans-serif;
  background: var(--zemin);
  color: var(--metin);
  max-width: 640px;
  margin: 0 auto;
  padding: 0 24px 48px;
}

header {
  background: var(--ana);
  color: var(--zemin);
  padding: 28px 24px;
  border-radius: 12px;
  margin: 32px 0;
}
header h1 { margin: 0; font-size: 1.95rem; }
header p  { margin: 8px 0 0; opacity: 0.75; }

section { margin-bottom: 36px; }

h2 {
  font-size: 1.56rem;
  color: var(--ana);
  border-bottom: 2px solid var(--vurgu);
  padding-bottom: 6px;
  margin-bottom: 16px;
}

article {
  background: rgba(44, 62, 80, 0.05);
  border-left: 4px solid var(--vurgu);
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 14px;
}
article h3 { margin: 0 0 4px; font-size: 1.25rem; color: var(--ana); }
article p  { margin: 0; }

a {
  display: inline-block;
  background: var(--vurgu);
  color: var(--metin);
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
}

footer {
  margin-top: 40px;
  padding-top: 16px;
  border-top: 1px solid rgba(44, 62, 80, 0.15);
  color: var(--ana);
  font-size: 0.85rem;
}

/* Buradan genişletebilirsiniz: gölge, hover, boşluk... */</pre>
            `,
            onRender: (slideEl) => {
                slideEl.querySelectorAll('.kopyala-btn').forEach(btn => {
                    const orijinal = btn.textContent;
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const hedef = slideEl.querySelector(btn.dataset.hedef);
                        if (!hedef) return;
                        const bitti = () => { btn.textContent = '✓ Kopyalandı'; btn.classList.add('active'); setTimeout(() => { btn.textContent = orijinal; btn.classList.remove('active'); }, 1500); };
                        if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(hedef.textContent).then(bitti).catch(bitti); } else { bitti(); }
                    });
                });
                const sayac = slideEl.querySelector('.gorev-sayac');
                const sayacKutu = slideEl.querySelector('.gorev-sayac-kutu');
                const barFill = slideEl.querySelector('.gorev-bar-fill');
                const degerler = slideEl.querySelector('.degerler');
                const guncelle = () => {
                    const n = slideEl.querySelectorAll('.gorev.tamam').length;
                    if (sayac) sayac.textContent = n;
                    if (barFill) barFill.style.width = (n / 5 * 100) + '%';
                    const hepsi = n === 5;
                    if (sayacKutu) sayacKutu.classList.toggle('tamam', hepsi);
                    if (degerler) degerler.classList.toggle('tamam-hepsi', hepsi);
                };
                slideEl.querySelectorAll('.gorev').forEach(g => {
                    g.addEventListener('click', (e) => {
                        e.stopPropagation();
                        g.classList.toggle('tamam');
                        guncelle();
                    });
                });
            }
        },

        // Slide 26: Haftalık ödev
        {
            id: "odev",
            category: "Bölüm 7: Pratik ve Kapanış",
            title: "Haftalık Ödev: Sayfana Bir Ses ve Palet Ver",
            html: `
                <p class="vcd-content-intro">Bu haftanın ödevi, geçen derste stillenen sayfaya bir <strong style="color:var(--color-text-primary);">kimlik</strong> vermek. Dört adım, hepsi bu destenin araçlarıyla. Sağdaki <code>:root</code> bloğu, derste birlikte denenecek başlangıç noktasıdır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch;">
                    <div style="display:flex; flex-direction:column; gap:11px;">
                        <div class="pane-label">Yapılacaklar · sırayla</div>
                        <div style="display:flex; flex-direction:column; gap:9px;">
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">1</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">Web fontu</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;">Bir Google Font seç, <code>&lt;head&gt;</code>'e bağla (preconnect + stylesheet).</div></div>
                            </div>
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">2</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">Tipografik ölçek</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;">Bir oran seç (1.25 ya da 1.333), başlık ile gövde boyutlarını ona göre belirle.</div></div>
                            </div>
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">3</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">Palet + CSS değişkenleri</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;">Üç-dört renklik bir paleti <code>:root</code> içinde rollerle tanımla (nötr, ana, vurgu, metin).</div></div>
                            </div>
                            <div style="display:flex; gap:11px; align-items:flex-start;">
                                <div style="width:23px; height:23px; border-radius:50%; background:rgba(212,255,0,0.15); border:1px solid rgba(212,255,0,0.3); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:0.72rem; font-weight:700; color:var(--color-primary); margin-top:1px;">4</div>
                                <div><strong style="font-size:0.82rem; color:var(--color-text-primary);">Kontrast kontrolü</strong><div style="font-size:0.75rem; color:var(--color-text-secondary); line-height:1.45;">Gövde metni / zemin oranını DevTools ya da WebAIM ile ölç; 4.5:1'i geçsin.</div></div>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:8px; background:rgba(2,184,204,0.05); border:1px solid rgba(2,184,204,0.18); border-radius:8px; padding:8px 12px; margin-top:2px;">
                            <span style="font-size:0.58rem; color:var(--color-secondary); text-transform:uppercase; letter-spacing:0.06em; font-weight:700; white-space:nowrap;">⏰ Süre</span>
                            <span style="font-size:0.73rem; color:var(--color-text-secondary);">Bir sonraki ders saatine kadar.</span>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <div class="pane-label cikti">Derste demo · style.css başlangıcı</div>
                        <pre class="html-kod" style="flex:1; font-size:0.7rem; margin:0; line-height:1.7;"><span style="color:#818cf8;">:root</span> {
  <span style="color:#7dd3fc;">--font</span>:  <span style="color:#34d399;">"Inter", system-ui, sans-serif</span>;
  <span style="color:#7dd3fc;">--notr</span>:  <span style="color:#34d399;">#f4f1ea</span>;
  <span style="color:#7dd3fc;">--ana</span>:   <span style="color:#34d399;">#2c3e50</span>;
  <span style="color:#7dd3fc;">--vurgu</span>: <span style="color:#34d399;">#e67e22</span>;
  <span style="color:#7dd3fc;">--metin</span>: <span style="color:#34d399;">#2d2a26</span>;
}
<span style="color:#818cf8;">body</span> {
  <span style="color:#7dd3fc;">font-family</span>: <span style="color:#34d399;">var(--font)</span>;
  <span style="color:#7dd3fc;">color</span>: <span style="color:#34d399;">var(--metin)</span>;
  <span style="color:#7dd3fc;">background</span>: <span style="color:#34d399;">var(--notr)</span>;
}</pre>
                    </div>
                </div>
                <div style="margin-top:14px; display:flex; align-items:center; gap:13px; flex-wrap:wrap; padding:11px 15px; background:rgba(212,255,0,0.05); border-left:2px solid var(--color-primary); border-radius:0 8px 8px 0;">
                    <strong style="font-size:0.75rem; color:var(--color-text-secondary); white-space:nowrap;">Beklenenler:</strong>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> web fontu</span>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> tipografik ölçek</span>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> CSS değişkenli palet</span>
                    <span style="font-size:0.74rem; color:var(--color-text-secondary);"><span style="color:var(--color-primary); font-weight:700;">✓</span> 4.5:1 kontrast</span>
                </div>
            `
        },

        // Slide 28: İleri-pin — Ders 5 (Box Model + Boşluk + AI Debugging)
        {
            id: "ders5-koprusu",
            category: "Bölüm 7: Pratik ve Kapanış",
            title: "Sıradaki Adım: Boşluk ve Kutu",
            html: `
                <p class="vcd-content-intro">Renk ve yazı artık bir sistem. Ama öğeler hâlâ sayfada üst üste dizili; aralarındaki boşluk rastgele. Sıradaki ders bu boşluğu kontrol altına alır: her öğenin kapladığı alanı belirleyen <strong style="color:var(--color-text-primary);">kutu modeli</strong> (box model) ve takılınca DevTools ile AI'ı birlikte kullanarak hata çözme.</p>
                <div style="margin-top:0; display:flex; align-items:stretch; gap:10px; flex-wrap:wrap;">
                    <div class="vcd-glass-card" style="flex:1; min-width:150px; padding:15px; display:flex; flex-direction:column; gap:5px; opacity:0.62;">
                        <div style="font-size:1.3rem;">🎨</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.85rem;">Tip + Renk</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.45; margin:0;">Yazı ve renk bir sisteme oturdu. <strong style="color:var(--color-text-secondary);">Bu ders.</strong></p>
                    </div>
                    <div style="display:flex; align-items:center; color:var(--color-text-muted); font-size:1.2rem;">→</div>
                    <div class="vcd-glass-card" style="flex:1; min-width:150px; padding:15px; display:flex; flex-direction:column; gap:5px; border-color:rgba(212,255,0,0.4); background:rgba(212,255,0,0.04);">
                        <div style="font-size:1.3rem;">📐</div>
                        <strong style="color:var(--color-primary); font-size:0.85rem;">Boşluk + Kutu</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.45; margin:0;">Box model, boşluk ritmi, yerleşim. <strong style="color:var(--color-primary);">Sırada.</strong></p>
                    </div>
                    <div style="display:flex; align-items:center; color:var(--color-text-muted); font-size:1.2rem;">→</div>
                    <div class="vcd-glass-card" style="flex:1; min-width:150px; padding:15px; display:flex; flex-direction:column; gap:5px;">
                        <div style="font-size:1.3rem;">🤖</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.85rem;">AI ile Debugging</strong>
                        <p style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.45; margin:0;">Takılınca DevTools + AI ile hata çözme. <strong style="color:var(--color-text-secondary);">Sırada.</strong></p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Renk Oturdu, Sıra Boşlukta</h4>
                    <p>Bir sayfayı dağınık gösteren çoğu zaman renk ya da yazı değil, <strong>boşluğun</strong> rastgeleliğidir. Sıradaki ders her öğeyi bir kutu olarak görür (içerik, iç boşluk, kenarlık, dış boşluk) ve aralarındaki ritmi kontrol altına alır. Görünüm tamamlanır, yerleşim başlar.</p>
                </div>
                <p class="ileri-pin" style="margin-top:14px;"><strong>İleri:</strong> Ders 5 · Box Model, boşluk ritmi ve AI ile debugging.</p>
            `
        }

    ]
};
