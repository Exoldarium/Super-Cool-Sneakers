export const productInfo = [
  {
    id: 0,
    company: 'THE BEST SHOE COMPANY',
    name: 'Super Cool Shoes',
    description: 'These limited edition unbeliveable cool shoes are our best product yet. Buy them and you will feel like you are walking on clouds',
    price: 250,
    currentPrice: 125,
    amount: 0,
    totalPrice: 0,
    images: [
      {
        id: 0,
        image: process.env.PUBLIC_URL +'/image-product-1.jpg',
      }, 
      {
        id: 1,
        image: process.env.PUBLIC_URL +'/image-product-2.jpg',
      },
      {
        id: 2,
        image: process.env.PUBLIC_URL +'/image-product-3.jpg',
      },
      {
        id: 3,
        image: process.env.PUBLIC_URL +'/image-product-4.jpg',
      }
    ]
}];
