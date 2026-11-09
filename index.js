const express = require('express');
const app = express();
const port = 3000;

// Имитация базы данных (массив продуктов в памяти)
const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

// 1. Главная страница (кореневой маршрут)
app.get('/', (request, response) => {
  response.send('response for GET request');
});

// 2. Динамический маршрут для фильтрации продуктов по бренду
app.get('/products/:brand', (req, res) => {
  const { brand } = req.params; // Извлекаем название бренда из URL-адреса
  
  // Фильтруем массив продуктов по совпадению бренда
  const filteredProducts = products.filter(product => product.brand === brand);
  
  // Отправляем отфильтрованный результат клиенту в формате JSON
  res.json(filteredProducts);
});

// 3. Запуск прослушивания сервера на порту 3000
app.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});