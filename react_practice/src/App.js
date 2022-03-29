import './App.css';
import "./appStyles.css"
import styles from "./appStyles.module.css"
import ArrowFunction from './components/ES6 Concepts/ArrowFunction';
import DestructingArrayandObject from './components/ES6 Concepts/DestructingArrayandObject';
import LetVarConst from './components/ES6 Concepts/LetVarConst';
import ObjectLiterals from './components/ES6 Concepts/ObjectLiterals';
import RestOperator from './components/ES6 Concepts/RestOperator';
import SpreadOperator from './components/ES6 Concepts/SpreadOperator';
import MapReduceFilter from './components/JavaScript/MapReduceFilter';
import { Greet } from './components/React/FunctionalComponent';
import Welcome from './components/React/ClassComponent';
import Jsx from './components/React/Jsx';
import Props from './components/React/Props';
import StateComponent from './components/React/StateComponent';
import Counter from './components/React/Counter';
import EventHandling from './components/React/EventHandling';
import EventBind from './components/React/EventBind';
import MethodAsProps from './components/React/MethodAsProps';
import ConditionalRendering from './components/React/ConditionalRendering';
import ListRendering from './components/React/ListRendering';
import StyleSheet from './components/React/StyleSheet';
import Inline from './components/React/Inline';
import Form from './components/React/Form'
import LifecycleA from './components/React/LifecycleA';
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <LetVarConst/>
      <ArrowFunction/>
      <ObjectLiterals/>
      <RestOperator/>
      <SpreadOperator/>
      <DestructingArrayandObject/>
      <MapReduceFilter/> */}



      {/* <Greet/>
      <Welcome name="Priya" heroname="Cindrella"/>
      <Welcome name="Preeti" heroname="Wonder Woman"/>
      <Welcome name="Komal" heroname="Barbie"/>
      <Jsx/>
      <Props name="Priya" heroname="Cindrella">
        <p>This is Children props</p>
      </Props>
      <Props name="Preeti" heroname="Wonder Woman">
        <button>Click Me</button>
      </Props>
      <Props name="Komal" heroname="Barbie"/>
      <StateComponent/>
      <Counter/>
      <EventHandling/>
      <EventBind/>
      <MethodAsProps/>
      <ConditionalRendering/>
      <ListRendering/>
      <StyleSheet primary={true}/>
      <Inline/> */}



{/* 
      <Form/> */}


      <LifecycleA/>
    </div>
  );
}

export default App;
