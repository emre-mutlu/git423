/**
 * ==========================================================================
 * DECK MANIFEST — git423 (Web Tasarımı)
 * ==========================================================================
 *
 * Per-site list of decks. The shared engine (scripts/main.js) reads this to
 * build the week dropdown and pick the default — so the engine stays
 * byte-identical across git407 / git423 and only THIS file differs per site.
 *
 * Add a deck:  drop weeks/weekN.js  +  add one line below.
 *   key      = module name in weeks/ (weekN.js exports `const weekN`)
 *   label    = dropdown text
 *   default  = optional; the deck shown on first load (exactly one)
 *
 * ⚠ Adlandırma (adım 6 KARAR, 2026-06-14): öğrenci-yüzü = `label` (doğru kaynak:
 *   "2./3./4. Hafta"). Dosya-anahtarı `weekN` = iç-kimlik, KASITLI SABİT tutulur
 *   (week1.js = 2. Hafta). Re-key EDİLMEZ: localStorage slayt-konumunu + (gelecek)
 *   deep-link URL'lerini kırardı, öğrenciye faydası yok. Yeni deck = dosya + 1 satır.
 */

export const manifest = [
    { key: 'week1', label: '2. Hafta: Web Tasarımına Giriş', default: true },
    { key: 'week2', label: '3. Hafta: HTML Temelleri' },
    { key: 'week3', label: '4. Hafta: HTML Yapı ve Semantic' },
];
