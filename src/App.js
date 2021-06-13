// We import React in order to use exports that React provides
// eslint-disable-next-line
import React, { useState } from "react";
// We import our css file
import "./App.css";
// import background from './src/LR-108.jpg'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   const [item, setItems] = useState('');
//   const [todos, SetTodos] = useState([]);

//   const handleSubmit =(event) => {
//     // We stop the refresh
//     event.preventDefault();

//     // takes the strings inputed, set them attach the new string. 
//     // the three dots before todos is the array of the value of todos.
//     // so we basically have 3 elements and we adding a new a element to them
//     SetTodos([...todos, event.target.value]);
//     setItems('')
//   }

//   const indexTodo = index => {
//     const newTodos = [...todos];
//     newTodos[index].isDone = true;
//     SetTodos(newTodos);
//   };

//   const handleItem = (event) => {    
//     setItems([event.target.value])
//   };

//   const handleDelete = (todo) => {
//     // creating a new array without the deleted element
//     SetTodos(todos.filter(todoElement => todoElement !==todo)) }

//     const removeTodo = index => {
//       const newTodos = [...todos];
//       newTodos.splice(index, 1);
//       SetTodos(newTodos);
//     };

//     const addTodo = text => {
//       const newTodos = [...todos, { text }];
//       SetTodos(newTodos);
//     };

//   return (
//     <div className='App'>
      

//         <header className = "APP_header" >
//         Todo
//         <br></br> 
      
//         <form addTodo={addTodo} onSubmit={handleSubmit}>
//         <input placeholder="add item"
//           key={item.id}
//           value={item}
//           onChange={handleItem}
//           markTodo={indexTodo}
//           removeTodo={removeTodo}>
//             {item.text}</input>

//           {/* create a button to submit the items */}
//           <button type='submit'>Add</button>
//         </form>

//         {/* o print our elements by creating a list element */}
//         Groceries
//         <ul>
//             {
//                 // for each element 
//               todos.map(todo =>{
//                 return (<li>{todo}<button onClick={handleDelete(todo)}>x</button></li>)
                
//               })
//             }
//         </ul>
        
//       </header>
//     </div>
//   )
// }



/* Below we create 3 components, 3 states and an object in order to create our to do list app.
we first create a form where our users will add the items
using the state hook, we define our list -todos 
 
*/

// This is where we create our form, where the user will enter items
function FormTodo({ addTodo }) {
      // set item recalls the item, we also use preventDefault to prevent auto refresh.
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
// we want to return the form with the place holders and submit buttoninput
  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add your to-do</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add items" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Add Item
    </Button>
  </Form>
  );
}

// secondly we create a funtion for our output. Here we create the remove and complete button with our input.
function Todo({ todo, index, markTodo, removeTodo }) {
      
  return (
    <div
      className="todo"
      
    >
//         if the to is done then line through
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓complete</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕remove</Button>
      </div>
    </div>
  );
}

/** This where we put everything together. we takes the strings inputed, set them attach the new string. 
 the three dots before todos is the array of the value of todos.
 so we basically have 3 elements and we adding a new a element to them. we define it also for when we want to remove and complete the to do.  **/
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
// In Nodejs, to use a variable or a function in another file, you have to export them. 
export default App;
