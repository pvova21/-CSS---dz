export default class Widget {
  constructor(widget, btnCircle) {
    this.widget = widget;
    this.btnCircle = btnCircle;
  }

  createWidget() {
    const el = document.createElement('div');
    el.classList.add('widget');
    el.innerHTML = `<div class="form-container">
                <div class="top-form-container">
                    <h2 class="form-name">Напишите нам</h2>
                    <div class="close-64">
                        <img src="icons8-close-64.png" width="32" height="32" alt="close-button">
                    </div>
                </div>
                  <form class="form-widget">
                    <textarea name="comment" class="comment-field" rows="10"></textarea>
                    <input type="submit" value="Отправить" class="btn-submit">
                  </form>
              </div>`;

    this.widget.appendChild(el);
    this.showWidget(el);
    this.interactionForm(el);
  }

  showWidget(el) {
    this.btnCircle.classList.remove('active');
    this.btnCircle.classList.add('hidden');
    el.classList.remove('hidden');
    el.classList.add('active');
  }

  closeWidget(el) {
    el.classList.remove('active');
    el.classList.add('hidden');
    el.remove();
    this.btnCircle.classList.remove('hidden');
    this.btnCircle.classList.add('active');
  }

  interactionForm(el) {
    const form = el.querySelector('.form-widget');
    const close = el.querySelector('.close-64');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      this.closeWidget(el);
    });

    close.addEventListener('click', () => {
      form.reset();
      this.closeWidget(el);
    });
  }
}
