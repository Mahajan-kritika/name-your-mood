const addBtn = document.getElementById('addMood');
const moodBoard = document.getElementById('moodBoard');
const colorPicker = document.getElementById('colorPicker');
const moodText = document.getElementById('moodText');

addBtn.addEventListener('click', () => {
  const color = colorPicker.value;
  const text = moodText.value.trim();
  
  if(text !== "") {
    const moodCard = document.createElement('div');
    moodCard.className = 'mood-card';
    moodCard.style.background = color;
    moodCard.textContent = text;
    
    moodBoard.appendChild(moodCard);
    moodText.value = "";
  } else {
    alert('Please type your mood!');
  }
});
