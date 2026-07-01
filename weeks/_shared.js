/**
 * ==========================================================================
 * SHARED DECK HELPERS — git423 (Web Tasarımı)
 * ==========================================================================
 *
 * Saf string-builder + küçük onRender yardımcıları. Motor bunu manifest'te
 * GÖRMEZ (hafta sanmaz); yalnızca weekN.js dosyaları `import`'lar. Build-less
 * kalır (ES module, bundler yok). Tekrar eden + parametreli parçaları tek
 * yerde tutar → tutarlılık + daha az kopyala-yapıştır.
 *
 * İlk kullanan: week6 (Box Model). Eski desteler (week1-5) BUNU import ETMEZ,
 * dokunulmaz → regresyon riski yok. Yeni deste opt-in eder.
 *
 * export'lar:
 *   boxLayerDiagram(opts)  → iç içe renk-kodlu kutu (content/padding/border/margin)
 *   layerLegend()          → o dört katmanın renk açıklaması (satır içi)
 *   cssKod(code)           → CSS sözdizimi renklendirilmiş <pre class="html-kod">
 *   wireLiveStyle(el,a,b)  → düzenlenebilir CSS textarea'yı canlı <style>'a bağlar
 *   comparePanels(l,r,o)   → iki eşit panel yan yana (karşılaştırma / önce-sonra)
 */

/**
 * İç içe geçmiş dört katmanı renk-kodlu gösterir. ETİKET YOK (çakışmayı önler);
 * hangi rengin hangi katman olduğu layerLegend() ya da slayt-özel açıklama ile
 * verilir. Katman sınıfları SABİT (`.bx-margin/.bx-border/.bx-padding/.bx-content`)
 * → canlı demoda onRender bunları hedefleyip günceller. Renk sözleşmesi: margin
 * turuncu (#f59e0b), border mor (accent), padding yeşil (#34d399), content
 * camgöbeği (#02b8cc). `scale` içerik kutusunu büyütür/küçültür.
 */
export function boxLayerDiagram({ margin = 20, border = 6, padding = 16, content = 'content', scale = 1 } = {}) {
    const cPadV = Math.round(26 * scale), cPadH = Math.round(34 * scale);
    return `
        <div class="bx-margin" style="background:rgba(245,158,11,0.14); border:1px dashed rgba(245,158,11,0.55); border-radius:10px; padding:${margin}px;">
            <div class="bx-border" style="border:${border}px solid var(--color-accent); border-radius:7px;">
                <div class="bx-padding" style="background:rgba(52,211,153,0.16); padding:${padding}px;">
                    <div class="bx-content" style="background:rgba(2,184,204,0.32); color:var(--color-text-primary); text-align:center; padding:${cPadV}px ${cPadH}px; font-size:${(0.95 * scale).toFixed(2)}rem; font-weight:600; border-radius:5px; white-space:nowrap;">${content}</div>
                </div>
            </div>
        </div>`;
}

/** boxLayerDiagram'ın renk sözleşmesini satır içi açıklama olarak verir. */
export function layerLegend() {
    return `<span style="color:#f59e0b; font-weight:600;">margin</span>, `
        + `<span style="color:var(--color-accent); font-weight:600;">border</span>, `
        + `<span style="color:#34d399; font-weight:600;">padding</span>, `
        + `<span style="color:#02b8cc; font-weight:600;">content</span>`;
}

/**
 * Basit CSS'i sözdizimi-renkli bir <pre class="html-kod"> olarak döndürür.
 * HTML entity'leri escape eder. En iyi sonuç için ÇOK SATIRLI CSS ver
 * (her deklarasyon kendi satırında). Seçici satırı (`{` içeren), kapanış
 * (`}`), yorum (`/* *​/`) ve `prop: value;` satırlarını tanır.
 */
export function cssKod(code) {
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const C = { sel: '#818cf8', prop: '#9d7bff', val: '#d4ff00', punc: 'var(--color-text-muted)', com: '#6b7280' };
    const lines = String(code).replace(/^\n/, '').replace(/\n\s*$/, '').split('\n').map((line) => {
        const t = line.trim();
        if (t.startsWith('/*') || t.startsWith('*')) {
            return `<span style="color:${C.com};">${esc(line)}</span>`;
        }
        if (line.includes('{')) {
            const i = line.indexOf('{');
            return `<span style="color:${C.sel};">${esc(line.slice(0, i))}</span>`
                + `<span style="color:${C.punc};">${esc(line.slice(i))}</span>`;
        }
        if (t === '}') {
            return `<span style="color:${C.punc};">${esc(line)}</span>`;
        }
        const m = line.match(/^(\s*)([\w-]+)(\s*:\s*)(.+?)(;?\s*)$/);
        if (m) {
            const [, ind, prop, colon, val, tail] = m;
            return `${ind}<span style="color:${C.prop};">${esc(prop)}</span>`
                + `<span style="color:${C.punc};">${esc(colon)}</span>`
                + `<span style="color:${C.val};">${esc(val)}</span>`
                + `<span style="color:${C.punc};">${esc(tail)}</span>`;
        }
        return esc(line);
    });
    return `<pre class="html-kod" style="margin:0;">${lines.join('\n')}</pre>`;
}

/**
 * Düzenlenebilir CSS textarea'sını canlı bir <style> düğümüne bağlar
 * (gerçek CSS cascade, kırılgan per-property parse yok). onRender içinde
 * çağrılır. Her listener slayt gezinmesini durdurur (stopPropagation).
 * Not: enjekte edilen CSS globaldir → demo seçici adları (`.kart`,
 * `.buton-dolu`, `.buton-cerceve`) statik slaytlarda tekrar TANIMLANMAMALI.
 */
export function wireLiveStyle(slideEl, codeSel, styleSel) {
    const code = slideEl.querySelector(codeSel);
    const styleEl = slideEl.querySelector(styleSel);
    if (!code || !styleEl) return;
    const sync = () => { styleEl.textContent = code.value; };
    code.addEventListener('input', sync);
    code.addEventListener('keydown', (e) => e.stopPropagation());
    code.addEventListener('click', (e) => e.stopPropagation());
    sync();
}

/**
 * İki eşit paneli yan yana koyar (karşılaştırma / önce-sonra deseni). Bu
 * destenin pedagojik omurgası "iki şeyi yan yana koy, farkı göster" → tek
 * çerçeve, tutarlı görünüm. Sadece KABUK verir; her panelin içi serbest HTML.
 *
 *   left/right: { label?, html, tone? }
 *     label → panelin üst başlığı (opsiyonel)
 *     html  → panel gövdesi (serbest)
 *     tone  → başlık + üst-şerit rengi: 'good'|'bad'|'primary'|'secondary'|'accent'
 *   opts: { align } → dikey hizalama (varsayılan 'stretch')
 */
export function comparePanels(left, right, opts = {}) {
    const align = opts.align || 'stretch';
    const tones = {
        good: '#34d399', bad: '#f87171', warn: '#f59e0b',
        primary: 'var(--color-primary)', secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)'
    };
    const panel = (p) => {
        const color = tones[p.tone] || 'var(--color-text-secondary)';
        const label = p.label
            ? `<strong style="color:${color}; font-size:0.9rem;">${p.label}</strong>`
            : '';
        return `<div class="vcd-glass-card" style="padding:22px; display:flex; flex-direction:column; gap:12px;">${label}${p.html || ''}</div>`;
    };
    return `<div class="vcd-grid-2" style="margin-top:0; align-items:${align};">${panel(left)}${panel(right)}</div>`;
}
