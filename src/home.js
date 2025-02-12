import { contentDiv } from "./index.js";

export function loadHome() {
    const homeSection = document.createElement("section");
    homeSection.setAttribute("class", "home");
    contentDiv.appendChild(homeSection);

    const homeTitle = document.createElement("h1");
    homeTitle.textContent = "Winkie's"
    homeTitle.setAttribute("class", "home-title");
    contentDiv.appendChild(homeTitle);
    
    const descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("class", "description")
    contentDiv.appendChild(descriptionDiv);
    
    const homePara1 = document.createElement("p");
    homePara1.textContent = "Step into Winkie's where the coffee is hot, the pie is sweet, and the atmosphere is drenched in classic diner nostalgia. Nestled in the heart of Los Angeles, Winkie’s is more than just a roadside stop—it’s a place where late-night conversations linger, and the ordinary meets the mysterious. Whether you're here for a quick bite or something more, you never know what you might discover at Winkie’s. So grab a booth, sip your coffee, and let the story unfold.";
    descriptionDiv.appendChild(homePara1);
}

