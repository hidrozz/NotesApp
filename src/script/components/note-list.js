class NoteList extends HTMLElement {
  set notes(notes) {
    this._notes = notes;
    this.render();
  }

  render() {
    this.innerHTML = '';
    if (!this._notes || this._notes.length === 0) {
      this.innerHTML = `<p class="empty-message">No notes available.</p>`;
      return;
    }

    this._notes.forEach((note) => {
      const noteItem = document.createElement('note-item');
      noteItem.note = note;
      this.appendChild(noteItem);
    });
  }
}

customElements.define('note-list', NoteList);
