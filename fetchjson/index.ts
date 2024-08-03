import axios from 'axios';

// const url = 

interface Todo {
    id: number;
    title: string;
    body: string
}

axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
   const todo = response.data as Todo;
   const id = todo.id;
   const title = todo.title;
   const body = todo.body;

   logoTodo(id, title, body)
});

function logoTodo(id: number, title: string, body: string){
    console.log(id, title, body)
}