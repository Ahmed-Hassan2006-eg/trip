const btn = document.getElementById("filterBtn");
const box = document.getElementById("filterBox");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const closeBtnn = document.getElementById("closeBtnn");
const search = document.getElementById("search");
const load = document.getElementById("load");
const input = document.getElementById("input");


btn.addEventListener("click", () => {
    box.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", closeFilter);
overlay.addEventListener("click", closeFilter);

function closeFilter() {
    box.classList.add("hidden");
    overlay.classList.add("hidden");
}
closeBtnn.addEventListener("click", () => {
    box.classList.add("hidden");
    overlay.classList.add("hidden");
})

document.querySelectorAll(".single-select .pill").forEach(btn => {
    btn.addEventListener("click", () => {

        document
            .querySelectorAll(".single-select .pill")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
    });
});
document.querySelectorAll(".multi-select .pill").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});
search.addEventListener("click", () => {
    load.classList.add("hidden");
})