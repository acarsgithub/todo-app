import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'Add Reminders',
      newTodo: '',
      todos: []

    };
  }


  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
    });
  }


  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index]= {...todos[index]}; // copy the todo
    todos[index].done = event.target.checked; ///update done property on copied todo
    this.setState({
      todos
    });
  }


  removeToDo(index){
    const todos = [...this.state.todos]; //copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    })
  }


  formSubmitted(event){
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }


  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, // can also do "...todo" spread operator
        done: true
      };
    });

    this.setState({
      todos
    });
  }


  render(){
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm 
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
        />

        <button onClick={() => this.allDone()}>All Done</button>

        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeToDo={this.removeToDo.bind(this)}
        />

      </div>
    );
  }
}

export default App;
