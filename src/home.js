import { contentDiv } from "./index.js";

export function loadHome() {
    const homeDiv = document.createElement("div");
    homeDiv.innerHTML = 
        `
            <section class="home">
                <h1 class="home-title">Winkie's</h1>
                <div class="description">
                    <p>
                        "Step into Winkie's where the coffee is hot, the pie is sweet, and the atmosphere is drenched in classic diner nostalgia. Nestled in the heart of Los Angeles, Winkie’s is more than just a roadside stop—it’s a place where late-night conversations linger, and the ordinary meets the mysterious. Whether you're here for a quick bite or something more, you never know what you might discover at Winkie’s. So grab a booth, sip your coffee, and let the story unfold."
                    </p>
                </div>
                <div class="hours">

                    <h2>Hours</h2>
                    <ul>
                        <li>Sunday: 8am - 8pm</li>

                        <li>Monday: 6am - 8pm</li>

                        <li>Tuesday: 6am - 8pm</li>

                        <li>Wednesday: 6am - 8pm</li>

                        <li>Thursday: 6am - 8pm</li>

                        <li>Friday: 6am - 8pm</li>

                        <li>Saturday: 8am - 8pm</li>
                    </ul>
                </div>
                <div class="location">
                    <h2>Location</h2>
                    <p>1016 W El Segundo Blvd, Gardena</p>
                </div>
            </section>
        `;
    contentDiv.appendChild(homeDiv);
}

