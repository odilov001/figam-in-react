import { Component } from "react";

//LOGICAL FUNCTIONS

// function checked() {
// 	const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkbox");
// 	const spanElms: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".spanText");

// 	checkboxes.forEach((checkbox, index) => {
// 		const spanText = spanElms[index];

// 		if (checkbox && spanText && !checkbox.disabled) {
// 			checkbox.disabled = true;

// 			const delElement = document.createElement("del");
// 			delElement.textContent = spanText.textContent;
// 			delElement.className = "pl-[20px]";
// 			spanText.parentNode!.replaceChild(delElement, spanText);
// 		}
// 	});
// }

//HANDLER FUNCTIONS
function handlerSubmit() {
	const form: HTMLFormElement = document.forms[0];
	const list: HTMLUListElement = document.querySelector(".list")!;
	const inputAdd: HTMLInputElement = document.querySelector(".input-add")!;

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (inputAdd.value === "") return;

		const listItem = document.createElement("li");
		listItem.classList.add("border-b-[1px]", "border-white", "ml-[-140px]", "w-[700px]");
		// listItem.setAttribute("onclick", "checked()");

		const checkbox = document.createElement("input");
		checkbox.classList.add("checkbox", "accent-green-500", "w-[30px]", "h-[30px]");
		checkbox.type = "checkbox";

		const spanText = document.createElement("span");
		spanText.classList.add("pl-[20px]", "spanText", "text-[30px]");
		spanText.textContent = inputAdd.value;

		listItem.innerHTML = `
									<div class="flex items-center justify-between">
													<div>
																	${checkbox.outerHTML}
																	${spanText.outerHTML}
													</div>
													<div>
																	<span class="cursor-pointer delete">❌</span>
													</div>
									</div>
					`;

		list.appendChild(listItem);
		inputAdd.value = "";
	});
}

// function handlerDelete() {
// 	const delElms: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".delete");

// 	delElms.forEach((elm) => {
// 		elm.parentElement!.remove(); // Ota elementni o'chirish (ro'yxat elementi)
// 	});
// }

class Main extends Component {
	render() {
		return (
			<>
				<div className="todo ">
					<h1 className="text-center text-[80px] mb-[200px]">Todo List</h1>
					<div className="add relative bottom-[210px] left-[250px]">
						<form
							className="flex items-center gap-[10px] "
							onChange={handlerSubmit}
							action="
								"
						>
							<input
								className="input-add text-[20px] placeholder:pt-[10x] bg-inherit pl-[20px] rounded-[10px] border-[1px] border-white outline-none  w-80 h-[50px]  "
								type="text"
								placeholder="Create Your Plans"
							/>
							<button className="h-[50px]  rounded-[10px] border-[1px] border-white w-[50px] pt-[10px]">
								Add
							</button>
						</form>
					</div>

					<div className="todos flex flex-col items-center pt-[10px]  w-[900px] h-[500px] rounded-[10px] backdrop-blur-sm bg-white/10 mt-[-200px] overflow-scroll ">
						<ul
							className="list max-w-md text-[20px] flex flex-col gap-[20px] mt-[50px] 	scroll-smooth
							focus:scroll-auto"
						></ul>
					</div>
				</div>
			</>
		);
	}
}
export default Main;
