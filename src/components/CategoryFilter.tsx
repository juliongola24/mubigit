import { categorias } from '@/data/artigos';

interface CategoryFilterProps {
  categoriaAtiva: string | null;
  onCategoriaChange: (categoria: string | null) => void;
}

const CategoryFilter = ({ categoriaAtiva, onCategoriaChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoriaChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          categoriaAtiva === null
            ? 'bg-primary text-primary-foreground shadow-card'
            : 'bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary'
        }`}
      >
        Todos
      </button>
      {Object.entries(categorias).map(([key, value]) => (
        <button
          key={key}
          onClick={() => onCategoriaChange(key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            categoriaAtiva === key
              ? 'bg-primary text-primary-foreground shadow-card'
              : 'bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary'
          }`}
        >
          {value.nome}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
