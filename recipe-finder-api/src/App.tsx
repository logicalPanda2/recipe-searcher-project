import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<h1 onClick={() => {setCount(c => c + 1)}}>Hello World! Count: {count} </h1>
	);
}

export default App;
