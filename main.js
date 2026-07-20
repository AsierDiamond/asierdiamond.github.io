let dark = true;
window.toggleMode = function() {
    if (dark) {
        document.documentElement.classList.add("light")
        document.documentElement.classList.remove("dark")
    } else {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
    }
    dark = !dark;
};