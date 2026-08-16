export interface Artigo {
  id: number;
  slug: string;
  titulo: string;
  resumo: string;
  categoria: 'doencas' | 'prevencao' | 'bem-estar' | 'estetica' | 'nutricao';
  imagem: string;
  autor: string;
  dataPublicacao: string;
  tempoLeitura: number;
  visualizacoes: number;
  tags: string[];
  destaque: boolean;
}

export const categorias = {
  doencas: { nome: 'Condições Tratadas', cor: 'badge-doencas', descricao: 'Doenças que tratamos com fitoterapia' },
  prevencao: { nome: 'Prevenção Natural', cor: 'badge-prevencao', descricao: 'Cuidados preventivos com medicina natural' },
  'bem-estar': { nome: 'Bem-estar', cor: 'badge-bem-estar', descricao: 'Equilíbrio físico, mental e emocional' },
  estetica: { nome: 'Cuidados da Pele', cor: 'badge-estetica', descricao: 'Beleza natural e dermocosmética' },
  nutricao: { nome: 'Nutrição', cor: 'badge-nutricao', descricao: 'Alimentação consciente e terapêutica' },
};

// Artigo base/exemplo — modelo para futuras publicações do Mubissule.
export const artigos: Artigo[] = [
  {
    id: 1,
    slug: 'diabetes-tipo-2-sintomas-tratamento',
    titulo: 'Diabetes Tipo 2: Abordagem Natural no Mubissule',
    resumo: 'Conheça a abordagem integrativa do Mubissule para o controlo do diabetes tipo 2: fitoterapia, nutrição funcional e acompanhamento clínico personalizado.',
    categoria: 'doencas',
    imagem: '/image/diabetes-tipo-2-sintomas-tratamento.webp',
    autor: 'Centro Mubissule',
    dataPublicacao: '2026-04-20',
    tempoLeitura: 8,
    visualizacoes: 15420,
    tags: ['diabetes', 'fitoterapia', 'glicemia', 'medicina natural'],
    destaque: true,
  },
];

// Utility functions
export const getArtigosPorCategoria = (categoria: Artigo['categoria']) =>
  artigos.filter(a => a.categoria === categoria);

export const getArtigosDestaque = () =>
  artigos.filter(a => a.destaque);

export const getArtigosMaisVistos = (limite = 5) =>
  [...artigos].sort((a, b) => b.visualizacoes - a.visualizacoes).slice(0, limite);

export const getArtigosRecentes = (limite = 6) =>
  [...artigos].sort((a, b) => new Date(b.dataPublicacao).getTime() - new Date(a.dataPublicacao).getTime()).slice(0, limite);

export const paginarArtigos = (lista: Artigo[], pagina: number, porPagina = 6) => {
  const inicio = (pagina - 1) * porPagina;
  const fim = inicio + porPagina;
  return {
    artigos: lista.slice(inicio, fim),
    totalPaginas: Math.ceil(lista.length / porPagina),
    paginaAtual: pagina,
  };
};
