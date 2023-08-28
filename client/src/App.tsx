import axios from "axios"
import { useEffect } from "react"

const apiUrl = import.meta.env.VITE_API_URL;
export default function App() {
	useEffect(() => {
		async function getData(){
			const res = await axios(`${apiUrl}/`);
			console.log(res.data);
		}

		getData()
	}, [])

	return <div className="bg-slate-300 flex justify-center h-screen">
		<button className="bg-red-300 h-auto">Test</button>
	</div>
}