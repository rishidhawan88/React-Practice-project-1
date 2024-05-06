const arr=['one','two','three'];

function selectWord(maxCount){
  return(Math.floor(Math.random()*(maxCount+1)));
}

const word=arr[selectWord(2)];

function Header(){
  

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
      </main>
    </div>
  );
}

export default App;
