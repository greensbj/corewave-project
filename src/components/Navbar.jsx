import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/siteData.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const browserWindow = globalThis.window;

    if (!browserWindow) {
      return undefined;
    }

    const syncActiveHash = () => {
      setActiveHash(browserWindow.location.hash || "#home");
    };

    syncActiveHash();
    browserWindow.addEventListener("hashchange", syncActiveHash);

    return () =>
      browserWindow.removeEventListener("hashchange", syncActiveHash);
  }, []);

  useEffect(() => {
    const browserWindow = globalThis.window;

    if (!browserWindow) {
      return undefined;
    }

    const handleScroll = () => {
      const currentScrollY = browserWindow.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 20) {
        setHidden(false);
      } else if (Math.abs(scrollDelta) > 6) {
        setHidden(scrollDelta > 0);

        if (scrollDelta > 0) {
          setOpen(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = browserWindow.scrollY;
    browserWindow.addEventListener("scroll", handleScroll, { passive: true });

    return () => browserWindow.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => {
    setOpen(false);
  };

  const handleLinkClick = (href) => {
    setActiveHash(href);
    close();
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full bg-cw-mint/95 backdrop-blur transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="inner flex h-[80px] items-center justify-between lg:h-[100px]">
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="inline-flex transition hover:opacity-80"
          aria-label="CoreWave home"
        >
          <Logo />
        </a>
        <div className="hidden items-center gap-[72px] xl:flex 2xl:gap-[142px]">
          <nav
            aria-label="Primary navigation"
            className="flex h-[100px] items-center gap-[45px]"
          >
            {navItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative inline-flex h-full items-center whitespace-nowrap text-[16px] font-normal leading-none transition ${
                    isActive
                      ? "text-cw-green"
                      : "text-cw-dark hover:text-cw-green"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#contact"
            onClick={close}
            className="green-btn h-[48px] min-w-[96px] text-[16px] font-normal !px-[25px] !py-0"
          >
            Register
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="inline-grid h-[44px] w-[44px] place-items-center rounded-[5px] text-cw-dark transition hover:bg-white/70 xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-emerald-100 bg-white shadow-soft xl:hidden"
        >
          <div className="inner grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                onClick={() => handleLinkClick(item.href)}
                href={item.href}
                className={`flex min-h-[44px] items-center rounded-[5px] px-2 text-[16px] font-medium transition hover:bg-cw-mint hover:text-cw-green ${
                  activeHash === item.href ? "text-cw-green" : "text-cw-dark"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              onClick={close}
              href="#contact"
              className="green-btn mt-2 h-[48px] w-fit text-[16px] font-normal !px-[25px] !py-0"
            >
              Register
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
