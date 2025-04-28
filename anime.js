import anime from 'animejs/lib/anime.es.js';

class NoteItem extends HTMLElement {
  set note(note) {
    this._note = note;
    this.render();
    this.animateEntry(); // Tambahkan animasi masuk
  }

  animateEntry() {
    anime({
      targets: this,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 500,
      easing: 'easeOutExpo'
    });
  }

  render() {
    const { id, title, body, createdAt, archived } = this._note;

    this.innerHTML = `
      <article class="note-item">
        <h3>${title}</h3>
        <p>${body}</p>
        <small>Created at: ${new Date(createdAt).toLocaleString()}</small>
        <div class="note-actions">
          <button class="delete-button" data-id="${id}">Delete</button>
          <button class="archive-button" data-id="${id}">
            ${archived ? 'Unarchive' : 'Archive'}
          </button>
        </div>
      </article>
    `;

    this.querySelector('.delete-button').addEventListener('click', () => {
      const event = new CustomEvent('delete-note', {
        detail: { id },
        bubbles: true,
      });
      this.dispatchEvent(event);
    });

    this.querySelector('.archive-button').addEventListener('click', () => {
      const eventName = archived ? 'unarchive-note' : 'archive-note';
      const event = new CustomEvent(eventName, {
        detail: { id },
        bubbles: true,
      });
      this.dispatchEvent(event);
    });
  }
}

customElements.define('note-item', NoteItem);
