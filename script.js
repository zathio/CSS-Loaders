function pause(color) {
    document.querySelector(color).classList.toggle("pause");
    document.querySelector(color).parentNode.classList.toggle("pause-container");
};