import React, { useState } from "react"
import Button from "./components/UI/Button/Button"
import "./App.css"
import DemoOutput from "./components/Demo/DemoOutput"

function App() {
	const [showPara, setShowPara] = useState(false)

	console.log("App running")
	const clickHandler = () => {
		setShowPara(!showPara)
	}
	return (
		<div className="app">
			<h1>Hi there!</h1>
			<h1>this is h1 tag used to toggle</h1>
			<DemoOutput show={showPara} />
			<Button onClick={clickHandler}>Toggle para</Button>
		</div>
	)
}

export default App;

