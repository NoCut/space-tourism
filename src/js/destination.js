const data = [
    {
        name: "MOON",
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        date: "3 days",
    },
    {
        name: "MARS",
        text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. km",
        date: "9 months",
    },
    {
        name: "EUROPA",
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        date: "3 years",
    },
    {
        name: "TITAN",
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        date: "7 years",
    }
];

function destinationSwitch(e) {
    let planet = e.target.innerHTML;

    for (let i = 0; i < data.length; ++i) {
        if ( data[i].name === planet) {
           document.querySelector(".planet").src = `./src/img/destionation/${data[i].name.toLowerCase()}.png`;

           let btns = document.querySelectorAll(".btn");

           for (let j = 0; j < data.length; ++j) {
                btns[j].classList.remove("btn_active");

                if (btns[j].innerHTML === planet) btns[j].classList.add("btn_active");
            }

            document.querySelector(".text").innerHTML = data[i].text;
            document.querySelector(".h2").innerHTML = data[i].name;
            let specs = document.querySelectorAll(".sh1");

            specs[0].innerHTML = data[i].distance;
            specs[1].innerHTML = data[i].date;

            return;
        }
    }
}