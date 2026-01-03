"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (
    
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <div className="list-inside list-decimal text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            Üdvözlünk a magyar MeshCore közösség weboldalán.
        </div>




        <div className="grid grid-cols-2 gap-4">
              <a href="https://t.me/+63o5qlHPrl1iNjc0" target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-500 text-white font-bold py-4 px-4 rounded w-full">
                  Telegram csoport
                </button>
              </a>

              <a href="https://www.facebook.com/groups/421299027712536" target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-500 text-white font-bold py-4 px-4 rounded w-full">
                  Facebook csoport
                </button>
              </a>

              <a href="https://meshcore.co.uk" target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
                  Hivatalos oldal
                </button>
              </a>


              <a href="https://map.mc868.hu/" target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
                  HU/SK/AT mesh térkép
                </button>
              </a>
        </div>










      <div className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Mi az a MeshCore?</h2>
          <p className="mt-2">
            A <strong>MeshCore</strong> egy nyílt forráskódú, LoRa-alapú decentralizált kommunikációs rendszer, amely lehetővé teszi az internetkapcsolat nélküli üzenetküldést. A rendszer bázisállomásokon (Repeater) keresztül működik, és ideális olyan helyzetekben, ahol nincs hagyományos hálózati infrastruktúra.
          </p>
          <p>
            (Például túrázás, katasztrófaelhárítás vagy közösségi mesh hálózatok kiépítése esetén.)
          </p>
          
          <h3 className="mt-4 font-bold">MeshCore firmware fajtái:</h3>

          <ul className="list-disc pl-5 space-y-4">
           <li>
              <strong>Companion (Kliens)</strong> – Egy kliens módú eszköz, amely önmagában nem továbbítja az üzeneteket a hálózatba. Csak azokhoz az eszközökhöz tud üzenetet küldeni, amelyeket közvetlenül elér (például egy másik Companionhoz vagy egy Repeaterhez). Az közvetlen üzenetküldés útválasztásának köszönhetően nagy (akár 64 hop) hálózatok is létrehozhatók.
            </li>

            <li>
              <strong>Repeater (Bázisállomás)</strong> – A hálózat alapvető eleme, amely az üzeneteket fogadja és továbbítja. Csak a Repeaterek formálnak mesh hálózatot.
            </li>

            <li>
              <strong>Room Server</strong> – Egy opcionális működési mód, amely az alap feladatköre mellett repeaterként is működhet (de nem ajánlott). Eltárolja az utolsó 32 üzenetet, és azokat elküldi minden újonnan csatlakozó Companion eszköznek.
            </li>
           </ul>
        </div>
















      </main>



      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
