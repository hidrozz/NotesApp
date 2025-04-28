import { customValidationHandler } from '../utils/validation.js';

class NoteForm extends HTMLElement {
  connectedCallback() {
    this.render();
    const form = this.querySelector('form');
    const titleInput = form.querySelector('#title');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = titleInput.value;
      const body = form.querySelector('#body').value;

      const event = new CustomEvent('add-note', {
        detail: { title, body },
        bubbles: true,
      });
      this.dispatchEvent(event);
      form.reset();
    });

    titleInput.addEventListener('input', customValidationHandler);
    titleInput.addEventListener('invalid', customValidationHandler);
  }

  render() {
    this.innerHTML = `
      <form autocomplete="off" class="note-form">
        <div>
          <label for="title">Title</label>
          <input id="title" type="text" required minlength="6" pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._ ]+(?<![_.])$" aria-describedby="titleValidation"/>
          <p id="titleValidation" class="validation-message" aria-live="polite"></p>
        </div>
        <div>
          <label for="body">Body</label>
          <textarea id="body" required></textarea>
        </div>
        <button type="submit">Add Note</button>
      </form>
    `;
  }
}

customElements.define('note-form', NoteForm);
