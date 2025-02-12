import { contentDiv } from "./index.js";

export function loadHome() {
    const homeSection = document.createElement("section");
    contentDiv.appendChild(homeSection);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.style.border = "3px solid #FFB800";
    descriptionDiv.style.padding = "40px 20px";
    descriptionDiv.style.width = "200px";
    descriptionDiv.style.height = "180px";
    descriptionDiv.style.borderRadius = "20px";
    contentDiv.appendChild(descriptionDiv);
}