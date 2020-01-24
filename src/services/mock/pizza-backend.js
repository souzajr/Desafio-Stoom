const data = [
  {
    id: 1,
    name: 'PIZZA RECOMENDADA',
    img_url: 'http://sabordailhapizza.com.br/wp-content/uploads/2016/08/catupiry.jpg',
    description: 'Selecione nossa pizza recomendada e ganhe pontos de benefícios.',
    points: 10,
    recommended: true,
    items: [
      {
        id: 1,
        name: 'Tipo de massa',
        type: 'Massa tipo 2',
      },
      {
        id: 2,
        name: 'Tipo de tamanho',
        type: 'Tamanho tipo 3',
      },
      {
        id: 3,
        name: 'Tipo de recheio',
        type: 'Recheio tipo 1',
      },
    ],
  },
  {
    id: 2,
    name: 'MONTE SUA PIZZA',
    img_url: 'http://sabordailhapizza.com.br/wp-content/uploads/2016/08/Mussarela-1.jpg',
    description: 'Monte sua pizza do seu jeito, escolha todos os ingredientes.',
    recommended: false,
  },
];

export default data;
