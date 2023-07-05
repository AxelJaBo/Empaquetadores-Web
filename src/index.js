const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $nickname = document.querySelector('h2');
const $avatar = document.querySelector('img');

const data = {
    name: "Daniel Axel Jacobo Bojorquez",
    nickname: "AxelJaBo",
    description: " ",
    avatar: "https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.18169-9/13015185_1716894491929938_7315104444556807992_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3W4BpIoCO8cAX_dCnGp&_nc_ht=scontent.fmxl1-1.fna&oh=00_AfAZOK4Zp2-VzbYIm4wsdbUQ27J4Tn_DfgenRYEUQQ9aWg&oe=64CC6A2B",
    social: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/axel-jacobo-bojorquez/",
            username: "",
        },
        {
            name: "Github",
            url: "https://github.com/AxelJaBo",
            username: "",
        },
    ],
    links: [
        {
            name: "blog",
            url: "https://example.com/",
            color: "red",
            emoji: "📖",
        },
        {
            name: "podcast",
            url: "https://example.com/",
            color: "yellow",
            emoji: "💬",
        },
    ],
    footer: "Made with Love on México",
};

const main = () => {
    let name = document.createTextNode(data?.name);
    let nickname = document.createTextNode(data?.nickname);
    let links = data?.links?.map((link) => {
        return `
        <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
        </a>
        <span>${link.emoji}</span>
        </div>
        `;
    }).join('');
    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
    $nickname.appendChild(nickname);
    $avatar.src = `${data?.avatar}`;
    $avatar.alt = `${data?.name}`;
}

main();