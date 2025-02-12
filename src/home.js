import { contentDiv } from "./index.js";

export function loadHome() {
    const homeSection = document.createElement("section");
    contentDiv.appendChild(homeSection);
    
    const descriptionDiv = document.createElement("div");
    contentDiv.appendChild(descriptionDiv);
}