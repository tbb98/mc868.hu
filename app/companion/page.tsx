"use client";

import React from "react";

export default function MeshCoreSetupPage() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)] bg-transparent">
      <main className="flex flex-col gap-6 items-center w-full">

        <section className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Companion (Kliens) — röviden</h2>
          <div className="space-y-3">
            <p>
              A companion node leszel te a mesh-en. Egyedi kulccsal, Bluetooth-on / USB-n rákapcsolódva. A companion node nem ismétel — szüksége van elérhető repeaterre, hogy tudj vele üzenni.
            </p>
            <p>Két companion hallótávolságon belül tud repeaterek nélkül is beszélgetni.</p>

            <h3 className="font-bold mt-4">Rövid leírás a feltétlen szükséges dolgokról:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>EU/UK Narrow rádióbeállításokat használunk.</li>
              <li>A csatornákra advert nélkül is írhatsz.</li>
              <li>
                Ahhoz hogy valakivel közvetlen tudj beszélgetni neked is és neki is advertelnie kell hogy publikus kulcsot cseréljetek. Enélkül nem tudsz ráírni másra és ő sem rád.
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    <strong>Flood advert:</strong> az egész mesh megkapja a kulcsodat, minden repeater ismétli.
                  </li>
                  <li>
                    <strong>Zero Hop advert:</strong> csak azok kapják meg a kulcsod akik közvetlen hallják a companion-odat.
                  </li>
                </ul>
              </li>
              <li>A mesh átnyúlik Szlovákiába és Ausztriába, így a Public csatornán főképp angolul beszélgetünk.</li>
              <li>
                Hasznos csatornák (hashtag channelek, nem kell külön kód hozzájuk):
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li><strong>#hungary</strong> - magyaroknak magyarul</li>
                  <li><strong>#ping</strong> - botok gyűjtőhelye; a "Ping" szó beírására válaszolnak, hány hoppon át vették az üzeneted</li>
                  <li><strong>#slovakia</strong> - szlovákok csatornája</li>
                  <li><strong>#austria</strong> - osztrákok csatornája</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

       

      </main>
    </div>
  );
}
