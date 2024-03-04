import './App.css'
import './BadTime.css'

const App = () => {
  return (
    <div className='main-container'>
      <img
        src="https://static.wikia.nocookie.net/undertale/images/0/0f/Sans_battle_idle.gif/"
        alt="Sans"
        style={{maxHeight:'10em'}}
      />
      
      <ul className='text-box'>
        <li>* The easiest enemy. Can only deal 1 damage.</li>
        <li>* Can't keep dodging forever. Keep attacking. </li>
      </ul>
      <div className='health-container'>
        <p>HP</p>
        <div className='health-bar'/>
        <p>20/20</p>
      </div>

    </div>
  )
}

export default App
