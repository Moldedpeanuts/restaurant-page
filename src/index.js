export const contentDiv = document.querySelector("#content");
import { loadHome } from "./home";
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});


const homeBtn = document.getElementById("home");

homeBtn.addEventListener('click', () => {
    contentDiv.textContent = '';
    loadHome();
}); 

