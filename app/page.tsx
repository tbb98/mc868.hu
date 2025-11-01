"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showSetupButtons, setShowSetupButtons] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"companion" | "repeater" | null>(null);

  const handleStartClick = () => {
    setShowSetupButtons(true);
  };

  const handleSetupClick = (type: "companion" | "repeater") => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="light:invert"
          src="/meshcore-logo.png"
          alt="MeshCore logo"
          width={450}
          height={48}
          priority
        />

        <div className="list-inside list-decimal text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
            Üdvözlünk a magyar MeshCore közösség weboldalán.
        </div>

        <div className="list-inside max-w-3xl  list-decimal text-sm text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          Általunk használt frekvencia és LoRa beállítások: EU/UK (Narrow) - 869.618Mhz / SF8 / BW62.5 / CR8
        </div>

        {!showSetupButtons && (
          <button
            onClick={handleStartClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-8 rounded text-lg"
          >
            START
          </button>
        )}

        {showSetupButtons && (
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <button
              onClick={() => handleSetupClick("companion")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded"
            >
              Companion?
            </button>
            <button
              onClick={() => handleSetupClick("repeater")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded"
            >
              Repeater?
            </button>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-white">
                {modalType === "companion" ? "Companion Node - A te kliensed" : "Repeater - Az ismétlő"}
              </h2>
              <div className="text-white">
                {modalType === "companion" ? (
                  <div className="space-y-4">
                    <p>
                      A companion node leszel te a mesh-en. Egyedi kulccsal, bluetooth-on / USB-n rákapcsolódva.
                    </p>
                    <p>
                      A companion node nem ismétel, szüksége van elérhető repeaterre hogy tudj vele üzenni.
                    </p>
                    <p>
                      Két companion hallótávolságon belül tud repeaterek nélkül is beszélgetni.
                    </p>
                    
                    <h3 className="font-bold mt-6">Rövid leírás a feltétlen szükséges dolgokról:</h3>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>EU/UK Narrow rádióbeállításokat használunk</li>
                      <li>A csatornákra advert nélkül is írhatsz</li>
                      <li>
                        Ahhoz hogy valakivel közvetlen tudj beszélgetni neked is és neki is advertelnie kell hogy publikus kulcsot cseréljetek. Enélkül nem tudsz ráírni másra és ő sem rád
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li>
                            <strong>Flood advert:</strong> az egész mesh megkapja a kulcsodat, minden repeter ismétli
                          </li>
                          <li>
                            <strong>Zero Hop advert:</strong> csak azok kapják meg a kulcsod akik közvetlen hallják a companion-odat
                          </li>
                        </ul>
                      </li>
                      <li>
                        A mesh átnyúlik szlovákiába és Ausztriába így a Public csatornán főképp angolul beszélgetünk
                      </li>
                      <li>
                        Hasznos csatornák (hashtag channelek, nem kell külön kód hozzájuk):
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                          <li><strong>#hungary</strong> - magyaroknak magyarul</li>
                          <li><strong>#ping</strong> - Botok gyűjtőhelye "Ping" szó beírására válaszolnak hány hoppon keresztül vették az üzeneted</li>
                          <li><strong>#slovakia</strong> - szlovákok csatornája</li>
                          <li><strong>#austria</strong> - osztrákok csatornája</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      A Repeater node-ra nem lehet kapcsolódni bluetooth-al vagy wifivel, csak USB-n. Egyetlen dolga van: ismételni a fogadott csomagokat.
                    </p>
                    <p>
                      Minden repeater egyszer ismétel minden csomagot, amit még nem ismételt.
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="font-bold text-red-500 mb-2">FONTOS:</h3>
                      <div className="space-y-2 font-semibold">
                        <p>
                          Ha repeatert csinálsz a kulcsod első két karaktere fogja azonosítani!
                        </p>
                        <p>
                          Mivel ez véges számú azonosító, így már lehet lesz ilyen a meshen.
                        </p>
                        <p>
                          Mindenkinek egyedi azonosítót kell beállítania hogy ne legyen ütközés.
                        </p>
                        <p>
                          A{" "}
                          <a
                            href="https://map.mc868.hu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            map.mc868.hu
                          </a>{" "}
                          jobb felső sarkában találsz egy{" "}
                          <a
                            href="https://map.mc868.hu/config/repeater-setup.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            "Repeater Setup"
                          </a>{" "}
                          gombot, a repeatered USB-n rádugva a gépre ezzel az oldallal szinte mindent beállíthatsz rajta.
                        </p>
                        <p>
                          A Private / Public Key résznél Auto-choose non-colliding gomb, majd Generate és Save&Set gombokat nyomd végig, így olyan kulcsot kap a repeatered amit tuti nem használ még senki!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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

          <a href="https://github.com/meshcore-dev/MeshCore" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              GitHub
            </button>
          </a>

          <a href="https://map.mc868.hu/" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              Magyar "élő" mesh térkép
            </button>
          </a>

          <a href="https://meshcore.co.uk/map.html" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white font-bold py-4 px-4 rounded w-full">
              Hivatalos térkép
            </button>
          </a>
        </div>

        <div className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Mi az a MeshCore?</h2>
          <p className="mt-2">
            A <strong>MeshCore</strong> egy nyílt forráskódú, LoRa-alapú decentralizált kommunikációs rendszer, amely lehetővé teszi az internetkapcsolat nélküli üzenetküldést.
            A rendszer bázisállomásokon (Repeater) keresztül működik, és ideális olyan helyzetekben, ahol nincs hagyományos hálózati infrastruktúra, például túrázás, katasztrófaelhárítás vagy közösségi mesh hálózatok kiépítése esetén.
          </p>
          
          <h3 className="mt-4 font-bold">MeshCore üzemmódjai:</h3>

          <ul className="list-disc pl-5 space-y-4">
           <li>
              <strong>Companion (Kliens)</strong> – Egy kliens módú eszköz, amely önmagában nem továbbítja az üzeneteket a hálózatba. Csak azokhoz az eszközökhöz tud üzenetet küldeni, amelyeket közvetlenül elér (például egy másik Companionhoz vagy egy Repeaterhez). Ez a szerepkör hasonló a Meshtastic <em>CLIENT_MUTE</em> módjához. Az útválasztásnak köszönhetően nagy (akár 64 hop) hálozatok is létrehozhatók.
            </li>

            <li>
              <strong>Repeater (Bázisállomás)</strong> – A hálózat alapvető eleme, amely az üzeneteket fogadja és továbbítja. Legalább egy repeater szükséges a MeshCore hálózat működéséhez. Csak a Repeaterek (és a Repeater módba kapcsolt Room Server) formálnak mesh hálózatot.
            </li>

            <li>
              <strong>Room Server</strong> – Egy opcionális működési mód, amely az alap feladatköre mellett repeaterként is működhet. Eltárolja az utolsó 16 üzenetet, és azokat elküldi minden újonnan csatlakozó Companion eszköznek.
            </li>
           </ul>
        </div>

        <div className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Hogy tudom használni?</h2>
          <p className="mt-2">
          A legtöbb felhasználó egy mobilos appot használ ahhoz, hogy csevegjen a hálózaton. Léteznek önálló eszközök (pl. T-Deck), de ezek drágábbak, mint az úgynevezett Companion eszközök. Companionra azért van szükség, mert a mobiltelefonokban nincs LoRa-modul. Ezekhez Bluetooth-on lehet csatlakozni a telefonnal. Számítógép is használható; ilyenkor a Companion vagy Wi-Fi-n keresztül csatlakozik, vagy USB-vel a gépre.          </p>
          
          <h3 className="mt-4 font-bold">Szükséges lépések:</h3>

          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>MeshCore kompatibilis eszköz beszerzése</strong> (pl. Heltec v3, SeeedStudio T1000-E, RAK WisMesh), a támogatott eszközök a MeshCore hivatalos oldalán találhatók a Web Flasher menüpont alatt.
            </li>

            <li>
              <strong>MeshCore telepítése</strong> a hivatalos oldalon található Web Flasher segítségével. (BT companion kell a telefonos használathoz)
            </li>

            <li>
              <strong>A telefonos alkalmazás telepítése</strong>, ami elérhető a Google Play Store-ban és az Apple App Store-ban is.
            </li>

            <li>
              <strong>A rádió paramétereinek beállítása</strong>, név, opcionálisan a hely, és a legfontosabb: a frekvencia, Spreading Factor és a Coding Rate. Ezek valószínűleg még változni fognak, ahogy kísérletezünk. A weboldalon mindig kint lesz a jelenlegi.
            </li>

            <li>
              <strong>Advert</strong>: ahhoz, hogy mások megtudják, hogy a hálózaton vagy, küldeni kell egy Flood Router és egy Zero-Hop advertet is. Ez egy olyan üzenet, ami mindenkihez eljut (ha van olyan repeater, amit a rádiód elér) és jelzi, hogy a hálózaton vagy.
            </li>

            <li>
              <strong>Várni</strong> kell, mert a legtöbb repeater 1-3 óránként küld csak advertet és addig nem fog senki látszódni.
            </li>

            <li>
              <strong>Csatlakozni</strong> hozzánk Telegramon vagy Facebookon és zaklatni minket, hogy segítsünk.
            </li>
          </ul>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
