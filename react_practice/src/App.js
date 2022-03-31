import "./App.css";
import React, { useReducer } from "react";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import ArrowFunction from "./components/ES6 Concepts/ArrowFunction";
import DestructingArrayandObject from "./components/ES6 Concepts/DestructingArrayandObject";
import LetVarConst from "./components/ES6 Concepts/LetVarConst";
import ObjectLiterals from "./components/ES6 Concepts/ObjectLiterals";
import RestOperator from "./components/ES6 Concepts/RestOperator";
import SpreadOperator from "./components/ES6 Concepts/SpreadOperator";
import MapReduceFilter from "./components/JavaScript/MapReduceFilter";
import { Greet } from "./components/React/FunctionalComponent";
import Welcome from "./components/React/ClassComponent";
import Jsx from "./components/React/Jsx";
import Props from "./components/React/Props";
import StateComponent from "./components/React/StateComponent";
import Counter from "./components/React/Counter";
import CounterTwo from "./components/React/Render Props/CounterTwo";
import EventHandling from "./components/React/EventHandling";
import EventBind from "./components/React/EventBind";
import MethodAsProps from "./components/React/MethodAsProps";
import ConditionalRendering from "./components/React/ConditionalRendering";
import ListRendering from "./components/React/ListRendering";
import StyleSheet from "./components/React/StyleSheet";
import Inline from "./components/React/Inline";
import Form from "./components/React/Form";
import LifecycleA from "./components/React/LifecycleA";
import Fragments from "./components/React/Fragments";
import Table from "./components/React/Table";
import PureComp from "./components/React/PureComp";
import ParentComponent from "./components/React/ParentComponent";
import RefsDemo from "./components/React/RefsDemo";
import FocusInput from "./components/React/FocusInput";
import FRParentInput from "./components/React/FRParentInput";
import PortalRoot from "./components/React/PortalRoot";
import Hero from "./components/React/Hero";
import ErrorBoundary from "./components/React/ErrorBoundary";
import ClickCounter from "./components/React/HOC/ClickCounter";
import HoverCounter from "./components/React/HOC/HoverCounter";
import ClickCounterTwo from "./components/React/Render Props/ClickCounterTwo";
import HoverCounterTwo from "./components/React/Render Props/HoverCounterTwo";
import User from "./components/React/Render Props/User";
import ComponentC from "./components/React/Context/ComponentC";
import { UserProvider } from "./components/React/Context/UserContext";
import PostList from "./components/React/HTTP/PostList";
import PostForm from "./components/React/HTTP/PostForm";
import HookCounter from "./components/React/Hooks/useState/HookCounter";
import HookCounterTwo from "./components/React/Hooks/useState/HookCounterTwo";
import HookCounterThree from "./components/React/Hooks/useState/HookCounterThree";
import HookCounterFour from "./components/React/Hooks/useState/HookCounterFour";
import HookCounterOne from "./components/React/Hooks/useEffect/HookCounterOne";
import ClassCounterOne from "./components/React/Hooks/useEffect/ClassCounterOne";
import ClassMouse from "./components/React/Hooks/useEffect/ClassMouse";
import HookMouse from "./components/React/Hooks/useEffect/HookMouse";
import MouseContainer from "./components/React/Hooks/useEffect/MouseContainer";
import IntervalClassCounter from "./components/React/Hooks/useEffect/IntervalClassCounter";
import IntervalHookCounter from "./components/React/Hooks/useEffect/IntervalHookCounter";
import DataFetching from "./components/React/Hooks/useEffect/DataFetching";
import ComponentCHooks from "./components/React/Hooks/useContext/ComponentCHooks";
import CounterOne from "./components/React/Hooks/useReducer/CounterOne";
import ReducerCounterTwo from "./components/React/Hooks/useReducer/CounterTwo";
import ReducerCounterThree from "./components/React/Hooks/useReducer/CounterThree";
import ReducerComponentA from "./components/React/Hooks/useReducer/ReducerComponentA";
import ReducerComponentB from "./components/React/Hooks/useReducer/ReducerComponentB";
import ReducerComponentC from "./components/React/Hooks/useReducer/ReducerComponentC";
import DataFetchingOne from "./components/React/Hooks/useReducer/DataFetchingOne";
import DataFetchingTwo from "./components/React/Hooks/useReducer/DataFetchingTwo";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
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

      {/* <LifecycleA/> */}
      {/* <Fragments/>
      <Table/> */}
      {/* <ParentComponent/> */}
      {/* <FocusInput/>
      <FRParentInput/>
      <PortalRoot/> */}
      {/* <ErrorBoundary>
        <Hero heroName="batman" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="superman" />
        </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Hero heroName="joker" />
        </ErrorBoundary> */}

      {/* <ClickCounter name="Priya"/>
      <HoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Priya' : "Guest"} /> */}
      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <UserProvider value="Priya">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}

      {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}

      {/* <DataFetching/> */}
      {/* <UserContext.Provider value={"Priya"}>
        <ChannelContext.Provider value={"Pandey"}>
          <ComponentCHooks />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne/>
      <ReducerCounterTwo/>
      <ReducerCounterThree/> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div className="App">
          Count = {count}
          <ReducerComponentA />
          <ReducerComponentB />
          <ReducerComponentC />
        </div>
      </CountContext.Provider> */}

      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </div>
  );
}

export default App;
