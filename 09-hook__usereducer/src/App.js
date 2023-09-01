import Counter from './Intro/Counter';
import Todo from './Todo/Todo'
import './App.css';
import DemoInput from './Demo/DemoInput';

function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <Todo/>
      <br/>
      <DemoInput/>
    </div>
  );
}

export default App;
