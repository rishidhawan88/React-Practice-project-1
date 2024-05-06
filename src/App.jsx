import coreConceptImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./coreComponentsData";

const arr=['one','two','three'];

function selectWord(maxCount){
  return(Math.floor(Math.random()*(maxCount+1)));
}


function CoreComponents(props){
  return(
    
    <li>
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
   
  );
}


function Header(){
   const word=arr[selectWord(2)];

  return(
   <header>
    
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {word} React concepts you will need for almost any app you are
      going to build!
    </p>
    </header>
    
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreComponents {...CORE_CONCEPTS[0]}/>
        <CoreComponents {...CORE_CONCEPTS[1]}/>
        <CoreComponents {...CORE_CONCEPTS[2]}/>
        <CoreComponents {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
