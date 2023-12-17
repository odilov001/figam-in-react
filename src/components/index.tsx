import Categories from "./categories/categories";
import Project from "./dashboards";

function Render() {
	return (
		<div className="flex">
			<Categories />
			<Project />
		</div>
	);
}

export default Render;
