import { useState } from 'react';
import { Menu, X, Search, Phone } from 'lucide-react';
import mubissuleLogo from '@/assets/mubissule-logo.png';
import SearchDialog from './SearchDialog';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#areas', label: 'Áreas Clínicas' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#condicoes', label: 'Condições Tratadas' },
  { href: '/#contato', label: 'Contato' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary-dark text-primary-foreground/90 text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-accent" />
              +244 925 204 540
            </span>
            <span className="text-primary-foreground/60">Saúde natural · Vida em equilíbrio</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/sobre.html" className="hover:text-accent transition-colors">Sobre o Centro</a>
            <span className="text-primary-foreground/30">|</span>
            <a href="/equipe.html" className="hover:text-accent transition-colors">Nossa Equipe</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img
                src={mubissuleLogo}
                alt="Mubissule — Centro de Medicina Natural"
                className="h-10 sm:h-14 lg:h-16 w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-base sm:text-xl lg:text-2xl font-bold text-primary tracking-wide">
                  MUBISSULE
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mt-1">
                  Medicina Natural · Angola
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-6" />
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
                aria-label="Pesquisar"
              >
                <Search className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/244925204540"
                target="_blank"
                rel="noopener"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md gradient-gold text-accent-foreground font-semibold text-sm shadow-gold hover:scale-[1.03] transition-transform"
              >
                <Phone className="w-4 h-4" />
                Agendar
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/244925204540"
                  target="_blank"
                  rel="noopener"
                  className="mt-2 mx-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md gradient-gold text-accent-foreground font-semibold text-sm shadow-gold"
                >
                  <Phone className="w-4 h-4" />
                  Agendar Consulta · 925 204 540
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Header;
