'use strict';

document.querySelector('.jsIconNextTable').addEventListener('click', showNextTable);

function showNextTable() {
  this.style.display = 'none';
  let title = document.querySelector('.jsTitle');
  title.textContent = 'Comisiones';
  title.style.color = '#1A9AF7';
  document.querySelector('.jsMoney1').textContent = 'Bitrade';
  document.querySelector('.jsMoney2').textContent = 'Bitpreco';
  document.querySelector('.jsMoney3').textContent = 'Novadax';
  document.querySelector('.jsMoney4').textContent = 'Coinext';
  let updated = document.querySelector('.jsUpdated');
  updated.style.background = '#E7F5FF';
  document.querySelectorAll('.jsIcon').forEach(icon => {
    icon.style.display = 'none';
  });
  document.querySelector('.jsIconPreviousTable').style.display = 'block';
}

document.querySelector('.jsIconPreviousTable').addEventListener('click', showPreviousTable);

function showPreviousTable() {
  this.style.display = 'none';
  let title = document.querySelector('.jsTitle');
  title.textContent = 'Monedas';
  title.style.color = '#FF9536';
  document.querySelector('.jsMoney1').textContent = 'Bitcoin';
  document.querySelector('.jsMoney2').textContent = 'Ethereum';
  document.querySelector('.jsMoney3').textContent = 'Ripple';
  document.querySelector('.jsMoney4').textContent = 'Stellar';
  let updated = document.querySelector('.jsUpdated');
  updated.style.background = '#FFE9D5';
  document.querySelectorAll('.jsIcon').forEach(icon => {
    icon.style.display = 'inline';
  });
  document.querySelector('.jsIconNextTable').style.display = 'block';
}
