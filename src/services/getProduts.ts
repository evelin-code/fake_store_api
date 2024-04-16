export async function getProducts() {
   try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }
      const products = await response.json();
      return products;
   } catch (error) {
      console.error('Error:', error);
      return [];
   }
}
