const data = [
    {
        name: "Douglas Hurley",
        role: "Commander",
        text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        img: "./src/img/crew/crew-1.png"
    },
    {
        name: "MARK SHUTTLEWORTH",
        role: "Mission Specialist",
        text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        img: "./src/img/crew/crew-2.png"
    },
    {
        name: "Victor Glover",
        role: "PILOT",
        text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        img: "./src/img/crew/crew-3.png"
    },
    {
        name: "Anousheh Ansari",
        role: "Flight Engineer",
        text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        img: "./src/img/crew/crew-4.png"
    }
]

const switchCrew = (e) => {
    let index = [...e.target.parentElement.children].indexOf(e.target);
    let btns = document.querySelectorAll(".crew-btn");

    for (let i = 0; i < data.length; ++i) {
        btns[i].classList.remove("crew-btn_active");
    }

    btns[index].classList.add("crew-btn_active");

    document.querySelector(".h4").innerHTML = data[index].role;
    document.querySelector(".h3").innerHTML = data[index].name;
    document.querySelector(".text").innerHTML = data[index].text;
    document.querySelector(".crew-img").src = data[index].img;
}