import { Link } from "react-router-dom";
import footerLogo from "../../assets/footer_logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary border-primary mt-auto border-t py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-5 md:items-start">
          <Link to="/">
            <img
              src={footerLogo}
              alt="NEWSBITE Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="text-center md:text-left">
            <p className="mt-1 text-sm text-white/60">
              Read global economy, Master your English.
            </p>
          </div>

          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} NEWSBITE. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex items-center gap-6 text-base font-medium text-white/90">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link
              to="/articles"
              className="hover:text-accent transition-colors"
            >
              Articles
            </Link>
            <Link to="/mypage" className="hover:text-accent transition-colors">
              My Page
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/50">
            <Link to="/terms" className="transition-colors hover:text-white">
              이용약관
            </Link>
            <span>|</span>
            <Link to="/privacy" className="transition-colors hover:text-white">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
