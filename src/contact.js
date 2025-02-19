import { contentDiv } from "./index.js";

export function loadContact() {
    const contactDiv = document.createElement("div");
    contactDiv.innerHTML = `
        <section class="contact">
            <h1>Contact Us</h1>
            <div class="chef">
                <h3>Amanda Rods</h3>
                <p>Chef</p>
                <p>6944356233</p>
            </div>
            <div class="manager">
                <h3>David Lander</h3>
                <p>Manager</p>
                <p>6922347389</p>

            </div>
            <div class="worker">
                <h3>Adam Sands</h3>
                <p>Waiter</p>
                <p>6937448278</p>
            </div>
        </section>
    `
    contentDiv.appendChild(contactDiv);
}