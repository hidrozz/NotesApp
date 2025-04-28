import {
  getAllNotes,
  getArchivedNotes,
  createNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../data/notes-api';
import Utils from '../utils/utils.js';

const home = () => {
  const activeNoteListElement = document.querySelector('#activeNotes');
  const archivedNoteListElement = document.querySelector('#archivedNotes');
  const noteFormElement = document.querySelector('note-form');
  const loadingElement = document.querySelector('#loadingIndicator');

  const showLoading = () => Utils.showElement(loadingElement);
  const hideLoading = () => Utils.hideElement(loadingElement);

  const fetchNotes = async () => {
    showLoading();
    try {
      const activeNotes = await getAllNotes();
      const archivedNotes = await getArchivedNotes();

      activeNoteListElement.notes = activeNotes;
      archivedNoteListElement.notes = archivedNotes;
    } catch (error) {
      alert(`Gagal memuat catatan: ${error.message}`);
    } finally {
      hideLoading();
    }
  };

  const addNoteHandler = async (e) => {
    const { title, body } = e.detail;
    showLoading();
    try {
      await createNote({ title, body });
      await fetchNotes();
    } catch (error) {
      alert(`Gagal menambahkan catatan: ${error.message}`);
    } finally {
      hideLoading();
    }
  };

  const deleteNoteHandler = async (e) => {
    const { id } = e.detail;
    const confirmDelete = confirm('Yakin untuk menghapus catatan ini?');
    if (!confirmDelete) return;

    showLoading();
    try {
      await deleteNote(id);
      await fetchNotes();
    } catch (error) {
      alert(`Gagal menghapus catatan: ${error.message}`);
    } finally {
      hideLoading();
    }
  };

  const archiveNoteHandler = async (e) => {
    const { id } = e.detail;
    showLoading();
    try {
      await archiveNote(id);
      await fetchNotes();
    } catch (error) {
      alert(`Gagal mengarsipkan catatan: ${error.message}`);
    } finally {
      hideLoading();
    }
  };

  const unarchiveNoteHandler = async (e) => {
    const { id } = e.detail;
    showLoading();
    try {
      await unarchiveNote(id);
      await fetchNotes();
    } catch (error) {
      alert(`Gagal membuka arsip catatan: ${error.message}`);
    } finally {
      hideLoading();
    }
  };

  noteFormElement.addEventListener('add-note', addNoteHandler);
  activeNoteListElement.addEventListener('delete-note', deleteNoteHandler);
  archivedNoteListElement.addEventListener('delete-note', deleteNoteHandler);
  activeNoteListElement.addEventListener('archive-note', archiveNoteHandler);
  archivedNoteListElement.addEventListener(
    'unarchive-note',
    unarchiveNoteHandler
  );

  fetchNotes();
};

export default home;
