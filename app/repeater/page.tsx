"use client";

import React from "react";

export default function MeshCoreSetupPage() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)] bg-transparent">
      <main className="flex flex-col gap-6 items-center w-full">

         <section className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Repeater (Bázisállomás) — röviden</h2>
          <p>
            A Repeater node-ra nem lehet kapcsolódni Bluetooth-al vagy WiFivel, csak USB-n. Egyetlen dolga van: ismételni a fogadott csomagokat. Minden repeater egyszer ismétel minden csomagot, amit még nem ismételt.
          </p>

          <div className="mt-4 bg-orange-500 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-bold text-red-900 mb-2">FONTOS</h3>
            <div className="space-y-2 text-black font-semibold">
              <p>Ha repeatert csinálsz, a kulcsod első két karaktere fogja azonosítani.</p>
              <p>Mivel ez véges számú azonosító, előfordulhat, hogy már létezik ilyen azonosító a meshen.</p>
              <p>Mindenkinek egyedi azonosítót kell beállítania, hogy ne legyen ütközés.</p>
              <p>
                A <a href="https://map.mc868.hu/" target="_blank" rel="noreferrer" className="text-yellow-500 underline">map.mc868.hu</a> jobb felső sarkában találsz egy
                <span className="whitespace-pre"> </span>
                <a href="https://map.mc868.hu/config/repeater-setup.html" target="_blank" rel="noreferrer" className="text-yellow-500 underline">Repeater Setup</a>
                <span className="whitespace-pre"> </span>
                gombot — a repeatered USB-n rádugva ezzel az oldallal szinte mindent beállíthatsz rajta.
              </p>
              <p>
                A Private / Public Key résznél válaszd az <em>Auto-choose non-colliding</em> gombot, majd <em>Generate</em> és <em>Save &amp; Set</em>, így olyan kulcsot kapsz, amit valószínűleg még senki sem használ.
              </p>
            </div>
          </div>
        </section>

        <section className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Gyors beállítási lista</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>MeshCore kompatibilis eszköz beszerzése</strong> (pl. Heltec v3, SeeedStudio T1000-E, Wio Tracker L1 Pro, Xiao ESP/nRF Wio, RAK WisMesh Tag).</li>
            <li><strong>MeshCore telepítése</strong> a hivatalos Web Flasherrel. Első telepítésnél érdemes "Erase Flash"-el kezdeni.</li>
            <li><strong>A telefonos alkalmazás telepítése</strong> (Google Play / App Store).</li>
            <li><strong>Rádió paraméterek beállítása</strong> — Frekvencia, Spreading Factor, Coding Rate (Preset segít egyszerre beállítani ezeket).</li>
            <li><strong>Advert</strong> küldése a publikus kulcsoddal, ha szeretnél látszani a hálózaton (Flood vagy Zero-Hop).</li>
          </ul>
        </section>

       

      </main>
    </div>
  );
}
