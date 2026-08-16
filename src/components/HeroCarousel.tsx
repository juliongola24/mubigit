import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Artigo, categorias } from '@/data/artigos';

interface HeroCarouselProps {
  artigos: Artigo[];
}

const HeroCarousel = ({ artigos }: HeroCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % artigos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [artigos.length]);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + artigos.length) % artigos.length);
  const next = () => setCurrent((current + 1) % artigos.length);

  if (artigos.length === 0) return null;

  const artigo = artigos[current];
  const categoria = categorias[artigo.categoria];

  return (
    <section className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl">
      {/* Background Images */}
      {artigos.map((a, index) => (
        <div
          key={a.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={a.imagem}
            alt={a.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-xl lg:max-w-2xl animate-fade-in" key={current}>
            <span className={`badge-category ${categoria.cor} mb-2 sm:mb-4 text-[10px] sm:text-xs`}>
              {categoria.nome}
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-2 sm:mb-4 leading-tight line-clamp-3">
              {artigo.titulo}
            </h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base lg:text-lg mb-3 sm:mb-6 line-clamp-2 hidden xs:block">
              {artigo.resumo}
            </p>
            <a
              href={`/artigo/${artigo.slug}.html`}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-dark transition-colors shadow-lg"
            >
              Ler Artigo
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors"
        aria-label="Próximo"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {artigos.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
              index === current
                ? 'w-5 sm:w-8 bg-primary'
                : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
