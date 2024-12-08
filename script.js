document.addEventListener("DOMContentLoaded", function() {
    const experienceLink = document.getElementById("experience-link");
    const projectsLink = document.getElementById("projects-link");
    const contactLink = document.getElementById("contact-link");
    const plLink = document.getElementById("pl-link");
    const ukLink = document.getElementById("uk-link");

    const sections = document.querySelectorAll(".content-section");

    function highlightSection(section) {
        section.classList.add("highlight");
        setTimeout(() => {
            section.classList.remove("highlight");
        }, 1000);
    }

    experienceLink.addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        const experienceSection = document.getElementById("experience");
        experienceSection.classList.add("active");
        highlightSection(experienceSection);
    });

    projectsLink.addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        const projectsSection = document.getElementById("projects");
        projectsSection.classList.add("active");
        highlightSection(projectsSection);
    });

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        const toolsSection = document.getElementById("contact");
        toolsSection.classList.add("active");
        highlightSection(toolsSection);
    });

    plLink.addEventListener("click", function() {
        translateToPolish();
    });

    ukLink.addEventListener("click", function() {
        translateToEnglish();
    });

    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove("active");
        });
    }

    function translateToPolish() {
        document.querySelector("#about-me h1").innerHTML = "Cześć, jestem <span class='word'>Michał</span><br>";
        document.querySelector("#experience h1").innerText = "Doświadczenie";
        document.querySelector("#projects h1").innerText = "Projekty";
        document.querySelector("#tools h1").innerText = "Narzędzia";
        document.querySelector("#contact-link").innerText = "Kontakt";
        document.querySelector("#projects-link").innerText = "Projekty";
        document.querySelector("#experience-link").innerText = "Doświadczenie";
        document.querySelector("#experience-content p").innerText = "Wrzesień 2020 - teraz"
        document.querySelector("#WordWizzApp p").innerText = "Aplikacja na PC do nauki słówek z języka obcego"
        document.querySelector("#WordWizzWeb p").innerText = "Przekształcam moją aplikację w stronę internetową"
        document.querySelector("#phone").innerHTML = "<strong>Telefon: </strong>+48 666 222 777"
        document.querySelector("#location").innerHTML = "<strong>Lokalizacja: </strong>Polska, Katowice"
        // Dodaj więcej tłumaczeń w razie potrzeby
    }

    function translateToEnglish() {
        document.querySelector("#about-me h1").innerHTML = "Hello, I'm <span class='word'>Michał</span><br>";
        document.querySelector("#experience h1").innerText = "Experience";
        document.querySelector("#projects h1").innerText = "Projects";
        document.querySelector("#tools h1").innerText = "Tools";
        document.querySelector("#contact-link").innerText = "Contact";
        document.querySelector("#projects-link").innerText = "Projects";
        document.querySelector("#experience-link").innerText = "Experience";
        document.querySelector("#experience-content p").innerText = "September 2020 - now"
        document.querySelector("#WordWizzApp p").innerText = "A PC application for learning foreign language vocabulary"
        document.querySelector("#WordWizzWeb p").innerText = "I'm transforming my application into a website"
        document.querySelector("#phone").innerHTML = "<strong>Phone: </strong>+48 666 222 777"
        document.querySelector("#location").innerHTML = "<strong>Location: </strong>Poland, Katowice"
        
        // Dodaj więcej tłumaczeń w razie potrzeby
    }
});