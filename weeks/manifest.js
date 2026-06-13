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
 * ⚠ Adlandırma kayması (bilinçli, geçici): burada weekN.js === (N+1). hafta
 *   (week1 = 2. Hafta). Hizalama, portal↔Pages yüzey-geçişi adımında çözülecek
 *   (bkz. git407 DESTE_KILAVUZU.md → "Adlandırma"). Şimdilik mevcut dosya
 *   anahtarları + etiketler birebir korunur ki canlı davranış değişmesin.
 */

export const manifest = [
    { key: 'week1', label: '2. Hafta: Web Tasarımına Giriş', default: true },
    { key: 'week2', label: '3. Hafta: HTML Temelleri' },
];
