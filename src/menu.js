import { contentDiv } from "./index.js"

export function loadMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.innerHTML = `
        <section class="menu">
            <h1>Menu</h1>
            <h2>Drinks</h2>
            <div class="black-coffee">
                <h3>Black Coffee</h3>
                <p>
                "Rich, bold, and brewed to perfection, our Black Coffee is the perfect pick-me-up. Enjoy the pure, smooth flavor of freshly brewed coffee without any distractions."
                </p>
            </div>  
            <div class="mountain-tea">
                <h3>Mountain Tea</h3>
                <p>
                    "Delicately robust with a smooth, earthy flavor, our Black Mountain Tea offers a comforting and aromatic experience with every sip."
                </p>
            </div>
            <h2>Main Dishes</h2>
            <div class="pancakes">
                <h3>Pancakes</h3>
                <p>
                "Fluffy, golden pancakes stacked high and drizzled with rich, pure maple syrup—warm, sweet, and irresistible with every bite."
                </p>
            </div>
            <div class="french-toast">
                <h3>French Toast</h3>
                <p>
                "Golden, buttery French toast topped with rich, melted chocolate—perfectly sweet, decadent, and utterly irresistible."
                </p>
            </div>
            <div class="winkies-sandwich">
                <h3>Winkie's Sandwich</h3>
                <p>
                "Winkie’s Signature Deluxe Sandwich: A perfectly toasted brioche bun filled with layers of savory smoked turkey, crispy bacon, fresh avocado, and melted cheddar, topped with tangy mayo and a hint of mustard. Served with a side of crispy fries for the ultimate indulgence!"
                </p>
            </div>
            <div class="porridge">
                <h3>Porridge</h3>
                <p>
                "Warm, creamy, and comforting, our porridge is made with hearty oats, gently sweetened, and topped with your choice of fresh fruit, honey, or a sprinkle of cinnamon for the perfect cozy start to your day."
                </p>
            </div>
        </section>
    `
    contentDiv.appendChild(menuDiv);
}