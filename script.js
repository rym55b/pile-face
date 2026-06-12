function RandomAction() {
    let result = Math.random() < 0.5;

    if (result) {
        document.querySelector(".heads").style.display = "block";
        document.querySelector(".tails").style.display = "none";
    } else {
        document.querySelector(".heads").style.display = "none";
        document.querySelector(".tails").style.display = "block";
    }
}