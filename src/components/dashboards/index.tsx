import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import Table from "./tables";

function Project() {
	return (
		<div className="dash w-[100%] min-h-[100vh] ">
			<Navbar />
			<Header />
			<Table />
			<Footer />
		</div>
	);
}

export default Project;
