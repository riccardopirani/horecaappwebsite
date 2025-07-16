import Link from "next/link";
import React from "react";
import { FaUtensils } from "react-icons/fa";

import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaUtensils className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
            <h3 className="manrope text-xl font-semibold cursor-pointer">
              Horeca App
            </h3>
          </Link>
          <p className="mt-3.5 text-foreground-accent">
            La soluzione smart di Marconi Software per digitalizzare ordini, DDT
            e magazzino di bar, ristoranti e pub.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Navigazione</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contatti</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Telefono: {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                const url = footerDetails.socials[platformName];
                if (platformName && url) {
                  return (
                    <Link
                      href={url}
                      key={platformName}
                      aria-label={platformName}
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          &copy; {new Date().getFullYear()} Horeca App · Marconi Software. Tutti
          i diritti riservati.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          Creato con ❤️ da{" "}
          <a
            href="https://marconisoftware.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marconi Software
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
