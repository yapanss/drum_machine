import React from 'react'
import Display from './Display'
import DrumPad from './DrumPad'



const App = () => {
	
		return (
			<div>
			<header>
				<h1>My Drum Machine</h1>
			</header>
			<main id="drum-machine">
				<Display />
				<DrumPad />
			</main>
			</div>
		)
	
}


export default App