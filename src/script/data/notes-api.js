const BASE_URL = 'https://notes-api.dicoding.dev/v2';

const getAllNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;
  } catch (error) {
    throw error;
  }
};

const getArchivedNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes/archived`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.data;
  } catch (error) {
    throw error;
  }
};

const createNote = async ({ title, body }) => {
  try {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.message;
  } catch (error) {
    throw error;
  }
};

const deleteNote = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.message;
  } catch (error) {
    throw error;
  }
};

const archiveNote = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
      method: 'POST',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.meessage);
    }

    return responseJson.message;
  } catch (error) {
    throw error;
  }
};

const unarchiveNote = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
      method: 'POST',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }

    return responseJson.message;
  } catch (error) {
    throw error;
  }
};

export {
  getAllNotes,
  getArchivedNotes,
  createNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
};
