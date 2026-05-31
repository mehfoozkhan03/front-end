const addTodo = async () => {
  try {
    const text = document.querySelector('#text').value.trim();

    const todo = {
      text: text,
      isCompleted: false,
      isEdits: false,
    };

    let res = await fetch('http://localhost:3000/todo', {
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
