import './App.css'

// INLINE STYLING VER
const App = () => {
  const textStyle = {
    fontWeight: "bold",
  }

  return (
    <div style={{background: 'black', padding: '3em'}}>
      <img
        src="https://static.wikia.nocookie.net/undertale/images/0/0f/Sans_battle_idle.gif/"
        alt="Sans"
        style={{maxHeight:'10em'}}
      />
      
      <ul style={{
        listStyleType: 'none', 
        border: '3px solid white', 
        alignContent: 'start', 
        padding:'2em', 
        fontSize:'16px',
        fontWeight:'600',
        margin:'0em'
      }}>
        <li>* The easiest enemy. Can only deal 1 damage.</li>
        <li>* Can't keep dodging forever. Keep attacking. </li>
      </ul>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <p style={textStyle}>HP</p>
        <div style={{width: '5em', height: '1.3em', background: 'yellow', margin:'0em 1em'}}/>
        <p style={textStyle}>20/20</p>
      </div>

    </div>
  )
}


export default App