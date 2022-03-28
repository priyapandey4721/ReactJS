import './App.css';
import ArrowFunction from './components/ES6 Concepts/ArrowFunction';
import DestructingArrayandObject from './components/ES6 Concepts/DestructingArrayandObject';
import LetVarConst from './components/ES6 Concepts/LetVarConst';
import ObjectLiterals from './components/ES6 Concepts/ObjectLiterals';
import RestOperator from './components/ES6 Concepts/RestOperator';
import SpreadOperator from './components/ES6 Concepts/SpreadOperator';
import MapReduceFilter from './components/JavaScript/MapReduceFilter';
function App() {
  return (
    <div className="App">
      <LetVarConst/>
      <ArrowFunction/>
      <ObjectLiterals/>
      <RestOperator/>
      <SpreadOperator/>
      <DestructingArrayandObject/>
      <MapReduceFilter/>
    </div>
  );
}

export default App;
