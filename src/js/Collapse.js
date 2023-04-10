const btnPrimary = document.querySelector('[data-toggle="collapse"]');
const collapseElem = document.querySelector('.collapse');

btnPrimary.addEventListener('click', () => {
  btnPrimary.classList.toggle('collapsed');

  if (btnPrimary.classList.contains('collapsed')) {
    collapseElem.classList.remove('show');
  } else {
    collapseElem.classList.add('show');
  }
});
