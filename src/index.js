export const contentDiv = document.querySelector("#content");
import { loadHome } from "./home";
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});

