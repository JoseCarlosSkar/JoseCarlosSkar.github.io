import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { ReinoK } from "./pages/reino_k";
import { ReinoA } from "./pages/reino_a";
import { ReinoC } from "./pages/reino_c";
import { ReinoD } from "./pages/reino_d";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} >
				<Route path="reino/k" element={<ReinoK />} />
				<Route path="reino/a" element={<ReinoA />} />
				<Route path="reino/c" element={<ReinoC />} />
				<Route path="reino/d" element={<ReinoD />} />
			</Route>
		</Routes >
	)
}
