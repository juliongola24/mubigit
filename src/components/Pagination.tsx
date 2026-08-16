import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  paginaAtual: number;
  totalPaginas: number;
  onPageChange: (pagina: number) => void;
}

const Pagination = ({ paginaAtual, totalPaginas, onPageChange }: PaginationProps) => {
  if (totalPaginas <= 1) return null;

  const pages = Array.from({ length: totalPaginas }, (_, i) => i + 1);
  
  // Show max 5 pages with ellipsis
  const getVisiblePages = () => {
    if (totalPaginas <= 5) return pages;
    
    if (paginaAtual <= 3) {
      return [...pages.slice(0, 4), '...', totalPaginas];
    }
    
    if (paginaAtual >= totalPaginas - 2) {
      return [1, '...', ...pages.slice(-4)];
    }
    
    return [1, '...', paginaAtual - 1, paginaAtual, paginaAtual + 1, '...', totalPaginas];
  };

  return (
    <nav className="flex items-center justify-center gap-2 mt-10" aria-label="Paginação">
      <button
        onClick={() => onPageChange(paginaAtual - 1)}
        disabled={paginaAtual === 1}
        className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {getVisiblePages().map((page, index) => (
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg font-medium transition-all ${
              page === paginaAtual
                ? 'bg-primary text-primary-foreground shadow-card'
                : 'text-muted-foreground hover:text-primary hover:bg-primary-light'
            }`}
            aria-current={page === paginaAtual ? 'page' : undefined}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-2 text-muted-foreground">
            {page}
          </span>
        )
      ))}

      <button
        onClick={() => onPageChange(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
        className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Próxima página"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
};

export default Pagination;
