document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const deleteAllBtn = document.getElementById('delete-all-btn');
    const motivationalQuote = document.getElementById('motivational-quote');
    const dateTimeDisplay = document.getElementById('date-time'); // Get the date-time element
    const quotes = [
        "Keep going, you're doing great!",
        "Well done! Keep up the good work!",
        "You're amazing! Keep pushing forward!",
        "Every accomplishment starts with the decision to try.",
        "Believe you can and you're halfway there."
    ];

    const fetchTodos = async () => {
        const response = await fetch('/api/todos');
        const todos = await response.json();
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.classList.toggle('completed', todo.completed);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.onchange = async () => {
                await fetch(`/api/todos/${todo.id}/complete`, { method: 'PUT' });
                li.classList.add('removed');
                setTimeout(fetchTodos, 1000);
                if (!todo.completed) {
                    showMotivationalQuote();
                }
            };

            const title = document.createElement('span');
            title.textContent = todo.title;

            const deleteLogo = document.createElement('img');
            deleteLogo.src = 'delete-logo.png'; // Use your own logo image
            deleteLogo.alt = 'Delete';
            deleteLogo.onclick = async () => {
                li.classList.add('removed');
                setTimeout(async () => {
                    await fetch(`/api/todos/${todo.id}`, { method: 'DELETE' });
                    fetchTodos();
                }, 1000);
            };

            li.appendChild(checkbox);
            li.appendChild(title);
            li.appendChild(deleteLogo);
            todoList.appendChild(li);
        });
    };

    const showMotivationalQuote = () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        motivationalQuote.textContent = randomQuote;
        motivationalQuote.style.display = 'block';
        setTimeout(() => {
            motivationalQuote.style.display = 'none';
        }, 5000);
    };

    form.onsubmit = async (e) => {
        e.preventDefault();
        const title = input.value.trim();
        if (title) {
            await fetch('/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, completed: false })
            });
            input.value = '';
            fetchTodos();
        }
    };

    deleteAllBtn.onclick = async () => {
        await fetch('/api/todos', { method: 'DELETE' });
        fetchTodos();
    };

    const updateDateTime = () => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        dateTimeDisplay.textContent = formattedDateTime;
    };

    setInterval(updateDateTime, 1000); // Update the date and time every second
    fetchTodos();
});
