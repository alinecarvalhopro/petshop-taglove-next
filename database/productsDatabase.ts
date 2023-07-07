import { v4 as uuidv4 } from "uuid";

export interface IProduct {
  id: string;
  img: string,
  name: string;
  description: string;
  price: number;
  category: "Alimentação" | "Higiene" | "Acessórios";
}

export const productsDatabase: IProduct[] = [
  {
    id: uuidv4(),
    img: "/imagesProducts/toca.png",
    name: "Toca quentinha e confortável",
    description: "Quentinha e confortável, seu pet vai amar!",
    price: 210,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/racaoSecaParaCaes.png",
    name: "Ração seca para cães",
    description: "Com todas as vitaminas e minerais que seu cãozinho precisa.",
    price: 150,
    category: "Alimentação",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/Coleira.png",
    name: "Coleira auto ajustável",
    description: "Como ela se ajusta em todos os pescoços é um mistério.",
    price: 40,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/racaoUmidaParaGatos.png",
    name: "Ração úmida para gatos",
    description: "Com todas as vitaminas que seu gatinho precisa.",
    price: 10,
    category: "Alimentação",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/torreParaGatos.png",
    name: "Torre divertida para gatos",
    description: "Resistente e durável. Acolchoamento interno premium.",
    price: 230,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/biscoitoParaCaes.png",
    name: "Biscoito para Cães - 200 g",
    description: "Ingredientes naturais e orgânicos. Rico em fibras.",
    price: 15,
    category: "Alimentação",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/cortadorDeUnhas.png",
    name: "Cortador de unhas",
    description: "Com trava! Mais segurança para aparar as unhas do seu pet.",
    price: 38,
    category: "Higiene",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/brinquedoCordinha.png",
    name: "Brinquedo de cordinha",
    description: "Diversão garantida! Nosso campeão de vendas em acessórios.",
    price: 13,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/Comedouro.png",
    name: "Comedouro / Bebedouro",
    description: "Em cerâmica. Mantém a água fresca nos dias quentes.",
    price: 35,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/Cama.png",
    name: "Cama",
    description:
      "Espuma resistente sem abrir mão do conforto que seu pet merece.",
    price: 110,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/Escova.png",
    name: "Escova",
    description: "Técnologia que deixa o pelinho do seu pet mais macio.",
    price: 23,
    category: "Higiene",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/rodaParaRoedores.png",
    name: "Roda para roedores",
    description: "Diversão garantida para seu pequeno amigo.",
    price: 53,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/caixaDeTransporte.png",
    name: "Caixa de transporte",
    description: "Mais conforto e segurança ao transportar seu pet.",
    price: 159,
    category: "Acessórios",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/saquinhosHigienicos.png",
    name: "Saquinhos higiênicos",
    description:
      "Mais praticidade na hora de levar seu pet para aquele passeio.",
    price: 29,
    category: "Higiene",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/Pente.png",
    name: "Pente",
    description: "Desembarace com facilidade o pelo do seu pet.",
    price: 24,
    category: "Higiene",
  },
  {
    id: uuidv4(),
    img: "/imagesProducts/Casinha.png",
    name: "Casinha térmica",
    description:
      "Técnologia que mantém a temperatura interna ideal para o seu pet.",
    price: 260,
    category: "Acessórios",
  },
];
