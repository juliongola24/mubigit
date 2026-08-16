import { TrendingUp, Clock, Tag } from 'lucide-react';
import { getArtigosMaisVistos, getArtigosRecentes, categorias } from '@/data/artigos';
import ArtigoCard from './ArtigoCard';

const Sidebar = () => {
  const maisVistos = getArtigosMaisVistos(4);
  const recentes = getArtigosRecentes(3);

  return (
    <aside className="space-y-8">
      {/* Most Viewed */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="font-bold text-lg text-foreground">Mais Lidos</h2>
        </div>
        <div className="space-y-1">
          {maisVistos.map((artigo) => (
            <ArtigoCard 
              key={artigo.id} 
              artigo={artigo} 
              variant="compact" 
            />
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-primary" />
          <h2 className="font-bold text-lg text-foreground">Recentes</h2>
        </div>
        <div className="space-y-1">
          {recentes.map((artigo) => (
            <ArtigoCard 
              key={artigo.id} 
              artigo={artigo} 
              variant="compact" 
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-primary" />
          <h2 className="font-bold text-lg text-foreground">Categorias</h2>
        </div>
        <div className="space-y-2">
          {Object.entries(categorias).map(([key, value]) => (
            <a
              key={key}
              href={`/?categoria=${key}`}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors group"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {value.nome}
              </span>
              <span className={`badge-category ${value.cor} text-[10px]`}>
                {value.descricao.split(' ')[0]}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="gradient-hero rounded-2xl p-6 text-primary-foreground">
        <h3 className="font-bold text-lg mb-2">Newsletter</h3>
        <p className="text-sm text-primary-foreground/80 mb-4">
          Receba novidades sobre saúde diretamente no seu email.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Seu melhor email"
            className="w-full px-4 py-2.5 rounded-lg bg-card/20 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 text-sm"
          />
          <button
            type="submit"
            className="w-full px-4 py-2.5 rounded-lg bg-card text-primary font-semibold hover:bg-card/90 transition-colors text-sm"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
