import Counter from "./components/Counter";
import Hello from "./components/Hello"


function App() {
	return (
		<div className="App">
			<Hello name="Haris Maqsood" />
			<Hello name="Ali Maqsood" />
			<Hello name="Anwar Maqsood" />
			<Hello name="Abbas Maqsood" />
			<Hello name="Haris Maqsood" />
			Hi! I'm Haris Maqsood. I am a FullStack Developer. I work on Classic Programmers. I am {2 * 13} years old person.
			<Counter />
			
		</div>
	);
}

export default App;
