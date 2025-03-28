import React, { useState } from "react";
import "./App.css";

const projects = [
	{ name: "venshell", type: "App", year: "‘24", cover: "venshell.mp4", link: "https://github.com/glimeuxe/venshell" },
	{ name: "EmmyAI", type: "AI", year: "‘23", cover: "emmyai.png", link: "" },
	{ name: "Rhytra", type: "Game", year: "‘22", cover: "rhytra-3.png", link: "https://github.com/glimeuxe/rhytra" },
	{ name: "MinuteTab", type: "Page", year: "‘21", cover: "minutetab.png", link: "https://github.com/glimeuxe/minutetab" },
];

function App() {
	const defaultCover = projects[0].cover;
	const [activeCover, setActiveCover] = useState(defaultCover);

	return (
		<div className="container">
			<div className="media">
				{activeCover.endsWith(".mp4") ? (
					<video src={activeCover} autoPlay loop muted />
				) : (
					<img src={activeCover} alt="Project Cover" />
				)}
			</div>
			<table>
				<tbody>
					{projects.map((project, index) => (
						<tr
							key={index}
							onMouseEnter={() => setActiveCover(project.cover)}
							onMouseLeave={() => setActiveCover(defaultCover)}
						>
							<td>
								<a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
									<span>{project.name}</span>
								</a>
							</td>
							<td>
								<span>{project.type}</span>
							</td>
							<td>
								<span>{project.year}</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;