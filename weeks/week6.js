/**
 * ==========================================================================
 * WEEK 6 MODULE: Box Model ve Boşluk (Görsel İletişim Tasarımı Odaklı)
 * Uygulamalı Seri · Ders 5 / 8 · Boşluğu, boyutu ve derinliği kontrol etmek
 * ==========================================================================
 *
 * OMURGA: "Boşluk bir tasarım kararıdır." Her element görünmez bir kutudur;
 * o kutunun katmanlarını (content / padding / border / margin) görmek ve
 * kontrol etmek sayfaya nefes, ritim ve derinlik kazandırır.
 *
 * week5 (Tipografi ve Renk) destesinin devamı. Yerleşim sistemleri (flex/grid)
 * YOK; tek istisna ortalanmış konteyner (max-width + margin auto), saf box model.
 * İleri: Ders 6 (week7) — kutuları dizmek: Wireframe + Flexbox + navigasyon.
 *
 * Stil/desen referansı: week5.js + _shared.js helper'ları (boxLayerDiagram,
 * layerLegend, cssKod, wireLiveStyle, comparePanels). Kaynak: WEEK6_CONTENT.md.
 *
 * ⚠ PUSH YOK (deste bitene kadar öğrenci yarım görmesin). manifest week6 satırı
 * yerel eklendi.
 */

import { boxLayerDiagram, layerLegend, cssKod, wireLiveStyle, comparePanels } from './_shared.js';

