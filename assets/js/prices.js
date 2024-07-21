
    document.addEventListener('DOMContentLoaded', function() {
      const goldPriceElem = document.getElementById('gold_price');
      const silverPriceElem = document.getElementById('silver_price');
      const updateTimeElem = document.getElementById('update_time');
      const buyLink = document.getElementById('buy_link');
    
      // Функция для обновления цен и времени
      async function fetchPrices() {
        try {
          // Запрос цен на золото и серебро
          const goldResponse = await fetch('https://api.gold-api.com/price/XAU');
          const goldData = await goldResponse.json();
          const silverResponse = await fetch('https://api.gold-api.com/price/XAG');
          const silverData = await silverResponse.json();
    
          // Обновляем цены на золото и серебро
          goldPriceElem.textContent = `${goldData.price.toFixed(2)} USD/oz`;
          silverPriceElem.textContent = `${silverData.price.toFixed(2)} USD/oz`;
    
          // Обновляем время
          const updatedAt = new Date(goldData.updatedAt).toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' });
          updateTimeElem.textContent = `Last Price Update: ${updatedAt} (New York Time)`;
    
        } catch (error) {
          console.error('Error getting prices:', error);
        }
      }
    
      // Функция для установки ссылки на фьючерсы
      function setBuyLink() {
        buyLink.href = 'http://www.mavateccorp.com'; // Укажите вашу ссылку на покупку фьючерсов
      }
    
      // Обновляем данные при загрузке страницы
      fetchPrices();
      setBuyLink();
    });