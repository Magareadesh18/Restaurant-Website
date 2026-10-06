function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("show");

}


/* MENU CATEGORY */

function showCategory(category) {

    const menus = document.querySelectorAll(".food-menu");

    menus.forEach(menu => {
        menu.classList.add("hidden");
    });

    document.getElementById(category).classList.remove("hidden");


    const buttons = document.querySelectorAll(".menu-tabs button");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

}


/* RESERVATION */

const reservationForm =
document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for choosing Casa Grande! " +
        "Your reservation request has been received."
    );

    reservationForm.reset();

});