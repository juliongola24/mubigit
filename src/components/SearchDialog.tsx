import { useState, useEffect, useMemo } from 'react';
import { Search, X, Clock, Eye } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { artigos, categorias, Artigo } from '@/data/artigos';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState('');

  const resultados = useMemo(() => {
    if (!query.trim()) return [];
    
    const termosBusca = query.toLowerCase().trim().split(/\s+/);
    
    return artigos
      .filter(artigo => {
        const textoCompleto = `${artigo.titulo} ${artigo.resumo} ${artigo.tags.join(' ')}`.toLowerCase();
        return termosBusca.every(termo => textoCompleto.includes(termo));
      })
      .slice(0, 8);
  }, [query]);

  const formatViews = (views: number) => {
    if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
    return views.toString();
  };

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] p-0 gap-0 overflow-hidden">
        <div className="flex items-center border-b border-border px-4">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Pesquisar artigos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 h-14 px-3 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
        
        <div className="max-h-[400px] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="px-4 py-8 text-center text-muted-foreground text-sm">
              Digite para pesquisar artigos por título ou conteúdo
            </div>
          ) : resultados.length === 0 ? (
            <div className="px-4 py-8 text-center text-muted-foreground text-sm">
              Nenhum artigo encontrado para "{query}"
            </div>
          ) : (
            <div className="py-2">
              <p className="px-4 py-2 text-xs text-muted-foreground font-medium">
                {resultados.length} resultado{resultados.length !== 1 ? 's' : ''} encontrado{resultados.length !== 1 ? 's' : ''}
              </p>
              {resultados.map((artigo) => {
                const categoria = categorias[artigo.categoria];
                return (
                  <a
                    key={artigo.id}
                    href={`/artigo/${artigo.slug}.html`}
                    className="flex gap-3 px-4 py-3 hover:bg-muted transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    <div className="w-16 h-12 rounded-md overflow-hidden shrink-0">
                      <img
                        src={artigo.imagem}
                        alt={artigo.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`badge-category ${categoria.cor} text-[9px] mb-0.5`}>
                        {categoria.nome}
                      </span>
                      <h4 className="font-semibold text-sm text-foreground line-clamp-1">
                        {artigo.titulo}
                      </h4>
                      <div className="flex items-center gap-3 mt-1 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {artigo.tempoLeitura} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {formatViews(artigo.visualizacoes)}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
        
        <div className="border-t border-border px-4 py-2 flex items-center justify-between text-[10px] text-muted-foreground bg-muted/50">
          <span>Use ↑↓ para navegar</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-background border border-border font-mono">ESC</kbd>
            para fechar
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
