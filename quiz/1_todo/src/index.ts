//type을 저장하는법 type과 interface
// type Todo = {
//     id: number;
//     title: string;
//     done: boolean;
// };
interface Todo {
    id: number;
    title: string;
    done: boolean;
}

let todoItems: Todo[];

// object[] -> 배열
function fetchTodoItems(): Todo[] {
    const todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}

function addTodo(todo: Todo): void {
    todoItems.push(todo);
}

function fetchTodos(): object[] {
    const todos = fetchTodoItems();
    return todos;
}

function deleteTodo(index: number) {
    todoItems.splice(index, 1);
}
function completeTodo(
    index: number,
    todo: { id: number; title: string; done: boolean }
): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

function logFirstTodo(): object {
    return todoItems[0];
}

function showCompleted(): object[] {
    return todoItems.filter((item) => item.done);
}

function addTwoTodoItems(): void {
    const item1 = {
        id: 4,
        title: "아이템 4",
        done: false,
    };
    addTodo(item1);
    addTodo({
        id: 5,
        title: "아이템 5",
        done: false,
    });
}

function log(): void {
    console.log(todoItems);
}
