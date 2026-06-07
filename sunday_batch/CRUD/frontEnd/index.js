const API = 'http://localhost:3000/todo';
const todo = document.querySelector('#todo');

document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch(API);
  const data = await res.json();
  renderUI(data);
});

const renderUI = (value) => {
  value &&
    value?.map((el) => {
      const singleTodoDiv = document.createElement('div');
      const checkBox = document.createElement('input');
      const editInputText = document.createElement('input');
      const text = document.createElement('h1');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      const confirmBtn = document.createElement('button');
      const cancelBtn = document.createElement('button');

      checkBox.type = 'checkbox';
      text.innerText = el?.text;
      editBtn.innerText = 'edit';
      deleteBtn.innerText = 'delete';
      confirmBtn.innerText = 'confirm';
      cancelBtn.innerText = 'cancel';
      editInputText.type = 'text';

      singleTodoDiv.style =
        'display:flex; justify-content:space-evenly; align-items:center';

      // logic

      editInputText.value = el.text;

      !el.isEdits && (editInputText.className = 'd-none');
      el.isEdits && (text.className = 'd-none');

      !el.isEdits && (confirmBtn.classList = 'd-none');
      !el.isEdits && (cancelBtn.classList = 'd-none');

      el.isEdits && (deleteBtn.classList = 'd-none');
      el.isEdits && (editBtn.classList = 'd-none');

      editBtn.addEventListener('click', () => {
        editFunc(el.id);
      });

      confirmBtn.addEventListener('click', () => {
        confirmFunc(el.id, editInputText.value);
      });

      cancelBtn.addEventListener('click', () => {
        cancelFunc(el.id);
      });

      singleTodoDiv.append(
        checkBox,
        text,
        editInputText,
        confirmBtn,
        cancelBtn,
        editBtn,
        deleteBtn,
      );
      todo.append(singleTodoDiv);
    });
};

const editFunc = async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isEdits: true }),
  });
};
const confirmFunc = async (id, text) => {
  await fetch(`${API}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isEdits: false, text: text }),
  });
};

const cancelFunc = async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isEdits: false }),
  });
};

const deleteFunc = () => {};

const addTodo = async () => {
  try {
    const text = document.querySelector('#text').value.trim();

    const todo = {
      text: text,
      isCompleted: false,
      isEdits: false,
    };

    let res = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    let data = await res.json();
    console.log(`🚀 ~ data:`, data);
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
};
