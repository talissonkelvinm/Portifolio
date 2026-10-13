const portfolioLinks = {
  github: "https://github.com/talissonkelvinm",
  linkedin: "",
  certificates: "",
  projects: [
    "https://github.com/talissonkelvinm/Autodesk",
    "https://github.com/talissonkelvinm/Desafio-HTML---casa-virtual"
  ]
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const url = portfolioLinks[element.dataset.link];
  if (url) {
    element.href = url;
  } else {
    element.href = "#";
    element.addEventListener("click", (event) => event.preventDefault());
  }
});

document.querySelectorAll("[data-project]").forEach((element) => {
  const url = portfolioLinks.projects[Number(element.dataset.project)];
  if (url) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  } else {
    element.href = "#";
    element.addEventListener("click", (event) => event.preventDefault());
  }
});