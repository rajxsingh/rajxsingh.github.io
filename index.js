function getRandomColor() {
    const colors = ['#008C45', '#F4F9FF', '#CD212A'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function renderTrail(e) {
    const mouseX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    const mouseY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;

    // Create a new mouse trail element
    const mouseTrail = document.createElement('div');
    mouseTrail.className = 'mouse-trail';
    mouseTrail.style.left = mouseX + 'px';
    mouseTrail.style.top = mouseY + 'px';
    mouseTrail.style.backgroundColor = getRandomColor();

    // Append the trail element to the body
    document.body.appendChild(mouseTrail);

    // Remove the trail element after a short delay
    setTimeout(function () {
        mouseTrail.remove();
    }, 400);
}

function renderTiles() {
    const links = [
        {
            href: "/ast",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Assignment",
            description: "Analyse von Linux Malware &ndash; AST"
        },
        {
            href: "/ba",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Bachelor's thesis",
            description: "KI-gestützte Generierung dynamischer Webseiteninhalte"
        },
        {
            href: "/bru-game-jam/1",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Game",
            description: "Catch the dot"
        },
                {
            href: "/bru-game-jam/2",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Game",
            description: "BruDuck"
        },
        {
            href: "/dva",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Assignment",
            description: "Anonymisierungsverfahren zur Einhaltung der DSGVO"
        },
        {
            href: "/itsec-ghunter",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Assignment",
            description: "GHunter &ndash; ITSEC"
        },
        {
            href: "/ms",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Assignment",
            description: "The Effect of Structured Prompts on Small Instruction-Finetuned Language Models &ndash; MS"
        },
        {
            href: "/nonogram",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Game",
            description: "Nonogram"
        },
        {
            href: "/webprog",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Assignment",
            description: "Voic &ndash; WEBPROG"
        },
        {
            href: "/webprog-pm",
            icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V11h2v5.5zm0-7.5h-2V7h2v2z",
            title: "Assignment",
            description: "Project Management &ndash; WEBPROG"
        },
    ];

    const navContainer = document.getElementsByClassName("tiles")[0];

    links.sort((a,b) => a.title.localeCompare(b.title)).forEach(link => {
        const a = document.createElement("a");
        a.className = "tile";
        a.href = link.href;

        // Icon span
        const iconSpan = document.createElement("span");
        iconSpan.className = "ic";

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        svg.setAttribute("fill", "var(--accent)");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", link.icon);

        svg.appendChild(path);
        iconSpan.appendChild(svg);

        // Label span
        const labelSpan = document.createElement("span");
        labelSpan.className = "label";

        const titleSpan = document.createElement("span");
        titleSpan.className = "title";
        titleSpan.innerHTML = link.title;

        const descSpan = document.createElement("span");
        descSpan.className = "desc";
        descSpan.innerHTML = link.description;

        labelSpan.appendChild(titleSpan);
        labelSpan.appendChild(descSpan);

        // Assemble
        // a.appendChild(iconSpan);
        a.appendChild(labelSpan);

        navContainer.appendChild(a);
    });
}

document.addEventListener('mousemove', renderTrail);
document.addEventListener('touchmove', renderTrail);
document.addEventListener('DOMContentLoaded', renderTiles)