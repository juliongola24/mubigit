import { Clock, Eye, User } from 'lucide-react';
import { Artigo, categorias } from '@/data/artigos';

interface ArtigoCardProps {
  artigo: Artigo;
  variant?: 'default' | 'featured' | 'compact';
}

const ArtigoCard = ({ artigo, variant = 'default' }: ArtigoCardProps) => {
  const categoria = categorias[artigo.categoria];
  const visualizacoes = artigo.visualizacoes;
  
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  if (variant === 'featured') {
    return (
      <a 
        href={`/artigo/${artigo.slug}.html`}
        className="group block relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card card-hover bg-card"
      >
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={artigo.imagem}
            alt={artigo.titulo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <span className={`badge-category ${categoria.cor} mb-2 sm:mb-3 text-[10px] sm:text-xs`}>
            {categoria.nome}
          </span>
          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-primary-foreground mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {artigo.titulo}
          </h3>
          <p className="text-primary-foreground/80 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-4 hidden sm:block">
            {artigo.resumo}
          </p>
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-primary-foreground/60">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span className="hidden xs:inline">{artigo.autor}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {artigo.tempoLeitura} min
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {formatViews(visualizacoes)}
            </span>
          </div>
        </div>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <a 
        href={`/artigo/${artigo.slug}.html`}
        className="group flex gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-muted transition-colors"
      >
        <div className="w-24 sm:w-28 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden aspect-[3/2]">
          <img
            src={artigo.imagem}
            alt={artigo.titulo}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`badge-category ${categoria.cor} text-[9px] sm:text-[10px] mb-1`}>
            {categoria.nome}
          </span>
          <h4 className="font-semibold text-xs sm:text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {artigo.titulo}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-[10px] sm:text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {formatViews(visualizacoes)}
            </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a 
      href={`/artigo/${artigo.slug}.html`}
      className="group block bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-card card-hover"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={artigo.imagem}
          alt={artigo.titulo}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-3 sm:p-5">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className={`badge-category ${categoria.cor} text-[10px] sm:text-xs`}>
            {categoria.nome}
          </span>
          <span className="text-[10px] sm:text-xs text-muted-foreground">
            {formatDate(artigo.dataPublicacao)}
          </span>
        </div>
        
        <h3 className="font-bold text-sm sm:text-lg text-foreground mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {artigo.titulo}
        </h3>
        
        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-4 hidden sm:block">
          {artigo.resumo}
        </p>
        
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground pt-2 sm:pt-3 border-t border-border">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span className="truncate max-w-[80px] sm:max-w-none">{artigo.autor}</span>
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {artigo.tempoLeitura}m
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {formatViews(visualizacoes)}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArtigoCard;
