export const contentDiv = document.querySelector("#content");
import { loadHome } from "./home.js";
import './styles.css';
import { loadMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});


const homeBtn = document.getElementById("home");

homeBtn.addEventListener('click', () => {
    contentDiv.textContent = '';
    loadHome();
}); 

const menuBtn = document.getElementById("menu");

menuBtn.addEventListener('click', () => {
    contentDiv.textContent = '';
    loadMenu();
});