"use client";

export default function RadioSettings() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 items-center">
        <div className="text-justify max-w-3xl text-sm sm:text-base font-[family-name:var(--font-geist-mono)] space-y-6">

          <div>
            <p className="mb-4">
              Ezek az ajánlott beállítások a magyar MeshCore hálózatban használható node-okhoz.
              A weboldalon szereplő paraméterek mindig a legfrissebbek.
            </p>
            <p className="mb-4 font-semibold">
              Minden node-ot ajánlott az elérhető legfrissebb firmware verzión tartani!
              Ez egy fiatal szoftver, egy régi verzión hagyott repeater akár gondot is okozhat a mesh-ben.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Rádió beállítások</h3>
            <div className="mb-2">
              <strong>(Preset: EU/UK Narrow)</strong>
            </div>

            <div className="bg-gray-900 p-4 rounded space-y-2">
              <p><strong>Frequency:</strong> 869.618 MHz</p>
              <p><strong>Bandwidth:</strong> 62.5 kHz</p>
              <p><strong>Spreading Factor:</strong> 8</p>
              <p><strong>Coding Rate:</strong> 4/8</p>
              <p><strong>TX Power:</strong> 22 dBm</p>
              <p><strong>Airtime Factor:</strong> 1</p>
            </div>

            <p className="mt-2 text-sm">
              <strong>Fontos:</strong> EU duty cycle limit 10%.
              A MeshCore forgalma valóságban 1% alatt marad, ezért AF=1 ajánlott.
              Az AF azt jelöli, hogy az előző adás hányszorosát várja a következő előtt.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Általános beállítások</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Név és lokáció:</strong> Adj nevet a node-odnak és egy hozzávetőleges helyet,
                hogy nagyjából látszódjon, merre vagy.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">
              Repeater beállítások{" "}
              <a
                href="https://map.mc868.hu/config/repeater-setup.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                (Repeater Setup)
              </a>
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Admin Password:</strong> állíts be sajátot</li>
              <li><strong>Guest Password:</strong> hagyható üresen</li>
              <li><strong>ACL:</strong> publikus kulcs alapú hozzáférés jelszó nélkül</li>
              <li><strong>Zero-Hop Advert:</strong> 0 (letiltva)</li>
              <li><strong>Flood Advert:</strong> 12 óra</li>
              <li>
                <strong>Private / Public Key:</strong> egyedi kulcs kötelező
                (Auto-Choose Non-Colliding ajánlott)
              </li>
              <li>
                <strong>Idő beállítása:</strong> pontos idő szükséges az advert feldolgozáshoz,
                reboot után újra kell állítani sok hardware-en
              </li>
              <li>
                <strong>Térkép:</strong> automatikusan felkerülsz, nincs manuális lépés
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-700 rounded">
            <p className="font-semibold mb-2">⚠ Figyelem</p>
            <p className="text-sm">
              Minden felhasználó felelős a saját node-jáért és annak helyes működéséért.
            </p>
          </div>

          <footer className="text-center text-xs opacity-80 pt-6">
            The user has huge balls.
          </footer>

        </div>
      </main>
    </div>
  );
}
