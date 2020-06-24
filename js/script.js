// Função onclick - Deixa botão SOBRE destacado
function DivDisplayAbout() {
    document.getElementById('inicial_message').style.display = "none";
    document.getElementById('about').style.display = "flex";
    document.getElementById('services').style.display = "none";
    document.getElementById('contact').style.display = "none";

    var transition = document.getElementById('about');
    transition.classList.add('div_transition');

    var element = document.getElementById('aboutbutton');
    element.classList.add('addinjs');

    var element1 = document.getElementById('servicesbutton');
    element1.classList.remove('addinjs');

    var element2 = document.getElementById('contactbutton');
    element2.classList.remove('addinjs');

    console.log("Everything is ok");
}

// Função onclick - Deixa botão SERVIÇOS destacado
function DivDisplayServices() {
    document.getElementById('inicial_message').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('services').style.display = "flex";
    document.getElementById('contact').style.display = "none";

    var transition = document.getElementById('services');
    transition.classList.add('div_transition');

    var element = document.getElementById('aboutbutton');
    element.classList.remove('addinjs');

    var element1 = document.getElementById('servicesbutton');
    element1.classList.add('addinjs');

    var element2 = document.getElementById('contactbutton');
    element2.classList.remove('addinjs');

    console.log("Everything is ok");
}

// Função onclick - Deixa botão CONTATO destacado
function DivDisplayContact() {
    document.getElementById('inicial_message').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('services').style.display = "none";
    document.getElementById('contact').style.display = "flex";

    var transition = document.getElementById('contact');
    transition.classList.add('div_transition');

    var element = document.getElementById('aboutbutton');
    element.classList.remove('addinjs');

    var element1 = document.getElementById('servicesbutton');
    element1.classList.remove('addinjs');

    var element2 = document.getElementById('contactbutton');
    element2.classList.add('addinjs');

    console.log("Everything is ok");
}