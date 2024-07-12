import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components";
import { Error404, Home } from "./pages";

function App() {
	return (
		<BrowserRouter basename='/react-web-audio'>
			<div className='flex h-screen'>
				<div>
					<Sidebar />
				</div>
				<div className='bg-gray-100 flex-1'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
