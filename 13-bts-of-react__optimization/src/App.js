import React, { useState } from "react"
import Button from "./components/UI/Button/Button"
import "./App.css"

function App() {
	const [showPara, setShowPara] = useState(false)

	console.log("App running")
	const clickHandler = () => {
		setShowPara(!showPara)
	}
	return (
		<div className="app">
			<h1>Hi there!</h1>
			{showPara && <p>this is new</p>}
			<Button onClick={clickHandler}>Toggle para</Button>
		</div>
	)
}

export default App
