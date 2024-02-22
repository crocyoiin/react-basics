import './App.css'

const App = () => {

  const player = {
    name: "Link",
    favouriteFood: "Apples",
    stats: {
      health: 20,
      level: 13,
      stamina: 69,
    },
    theme: {
      backgroundColor: "black",
      color: "green"
    }
  }

  return (
    // We can actually pass in an object into the style attribute of a div to use it!
    <div style={player.theme}>
      
      <h1>{player.name}'s Profile!</h1>
      <p>My favourite food is {player.favouriteFood}</p>

      {/* You can't directly print out objects, so you either turn it into a string
      or use each attribute seperately */}
      <p>Crazy stats {JSON.stringify(player.stats)}</p>
      <p>Health: {player.stats.health}, Level: {player.stats.level}, Stamina: {player.stats.stamina}</p>

    </div>
  )
}

export default App
