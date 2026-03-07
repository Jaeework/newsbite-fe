import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, LogOut, CircleUser } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const isLogin: boolean = true;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `pb-1 transition-all duration-200 border-b-2 ${
      isActive
        ? "border-primary text-primary font-bold"
        : "border-transparent text-ink font-medium hover:text-primary hover:border-primary hover:font-bold"
    }`;

  return (
    <nav className="bg-background border-border relative z-50 border-b shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </Link>

        <div className="flex items-center">
          <div className="mr-10 flex items-center gap-8 text-base">
            <NavLink to="/dashboard" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/articles" className={navLinkClass}>
              Articles
            </NavLink>
            <NavLink to="/me" className={navLinkClass}>
              My Page
            </NavLink>
          </div>

          <div className="border-border relative border-l pl-6">
            {isLogin ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} //포커스 없으면 자동 닫히기
                  className="hover:bg-paper flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                >
                  <User className="text-ink hover:text-primary h-6 w-6 transition-colors" />
                </button>

                {/* 유저 아이콘 드롭다운 */}
                {isDropdownOpen && (
                  <div className="bg-background border-border absolute left-1/2 mt-2 w-48 -translate-x-1/2 overflow-hidden rounded-lg border py-1 shadow-md">
                    <Link
                      to="/mypage"
                      className="text-ink hover:bg-border hover:text-primary flex items-center gap-3 px-4 py-3 text-sm transition-colors"
                    >
                      <CircleUser className="h-4 w-4" />
                      Profile
                    </Link>
                    <button className="text-ink hover:bg-border hover:text-primary flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-ink hover:text-primary font-medium transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
