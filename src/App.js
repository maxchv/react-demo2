import React, {useState, createRef} from 'react';
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
        {students.map((student, index) => <Student key={index+1} {...student} />)}
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
  };
  
  return (
    <form onSubmit={submitHandler}>
      <label>
        First Name
        <input required value={firstName} onChange={e => setFirstName(e.target.value)}/>
      </label>
      <br/>
      <label>
        Last Name
        <input required value={lastName} onChange={e => setLastName(e.target.value)}/>
      </label>
      <br/>
      <label>
        Age
        <input required value={age} type="number" onChange={e => setAge(e.target.value)} />
      </label>
      <br/>
      <input type="submit"/>
    </form>
  );
}

const students = [
   { firstName: "Вася", lastName: "Пупкин", age: 21 },
   { firstName: "Маша", lastName: "Ефросинина", age: 41 },
   { firstName: "Michael", lastName: "Jackson", age: 51 },
];

function App() {


  return (
    <div className="App">
      <Header>Hello, World!</Header>
      <Button>{0}</Button>
      <StudentForm />
      <StudentList students={students}/>
    </div>
  );
}

export default App;
