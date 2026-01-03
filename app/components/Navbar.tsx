export const NAV_ITEMS = [
    { label: "Kezdőlap", href: "/" },
    { label: "Beállítások", href: "/radiosettings" },
    { label: "Companion", href: "/companion" },
    { label: "Repeater", href: "/repeater" },
    { label: "GYIK", href: "/faq" },
];

export default function Navbar() {
  return (
    <nav className="navbaritem w-full bg-[#284662] font-[family-name:var(--font-geist-sans)]">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 py-3 sm:py-4">
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <a 
              href={item.href}
              className="text-white hover:opacity-80 transition-opacity text-sm sm:text-base"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}