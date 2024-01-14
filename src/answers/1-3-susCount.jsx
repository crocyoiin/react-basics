import './App.css'

const App = () => {

  const numSus = 13;
  
  // VER 1: Using a loop
  const getSus = (times) => {
    let res = [];
    for (let i = 0; i < times; i++) {
      res.push(<p key={i}>among us</p>);
    }
    return res;
  }

  // VER 2: Using an arrow function
  const getSus2 = (times) => {
    return Array(times).fill().map((_, i) => <p key={i}>among us</p>);
  }

  // VER 3: You don't really need curly braces since this is a pretty simple function
  const getSus3 = (times) => Array(times).fill().map((_, i) => <p key={i}>among us</p>);


  return (
    <>
      {getSus(numSus)}
    </>
  )
}

export default App
