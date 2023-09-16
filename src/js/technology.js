const data = [
    {
        name: "LAUNCH VEHICLE",
        text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        img: "./src/img/technology/launch.jpg"
    },
    {
        name: "SPACEPORT",
        text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        img: "./src/img/technology/rocket.jpg"
    },
    {
        name: "SPACE CAPSULE",
        text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        img: "./src/img/technology/cabe.jpg"
    }
];

function technologySwitch(e) {
    let index = [...e.target.parentElement.children].indexOf(e.target);
    let btns = document.querySelectorAll(".btn-num");

    for (let i = 0; i < data.length; ++i) {
        btns[i].classList.remove("btn-num_active");
    }

    btns[index].classList.add("btn-num_active");

    document.querySelector(".h3").innerHTML = data[index].name;
    document.querySelector(".text").innerHTML = data[index].text;
    document.querySelector(".img-technology").src = data[index].img;
}