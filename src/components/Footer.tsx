import { Link } from "react-router-dom";
import { MangaPanel } from "./MangaPanel";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MangaPanel className="mt-8">
      <div className="p-6 flex flex-col items-center gap-6">
        <div className="font-body text-sm text-muted-foreground text-center">
          New puzzle every day at midnight
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=61587474022583"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-80"
        >
          <img
            src="/footer.png"
            alt="Follow us on Facebook"
            className="h-48 md:h-60 w-auto object-contain"
          />
        </a>

        {/* External Link */}
        <div className="w-full pt-4 border-t-2 border-foreground">
          <a
            href="https://usetobeen.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm hover:underline underline-offset-4 inline-block"
          >
            Nostalgic Trivia
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
          <Link
            to="/"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            ABOUT
          </Link>
          <Link
            to="/privacy"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            PRIVACY
          </Link>
          <Link
            to="/terms"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            TERMS
          </Link>
          <Link
            to="/contact"
            className="font-display text-sm hover:underline underline-offset-4"
          >
            CONTACT
          </Link>
        </nav>

        {/* Copyright */}
        <div className="font-body text-xs text-muted-foreground text-center">
          <p>© {currentYear} AniHunter</p>
          <p className="text-[10px] mt-1">A product of RabbidpixelsLLC</p>
          <p className="mt-1">Not affiliated with any anime studios.</p>
        </div>
      </div>
    </MangaPanel>
  );
};
