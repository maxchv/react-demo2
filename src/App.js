import React, { useState, createRef } from 'react';
import { BrowserRouter as Router, Link, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

function Counter(init) {
  let counter = init;
  const c = function () {
    return counter++;
  };
  return c;
}

function Button(props) {
  // Хук
  let [counter, setCounter] = useState(props.children);
  // const c = Counter(0);
  // let counter = props.children;
  // const click = () => counter = c();
  return (
    <div>
      <button style={{fontSize: "30px"}}
        onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}

function Student(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.age}</td>
    </tr>
  );
}

function StudentList(props) {
  const students = props.students;
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => <Student key={student.id} {...student} />)}
      </tbody>
    </table>
  );
}

function StudentForm(props) {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [age, setAge] = useState(0);
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    props.addStudent({
      firstName: firstName,
      lastName: lastName,
      age: age
    });
  };
  
  return (
    <form onSubmit={submitHandler}>
      <label>
        First Name
        <input required value={firstName} onChange={e => setFirstName(e.target.value)}/>
      </label>
      <label>
        Last Name
        <input required value={lastName} onChange={e => setLastName(e.target.value)}/>
      </label>
      <label>
        Age
        <input required value={age} type="number" onChange={e => setAge(e.target.value)} />
      </label>
      <input type="submit"/>
    </form>
  );
}

function Navigation(props) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>          
          <li><Link to="/list">List</Link></li>          
          <li><Link to="/add">Add</Link></li>
        </ul>
      </nav>
      <hr/>
    </div>
  );
}

function App() {
  
  const students = [
   { id: 1, firstName: "Вася", lastName: "Пупкин", age: 21 },
   { id: 2, firstName: "Маша", lastName: "Ефросинина", age: 41 },
   { id: 3, firstName: "Michael", lastName: "Jackson", age: 51 },
  ];

  let [studentsState, setStudent] = useState(students);

  const addStudent = (student) => {
    const newList = new Array(...studentsState);
    student.id = newList[newList.length - 1].id + 1;
    newList.push(student);
    setStudent(newList);
  }

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Header>Students</Header>   
        <Switch>
            <Route exact path="/" children={() => <div>Welcome to site</div>} />          
            {/* <Button>{0}</Button> */}
            <Route path="/add">
              <StudentForm addStudent={addStudent} />
            </Route>
            <Route path="/list">
              <StudentList students={studentsState} />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
