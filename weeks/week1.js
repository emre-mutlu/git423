/**
 * ==========================================================================
 * WEEK 1 MODULE: Giriş ve Temeller (Görsel İletişim Tasarımı Odaklı)
 * ==========================================================================
 */

export const week1 = {
    title: "2. Hafta: Web Tasarımına Giriş",
    slides: [
        // Slide 1: Karşılama (Hero)
        {
            id: "giris",
            title: "Web Tasarımına Giriş",
            subtitle: "Görsel İletişim Tasarımı · 2. Hafta",
            type: "hero",
            html: `
                <!-- Minimalist CSS Abstract Grid Layout Wireframe representing design and code connection -->
                <div class="hero-layout-preview" style="margin-top: 20px; display: flex; justify-content: center; gap: 16px; opacity: 0.95; align-items: center;">
                    <div style="width: 140px; height: 90px; align-self: center; border-radius: var(--card-radius); border: 1px dashed rgba(255,255,255,0.12); background: rgba(255,255,255,0.01); display: flex; flex-direction: column; padding: 12px; gap: 8px;">
                        <div style="width: 40%; height: 8px; border-radius: 4px; background: rgba(212, 255, 0,0.2);"></div>
                        <div style="width: 80%; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.08);"></div>
                        <div style="width: 100%; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.04); margin-top: auto;"></div>
                    </div>
                    <div style="width: 320px; height: 140px; align-self: center; border-radius: var(--card-radius); border: 1px dashed rgba(255,255,255,0.22); background: rgba(255,255,255,0.03); display: flex; flex-direction: column; padding: 18px; gap: 12px; box-shadow: 0 14px 48px rgba(212, 255, 0,0.12);">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="width: 70%; height: 14px; border-radius: 50px; background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"></div>
                            <div style="width: 18px; height: 18px; border-radius: 50%; background: var(--color-accent); opacity: 0.95;"></div>
                        </div>
                        <div style="width: 94%; height: 10px; border-radius: 5px; background: rgba(255,255,255,0.12);"></div>
                        <div style="width: 82%; height: 10px; border-radius: 5px; background: rgba(255,255,255,0.08);"></div>
                        <div style="width: 56%; height: 16px; border-radius: 9px; background: rgba(255,255,255,0.06); margin-top: auto; border: 1px solid rgba(255,255,255,0.08);"></div>
                    </div>
                    <div style="width: 140px; height: 90px; align-self: center; border-radius: var(--card-radius); border: 1px dashed rgba(255,255,255,0.12); background: rgba(255,255,255,0.01); display: flex; flex-direction: column; padding: 12px; gap: 8px;">
                        <div style="width: 30%; height: 8px; border-radius: 4px; background: rgba(139, 92, 246,0.2);"></div>
                        <div style="width: 70%; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.08);"></div>
                        <div style="width: 100%; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.04); margin-top: auto;"></div>
                    </div>
                </div>
            `
        },
        
        // Slide 2: Neden Kod Öğreniyoruz? (Standard)
        {
            id: "neden-kod-ogreniyoruz",
            category: "Giriş",
            title: "Tasarımcı Neden Kod Öğrenir?",
            className: "slide-center-composite",
            html: `
                <div class="slide-content-wrapper">
                    <p class="vcd-content-intro" style="margin-bottom: 20px; max-width: none;">Dijital bir tasarımın etkisi, statik bir görsel olmaktan çıkıp kullanıcıyla etkileşime girdiği anda netleşir. Web teknolojilerinin temel mantığını anlamak, tasarımcıya şu yetkinlikleri kazandırır:</p>
                    
                    <ul class="vcd-bullet-list" style="margin-bottom: 32px; gap: 14px;">
                        <li style="padding-left: 24px; line-height: 1.5;"><strong style="color: var(--color-primary);">Pikselden Deneyime Geçiş:</strong> Tasarımların farklı ekranlarda esnek (responsive) çalışması için gereken teknik altyapıyı kurabilmek.</li>
                        <li style="padding-left: 24px; line-height: 1.5;"><strong style="color: var(--color-secondary);">Ortak Dil ve İletişim:</strong> Yazılımcılarla aynı terminolojiyi konuşarak, tasarımın koda dökülürken görsel bütünlüğünü korumak.</li>
                        <li style="padding-left: 24px; line-height: 1.5;"><strong style="color: var(--color-success);">Kreatif Özgürlük:</strong> Kodun sınırlarını bilerek hazır şablonların ötesinde, özgün arayüz mimarileri kurgulayabilmek.</li>
                        <li style="padding-left: 24px; line-height: 1.5;"><strong style="color: var(--color-warning);">AI ve Araç Yönetimi:</strong> ChatGPT, v0 gibi araçların çıktılarını denetleyip, teknik hataları manuel olarak optimize edebilmek.</li>
                        <li style="padding-left: 24px; line-height: 1.5;"><strong style="color: var(--color-secondary);">Çok Boyutlu Profesyonellik:</strong> Sadece statik arayüz üreten değil, dijital ürünün tüm deneyim süreçlerini okuyabilen çok yönlü bir tasarımcı olmak.</li>
                    </ul>

                    <div style="background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--card-radius, 16px); padding: 24px; text-align: center; max-width: 650px; margin: 20px auto 0; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);">
                        <h4 style="color: var(--color-primary); font-weight: 600; margin-bottom: 8px; font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">Dönem Sonu Hedefi</h4>
                        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--color-text-secondary); margin: 0;">
                            Temel web teknolojilerini kullanarak, kendi tasarladığınız ve yayına alınmış işlevsel bir kişisel portfolyo sitesini hayata geçirmek.
                        </p>
                    </div>
                </div>
            `
        },

        // Slide 3: Tasarım vs. Kod (Interactive)
        {
            id: "sabit-vs-esnek-mizanpaj",
            category: "Tasarım vs. Kod",
            title: "Tasarım vs. Kod",
            className: "slide-fill",
            html: `
                <div style="display: flex; flex-direction: column; height: 100%; gap: 20px;">
                    <!-- Üst: Açıklama metni -->
                    <div style="display: flex; gap: 20px; align-items: flex-start; flex-shrink: 0;">
                        <div style="flex: 1;">
                            <p class="vcd-content-intro" style="margin-bottom: 8px;">Tasarım araçlarında katmanlar sabit piksellerle konumlandırılır. Web'de ise elementlere <strong style="color: var(--color-text-primary);">esnek kurallar</strong> tanımlanır; arayüz ekran boyutuna göre kendi kendini şekillendirir.</p>
                            <ul class="vcd-bullet-list" style="gap: 6px; margin: 0;">
                                <li style="padding-left: 22px; line-height: 1.5;"><strong>Tasarım Alanı:</strong> Statik sınırlar ve kesin pikseller — Figma'daki kart daima 260×140 px'dir.</li>
                                <li style="padding-left: 22px; line-height: 1.5;"><strong>Web Alanı:</strong> Akışkan kurallar ve dinamik ekranlar — tarayıcıda kart, mevcut genişliğe göre yeniden şekillenir.</li>
                            </ul>
                        </div>
                        <div class="vcd-analogy-box" style="flex: 0 0 300px; margin-top: 0;">
                            <h4 style="font-size: 0.8rem;">Tasarımcı Rolü</h4>
                            <p style="font-size: 0.8rem;">Artık sabit bir resim değil, farklı ekranlarda nasıl davranacağını bilen <strong>canlı bir sistem</strong> kurguluyorsunuz.</p>
                        </div>
                    </div>
                    <!-- Alt: Etkileşimli widget (kalan alanı doldurur) -->
                    <div class="vcd-glass-card" style="flex: 1; padding: 14px; display: flex; flex-direction: column; min-height: 0;">
                        <div class="sim-control-panel" style="margin-bottom: 10px; flex-shrink: 0;">
                            <div class="sim-slider-wrapper">
                                <span class="sim-slider-label" style="font-size: 0.82rem; min-width: 120px;">Tarayıcı Genişliği: <strong class="viewport-w-val">400px</strong></span>
                                <input type="range" class="sim-slider" min="200" max="440" value="440" aria-label="Görünüm penceresi genişlik sürgüsü">
                            </div>
                        </div>
                        <div class="canvas-comparison-grid" style="flex: 1; gap: 14px; min-height: 0;">
                            <!-- Figma Mockup (Static) -->
                            <div class="canvas-mockup figma-theme" style="height: 100%;">
                                <div class="figma-top-bar" style="height: 26px; font-size: 0.62rem; flex-shrink: 0;">
                                    <div class="figma-tools">
                                        <span class="figma-tool active">⬈</span>
                                        <span class="figma-tool">▢</span>
                                        <span class="figma-tool">T</span>
                                    </div>
                                    <div class="figma-file-name" style="font-size: 0.62rem;">Figma (Sabit Tasarım)</div>
                                </div>
                                <div class="figma-workspace" style="display: grid; grid-template-columns: 70px 1fr; height: calc(100% - 26px); background: #1e1e1e;">
                                    <div class="figma-sidebar-left" style="background: #2c2c2c; padding: 6px; font-size: 0.58rem; color: #aaa;">
                                        <div class="layer-item selected">▢ Card Layout</div>
                                    </div>
                                    <div class="mockup-body figma-canvas" style="padding: 8px; display: flex; justify-content: center; align-items: center; overflow: hidden;">
                                        <div class="sim-viewport figma-viewport" style="width: 100%; height: 120px; background: #2c2c2c; border: 1px solid #444; border-radius: 4px; overflow: hidden; position: relative;">
                                            <div class="figma-card" style="padding: 8px; border-radius: 5px; background: #1e1e1e; border: 1px solid #333; width: 230px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                                <div style="font-size: 0.68rem; font-weight: 700; color: #fff;">Sabit Piksel (X: 50, Y: 20)</div>
                                                <div style="font-size: 0.6rem; line-height: 1.3; color: #aaa; margin-top: 3px;">Tasarım ekranındaki mutlak konumlar ve boyutlar hiç değişmez.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Browser Mockup (Fluid) -->
                            <div class="canvas-mockup browser-theme" style="height: 100%;">
                                <div class="browser-top-bar" style="padding: 4px 10px; flex-shrink: 0;">
                                    <div class="browser-address-bar" style="font-size: 0.62rem; padding: 2px 8px;">
                                        🔒 localhost/index.html
                                    </div>
                                </div>
                                <div class="mockup-body browser-canvas" style="padding: 10px; display: flex; justify-content: center; align-items: center; flex: 1; overflow: hidden;">
                                    <div class="sim-viewport browser-viewport" style="max-width: 440px; height: 120px; background: #111; border: 1px solid #333; border-radius: 4px; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 0 10px; transition: width 0.1s ease;">
                                        <div class="browser-card" style="padding: 10px; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); width: 100%;">
                                            <div style="font-size: 0.68rem; font-weight: 700; color: var(--color-secondary);">Akışkan Yapı (CSS)</div>
                                            <div style="font-size: 0.6rem; line-height: 1.3; color: var(--color-text-secondary); margin-top: 3px;">Genişlik değiştikçe içerik otomatik alt satıra geçer ve kendi kendini yeniden şekillendirir.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const slider = slideEl.querySelector('.sim-slider');
                const valLabel = slideEl.querySelector('.viewport-w-val');
                const browserViewport = slideEl.querySelector('.browser-viewport');

                const updateWidths = () => {
                    const val = slider.value;
                    valLabel.textContent = `${val}px`;
                    browserViewport.style.width = `${val}px`;
                };

                slider.addEventListener('input', updateWidths);
                updateWidths();
            }
        },

        // Slide 4: İnternet vs. Web (Reveal)
        {
            id: "internet-vs-web",
            category: "Bölüm 1: Tarihçe",
            title: "İnternet vs. Web: İki Farklı Dünya",
            type: "reveal",
            question: "İnternet ile Web arasındaki fark nedir?",
            html: `
                <p class="vcd-content-intro">
                    Dijital bir arayüz tasarlarken üzerinde çalışacağımız sahneyi doğru tanımlamak gerekir. Bu ekosistem, birbirini tamamlayan iki farklı katmandan oluşur: Biri fiziksel altyapı, diğeri bu altyapı üzerinde çalışan içerik servisidir.
                </p>
                <div class="vcd-grid-2">
                    <!-- İnternet Kartı: Metin üstte, görsel altta -->
                    <div class="vcd-glass-card primary" style="display: flex; flex-direction: column; gap: 12px;">
                        <div>
                            <strong style="color: var(--color-primary); font-size: 1.0rem; display: block; margin-bottom: 6px;">İnternet (Fiziksel Altyapı)</strong>
                            <p style="font-size: 0.83rem; color: var(--color-text-secondary); line-height: 1.55;">
                                Bilgisayarları, sunucuları ve uyduları birbirine bağlayan devasa küresel donanım ağıdır. Fiber optik denizaltı kablolarından baz istasyonlarına kadar, tüm dijital iletişimin üzerinde çalıştığı fiziksel katmanı temsil eder.
                            </p>
                        </div>
                        <!-- Internet Graphic - altta -->
                        <div style="display: flex; justify-content: center; align-items: center; gap: 14px; padding: 10px 0;">
                            <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(212, 255, 0,0.15); border: 1.5px solid var(--color-primary); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">💻</div>
                            <div style="flex: 1; max-width: 40px; border-top: 2px dashed var(--color-primary); opacity: 0.6;"></div>
                            <div style="width: 52px; height: 52px; border-radius: 50%; background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; position: relative;">
                                🌐
                                <div style="position: absolute; width: 9px; height: 9px; border-radius: 50%; background: #22c55e; top: 1px; right: 1px; box-shadow: 0 0 5px #22c55e;"></div>
                            </div>
                            <div style="flex: 1; max-width: 40px; border-top: 2px dashed var(--color-secondary); opacity: 0.6;"></div>
                            <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(2, 184, 204,0.12); border: 1.5px solid var(--color-secondary); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">📡</div>
                        </div>
                    </div>
                    <!-- Web Kartı: Metin üstte, görsel altta -->
                    <div class="vcd-glass-card secondary" style="display: flex; flex-direction: column; gap: 12px;">
                        <div>
                            <strong style="color: var(--color-secondary); font-size: 1.0rem; display: block; margin-bottom: 6px;">Web (Yazılım & Arayüz Katmanı)</strong>
                            <p style="font-size: 0.83rem; color: var(--color-text-secondary); line-height: 1.55;">
                                İnternet altyapısını kullanarak HTML, CSS ve JavaScript tabanlı belgelerin görüntülenmesini sağlayan bilgi servisidir. Kullanıcının tarayıcı aracılığıyla doğrudan etkileşime girdiği içerik ve arayüz katmanıdır.
                            </p>
                        </div>
                        <!-- Web Graphic (browser mockup) - altta -->
                        <div style="height: 80px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); display: flex; flex-direction: column; overflow: hidden;">
                            <div style="height: 16px; background: rgba(255,255,255,0.07); border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 5px; padding-left: 8px; flex-shrink: 0;">
                                <div style="width: 5px; height: 5px; border-radius: 50%; background: #ef4444;"></div>
                                <div style="width: 5px; height: 5px; border-radius: 50%; background: #eab308;"></div>
                                <div style="width: 5px; height: 5px; border-radius: 50%; background: #22c55e;"></div>
                                <div style="flex: 1; height: 7px; margin-left: 6px; border-radius: 4px; background: rgba(255,255,255,0.06);"></div>
                            </div>
                            <div style="flex: 1; padding: 6px 8px; display: flex; flex-direction: column; gap: 5px;">
                                <div style="width: 40%; height: 6px; border-radius: 3px; background: var(--color-secondary); opacity: 0.7;"></div>
                                <div style="display: flex; gap: 5px; flex: 1;">
                                    <div style="flex: 2; border-radius: 3px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 3px; padding: 4px;">
                                        <div style="width: 90%; height: 3px; border-radius: 2px; background: rgba(255,255,255,0.15);"></div>
                                        <div style="width: 65%; height: 3px; border-radius: 2px; background: rgba(255,255,255,0.1);"></div>
                                    </div>
                                    <div style="flex: 1; border-radius: 3px; background: rgba(2, 184, 204,0.18); border: 1px solid rgba(2, 184, 204,0.3);"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top: 16px;">
                    <h4>Özetle</h4>
                    <p>İnternet olmasaydı Web var olamazdı; Web olmasaydı İnternet, yalnızca siyah terminallerde veri paketleri paylaşılan donanımsal bir altyapı olarak kalırdı.</p>
                </div>
            `
        },

        // Slide 5: İnternet Altyapısı ve Protokolleri (Standard)
        {
            id: "internet-altyapisi",
            category: "Bölüm 1: Tarihçe",
            title: "İnternet Altyapısı ve Protokolleri",
            html: `
                <div style="display: flex; flex-direction: column; gap: 16px; height: 100%;">
                    <!-- Üst alan: Sol açıklama + Sağ harita -->
                    <div style="display: flex; gap: 20px; align-items: stretch;">
                        <!-- Sol: 1969 badge + açıklama -->
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 12px; justify-content: center;">
                            <div style="display: flex; align-items: center; gap: 14px;">
                                <div style="flex-shrink: 0; text-align: center;">
                                    <div class="vcd-stats-number" style="font-size: 2.4rem; line-height: 1;">1969</div>
                                    <div class="vcd-stats-label" style="font-size: 0.7rem; margin-top: 2px;">ARPANET</div>
                                </div>
                                <div style="width: 1px; align-self: stretch; background: rgba(255,255,255,0.1);"></div>
                                <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                                    Soğuk Savaş döneminde, olası bir nükleer saldırıda iletişim ağının tamamen çökmesini engellemek amacıyla ABD Savunma Bakanlığı tarafından kurulan dünyanın ilk <strong style="color: var(--color-text);">merkeziyetsiz bilgisayar ağıdır.</strong>
                                </p>
                            </div>
                            <p class="vcd-content-intro" style="margin: 0; font-size: 0.9rem;">İnternetin kökenini oluşturan bu kesintisiz haberleşme altyapısı, gücünü üç temel prensipten alır:</p>
                        </div>
                        <!-- Sağ: ARPANET Haritası -->
                        <div style="flex: 0 0 300px; display: flex; flex-direction: column; align-items: center; gap: 6px;">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map%2C_march_1977.png"
                                alt="ARPANET Logical Map, March 1977"
                                data-lightbox="true"
                                data-lightbox-src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map%2C_march_1977.png"
                                data-lightbox-caption="ARPANET Mantıksal Haritası — Mart 1977 (Public Domain)"
                                style="width: 100%; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); object-fit: cover; max-height: 160px; filter: saturate(0.7) brightness(0.9); display: block;"
                            />
                            <span style="font-size: 0.68rem; color: var(--color-text-secondary); opacity: 0.6; text-align: center;">ARPANET Mantıksal Haritası — Mart 1977 (Public Domain)</span>
                        </div>
                    </div>
                    <!-- Alt alan: 3 prensip yan yana -->
                    <div style="display: flex; gap: 12px; flex: 1;">
                        <div class="vcd-glass-card primary" style="flex: 1; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                                <span style="width: 24px; height: 24px; border-radius: 50%; background: var(--color-primary); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; color: #fff;">1</span>
                                <strong style="font-size: 0.85rem; color: var(--color-primary);">Paket Anahtarlama</strong>
                            </div>
                            <p style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.55; margin: 0;">Bir WhatsApp mesajı gönderildiğinde veri tek parça halinde gitmez; küçük paketlere bölünür, her paket farklı bir rotadan ilerler ve karşı tarafta yeniden bir araya gelir. Bir hat kopsa bile diğerleri çalışmaya devam eder.</p>
                        </div>
                        <div class="vcd-glass-card secondary" style="flex: 1; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                                <span style="width: 24px; height: 24px; border-radius: 50%; background: var(--color-secondary); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; color: #fff;">2</span>
                                <strong style="font-size: 0.85rem; color: var(--color-secondary);">TCP/IP Protokolü (1983)</strong>
                            </div>
                            <p style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.55; margin: 0;">iPhone, Android ve Windows'un birbirine mesaj atabilmesi için ortak bir "dil" gerekir. TCP/IP bu ortak kurallar setidir: hangi paketin hangi sırayla geleceğini ve eksik paketin nasıl yeniden isteneceğini belirler.</p>
                        </div>
                        <div class="vcd-glass-card" style="flex: 1; padding: 14px 16px; display: flex; flex-direction: column; gap: 6px; border-color: rgba(212, 255, 0,0.2);">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                                <span style="width: 24px; height: 24px; border-radius: 50%; background: var(--color-primary); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; color: #fff;">3</span>
                                <strong style="font-size: 0.85rem; color: var(--color-primary);">DNS (1984)</strong>
                            </div>
                            <p style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.55; margin: 0;">Her sitenin internette bir IP numarası var: google.com'un adresi 142.250.185.78. DNS bu numaraları hatırlanabilir isimlere çevirir — tıpkı telefonun rehberi gibi: "Ayşe" yaz, otomatik numarayı bul.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // İstemci – DNS – Sunucu İletişimi
        {
            id: "mektup-simulasyon",
            category: "Bölüm 1: Tarihçe",
            title: "İstemci – DNS – Sunucu İletişimi",
            html: `
                <div class="vcd-grid-1-2">
                    <div>
                        <p style="font-size: 0.85rem; line-height: 1.55; margin-bottom: 14px; color: var(--color-text-secondary);">
                            Tarayıcıya bir adres yazıldığında arka planda 4 adımlık bir istek–yanıt döngüsü gerçekleşir. Her adımda butona basarak ilerleyin.
                        </p>
                        <button class="sim-btn run-packet-sim" style="font-size: 0.8rem; padding: 6px 12px; width: 100%; margin-bottom: 12px;">① Adım: DNS Sorgusu</button>
                        <div class="terminal-log-console" style="height: 155px;">
                            <div class="terminal-header" style="padding: 4px 8px;">
                                <span class="terminal-title" style="font-size: 0.65rem;">Network Log</span>
                            </div>
                            <div class="terminal-body" id="packet-sim-terminal" style="font-size: 0.65rem; padding: 8px;">
                                <div class="terminal-line init">&gt; Hazır. Simülasyonu adım adım başlatmak için butona tıklayın...</div>
                            </div>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding: 18px; display: flex; flex-direction: column; gap: 10px; justify-content: center;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center; margin-bottom: 6px;">
                            <div>
                                <div style="font-size: 1.6rem;">💻</div>
                                <div style="font-size: 0.68rem; font-weight: 600; color: var(--color-primary);">İstemci</div>
                                <div style="font-size: 0.6rem; color: var(--color-text-muted);">(Client)</div>
                            </div>
                            <div>
                                <div style="font-size: 1.6rem;">🔍</div>
                                <div style="font-size: 0.68rem; font-weight: 600; color: var(--color-secondary);">DNS</div>
                                <div style="font-size: 0.6rem; color: var(--color-text-muted);">(Domain Name System)</div>
                            </div>
                            <div>
                                <div style="font-size: 1.6rem;">☁️</div>
                                <div style="font-size: 0.68rem; font-weight: 600; color: var(--color-primary);">Sunucu</div>
                                <div style="font-size: 0.6rem; color: var(--color-text-muted);">(Server)</div>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <div class="sim-step-row" id="sim-step-1" style="font-size:0.73rem;padding:7px 10px;border-radius:6px;border-left:2px solid transparent;background:rgba(255,255,255,0.03);color:var(--color-text-muted);transition:background 0.35s ease,color 0.35s ease,border-color 0.35s ease;">
                                <span style="color:var(--color-primary);font-weight:700;">①</span> 💻 → 🔍 &nbsp; "instagram.com'un IP adresi nedir?"
                            </div>
                            <div class="sim-step-row" id="sim-step-2" style="font-size:0.73rem;padding:7px 10px;border-radius:6px;border-left:2px solid transparent;background:rgba(255,255,255,0.03);color:var(--color-text-muted);transition:background 0.35s ease,color 0.35s ease,border-color 0.35s ease;">
                                <span style="color:var(--color-secondary);font-weight:700;">②</span> 🔍 → 💻 &nbsp; "157.240.231.174"
                            </div>
                            <div class="sim-step-row" id="sim-step-3" style="font-size:0.73rem;padding:7px 10px;border-radius:6px;border-left:2px solid transparent;background:rgba(255,255,255,0.03);color:var(--color-text-muted);transition:background 0.35s ease,color 0.35s ease,border-color 0.35s ease;">
                                <span style="color:var(--color-primary);font-weight:700;">③</span> 💻 → ☁️ &nbsp; GET / HTTP/1.1
                            </div>
                            <div class="sim-step-row" id="sim-step-4" style="font-size:0.73rem;padding:7px 10px;border-radius:6px;border-left:2px solid transparent;background:rgba(255,255,255,0.03);color:var(--color-text-muted);transition:background 0.35s ease,color 0.35s ease,border-color 0.35s ease;">
                                <span style="color:var(--color-primary);font-weight:700;">④</span> ☁️ → 💻 &nbsp; 200 OK — HTML + CSS + JS
                            </div>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const btn = slideEl.querySelector('.run-packet-sim');
                const terminal = slideEl.querySelector('#packet-sim-terminal');
                const steps = [1,2,3,4].map(n => slideEl.querySelector(`#sim-step-${n}`));

                const stepLabels = [
                    '① Adım: DNS Sorgusu',
                    '② Adım: DNS Yanıtı',
                    '③ Adım: HTTP İsteği',
                    '④ Adım: Sunucu Yanıtı',
                    'Yeniden Başlat'
                ];

                const stepMessages = [
                    { text: 'İstemci (Client) → DNS: "instagram.com\'un IP adresi nedir?"', type: 'info' },
                    { text: 'DNS → İstemci: "IP: 157.240.231.174"', type: 'success' },
                    { text: 'İstemci → Sunucu (Server): GET / HTTP/1.1', type: 'info' },
                    { text: 'Sunucu → İstemci: 200 OK — HTML, CSS ve JS dosyaları geldi. Sayfa çiziliyor.', type: 'success' },
                ];

                let currentStep = 0;

                const setStepStyle = (index, state) => {
                    const s = steps[index];
                    if (state === 'active') {
                        s.style.background = 'rgba(212, 255, 0,0.12)';
                        s.style.color = 'var(--color-text-primary)';
                        s.style.borderLeftColor = 'var(--color-primary)';
                    } else if (state === 'done') {
                        s.style.background = 'rgba(39, 166, 68,0.06)';
                        s.style.color = 'rgba(255,255,255,0.4)';
                        s.style.borderLeftColor = 'rgba(39, 166, 68,0.4)';
                    } else {
                        s.style.background = 'rgba(255,255,255,0.03)';
                        s.style.color = 'var(--color-text-muted)';
                        s.style.borderLeftColor = 'transparent';
                    }
                };

                const logMessage = (text, type = 'info') => {
                    const line = document.createElement('div');
                    line.className = `terminal-line ${type}`;
                    line.innerHTML = `&gt; ${text}`;
                    terminal.appendChild(line);
                    terminal.scrollTop = terminal.scrollHeight;
                };

                const reset = () => {
                    currentStep = 0;
                    terminal.innerHTML = '<div class="terminal-line init">&gt; Hazır. Simülasyonu adım adım başlatmak için butona tıklayın...</div>';
                    steps.forEach((_, i) => setStepStyle(i, 'idle'));
                    btn.textContent = stepLabels[0];
                };

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (currentStep >= stepMessages.length) {
                        reset();
                        return;
                    }
                    const { text, type } = stepMessages[currentStep];
                    logMessage(text, type);
                    setStepStyle(currentStep, 'active');
                    if (currentStep > 0) setStepStyle(currentStep - 1, 'done');
                    currentStep++;
                    btn.textContent = stepLabels[currentStep];
                });
            }
        },

        // Web'in İcadı — Problem ve Çözüm
        {
            id: "web-icadi",
            category: "Bölüm 1: Tarihçe",
            title: "Web'in İcadı: Bir Problem ve Çözümü",
            html: `
                <div style="display: flex; gap: 22px; height: 100%; align-items: stretch;">
                    <!-- Sol: metin -->
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 14px; justify-content: center;">
                        <p class="vcd-content-intro" style="margin: 0;">
                            İngiliz yazılım mühendisi <strong style="color: var(--color-text);">Tim Berners-Lee</strong>, CERN laboratuvarlarında çalışırken büyük bir problem fark etti: Dünyanın dört bir yanından gelen bilim insanlarının verileri farklı bilgisayarlarda dağınıktı ve bilgi sürekli kayboluyordu.
                        </p>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0;">
                            Bu koordinasyon sorununu çözmek için <strong style="color: var(--color-primary);">1989 yılında World Wide Web (WWW) sistemini önerdi.</strong>
                        </p>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <div class="vcd-glass-card primary" style="padding: 12px 16px; display: flex; align-items: flex-start; gap: 12px;">
                                <span style="font-size: 1.2rem; flex-shrink: 0; margin-top: 1px;">🔗</span>
                                <div>
                                    <strong style="color: var(--color-primary); font-size: 0.88rem; display: block; margin-bottom: 3px;">Köprü Metni (Hypertext)</strong>
                                    <p style="font-size: 0.8rem; color: var(--color-text-secondary); margin: 0; line-height: 1.5;">Metin içindeki kelimelere tıklayarak belgeler arasında pürüzsüzce geçiş yapmayı sağlayan o meşhur mantığı kurdu.</p>
                                </div>
                            </div>
                            <div class="vcd-glass-card secondary" style="padding: 12px 16px; display: flex; align-items: flex-start; gap: 12px;">
                                <span style="font-size: 1.2rem; flex-shrink: 0; margin-top: 1px;">🌍</span>
                                <div>
                                    <strong style="color: var(--color-secondary); font-size: 0.88rem; display: block; margin-bottom: 3px;">Kamu Yararı (1993)</strong>
                                    <p style="font-size: 0.8rem; color: var(--color-text-secondary); margin: 0; line-height: 1.5;">CERN bu yazılımı ücretsiz ve herkesin kullanımına açtı. İlk web sitesi (info.cern.ch) sadece düz metinlerden ve altı çizili mavi linklerden oluşuyordu.</p>
                                </div>
                            </div>
                        </div>
                        <p style="font-size: 0.82rem; margin-top: 6px;">
                            Dünyanın ilk web sitesi hâlâ aktif: <a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank" style="color: var(--color-primary);">info.cern.ch ↗</a>
                        </p>
                    </div>
                    <!-- Sağ: Tim Berners-Lee görseli -->
                    <div style="flex: 0 0 200px; display: flex; flex-direction: column; align-items: center; gap: 10px; justify-content: center;">
                        <div data-lightbox="true"
                            data-lightbox-src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Sir_Tim_Berners-Lee.jpg"
                            data-lightbox-caption="Sir Tim Berners-Lee — World Wide Web'in Mucidi (Fotoğraf: Paul Clarke, CC BY-SA 4.0)"
                            style="cursor: zoom-in; border-radius: var(--card-radius); overflow: hidden; border: 1px solid rgba(255,255,255,0.12); width: 180px; box-shadow: 0 8px 24px rgba(0,0,0,0.3);">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Sir_Tim_Berners-Lee.jpg"
                                alt="Tim Berners-Lee"
                                style="width: 100%; height: 190px; object-fit: cover; object-position: center top; display: block; filter: saturate(0.8) brightness(0.92);"
                            />
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 0.82rem; font-weight: 600; color: var(--color-text-primary);">Sir Tim Berners-Lee</div>
                            <div style="font-size: 0.7rem; color: var(--color-text-secondary); margin-top: 2px;">WWW Mucidi, 1989</div>
                        </div>
                        <div style="text-align: center; padding: 8px 14px; background: rgba(212, 255, 0,0.06); border: 1px solid rgba(212, 255, 0,0.2); border-radius: 10px; width: 100%;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary); line-height: 1;">1989</div>
                            <div style="font-size: 0.68rem; color: var(--color-text-secondary); margin-top: 2px;">WWW'nin önerildiği yıl</div>
                        </div>
                        <span style="font-size: 0.6rem; color: rgba(255,255,255,0.3); text-align: center; line-height: 1.4;">Fotoğraf: Paul Clarke / CC BY-SA 4.0</span>
                    </div>
                </div>
            `
        },

        // Slide 6b: Web 1.0 Dönemi ve Tasarım Kısıtlamaları
        {
            id: "web-10-kisitlamalar",
            category: "Bölüm 1: Tarihçe",
            title: "Web 1.0: Tasarım Kısıtlamaları Dönemi",
            html: `
                <div style="display: flex; flex-direction: column; gap: 14px; height: 100%;">
                    <p class="vcd-content-intro" style="margin: 0;">
                        <span class="vcd-highlight-text">"Salt Okunur" (Read-Only)</span> olarak adlandırılan bu ilk dönemde internet, tasarımcılar için kelimenin tam anlamıyla bir <strong style="color: var(--color-text);">kısıtlamalar dünyasıydı:</strong>
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto auto; gap: 10px; flex: 1;">
                        <!-- Pasif Tüketim -->
                        <div class="vcd-glass-card" style="padding: 12px; display: flex; flex-direction: column; gap: 6px;">
                            <div style="font-size: 1.3rem;">👁️</div>
                            <strong style="font-size: 0.82rem; color: var(--color-primary);">Pasif Tüketim</strong>
                            <p style="font-size: 0.76rem; color: var(--color-text-secondary); line-height: 1.45; margin: 0;">Kullanıcılar içerik üretemez, sadece sunulan statik bilgiyi okurdu.</p>
                        </div>
                        <!-- Tablo Mizanpajı -->
                        <div class="vcd-glass-card" style="padding: 12px; display: flex; flex-direction: column; gap: 6px;">
                            <div style="font-size: 1.3rem;">📐</div>
                            <strong style="font-size: 0.82rem; color: var(--color-secondary);">Tablo Mizanpajı</strong>
                            <p style="font-size: 0.76rem; color: var(--color-text-secondary); line-height: 1.45; margin: 0;">CSS henüz yoktu; elemanları hizalamanın tek yolu HTML <code>&lt;table&gt;</code> etiketleriydi.</p>
                        </div>
                        <!-- Tipografik Sınır -->
                        <div class="vcd-glass-card" style="padding: 12px; display: flex; flex-direction: column; gap: 6px;">
                            <div style="font-size: 1.3rem;">🔤</div>
                            <strong style="font-size: 0.82rem; color: var(--color-primary);">Tipografik Sınır</strong>
                            <p style="font-size: 0.76rem; color: var(--color-text-secondary); line-height: 1.45; margin: 0;">Yalnızca sistemde kurulu fontlar: <em>Arial, Times New Roman, Courier.</em> Georgia ve Verdana 1990'larda web için özel tasarlandı.</p>
                        </div>
                        <!-- 216 Renk -->
                        <div class="vcd-glass-card" style="padding: 12px; display: flex; flex-direction: column; gap: 6px;">
                            <div style="font-size: 1.3rem;">🎨</div>
                            <strong style="font-size: 0.82rem; color: var(--color-warning);">216 Renk Sınırı</strong>
                            <p style="font-size: 0.76rem; color: var(--color-text-secondary); line-height: 1.45; margin: 0;">Renk bozulmalarını önlemek için yalnızca 216 "Web Safe Color" güvenle kullanılabiliyordu.</p>
                        </div>
                        <!-- img etiketi -->
                        <div class="vcd-glass-card" style="padding: 12px; display: flex; flex-direction: column; gap: 6px; grid-column: span 2;">
                            <div style="font-size: 1.3rem;">🖼️</div>
                            <strong style="font-size: 0.82rem; color: var(--color-success);">İlk Görsel (1993): <code style="font-size: 0.75rem;">&lt;img&gt;</code> Etiketi</strong>
                            <p style="font-size: 0.76rem; color: var(--color-text-secondary); line-height: 1.45; margin: 0;"><code>&lt;img&gt;</code> etiketi Şubat 1993'te Marc Andreessen tarafından NCSA Mosaic tarayıcısı için önerildi — Web tarihinin en tartışmalı ama en etkili kararlarından biri.</p>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 7: Wayback Machine Klasikleri (Interactive)
        {
            id: "wayback-classics",
            category: "Bölüm 1: Tarihçe",
            title: "Wayback Machine Klasikleri",
            html: `
                <div class="vcd-grid-1-2">
                    <div>
                        <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 12px;">
                            Tasarım anlayışı on yıllar içinde köklü biçimde değişti. Sağdaki butona tıklayarak <strong>1990'ların tablolara dayalı kurumsal sitesi</strong> ile günümüzün minimalist yaklaşımını karşılaştırın.
                        </p>
                        <div class="vcd-glass-card" style="padding: 14px; margin-bottom: 12px;">
                            <h4 style="font-size: 0.82rem; margin-bottom: 8px; color: var(--color-secondary);">Gerçek Arşiv Bağlantıları:</h4>
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 7px; font-size: 0.78rem;">
                                <li>→ <a href="https://web.archive.org/web/19981111183552/http://google.com/" target="_blank" style="color: var(--color-primary);">Google (1998 Stanford Prototipi) ↗</a></li>
                                <li>→ <a href="https://www.spacejam.com/1996/" target="_blank" style="color: var(--color-primary);">Space Jam (1996 Canlı Arşiv) ↗</a></li>
                                <li>→ <a href="https://www.craigslist.org" target="_blank" style="color: var(--color-primary);">Craigslist (Saf HTML Korunan Yapı) ↗</a></li>
                            </ul>
                        </div>
                        <div style="border-left:2px solid var(--color-secondary);border-radius:0 6px 6px 0;padding:8px 12px;background:rgba(2, 184, 204,0.05);font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;">
                            Herhangi bir sitenin eski halini görmek için: <a href="https://web.archive.org" target="_blank" style="color: var(--color-secondary);">web.archive.org ↗</a> — Wayback Machine
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                        <div style="display: flex; gap: 8px; flex-shrink: 0;">
                            <button class="sim-btn wayback-era-btn active" data-era="retro" style="flex:1; font-size: 0.75rem; padding: 5px 10px;">1990'lar</button>
                            <button class="sim-btn wayback-era-btn" data-era="modern" style="flex:1; font-size: 0.75rem; padding: 5px 10px;">Günümüz</button>
                        </div>
                        <div id="wayback-preview-container" style="flex: 1; border-radius: 8px; overflow: hidden; min-height: 220px; position: relative;">
                            <!-- 1996 Retro View -->
                            <div id="era-retro" class="apple-1996" style="position: relative; width: 100%; min-height: 220px; height: 100%; box-sizing: border-box;">
                                <div class="apple-1996-header" style="font-size: 0.72rem;">
                                    <span style="font-weight: bold; font-size: 0.85rem;">NetCorp Inc. — Welcome!</span>
                                    <span><a href="#" style="color: #00f; font-size: 0.7rem;">Home</a> | <a href="#" style="color: #00f; font-size: 0.7rem;">Products</a> | <a href="#" style="color: #00f; font-size: 0.7rem;">Contact</a></span>
                                </div>
                                <hr style="border-color: #999; margin: 6px 0;">
                                <div class="apple-1996-grid">
                                    <div class="apple-1996-row">
                                        <div class="apple-1996-cell" style="padding: 6px; font-size: 0.65rem;">
                                            <strong>What's New</strong>
                                            <p style="font-size: 0.6rem; margin-top: 3px;">New catalog online. Best viewed in Netscape 3.0.</p>
                                        </div>
                                        <div class="apple-1996-cell" style="padding: 6px; font-size: 0.65rem;">
                                            <strong>About NetCorp</strong>
                                            <p style="font-size: 0.6rem; margin-top: 3px;">Leading solutions since 1991. Click here!</p>
                                        </div>
                                    </div>
                                </div>
                                <p style="font-size: 0.58rem; margin-top: 10px; color: #666;">© 1996 NetCorp Inc. Best viewed at 800×600.</p>
                            </div>
                            <!-- Modern View — override absolute positioning from CSS class -->
                            <div id="era-modern" style="display: none; position: absolute; inset: 0; background: radial-gradient(circle at top left, #1e1b4b, #030712); color: #fff; font-family: 'Geist', sans-serif; box-sizing: border-box; padding: 18px; pointer-events: auto; flex-direction: column; justify-content: space-between;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 1rem; font-weight: 600; letter-spacing: -0.03em;">◆ NetCorp</span>
                                    <div style="display: flex; gap: 12px; font-size: 0.72rem; color: rgba(255,255,255,0.6);">
                                        <span>Products</span><span>About</span><span>Contact</span>
                                    </div>
                                </div>
                                <div style="margin-top: 20px;">
                                    <div style="font-size: 1.6rem; font-weight: 700; line-height: 1.15; letter-spacing: -0.02em; background: linear-gradient(135deg, #fff 0%, #c8cad0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">Build the future.</div>
                                    <p style="font-size: 0.75rem; color: rgba(255,255,255,0.55); margin-bottom: 12px; line-height: 1.5;">Simple, powerful, beautifully designed products for the modern web.</p>
                                    <button style="background: #fff; color: #000; border: none; border-radius: 20px; padding: 6px 16px; font-size: 0.72rem; font-weight: 500; cursor: pointer;">Get Started →</button>
                                </div>
                                <div style="display: flex; gap: 8px; margin-top: 16px;">
                                    <div style="flex:1; height: 50px; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);"></div>
                                    <div style="flex:1; height: 50px; border-radius: 8px; background: rgba(212, 255, 0,0.15); border: 1px solid rgba(212, 255, 0,0.3);"></div>
                                    <div style="flex:1; height: 50px; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const buttons = slideEl.querySelectorAll('.wayback-era-btn');
                const retroView = slideEl.querySelector('#era-retro');
                const modernView = slideEl.querySelector('#era-modern');

                buttons.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        buttons.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        const era = btn.dataset.era;
                        if (era === 'retro') {
                            retroView.style.display = 'block';
                            modernView.style.display = 'none';
                        } else {
                            retroView.style.display = 'none';
                            modernView.style.display = 'flex';
                        }
                    });
                });
            }
        },

        // Frontend vs Backend — istemci/sunucu rol ayrımı
        {
            id: "frontend-backend",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "Frontend vs Backend",
            html: `
                <p class="vcd-content-intro">Bir web sitesinin iki tarafı vardır: kullanıcının gördüğü <strong style="color: var(--color-text-primary);">ön yüz (Frontend)</strong> ve perde arkasında çalışan <strong style="color: var(--color-text-primary);">arka yüz (Backend)</strong>. Tasarımcının doğrudan etkilediği alan frontend olsa da, ikisinin nasıl konuştuğunu bilmek deneyimi bütün okumayı sağlar.</p>
                <div class="vcd-grid-2" style="margin-top: 14px;">
                    <div class="vcd-glass-card primary" style="display:flex;flex-direction:column;gap:10px;">
                        <div style="display:flex;align-items:center;gap:10px;">
                            <span style="font-size:1.6rem;">🎨</span>
                            <strong style="color:var(--color-primary);font-size:1rem;">Frontend</strong>
                            <span class="vcd-badge badge-primary" style="margin-left:auto;font-size:0.62rem;">Tarayıcı</span>
                        </div>
                        <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.55;margin:0;">Kullanıcının ekranda gördüğü ve etkileşime girdiği her şey. Tarayıcının içinde çalışır.</p>
                        <ul class="vcd-bullet-list" style="gap:6px;margin:0;">
                            <li style="font-size:0.78rem;">HTML, CSS, JavaScript</li>
                            <li style="font-size:0.78rem;">React, Vue, Svelte gibi framework'ler</li>
                            <li style="font-size:0.78rem;">Tarayıcının render ettiği görsel katman</li>
                        </ul>
                    </div>
                    <div class="vcd-glass-card secondary" style="display:flex;flex-direction:column;gap:10px;">
                        <div style="display:flex;align-items:center;gap:10px;">
                            <span style="font-size:1.6rem;">⚙️</span>
                            <strong style="color:var(--color-secondary);font-size:1rem;">Backend</strong>
                            <span class="vcd-badge badge-secondary" style="margin-left:auto;font-size:0.62rem;">Sunucu</span>
                        </div>
                        <p style="font-size:0.82rem;color:var(--color-text-secondary);line-height:1.55;margin:0;">Sunucuda çalışan, veri saklayan ve iş mantığını yürüten görünmez katman.</p>
                        <ul class="vcd-bullet-list" style="gap:6px;margin:0;">
                            <li style="font-size:0.78rem;">Node.js, Python, PHP, Go</li>
                            <li style="font-size:0.78rem;">Veritabanları (PostgreSQL, MongoDB)</li>
                            <li style="font-size:0.78rem;">API'lar ve kimlik doğrulama</li>
                        </ul>
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:14px;margin-top:14px;padding:12px 16px;background:rgba(212, 255, 0,0.05);border:1px dashed rgba(212, 255, 0,0.25);border-radius:12px;">
                    <span style="font-size:1.2rem;">💻</span>
                    <span style="font-size:0.78rem;color:var(--color-text-secondary);white-space:nowrap;">İstemci · Frontend</span>
                    <span style="flex:1;border-top:1px dashed rgba(255,255,255,0.2);"></span>
                    <span style="font-size:0.68rem;color:var(--color-text-muted);font-family:'JetBrains Mono',monospace;white-space:nowrap;">HTTPS · API</span>
                    <span style="flex:1;border-top:1px dashed rgba(255,255,255,0.2);"></span>
                    <span style="font-size:0.78rem;color:var(--color-text-secondary);white-space:nowrap;">Sunucu · Backend</span>
                    <span style="font-size:1.2rem;">☁️</span>
                </div>
                <div class="vcd-analogy-box" style="margin-top:12px;">
                    <h4>Analoji</h4>
                    <p>Bir restoran düşünün: <strong>frontend</strong> menü, masa düzeni ve servisteki garson; <strong>backend</strong> mutfak, depo ve şef. Müşteri yalnızca öndeki deneyimi görür — ama arkadaki sistem olmadan tabağa hiçbir şey gelmez.</p>
                </div>
            `
        },

        // Slide 9: HTML, CSS ve JavaScript: Üç Katman (Interactive)
        {
            id: "uc-katman",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "HTML, CSS ve JavaScript: Üç Katman",
            html: `
                <div class="vcd-grid-1-2">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom: 10px;">
                            Her web sayfası birbiri üzerine inşa edilmiş üç katmandan oluşur — bir binayı düşünün: <strong style="color:#e34f26;">HTML</strong> betonarme iskelet, <strong style="color:#0284c7;">CSS</strong> boya ve mobilyalar, <strong style="color:#eab308;">JavaScript</strong> asansör ve akıllı sistemlerdir. Katmanları açıp kapatarak her birinin arayüze katkısını gözlemleyin.
                        </p>
                        <div class="vcd-glass-card" style="padding: 14px; display: flex; flex-direction: column; gap: 8px;">
                            <!-- HTML (always on) -->
                            <div style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 10px; background: rgba(227,79,38,0.07); border: 1px solid rgba(227,79,38,0.2);">
                                <div style="width: 36px; height: 20px; border-radius: 10px; background: #e34f26; display: flex; align-items: center; justify-content: flex-end; padding: 0 3px; flex-shrink: 0;">
                                    <div style="width: 14px; height: 14px; border-radius: 50%; background: #fff;"></div>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-size: 0.82rem; font-weight: 600; color: #e34f26;">HTML — İçerik & Yapı</div>
                                    <div style="font-size: 0.7rem; color: var(--color-text-secondary); margin-top: 1px;">Her zaman etkin — yapının temeli.</div>
                                </div>
                            </div>
                            <!-- CSS toggle -->
                            <div id="row-css" style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 10px; background: rgba(2,132,199,0.07); border: 1px solid rgba(2,132,199,0.2); cursor: pointer; user-select: none;">
                                <div class="layer-toggle" id="toggle-css" style="width: 36px; height: 20px; border-radius: 10px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; padding: 0 3px; flex-shrink: 0; transition: background 0.2s;">
                                    <div class="toggle-knob" style="width: 14px; height: 14px; border-radius: 50%; background: rgba(255,255,255,0.5); transition: margin-left 0.2s;"></div>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-size: 0.82rem; font-weight: 600; color: #0284c7;">CSS — Tasarım & Görsel</div>
                                    <div style="font-size: 0.7rem; color: var(--color-text-secondary); margin-top: 1px;">Renk, tipografi ve hizalama.</div>
                                </div>
                            </div>
                            <!-- JS toggle -->
                            <div id="row-js" style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 10px; background: rgba(234,179,8,0.07); border: 1px solid rgba(234,179,8,0.2); cursor: pointer; user-select: none;">
                                <div class="layer-toggle" id="toggle-js" style="width: 36px; height: 20px; border-radius: 10px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; padding: 0 3px; flex-shrink: 0; transition: background 0.2s;">
                                    <div class="toggle-knob" style="width: 14px; height: 14px; border-radius: 50%; background: rgba(255,255,255,0.5); transition: margin-left 0.2s;"></div>
                                </div>
                                <div style="flex: 1;">
                                    <div style="font-size: 0.82rem; font-weight: 600; color: #eab308;">JavaScript — Etkileşim & Mantık</div>
                                    <div style="font-size: 0.7rem; color: var(--color-text-secondary); margin-top: 1px;">Kullanıcı etkileşimleri ve dinamik davranışlar.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Demo Kartı -->
                    <div class="vcd-glass-card" style="padding: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 14px;">
                        <div class="unstyled-html-card" id="demo-target-card" style="width: 260px; padding: 14px;">
                            <h3 style="font-size: 1.05rem; margin-bottom: 4px;">Bir Sanat Sergisi</h3>
                            <p style="font-size: 0.78rem; line-height: 1.4;">Tarih: 22 Mayıs 2026<br>Konum: Sanat Galerisi</p>
                            <div id="demo-feedback" style="display: none; font-size: 0.72rem; margin-top: 6px; padding: 4px 8px; border-radius: 5px; background: rgba(234,179,8,0.15); border: 1px solid rgba(234,179,8,0.3); color: #eab308;"></div>
                            <button id="like-count-btn" style="margin-top: 10px; font-size: 0.78rem; padding: 4px 12px; opacity: 0.4; cursor: default; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); color: inherit; transition: opacity 0.2s;">❤️ Beğen (0)</button>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const toggleCSS  = slideEl.querySelector('#toggle-css');
                const toggleJS   = slideEl.querySelector('#toggle-js');
                const rowCSS     = slideEl.querySelector('#row-css');
                const rowJS      = slideEl.querySelector('#row-js');
                const card       = slideEl.querySelector('#demo-target-card');
                const btn        = slideEl.querySelector('#like-count-btn');
                const feedback   = slideEl.querySelector('#demo-feedback');

                const state = { css: false, js: false };
                let likeCount = 0;

                const applyToggleVisual = (toggleEl, active, color) => {
                    const knob = toggleEl.querySelector('.toggle-knob');
                    toggleEl.style.background = active ? color : 'rgba(255,255,255,0.1)';
                    knob.style.marginLeft = active ? 'auto' : '0';
                    knob.style.background = active ? '#fff' : 'rgba(255,255,255,0.5)';
                };

                const updateLayers = () => {
                    applyToggleVisual(toggleCSS, state.css, '#0284c7');
                    applyToggleVisual(toggleJS,  state.js,  '#eab308');

                    card.className = '';
                    if (state.css) {
                        card.classList.add('styled-css-card');
                        if (state.js) card.classList.add('interactive-js-card');
                    } else {
                        card.classList.add('unstyled-html-card');
                    }

                    btn.style.opacity = state.js ? '1' : '0.4';
                    btn.style.cursor  = state.js ? 'pointer' : 'default';
                    if (!state.js) feedback.style.display = 'none';
                };

                rowCSS.addEventListener('click', (e) => { e.stopPropagation(); state.css = !state.css; updateLayers(); });
                rowJS.addEventListener('click',  (e) => { e.stopPropagation(); state.js  = !state.js;  updateLayers(); });

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (!state.js) return;
                    likeCount++;
                    btn.textContent = `❤️ Beğen (${likeCount})`;
                    feedback.textContent = `Beğeni eklendi! Toplam: ${likeCount}`;
                    feedback.style.display = 'block';
                    btn.style.transform = 'scale(1.08)';
                    setTimeout(() => { btn.style.transform = ''; }, 200);
                });
            }
        },

        // İlk Kod ve DOM Şeması
        {
            id: "hello-world-kod",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "İlk Kod ve DOM Şeması",
            html: `
                <div class="vcd-grid-1-2">
                    <div>
                        <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 14px;">Tarayıcı bir HTML dosyasını okuyunca her etiketi bir nesneye dönüştürür ve aralarındaki ilişkiyi bir ağaç yapısına — <strong>DOM</strong>'a (Document Object Model) — yerleştirir.</p>
                        <ul class="vcd-bullet-list" style="font-size: 0.84rem;">
                            <li><strong>Ebeveyn (Parent) / Çocuk (Child):</strong> İçine yazılan etiket, dıştakinin çocuğudur. <code style="font-size:0.78rem;">&lt;div&gt;</code> içindeki <code style="font-size:0.78rem;">&lt;h1&gt;</code> onun çocuğudur.</li>
                            <li><strong>Kardeş (Sibling):</strong> Aynı ebeveyne ait etiketler kardeştir. <code style="font-size:0.78rem;">&lt;h1&gt;</code> ve <code style="font-size:0.78rem;">&lt;p&gt;</code> burada kardeştir.</li>
                            <li><strong>Kök (Root):</strong> Ağacın tepesi her zaman <code style="font-size:0.78rem;">&lt;html&gt;</code>'dir.</li>
                        </ul>
                        <p style="font-size:0.76rem;color:var(--color-text-muted);margin-top:14px;">Sağdaki kod satırlarının veya ağaç kutularının üzerine gelin.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding: 14px; display: flex; flex-direction: column; gap: 10px;">

                        <!-- Syntax-highlighted code, hoverable -->
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.73rem; line-height: 1.9; flex-shrink: 0; user-select: none;">
                            <div class="hl-line" data-dom="dom-html" style="padding: 1px 6px; border-radius: 4px; transition: background 0.15s; cursor: default;"><span style="color:#60a5fa;">&lt;html&gt;</span></div>
                            <div class="hl-line" data-dom="dom-body" style="padding: 1px 6px; border-radius: 4px; transition: background 0.15s; cursor: default; padding-left: 20px;"><span style="color:#7dd3fc;">&lt;body&gt;</span></div>
                            <div class="hl-line" data-dom="dom-container" style="padding: 1px 6px; border-radius: 4px; transition: background 0.15s; cursor: default; padding-left: 38px;"><span style="color:#818cf8;">&lt;div</span> <span style="color:#f59e0b;">class</span>=<span style="color:#34d399;">"container"</span><span style="color:#818cf8;">&gt;</span></div>
                            <div class="hl-line" data-dom="dom-title" style="padding: 1px 6px; border-radius: 4px; transition: background 0.15s; cursor: default; padding-left: 56px;"><span style="color:#c084fc;">&lt;h1&gt;</span>Hello World<span style="color:#c084fc;">&lt;/h1&gt;</span></div>
                            <div class="hl-line" data-dom="dom-text" style="padding: 1px 6px; border-radius: 4px; transition: background 0.15s; cursor: default; padding-left: 56px;"><span style="color:#c084fc;">&lt;p&gt;</span>Tasarım kodla buluşuyor.<span style="color:#c084fc;">&lt;/p&gt;</span></div>
                            <div style="padding-left: 38px; color: #818cf8;">&lt;/div&gt;</div>
                            <div style="padding-left: 20px; color: #7dd3fc;">&lt;/body&gt;</div>
                            <div style="color: #60a5fa;">&lt;/html&gt;</div>
                        </div>

                        <!-- DOM Tree visual -->
                        <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 10px; display: flex; flex-direction: column; gap: 4px;">
                            <div style="font-size: 0.6rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 4px;">DOM Ağacı</div>

                            <div class="hl-box" id="dom-html" style="border: 1px solid rgba(96,165,250,0.3); border-radius: 7px; padding: 6px 10px; transition: background 0.15s; cursor: default;">
                                <span style="font-family:monospace; font-size:0.68rem; color:#60a5fa; font-weight:600;">html</span>
                                <div style="margin: 5px 0 0 14px; padding-left: 10px; display: flex; flex-direction: column; gap: 4px;">

                                    <div class="hl-box" id="dom-body" style="border: 1px solid rgba(125,211,252,0.25); border-radius: 6px; padding: 5px 9px; transition: background 0.15s; cursor: default;">
                                        <span style="font-family:monospace; font-size:0.67rem; color:#7dd3fc; font-weight:600;">body</span>
                                        <div style="margin: 5px 0 0 14px; padding-left: 10px;">

                                            <div class="hl-box" id="dom-container" style="border: 1px solid rgba(129,140,248,0.3); border-radius: 6px; padding: 5px 9px; transition: background 0.15s; cursor: default;">
                                                <span style="font-family:monospace; font-size:0.67rem; color:#818cf8; font-weight:600;">div.container</span>
                                                <div style="display: flex; gap: 6px; margin: 5px 0 0 14px;">
                                                    <div class="hl-box" id="dom-title" style="flex:1; border: 1px solid rgba(192,132,252,0.3); border-radius: 5px; padding: 4px 8px; transition: background 0.15s; cursor: default;">
                                                        <div style="font-family:monospace; font-size:0.65rem; color:#c084fc; font-weight:600;">h1</div>
                                                        <div style="font-size:0.6rem; color:var(--color-text-muted); margin-top:2px; font-style:italic;">"Hello World"</div>
                                                    </div>
                                                    <div class="hl-box" id="dom-text" style="flex:1; border: 1px solid rgba(192,132,252,0.3); border-radius: 5px; padding: 4px 8px; transition: background 0.15s; cursor: default;">
                                                        <div style="font-family:monospace; font-size:0.65rem; color:#c084fc; font-weight:600;">p</div>
                                                        <div style="font-size:0.6rem; color:var(--color-text-muted); margin-top:2px; font-style:italic;">"Tasarım..."</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const codeLines = slideEl.querySelectorAll('.hl-line[data-dom]');
                const domBoxes = slideEl.querySelectorAll('.hl-box[id]');

                const BG_ACTIVE = 'rgba(212, 255, 0,0.15)';

                const clearAll = () => {
                    codeLines.forEach(l => l.style.background = '');
                    domBoxes.forEach(b => b.style.background = '');
                };

                const activate = (id) => {
                    const line = slideEl.querySelector(`.hl-line[data-dom="${id}"]`);
                    const box = slideEl.querySelector(`.hl-box[id="${id}"]`);
                    if (line) line.style.background = BG_ACTIVE;
                    if (box) box.style.background = BG_ACTIVE;
                };

                codeLines.forEach(line => {
                    const id = line.dataset.dom;
                    line.addEventListener('mouseenter', (e) => { e.stopPropagation(); clearAll(); activate(id); });
                    line.addEventListener('mouseleave', clearAll);
                });

                domBoxes.forEach(box => {
                    const id = box.id;
                    box.addEventListener('mouseenter', (e) => { e.stopPropagation(); clearAll(); activate(id); });
                    box.addEventListener('mouseleave', clearAll);
                });
            }
        },

        // CSS Kutu Modeli (Box Model)
        {
            id: "kutu-modeli",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "CSS Kutu Modeli (Box Model)",
            html: `
                <div class="vcd-grid-1-2">
                    <div>
                        <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 14px;">
                            Tarayıcı her elemanı iç içe geçmiş katmanlardan oluşan bir <strong>kutu</strong> gibi görür: en içte içerik, çevresinde iç boşluk (padding), kenarlık (border) ve dış boşluk (margin). Şimdilik bu katmanları <strong>tanımak</strong> yeterli — sürgüleri oynatıp her birinin nasıl yer açtığını hissedin.
                        </p>
                        <div class="vcd-glass-card" style="padding: 12px; display: flex; flex-direction: column; gap: 10px;">
                            <div class="box-model-slider-group">
                                <div class="box-model-slider-header" style="display: flex; justify-content: space-between; font-size: 0.75rem;">
                                    <span>İçerik (Content)</span>
                                    <strong id="bm-val-w">100px</strong>
                                </div>
                                <input type="range" class="sim-slider bm-slider" id="bm-slider-w" min="60" max="110" value="100" aria-label="Genişlik">
                            </div>
                            <div class="box-model-slider-group">
                                <div class="box-model-slider-header" style="display: flex; justify-content: space-between; font-size: 0.75rem;">
                                    <span>İç Boşluk (Padding)</span>
                                    <strong id="bm-val-p">10px</strong>
                                </div>
                                <input type="range" class="sim-slider bm-slider" id="bm-slider-p" min="0" max="18" value="10" aria-label="Padding">
                            </div>
                            <div class="box-model-slider-group">
                                <div class="box-model-slider-header" style="display: flex; justify-content: space-between; font-size: 0.75rem;">
                                    <span>Kenarlık (Border)</span>
                                    <strong id="bm-val-b">2px</strong>
                                </div>
                                <input type="range" class="sim-slider bm-slider" id="bm-slider-b" min="0" max="8" value="2" aria-label="Border">
                            </div>
                            <div class="box-model-slider-group">
                                <div class="box-model-slider-header" style="display: flex; justify-content: space-between; font-size: 0.75rem;">
                                    <span>Dış Boşluk (Margin)</span>
                                    <strong id="bm-val-m">12px</strong>
                                </div>
                                <input type="range" class="sim-slider bm-slider" id="bm-slider-m" min="0" max="20" value="12" aria-label="Margin">
                            </div>
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
                        <div style="overflow: hidden; display: flex; align-items: center; justify-content: center; width: 100%; height: 190px; flex-shrink: 0;">
                            <div class="bm-box bm-margin-box" id="bm-box-margin" style="padding: 12px;">
                                <div class="bm-box bm-border-box" id="bm-box-border" style="padding: 2px;">
                                    <div class="bm-box bm-padding-box" id="bm-box-padding" style="padding: 10px;">
                                        <div class="bm-box bm-content-box" id="bm-box-content" style="width: 100px; height: 46px; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 0.68rem; font-weight: 600;">Content</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Legend -->
                        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;padding-top:6px;border-top:1px solid rgba(255,255,255,0.06);width:100%;">
                            <span style="display:flex;align-items:center;gap:5px;font-size:0.65rem;color:var(--color-text-secondary);"><span style="display:inline-block;width:10px;height:10px;background:rgba(249,115,22,0.15);border:1px dashed rgba(249,115,22,0.6);border-radius:2px;flex-shrink:0;"></span>Margin</span>
                            <span style="display:flex;align-items:center;gap:5px;font-size:0.65rem;color:var(--color-text-secondary);"><span style="display:inline-block;width:10px;height:10px;background:rgba(234,179,8,0.15);border:1px solid rgba(234,179,8,0.6);border-radius:2px;flex-shrink:0;"></span>Border</span>
                            <span style="display:flex;align-items:center;gap:5px;font-size:0.65rem;color:var(--color-text-secondary);"><span style="display:inline-block;width:10px;height:10px;background:rgba(34,197,94,0.15);border:1px dashed rgba(34,197,94,0.6);border-radius:2px;flex-shrink:0;"></span>Padding</span>
                            <span style="display:flex;align-items:center;gap:5px;font-size:0.65rem;color:var(--color-text-secondary);"><span style="display:inline-block;width:10px;height:10px;background:rgba(212, 255, 0,0.4);border:1px solid rgba(212, 255, 0,0.7);border-radius:2px;flex-shrink:0;"></span>Content</span>
                        </div>

                        <!-- Teaser: kavramsal bakış; matematik Ders 5'te -->
                        <div style="display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;">
                            <div style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.5;max-width:300px;">Her katman aslında bir <strong style="color:var(--color-text-primary);">tasarım kararıdır</strong>: boşluk, nefes alanı ve ritim. Hesap yapmaya gerek yok — gözünüzle hissetmeniz yeterli.</div>
                            <div style="display:inline-flex;align-items:center;gap:7px;font-size:0.72rem;color:var(--color-secondary);background:rgba(2, 184, 204,0.07);border:1px solid rgba(2, 184, 204,0.22);border-radius:8px;padding:5px 11px;">
                                <span style="font-size:0.8rem;">→</span> <span>Kutu modelini <strong style="color:var(--color-text-primary);">Ders 5</strong>'te ellerinizle işleyeceğiz</span>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const sliderW = slideEl.querySelector('#bm-slider-w');
                const sliderP = slideEl.querySelector('#bm-slider-p');
                const sliderB = slideEl.querySelector('#bm-slider-b');
                const sliderM = slideEl.querySelector('#bm-slider-m');

                const valW = slideEl.querySelector('#bm-val-w');
                const valP = slideEl.querySelector('#bm-val-p');
                const valB = slideEl.querySelector('#bm-val-b');
                const valM = slideEl.querySelector('#bm-val-m');

                // Formül kaldırıldı — kutu modeli matematiği Ders 5'te işlenecek

                const boxContent = slideEl.querySelector('#bm-box-content');
                const boxPadding = slideEl.querySelector('#bm-box-padding');
                const boxBorder = slideEl.querySelector('#bm-box-border');
                const boxMargin = slideEl.querySelector('#bm-box-margin');

                const updateBoxModel = () => {
                    const w = parseInt(sliderW.value);
                    const p = parseInt(sliderP.value);
                    const b = parseInt(sliderB.value);
                    const m = parseInt(sliderM.value);

                    valW.textContent = `${w}px`;
                    valP.textContent = `${p}px`;
                    valB.textContent = `${b}px`;
                    valM.textContent = `${m}px`;

                    // Toplam-genişlik formülü Ders 5'e taşındı; burada sadece görsel keşif var

                    boxContent.style.width = `${w}px`;
                    boxPadding.style.padding = `${p}px`;
                    boxBorder.style.padding = `${b}px`;
                    boxMargin.style.padding = `${m}px`;
                };

                sliderW.addEventListener('input', updateBoxModel);
                sliderP.addEventListener('input', updateBoxModel);
                sliderB.addEventListener('input', updateBoxModel);
                sliderM.addEventListener('input', updateBoxModel);

                updateBoxModel();
            }
        },

        // Tarayıcı Geliştirici Araçları (DevTools)
        {
            id: "devtools",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "Tarayıcı Geliştirici Araçları",
            html: `
                <div style="display: flex; flex-direction: column; gap: 14px; height: 100%;">
                    <div style="display: flex; gap: 20px; align-items: flex-start; flex-shrink: 0;">
                        <div style="flex: 1;">
                            <p class="vcd-content-intro" style="margin-bottom: 12px;">
                                Her modern tarayıcıda yerleşik olarak bulunan DevTools, sayfanın HTML yapısını, CSS stillerini ve JavaScript çıktısını canlı olarak incelemenizi sağlar.
                            </p>
                            <ul class="vcd-bullet-list">
                                <li><strong>Açmak için:</strong> <kbd style="font-size:0.75rem;padding:1px 5px;border-radius:4px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);font-family:monospace;">F12</kbd> veya sayfada sağ tık → <em>İncele</em></li>
                                <li><strong>Elements paneli:</strong> Sayfanın tüm HTML etiketlerini ağaç şeklinde gösterir. Bir elemana tıklayınca sağ tarafta o elemanın CSS stilleri açılır.</li>
                                <li><strong>Canlı düzenleme:</strong> Styles panelinde CSS değerlerini doğrudan değiştirebilirsiniz — sayfa anlık güncellenir, yeniden yükleme gerekmez.</li>
                                <li><strong>Console:</strong> JavaScript hataları ve <code style="font-size:0.78rem;">console.log()</code> çıktıları burada görünür.</li>
                            </ul>
                        </div>
                        <div style="border-left:2px solid var(--color-primary);border-radius:0 6px 6px 0;padding:8px 12px;background:rgba(212, 255, 0,0.05);font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;flex:0 0 240px;">
                            Ders boyunca yazacağınız kodun neden çalışmadığını anlamanın ilk adresi DevTools Console'dur. Herhangi bir web sitesinde <strong>F12</strong> tuşuna basarak gerçek projelerin kaynak kodunu inceleyebilirsiniz.
                        </div>
                    </div>
                    <div class="vcd-glass-card" style="padding: 0; overflow: hidden; flex: 1;">
                        <div style="display:flex;gap:0;border-bottom:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);">
                            <div style="padding:6px 14px;font-size:0.68rem;font-weight:600;color:var(--color-primary);border-bottom:2px solid var(--color-primary);">Elements</div>
                            <div style="padding:6px 14px;font-size:0.68rem;color:var(--color-text-muted);">Console</div>
                            <div style="padding:6px 14px;font-size:0.68rem;color:var(--color-text-muted);">Network</div>
                            <div style="padding:6px 14px;font-size:0.68rem;color:var(--color-text-muted);">Sources</div>
                        </div>
                        <div style="display:flex;height:100%;min-height:120px;">
                            <div style="flex:1;padding:10px 12px;font-family:monospace;font-size:0.67rem;line-height:2;border-right:1px solid rgba(255,255,255,0.06);overflow:hidden;">
                                <div style="color:#60a5fa;">&lt;body&gt;</div>
                                <div style="padding-left:14px;color:#818cf8;background:rgba(212, 255, 0,0.12);border-radius:3px;">&lt;h1&gt;Başlık&lt;/h1&gt;</div>
                                <div style="padding-left:14px;color:#c084fc;">&lt;p&gt;Metin&lt;/p&gt;</div>
                                <div style="padding-left:14px;color:#7dd3fc;">&lt;button&gt;Tıkla&lt;/button&gt;</div>
                                <div style="color:#60a5fa;">&lt;/body&gt;</div>
                            </div>
                            <div style="flex:1;padding:10px 12px;font-family:monospace;font-size:0.65rem;line-height:1.9;overflow:hidden;border-right:1px solid rgba(255,255,255,0.06);">
                                <div style="color:var(--color-text-muted);font-size:0.6rem;margin-bottom:4px;">h1 { }</div>
                                <div style="padding-left:8px;"><span style="color:#c084fc;">color</span>: <span style="color:#86efac;">#1a1a2e</span>;</div>
                                <div style="padding-left:8px;"><span style="color:#c084fc;">font-size</span>: <span style="color:#fbbf24;">2rem</span>;</div>
                                <div style="padding-left:8px;"><span style="color:#c084fc;">margin</span>: <span style="color:#fbbf24;">0 0 12px</span>;</div>
                                <div style="padding-left:8px;color:rgba(255,255,255,0.2);">font-weight: bold;</div>
                            </div>
                            <div style="flex:1;padding:10px 12px;font-family:monospace;font-size:0.65rem;line-height:1.9;overflow:hidden;">
                                <div style="color:var(--color-text-muted);font-size:0.6rem;margin-bottom:6px;">Box Model</div>
                                <div style="font-size:0.52rem;padding:4px;border:1px dashed rgba(249,115,22,0.55);border-radius:3px;color:#f97316;line-height:1;">
                                    <span style="display:block;margin-bottom:2px;">margin</span>
                                    <div style="margin:0 3px 3px;padding:4px;border:2px solid rgba(234,179,8,0.55);border-radius:2px;color:#eab308;">
                                        <span style="display:block;margin-bottom:2px;">border</span>
                                        <div style="margin:0 3px 3px;padding:4px;border:1px dashed rgba(34,197,94,0.55);border-radius:2px;color:#22c55e;">
                                            <span style="display:block;margin-bottom:2px;">padding</span>
                                            <div style="padding:4px 6px;background:rgba(212, 255, 0,0.18);border:1px solid rgba(212, 255, 0,0.45);border-radius:2px;color:#818cf8;text-align:center;font-size:0.55rem;">
                                                content
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // HTML'in Gelişimi ve HTML5 Devrimi
        {
            id: "html-evrimi",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "HTML'in Gelişimi ve HTML5",
            html: `
                <div style="display: flex; flex-direction: column; gap: 14px; height: 100%;">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom: 10px;">
                            Tim Berners-Lee'nin 1991'de tasarladığı HTML, başlangıçta bilimsel belgeleri birbirine bağlamak için geliştirilmiş sade bir işaretleme diliydi. HTML 4.01 döneminde tüm sayfa bölümleri anlamsız <code>&lt;div&gt;</code> kutuları içine yazılıyor, yapıyı yalnızca CSS sınıf adlarından çıkarmak gerekiyordu. 2014'te standartlaşan <strong>HTML5</strong>, bu sorunu her bölümün işlevini kendi etiketiyle bildirdiği anlamsal yapıyla çözdü.
                        </p>
                        <ul class="vcd-bullet-list" style="gap: 6px;">
                            <li><strong>Anlamsal Etiketler & SEO:</strong> <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code> sayfanın yapısını hem insanlara hem arama motorlarına açıklar.</li>
                            <li><strong>Yerleşik Çoklu Ortam:</strong> Flash eklentisine gerek kalmadan <code>&lt;video&gt;</code> ve <code>&lt;audio&gt;</code> tarayıcıya entegre edildi.</li>
                            <li><strong>Çizim Tuvali:</strong> <code>&lt;canvas&gt;</code> ile tarayıcıda doğrudan 2D/3D interaktif grafikler üretilebilir oldu.</li>
                        </ul>
                    </div>
                    <div class="vcd-glass-card" style="padding: 16px 20px; flex: 1; display: flex; flex-direction: column; gap: 12px;">
                        <div style="font-size: 0.7rem; font-weight: 600; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em;">HTML Zaman Çizelgesi</div>
                        <div style="position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; padding-top: 8px;">
                            <div style="position: absolute; top: 22px; left: 8%; right: 8%; height: 2px; background: linear-gradient(to right, rgba(255,255,255,0.08), var(--color-primary)); border-radius: 2px;"></div>
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative;">
                                <div style="width: 14px; height: 14px; border-radius: 50%; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.3); position: relative; z-index: 1;"></div>
                                <div style="font-size: 0.9rem; font-weight: 700; color: var(--color-text-primary);">1991</div>
                                <div style="font-size: 0.72rem; color: var(--color-text-secondary); text-align: center; line-height: 1.4;"><strong>İlk HTML</strong><br><span style="font-size: 0.68rem; color: var(--color-text-muted);">CERN'de ilk sürüm — bilimsel belge bağlama.</span></div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative;">
                                <div style="width: 14px; height: 14px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.4); position: relative; z-index: 1;"></div>
                                <div style="font-size: 0.9rem; font-weight: 700; color: var(--color-text-primary);">1997</div>
                                <div style="font-size: 0.72rem; color: var(--color-text-secondary); text-align: center; line-height: 1.4;"><strong>HTML 4.0</strong><br><span style="font-size: 0.68rem; color: var(--color-text-muted);">"Div çorbası" dönemi — yapı CSS sınıflarından anlaşılırdı.</span></div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative;">
                                <div style="width: 14px; height: 14px; border-radius: 50%; background: rgba(212, 255, 0,0.3); border: 2px solid rgba(212, 255, 0,0.6); position: relative; z-index: 1;"></div>
                                <div style="font-size: 0.9rem; font-weight: 700; color: var(--color-text-primary);">2008</div>
                                <div style="font-size: 0.72rem; color: var(--color-text-secondary); text-align: center; line-height: 1.4;"><strong>HTML5 Taslak</strong><br><span style="font-size: 0.68rem; color: var(--color-text-muted);">WHATWG ilk taslağı yayımladı — anlamsal yapı önerildi.</span></div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative;">
                                <div style="width: 14px; height: 14px; border-radius: 50%; background: var(--color-primary); border: 2px solid var(--color-primary); box-shadow: 0 0 12px rgba(212, 255, 0,0.5); position: relative; z-index: 1;"></div>
                                <div style="font-size: 0.9rem; font-weight: 700; color: var(--color-primary);">2014</div>
                                <div style="font-size: 0.72rem; color: var(--color-text-secondary); text-align: center; line-height: 1.4;"><strong>HTML5 Standardı</strong><br><span style="font-size: 0.68rem; color: var(--color-text-muted);">W3C tarafından resmen onaylandı — bugün hâlâ kullanılan sürüm.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Anlamsal HTML
        {
            id: "semantic-html",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "Anlamsal HTML: Doğru Etiket, Doğru Yer",
            html: `
                <div class="vcd-grid-1-2">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom: 12px;">
                            Anlamsal (semantic) HTML, sayfa bölümlerini <strong style="color:var(--color-text-primary);">işlevini söyleyen</strong> etiketlerle işaretleme fikridir. Bir <code>&lt;div&gt;</code> tarayıcıya hiçbir şey anlatmaz; <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code> ise "burası başlık, burası menü, burası ana içerik" der.
                        </p>
                        <p style="font-size:0.85rem;color:var(--color-text-secondary);line-height:1.6;margin-bottom:12px;">
                            Sağdaki iki kod aynı görünümü üretebilir — ama "div çorbası" tarayıcıya yalnızca anlamsız kutular gösterir. Anlamsal yapı ise hem tarayıcıya, hem Google'a, hem de görme engelli kullanıcıların <strong>ekran okuyucularına</strong> sayfanın haritasını çıkarır.
                        </p>
                        <div style="display:inline-flex;align-items:center;gap:7px;font-size:0.72rem;color:var(--color-secondary);background:rgba(2, 184, 204,0.07);border:1px solid rgba(2, 184, 204,0.22);border-radius:8px;padding:5px 11px;">
                            <span style="font-size:0.8rem;">→</span> <span>Anlamsal etiketleri <strong style="color:var(--color-text-primary);">Ders 2</strong>'de tek tek kuracağız</span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <div class="vcd-glass-card" style="padding: 12px;">
                            <div style="font-size:0.68rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Div çorbası (kaçınılacak)</div>
                            <pre class="vcd-code-block" style="font-size:0.68rem;padding:10px 12px;margin:0;white-space:pre;"><span style="color:#475569;">&lt;div id="header"&gt;</span>
  &lt;div class="logo"&gt;...&lt;/div&gt;
<span style="color:#475569;">&lt;/div&gt;</span>
<span style="color:#475569;">&lt;div id="menu"&gt;</span>...&lt;/div&gt;
<span style="color:#475569;">&lt;div id="content"&gt;</span>...&lt;/div&gt;
<span style="color:#475569;">&lt;div id="footer"&gt;</span>...&lt;/div&gt;</pre>
                        </div>
                        <div class="vcd-glass-card primary" style="padding: 12px;">
                            <div style="font-size:0.68rem;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Semantic yapı (doğru yol)</div>
                            <pre class="vcd-code-block" style="font-size:0.68rem;padding:10px 12px;margin:0;white-space:pre;"><span style="color:#818cf8;">&lt;header&gt;</span>
  &lt;img class="logo"&gt;
<span style="color:#818cf8;">&lt;/header&gt;</span>
<span style="color:#818cf8;">&lt;nav&gt;</span>...&lt;/nav&gt;
<span style="color:#818cf8;">&lt;main&gt;</span>...&lt;/main&gt;
<span style="color:#818cf8;">&lt;footer&gt;</span>...&lt;/footer&gt;</pre>
                        </div>
                        <div style="border-left:2px solid var(--color-secondary);border-radius:0 6px 6px 0;padding:8px 12px;background:rgba(2, 184, 204,0.05);font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;">
                            Semantic etiketler SEO'yu iyileştirir: Google, sayfanın hangi bölümünün başlık, hangi bölümünün içerik olduğunu daha iyi kavrar.
                        </div>
                    </div>
                </div>
            `
        },

        // CSS'in Ortaya Çıkışı ve CSS3
        {
            id: "css-evrimi",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "CSS'in Ortaya Çıkışı ve CSS3",
            html: `
                <div class="vcd-grid-2-1" style="align-items: center;">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom: 12px;">
                            HTML'in ilk dönemlerinde stil kodları her etiketin içine yazılıyordu. 1994'te Håkon Wium Lie tarafından önerilen ve 1996'da W3C standardı haline gelen <strong>CSS</strong>, içerik ile tasarımı birbirinden ayırdı.
                        </p>
                        <p style="font-size: 0.88rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 12px;">
                            Erken dönem CSS1–2'de yuvarlak köşe ya da degrade için görseller Photoshop'ta kesilip sayfaya yerleştiriliyordu. CSS3 ile bu teknikler doğrudan kod satırına taşındı:
                        </p>
                        <ul class="vcd-bullet-list">
                            <li><strong>Stil Özellikleri Koda Taşındı:</strong> Yuvarlak köşe, gölge ve renk geçişi gibi özellikler artık <code>border-radius</code>, <code>box-shadow</code>, <code>linear-gradient</code> ile yazılıyor; bunlar için grafik dosyasına gerek kalmadı.</li>
                            <li><strong>Web Yazı Tipleri:</strong> <code>@font-face</code> ve Google Fonts ile sistem fontlarına mahkumiyet sona erdi.</li>
                            <li><strong>Hizalama Sistemleri:</strong> <strong>Flexbox (2009)</strong> ve <strong>Grid (2017)</strong> ile mizanpaj sorunları kökten çözüldü.</li>
                        </ul>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div class="vcd-glass-card secondary" style="padding: 14px 16px; display: flex; align-items: flex-start; gap: 14px;">
                            <div style="flex-shrink: 0;">
                                <div class="vcd-stats-number" style="font-size: 2rem; line-height: 1;">CSS3</div>
                                <div class="vcd-stats-label" style="font-size: 0.62rem; margin-top: 3px; white-space: nowrap;">Modüler Yapı</div>
                                <div style="font-size: 0.58rem; color: var(--color-text-muted); margin-top: 1px;">W3C · 2011</div>
                            </div>
                            <div style="width: 1px; align-self: stretch; background: rgba(255,255,255,0.08); flex-shrink: 0;"></div>
                            <p style="font-size: 0.75rem; color: var(--color-text-secondary); line-height: 1.55; margin: 0; padding-top: 2px;">Stil özellikleri artık kod satırına taşındı; Photoshop'ta kesilen grafikler yerini CSS kurallarına bıraktı.</p>
                        </div>
                        <div class="vcd-glass-card" style="padding: 14px; flex: 1;">
                            <div style="font-size: 0.7rem; font-weight: 600; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">CSS3 ile artık mümkün</div>
                            <pre class="vcd-code-block" style="font-size: 0.7rem; padding: 10px 14px; margin: 0; white-space: pre;"><span style="color:#c8cad0;">.kart</span> <span style="color:#828289;">{</span>
  <span style="color:#02b8cc;">border-radius</span>: <span style="color:#fafafa;">12px</span>;
  <span style="color:#02b8cc;">box-shadow</span>: <span style="color:#fafafa;">0 8px 24px rgba(0,0,0,.2)</span>;
  <span style="color:#02b8cc;">background</span>: <span style="color:#fafafa;">linear-gradient(</span>
    <span style="color:#818cf8;">135deg</span>, <span style="color:#818cf8;">#d4ff00</span>, <span style="color:#22d3ee;">#02b8cc</span>
  <span style="color:#fafafa;">)</span>;
  <span style="color:#02b8cc;">transition</span>: <span style="color:#fafafa;">transform 0.3s ease</span>;
<span style="color:#828289;">}</span>

<span style="color:#c8cad0;">.kart:hover</span> <span style="color:#828289;">{</span>
  <span style="color:#02b8cc;">transform</span>: <span style="color:#fafafa;">translateY(-4px)</span>;
<span style="color:#828289;">}</span></pre>
                        </div>
                    </div>
                </div>
            `
        },

        // Tipografi — yazı tipi sistemi, ölçek, okunabilirlik
        {
            id: "tipografi-temelleri",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "Tipografi: Web'in Sessiz Tasarımcısı",
            html: `
                <p class="vcd-content-intro">Web'deki içeriğin büyük bölümü metindir. Doğru yazı tipi ve hiyerarşi, görsellerden bile önce kullanıcının markayı nasıl algıladığını belirler.</p>
                <div class="vcd-grid-3" style="margin-top: 12px;">
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-family: Georgia, 'Times New Roman', serif; font-size:2rem; line-height:1; margin-bottom:8px; color:var(--color-text-primary);">Aa</div>
                        <strong style="font-size:0.85rem;display:block;margin-bottom:4px;">Serif</strong>
                        <p style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.5;margin:0;">Harf uçlarındaki çıkıntılarla geleneksel, ciddi, edebi bir his verir. Uzun okuma metinlerinde tercih edilir.</p>
                        <div style="font-family:Georgia,serif;font-size:0.68rem;color:var(--color-text-muted);margin-top:6px;">Georgia · Playfair · Merriweather</div>
                    </div>
                    <div class="vcd-glass-card primary" style="padding:16px;">
                        <div style="font-family: 'Geist', sans-serif; font-size:2rem; line-height:1; margin-bottom:8px; color:var(--color-text-primary); font-weight:600;">Aa</div>
                        <strong style="font-size:0.85rem;display:block;margin-bottom:4px;">Sans-serif</strong>
                        <p style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.5;margin:0;">Çıkıntısız, temiz ve modern. Ekran okunabilirliği yüksektir; günümüz arayüzlerinin varsayılan tercihi.</p>
                        <div style="font-family:'Geist',sans-serif;font-size:0.68rem;color:var(--color-text-muted);margin-top:6px;">Inter · Outfit · Roboto</div>
                    </div>
                    <div class="vcd-glass-card" style="padding:16px;">
                        <div style="font-family: 'JetBrains Mono', monospace; font-size:2rem; line-height:1; margin-bottom:8px; color:var(--color-text-primary);">Aa</div>
                        <strong style="font-size:0.85rem;display:block;margin-bottom:4px;">Monospace</strong>
                        <p style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.5;margin:0;">Her karakter aynı genişlikte. Kod, terminal ve teknik içeriklerin imzası.</p>
                        <div style="font-family:'JetBrains Mono',monospace;font-size:0.68rem;color:var(--color-text-muted);margin-top:6px;">JetBrains Mono · Fira Code</div>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Tasarımcı Gözüyle</h4>
                    <p>Yazı tipi seçmek bir <strong>ses tonu</strong> seçmektir: ciddi mi, samimi mi, teknik mi? Doğru tipografi, kullanıcı tek kelime okumadan markanın karakterini hissettirir. Başlık-paragraf hiyerarşisi, satır boşlukları ve okunabilirlik web'de birer CSS kararıdır.</p>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:12px;flex-wrap:wrap;">
                    <div style="display:inline-flex;align-items:center;gap:7px;font-size:0.72rem;color:var(--color-secondary);background:rgba(2, 184, 204,0.07);border:1px solid rgba(2, 184, 204,0.22);border-radius:8px;padding:5px 11px;">
                        <span style="font-size:0.8rem;">→</span> <span>Tipografi ve rengi <strong style="color:var(--color-text-primary);">Ders 4</strong>'te derinlemesine işleyeceğiz</span>
                    </div>
                    <span style="font-size:0.74rem;color:var(--color-text-muted);">Ücretsiz web fontları: <a href="https://fonts.google.com" target="_blank" style="color:var(--color-secondary);">fonts.google.com ↗</a></span>
                </div>
            `
        },

        // Slide 12: CSS Zen Garden Devrimi (Interactive)
        {
            id: "css-zen-garden",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "CSS Zen Garden (2003)",
            html: `
                <div class="vcd-grid-1-2" style="align-items: stretch;">
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <p class="vcd-content-intro" style="margin: 0;">
                            Dave Shea, 2003'te <a href="http://csszengarden.com" target="_blank" style="color: var(--color-secondary);">csszengarden.com</a>'u başlattı. HTML içeriği hiç değişmeden, yalnızca CSS dosyası değiştirilerek sitenin tüm görünümü kökten farklılaştırıldı.
                        </p>
                        <div class="vcd-glass-card" style="padding: 12px; flex-shrink: 0;">
                            <h4 style="font-size: 0.78rem; margin-bottom: 8px; color: var(--color-primary);">Bir stil seçin:</h4>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                <button class="sim-btn zen-theme-btn" data-theme="default" style="font-size: 0.75rem; padding: 6px 12px; text-align: left;">Düz HTML (Unstyled)</button>
                                <button class="sim-btn zen-theme-btn active" data-theme="glass" style="font-size: 0.75rem; padding: 6px 12px; text-align: left;">Modern Glassmorphism</button>
                                <button class="sim-btn zen-theme-btn" data-theme="retro" style="font-size: 0.75rem; padding: 6px 12px; text-align: left;">Retro Terminal</button>
                                <button class="sim-btn zen-theme-btn" data-theme="brutalist" style="font-size: 0.75rem; padding: 6px 12px; text-align: left;">Brutalist</button>
                            </div>
                        </div>
                        <div class="vcd-glass-card" style="padding: 12px; flex: 1; overflow: hidden;">
                            <div style="font-size:0.65rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">Aktif CSS</div>
                            <pre id="zen-code-display" class="vcd-code-block" style="font-size:0.65rem;padding:8px 12px;margin:0;white-space:pre;overflow:hidden;line-height:1.8;"></pre>
                        </div>
                    </div>
                    <div class="zen-preview-area theme-glass" id="zen-preview-box" style="padding: 20px; display: flex; flex-direction: column; justify-content: center;">
                        <h3 style="margin-bottom: 6px; font-weight: bold;">CSS Zen Garden</h3>
                        <p style="font-size: 0.8rem; line-height: 1.4; margin-bottom: 12px;">HTML iskeleti tamamen sabit kalırken, yalnızca stil dosyasının değişmesiyle tüm görsel mizanpaj, renkler ve yazı tipleri kökten değişir.</p>
                        <button style="font-size: 0.8rem; padding: 4px 12px;">Ayrıntıları Keşfet</button>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const buttons = slideEl.querySelectorAll('.zen-theme-btn');
                const box = slideEl.querySelector('#zen-preview-box');
                const codeDisplay = slideEl.querySelector('#zen-code-display');

                const themeCodes = {
                    default: `<span style="color:#c8cad0;">body</span> { }

<span style="color:#c8cad0;">h3</span>, <span style="color:#c8cad0;">p</span>, <span style="color:#c8cad0;">button</span> {
  <span style="color:#02b8cc;">font-family</span>: <span style="color:#86efac;">serif</span>;
}`,
                    glass: `<span style="color:#c8cad0;">.zen-preview-area</span> {
  <span style="color:#02b8cc;">background</span>: <span style="color:#86efac;">rgba(255,255,255,0.06)</span>;
  <span style="color:#02b8cc;">backdrop-filter</span>: <span style="color:#fbbf24;">blur(20px)</span>;
  <span style="color:#02b8cc;">border</span>: <span style="color:#fbbf24;">1px solid rgba(255,255,255,0.1)</span>;
  <span style="color:#02b8cc;">border-radius</span>: <span style="color:#fbbf24;">16px</span>;
}`,
                    retro: `<span style="color:#c8cad0;">.theme-retro</span> {
  <span style="color:#02b8cc;">background</span>: <span style="color:#86efac;">#0d1117</span>;
  <span style="color:#02b8cc;">color</span>: <span style="color:#86efac;">#00ff41</span>;
  <span style="color:#02b8cc;">font-family</span>: <span style="color:#86efac;">monospace</span>;
  <span style="color:#02b8cc;">border</span>: <span style="color:#fbbf24;">1px solid #00ff41</span>;
}`,
                    brutalist: `<span style="color:#c8cad0;">.theme-brutalist</span> {
  <span style="color:#02b8cc;">background</span>: <span style="color:#86efac;">#fff</span>;
  <span style="color:#02b8cc;">color</span>: <span style="color:#86efac;">#000</span>;
  <span style="color:#02b8cc;">border</span>: <span style="color:#fbbf24;">4px solid #000</span>;
  <span style="color:#02b8cc;">font-family</span>: <span style="color:#86efac;">Impact, sans-serif</span>;
}`,
                };

                const applyTheme = (theme) => {
                    box.className = `zen-preview-area theme-${theme}`;
                    codeDisplay.innerHTML = themeCodes[theme] || '';
                };

                applyTheme('glass');

                buttons.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        buttons.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        applyTheme(btn.getAttribute('data-theme'));
                    });
                });
            }
        },

        // Adobe Flash Dönemi ve Çöküşü
        {
            id: "flash-donemi",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "Adobe Flash Dönemi (1996 – 2020)",
            html: `
                <div style="display: flex; flex-direction: column; gap: 14px;">
                    <!-- Üst: metin -->
                    <div>
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                            <div style="width: 26px; height: 26px; background: #e8302e; border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 8px rgba(232,48,46,0.4);">
                                <span style="color: white; font-weight: 800; font-size: 0.95rem; font-style: italic; line-height: 1;">f</span>
                            </div>
                            <span style="font-size: 0.75rem; color: var(--color-text-muted); letter-spacing: 0.04em;">Adobe Flash Player</span>
                        </div>
                        <p class="vcd-content-intro" style="margin-bottom: 10px;">
                                FutureWave Software'in geliştirip Macromedia'nın (2005'te Adobe'nin satın aldığı) büyüttüğü Flash, tarayıcıların görsel açıdan en kısıtlı olduğu dönemde animasyon ve etkileşim için fiili standart haline geldi.
                            </p>
                            <p style="font-size: 0.87rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 10px;">
                                Nisan 2010'da Steve Jobs, <em>"Thoughts on Flash"</em> başlıklı açık mektubuyla iPhone ve iPad'de Flash'a hiçbir zaman yer olmayacağını ilan etti. Gerekçeleri netti: yüksek CPU tüketimi, pil ömrünü hızla tüketme, yaygın güvenlik açıkları ve dokunmatik ekranlarla yapısal uyumsuzluk. Mobil kullanımın patlama yaptığı bir dönemde bu karar belirleyici oldu.
                            </p>
                            <p style="font-size: 0.87rem; color: var(--color-text-secondary); line-height: 1.6;">
                                HTML5, CSS3 ve JavaScript'in olgunlaşmasıyla Flash'ın yaptığı her şey artık eklentisiz yapılabilir hale geldi. Adobe, <strong>31 Aralık 2020</strong> itibarıyla Flash Player'ı resmen sonlandırdı.
                            </p>
                    </div>
                    <!-- Alt: iki kart -->
                    <div style="display: flex; gap: 12px;">
                        <div class="vcd-glass-card" style="flex: 1; padding: 14px; display: flex; align-items: flex-start; gap: 12px;">
                            <span style="font-size: 1.2rem; flex-shrink: 0;">🎮</span>
                            <div>
                                <div style="font-size: 0.82rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 4px;">Nostaljiyi Yaşatmak: Ruffle</div>
                                <p style="font-size: 0.76rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">Eski Flash siteleri ve oyunları, <strong style="color: var(--color-text-primary);">Ruffle</strong> adlı açık kaynaklı WebAssembly emülatörü aracılığıyla modern tarayıcılarda yeniden çalıştırılabilmektedir.</p>
                            </div>
                        </div>
                        <div class="vcd-glass-card secondary" style="flex: 1; padding: 14px;">
                            <div style="font-size: 0.82rem; font-weight: 600; color: var(--color-secondary); margin-bottom: 8px;">Flash Arşivi</div>
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 7px; font-size: 0.76rem;">
                                <li>→ <a href="https://archive.org/details/softwarelibrary_flash" target="_blank" style="color: var(--color-secondary);">Internet Archive Flash Kütüphanesi ↗</a></li>
                                <li>→ <a href="https://homestarrunner.com/" target="_blank" style="color: var(--color-secondary);">Homestar Runner (Ruffle kullanan site) ↗</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },

        // JavaScript'in Doğuşu ve ES6+
        {
            id: "javascript-evrimi",
            category: "Bölüm 2: Çekirdek Teknolojiler",
            title: "JavaScript'in Doğuşu ve ES6+",
            html: `
                <div class="vcd-grid-2-1">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom: 10px;">
                            1995 yılında Brendan Eich tarafından Netscape tarayıcısı için yalnızca 10 günde prototiplenen <strong>JavaScript</strong>, statik web sayfalarına etkileşim kazandırdı.
                        </p>
                        <p style="font-size: 0.87rem; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 12px;">
                            Dilin asıl adı önce <em>Mocha</em>, sonra <em>LiveScript</em>'ti. Netscape, dönemin popüler dili Java'nın tanınırlığından yararlanmak için ismi <strong>JavaScript</strong> olarak değiştirdi — saf bir pazarlama kararı. İkisi arasında teknik bir ilişki yoktur.
                        </p>
                        <ul class="vcd-bullet-list">
                            <li><strong>ES6 Standardı (2015):</strong> Modern sözdizimi, kısa fonksiyon yazımı ve modüler yapıyla bugün bir tasarımcının ekleyeceği etkileşim mantığının tamamı bu biçimde yazılıyor.</li>
                            <li><strong>Web Uygulamaları:</strong> React, Vue ve Angular ile Netflix, Spotify ve Instagram gibi platformlar sıfırdan JavaScript üzerine inşa edildi.</li>
                            <li><strong>Eklentisiz Etkileşim:</strong> Tarayıcı içinde doğrudan çalışan <a href="https://play2048.co/" target="_blank" style="color: var(--color-secondary);">2048</a> gibi oyunlar da dahil olmak üzere tüm dinamik davranışlar JavaScript ile yazılır.</li>
                        </ul>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div class="vcd-glass-card" style="padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
                            <div style="font-size: 1.4rem; flex-shrink: 0;">≠</div>
                            <div>
                                <div style="font-size: 0.78rem; font-weight: 600; color: var(--color-warning); margin-bottom: 2px;">Java ≠ JavaScript</div>
                                <div style="font-size: 0.7rem; color: var(--color-text-secondary); line-height: 1.45;">Java derlenen, JVM üzerinde çalışan kurumsal bir dildir. JavaScript ise tarayıcının yorumladığı bir betik dilidir.</div>
                            </div>
                        </div>
                        <div class="vcd-glass-card" style="padding: 14px;">
                            <div style="font-size: 0.7rem; font-weight: 600; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Örnek: tıklama etkileşimi</div>
                            <pre class="vcd-code-block" style="font-size: 0.7rem; padding: 10px 14px; margin: 0 0 8px; white-space: pre;"><span style="color:#02b8cc;">const</span> <span style="color:#fafafa;">btn</span> = document.<span style="color:#818cf8;">querySelector</span>(<span style="color:#86efac;">'#demo-btn'</span>);

btn.<span style="color:#818cf8;">addEventListener</span>(<span style="color:#86efac;">'click'</span>, () => {
  btn.textContent = <span style="color:#86efac;">'Tıklandı! ✓'</span>;
  btn.style.background = <span style="color:#86efac;">'#d4ff00'</span>;
  btn.style.color = <span style="color:#86efac;">'#fff'</span>;
});</pre>
                            <button id="demo-btn" style="font-size: 0.8rem; padding: 6px 16px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06); color: var(--color-text-primary); cursor: pointer; transition: none; width: 100%;">Butona Tıkla</button>
                        </div>
                    </div>
                </div>
            `,
            onRender: (slideEl) => {
                const btn = slideEl.querySelector('#demo-btn');
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    btn.textContent = 'Tıklandı! ✓';
                    btn.style.background = '#d4ff00';
                    btn.style.color = '#fff';
                    btn.style.borderColor = '#d4ff00';
                });
            }
        },

        // Web Evreleri Karşılaştırma Matrisi
        {
            id: "web-evreleri",
            category: "Bölüm 3: Web Evreleri",
            title: "Web'in Üç Evresi",
            html: `
                <p class="vcd-content-intro">Web mimarisinin gelişimi, kullanıcının içerikle kurduğu ilişkiye göre üç belirgin evreye ayrılır:</p>
                <table class="vcd-table" style="margin-top: 14px;">
                    <thead>
                        <tr>
                            <th style="width: 18%; color: var(--color-text-muted); font-size: 0.78rem;"></th>
                            <th style="border-top: 2px solid #828289; color: #c8cad0;">
                                <div style="font-size: 0.7rem; font-weight: 500; opacity: 0.7; margin-bottom: 2px;">1990 – 2004</div>
                                Web 1.0
                            </th>
                            <th style="border-top: 2px solid var(--color-primary); color: var(--color-primary);">
                                <div style="font-size: 0.7rem; font-weight: 500; opacity: 0.7; margin-bottom: 2px;">2004 – Günümüz</div>
                                Web 2.0
                            </th>
                            <th style="border-top: 2px solid var(--color-secondary); color: var(--color-secondary);">
                                <div style="font-size: 0.7rem; font-weight: 500; opacity: 0.7; margin-bottom: 2px;">Gelecek / Evrimleşen</div>
                                Web 3.0
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: var(--color-text-primary); font-weight: 600; font-size: 0.8rem; background: rgba(255,255,255,0.02);">Ana Rol</td>
                            <td>Oku <span style="color: var(--color-text-muted); font-size: 0.78rem;">(Statik)</span></td>
                            <td>Oku — Yaz <span style="color: var(--color-text-muted); font-size: 0.78rem;">(Etkileşimli)</span></td>
                            <td>Oku — Yaz — Sahip Ol <span style="color: var(--color-text-muted); font-size: 0.78rem;">(Merkeziyetsiz)</span></td>
                        </tr>
                        <tr>
                            <td style="color: var(--color-text-primary); font-weight: 600; font-size: 0.8rem; background: rgba(255,255,255,0.02);">Kullanıcı</td>
                            <td>Pasif tüketici</td>
                            <td>Aktif üretici <span style="color: var(--color-text-muted); font-size: 0.78rem;">(sosyal ağlar)</span></td>
                            <td>Veri sahibi ve paydaş</td>
                        </tr>
                        <tr>
                            <td style="color: var(--color-text-primary); font-weight: 600; font-size: 0.8rem; background: rgba(255,255,255,0.02);">Altyapı</td>
                            <td>Sunucu merkezli</td>
                            <td>Bulut ve dev platformlar</td>
                            <td>Blokzincir ve dağıtık ağlar</td>
                        </tr>
                        <tr>
                            <td style="color: var(--color-text-primary); font-weight: 600; font-size: 0.8rem; background: rgba(255,255,255,0.02);">Tasarım</td>
                            <td>Sabit, tablolara dayalı</td>
                            <td>Duyarlı <span style="color: var(--color-text-muted); font-size: 0.78rem;">(responsive / mobil)</span></td>
                            <td>Mekansal / 3D / Akıllı arayüzler</td>
                        </tr>
                    </tbody>
                </table>
            `
        },

        // Slide 16: Web 3.0 ve Üç Temel Sütun (Standard)
        {
            id: "web3-pillars",
            category: "Bölüm 3: Web Evreleri",
            title: "Web 3.0 ve Üç Temel Sütun",
            html: `
                <p class="vcd-content-intro" style="margin-bottom: 14px;">Web 3.0, internet altyapısını ve kullanıcı-veri ilişkisini yeniden tanımlamaya çalışan, henüz tam olarak hayata geçmemiş bir yaklaşımdır. Üç temel fikir üzerine kurulur:</p>
                <div class="vcd-grid-3">
                    <div class="vcd-glass-card primary" style="padding: 16px;">
                        <strong style="color: var(--color-primary); font-size: 0.95rem; display: block; margin-bottom: 8px;">1. Akıllı İçerik (Semantic Web)</strong>
                        <p style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.55;">
                            Bugün arama motorları anahtar kelime eşleştirir. Web 3.0'da algoritmalar içeriğin <em>ne anlama geldiğini</em> kavrar: "bütçem 500 TL, günlük yürüyüş için hafif spor ayakkabı" gibi bir sorguyu doğrudan anlayıp kişiye özel sonuç üretir.
                        </p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding: 16px;">
                        <strong style="color: var(--color-secondary); font-size: 0.95rem; display: block; margin-bottom: 8px;">2. Kullanıcıya Ait Veri</strong>
                        <p style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.55; margin-bottom: 8px;">
                            Bugün verileriniz Google, Meta gibi şirketlerin sunucularında tutulur. Web 3.0 yaklaşımında kimlik ve veriler blokzincir tabanlı dijital cüzdanlarda saklanır — hangi siteyle ne paylaşacağınıza siz karar verirsiniz.
                        </p>
                        <div style="font-size: 0.75rem; background: rgba(2, 184, 204,0.07); border-left: 2px solid var(--color-secondary); padding: 6px 10px; border-radius: 0 6px 6px 0; color: var(--color-text-secondary); line-height: 1.5;">
                            <strong style="color: var(--color-secondary);">Örnek:</strong> Spotify'a her girişte şifre yazmak yerine, dijital cüzdanınızla tek tıkta giriş yaparsınız. Spotify sizin hakkınızda yalnızca paylaşmayı seçtiğiniz bilgileri görür; dinleme geçmişiniz şirkette değil sizde kalır.
                        </div>
                    </div>
                    <div class="vcd-glass-card accent" style="padding: 16px;">
                        <strong style="color: var(--color-accent); font-size: 0.95rem; display: block; margin-bottom: 8px;">3. Mekansal Arayüzler (Spatial Web)</strong>
                        <p style="font-size: 0.8rem; color: var(--color-text-secondary); line-height: 1.55;">
                            Ekrana sıkışmış 2D pencereler yerine sanal ve artırılmış gerçeklik (VR/AR) arayüzleri. Örnek: bir e-ticaret sitesinde ürünü satın almadan önce kameranızla odanıza yerleştirerek görmek.
                        </p>
                    </div>
                </div>
            `
        },

        // Slide 17: Modern Web Teknolojileri (Standard)
        {
            id: "tasarimci-modern-teknoloji",
            category: "Bölüm 4: Modern Web",
            title: "Modern Web Teknolojileri",
            html: `
                <p class="vcd-content-intro" style="margin-bottom: 14px;">Günümüz web projelerinde sıkça kullanılan tasarım ve animasyon teknolojileri:</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">

                    <div class="vcd-glass-card" style="gap:8px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
                            <div style="width:26px;height:26px;background:#000;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid rgba(255,255,255,0.15);">
                                <span style="font-weight:700;font-size:0.8rem;color:#fff;font-family:monospace;">3</span>
                            </div>
                            <a href="https://threejs.org" target="_blank" style="color:var(--color-primary);font-weight:600;font-size:0.9rem;text-decoration:none;">Three.js ↗</a>
                        </div>
                        <p style="font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;margin:0 0 6px;">WebGL, tarayıcının yerleşik 3D grafik motorudur; Three.js ise bunu kullanımı kolay bir kütüphaneye sarar. Etkileşimli 3D sahneler, ürün görselleştirme ve portfolyo siteleri için kullanılır.</p>
                        <a href="https://threejs.org/examples/" target="_blank" style="font-size:0.72rem;color:var(--color-text-muted);text-decoration:none;">Örnek: threejs.org/examples ↗</a>
                    </div>

                    <div class="vcd-glass-card" style="gap:8px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
                            <div style="width:26px;height:26px;background:#88ce02;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <span style="font-weight:700;font-size:0.52rem;color:#1a1a1a;letter-spacing:-0.5px;">GSAP</span>
                            </div>
                            <a href="https://gsap.com" target="_blank" style="color:var(--color-primary);font-weight:600;font-size:0.9rem;text-decoration:none;">GSAP ↗</a>
                            <span style="font-size:0.7rem;color:var(--color-text-muted);">GreenSock</span>
                        </div>
                        <p style="font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;margin:0 0 6px;">Yüksek performanslı CSS/JS animasyon kütüphanesi. ScrollTrigger ile kaydırma bazlı animasyonlar yaygın kullanım alanıdır.</p>
                        <a href="https://stripe.com" target="_blank" style="font-size:0.72rem;color:var(--color-text-muted);text-decoration:none;">Örnek: stripe.com ↗</a>
                    </div>

                    <div class="vcd-glass-card" style="gap:8px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
                            <div style="width:26px;height:26px;background:linear-gradient(135deg,#5b4cf5,#9b59f5);border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <span style="font-weight:700;font-size:0.85rem;color:#fff;">S</span>
                            </div>
                            <a href="https://spline.design" target="_blank" style="color:var(--color-primary);font-weight:600;font-size:0.9rem;text-decoration:none;">Spline ↗</a>
                            <span style="font-size:0.7rem;color:var(--color-text-muted);">3D Tasarım</span>
                        </div>
                        <p style="font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;margin:0 0 6px;">Kod yazmadan web uyumlu 3D sahneler oluşturulur; hazır sahne React, Vue veya HTML'e tek satırla eklenir.</p>
                        <a href="https://app.spline.design/community" target="_blank" style="font-size:0.72rem;color:var(--color-text-muted);text-decoration:none;">Topluluk sahneleri ↗</a>
                    </div>

                    <div class="vcd-glass-card" style="gap:8px;">
                        <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
                            <div style="width:26px;height:26px;background:#00c4a1;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <span style="font-weight:700;font-size:0.9rem;color:#fff;">L</span>
                            </div>
                            <a href="https://lottiefiles.com" target="_blank" style="color:var(--color-primary);font-weight:600;font-size:0.9rem;text-decoration:none;">Lottie ↗</a>
                            <span style="font-size:0.7rem;color:var(--color-text-muted);">by Airbnb</span>
                        </div>
                        <p style="font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;margin:0;">After Effects ve Cavalry gibi hareket tasarımı programlarında üretilen animasyonları küçük JSON dosyalarına aktarır. Duolingo, Uber ve Google'ın mikro-etkileşimlerinde standart format.</p>
                    </div>

                </div>
            `
        },

        // Responsive Tasarım
        {
            id: "responsive-tasarim",
            category: "Bölüm 4: Modern Web",
            title: "Responsive Tasarım",
            html: `
                <div class="vcd-grid-1-2">
                    <div>
                        <p class="vcd-content-intro" style="margin-bottom: 12px;">
                            Responsive tasarım, aynı HTML sayfasının telefon, tablet ve masaüstü ekranlarda doğru görünmesini sağlayan yaklaşımdır. Tek sayfa, tüm cihazlar.
                        </p>
                        <ul class="vcd-bullet-list">
                            <li><strong>Mobile-first:</strong> Önce en küçük ekran tasarlanır, büyüdükçe yerleşim genişletilir. Türkiye'de web trafiğinin %70'i mobilden geliyor.</li>
                            <li><strong>Media Queries:</strong> CSS'te belirli ekran genişliklerinde farklı kurallar devreye girer. 768px altında tek sütun, üstünde iki sütun gibi.</li>
                            <li><strong>Esnek birimler:</strong> <code style="font-size:0.78rem;">px</code> yerine <code style="font-size:0.78rem;">%</code>, <code style="font-size:0.78rem;">vw</code>, <code style="font-size:0.78rem;">em</code> kullanmak yerleşimi ekrana göre ölçeklendirir.</li>
                        </ul>
                        <div style="display:inline-flex;align-items:center;gap:7px;font-size:0.72rem;color:var(--color-secondary);background:rgba(2, 184, 204,0.07);border:1px solid rgba(2, 184, 204,0.22);border-radius:8px;padding:5px 11px;margin-top:12px;">
                            <span style="font-size:0.8rem;">→</span> <span>Grid ve responsive'i <strong style="color:var(--color-text-primary);">Ders 7</strong>'de elinizle kuracaksınız</span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div class="vcd-glass-card" style="padding: 14px;">
                            <div style="font-size:0.68rem;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">Media Query örneği</div>
                            <pre class="vcd-code-block" style="font-size:0.69rem;padding:10px 14px;margin:0;white-space:pre;"><span style="color:#818cf8;">.grid</span> {
  display: <span style="color:#86efac;">grid</span>;
  grid-template-columns: <span style="color:#fbbf24;">1fr</span>;
}

<span style="color:#02b8cc;">@media</span> (min-width: <span style="color:#fbbf24;">768px</span>) {
  <span style="color:#818cf8;">.grid</span> {
    grid-template-columns: <span style="color:#fbbf24;">1fr 1fr</span>;
  }
}</pre>
                        </div>
                        <!-- Device mockups -->
                        <div style="display:flex;gap:14px;align-items:center;margin-top:4px;">
                            <!-- Phone mockup -->
                            <div style="flex:0 0 80px;display:flex;flex-direction:column;align-items:center;gap:4px;">
                                <div style="font-size:0.6rem;color:var(--color-text-muted);margin-bottom:2px;">📱 Mobil</div>
                                <div style="width:72px;height:118px;border:2px solid rgba(255,255,255,0.2);border-radius:12px;background:rgba(255,255,255,0.03);padding:5px 4px;display:flex;flex-direction:column;gap:3px;box-sizing:border-box;">
                                    <div style="width:24px;height:4px;border-radius:2px;background:rgba(255,255,255,0.15);margin:0 auto 3px;flex-shrink:0;"></div>
                                    <div style="width:100%;height:7px;border-radius:3px;background:rgba(212, 255, 0,0.45);flex-shrink:0;"></div>
                                    <div style="width:100%;height:5px;border-radius:3px;background:rgba(255,255,255,0.1);flex-shrink:0;"></div>
                                    <div style="width:85%;height:5px;border-radius:3px;background:rgba(255,255,255,0.07);flex-shrink:0;"></div>
                                    <div style="width:100%;flex:1;border-radius:4px;background:rgba(2, 184, 204,0.1);border:1px solid rgba(2, 184, 204,0.2);"></div>
                                    <div style="width:100%;height:5px;border-radius:3px;background:rgba(255,255,255,0.1);flex-shrink:0;"></div>
                                    <div style="width:50%;height:7px;border-radius:4px;background:rgba(212, 255, 0,0.3);border:1px solid rgba(212, 255, 0,0.4);margin:0 auto;flex-shrink:0;"></div>
                                </div>
                            </div>
                            <!-- Desktop mockup -->
                            <div style="flex:0 0 190px;display:flex;flex-direction:column;align-items:center;gap:4px;">
                                <div style="font-size:0.6rem;color:var(--color-primary);margin-bottom:2px;">🖥️ Masaüstü</div>
                                <div style="width:190px;height:118px;border:2px solid rgba(212, 255, 0,0.3);border-radius:8px;background:rgba(212, 255, 0,0.03);overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;">
                                    <!-- Browser bar -->
                                    <div style="height:14px;background:rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;gap:4px;padding:0 6px;flex-shrink:0;">
                                        <div style="width:5px;height:5px;border-radius:50%;background:#ef4444;"></div>
                                        <div style="width:5px;height:5px;border-radius:50%;background:#eab308;"></div>
                                        <div style="width:5px;height:5px;border-radius:50%;background:#22c55e;"></div>
                                        <div style="flex:1;height:5px;background:rgba(255,255,255,0.06);border-radius:3px;margin-left:4px;"></div>
                                    </div>
                                    <!-- Content area -->
                                    <div style="padding:7px;display:flex;flex-direction:column;gap:5px;flex:1;">
                                        <!-- Nav bar -->
                                        <div style="display:flex;gap:4px;align-items:center;flex-shrink:0;">
                                            <div style="width:18px;height:6px;border-radius:3px;background:rgba(212, 255, 0,0.5);"></div>
                                            <div style="flex:1;"></div>
                                            <div style="width:10px;height:4px;border-radius:2px;background:rgba(255,255,255,0.12);"></div>
                                            <div style="width:10px;height:4px;border-radius:2px;background:rgba(255,255,255,0.12);"></div>
                                            <div style="width:10px;height:4px;border-radius:2px;background:rgba(255,255,255,0.12);"></div>
                                        </div>
                                        <!-- 3-column grid -->
                                        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;flex:1;">
                                            <div style="border-radius:4px;background:rgba(212, 255, 0,0.12);border:1px solid rgba(212, 255, 0,0.2);padding:5px;display:flex;flex-direction:column;gap:3px;">
                                                <div style="width:100%;height:16px;border-radius:2px;background:rgba(212, 255, 0,0.2);"></div>
                                                <div style="width:90%;height:3px;border-radius:2px;background:rgba(255,255,255,0.1);"></div>
                                                <div style="width:70%;height:3px;border-radius:2px;background:rgba(255,255,255,0.07);"></div>
                                            </div>
                                            <div style="border-radius:4px;background:rgba(2, 184, 204,0.08);border:1px solid rgba(2, 184, 204,0.18);padding:5px;display:flex;flex-direction:column;gap:3px;">
                                                <div style="width:100%;height:16px;border-radius:2px;background:rgba(2, 184, 204,0.18);"></div>
                                                <div style="width:85%;height:3px;border-radius:2px;background:rgba(255,255,255,0.1);"></div>
                                                <div style="width:65%;height:3px;border-radius:2px;background:rgba(255,255,255,0.07);"></div>
                                            </div>
                                            <div style="border-radius:4px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:5px;display:flex;flex-direction:column;gap:3px;">
                                                <div style="width:100%;height:16px;border-radius:2px;background:rgba(255,255,255,0.08);"></div>
                                                <div style="width:90%;height:3px;border-radius:2px;background:rgba(255,255,255,0.1);"></div>
                                                <div style="width:60%;height:3px;border-radius:2px;background:rgba(255,255,255,0.07);"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },

        // Web Geliştirme Aşamaları — keşiften bakıma
        {
            id: "gelistirme-asamalari",
            category: "Bölüm 4: Modern Web",
            title: "Web Geliştirme Aşamaları",
            html: `
                <p class="vcd-content-intro">Bir web projesi, fikir aşamasından canlı yayına geçene kadar belirli aşamalardan geçer. Tasarımcı sadece görsel kısımda değil, sürecin her aşamasında belirleyici bir rol oynar.</p>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px;">
                    <div class="vcd-glass-card" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">🔍</div>
                        <strong style="font-size:0.82rem;color:var(--color-primary);">1 · Keşif</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Hedef kitle, rakip analizi, içerik haritası.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">📐</div>
                        <strong style="font-size:0.82rem;color:var(--color-primary);">2 · Wireframe</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Renksiz, tipografisiz iskelet çizimleri.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">🎨</div>
                        <strong style="font-size:0.82rem;color:var(--color-primary);">3 · Tasarım</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Figma'da görsel mizanpaj, renk ve tipografi.</p>
                    </div>
                    <div class="vcd-glass-card" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">▶️</div>
                        <strong style="font-size:0.82rem;color:var(--color-primary);">4 · Prototip</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Tıklanabilir akış, etkileşim simülasyonu.</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">💻</div>
                        <strong style="font-size:0.82rem;color:var(--color-secondary);">5 · Kodlama</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">HTML, CSS, JavaScript ile tasarımın hayata geçirilmesi.</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">🧪</div>
                        <strong style="font-size:0.82rem;color:var(--color-secondary);">6 · Test</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Farklı tarayıcı, cihaz ve erişilebilirlik kontrolleri.</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">🚀</div>
                        <strong style="font-size:0.82rem;color:var(--color-secondary);">7 · Yayın</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Domain bağlama, GitHub Pages veya hosting'e deploy.</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:12px;text-align:center;display:flex;flex-direction:column;gap:6px;">
                        <div style="font-size:1.5rem;">🔧</div>
                        <strong style="font-size:0.82rem;color:var(--color-secondary);">8 · Bakım</strong>
                        <p style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">İçerik güncellemeleri, performans iyileştirmeleri, kullanıcı geribildirimi.</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;">
                    <h4>Tasarımcı Rolü</h4>
                    <p>Tasarımcının görevi 3. ve 4. aşamada bitmez. <strong>Kodlama</strong> sırasında geliştiriciye sistem rehberi sunmak, <strong>test</strong> sürecinde piksel-mükemmel kalite kontrolü yapmak ve <strong>bakım</strong>ta marka tutarlılığını korumak da işin parçasıdır.</p>
                </div>
            `
        },

        // VS Code Kurulumu
        {
            id: "vscode-kurulum",
            category: "Bölüm 5: Çalışma Alanı",
            title: "Visual Studio Code Kurulumu",
            html: `
                <div class="vcd-grid-2-1" style="align-items: start; margin-bottom: 14px;">
                    <div>
                        <p style="margin-bottom: 12px;">Web tasarımı kodlarımızı yazmak ve dosyalarımızı düzenlemek için sektör standardı olan kod editörü <strong>Visual Studio Code (VS Code)</strong>'u kullanacağız.</p>
                        <p style="margin-bottom: 16px; font-size: 0.95rem; color: var(--color-text-secondary);">Ücretsiz ve zengin genişletilebilir yapısıyla tasarımcılara kolaylık sağlar.</p>
                        <ul class="vcd-bullet-list">
                            <li><strong>Çapraz Platform:</strong> macOS ve Windows ile tam uyumludur.</li>
                            <li><strong>Dosya Yönetimi:</strong> Proje dosyalarını klasör yapısında kolayca takip etmenizi sağlar.</li>
                            <li><strong>Temiz Arayüz:</strong> Yazım hatalarını anında vurgulayarak hatayı en aza indirir.</li>
                        </ul>
                    </div>
                    <div class="vcd-glass-card primary" style="text-align: center; padding: 18px 14px;">
                        <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto 10px;">
                            <rect width="42" height="42" rx="9" fill="#007ACC"/>
                            <path d="M29 8L16.5 20 8 13.5 5 16.5 14.5 24.5 5 32.5l3 3 8.5-6.5L29 41l5-2.5V10.5L29 8zm0 24.5l-8.5-8 8.5-8v16z" fill="white"/>
                        </svg>
                        <div style="font-size:0.82rem;font-weight:600;margin-bottom:10px;">VS Code</div>
                        <a href="https://code.visualstudio.com/" target="_blank" class="sim-btn" style="text-decoration:none;font-size:0.72rem;padding:5px 10px;display:inline-block;">code.visualstudio.com ↗</a>
                    </div>
                </div>
                <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:11px;display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;">
                    <div style="display:flex;align-items:baseline;gap:8px;">
                        <span style="font-size:0.68rem;color:var(--color-text-muted);white-space:nowrap;flex-shrink:0;">Masaüstü</span>
                        <div style="display:flex;gap:5px;flex-wrap:wrap;">
                            <a href="https://www.sublimetext.com" target="_blank" style="font-size:0.68rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 7px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">Sublime Text ↗</a>
                            <a href="https://cursor.com" target="_blank" style="font-size:0.68rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 7px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">Cursor ↗</a>
                            <a href="https://www.jetbrains.com/webstorm/" target="_blank" style="font-size:0.68rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 7px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">WebStorm ↗</a>
                        </div>
                    </div>
                    <div style="display:flex;align-items:baseline;gap:8px;">
                        <span style="font-size:0.68rem;color:var(--color-text-muted);white-space:nowrap;flex-shrink:0;">Web tabanlı</span>
                        <div style="display:flex;gap:5px;flex-wrap:wrap;">
                            <a href="https://codepen.io" target="_blank" style="font-size:0.68rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 7px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">CodePen ↗</a>
                            <a href="https://stackblitz.com" target="_blank" style="font-size:0.68rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 7px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">StackBlitz ↗</a>
                            <a href="https://codesandbox.io" target="_blank" style="font-size:0.68rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 7px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">CodeSandbox ↗</a>
                        </div>
                    </div>
                </div>
            `
        },

        // Slide 20: VS Code Eklentileri (Standard)
        {
            id: "vscode-eklentiler",
            category: "Bölüm 5: Çalışma Alanı",
            title: "VS Code Eklentileri (Extensions)",
            html: `
                <p class="vcd-content-intro" style="margin-bottom: 12px;"><strong>Zorunlu</strong> olanları kursa başlamadan önce yükleyin.</p>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">

                    <div class="vcd-glass-card" style="padding:10px 12px;gap:5px;">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;">
                            <strong style="font-size:0.84rem;">🚀 Live Server</strong>
                            <span style="font-size:0.6rem;padding:2px 6px;border-radius:4px;background:rgba(212, 255, 0,0.15);color:var(--color-primary);font-weight:600;">Zorunlu</span>
                        </div>
                        <p style="font-size:0.76rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Dosyayı kaydedince tarayıcı otomatik yenilenir, F5'e gerek kalmaz.</p>
                    </div>

                    <div class="vcd-glass-card" style="padding:10px 12px;gap:5px;">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;">
                            <strong style="font-size:0.84rem;">🏷️ Auto Rename Tag</strong>
                            <span style="font-size:0.6rem;padding:2px 6px;border-radius:4px;background:rgba(212, 255, 0,0.15);color:var(--color-primary);font-weight:600;">Zorunlu</span>
                        </div>
                        <p style="font-size:0.76rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Açılış etiketini değiştirince kapanış etiketi de otomatik güncellenir.</p>
                    </div>

                    <div class="vcd-glass-card" style="padding:10px 12px;gap:5px;">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;">
                            <strong style="font-size:0.84rem;">🎨 Prettier</strong>
                            <span style="font-size:0.6rem;padding:2px 6px;border-radius:4px;background:rgba(212, 255, 0,0.15);color:var(--color-primary);font-weight:600;">Zorunlu</span>
                        </div>
                        <p style="font-size:0.76rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Kaydettiğinizde girintiler ve satır biçimi otomatik düzenlenir.</p>
                    </div>

                    <div class="vcd-glass-card" style="padding:10px 12px;gap:5px;">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;">
                            <strong style="font-size:0.84rem;">🌈 Indent Rainbow</strong>
                            <span style="font-size:0.6rem;padding:2px 6px;border-radius:4px;background:rgba(255,255,255,0.06);color:var(--color-text-muted);font-weight:600;">Opsiyonel</span>
                        </div>
                        <p style="font-size:0.76rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Her girinti seviyesini farklı renkle boyar — iç içe etiketlerde hiyerarşiyi görmeyi kolaylaştırır.</p>
                    </div>

                    <div class="vcd-glass-card" style="padding:10px 12px;gap:5px;">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;">
                            <strong style="font-size:0.84rem;">🎨 Color Highlight</strong>
                            <span style="font-size:0.6rem;padding:2px 6px;border-radius:4px;background:rgba(255,255,255,0.06);color:var(--color-text-muted);font-weight:600;">Opsiyonel</span>
                        </div>
                        <p style="font-size:0.76rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">CSS'teki HEX/RGB renk kodlarının arka planını ilgili renkle boyar.</p>
                    </div>

                    <div class="vcd-glass-card" style="padding:10px 12px;gap:5px;">
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;">
                            <strong style="font-size:0.84rem;">📂 Material Icon Theme</strong>
                            <span style="font-size:0.6rem;padding:2px 6px;border-radius:4px;background:rgba(255,255,255,0.06);color:var(--color-text-muted);font-weight:600;">Opsiyonel</span>
                        </div>
                        <p style="font-size:0.76rem;color:var(--color-text-secondary);line-height:1.45;margin:0;">Dosya türlerine göre ayırt edici ikonlar ekler, klasör yapısını okumayı hızlandırır.</p>
                    </div>

                </div>
                <div style="border-left:2px solid var(--color-primary);border-radius:0 6px 6px 0;padding:8px 12px;background:rgba(212, 255, 0,0.05);font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;">
                    Eklentileri yüklemek için:
                    <kbd style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:1px 5px;font-family:monospace;font-size:0.72rem;">Cmd⇧X</kbd> (Mac) &nbsp;/&nbsp;
                    <kbd style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:1px 5px;font-family:monospace;font-size:0.72rem;">Ctrl+Shift+X</kbd> (Windows)
                    &nbsp;→ arama kutusuna ismi yazın → <strong>Install</strong>
                </div>
            `
        },

        // Sürüm Kontrolü ve GitHub
        {
            id: "github-giris",
            category: "Bölüm 6: Sürüm Kontrolü",
            title: "GitHub",
            html: `
                <div class="vcd-grid-2-1" style="align-items: start;">
                    <div>
                        <p style="margin-bottom: 12px;">Tasarım dosyalarının yedeklenmesi, değişikliklerin geriye dönük kaydedilmesi ve çalışmaların paylaşılması için <strong>GitHub</strong> kullanılır.</p>
                        <ul class="vcd-bullet-list">
                            <li><strong>Versiyon Kontrolü:</strong> Her ilerleme bir kayıt noktası (<em>Commit</em>) olarak saklanır. Hata durumunda önceki çalışan sürüme tek tıkla dönülebilir.</li>
                            <li><strong>Açık Portfolyo:</strong> GitHub profiliniz, ne üzerinde çalıştığınızı ve kod düzeninizi gösteren bir iş klasörüdür. Ajanslar ve ekipler bu profili inceler. <a href="https://github.com/emremutlu" target="_blank" style="font-size:0.8rem;color:var(--color-primary);text-decoration:none;">Örnek profil ↗</a></li>
                            <li><strong>Ders Kapsamı:</strong> Ürettiğiniz çalışmaları bu platform üzerinden takip edeceğiz.</li>
                        </ul>
                        <div style="border-left:2px solid var(--color-secondary);border-radius:0 6px 6px 0;padding:8px 12px;background:rgba(2, 184, 204,0.05);font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;margin-top:12px;">
                            İlerleyen haftalarda kodları sunucuya yüklemek için <strong>VS Code'un yerleşik Git arayüzü</strong> ya da <strong>GitHub Desktop</strong> kullanılabilir — her ikisi de komut satırı gerektirmez.
                        </div>
                    </div>
                    <div class="vcd-glass-card secondary" style="text-align: center; padding: 18px 14px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" style="display:block;margin:0 auto 10px;fill:currentColor;">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <div style="font-size:0.82rem;font-weight:600;margin-bottom:10px;">GitHub Hesabı</div>
                        <p style="font-size:0.78rem;line-height:1.45;color:var(--color-text-secondary);margin-bottom:12px;">Öğrenci avantajları için <code style="font-size:0.75rem;">.edu.tr</code> e-postasıyla kayıt olun.</p>
                        <a href="https://github.com/" target="_blank" class="sim-btn" style="text-decoration:none;font-size:0.72rem;padding:5px 10px;display:inline-block;">github.com ↗</a>
                    </div>
                </div>
            `
        },

        // GitHub Pages: Siteyi Yayına Al
        {
            id: "github-pages",
            category: "Bölüm 6: Sürüm Kontrolü",
            title: "GitHub Pages: Siteyi Yayına Al",
            html: `
                <div style="display: flex; flex-direction: column; gap: 14px; height: 100%;">
                    <div style="display: flex; gap: 20px; align-items: flex-start;">
                        <div style="flex: 1;">
                            <p class="vcd-content-intro" style="margin-bottom: 12px;">
                                GitHub Pages, bir repository'deki HTML/CSS/JS dosyalarını ücretsiz olarak web'e yayınlar. Sunucu kurulumu, hosting ücreti, domain satın alma yok.
                            </p>
                            <ul class="vcd-bullet-list">
                                <li><strong>Adres formatı:</strong> <code style="font-size:0.78rem;">kullaniciadi.github.io/proje-adi</code> şeklinde otomatik URL atanır.</li>
                                <li><strong>Aktifleştirmek için:</strong> Repository → Settings → Pages → Branch seç → Save. Birkaç dakika içinde site canlıya geçer.</li>
                                <li><strong>Güncelleme:</strong> Dosyayı kaydet, commit et — sayfa otomatik güncellenir. Ayrıca bir adım atmaya gerek yok.</li>
                            </ul>
                        </div>
                        <div style="border-left:2px solid var(--color-secondary);border-radius:0 6px 6px 0;padding:8px 12px;background:rgba(2, 184, 204,0.05);font-size:0.78rem;color:var(--color-text-secondary);line-height:1.5;flex:0 0 220px;">
                            Ders ödevlerinizi GitHub Pages üzerinden yayınlayacaksınız. Linki paylaşarak çalışmanızı herkese gösterebilirsiniz.
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: stretch;">
                        <div class="vcd-glass-card" style="padding: 14px; display: flex; flex-direction: row; gap: 20px; align-items: center;">
                            <div style="display:flex;align-items:flex-start;gap:10px;flex:1;">
                                <span style="width:22px;height:22px;border-radius:50%;background:var(--color-primary);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:1px;">1</span>
                                <span style="font-size:0.8rem;color:var(--color-text-secondary);line-height:1.4;">GitHub'da yeni bir <strong>repository</strong> oluştur ve HTML dosyalarını yükle</span>
                            </div>
                            <div style="width:1px;height:100%;background:rgba(255,255,255,0.06);flex-shrink:0;"></div>
                            <div style="display:flex;align-items:flex-start;gap:10px;flex:1;">
                                <span style="width:22px;height:22px;border-radius:50%;background:var(--color-secondary);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:1px;">2</span>
                                <span style="font-size:0.8rem;color:var(--color-text-secondary);line-height:1.4;">Settings → Pages → Branch: <code style="font-size:0.76rem;">main</code> → Save</span>
                            </div>
                            <div style="width:1px;height:100%;background:rgba(255,255,255,0.06);flex-shrink:0;"></div>
                            <div style="display:flex;align-items:flex-start;gap:10px;flex:1;">
                                <span style="width:22px;height:22px;border-radius:50%;background:var(--color-primary);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:1px;">3</span>
                                <span style="font-size:0.8rem;color:var(--color-text-secondary);line-height:1.4;">Birkaç dakika bekle — site <code style="font-size:0.76rem;">kullaniciadi.github.io/repo</code> adresinde hazır!</span>
                            </div>
                        </div>
                        <div class="vcd-glass-card secondary" style="padding: 14px 18px; text-align: center; display:flex;flex-direction:column;justify-content:center;gap:4px;flex-shrink:0;">
                            <div style="font-size:0.68rem;color:var(--color-text-muted);">Örnek adres</div>
                            <code style="font-size:0.8rem;color:var(--color-secondary);white-space:nowrap;">emremutlu.github.io/portfolio</code>
                        </div>
                    </div>
                </div>
            `
        },

        // Web Tasarımı ve Yapay Zeka
        {
            id: "yapay-zeka-ai",
            category: "Bölüm 7: Yapay Zeka",
            title: "Web Tasarımı ve Yapay Zeka",
            html: `
                <div style="display: flex; flex-direction: column; gap: 12px; height: 100%;">
                    <p class="vcd-content-intro" style="margin: 0;">AI araçları tasarımları hızla koda dönüştürür — ancak bu, temel kod bilgisinin önemini azaltmaz; aksine artırır. Aracı yönlendirebilmek ve çıktısını denetleyebilmek için yapıyı anlamak gerekir.</p>
                    <div class="vcd-grid-2" style="flex: 1;">
                        <div class="vcd-glass-card primary" style="display:flex;flex-direction:column;gap:8px;">
                            <strong style="color: var(--color-primary); font-size: 0.95rem; display: block;">1. Yönlendirme (Prompting)</strong>
                            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.55; margin: 0;">
                                AI'dan kullanılabilir bir çıktı alabilmek için HTML/CSS terminolojisini bilmek gerekir. Yapıyı bilmeden verilen komutlar jenerik arayüzler üretir — özgün bir tasarım dili oluşturmak mümkün olmaz.
                            </p>
                            <div style="border-left:2px solid rgba(212, 255, 0,0.4);padding:6px 10px;background:rgba(212, 255, 0,0.06);border-radius:0 5px 5px 0;font-size:0.75rem;color:var(--color-text-secondary);line-height:1.5;margin-top:auto;">
                                <strong style="color:var(--color-primary);">Örnek:</strong> "Flexbox kullanarak masaüstünde yan yana, mobilde alt alta dizilen 3 kartlı bir grid yap" — bu komutu verebilmek için flexbox'ı bilmek gerekir.
                            </div>
                        </div>
                        <div class="vcd-glass-card secondary" style="display:flex;flex-direction:column;gap:8px;">
                            <strong style="color: var(--color-secondary); font-size: 0.95rem; display: block;">2. Hata Ayıklama (Debugging)</strong>
                            <p style="font-size: 0.82rem; color: var(--color-text-secondary); line-height: 1.55; margin: 0;">
                                AI kodlarında görsel kaymalar, hizalama bozuklukları ve responsive sorunlar sıkça çıkar. Hatanın kutu modelinden mi, hiyerarşiden mi yoksa CSS çakışmasından mı kaynaklandığını anlayan tasarımcı süreci kontrol altında tutar.
                            </p>
                            <div style="border-left:2px solid rgba(2, 184, 204,0.4);padding:6px 10px;background:rgba(2, 184, 204,0.06);border-radius:0 5px 5px 0;font-size:0.75rem;color:var(--color-text-secondary);line-height:1.5;margin-top:auto;">
                                <strong style="color:var(--color-secondary);">Senaryo:</strong> AI bir button'ı yanlış konumlandırdı. "Neden?" diye sorduğunuzda — <code style="font-size:0.72rem;">position: absolute</code> ve parent'ın <code style="font-size:0.72rem;">position: relative</code> olmadığı cevabını anlayabilmek gerekir.
                            </div>
                        </div>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <div class="vcd-glass-card" style="padding:10px 14px;display:flex;align-items:flex-start;gap:10px;">
                            <span style="font-size:1rem;flex-shrink:0;margin-top:1px;">🎨</span>
                            <div>
                                <div style="font-size:0.78rem;font-weight:600;margin-bottom:3px;">Tasarım → Kod</div>
                                <div style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;">v0, Figma AI ve Locofy gibi araçlar Figma tasarımlarını doğrudan HTML/CSS'e aktarır. Çıktıyı temizlemek için kod bilgisi şarttır.</div>
                            </div>
                        </div>
                        <div class="vcd-glass-card" style="padding:10px 14px;display:flex;align-items:flex-start;gap:10px;">
                            <span style="font-size:1rem;flex-shrink:0;margin-top:1px;">⚡</span>
                            <div>
                                <div style="font-size:0.78rem;font-weight:600;margin-bottom:3px;">Kod Asistanı</div>
                                <div style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.45;">Cursor ve GitHub Copilot editörün içinde öneride bulunur — doğru öneriyi seçip hatalı olanı reddetmek için ne yazdığını anlamak gerekir.</div>
                            </div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; display: flex; flex-wrap: wrap; align-items: center; gap: 5px;">
                        <span style="font-size: 0.69rem; color: var(--color-text-muted); flex-shrink: 0;">Araçlar:</span>
                        <a href="https://v0.dev" target="_blank" style="font-size:0.69rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 8px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">v0 ↗</a>
                        <a href="https://github.com/features/copilot" target="_blank" style="font-size:0.69rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 8px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">GitHub Copilot ↗</a>
                        <a href="https://chatgpt.com" target="_blank" style="font-size:0.69rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 8px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">ChatGPT ↗</a>
                        <a href="https://cursor.com" target="_blank" style="font-size:0.69rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 8px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">Cursor ↗</a>
                        <a href="https://www.figma.com/ai/" target="_blank" style="font-size:0.69rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 8px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">Figma AI ↗</a>
                        <a href="https://claude.ai" target="_blank" style="font-size:0.69rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 8px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">Claude ↗</a>
                        <a href="https://locofy.ai" target="_blank" style="font-size:0.69rem;color:var(--color-text-secondary);text-decoration:none;padding:2px 8px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;">Locofy ↗</a>
                    </div>
                </div>
            `
        },

        // Önümüzdeki Yol — kavramsal genel bakıştan uygulamalı seriye köprü
        {
            id: "yol-haritasi",
            category: "Yol Haritası",
            title: "Önümüzdeki 8 Ders: Sıfırdan Canlı Siteye",
            html: `
                <p class="vcd-content-intro">Bu genel bakışta web'in büyük resmini gördük: nasıl çalışır, nereden geldi, hangi katmanlardan oluşur. Şimdi sıra <strong style="color:var(--color-text-primary);">elimizi kirletmekte</strong>. Önümüzdeki 8 derste adım adım kendi sitenizi kuracağız — her ders bir öncekinin üzerine biner.</p>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px;">
                    <div class="vcd-glass-card primary" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(212, 255, 0,0.18);border:1px solid rgba(212, 255, 0,0.35);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-primary);">1</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">HTML Temelleri</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;">İlk etiketler, ilk sayfa</p>
                    </div>
                    <div class="vcd-glass-card primary" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(212, 255, 0,0.18);border:1px solid rgba(212, 255, 0,0.35);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-primary);">2</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">Yapı + Semantic</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;">Anlamlı iskelet kurmak</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(2, 184, 204,0.18);border:1px solid rgba(2, 184, 204,0.35);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-secondary);">3</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">CSS Temelleri</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;">Renk, seçici, ilk stiller</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(2, 184, 204,0.18);border:1px solid rgba(2, 184, 204,0.35);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-secondary);">4</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">Tipografi + Renk</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;">Yazı tonu ve palet</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(2, 184, 204,0.18);border:1px solid rgba(2, 184, 204,0.35);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-secondary);">5</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">Box Model + Boşluk</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;">Hizalama ve nefes alanı</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(2, 184, 204,0.18);border:1px solid rgba(2, 184, 204,0.35);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-secondary);">6</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">Flexbox</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;">Esnek dizilim</p>
                    </div>
                    <div class="vcd-glass-card secondary" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(2, 184, 204,0.18);border:1px solid rgba(2, 184, 204,0.35);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-secondary);">7</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">Grid + Responsive</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;">Tüm ekranlara uyum</p>
                    </div>
                    <div class="vcd-glass-card accent" style="padding:11px 13px;display:flex;flex-direction:column;gap:5px;">
                        <div style="display:flex;align-items:center;gap:8px;"><span style="width:22px;height:22px;border-radius:7px;background:rgba(139, 92, 246,0.18);border:1px solid rgba(139, 92, 246,0.4);display:flex;align-items:center;justify-content:center;font-size:0.72rem;font-weight:700;flex-shrink:0;color:var(--color-accent);">8</span><strong style="font-size:0.79rem;color:var(--color-text-primary);line-height:1.15;">Portfolyo + Yayın</strong></div>
                        <p style="font-size:0.7rem;color:var(--color-text-secondary);line-height:1.4;margin:0;"><strong style="color:var(--color-accent);">FİNAL:</strong> canlı site</p>
                    </div>
                </div>
                <div class="vcd-analogy-box" style="margin-top:14px;border-left-color:var(--color-accent);background:rgba(139, 92, 246,0.05);">
                    <h4 style="color:var(--color-accent);">Dönem Sonu Hedefi</h4>
                    <p>Ders 8'in sonunda elinizde <strong style="color:var(--color-text-primary);">yayında</strong>, kendi adınızı taşıyan, telefonda ve bilgisayarda düzgün görünen bir <strong>portfolyo siteniz</strong> olacak. Bugün gördüğünüz her "→ ileride" işareti, bu derslerden birine işaret ediyordu.</p>
                </div>
            `
        },

        // Haftalık Gözlem Görevi
        {
            id: "haftalik-odev",
            category: "Bölüm 8: Ödev",
            title: "Haftalık Ödev: Bir Siteyi Tasarımcı Gözüyle Oku",
            html: `
                <div class="vcd-grid-2">
                    <!-- Sol Sütun: Uygulama Adımları ve Teslim Bilgileri -->
                    <div style="display:flex;flex-direction:column;gap:12px;">
                        <p class="vcd-content-intro" style="margin-bottom: 4px;">
                            Bu görevde, sevdiğiniz veya sık ziyaret ettiğiniz bir web sitesini <strong>tasarımcı gözüyle</strong> inceleyerek ilk arayüz çözümleme raporunuzu hazırlayacaksınız.
                        </p>
                        
                        <div style="display:flex;flex-direction:column;gap:10px;">
                            <!-- Adım 1 -->
                            <div style="display:flex;gap:12px;align-items:flex-start;">
                                <div style="width:24px;height:24px;border-radius:50%;background:rgba(212, 255, 0,0.15);border:1px solid rgba(212, 255, 0,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.7rem;font-weight:700;color:var(--color-primary);margin-top:2px;">1</div>
                                <div>
                                    <h4 style="font-size:0.8rem;font-weight:600;margin-bottom:2px;color:var(--color-text-primary);">Site Seçimi</h4>
                                    <p style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.45;">İncelemek istediğiniz herhangi bir sektöre ait (e-ticaret, haber, portfolyo vb.) özgün bir web sitesi belirleyin.</p>
                                </div>
                            </div>
                            
                            <!-- Adım 2 -->
                            <div style="display:flex;gap:12px;align-items:flex-start;">
                                <div style="width:24px;height:24px;border-radius:50%;background:rgba(212, 255, 0,0.15);border:1px solid rgba(212, 255, 0,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.7rem;font-weight:700;color:var(--color-primary);margin-top:2px;">2</div>
                                <div>
                                    <h4 style="font-size:0.8rem;font-weight:600;margin-bottom:2px;color:var(--color-text-primary);">Arayüzü Belgeleme</h4>
                                    <p style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.45;">Sitenin hem masaüstü hem de mobil (tarayıcı simülasyonu kullanarak) tam boy ekran görüntülerini kaydedin.</p>
                                </div>
                            </div>
                            
                            <!-- Adım 3 -->
                            <div style="display:flex;gap:12px;align-items:flex-start;">
                                <div style="width:24px;height:24px;border-radius:50%;background:rgba(212, 255, 0,0.15);border:1px solid rgba(212, 255, 0,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.7rem;font-weight:700;color:var(--color-primary);margin-top:2px;">3</div>
                                <div>
                                    <h4 style="font-size:0.8rem;font-weight:600;margin-bottom:2px;color:var(--color-text-primary);">Eleştirel Çözümleme</h4>
                                    <p style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.45;">Sağ taraftaki üç temel analiz kriterine yanıt veren, her biri 2-3 cümleden oluşan bir değerlendirme yazısı hazırlayın.</p>
                                </div>
                            </div>

                            <!-- Adım 4 -->
                            <div style="display:flex;gap:12px;align-items:flex-start;">
                                <div style="width:24px;height:24px;border-radius:50%;background:rgba(212, 255, 0,0.15);border:1px solid rgba(212, 255, 0,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.7rem;font-weight:700;color:var(--color-primary);margin-top:2px;">4</div>
                                <div>
                                    <h4 style="font-size:0.8rem;font-weight:600;margin-bottom:2px;color:var(--color-text-primary);">Raporu PDF'e Dönüştürme</h4>
                                    <p style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.45;">Ekran görüntüleri ve hazırladığınız analiz metnini tek bir PDF belgesinde birleştirin.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Teslimat & Süre Bilgileri -->
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;">
                            <div style="background:rgba(2, 184, 204,0.04);border:1px solid rgba(2, 184, 204,0.15);border-radius:8px;padding:8px 12px;">
                                <div style="font-size:0.6rem;color:var(--color-secondary);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;font-weight:700;">📄 Gönderim</div>
                                <div style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.4;">Dosyayı <strong style="color:var(--color-text-primary);">UZAK</strong> sistemi üzerinden yükleyin.</div>
                            </div>
                            <div style="background:rgba(139, 92, 246,0.04);border:1px solid rgba(139, 92, 246,0.15);border-radius:8px;padding:8px 12px;">
                                <div style="font-size:0.6rem;color:var(--color-accent);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;font-weight:700;">⏰ Süre</div>
                                <div style="font-size:0.74rem;color:var(--color-text-secondary);line-height:1.4;">Bir sonraki <strong style="color:var(--color-text-primary);">ders saatine kadar</strong>.</div>
                            </div>
                        </div>
                    </div>

                    <!-- Sağ Sütun: Analiz Kriterleri ve Örnek Çözümleme -->
                    <div class="vcd-glass-card" style="padding:18px;display:flex;flex-direction:column;gap:12px;justify-content:space-between;height:100%;">
                        <div style="display:flex;flex-direction:column;gap:10px;">
                            <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;">
                                <span style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--color-text-muted);font-weight:700;">3 Temel Analiz Kriteri</span>
                                <div style="height:1px;flex:1;background:rgba(255,255,255,0.06);"></div>
                            </div>
                            
                            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
                                <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.74rem;color:var(--color-text-secondary);line-height:1.45;">
                                    <span style="flex-shrink:0;width:18px;height:18px;border-radius:4px;background:rgba(2, 184, 204,0.15);color:var(--color-secondary);font-size:0.6rem;font-weight:700;display:flex;align-items:center;justify-content:center;margin-top:1px;">A</span>
                                    <span><strong>Duyarlı Tasarım (Responsive Layout):</strong> Ekran boyutu değiştiğinde yerleşimde (menü, butonlar, grid yapısı) ne tür yapısal dönüşümler yapılmış?</span>
                                </li>
                                <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.74rem;color:var(--color-text-secondary);line-height:1.45;">
                                    <span style="flex-shrink:0;width:18px;height:18px;border-radius:4px;background:rgba(2, 184, 204,0.15);color:var(--color-secondary);font-size:0.6rem;font-weight:700;display:flex;align-items:center;justify-content:center;margin-top:1px;">B</span>
                                    <span><strong>Görsel Hiyerarşi (Visual Hierarchy):</strong> Sayfadaki en baskın ögeler hangileri? Tasarım ilk 5 saniyede odağınızı nereye çekmeye çalışıyor?</span>
                                </li>
                                <li style="display:flex;gap:10px;align-items:flex-start;font-size:0.74rem;color:var(--color-text-secondary);line-height:1.45;">
                                    <span style="flex-shrink:0;width:18px;height:18px;border-radius:4px;background:rgba(2, 184, 204,0.15);color:var(--color-secondary);font-size:0.6rem;font-weight:700;display:flex;align-items:center;justify-content:center;margin-top:1px;">C</span>
                                    <span><strong>Arayüz Dili ve Ton (UI Tone):</strong> Renkler, yazı tipleri (serif/sans-serif) ve formlar kullanıcıda nasıl bir duygu (lüks, ciddiyet vb.) uyandırıyor?</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Örnek Çözümleme Cümlesi -->
                        <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:10px;margin-top:4px;">
                            <div style="font-size:0.62rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:6px;font-weight:700;">Örnek Çözümleme Cümlesi</div>
                            <div style="font-size:0.72rem;color:var(--color-text-secondary);line-height:1.5;font-style:italic;background:rgba(212, 255, 0,0.03);border-left:2px solid var(--color-primary);padding:8px 12px;border-radius:0 6px 6px 0;">
                                "Apple web sitesi masaüstünde 3 sütunlu bir grid sunarken mobilde tek sütuna iniyor. Yatay menü elemanları hamburger ikona dönüştürülmüş. Büyük boy başlıklar ve sans-serif yazı tipi ailesi markanın yalın, teknolojik ve prestij odaklı kimliğini vurguluyor."
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    ]
};
