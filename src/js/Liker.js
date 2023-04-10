const likeContainer = document.querySelector('.like-container');
const btnLiker = likeContainer.querySelector('.btn-like');

btnLiker.addEventListener('click', () => {
  const heart = document.createElement('img');
  heart.src = 'icons8-heart-suit.png';
  heart.classList.add('heart');

  likeContainer.appendChild(heart);

  const random = Math.floor(Math.random() * 4) + 1;

  let animationClass = null;

  switch (random) {
    case 1:
      animationClass = 'heart-anim_1';
      break;
    case 2:
      animationClass = 'heart-anim_2';
      break;
    case 3:
      animationClass = 'heart-anim_3';
      break;
    case 4:
      animationClass = 'heart-anim_4';
      break;
    default:
      animationClass = 'heart-anim_1';
      break;
  }

  heart.classList.add(animationClass);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
});
