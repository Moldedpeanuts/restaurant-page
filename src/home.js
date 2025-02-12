import { contentDiv } from "./index.js";

export function loadHome() {
    const homeSection = document.createElement("section");
    homeSection.setAttribute("class", "home");
    contentDiv.appendChild(homeSection);

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Winkie's"
    contentDiv.appendChild(homeTitle);
    
    const descriptionDiv = document.createElement("div");
    contentDiv.appendChild(descriptionDiv);
}