export const week6 = {
    title: "7. Hafta: Box Model ve Boşluk",
    slides: [

        // ============================================================
        // BÖLÜM 0 — AÇILIŞ
        // ============================================================

        // 1 · Hero (KATİ kural 1: açıklama YOK)
        {
            id: "giris",
            title: "Box Model ve Boşluk",
            subtitle: '<span style="font-size:1.05rem; white-space:nowrap;">Görsel İletişim Tasarımı · 7. Hafta</span>',
            type: "hero",
            html: ""
        },

        // 2 · Boşluk Görünmez Ama İşe Yarar
        {
            id: "bosluk-ise-yarar",
            category: "Hatırlatma",
            title: "Boşluğun Rolü",
            html: `
                <p class="vcd-content-intro">Geçen ders sayfa bir <strong>ses</strong> (tipografi) ve bir <strong>palet</strong> (renk) kazandı. Ama elementler hâlâ birbirine yapışık durur. İyi bir palet, sıkışık bir düzeni kurtarmaz.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px;">
                        <div style="font-size:1.4rem;">🦴</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.9rem;">İskelet</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Anlamlı HTML yapısı. <strong>Bitti</strong> (Ders 2).</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px;">
                        <div style="font-size:1.4rem;">🎨</div>
                        <strong style="color:var(--color-text-secondary); font-size:0.9rem;">Ses ve Renk</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-muted); line-height:1.5; margin:0;">Tipografi ve palet. <strong>Bitti</strong> (Ders 3-4).</p>
                    </div>
                    <div class="vcd-glass-card primary" style="padding:16px; display:flex; flex-direction:column; gap:6px;">
                        <div style="font-size:1.4rem;">📐</div>
                        <strong style="color:var(--color-primary); font-size:0.9rem;">Boşluk ve Kutu</strong>
                        <p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Nefes, ritim, derinlik. <strong>Bugün</strong>.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Boşluk Görünmez Ama Konuşur</h4>
                    <p>İyi tipografi ve renk, doğru boşlukla nefes alır. Bir tasarımı amatörden profesyonele taşıyan fark çoğu zaman renk değil, ondaki bilinçli boşluktur.</p>
                </div>
            `
        },

        // ============================================================
        // BÖLÜM 1 — KUTU MODELİ
        // ============================================================

        // 3 · Tarayıcı Her Şeyi Kutu Görür
        {
            id: "tarayici-kutu",
            category: "Bölüm 1: Kutu Modeli",
            title: "Tarayıcı Her Şeyi Kutu Görür",
            html: `
                <p class="vcd-content-intro">Bir başlık, bir paragraf, bir görsel, bir buton. Tarayıcı bunların hepsini <strong>dikdörtgen bir kutu (box)</strong> olarak yerleştirir. Yuvarlak görünen bir buton bile, altında bir kutudur.</p>
                ${comparePanels(
                    {
                        label: "block (blok)", tone: "primary",
                        html: `
                            <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Satırın tamamını kaplar, alt alta dizilir. Örneğin <code>h1</code>, <code>p</code>, <code>section</code>, <code>div</code>.</p>
                            <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
                                <div style="background:rgba(212,255,0,0.14); border:1px solid rgba(212,255,0,0.4); border-radius:4px; padding:7px 10px; font-size:0.72rem; color:var(--color-text-secondary);">bir blok</div>
                                <div style="background:rgba(212,255,0,0.14); border:1px solid rgba(212,255,0,0.4); border-radius:4px; padding:7px 10px; font-size:0.72rem; color:var(--color-text-secondary);">alttaki blok</div>
                            </div>`
                    },
                    {
                        label: "inline (satır içi)", tone: "secondary",
                        html: `
                            <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">İçeriği kadar yer kaplar, yan yana akar. Örneğin <code>a</code>, <code>strong</code>, <code>span</code>.</p>
                            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px;">
                                <span style="background:rgba(2,184,204,0.16); border:1px solid rgba(2,184,204,0.4); border-radius:4px; padding:7px 10px; font-size:0.72rem; color:var(--color-text-secondary);">yan</span>
                                <span style="background:rgba(2,184,204,0.16); border:1px solid rgba(2,184,204,0.4); border-radius:4px; padding:7px 10px; font-size:0.72rem; color:var(--color-text-secondary);">yana</span>
                                <span style="background:rgba(2,184,204,0.16); border:1px solid rgba(2,184,204,0.4); border-radius:4px; padding:7px 10px; font-size:0.72rem; color:var(--color-text-secondary);">akar</span>
                            </div>`
                    }
                )}
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; margin-top:14px;">block bir eleman satırı zaten kendiliğinden doldurur, bu yüzden ona ayrıca <code>width: 100%</code> vermek çoğu zaman gereksizdir. Ders 2'deki block ve inline ayrımı buradan gelir.</p>
            `
        },

        // 4 · Bir Kutunun Dört Katmanı  (boxLayerDiagram + layerLegend)
        {
            id: "dort-katman",
            category: "Bölüm 1: Kutu Modeli",
            title: "Bir Kutunun Dört Katmanı",
            html: `
                <p class="vcd-content-intro">Her kutu, iç içe geçmiş dört katmandan oluşur. İçten dışa doğru içerik, iç boşluk, kenarlık ve dış boşluk gelir. Bir tabloyu çerçeveletmeyi düşün: resmin çevresindeki paspartu, çerçevenin kendisi ve duvardaki boşluk, kutunun katmanlarına birebir karşılık gelir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1fr 1.05fr; gap:32px;">
                    <div style="display:flex; align-items:center; justify-content:center;">
                        <div style="width:100%; max-width:360px;">
                            ${boxLayerDiagram({ margin: 34, border: 10, padding: 30, content: "content", scale: 1.15 })}
                        </div>
                    </div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; align-content:space-between;">
                        <div style="display:flex; flex-direction:column; gap:5px;"><span style="display:inline-flex; align-items:center; gap:7px;"><span style="width:13px; height:13px; border-radius:3px; background:rgba(2,184,204,0.6);"></span><strong style="color:#02b8cc; font-size:0.84rem;">content</strong></span><p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Yazının ve görselin kendisi. Tablodaki resim.</p></div>
                        <div style="display:flex; flex-direction:column; gap:5px;"><span style="display:inline-flex; align-items:center; gap:7px;"><span style="width:13px; height:13px; border-radius:3px; background:rgba(52,211,153,0.55);"></span><strong style="color:#34d399; font-size:0.84rem;">padding</strong></span><p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">İçerik ile kenarlık arası nefes. Çerçevedeki paspartu.</p></div>
                        <div style="display:flex; flex-direction:column; gap:5px;"><span style="display:inline-flex; align-items:center; gap:7px;"><span style="width:13px; height:13px; border-radius:3px; border:2px solid var(--color-accent);"></span><strong style="color:var(--color-accent); font-size:0.84rem;">border</strong></span><p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Kutunun çizgisi. Çerçevenin kendisi.</p></div>
                        <div style="display:flex; flex-direction:column; gap:5px;"><span style="display:inline-flex; align-items:center; gap:7px;"><span style="width:13px; height:13px; border-radius:3px; border:1px dashed #f59e0b; background:rgba(245,158,11,0.2);"></span><strong style="color:#f59e0b; font-size:0.84rem;">margin</strong></span><p style="font-size:0.76rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Kutu ile komşuları arası mesafe. Çerçeveler arası boşluk.</p></div>
                    </div>
                </div>
            `
        },

        // 5 · Canlı Kutu ⭐ INTERAKTİF (düzenlenebilir kod → canlı diyagram)
        {
            id: "canli-kutu",
            category: "Bölüm 1: Kutu Modeli",
            title: "Canlı Kutu",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:14px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Soldaki koddaki değerler değiştikçe sağdaki kutu da değişir. Her renk bir katmanı gösterir.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch; grid-template-columns:1fr 1fr; gap:20px;">
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label kod">kod</div>
                            <textarea class="html-editor cl-code" spellcheck="false" style="flex:1; min-height:0;">.kutu {
  margin: 20px;
  border: 6px solid;
  padding: 16px;
}</textarea>
                        </div>
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label cikti">çıktı</div>
                            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px; min-height:0; background:rgba(255,255,255,0.03); border-radius:10px; padding:20px;">
                                <div style="width:100%; max-width:300px;">
                                    ${boxLayerDiagram({ margin: 20, border: 6, padding: 16, scale: 1.15 })}
                                </div>
                                <div style="display:flex; gap:16px; flex-wrap:wrap; justify-content:center; font-size:0.74rem; font-family:'JetBrains Mono',monospace;">
                                    <span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:11px; height:11px; border-radius:2px; border:1px dashed #f59e0b; background:rgba(245,158,11,0.2);"></span><span style="color:#f59e0b;">margin</span></span>
                                    <span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:11px; height:11px; border-radius:2px; border:2px solid var(--color-accent);"></span><span style="color:var(--color-accent);">border</span></span>
                                    <span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:11px; height:11px; border-radius:2px; background:rgba(52,211,153,0.5);"></span><span style="color:#34d399;">padding</span></span>
                                    <span style="display:inline-flex; align-items:center; gap:6px;"><span style="width:11px; height:11px; border-radius:2px; background:rgba(2,184,204,0.6);"></span><span style="color:#02b8cc;">content</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const code = slideEl.querySelector('.cl-code');
                const mL = slideEl.querySelector('.bx-margin');
                const bL = slideEl.querySelector('.bx-border');
                const pL = slideEl.querySelector('.bx-padding');
                if (!code || !mL || !bL || !pL) return;
                const num = (re, txt, def) => {
                    const m = txt.match(re);
                    return m ? Math.max(0, Math.min(80, parseInt(m[1], 10))) : def;
                };
                const apply = () => {
                    const t = code.value;
                    mL.style.padding = num(/margin:\s*(\d+)/, t, 20) + 'px';
                    bL.style.borderWidth = num(/border:\s*(\d+)/, t, 6) + 'px';
                    pL.style.padding = num(/padding:\s*(\d+)/, t, 16) + 'px';
                };
                code.addEventListener('input', apply);
                code.addEventListener('keydown', (e) => e.stopPropagation());
                code.addEventListener('click', (e) => e.stopPropagation());
                apply();
            }
        },

        // 6 · DevTools ile Kutuyu Görmek  (layerLegend + görsel)
        {
            id: "devtools-kutu",
            category: "Bölüm 1: Kutu Modeli",
            title: "DevTools ile Kutuyu Görmek",
            html: `
                <p class="vcd-content-intro">Tarayıcı, her kutunun katmanlarını gerçek zamanlı gösterebilir. Bir öğe üzerinde sağ tıklayıp "İncele" (Inspect) seçilir ya da <code>F12</code> tuşuna basılır. Açılan panelde öğenin content, padding, border ve margin katmanları renkli bir diyagramda görünür.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center; grid-template-columns:1fr 1fr; gap:28px;">
                    <div style="background:#1e1e1e; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:20px; font-family:'JetBrains Mono',monospace;">
                        <div style="font-size:0.6rem; color:#f59e0b; margin-bottom:4px;">margin</div>
                        <div style="background:rgba(245,158,11,0.18); border-radius:4px; padding:16px; position:relative;">
                            <div style="position:absolute; top:-9px; left:50%; transform:translateX(-50%); font-size:0.58rem; color:#f59e0b; background:#1e1e1e; padding:0 4px;">16</div>
                            <div style="font-size:0.6rem; color:var(--color-accent); margin-bottom:4px;">border</div>
                            <div style="background:rgba(157,123,255,0.25); border-radius:4px; padding:10px;">
                                <div style="font-size:0.6rem; color:#34d399; margin-bottom:4px;">padding</div>
                                <div style="background:rgba(52,211,153,0.2); border-radius:4px; padding:14px;">
                                    <div style="background:rgba(2,184,204,0.35); border-radius:3px; padding:12px; text-align:center; font-size:0.66rem; color:#fff;">240 × 48</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <p style="font-size:0.85rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Panelde her katman kendi rengiyle görünür. ${layerLegend()}.</p>
                        <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.6; margin:0;">Bu panel, biraz önceki canlı kutunun gerçek tarayıcıdaki halidir. Bir düzen bozulduğunda ilk bakılacak yer burasıdır.</p>
                    </div>
                </div>
            `
        },

        // 7 · Padding İçeride, Margin Dışarıda  (comparePanels)
        {
            id: "padding-margin",
            category: "Bölüm 1: Kutu Modeli",
            title: "Padding İçeride, Margin Dışarıda",
            html: `
                <p class="vcd-content-intro">İkisi de boşluk açar ama farklı yerde. En sık karışan ikili budur. Boşluk kutunun <strong>içinde</strong> mi, <strong>dışında</strong> mı, ayrım bu kadar basit.</p>
                ${comparePanels(
                    {
                        label: "padding (iç boşluk)", tone: "good",
                        html: `
                            <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">İçerik ile kenarlık arasını açar. Kutunun <strong>kendi içinde</strong> kalır, arka plan rengi ve tıklanabilir alan bu boşluğu da kapsar.</p>
                            <div style="margin-top:6px; background:rgba(52,211,153,0.16); border:1px solid rgba(52,211,153,0.5); border-radius:6px; padding:26px; position:relative;">
                                <span style="position:absolute; top:6px; left:50%; transform:translateX(-50%); font-size:0.64rem; color:#34d399; font-family:'JetBrains Mono',monospace;">padding</span>
                                <div style="background:rgba(2,184,204,0.3); border-radius:4px; padding:16px; text-align:center; font-size:0.76rem; color:var(--color-text-primary); font-weight:600;">içerik</div>
                            </div>
                            <span style="font-size:0.72rem; color:var(--color-text-muted);">Yeşil boşluk kutunun içinde, arka planla birlikte büyür.</span>`
                    },
                    {
                        label: "margin (dış boşluk)", tone: "warn",
                        html: `
                            <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Kutu ile komşuları arasını açar. Kutunun <strong>dışında</strong> kalır, şeffaftır, arka plan rengi taşımaz.</p>
                            <div style="margin-top:6px; display:flex; align-items:stretch; border:1px dashed rgba(245,158,11,0.5); border-radius:6px; padding:14px; gap:0;">
                                <div style="background:rgba(2,184,204,0.3); border-radius:4px; padding:16px 14px; text-align:center; font-size:0.76rem; color:var(--color-text-primary); font-weight:600; flex:1;">kutu</div>
                                <div style="width:52px; background:rgba(245,158,11,0.18); border-left:1px dashed rgba(245,158,11,0.6); border-right:1px dashed rgba(245,158,11,0.6); display:flex; align-items:center; justify-content:center; font-size:0.6rem; color:#f59e0b; font-family:'JetBrains Mono',monospace;">margin</div>
                                <div style="background:rgba(2,184,204,0.3); border-radius:4px; padding:16px 14px; text-align:center; font-size:0.76rem; color:var(--color-text-primary); font-weight:600; flex:1;">komşu</div>
                            </div>
                            <span style="font-size:0.72rem; color:var(--color-text-muted);">Turuncu boşluk iki kutuyu birbirinden iter, şeffaf kalır.</span>`
                    }
                )}
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Hızlı Ayrım</h4>
                    <p>padding kutuyu <strong>şişirir</strong>, margin kutuyu <strong>iter</strong>. Arka plana bakınca fark görünür. padding renklidir, margin şeffaftır.</p>
                </div>
            `
        },

        // 8 · Dört Yöne Tek Satır  (cssKod: shorthand)
        {
            id: "dort-yon-tek-satir",
            category: "Bölüm 1: Kutu Modeli",
            title: "padding ve margin Kısayolu",
            html: `
                <p class="vcd-content-intro"><code>padding</code> ve <code>margin</code> değerleri tek tek ya da toplu yazılabilir. Tek değer dört yöne birden uygulanır. İki değer verilince ilki üst ve alt, ikincisi sol ve sağ olur. Dört değer verilince sıra saat yönündedir. Üst, sağ, alt, sol.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch; gap:18px;">
                    <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                        <div style="background:rgba(52,211,153,0.28); border:1px solid rgba(52,211,153,0.7); border-radius:6px; padding:16px;"><div style="background:#1f7ae0; border-radius:3px; width:74px; height:44px;"></div></div>
                        ${cssKod(`padding: 16px;`)}
                        <span style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.5; text-align:center;">Dört yön de 16px.</span>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                        <div style="background:rgba(52,211,153,0.28); border:1px solid rgba(52,211,153,0.7); border-radius:6px; padding:16px 26px;"><div style="background:#1f7ae0; border-radius:3px; width:70px; height:44px;"></div></div>
                        ${cssKod(`padding: 16px 24px;`)}
                        <span style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.5; text-align:center;">Üst-alt 16px, sol-sağ 24px.</span>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                        <div style="background:rgba(52,211,153,0.28); border:1px solid rgba(52,211,153,0.7); border-radius:6px; padding:8px 16px 26px 34px;"><div style="background:#1f7ae0; border-radius:3px; width:66px; height:44px;"></div></div>
                        ${cssKod(`padding: 8px 16px 24px 32px;`)}
                        <span style="font-size:0.74rem; color:var(--color-text-muted); line-height:1.5; text-align:center;">Saat yönü. Üst, sağ, alt, sol.</span>
                    </div>
                </div>
                <p style="font-size:0.8rem; color:var(--color-text-muted); line-height:1.55; margin-top:16px; text-align:center;">Görsellerde yeşil çerçeve padding'i, ortadaki mavi ise içeriği temsil eder.</p>
                <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55; margin-top:6px; text-align:center;">Bu tek, iki ve dört değerli kısayol <code>margin</code> için de aynen çalışır.</p>
            `
        },

        // ============================================================
        // BÖLÜM 2 — box-sizing
        // ============================================================

        // 9 · 200px Dedim, 244px Oldu
        {
            id: "iki-yuz-kirk-dort",
            category: 'Bölüm 2: <span lang="en">box-sizing</span>',
            title: "Kutu Neden Beklenenden Geniş",
            html: `
                <p class="vcd-content-intro">Bir kutunun genişliğini <code>width</code> belirler. Örneğin <code>width: 200px</code> yazınca kutunun 200 piksel olmasını bekleriz. Ama ekranda daha geniş çıkar. Çünkü varsayılan ayarda (content-box) <code>width</code> yalnızca içeriği ölçer; verilen <code>padding</code> ve <code>border</code> bu genişliğin üstüne eklenir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center; grid-template-columns:1fr 1fr; gap:32px;">
                    <div style="display:flex; justify-content:center;">
                        <div style="background:rgba(245,158,11,0.08); border:4px solid #f59e0b; border-radius:8px; padding:28px; position:relative;">
                            <span style="position:absolute; top:-11px; left:14px; font-size:0.66rem; color:#f59e0b; background:#0d0d0d; padding:0 6px; font-family:'JetBrains Mono',monospace;">border 4px</span>
                            <div style="background:rgba(52,211,153,0.14); padding:28px; border-radius:5px; position:relative;">
                                <span style="position:absolute; top:-10px; left:12px; font-size:0.64rem; color:#34d399; background:#0d0d0d; padding:0 6px; font-family:'JetBrains Mono',monospace;">padding 20px</span>
                                <div style="background:rgba(2,184,204,0.3); color:var(--color-text-primary); text-align:center; padding:22px; border-radius:4px; font-size:0.82rem; font-weight:600; width:180px;">content<br><span style="font-size:0.72rem; color:var(--color-text-muted);">width: 200px</span></div>
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:16px;">
                        <div style="font-family:'JetBrains Mono',monospace; font-size:1.05rem; color:var(--color-text-secondary); line-height:1.9;">
                            <div><span style="color:#02b8cc;">içerik 200</span></div>
                            <div><span style="color:#34d399;">+ padding 20 + 20</span> <span style="color:var(--color-text-muted); font-size:0.8rem;">iki yan</span></div>
                            <div><span style="color:#f59e0b;">+ border 4 + 4</span> <span style="color:var(--color-text-muted); font-size:0.8rem;">iki yan</span></div>
                            <div style="border-top:1px solid rgba(255,255,255,0.15); margin-top:6px; padding-top:6px;">= <strong style="color:var(--color-primary); font-size:1.3rem;">248px</strong></div>
                        </div>
                        <p style="font-size:0.8rem; color:var(--color-text-muted); line-height:1.55; margin:0;">padding her iki yandan 20+20, border her iki yandan 4+4 eklenir. 200px istenir, ekranda 248px çıkar. Sonraki slayt bunu tek satırda düzeltir.</p>
                    </div>
                </div>
            `
        },

        // 10 · border-box Sözü Tutar ⭐ INTERAKTİF (tıkla-çevir)
        {
            id: "border-box",
            category: 'Bölüm 2: <span lang="en">box-sizing</span>',
            title: "border-box ile Doğru Boyut",
            html: `
                <p class="vcd-content-intro"><code>box-sizing: border-box</code> ile <code>width</code> artık <code>padding</code> ve <code>border</code> dahil ölçülür. 200px verilince kutu 200px kalır, <code>padding</code> içeri doğru yer açar.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center; grid-template-columns:1fr 1fr; gap:24px;">
                    <div>
                        <div style="position:relative; width:200px; max-width:100%; margin:0 auto;">
                            <div style="display:flex; justify-content:space-between; font-size:0.66rem; color:var(--color-text-muted); font-family:'JetBrains Mono',monospace; margin-bottom:4px;"><span>0</span><span>hedef 200px</span></div>
                            <div style="height:8px; border-left:1px dashed var(--color-text-muted); border-right:1px dashed var(--color-text-muted); border-top:1px dashed var(--color-text-muted);"></div>
                            <div class="bs-box" style="box-sizing:content-box; width:200px; padding:20px; border:4px solid var(--color-primary); background:rgba(212,255,0,0.12); border-radius:4px; margin-top:8px; text-align:center; font-size:0.78rem; color:var(--color-text-secondary);">width: 200px</div>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:16px; align-items:flex-start;">
                        <div style="font-family:'JetBrains Mono',monospace; font-size:0.95rem; color:var(--color-text-secondary);">box-sizing: <span class="bs-mode" style="color:var(--color-primary);">content-box</span></div>
                        <div style="font-size:1.15rem; color:var(--color-text-primary);">Gerçek genişlik <span class="bs-val" style="color:var(--color-primary); font-weight:700; font-size:1.4rem;">248</span>px</div>
                        <p class="bs-note" style="font-size:0.86rem; color:var(--color-text-muted); line-height:1.6; margin:0; min-height:3em;">content-box: 200 içerik + 40 padding + 8 border. Kutu hedefi taşar.</p>
                        <button class="sim-btn bs-btn" type="button">border-box'a çevir</button>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const box = slideEl.querySelector('.bs-box');
                const btn = slideEl.querySelector('.bs-btn');
                const modeEl = slideEl.querySelector('.bs-mode');
                const valEl = slideEl.querySelector('.bs-val');
                const noteEl = slideEl.querySelector('.bs-note');
                if (!box || !btn) return;
                let border = false; // false = content-box (önce problemi göster)
                const notes = {
                    content: 'content-box: 200 içerik + 40 padding + 8 border. Kutu hedefi taşar.',
                    border: 'border-box: padding ve border 200px içine sığar. Kutu hedefte durur.'
                };
                const apply = () => {
                    box.style.boxSizing = border ? 'border-box' : 'content-box';
                    if (modeEl) modeEl.textContent = border ? 'border-box' : 'content-box';
                    if (valEl) valEl.textContent = box.offsetWidth;
                    if (noteEl) noteEl.textContent = border ? notes.border : notes.content;
                    btn.textContent = border ? "content-box'a çevir" : "border-box'a çevir";
                };
                btn.addEventListener('click', (e) => { e.stopPropagation(); border = !border; apply(); });
                apply();
            }
        },

        // 11 · Herkesin Yazdığı Tek Satır  (cssKod)
        {
            id: "herkesin-yazdigi",
            category: 'Bölüm 2: <span lang="en">box-sizing</span>',
            title: "Her Projede Aynı Satır",
            html: `
                <p class="vcd-content-intro">Bu satır çok yaygın bir alışkanlıktır. Neredeyse her stil dosyasının başında bulunur, çünkü content-box sürprizini tümüyle ortadan kaldırır.</p>
                <div style="max-width:460px; margin:8px auto 0;">
                    ${cssKod(`* {
  box-sizing: border-box;
}`)}
                </div>
                <p style="font-size:0.85rem; color:var(--color-text-secondary); line-height:1.6; margin-top:16px; text-align:center; max-width:620px; margin-left:auto; margin-right:auto;"><code>*</code> seçicisi "her element" demektir (Ders 3). Bootstrap ve Tailwind gibi hazır CSS araçları bu ayarı en baştan kendisi uygular.</p>
            `
        },

        // 12 · İçerik Sığmayınca Ne Olur  (overflow: visible/hidden/auto)
        {
            id: "icerik-sigmayinca",
            category: 'Bölüm 2: <span lang="en">box-sizing</span>',
            title: "İçerik Sığmayınca Ne Olur",
            html: `
                <p class="vcd-content-intro">Bir kutuya sabit bir yükseklik verilip içine sığmayan içerik konulursa, içerik kutunun dışına taşar. <code>overflow</code> özelliği bu durumu yönetir. <code>visible</code> taşmayı gösterir, <code>hidden</code> taşan kısmı gizler, <code>auto</code> gerektiğinde kaydırma çubuğu ekler.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:start; gap:22px;">
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div style="font-family:'JetBrains Mono',monospace; font-size:0.84rem; color:#f87171;">overflow: visible</div>
                        <div style="height:110px; background:rgba(255,255,255,0.03); border:1px solid rgba(248,113,113,0.4); border-radius:6px; padding:12px; font-size:0.8rem; line-height:1.55; color:var(--color-text-secondary); overflow:visible; position:relative;">Bu kutuya sabit bir yükseklik verildi ama içindeki metin bu yüksekliğe sığmayacak kadar uzun. Varsayılan davranış budur: taşan satırlar alt kenardan dışarı çıkar ve alttaki içeriğin üstüne biner, düzen bozulur.</div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div style="font-family:'JetBrains Mono',monospace; font-size:0.84rem; color:var(--color-text-secondary);">overflow: hidden</div>
                        <div style="height:110px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.14); border-radius:6px; padding:12px; font-size:0.8rem; line-height:1.55; color:var(--color-text-secondary); overflow:hidden;">Bu kutuya sabit bir yükseklik verildi ama içindeki metin bu yüksekliğe sığmayacak kadar uzun. Taşan kısım kutu sınırında kesilir ve tamamen gizlenir; okunamayan bu bölüm sayfada hiç yer kaplamaz.</div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div style="font-family:'JetBrains Mono',monospace; font-size:0.84rem; color:#34d399;">overflow: auto</div>
                        <div style="height:110px; background:rgba(255,255,255,0.03); border:1px solid rgba(52,211,153,0.4); border-radius:6px; padding:12px; font-size:0.8rem; line-height:1.55; color:var(--color-text-secondary); overflow:auto;">Bu kutuya sabit bir yükseklik verildi ama içindeki metin bu yüksekliğe sığmayacak kadar uzun. Kutu kendi içinde bir kaydırma çubuğu ekler; içerik erişilebilir kalır ve dışarı taşmadığı için düzen bozulmaz.</div>
                    </div>
                </div>
                <p style="font-size:0.86rem; color:var(--color-text-muted); line-height:1.6; margin-top:52px;">Çoğu zaman en iyisi kutuya sabit yükseklik vermemek, yüksekliği içeriğin kendisine bırakmaktır. Böylece içerik ne kadar uzarsa kutu da onunla birlikte uzar ve hiçbir şey taşmaz.</p>
            `
        },

        // ============================================================
        // BÖLÜM 3 — display + margin collapse
        // ============================================================

        // 13 · inline Kutu Genişlik Dinlemez
        {
            id: "inline-genislik-dinlemez",
            category: "Bölüm 3: display",
            title: "inline Kutu Genişlik Dinlemez",
            html: `
                <p class="vcd-content-intro">block bir kutu satırı doldurur ve boyutlandırılabilir. inline bir kutu (<code>a</code>, <code>span</code>, <code>strong</code>) içeriği kadar akar, <code>width</code>, <code>height</code> ve üst-alt <code>margin</code> komutlarını dinlemez. Bir linke genişlik vermek çoğu zaman hiçbir şeyi değiştirmez.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center; grid-template-columns:1fr 1.1fr; gap:32px;">
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        ${cssKod(`.menu a {
  width: 120px;
  background: #1f7ae0;
}`)}
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Menü linklerine eşit genişlik vererek düzgün sekmeler yapmak istenir. Ama linkler <code>inline</code> olduğu için <code>width</code> hiçbir şeyi değiştirmez.</p>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <div style="background:rgba(255,255,255,0.03); border:1px dashed rgba(255,255,255,0.16); border-radius:8px; padding:20px;">
                            <div style="font-size:0.66rem; color:var(--color-text-muted); font-family:'JetBrains Mono',monospace; margin-bottom:12px;">.menu</div>
                            <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
                                <a style="background:#1f7ae0; border-radius:5px; padding:8px 12px; color:#fff; font-size:0.82rem;">SSS</a>
                                <a style="background:#1f7ae0; border-radius:5px; padding:8px 12px; color:#fff; font-size:0.82rem;">Ana Sayfa</a>
                                <a style="background:#1f7ae0; border-radius:5px; padding:8px 12px; color:#fff; font-size:0.82rem;">Portfolyo ve Tüm Projelerim</a>
                            </div>
                            <span style="display:block; font-size:0.74rem; color:var(--color-text-muted); margin-top:12px; font-family:'JetBrains Mono',monospace;">Üçüne de 120px verildi, her biri yazısı kadar geniş</span>
                        </div>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Genişlik komutu göz ardı edildi. Çözüm bir sonraki slaytta.</p>
                    </div>
                </div>
            `
        },

        // 14 · inline-block Aradaki Denge ⭐ INTERAKTİF (tıkla: inline→inline-block→block)
        {
            id: "inline-block",
            category: "Bölüm 3: display",
            title: "inline-block Aradaki Denge",
            html: `
                <p class="vcd-content-intro"><code>display: inline-block</code> bir kutuyu satır içinde tutar ama <code>width</code>, <code>height</code>, <code>padding</code> ve <code>margin</code>'in tümünü kabul eder. Bir linki butona çeviren ilk adım budur.</p>
                <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:32px; font-size:1.05rem; line-height:2.8; color:var(--color-text-secondary); min-height:150px;">Önceki slayttaki menü linki, üstünde <code style="font-size:0.85rem;">width: 120px</code> ile, bir metnin içinde <a class="ib-box" style="display:inline; width:120px; padding:9px 14px; background:#1f7ae0; color:#fff; border-radius:6px; text-align:center;">İletişim</a> şeklinde duruyor. Butona bastıkça 120px genişliğin ne zaman etkili olduğuna bak.</div>
                <div style="display:flex; align-items:center; gap:18px; margin-top:20px; flex-wrap:wrap;">
                    <button class="sim-btn ib-btn" type="button">display değiştir</button>
                    <div style="font-family:'JetBrains Mono',monospace; font-size:0.95rem; color:var(--color-text-secondary);">display: <span class="ib-val" style="color:var(--color-primary); font-weight:700;">inline</span></div>
                    <p class="ib-note" style="font-size:0.82rem; color:var(--color-text-muted); margin:0;">inline: 120px yok sayılır, yazısı kadar dar.</p>
                </div>
            `,
            onRender: (slideEl) => {
                const box = slideEl.querySelector('.ib-box');
                const btn = slideEl.querySelector('.ib-btn');
                const valEl = slideEl.querySelector('.ib-val');
                const noteEl = slideEl.querySelector('.ib-note');
                if (!box || !btn) return;
                const states = [
                    { d: 'inline', n: 'inline: 120px yok sayılır, yazısı kadar dar kalır.' },
                    { d: 'inline-block', n: 'inline-block: 120px uygulanır, satır içinde düzgün sekme olur.' },
                    { d: 'block', n: 'block: 120px uygulanır ama satırın tamamını alıp alta iner.' }
                ];
                let i = 0;
                const apply = () => {
                    box.style.display = states[i].d;
                    if (valEl) valEl.textContent = states[i].d;
                    if (noteEl) noteEl.textContent = states[i].n;
                };
                btn.addEventListener('click', (e) => { e.stopPropagation(); i = (i + 1) % states.length; apply(); });
                apply();
            }
        },

        // 15 · Dikey Margin Toplanmaz (margin collapse)
        {
            id: "margin-collapse",
            category: "Bölüm 3: margin collapse",
            title: "Dikey Margin Toplanmaz",
            html: `
                <p class="vcd-content-intro">İki blok alt alta durur. Birinin altında 30px, diğerinin üstünde 20px <code>margin</code> varsa arada 50px değil, 30px boşluk kalır. Dikey <code>margin</code>'ler toplanmaz, büyük olan kazanır. Buna margin collapse (margin çökmesi) denir.</p>
                <div style="display:flex; flex-direction:column; align-items:center; gap:0; margin-top:14px;">
                    <div style="background:rgba(2,184,204,0.24); border:1px solid var(--color-secondary); border-radius:6px; padding:18px 56px; font-size:0.9rem; color:var(--color-text-primary);">üst blok <span style="color:var(--color-text-muted); font-family:'JetBrains Mono',monospace; font-size:0.8rem;">margin-bottom: 30px</span></div>
                    <div style="height:52px; width:2px; background:repeating-linear-gradient(var(--color-primary) 0 4px, transparent 4px 8px); position:relative;">
                        <span style="position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:0.8rem; color:var(--color-primary); white-space:nowrap; font-family:'JetBrains Mono',monospace;">30px &nbsp;(20 değil, 50 değil)</span>
                    </div>
                    <div style="background:rgba(2,184,204,0.24); border:1px solid var(--color-secondary); border-radius:6px; padding:18px 56px; font-size:0.9rem; color:var(--color-text-primary);">alt blok <span style="color:var(--color-text-muted); font-family:'JetBrains Mono',monospace; font-size:0.8rem;">margin-top: 20px</span></div>
                </div>
                <p style="font-size:0.86rem; color:var(--color-text-muted); line-height:1.6; margin-top:20px; text-align:center;">İki blok arasındaki boşluk, iki değerin toplamı değil büyüğü kadardır. Yatay <code>margin</code>'lerde böyle bir çökme olmaz.</p>
            `
        },

        // ============================================================
        // BÖLÜM 4 — BOŞLUK RİTMİ
        // ============================================================

        // 16 · Sayfayı Ortala, Okunur Tut  (bölüm açılışı, comparePanels + cssKod)
        {
            id: "sayfayi-ortala",
            category: "Bölüm 4: Boşluk Ritmi",
            title: "Sayfayı Ortala, Okunur Tut",
            html: `
                <p class="vcd-content-intro">Boşlukla ilgili ilk ve en büyük karar, sayfanın kendi genişliğidir. Ekranın kenarına dayanan bir metin okumayı zorlaştırır. <code>max-width</code> (en fazla genişlik) içeriği okunur bir sütunda tutar, <code>margin: 0 auto</code> o sütunu ortalar.</p>
                <div style="display:flex; flex-direction:column; gap:14px; margin-top:4px;">
                    <div style="background:rgba(248,113,113,0.06); border:1px solid rgba(248,113,113,0.3); border-radius:8px; padding:14px 18px;">
                        <div style="font-size:0.7rem; color:#f87171; font-family:'JetBrains Mono',monospace; margin-bottom:8px;">kenara dayalı · okuması yorucu</div>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.7; margin:0;">Bu paragraf ekranın bir ucundan öbür ucuna uzanır. Satırlar çok uzun olduğu için göz, bir satırın sonundan sonrakinin başına dönerken yorulur ve okurken nerede kalındığını takip etmek zorlaşır.</p>
                    </div>
                    <div style="background:rgba(52,211,153,0.06); border:1px solid rgba(52,211,153,0.3); border-radius:8px; padding:14px 18px;">
                        <div style="font-size:0.7rem; color:#34d399; font-family:'JetBrains Mono',monospace; margin-bottom:8px;">max-width ile ortalanmış · okuması rahat</div>
                        <p style="max-width:520px; margin:0 auto; font-size:0.82rem; color:var(--color-text-secondary); line-height:1.7;">Bu paragraf dar bir sütunda durur ve ortalanır. Satırlar daha kısa olduğu için göz her satırın başını kolayca bulur, okuma akıcı ilerler.</p>
                    </div>
                </div>
                <div style="max-width:420px; margin:14px auto 0;">
                    ${cssKod(`.sayfa {
  max-width: 800px;
  margin: 0 auto;
}`)}
                </div>
                <p style="font-size:0.8rem; color:var(--color-text-muted); line-height:1.55; margin-top:10px; text-align:center;">Bu bir yerleşim sistemi değil, saf kutu modelidir. Ortalama için kutunun bir <code>max-width</code> değeri olması yeterlidir.</p>
            `
        },

        // 17 · Boşluk İlişki Kurar
        {
            id: "bosluk-iliski-kurar",
            category: "Bölüm 4: Boşluk Ritmi",
            title: "Boşluk İlişki Kurar",
            html: `
                <p class="vcd-content-intro">Boşluk, artakalan yer değildir. Birbirine yakın duran elemanlar göz tarafından tek bir grup olarak okunur, araları açılan elemanlar ise ayrı görünür. Aynı sayfada boşluk miktarını değiştirmek, hangi parçaların bir arada olduğunu belirler.</p>
                <div class="vcd-grid-2" style="margin-top:6px; align-items:stretch; gap:28px;">
                    <div style="background:rgba(255,255,255,0.03); border-radius:10px; padding:24px; display:flex; flex-direction:column; gap:10px;">
                        <span style="font-size:0.72rem; color:#f87171; font-weight:600; margin-bottom:2px;">eşit aralık, ilişki belirsiz</span>
                        ${[1,2,3,4,5,6].map(() => `<div style="background:rgba(255,255,255,0.07); border-radius:4px; height:20px;"></div>`).join('')}
                    </div>
                    <div style="background:rgba(255,255,255,0.03); border-radius:10px; padding:24px; display:flex; flex-direction:column; gap:22px;">
                        <span style="font-size:0.72rem; color:#34d399; font-weight:600;">gruplu, ilişki net</span>
                        <div style="display:flex; flex-direction:column; gap:6px;"><div style="background:rgba(2,184,204,0.35); border-radius:4px; height:20px;"></div><div style="background:rgba(255,255,255,0.07); border-radius:4px; height:20px;"></div></div>
                        <div style="display:flex; flex-direction:column; gap:6px;"><div style="background:rgba(2,184,204,0.35); border-radius:4px; height:20px;"></div><div style="background:rgba(255,255,255,0.07); border-radius:4px; height:20px;"></div></div>
                        <div style="display:flex; flex-direction:column; gap:6px;"><div style="background:rgba(2,184,204,0.35); border-radius:4px; height:20px;"></div><div style="background:rgba(255,255,255,0.07); border-radius:4px; height:20px;"></div></div>
                    </div>
                </div>
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; margin-top:14px; text-align:center;">Solda altı eleman tek bir yığın gibi görünür. Sağda aynı elemanlar, aralarındaki boşlukla üç ayrı gruba ayrılır.</p>
            `
        },

        // 18 · Rastgele Değil, Ölçekli Boşluk  (comparePanels)
        {
            id: "olcekli-bosluk",
            category: "Bölüm 4: Boşluk Ritmi",
            title: "Rastgele Değil, Ölçekli Boşluk",
            html: `
                <p class="vcd-content-intro">Boşluk değerleri 13px, 17px, 22px gibi rastgele seçilince düzen dağınık görünür. Bunun yerine tutarlı bir ölçek kullanılır, çoğunlukla 8'in katları. 8, 16, 24, 32. Geçen dersteki tipografik ölçekle aynı mantık.</p>
                ${comparePanels(
                    {
                        label: "rastgele", tone: "bad",
                        html: `<div style="font-family:'JetBrains Mono',monospace; font-size:0.82rem; color:var(--color-text-secondary); display:flex; flex-direction:column; gap:6px;"><span>13px</span><span>17px</span><span>22px</span><span>29px</span></div><span style="font-size:0.72rem; color:var(--color-text-muted);">Aralarında ilişki yok, göz tutarsızlığı sezer.</span>`
                    },
                    {
                        label: "ölçekli (8'in katları)", tone: "good",
                        html: `<div style="font-family:'JetBrains Mono',monospace; font-size:0.82rem; color:var(--color-primary); display:flex; flex-direction:column; gap:6px;"><span>8px</span><span>16px</span><span>24px</span><span>32px</span></div><span style="font-size:0.72rem; color:var(--color-text-muted);">Hepsi aynı adımın katı, düzen ritim kazanır.</span>`
                    }
                )}
                <div class="vcd-analogy-box" style="margin-top:16px;">
                    <h4>Bu Ölçeğin Adı <span lang="en">8-point grid</span></h4>
                    <p>Sekiz nokta ızgarası olarak da bilinir. 8 sayısı çok bölünebilir olduğu için esneklik verir ve çoğu ekran boyutu 8'e tam bölündüğü için farklı cihazlarda net durur. Yaygınlaşmasında Google'ın <a href="https://m3.material.io/foundations/layout/understanding-layout/spacing" target="_blank" rel="noopener" style="color:var(--color-secondary); text-decoration:underline;">Material Design</a> sisteminin payı büyüktür. İnce ayarlar için 4'ün katları da kullanılır.</p>
                </div>
            `
        },

        // 19 · Boşluk Bir Malzemedir (Negatif Alan)
        {
            id: "negatif-alan",
            category: "Bölüm 4: Boşluk Ritmi",
            title: "Boşluk Bir Malzemedir",
            html: `
                <p class="vcd-content-intro">Elemanların arasındaki boşluğa negatif alan (whitespace) denir. Deneyimsiz gözde boşa gitmiş yer gibi görünür, oysa iyi tasarımda bilinçle bırakılmış bir malzemedir. İki ölçekte iş görür.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; gap:24px;">
                    <div class="vcd-glass-card" style="padding:20px; display:flex; flex-direction:column; gap:12px;">
                        <strong style="color:var(--color-primary); font-size:0.92rem;">Makro boşluk</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Büyük bölümler arasındaki boşluk. Sayfaya sükunet verir, yeni bir konunun nerede başladığını gösterir.</p>
                        <div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:16px; display:flex; flex-direction:column; gap:36px; margin-top:2px;">
                            <div style="display:flex; flex-direction:column; gap:5px;"><div style="height:9px; width:55%; background:rgba(2,184,204,0.4); border-radius:3px;"></div><div style="height:6px; width:90%; background:rgba(255,255,255,0.08); border-radius:3px;"></div><div style="height:6px; width:80%; background:rgba(255,255,255,0.08); border-radius:3px;"></div></div>
                            <div style="display:flex; flex-direction:column; gap:5px;"><div style="height:9px; width:50%; background:rgba(2,184,204,0.4); border-radius:3px;"></div><div style="height:6px; width:88%; background:rgba(255,255,255,0.08); border-radius:3px;"></div><div style="height:6px; width:76%; background:rgba(255,255,255,0.08); border-radius:3px;"></div></div>
                        </div>
                        <span style="font-size:0.7rem; color:var(--color-text-muted);">İki bölüm arasındaki geniş boşluk.</span>
                    </div>
                    <div class="vcd-glass-card" style="padding:20px; display:flex; flex-direction:column; gap:12px;">
                        <strong style="color:var(--color-secondary); font-size:0.92rem;">Mikro boşluk</strong>
                        <p style="font-size:0.8rem; color:var(--color-text-secondary); line-height:1.55; margin:0;">Satırlar ve küçük elemanlar arasındaki boşluk. Okunabilirliği belirler, metnin nefes almasını sağlar.</p>
                        <div style="display:flex; gap:12px; margin-top:2px;">
                            <div style="flex:1; background:rgba(255,255,255,0.03); border-radius:8px; padding:14px; display:flex; flex-direction:column; gap:3px;">${[92,86,90,80].map(w=>`<div style="height:6px; width:${w}%; background:rgba(255,255,255,0.1); border-radius:2px;"></div>`).join('')}<span style="font-size:0.64rem; color:#f87171; margin-top:5px;">sıkışık</span></div>
                            <div style="flex:1; background:rgba(255,255,255,0.03); border-radius:8px; padding:14px; display:flex; flex-direction:column; gap:9px;">${[92,86,90,80].map(w=>`<div style="height:6px; width:${w}%; background:rgba(52,211,153,0.5); border-radius:2px;"></div>`).join('')}<span style="font-size:0.64rem; color:#34d399; margin-top:2px;">ferah</span></div>
                        </div>
                        <span style="font-size:0.7rem; color:var(--color-text-muted);">Satır aralığı okumayı doğrudan etkiler.</span>
                    </div>
                </div>
            `
        },

        // 21 · Aynı İçerik, Az ve Çok Boşluk  (comparePanels)
        {
            id: "az-cok-bosluk",
            category: "Bölüm 4: Boşluk Ritmi",
            title: "Aynı İçerik, Az ve Çok Boşluk",
            html: `
                <p class="vcd-content-intro">Aynı içerik, iki farklı boşlukla. Solda elemanlar yapışık, sağda aralarında boşluk var. Fark yalnızca boşlukta.</p>
                ${comparePanels(
                    {
                        label: "az boşluk", tone: "bad",
                        html: `<div style="background:#fff; border-radius:10px; padding:24px; min-height:172px; display:flex; flex-direction:column; gap:2px;"><div style="color:#e67e22; font-size:0.6rem; font-weight:800; letter-spacing:0.1em;">SERGİ</div><div style="color:#111; font-weight:800; font-size:1rem; margin-bottom:2px;">Sergi Açılışı</div><div style="color:#444; font-size:0.74rem;">12 Haziran Cuma</div><div style="color:#444; font-size:0.74rem;">Kadıköy Sanat Galerisi</div><div style="color:#444; font-size:0.74rem;">Giriş serbesttir</div></div>`
                    },
                    {
                        label: "çok boşluk", tone: "good",
                        html: `<div style="background:#fff; border-radius:10px; padding:24px; min-height:172px; display:flex; flex-direction:column; gap:13px;"><div style="color:#e67e22; font-size:0.6rem; font-weight:800; letter-spacing:0.1em;">SERGİ</div><div style="color:#111; font-weight:800; font-size:1rem;">Sergi Açılışı</div><div style="color:#444; font-size:0.74rem;">12 Haziran Cuma</div><div style="color:#444; font-size:0.74rem;">Kadıköy Sanat Galerisi</div><div style="color:#444; font-size:0.74rem;">Giriş serbesttir</div></div>`
                    }
                )}
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; margin-top:14px; text-align:center;">İçerik ve kart boyutu aynı, yalnızca satır araları değişti. Sağdaki düzen daha kolay okunur ve daha bakımlı görünür.</p>
            `
        },

        // ============================================================
        // BÖLÜM 5 — KUTU → KART
        // ============================================================

        // 22 · border Üç Değerle Yazılır  (cssKod + görsel)
        {
            id: "border-uc-deger",
            category: "Bölüm 5: Kutu → Kart",
            title: "border Üç Değerle Yazılır",
            html: `
                <p class="vcd-content-intro"><code>border</code> üç değerden oluşur. Genişlik, stil ve renk. Bu üçü tek satırda, bu sırayla yazılır.</p>
                <div style="max-width:360px; margin:0 auto 18px;">
                    ${cssKod(`border: 2px solid #333;`)}
                </div>
                <div class="vcd-grid-2" style="margin-top:6px; align-items:stretch; gap:28px;">
                    <div class="vcd-glass-card" style="padding:24px; display:flex; flex-direction:column; gap:18px; justify-content:center;">
                        <span style="font-size:0.74rem; color:var(--color-text-muted); text-align:center;">stil seçenekleri</span>
                        <div style="display:flex; flex-direction:column; gap:12px; align-items:stretch;">
                            <div style="border:2px solid var(--color-primary); border-radius:8px; padding:12px 20px; font-size:0.82rem; color:var(--color-text-secondary); text-align:center;">solid</div>
                            <div style="border:2px dashed var(--color-secondary); border-radius:8px; padding:12px 20px; font-size:0.82rem; color:var(--color-text-secondary); text-align:center;">dashed</div>
                            <div style="border:2px dotted var(--color-accent); border-radius:8px; padding:12px 20px; font-size:0.82rem; color:var(--color-text-secondary); text-align:center;">dotted</div>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding:24px; display:flex; flex-direction:column; gap:18px; justify-content:center;">
                        <span style="font-size:0.74rem; color:var(--color-text-muted); text-align:center;">arka planlı ve arka plansız buton</span>
                        <div style="display:flex; gap:18px; justify-content:center; align-items:center;">
                            <span style="background:#1f7ae0; border:2px solid #1f7ae0; border-radius:8px; padding:14px 30px; font-size:0.92rem; color:#fff;">Kaydet</span>
                            <span style="background:transparent; border:2px solid var(--color-secondary); border-radius:8px; padding:14px 30px; font-size:0.92rem; color:var(--color-secondary);">İptal</span>
                        </div>
                    </div>
                </div>
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; margin-top:16px; text-align:center;">Sadece <code>border</code> verilip arka plan boş bırakılırsa, içi boş bir buton elde edilir. İkincil eylemlerde ve çerçeveli kutularda sık kullanılır.</p>
            `
        },

        // 23 · Köşeleri Yuvarlamak (border-radius)
        {
            id: "kose-yuvarlama",
            category: "Bölüm 5: Kutu → Kart",
            title: "Köşeleri Yuvarlamak",
            html: `
                <p class="vcd-content-intro"><code>border-radius</code> (köşe yuvarlama) keskin köşeleri yumuşatır. Değer büyüdükçe köşeler daha yuvarlak olur; çok büyük bir değer verilince butonun uçları tam yarım daireye dönüşür ve hap (pill) biçimini alır.</p>
                <div style="max-width:320px; margin:0 auto 22px;">
                    ${cssKod(`border-radius: 12px;`)}
                </div>
                <div style="display:flex; gap:20px; justify-content:center; align-items:center; flex-wrap:wrap; margin:0 0 18px;">
                    ${[
                        { r: '0', t: '0' },
                        { r: '8px', t: '8px' },
                        { r: '20px', t: '20px' },
                        { r: '999px', t: '999px' }
                    ].map((b) => `
                        <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
                            <div style="width:172px; height:52px; background:rgba(2,184,204,0.3); border:2px solid var(--color-secondary); border-radius:${b.r}; display:flex; align-items:center; justify-content:center; font-size:0.82rem; color:var(--color-text-primary);">buton</div>
                            <span style="font-size:0.74rem; color:var(--color-text-muted); font-family:'JetBrains Mono',monospace;">${b.t}</span>
                        </div>
                    `).join('')}
                </div>
                <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.6; text-align:center;">4px hafif yumuşaklık, 12px tipik kart ve buton köşesi, 999px hap biçimi.</p>
            `
        },

        // 24 · Gölge Derinlik Verir (box-shadow, comparePanels)
        {
            id: "golge-derinlik",
            category: "Bölüm 5: Kutu → Kart",
            title: "Gölge Derinlik Verir",
            html: `
                <p class="vcd-content-intro"><code>box-shadow</code> (gölge) bir kutunun arkasına gölge koyup onu sayfadan hafifçe yukarı kaldırır. Dört değerden oluşur: yatay kayma, dikey kayma, bulanıklık ve renk.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1fr 1fr; gap:24px;">
                    <div style="display:flex; flex-direction:column; gap:12px; justify-content:center;">
                        <div class="pane-label kod" style="margin:0;">box-shadow değerini değiştir</div>
                        <textarea class="gd-code html-editor" spellcheck="false" style="min-height:56px; resize:none;">0px 4px 12px rgba(0,0,0,0.15)</textarea>
                        <div style="display:flex; gap:8px; flex-wrap:wrap;">
                            <span style="font-size:0.68rem; color:var(--color-text-secondary); background:rgba(255,255,255,0.04); border:1px solid var(--border-light,rgba(255,255,255,0.1)); border-radius:6px; padding:5px 9px;"><b style="color:var(--color-primary); font-family:'JetBrains Mono',monospace;">0px</b> yatay kayma</span>
                            <span style="font-size:0.68rem; color:var(--color-text-secondary); background:rgba(255,255,255,0.04); border:1px solid var(--border-light,rgba(255,255,255,0.1)); border-radius:6px; padding:5px 9px;"><b style="color:var(--color-primary); font-family:'JetBrains Mono',monospace;">4px</b> dikey kayma</span>
                            <span style="font-size:0.68rem; color:var(--color-text-secondary); background:rgba(255,255,255,0.04); border:1px solid var(--border-light,rgba(255,255,255,0.1)); border-radius:6px; padding:5px 9px;"><b style="color:var(--color-primary); font-family:'JetBrains Mono',monospace;">12px</b> bulanıklık</span>
                            <span style="font-size:0.68rem; color:var(--color-text-secondary); background:rgba(255,255,255,0.04); border:1px solid var(--border-light,rgba(255,255,255,0.1)); border-radius:6px; padding:5px 9px;"><b style="color:var(--color-primary); font-family:'JetBrains Mono',monospace;">rgba(0,0,0,0.15)</b> renk</span>
                        </div>
                        <span style="font-size:0.72rem; color:var(--color-text-muted); line-height:1.5;">Değerleri değiştir, gölge sağdaki kartta anında değişir. Örneğin bulanıklığı 40px yap ya da dikey kaymayı büyüt.</span>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:center; background:#e7edf2; border-radius:12px; padding:28px;">
                        <div class="gd-card" style="width:170px; height:112px; background:#fff; border-radius:12px; box-shadow:0px 4px 12px rgba(0,0,0,0.15);"></div>
                    </div>
                </div>
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; text-align:center; margin-top:16px;">Gölge açık bir zeminde belirginleşir. Yumuşak ve geniş gölge doğal durur, sert ve koyu gölge yapay görünür.</p>
            `,
            onRender: (slideEl) => {
                const code = slideEl.querySelector('.gd-code');
                const card = slideEl.querySelector('.gd-card');
                if (!code || !card) return;
                const apply = () => { card.style.boxShadow = code.value.trim() || 'none'; };
                code.addEventListener('input', apply);
                code.addEventListener('keydown', (e) => e.stopPropagation());
                code.addEventListener('click', (e) => e.stopPropagation());
                apply();
            }
        },

        // 25 · Gölge Neden İşe Yarar (Şekil-Zemin, Rubin vazosu)
        {
            id: "sekil-zemin",
            category: "Bölüm 5: Kutu → Kart",
            title: "Gölge Neden İşe Yarar",
            html: `
                <p class="vcd-content-intro">Göz bir görüntüyü ikiye ayırarak algılar. Öne çıkan nesne şekil (figure), arkada kalan alan zemindir (ground). Buna Gestalt'ta figure-ground denir, klasik örneği Edgar Rubin'in vazosudur. Aynı görsel, zemin nasıl okunduğuna göre bir vazo ya da iki yüz olarak görünür.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center; gap:28px;">
                    <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
                        <div style="background:#fff; border-radius:10px; padding:14px; display:flex;">
                            <svg viewBox="0 0 174 211" width="176" height="214" role="img" aria-label="Rubin vazosu illüzyonu">
                                <path fill="#fff" stroke="#000" stroke-width="6" d="M0 0h174v211H0z"/>
                                <path id="rubin-face" fill="#000" d="m0 0 17.536 3 3.982 2.637C33.433 13.528 40.57 23.741 46.579 41.5c3.686 10.891 3.013 16.99-3.363 30.482-1.424 3.015-2.779 7.767-3.011 10.56-.357 4.306.115 6.143 3.103 12.076 1.938 3.848 4.307 7.646 5.265 8.44 2.504 2.074 14.876 17.026 16.304 19.704 1.58 2.963-.38 7.211-6.397 13.861-4.542 5.02-5.519 8.27-3.091 10.285 3.438 2.853 2.307 12.055-2.15 17.504-2.039 2.493-2.289 3.588-1.737 7.601.606 4.41.427 4.92-3.015 8.569-3.524 3.737-3.635 4.077-3 9.162.747 5.976-.566 11.112-3.525 13.79-2.459 2.226-2.903 4.466-2.903 4.466L0 211z"/>
                                <use href="#rubin-face" xlink:href="#rubin-face" transform="matrix(-1 0 0 1 174 0)"/>
                            </svg>
                        </div>
                        <span style="font-size:0.72rem; color:var(--color-text-muted);">Ortada beyaz vazo, iki yanda birbirine bakan yüzler.</span>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:14px;">
                        <div style="background:#e7edf2; border-radius:12px; padding:24px; display:flex; justify-content:center;">
                            <div style="background:#fff; border-radius:10px; padding:18px; box-shadow:0 10px 26px rgba(0,0,0,0.22); max-width:230px;">
                                <div style="color:#111; font-weight:700; font-size:0.84rem; margin-bottom:5px;">Kart, şekil olur</div>
                                <div style="color:#444; font-size:0.74rem; line-height:1.5;">Gölge onu zeminden kaldırır, göz kartı ayrı bir yüzey olarak okur.</div>
                            </div>
                        </div>
                        <p style="font-size:0.8rem; color:var(--color-text-muted); line-height:1.55; margin:0;"><code>box-shadow</code> bu ayrımı güçlendirir. Kart şekil, sayfa zemin olur. Aynı ayrım arka plan rengi ya da kenarlıkla da kurulabilir.</p>
                    </div>
                </div>
            `
        },

        // 26 · Düz Kutudan Karta ⭐ INTERAKTİF (düzenlenebilir CSS → canlı kart)
        {
            id: "kutudan-kart",
            category: "Bölüm 5: Kutu → Kart",
            title: "Düz Kutudan Karta",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:14px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Bir kart, birkaç kutu özelliğinin üst üste binmesidir. Arka plan, <code>padding</code>, <code>border-radius</code> ve <code>box-shadow</code> eklendikçe düz dikdörtgen kart yüzeyine döner.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch; grid-template-columns:1fr 1fr; gap:20px;">
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label kod">kod</div>
                            <textarea class="html-editor kc-code" spellcheck="false" style="flex:1; min-height:0;">.kart {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
}</textarea>
                        </div>
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label cikti">çıktı</div>
                            <div style="flex:1; display:flex; align-items:center; justify-content:center; min-height:0; background:#e7edf2; border-radius:8px; padding:20px;">
                                <div class="kart" style="max-width:260px;">
                                    <h4 style="margin:0 0 8px; color:#1a1a1a; font-size:1rem;">Kart Başlığı</h4>
                                    <p style="margin:0; color:#555; font-size:0.82rem; line-height:1.5;">Kısa bir açıklama metni. Kutu özellikleri değiştikçe bu yüzey de değişir.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style class="kc-style"></style>
                </div>
            `,
            onRender: (slideEl) => wireLiveStyle(slideEl, '.kc-code', '.kc-style')
        },

        // 27 · Bir Buton Nasıl Yapılır ⭐ INTERAKTİF (düzenlenebilir CSS → dolu + içi boş)
        {
            id: "buton-yapimi",
            category: "Bölüm 5: Kutu → Kart",
            title: "Bir Buton Nasıl Yapılır",
            className: "slide-fill",
            html: `
                <div style="display:flex; flex-direction:column; height:100%; gap:14px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Bir buton da özünde bir kutudur. <code>padding</code> tıklanabilir alanı büyütür, <code>background</code> yüzey rengi verir, <code>border-radius</code> köşeleri yumuşatır. Dolu buton birincil, içi boş buton ikincil eylem için.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch; grid-template-columns:1fr 1fr; gap:20px;">
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label kod">kod</div>
                            <textarea class="html-editor bt-code" spellcheck="false" style="flex:1; min-height:0;">.buton-dolu {
  display: inline-block;
  padding: 12px 24px;
  background: #1a73e8;
  color: #ffffff;
  border: none;
  border-radius: 8px;
}
.buton-cerceve {
  display: inline-block;
  padding: 12px 24px;
  background: transparent;
  color: #1a73e8;
  border: 2px solid #1a73e8;
  border-radius: 8px;
}</textarea>
                        </div>
                        <div style="display:flex; flex-direction:column; min-height:0;">
                            <div class="pane-label cikti">çıktı</div>
                            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:22px; min-height:0; background:rgba(255,255,255,0.05); border-radius:8px; padding:24px;">
                                <button type="button" class="buton-dolu" style="font-size:1.05rem;">Kaydet</button>
                                <button type="button" class="buton-cerceve" style="font-size:1.05rem;">İptal</button>
                            </div>
                        </div>
                    </div>
                    <style class="bt-style"></style>
                </div>
            `,
            onRender: (slideEl) => {
                slideEl.querySelectorAll('.buton-dolu, .buton-cerceve').forEach((b) => {
                    b.addEventListener('click', (e) => e.stopPropagation());
                });
                wireLiveStyle(slideEl, '.bt-code', '.bt-style');
            }
        },

        // 28 · Büyük Hedef Kolay Tıklanır (Fitts Yasası, comparePanels)
        {
            id: "fitts-yasasi",
            category: "Bölüm 5: Kutu → Kart",
            title: "Büyük Hedef Kolay Tıklanır",
            html: `
                <p class="vcd-content-intro">Fitts Yasası (Paul Fitts, 1954), bir düğmeye ulaşıp tıklama süresinin düğmenin boyutuna ve uzaklığına bağlı olduğunu söyler. Buton ne kadar büyükse tıklaması o kadar kolaydır. Aşağıda aynı form, iki farklı buton boyutuyla.</p>
                ${comparePanels(
                    {
                        label: "küçük buton, zor tıklanır", tone: "bad",
                        html: `<div style="background:#fff; border-radius:8px; padding:16px; display:flex; flex-direction:column; gap:9px;">
                            <div style="color:#111; font-size:0.76rem; font-weight:700;">Bültene abone ol</div>
                            <div style="background:#eef1f4; border:1px solid #dde3ea; border-radius:5px; height:30px;"></div>
                            <div style="display:flex; justify-content:flex-end;"><span style="display:inline-block; padding:3px 9px; background:#1a73e8; color:#fff; border-radius:4px; font-size:0.62rem;">Gönder</span></div>
                        </div><span style="font-size:0.72rem; color:var(--color-text-muted);">İnce padding, özellikle dokunmatik ekranda ıskalanır.</span>`
                    },
                    {
                        label: "büyük buton, kolay tıklanır", tone: "good",
                        html: `<div style="background:#fff; border-radius:8px; padding:16px; display:flex; flex-direction:column; gap:9px;">
                            <div style="color:#111; font-size:0.76rem; font-weight:700;">Bültene abone ol</div>
                            <div style="background:#eef1f4; border:1px solid #dde3ea; border-radius:5px; height:30px;"></div>
                            <span style="display:block; text-align:center; padding:12px; background:#1a73e8; color:#fff; border-radius:8px; font-size:0.82rem;">Gönder</span>
                        </div><span style="font-size:0.72rem; color:var(--color-text-muted);">Bol padding, parmakla rahat tutturulur.</span>`
                    }
                )}
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; margin-top:14px; text-align:center;">Butona verilen <code>padding</code> sadece görünüm değildir; tıklanabilir alanı büyütür ve butonu kolay tıklanır yapar.</p>
            `
        },

        // 29 · Kart ve Buton, Sitenin Yüzeyleri
        {
            id: "yuzeyler",
            category: "Bölüm 5: Kutu → Kart",
            title: "Kart ve Buton, Sitenin Yüzeyleri",
            html: `
                <p class="vcd-content-intro">Kartlar ve butonlar, bir portfolyo sitesinde en sık tekrar eden yüzeylerdir. Bu hafta işlenen <code>padding</code>, <code>border-radius</code> ve <code>box-shadow</code> doğrudan bu yüzeyleri kurar. Tek bir kartın kuralları, sayfadaki bütün kartlara aynen uygulanır.</p>
                <div style="display:flex; justify-content:center; margin:18px 0; background:#e7edf2; border-radius:14px; padding:28px;">
                    <div style="background:#fff; border-radius:14px; padding:22px; box-shadow:0 10px 30px rgba(0,0,0,0.2); max-width:280px;">
                        <div style="height:90px; background:linear-gradient(135deg, #02b8cc, #1a73e8); border-radius:8px; margin-bottom:14px;"></div>
                        <h4 style="margin:0 0 6px; color:#111; font-size:0.95rem;">Proje Başlığı</h4>
                        <p style="margin:0 0 14px; color:#555; font-size:0.76rem; line-height:1.5;">Kısa bir proje açıklaması burada yer alır.</p>
                        <span style="display:inline-block; padding:9px 18px; background:#1a73e8; color:#fff; border-radius:8px; font-size:0.76rem;">İncele</span>
                    </div>
                </div>
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; text-align:center;">Aynı yüzeylere <code>hover</code> ve navigasyon davranışı bir sonraki derste eklenecek.</p>
            `
        },

        // ============================================================
        // BÖLÜM 6 — AI İLE DEBUGGING
        // ============================================================

        // 30 · Neden Şimdi AI  (comparePanels)
        {
            id: "neden-simdi-ai",
            category: "Bölüm 6: AI ile Debugging",
            title: "Temeller Önce, AI Sonra",
            html: `
                <p class="vcd-content-intro">Bu derse kadar AI bilinçli olarak kullanılmadı. Sebebi basit: temelleri bilmeyen biri AI'ın verdiği cevabın doğru mu yanlış mı olduğunu anlayamaz, olduğu gibi kopyalar. Artık HTML ve CSS okunabildiği için AI'ın verdiği kod da okunup denetlenebilir.</p>
                ${comparePanels(
                    {
                        label: "temeli yoksa", tone: "bad",
                        html: `<div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:14px; font-family:'JetBrains Mono',monospace; font-size:0.72rem; color:#8a94a6; line-height:1.7;">.kutu {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;position: absolute;<br>}</div>
                            <div style="display:flex; align-items:center; gap:9px;"><span style="font-size:1.2rem;">🤔</span><span style="font-size:0.84rem; color:var(--color-text-secondary); line-height:1.55;">Bu kod doğru mu, işe yarar mı bilinmez; olduğu gibi yapıştırılır.</span></div>`
                    },
                    {
                        label: "temeli varsa", tone: "good",
                        html: `<div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:14px; font-family:'JetBrains Mono',monospace; font-size:0.72rem; line-height:1.7;"><span style="color:#818cf8;">.kutu</span> {<br>&nbsp;&nbsp;<span style="color:#9d7bff;">box-sizing</span>: <span style="color:#34d399;">border-box</span>;<br>}</div>
                            <div style="display:flex; align-items:center; gap:9px;"><span style="font-size:1.2rem;">✅</span><span style="font-size:0.84rem; color:var(--color-text-secondary); line-height:1.55;">Kod okunur, ne yaptığı anlaşılır, gerekirse düzeltilir.</span></div>`
                    }
                )}
                <p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin-top:16px; text-align:center;">Böylece AI, işi yapan değil, işi hızlandıran bir araç olur.</p>
            `
        },

        // 31 · AI Araçları Nedir (genel bakış, vcd-grid-3)
        {
            id: "ai-araclari",
            category: "Bölüm 6: AI ile Debugging",
            title: "AI Araçları Nedir",
            html: `
                <p class="vcd-content-intro">AI araçları birkaç türe ayrılır ve her biri farklı bir işe yarar. Bu derste yalnızca ilki, sohbet asistanları kullanılır, çünkü kod hatası sormaya en uygunu odur.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch; gap:18px;">
                    <div class="vcd-glass-card primary" style="padding:22px; display:flex; flex-direction:column; gap:10px;">
                        <div style="font-size:1.6rem;">💬</div>
                        <strong style="color:var(--color-primary); font-size:1rem;">Sohbet asistanları</strong>
                        <p style="font-size:0.84rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">ChatGPT, Claude, Gemini. Soru cevap içindir, kod hatası sormaya en uygunudur. <strong>Bu ders</strong>.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:10px;">
                        <div style="font-size:1.6rem;">⌨️</div>
                        <strong style="color:var(--color-text-secondary); font-size:1rem;">Gömülü asistanlar</strong>
                        <p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin:0;">GitHub Copilot gibi. Kod yazarken editörün içinde satır satır öneri verir.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:10px;">
                        <div style="font-size:1.6rem;">🧩</div>
                        <strong style="color:var(--color-text-secondary); font-size:1rem;">Site üreten araçlar</strong>
                        <p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin:0;">v0, Lovable gibi. Tek bir komutla baştan bir taslak üretir.</p>
                    </div>
                </div>
                <p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin-top:18px;">Diğer araçlar dönem sonundaki AI dersinde ele alınacak.</p>
            `
        },

        // 32 · Gerçek Bir Hata  (cssKod + taşan kutu görseli)
        {
            id: "gercek-hata",
            category: "Bölüm 6: AI ile Debugging",
            title: "Gerçek Bir Hata",
            html: `
                <p class="vcd-content-intro">Bir kutuya <code>width: 100%</code> ve <code>padding: 20px</code> verilir. Beklenen, kutunun satıra tam oturmasıdır. Gerçekte kutu taşar, çünkü content-box davranışında padding genişliğe eklenir (Bölüm 2). CSS hata mesajı vermez, sadece görüntü sessizce bozulur ki bu da hatayı fark etmeyi zorlaştırır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center; gap:32px;">
                    <div>${cssKod(`.kutu {
  width: 100%;
  padding: 20px;
}`)}</div>
                    <div style="display:flex; flex-direction:column; gap:12px; padding:0 30px;">
                        <div style="border:2px dashed var(--color-text-muted); border-radius:8px; padding:16px;">
                            <div style="font-size:0.68rem; color:var(--color-text-muted); font-family:'JetBrains Mono',monospace; margin-bottom:10px;">konteyner</div>
                            <div style="box-sizing:content-box; width:100%; padding:24px 44px; background:rgba(248,113,113,0.2); border:2px solid #f87171; border-radius:6px; text-align:center; font-size:0.84rem; color:var(--color-text-primary); font-weight:600;">taşan kutu</div>
                        </div>
                        <span style="font-size:0.74rem; color:#f87171; text-align:center;">Kırmızı kutu, kesikli konteynerin iki kenarından da taşıyor.</span>
                    </div>
                </div>
            `
        },

        // 33 · İyi Bir Soru Üç Parçadan Oluşur
        {
            id: "uc-parca-soru",
            category: "Bölüm 6: AI ile Debugging",
            title: "İyi Bir Soru Üç Parçadan Oluşur",
            html: `
                <p class="vcd-content-intro">AI'a sorulan iyi bir soru üç şey içerir. Kodun kendisi, beklenen sonuç ve gerçekleşen sonuç. Bu üçlü verilmezse AI eksik bilgiyle tahmin yürütmek zorunda kalır ve konudan uzaklaşabilir.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch; gap:12px;">
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px;"><strong style="color:var(--color-primary); font-size:0.82rem;">1. Kod</strong><p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Hangi kodu yazdım</p></div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px;"><strong style="color:var(--color-secondary); font-size:0.82rem;">2. Beklenen</strong><p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Ne olmasını istiyordum</p></div>
                    <div class="vcd-glass-card" style="padding:16px; display:flex; flex-direction:column; gap:6px;"><strong style="color:#f87171; font-size:0.82rem;">3. Gerçekleşen</strong><p style="font-size:0.74rem; color:var(--color-text-secondary); line-height:1.5; margin:0;">Bunun yerine ne oldu</p></div>
                </div>
                <div style="margin-top:16px; background:rgba(2,184,204,0.07); border:1px solid rgba(2,184,204,0.3); border-radius:10px; padding:16px 18px;">
                    <div style="font-size:0.64rem; color:var(--color-secondary); font-family:'JetBrains Mono',monospace; margin-bottom:8px; letter-spacing:0.04em;">AI'A YAZILAN TAM MESAJ</div>
                    <p style="font-size:0.86rem; color:var(--color-text-primary); line-height:1.7; margin:0;">Bir kutuya <span style="color:var(--color-primary); font-family:'JetBrains Mono',monospace;">width: 100%</span> ve <span style="color:var(--color-primary); font-family:'JetBrains Mono',monospace;">padding: 20px</span> verdim. Kutunun satıra tam oturmasını bekliyordum ama sağdan taşıyor. Taşmadan, tam genişlikte durması için nasıl düzeltirim?</p>
                </div>
                <p style="font-size:0.8rem; color:var(--color-text-muted); line-height:1.55; margin-top:12px;">Üç parçanın tek bir mesajda birleştiği hali budur. Görsel bir sorunda AI'a bu mesajla birlikte ekran görüntüsü de verilebilir.</p>
            `
        },

        // AI-EK 1 · İyi Prompt, Kötü Prompt (comparePanels)
        {
            id: "iyi-kotu-prompt",
            category: "Bölüm 6: AI ile Debugging",
            title: "İyi Prompt, Kötü Prompt",
            html: `
                <p class="vcd-content-intro">Aynı sorun, iki farklı soruluş. Belirsiz bir soru AI'ı tahmine zorlar. Kodu, beklenen sonucu ve gerçekleşeni içeren bir soru ise AI'ı doğrudan çözüme yaklaştırır.</p>
                ${comparePanels(
                    {
                        label: "belirsiz soru", tone: "bad",
                        html: `<div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:16px; font-size:0.88rem; color:var(--color-text-secondary); line-height:1.6; font-style:italic;">"Butonum bozuk, düzeltir misin?"</div>
                            <ul style="margin:8px 0 0; padding-left:18px; font-size:0.78rem; color:var(--color-text-muted); line-height:1.7;"><li>Kod yok</li><li>Ne beklendiği belli değil</li><li>Ne olduğu belli değil</li></ul>`
                    },
                    {
                        label: "net soru", tone: "good",
                        html: `<div style="background:rgba(255,255,255,0.03); border-radius:8px; padding:16px; font-size:0.84rem; color:var(--color-text-secondary); line-height:1.6;">"<span style="font-family:'JetBrains Mono',monospace; color:var(--color-primary);">width: 100%</span> ve <span style="font-family:'JetBrains Mono',monospace; color:var(--color-primary);">padding: 20px</span> verdiğim kutu satırdan taşıyor. Tam genişlikte, taşmadan durmasını bekliyordum. Nasıl düzeltirim?"</div>
                            <ul style="margin:8px 0 0; padding-left:18px; font-size:0.78rem; color:var(--color-text-muted); line-height:1.7;"><li>Kod var</li><li>Beklenen var</li><li>Gerçekleşen var</li></ul>`
                    }
                )}
            `
        },

        // AI-EK 2 · Sık sorunlar için hazır sorular
        {
            id: "gercek-prompt-ornekleri",
            category: "Bölüm 6: AI ile Debugging",
            title: "Sık Sorunlar İçin Hazır Sorular",
            html: `
                <p class="vcd-content-intro">Bu haftanın konularında en sık karşılaşılan üç sorun ve AI'a nasıl sorulabileceği. Her soru kodu, bekleneni ve gerçekleşeni birlikte verir.</p>
                <div style="display:flex; flex-direction:column; gap:12px; margin-top:4px;">
                    <div style="display:flex; gap:14px; align-items:center; background:rgba(255,255,255,0.03); border:1px solid var(--border-light,rgba(255,255,255,0.1)); border-radius:10px; padding:14px 16px;">
                        <span style="flex:none; font-size:0.68rem; color:var(--color-secondary); font-family:'JetBrains Mono',monospace; width:110px;">margin collapse</span>
                        <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55;">"Alt alta iki kutuya 30px ve 20px margin verdim, arada 50px yerine 30px boşluk var. Neden toplanmıyor?"</span>
                    </div>
                    <div style="display:flex; gap:14px; align-items:center; background:rgba(255,255,255,0.03); border:1px solid var(--border-light,rgba(255,255,255,0.1)); border-radius:10px; padding:14px 16px;">
                        <span style="flex:none; font-size:0.68rem; color:var(--color-secondary); font-family:'JetBrains Mono',monospace; width:110px;">overflow</span>
                        <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55;">"Sabit yükseklikli kutuma metin sığmayıp dışarı taşıyor. Taşan kısmı düzgün yönetmek için ne yapmalıyım?"</span>
                    </div>
                    <div style="display:flex; gap:14px; align-items:center; background:rgba(255,255,255,0.03); border:1px solid var(--border-light,rgba(255,255,255,0.1)); border-radius:10px; padding:14px 16px;">
                        <span style="flex:none; font-size:0.68rem; color:var(--color-secondary); font-family:'JetBrains Mono',monospace; width:110px;">ortalama</span>
                        <span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.55;">"max-width verdiğim sayfa sola yapışık duruyor, ortalanmıyor. Ortalamak için hangi satır eksik?"</span>
                    </div>
                </div>
                <p style="font-size:0.8rem; color:var(--color-text-muted); line-height:1.55; margin-top:14px; text-align:center;">Sorunun içinde ne yaptığın ve ne beklediğin oldukça, cevap da o kadar isabetli olur.</p>
            `
        },

        // 34 · Düzeltmeyi Uygula ⭐ INTERAKTİF (düzeltmeyi uygula butonu → box oturur)
        {
            id: "duzeltmeyi-uygula",
            category: "Bölüm 6: AI ile Debugging",
            title: "Düzeltmeyi Uygula",
            html: `
                <p class="vcd-content-intro">AI büyük olasılıkla <code>box-sizing: border-box</code> önerir. Bu satır mevcut kuralın içine eklenince kutu taşmayı bırakır ve satıra tam oturur. Önemli olan bunu anlayarak uygulamaktır.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:stretch; grid-template-columns:1fr 1fr; gap:24px;">
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div class="pane-label cikti">çıktı</div>
                        <div style="flex:1; background:rgba(255,255,255,0.05); border-radius:8px; padding:20px; display:flex; flex-direction:column; justify-content:center;">
                            <div style="border:2px dashed var(--color-text-muted); border-radius:6px; padding:12px; position:relative;">
                                <div style="font-size:0.64rem; color:var(--color-text-muted); font-family:'JetBrains Mono',monospace; margin-bottom:8px;">konteyner</div>
                                <div class="fx-box" style="box-sizing:content-box; width:100%; padding:20px; border:3px solid var(--color-primary); background:rgba(212,255,0,0.12); border-radius:4px; text-align:center; font-size:0.82rem; color:var(--color-text-primary); font-weight:600;">kutu</div>
                            </div>
                            <p class="fx-status" style="font-size:0.78rem; color:#f87171; margin:12px 0 0; min-height:1.4em;">Şu an content-box. Kutu konteyneri taşıyor.</p>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:14px;">
                        <div class="pane-label kod">kod</div>
                        <pre class="html-kod" style="margin:0; flex:1;"><span style="color:#818cf8;">.kutu</span> <span style="color:var(--color-text-muted);">{</span>
  <span style="color:#9d7bff;">width</span><span style="color:var(--color-text-muted);">:</span> <span style="color:#d4ff00;">100%</span><span style="color:var(--color-text-muted);">;</span>
  <span style="color:#9d7bff;">padding</span><span style="color:var(--color-text-muted);">:</span> <span style="color:#d4ff00;">20px</span><span style="color:var(--color-text-muted);">;</span>
<span class="fx-fixline" style="display:block;"></span><span style="color:var(--color-text-muted);">}</span></pre>
                        <button class="sim-btn fx-btn" type="button" style="align-self:flex-start;">düzeltmeyi uygula</button>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const box = slideEl.querySelector('.fx-box');
                const btn = slideEl.querySelector('.fx-btn');
                const fixLine = slideEl.querySelector('.fx-fixline');
                const status = slideEl.querySelector('.fx-status');
                if (!box || !btn || !fixLine) return;
                let fixed = false;
                // Her iki durum da TEK satır → sıfır layout shift (buton zıplamaz).
                const fixedHTML = '  <span style="color:#9d7bff;">box-sizing</span><span style="color:var(--color-text-muted);">:</span> <span style="color:#34d399; font-weight:700;">border-box</span><span style="color:var(--color-text-muted);">;</span>';
                const ghostHTML = '  <span style="color:var(--color-text-muted); opacity:0.5;">/* AI önerisi buraya eklenecek */</span>';
                const apply = () => {
                    box.style.boxSizing = fixed ? 'border-box' : 'content-box';
                    fixLine.innerHTML = fixed ? fixedHTML : ghostHTML;
                    if (status) {
                        status.textContent = fixed
                            ? 'border-box eklendi. Kutu konteynere tam oturdu.'
                            : 'Şu an content-box. Kutu konteyneri taşıyor.';
                        status.style.color = fixed ? '#34d399' : '#f87171';
                    }
                    btn.textContent = fixed ? 'geri al' : 'düzeltmeyi uygula';
                };
                btn.addEventListener('click', (e) => { e.stopPropagation(); fixed = !fixed; apply(); });
                apply();
            }
        },

        // AI-EK 3 · AI Nerede Yanılır
        {
            id: "ai-yanilir",
            category: "Bölüm 6: AI ile Debugging",
            title: "AI Nerede Yanılır",
            html: `
                <p class="vcd-content-intro">AI güçlü bir yardımcıdır ama her zaman haklı değildir. Cevabı olduğu gibi uygulamadan önce bilinmesi gereken üç sınırı vardır.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch; gap:18px;">
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:10px;">
                        <div style="font-size:1.6rem;">🎲</div>
                        <strong style="color:#f87171; font-size:1rem;">Uydurabilir</strong>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Var olmayan bir CSS özelliği ya da yanlış bir değer önerebilir. Emin bir dille yazması doğru olduğu anlamına gelmez.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:10px;">
                        <div style="font-size:1.6rem;">🌀</div>
                        <strong style="color:#f59e0b; font-size:1rem;">Fazla karmaşık çözer</strong>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Basit bir işi gereğinden fazla kodla, anlaşılması zor bir yolla çözebilir. Çoğu zaman daha kısa bir yol vardır.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:10px;">
                        <div style="font-size:1.6rem;">🔍</div>
                        <strong style="color:var(--color-secondary); font-size:1rem;">Bağlamı görmez</strong>
                        <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Senin sayfanın tamamını bilmez, yalnızca verdiğin parçaya göre tahmin eder. Eksik bilgiyle yanlış yönlenebilir.</p>
                    </div>
                </div>
                <p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin-top:16px; text-align:center;">Bu yüzden her cevap tarayıcıda denenir. Çalışmıyorsa ya da ne yaptığı anlaşılmıyorsa uygulanmaz.</p>
            `
        },

        // 35 · Düzelttirmek Değil, Açıklatmak  (ileri-pin: AI dersi)
        {
            id: "aciklatmak",
            category: "Bölüm 6: AI ile Debugging",
            title: "Düzelttirmek Değil, Açıklatmak",
            html: `
                <p class="vcd-content-intro">AI yalnızca hata düzeltmek için değil, anlamak için de kullanılır. Anlaşılmayan bir satır AI'a sorulabilir, örneğin <code>box-sizing: border-box</code> satırının ne yaptığı açıklattırılabilir. Böylece çözüm ezberlenmez, anlaşılır.</p>
                <div style="max-width:640px; margin:22px auto 0; background:rgba(2,184,204,0.08); border:1px solid rgba(2,184,204,0.3); border-radius:12px; padding:24px 26px;">
                    <div style="font-size:0.68rem; color:var(--color-secondary); font-family:'JetBrains Mono',monospace; margin-bottom:12px; letter-spacing:0.04em;">ÖRNEK SORU</div>
                    <p style="font-size:1rem; color:var(--color-text-primary); line-height:1.7; margin:0;">Bu satır tam olarak ne yapıyor, kutuyu neden düzeltti? <span style="color:var(--color-primary); font-family:'JetBrains Mono',monospace;">box-sizing: border-box</span></p>
                </div>
                <p style="font-size:0.86rem; color:var(--color-text-muted); line-height:1.6; margin-top:16px; text-align:center; max-width:640px; margin-left:auto; margin-right:auto;">Aynı yöntem bir hata olmadan da işler. Anlaşılmayan her satır bu şekilde açıklattırılabilir.</p>
                <p class="ileri-pin" style="margin-top:18px;">İleri: AI'ı daha derinlemesine kullanmak dönem sonundaki AI dersinin konusu.</p>
            `
        },

        // ============================================================
        // BÖLÜM 7 — TASARIM GÖZÜ: PROXIMITY
        // ============================================================

        // 36 · Yakınlık İlkesi (Proximity)
        {
            id: "proximity",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Yakınlık İlkesi",
            html: `
                <p class="vcd-content-intro">Göz, birbirine yakın duran elemanları ilişkili, uzak duranları ayrı okur. Buna Proximity (yakınlık) denir. Bir başlık ona ait metne yakınsa aynı gruba ait görünür, araları açıldıkça bu bağ zayıflar. Aynı sayıda nokta, sadece aralıkları değişerek farklı gruplara ayrılır.</p>
                <div style="display:flex; justify-content:center; align-items:flex-start; gap:80px; margin-top:28px;">
                    <div style="display:flex; flex-direction:column; align-items:center; gap:28px;">
                        <div style="display:flex; flex-direction:column; gap:56px;">
                            <div style="display:flex; gap:14px;">${[0,1,2].map(() => `<span style="width:24px; height:24px; border-radius:50%; background:var(--color-secondary);"></span>`).join('')}</div>
                            <div style="display:flex; gap:14px;">${[0,1,2].map(() => `<span style="width:24px; height:24px; border-radius:50%; background:var(--color-secondary);"></span>`).join('')}</div>
                        </div>
                        <span style="font-size:0.82rem; color:var(--color-text-secondary);">geniş boşluk, iki ayrı grup</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; gap:28px;">
                        <div style="display:flex; flex-direction:column; gap:14px;">
                            ${[0,1,2,3].map(() => `<div style="display:flex; gap:14px;">${[0,1,2].map(() => `<span style="width:24px; height:24px; border-radius:50%; background:var(--color-text-muted);"></span>`).join('')}</div>`).join('')}
                        </div>
                        <span style="font-size:0.82rem; color:var(--color-text-secondary);">eşit boşluk, tek küme</span>
                    </div>
                </div>
            `
        },

        // 37 · Yakınlığın Kökü Gestalt
        {
            id: "gestalt-kok",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Yakınlığın Kökü Gestalt",
            html: `
                <p class="vcd-content-intro">Yakınlık ilkesi tasarımcıların icadı değildir. Kökü Gestalt psikolojisine dayanır. 1920'lerde psikologlar, gözün ayrı parçaları nasıl gruplayıp bütün olarak algıladığını inceledi. Yakınlık (Law of Proximity) bu gruplama yasalarından biridir.</p>
                <div class="vcd-grid-2" style="margin-top:6px; align-items:center; gap:28px;">
                    <div class="vcd-analogy-box" style="margin:0;">
                        <h4>Gestalt Kısaca</h4>
                        <p>Almanca'da Gestalt "bütün biçim" demektir. Temel fikir, bütünün parçaların toplamından farklı algılanmasıdır. Grafik tasarımda bu ilkeyi, Robin Williams'ın <span lang="en">The Non-Designer's Design Book</span> adlı kitabındaki dört ilke yaygınlaştırdı. Contrast, Repetition, Alignment ve Proximity.</p>
                    </div>
                    <div style="background:rgba(255,255,255,0.03); border-radius:10px; padding:24px; display:flex; flex-direction:column; gap:16px; align-items:center;">
                        <div style="display:flex; gap:12px;">${[0,1,2].map(()=>`<span style="width:20px; height:20px; border-radius:50%; background:var(--color-text-muted);"></span>`).join('')}<span style="width:20px;"></span>${[0,1,2].map(()=>`<span style="width:20px; height:20px; border-radius:50%; background:var(--color-secondary);"></span>`).join('')}</div>
                        <span style="font-size:0.78rem; color:var(--color-text-secondary); text-align:center; line-height:1.5;">Göz bu altı noktayı tek tek değil, iki grup olarak görür. Beynin bu otomatik gruplaması Gestalt'ın konusudur.</span>
                    </div>
                </div>
            `
        },

        // 38 · Aynı İçerik, Gruplu ve Dağınık  (comparePanels)
        {
            id: "gruplu-daginik",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Aynı İçerik, Gruplu ve Dağınık",
            html: `
                <p class="vcd-content-intro">Aynı bilgi, iki farklı boşluk düzeniyle. Solda her satır eşit aralıklı, ilişkiler belirsiz. Sağda ilgili satırlar yakın, gruplar arası boşluk açık, yapı ilk bakışta okunur.</p>
                ${comparePanels(
                    {
                        label: "eşit aralık", tone: "bad",
                        html: `<div style="background:#fff; border-radius:6px; padding:16px; display:flex; flex-direction:column; gap:9px;">
                            <div style="color:#111; font-size:0.74rem; font-weight:700;">Atölye 12</div>
                            <div style="color:#444; font-size:0.7rem;">Grafik Tasarım Stüdyosu</div>
                            <div style="color:#444; font-size:0.7rem;">0555 000 00 00</div>
                            <div style="color:#444; font-size:0.7rem;">ayse@ornek.com</div>
                            <div style="color:#111; font-size:0.74rem; font-weight:700;">Çalışma Saatleri</div>
                            <div style="color:#444; font-size:0.7rem;">Hafta içi 09-18</div>
                        </div>`
                    },
                    {
                        label: "gruplu", tone: "good",
                        html: `<div style="background:#fff; border-radius:6px; padding:16px; display:flex; flex-direction:column; gap:16px;">
                            <div style="display:flex; flex-direction:column; gap:2px;"><div style="color:#111; font-size:0.74rem; font-weight:700;">Atölye 12</div><div style="color:#444; font-size:0.7rem;">Grafik Tasarım Stüdyosu</div></div>
                            <div style="display:flex; flex-direction:column; gap:2px;"><div style="color:#444; font-size:0.7rem;">0555 000 00 00</div><div style="color:#444; font-size:0.7rem;">ayse@ornek.com</div></div>
                            <div style="display:flex; flex-direction:column; gap:2px;"><div style="color:#111; font-size:0.74rem; font-weight:700;">Çalışma Saatleri</div><div style="color:#444; font-size:0.7rem;">Hafta içi 09-18</div></div>
                        </div>`
                    }
                )}
            `
        },

        // 39 · Bir Kutu da Gruplar (Common Region, comparePanels)
        {
            id: "common-region",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Ortak Kutu Grup Kurar",
            html: `
                <p class="vcd-content-intro">Yakınlık tek gruplama yolu değildir. Elemanları ortak bir kutunun içine koymak da onları gruplar. Buna Common Region (ortak alan) denir. Bu haftanın kartı aslında bir gruplama aracıdır. İçindeki başlık, metin ve buton aynı yüzeyi paylaştığı için bir bütün olarak okunur.</p>
                ${comparePanels(
                    {
                        label: "boşlukla gruplama",
                        html: `<div style="display:flex; flex-direction:column; gap:3px; padding:8px 0;"><div style="color:var(--color-text-primary); font-size:0.78rem; font-weight:700;">Başlık</div><div style="color:var(--color-text-secondary); font-size:0.72rem;">Açıklama metni</div><div style="color:var(--color-secondary); font-size:0.72rem;">Bir eylem →</div></div><span style="font-size:0.7rem; color:var(--color-text-muted);">Yakınlık grubu kurar.</span>`
                    },
                    {
                        label: "ortak kart zemini", tone: "good",
                        html: `<div style="background:#fff; border-radius:8px; padding:14px; box-shadow:0 4px 14px rgba(0,0,0,0.2); display:flex; flex-direction:column; gap:5px;"><div style="color:#111; font-size:0.78rem; font-weight:700;">Başlık</div><div style="color:#555; font-size:0.72rem;">Açıklama metni</div><div style="color:#1a73e8; font-size:0.72rem;">Bir eylem →</div></div><span style="font-size:0.7rem; color:var(--color-text-muted);">Ortak zemin grubu kurar.</span>`
                    }
                )}
            `
        },

        // 40 · Yakınlığı margin ile Kurmak
        {
            id: "margin-ile-yakinlik",
            category: "Bölüm 7: Tasarım Gözü",
            title: "Yakınlığı margin ile Kurmak",
            html: `
                <p class="vcd-content-intro">Yakınlık kararı doğrudan <code>margin</code> ile uygulanır. Grubun içindeki elemanlara az <code>margin</code>, gruplar arasına çok <code>margin</code> verilir. Böylece kod, gözün gördüğü gruplamayı birebir kurar.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:center; gap:32px;">
                    <div>${cssKod(`.satir {
  margin-bottom: 4px;
}
.grup {
  margin-bottom: 32px;
}`)}</div>
                    <div style="background:#fff; border-radius:10px; padding:22px;">
                        <div style="display:flex; flex-direction:column; gap:4px;">
                            <div style="color:#111; font-size:0.78rem; font-weight:700;">Genel Bakış</div>
                            <div style="color:#555; font-size:0.72rem;">Proje özeti ve amaç</div>
                        </div>
                        <div style="height:32px; position:relative;"><span style="position:absolute; left:0; top:50%; transform:translateY(-50%); font-size:0.6rem; color:#e67e22; font-family:'JetBrains Mono',monospace;">32px</span></div>
                        <div style="display:flex; flex-direction:column; gap:4px;">
                            <div style="color:#111; font-size:0.78rem; font-weight:700;">İletişim</div>
                            <div style="color:#555; font-size:0.72rem;">ornek@atolye12.com</div>
                        </div>
                        <div style="margin-top:14px; font-size:0.64rem; color:#888; font-family:'JetBrains Mono',monospace;">satır arası 4px · grup arası 32px</div>
                    </div>
                </div>
                <p style="font-size:0.82rem; color:var(--color-text-muted); line-height:1.55; margin-top:14px; text-align:center;">Bu haftanın margin bilgisi doğrudan bir tasarım kararına dönüşür.</p>
            `
        },

        // ============================================================
        // BÖLÜM 8 — KAPANIŞ
        // ============================================================

        // 41 · Bu Hafta Ne Kuruldu
        {
            id: "ne-kuruldu",
            category: "Bölüm 8: Kapanış",
            title: "Bu Hafta Ne Kuruldu",
            html: `
                <p class="vcd-content-intro">Sayfa artık bilinçli boşluklara ve kart yüzeylerine sahip olabilir. Bu hafta kurulan altı yapı taşı şöyle özetlenir.</p>
                <div class="vcd-grid-3" style="margin-top:0; align-items:stretch; gap:18px;">
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:9px;"><strong style="color:var(--color-primary); font-size:0.98rem;">Kutu modeli</strong><p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin:0;">Dört katman ve box-sizing ile boyut kontrolü.</p></div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:9px;"><strong style="color:var(--color-secondary); font-size:0.98rem;">Boşluk ritmi</strong><p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin:0;">Ölçekli boşluk ve ortalanmış konteyner.</p></div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:9px;"><strong style="color:var(--color-accent); font-size:0.98rem;">Kart ve buton</strong><p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin:0;">border, köşe ve gölgeyle yüzeyler.</p></div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:9px;"><strong style="color:var(--color-primary); font-size:0.98rem;">Hata çözme</strong><p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin:0;">DevTools ve AI ile debugging.</p></div>
                    <div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:9px;"><strong style="color:var(--color-secondary); font-size:0.98rem;">Proximity</strong><p style="font-size:0.84rem; color:var(--color-text-muted); line-height:1.6; margin:0;">Yakınlık ve ortak alanla gruplama.</p></div>
                    <div class="vcd-glass-card primary" style="padding:22px; display:flex; flex-direction:column; gap:9px;"><strong style="color:var(--color-primary); font-size:0.98rem;">Sıradaki</strong><p style="font-size:0.84rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Kutuları dizmek, Flexbox.</p></div>
                </div>
                <p class="ileri-pin" style="margin-top:16px;">İleri: Ders 6 · Kutuları birbirine göre dizmek. Wireframe, Flexbox ve navigasyon.</p>
            `
        },

        // ============================================================
        // BÖLÜM 9 — CANLI DEMO (ödev öncesi, pratik)
        // ============================================================

        // 45 · Canlı Demo (week5 deseni + HTML/CSS/Çözüm sekmeleri)
        {
            id: "canli-demo",
            category: "Canlı Demo",
            title: "Canlı Demo: Çıplak Sayfayı Toparlamak",
            className: "slide-fill",
            html: `
                <style>
                .w6d .gorev{display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(255,255,255,0.02);border:1px solid var(--border-light,rgba(255,255,255,0.1));border-radius:8px;cursor:pointer;transition:background .18s ease;}
                .w6d .gorev:hover{background:rgba(255,255,255,0.05);}
                .w6d .gorev.tamam{background:rgba(212,255,0,0.09);}
                .w6d .gorev-badge{flex:none;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;line-height:1;font-size:0.72rem;font-weight:800;color:var(--color-text-secondary);border:1.5px solid rgba(255,255,255,0.2);transition:background .2s ease,color .2s ease,border-color .2s ease;}
                .w6d .gorev.tamam .gorev-badge{background:var(--color-primary);color:#0a0a0a;border-color:var(--color-primary);}
                .w6d .gorev-txt{font-size:0.76rem;color:var(--color-text-primary);line-height:1.4;}
                .w6d .gorev-txt code{font-size:0.9em;}
                .w6d .gorev-bar{height:5px;border-radius:99px;background:rgba(255,255,255,0.07);overflow:hidden;}
                .w6d .gorev-bar-fill{height:100%;width:0;border-radius:99px;background:linear-gradient(90deg,var(--color-primary),var(--color-secondary));transition:width .35s cubic-bezier(.4,0,.2,1);}
                .w6d .cd-tab{font-size:0.7rem;font-family:'JetBrains Mono',monospace;color:var(--color-text-muted);background:rgba(255,255,255,0.03);border:1px solid var(--border-light,rgba(255,255,255,0.1));border-radius:6px;padding:6px 11px;cursor:pointer;transition:color .15s ease,background .15s ease,border-color .15s ease;}
                .w6d .cd-tab:hover{color:var(--color-text-secondary);}
                .w6d .cd-tab.active{color:#0a0a0a;background:var(--color-primary);border-color:var(--color-primary);font-weight:700;}
                .w6d .cd-pre{position:absolute;inset:0;margin:0;overflow:auto;font-size:0.64rem;line-height:1.55;}
                .w6d .cd-frame{width:100%;height:100%;border:none;display:block;}
                </style>
                <div class="w6d" style="display:flex; flex-direction:column; height:100%; gap:12px;">
                    <p class="vcd-content-intro" style="margin:0; flex-shrink:0;">Çıplak bir sayfayı, bu haftanın kutu kararlarıyla bir öğrenci portfolyosuna dönüştürüyoruz. Solda kod (<span lang="en">index.html</span> ve <span lang="en">style.css</span>), sağda tamamlanmış hâlin canlı önizlemesi. Alttaki adımlar sınıfta sırayla uygulanır.</p>
                    <div class="vcd-grid-2" style="flex:1; min-height:0; margin-top:0; align-items:stretch; grid-template-columns:1.15fr 1fr; gap:18px;">
                        <div style="display:flex; flex-direction:column; min-height:0; gap:8px;">
                            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                <button class="cd-tab active" data-pre="#src-html">index.html</button>
                                <button class="cd-tab" data-pre="#src-css">style.css</button>
                                <button class="cd-tab" data-pre="#src-cozum">style.css · çözüm</button>
                                <button class="sim-btn kopyala-btn cd-copy" style="margin-left:auto;">⧉ Kopyala</button>
                            </div>
                            <div style="flex:1; min-height:0; position:relative;">
                                <pre id="cd-view" class="html-kod cd-pre"></pre>
                                <div style="display:none;">
                                <pre id="src-html">&lt;!DOCTYPE html&gt;
&lt;html lang="tr"&gt;
&lt;head&gt;
  &lt;link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&amp;family=Inter:wght@400;500&amp;display=swap" rel="stylesheet"&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header class="ust"&gt;
    &lt;h1&gt;Deniz Kaya&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="#"&gt;Projeler&lt;/a&gt;
      &lt;a href="#"&gt;Hakkımda&lt;/a&gt;
      &lt;a href="#"&gt;İletişim&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main class="sayfa"&gt;
    &lt;section class="hero"&gt;
      &lt;h2&gt;Görsel iletişim tasarımı öğrencisi&lt;/h2&gt;
      &lt;p&gt;Afiş, kitap ve kimlik tasarımı üzerine
         çalışıyorum.&lt;/p&gt;
      &lt;a class="buton" href="#"&gt;İletişime geç&lt;/a&gt;
    &lt;/section&gt;
    &lt;section class="kart"&gt;
      &lt;span class="etiket"&gt;Afiş&lt;/span&gt;
      &lt;h3&gt;Sergi Afiş Serisi&lt;/h3&gt;
      &lt;p&gt;Üç afiş üzerine renk ve tipografi
         çalışması.&lt;/p&gt;
      &lt;a class="link" href="#"&gt;Projeyi gör →&lt;/a&gt;
    &lt;/section&gt;
    &lt;section class="kart"&gt;
      &lt;span class="etiket"&gt;Kitap&lt;/span&gt;
      &lt;h3&gt;Şiir Kitabı Kapağı&lt;/h3&gt;
      &lt;p&gt;Bir şiir seçkisi için kapak ve
         iç sayfa düzeni.&lt;/p&gt;
      &lt;a class="link" href="#"&gt;Projeyi gör →&lt;/a&gt;
    &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer class="alt"&gt;© 2026 Deniz Kaya&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                                <pre id="src-css">body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  color: #2d2a26;
}

/* kutu kararları buraya eklenecek */</pre>
                                <pre id="src-cozum">* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background: #f4f1ea;
  color: #2d2a26;
  line-height: 1.6;
}
h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; font-weight: 600; }

.ust, .sayfa, .alt {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
}
.ust nav a {
  color: #6b6560;
  text-decoration: none;
  margin-right: 16px;
}

.hero {
  background: #1f2d3d;
  color: #fff;
  padding: 44px 36px;
  border-radius: 20px;
  margin-bottom: 24px;
}
.hero h2 { font-size: 2rem; margin: 0 0 12px; }
.hero p { color: #c7d0da; margin: 0 0 24px; }

.kart {
  background: #fff;
  padding: 26px;
  border-radius: 16px;
  box-shadow: 0px 6px 20px rgba(31,45,61,0.08);
  margin-bottom: 18px;
}
.etiket {
  display: inline-block;
  font-size: 0.72rem;
  color: #e07a5f;
  background: #faf0ec;
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}

.buton {
  display: inline-block;
  padding: 13px 28px;
  background: #e07a5f;
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
}
.link {
  color: #1f2d3d;
  text-decoration: none;
  font-weight: 600;
}</pre>
                                </div>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction:column; min-height:0; gap:8px;">
                            <div class="pane-label cikti" style="margin:0;">önizleme · tamamlanmış portfolyo</div>
                            <div style="flex:1; min-height:0; border-radius:10px; overflow:hidden; border:1px solid var(--border-light,rgba(255,255,255,0.12)); background:#fff;">
                                <iframe class="cd-frame" title="portfolyo önizleme"></iframe>
                            </div>
                        </div>
                    </div>
                    <div style="flex-shrink:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                        <span style="font-size:0.72rem; color:var(--color-text-muted); font-weight:700; margin-right:2px;">Adımlar</span>
                        <div class="gorev"><span class="gorev-badge">1</span><span class="gorev-txt">box-sizing</span></div>
                        <div class="gorev"><span class="gorev-badge">2</span><span class="gorev-txt">max-width ile ortala</span></div>
                        <div class="gorev"><span class="gorev-badge">3</span><span class="gorev-txt">karta çevir</span></div>
                        <div class="gorev"><span class="gorev-badge">4</span><span class="gorev-txt">buton biçimle</span></div>
                        <div class="gorev"><span class="gorev-badge">5</span><span class="gorev-txt">8'in katı boşluk</span></div>
                        <span style="margin-left:auto; font-size:0.74rem; color:var(--color-text-secondary); font-weight:700;"><span class="gorev-sayac" style="color:var(--color-primary);">0</span> / 5</span>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const tabs = slideEl.querySelectorAll('.cd-tab');
                const view = slideEl.querySelector('#cd-view');
                const showTab = (sel) => {
                    const src = slideEl.querySelector(sel);
                    if (view && src) view.textContent = src.textContent;
                    tabs.forEach((t) => t.classList.toggle('active', t.dataset.pre === sel));
                };
                tabs.forEach((t) => t.addEventListener('click', (e) => { e.stopPropagation(); showTab(t.dataset.pre); }));
                showTab('#src-html');
                // Canlı önizleme: index.html + çözüm CSS birebir render edilir.
                const frame = slideEl.querySelector('.cd-frame');
                if (frame) {
                    const htmlSrc = slideEl.querySelector('#src-html').textContent;
                    const cssSrc = slideEl.querySelector('#src-cozum').textContent;
                    frame.srcdoc = htmlSrc.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + cssSrc + '\n</style>');
                }
                const copyBtn = slideEl.querySelector('.cd-copy');
                if (copyBtn) {
                    const orij = copyBtn.textContent;
                    copyBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (!view) return;
                        const bitti = () => { copyBtn.textContent = '✓ Kopyalandı'; copyBtn.classList.add('active'); setTimeout(() => { copyBtn.textContent = orij; copyBtn.classList.remove('active'); }, 1500); };
                        if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(view.textContent).then(bitti).catch(bitti); } else { bitti(); }
                    });
                }
                const sayac = slideEl.querySelector('.gorev-sayac');
                const barFill = slideEl.querySelector('.gorev-bar-fill');
                const guncelle = () => {
                    const n = slideEl.querySelectorAll('.gorev.tamam').length;
                    if (sayac) sayac.textContent = n;
                    if (barFill) barFill.style.width = (n / 5 * 100) + '%';
                };
                slideEl.querySelectorAll('.gorev').forEach((g) => {
                    g.addEventListener('click', (e) => { e.stopPropagation(); g.classList.toggle('tamam'); guncelle(); });
                });
            }
        },

        // 42 · Haftalık Ödev
        {
            id: "haftalik-odev",
            category: "Bölüm 8: Kapanış",
            title: "Haftalık Ödev",
            html: `
                <p class="vcd-content-intro">Kendi sayfana bu haftanın konularını uygula. Aşağıdaki adımlar bir kontrol listesidir.</p>
                <div class="vcd-grid-2" style="margin-top:0; align-items:start; gap:24px;">
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div style="display:flex; gap:10px; align-items:baseline;"><span style="color:var(--color-primary);">☐</span><span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">İçeriği <code>max-width</code> ile ortalanmış bir sütuna al.</span></div>
                        <div style="display:flex; gap:10px; align-items:baseline;"><span style="color:var(--color-primary);">☐</span><span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Bir bölümü karta çevir.</span></div>
                        <div style="display:flex; gap:10px; align-items:baseline;"><span style="color:var(--color-primary);">☐</span><span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">En az bir buton ekle.</span></div>
                        <div style="display:flex; gap:10px; align-items:baseline;"><span style="color:var(--color-primary);">☐</span><span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Boşlukları 8'in katlarından seç.</span></div>
                        <div style="display:flex; gap:10px; align-items:baseline;"><span style="color:var(--color-primary);">☐</span><span style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.5;">Takıldığın yerde DevTools ile hatayı gör.</span></div>
                    </div>
                    <div>
                        ${cssKod(`.sayfa {
  max-width: 800px;
  margin: 0 auto;
}
.kart {
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px
    rgba(0,0,0,0.1);
}`)}
                    </div>
                </div>
                <div style="margin-top:16px; background:rgba(2,184,204,0.07); border:1px solid rgba(2,184,204,0.3); border-radius:10px; padding:14px 18px;">
                    <div style="font-size:0.66rem; color:var(--color-secondary); font-family:'JetBrains Mono',monospace; margin-bottom:8px; letter-spacing:0.04em;">AI'I NASIL KULLANMALI</div>
                    <p style="font-size:0.82rem; color:var(--color-text-secondary); line-height:1.6; margin:0;">Önce kendin yazmayı dene. Takıldığında hemen AI'a kod yazdırma; bilmediğin bir şeyi doğrudan kodunun içine koyma. Önce nasıl yazabileceğini açıklamasını iste, anladıktan sonra uygula. Bir hatayı sorarken kodu, beklediğini ve gerçekleşeni birlikte ver.</p>
                </div>
            `
        }

    ]
};
