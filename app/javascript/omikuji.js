window.addEventListener('DOMContentLoaded', () => {

  'use strict'
  
  {
    const btn = document.getElementById('btn');
    
    btn.addEventListener('click', () => {
      const results = ['大吉', '中吉', '凶', '小吉', '吉', '大凶']
      btn.textContent = results[Math.floor(Math.random() * results.length)];

      
      // const n = Math.random();
      // if (n < 0.05) {
      //   btn.textContent = '大吉';
      // } else if (n < 0.1) {
      //   btn.textContent = '中吉';
      // } else if (n < 0.3) {
      //   btn.textContent = '小吉';
      // } else if (n < 0.3) {
      //   btn.textContent = '凶';
      // } else if (n < 0.2) {
      //   btn.textContent = '大凶';
      // } else {
      //   btn.textContent = '吉';
      // }
    });
  }
})