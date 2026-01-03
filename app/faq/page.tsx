"use client";

import { useState } from "react";

export default function FAQ() {
  const [showSetupButtons, setShowSetupButtons] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"companion" | "repeater" | "settings" | null>(null);

  const handleStartClick = () => {
    setShowSetupButtons(true);
  };

  const handleSetupClick = (type: "companion" | "repeater" | "settings") => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType(null);
  };

  return (
    
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center">


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

        <div className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-4">
          <h2 className="text-lg font-bold">Hogy tudom használni?</h2>
          <p className="mt-2">
            A legtöbb felhasználó egy mobilos appot használ ahhoz, hogy csevegjen a hálózaton. Léteznek önálló eszközök (pl. T-Deck), de ezek drágábbak, mint az úgynevezett Companion eszközök. Companionra azért van szükség, mert a mobiltelefonokban nincs LoRa-rádiómodul. Ezekhez Bluetooth-on lehet csatlakozni a telefonnal. Számítógép is használható; ilyenkor a Companion vagy Wi-Fi-n, Bluetoothon, vagy USB-vel kapcoslódhat a gépre.
          </p>
          
          <h3 className="mt-4 font-bold">Szükséges lépések:</h3>

          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>MeshCore kompatibilis eszköz beszerzése</strong> (pl. Heltec v3, SeeedStudio T1000-E, Wio Tracker L1 Pro, Xiao ESP/nRF Wio, RAK WisMesh Tag), a támogatott eszközök a MeshCore hivatalos oldalán találhatók a Web Flasher menüpont alatt.
            </li>

            <li>
              <strong>MeshCore telepítése</strong> a hivatalos oldalon található Web Flasher segítségével. (Bluetooth Companion kell a telefonos használathoz). Első telepítésnél érdemes "Erase Flash"-el kezdeni.
            </li>

            <li>
              <strong>A telefonos alkalmazás telepítése</strong>, ami elérhető a Google Play Store-ban és az Apple App Store-ban is.
            </li>

            <li>
              <strong>A rádió paramétereinek beállítása</strong>, név, opcionálisan a hely, és a legfontosabb: A Frekvencia, Spreading Factor és a Coding Rate (Preset választással ezt egyszerre be lehet állítani).
            </li>

            <li>
              <strong>Advert</strong>: ahhoz, hogy mások megtudják, hogy a hálózaton vagy, küldeni kell egy advertet. Ez egy olyan üzenet, ami tartalmazza a rádiód beállításait, nevét/helyét és publikus kulcsát, mindenkihez eljut (Flood Advert) vagy csak a közvetlen szomszédaidhoz (Zero-Hop Advert) és jelzi, hogy a hálózaton vagy.
            </li>

            <li>
              <strong>Advertet nem szükséges többször küldeni</strong>, aki megkapta egyszer annál bekerülsz a listába és tud neked írni közvetlen.
            </li>

            <li>
              <strong>Advert NÉLKÜL is tudod használni a csatornákat</strong>, nem szükséges küldeni.
            </li>

            <li>
              <strong>Ahhoz hogy lássuk kik vannak körülöttünk várni kell</strong>, mert a legtöbb repeater 12 óránként küld csak advertet és addig nem fog senki látszódni, de a telepítés után ha van repeater elérhető közelségben akkor a rendszer azonnal működik.
            </li>

            <li>
              <strong>Public csatornára bármikor beköszönhetünk</strong> (angolul lehetőség szerint) vagy a "Start" gomb "Companion?" részénél leírt egyéb csatornákra is.
            </li>

            <li>
              <strong>Csatlakozni online is lehet hozzánk</strong> Telegramon vagy Facebookon és akár zaklatni minket, hogy segítsünk ha szükséges.
            </li>
          </ul>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
