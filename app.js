// SOCIAL BUTTONS
const whatsapp = document.querySelectorAll('.wbtn')
const twitter = document.querySelectorAll('.tbtn')



whatsapp.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.t.me/dogeisfood"
    })
})

twitter.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.x.com/retvrdioo"
    })
})



// TOP BUTTON
const topBtn = document.querySelector ('.top-button')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 200) {
        topBtn.classList.add('show-btn')
    } 
    else {
        topBtn.classList.remove('show-btn')
    }
})

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


// PROJECTS
const pages = [
    {
        id: 2,
        image: 'assets/hund 1.jpeg',
        title: 'hund 1',
    },
    {
        id: 3,
        image: 'assets/hund 2.jpeg',
        title: 'hund 2',
    },
    {
        id: 4,
        image: 'assets/hege.jpeg',
        title: 'hege',
    },
    {
        id: 5,
        image: 'assets/steady teddy 1.jpeg',
        title: 'steady teddys 1',
    },
    {
        id: 6,
        image: 'assets/steady teddy 2.jpeg',
        title: 'steady teddys 2',
    },
    {
        id: 7,
        image: 'assets/trench bunny 1.jpeg',
        title: 'trench bunny 1',
    },
    {
        id: 8,
        image: 'assets/trench bunny 2.jpeg',
        title: 'trench bunny 2',
    },
    {
        id: 9,
        image: 'assets/hund 3.jpeg',
        title: 'hund 3',
    },
    {
        id: 10,
        image: 'assets/monad.jpeg',
        title: 'monad',
    },
    {
        id: 11,
        image: 'assets/pepe.jpeg',
        title: 'pepe',
    },
    {
        id: 12,
        image: 'assets/quills.jpeg',
        title: 'quills',
    },
    {
        id: 13,
        image: 'assets/ontegrity.jpeg',
        title: 'ontegrity',
    },
    {
        id: 14,
        image: 'assets/paw ventures.jpeg',
        title: 'paw ventures',
    },
    {
        id: 15,
        image: 'assets/the mandalorian.jpeg',
        title: 'the mandalorian',
    },
    {
        id: 16,
        image: 'assets/LOK.jpeg',
        title: 'LOK',
    },
    {
        id: 17,
        image: 'assets/land wolf.jpeg',
        title: 'land wolf',
    },
];

// Sort alphabetically by title
pages.sort((a, b) => a.title.localeCompare(b.title));

const article = document.querySelector('.projects-content');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(pages);
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
            <article class="project">
                <div class="project-image">
                    <img src="${item.image}" alt="artwork">
                </div>

                <div class="project-text">
                    <h1>${item.title}</h1>
                </div>

                <div class="project-buttons">
                    <button class="code-button" data-src="${item.image}">view artwork</button>
                </div>
            </article>
        `;
    });

    article.innerHTML = displayMenu.join('');

    // Reattach modal listeners
    attachArtworkListeners();
}

function attachArtworkListeners() {
    const modal = document.getElementById('artwork-modal');
    const fullImg = document.getElementById('artwork-full');

    document.querySelectorAll('.code-button').forEach(button => {
        button.addEventListener('click', () => {
            const src = button.getAttribute('data-src');
            fullImg.src = src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}