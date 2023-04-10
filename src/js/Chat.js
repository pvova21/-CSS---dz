import Widget from './Widget';

const btnCircle = document.querySelector('.btn-circle');
const container = document.querySelector('.comment-container');

btnCircle.addEventListener('click', (e) => {
  const widget = new Widget(container, e.currentTarget);

  widget.createWidget();
});
