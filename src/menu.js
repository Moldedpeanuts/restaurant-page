import { contentDiv } from "./index.js"

export function loadMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.innerHTML = `
        <section class="menu">
            <h1>Menu</h1>
            <h2>Drinks</h2>
            <div class="item">
                <h3>Black Coffee</h3>
                <p>
                "Rich, bold, and brewed to perfection, our Black Coffee is the perfect pick-me-up. Enjoy the pure, smooth flavor of freshly brewed coffee without any distractions."
                </p>
            </div>  
            <div class="item">
                <h3>Mountain Tea</h3>
                <p>
                    "Delicately robust with a smooth, earthy flavor, our Black Mountain Tea offers a comforting and aromatic experience with every sip."
                </p>
            </div>
            <h2>Main Dishes</h2>
            <div class="item">
                <h3>Pancakes</h3>
                <p>
                "Fluffy, golden pancakes stacked high and drizzled with rich, pure maple syrup—warm, sweet, and irresistible with every bite."
                </p>
            </div>
            <div class="item">
                <h3>French Toast</h3>
                <p>
                "Golden, buttery French toast topped with rich, melted chocolate—perfectly sweet, decadent, and utterly irresistible."
                </p>
            </div>
        </section>
    `
    contentDiv.appendChild(menuDiv);
}