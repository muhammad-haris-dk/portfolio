var home = document.getElementById("home");
var education = document.getElementById("education");
var work = document.getElementById("work");
var publication = document.getElementById("publication");
var books_awards = document.getElementById("books_award");
var events = document.getElementById("events");
var contact = document.getElementById("contact");

var sections = [
  home,
  education,
  work,
  publication,
  books_awards,
  events,
  contact,
];

var home__icon = document.getElementById("home__icon");
var edu__icon = document.getElementById("edu__icon");
var work__icon = document.getElementById("work__icon");
var public__icon = document.getElementById("public__icon");
var book__icon = document.getElementById("book__icon");
var events__icon = document.getElementById("events__icon");
var contact__icon = document.getElementById("contact__icon");
var home__icon1 = document.getElementById("home__icon1");
var edu__icon1 = document.getElementById("edu__icon1");
var work__icon1 = document.getElementById("work__icon1");
var public__icon1 = document.getElementById("public__icon1");
var book__icon1 = document.getElementById("book__icon1");
var events__icon1 = document.getElementById("events__icon1");
var contact__icon1 = document.getElementById("contact__icon1");

var skills = document.getElementById("skills");
var administrative__container = document.getElementById(
  "administrative__container"
);
var sidebar = document.getElementById("sidebar");

var right__side = document.getElementById("right__side");

var humburger = document.getElementById("humburger");
var right_sidebar = document.getElementById("right_sidebar");

var center = document.getElementById("center");
var icons = [
  home__icon,
  edu__icon,
  work__icon,
  public__icon,
  book__icon,
  events__icon,
  contact__icon,
];
var icons1 = [
  home__icon1,
  edu__icon1,
  work__icon1,
  public__icon1,
  book__icon1,
  events__icon1,
  contact__icon1,
];

var activeSection = "home";

function activateContact() {
  activeSection = "contact";
  sections.forEach((section) => {
    section.style.display = "none";
  });

  icons.forEach((icon) => {
    icon.style.backgroundColor = "transparent";
  });

  contact.style.display = "block";
  contact__icon.style.backgroundColor = "#ffb400";
  contact__icon1.style.backgroundColor = "#ffb400";
  home__icon.style.backgroundColor = "transparent";
  home__icon1.style.backgroundColor = "transparent";
}

function showCenter(active, icon) {
  activeSection = active;
  sections.forEach((section) => {
    section.style.display = "none";
  });

  icons.forEach((icon) => {
    icon.style.backgroundColor = "transparent";
  });

  if (active === "home") {
    home.style.display = "block";
    home__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "education") {
    education.style.display = "block";
    edu__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "work") {
    work.style.display = "block";
    work__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "publication") {
    publication.style.display = "block";
    public__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "books_award") {
    books_awards.style.display = "block";
    book__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "events") {
    events.style.display = "block";
    events__icon.style.backgroundColor = "#ffb400";
  }
  if (active === "contact") {
    contact.style.display = "block";
    contact__icon.style.backgroundColor = "#ffb400";
  }
}

function showCenter1(active, icon) {
  activeSection = active;
  sections.forEach((section) => {
    section.style.display = "none";
  });

  icons1.forEach((icon) => {
    icon.style.backgroundColor = "transparent";
  });

  if (active === "home") {
    home.style.display = "block";
    home__icon1.style.backgroundColor = "#ffb400";
    administrative__container.style.display = "none";
    skills.style.display = "block";
  }
  if (active === "education") {
    education.style.display = "block";
    edu__icon1.style.backgroundColor = "#ffb400";
    administrative__container.style.display = "none";
    skills.style.display = "block";
  }
  if (active === "work") {
    work.style.display = "block";
    work__icon1.style.backgroundColor = "#ffb400";
    skills.style.display = "none";
    administrative__container.style.display = "block";
  }
  if (active === "publication") {
    publication.style.display = "block";
    public__icon1.style.backgroundColor = "#ffb400";
  }

  if (active === "books_award") {
    books_awards.style.display = "block";
    book__icon1.style.backgroundColor = "#ffb400";
    administrative__container.style.display = "none";
    skills.style.display = "block";
  }
  if (active === "events") {
    events.style.display = "block";
    events__icon1.style.backgroundColor = "#ffb400";
    administrative__container.style.display = "block";
    skills.style.display = "none";
  }
  if (active === "contact") {
    contact.style.display = "block";
    contact__icon1.style.backgroundColor = "#ffb400";
  }
}
function updateActiveIcon() {
  if (activeSection === "home") {
    home__icon.style.backgroundColor = "#ffb400";
    home__icon1.style.backgroundColor = "#ffb400";
  } else if (activeSection === "education") {
    edu__icon.style.backgroundColor = "#ffb400";
    edu__icon1.style.backgroundColor = "#ffb400";
  } else if (activeSection === "work") {
    work__icon.style.backgroundColor = "#ffb400";
    work__icon1.style.backgroundColor = "#ffb400";
  } else if (activeSection === "publication") {
    public__icon.style.backgroundColor = "#ffb400";
    public__icon1.style.backgroundColor = "#ffb400";
  } else if (activeSection === "books_award") {
    book__icon.style.backgroundColor = "#ffb400";
    book__icon1.style.backgroundColor = "#ffb400";
  } else if (activeSection === "events") {
    events__icon.style.backgroundColor = "#ffb400";
    events__icon1.style.backgroundColor = "#ffb400";
  } else if (activeSection === "contact") {
    contact__icon.style.backgroundColor = "#ffb400";
    contact__icon1.style.backgroundColor = "#ffb400";
  }
}

function handleResize() {
  icons.forEach((icon) => (icon.style.backgroundColor = "transparent"));
  icons1.forEach((icon) => (icon.style.backgroundColor = "transparent"));

  updateActiveIcon();
}

window.addEventListener("resize", handleResize);

function toggleReadMore(id) {
  const content = document.getElementById(`book-content${id}`);
  const button = document.getElementById(`read-more-btn${id}`);

  if (content.classList.contains(`expanded${id}`)) {
    content.classList.remove(`expanded${id}`);
    button.innerText = "Read More";
  } else {
    content.classList.add(`expanded${id}`);
    button.innerText = "Read Less";
  }
}
function toggleReadMoreAward(id) {
  const content = document.getElementById(`award-content${id}`);
  const button = document.getElementById(`read-more-award-btn${id}`);

  if (content.classList.contains(`expanded${id}`)) {
    content.classList.remove(`expanded${id}`);
    button.innerText = "Read More";
  } else {
    content.classList.add(`expanded${id}`);
    button.innerText = "Read Less";
  }
}

function onReload() {
  activeSection = "home";
  showCenter("home", "home__icon");
  home__icon.style.backgroundColor = "#ffb400";
  home__icon1.style.backgroundColor = "#ffb400";
}

onReload();
