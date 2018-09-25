import React from "react";
import { Router, Link } from "react-static";
//
import Routes from "react-static-routes";

import "./app.css";

const App = () => (
	<Router>
		<div>
			<div>
				<Routes />
			</div>
		</div>
	</Router>
);

export default App;
