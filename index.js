const fetchData = async () => {
  let data = await fetch("https://api.publicapis.org/entries");
  data = await data.json();
  data.entries.forEach((entry) => {
    const box = document.createElement("div");

    const api = document.createElement("div");
    const description = document.createElement("div");
    const link = document.createElement("div");

    api.innerHTML = `<h2>${entry.API}</h2>`;
    description.innerHTML = `<span>${entry.Description}</span>`;
    link.innerHTML = `Link: <a href=${entry.Link}>${entry.Link}</a>`;

    box.appendChild(api);
    box.appendChild(description);
    box.appendChild(link);

    if (entry.Category === "Animals") {
      return document.querySelector("#animals").appendChild(box);
    }
    if (entry.Category === "Books") {
      return document.querySelector("#books").appendChild(box);
    }
    if (entry.Category === "Government") {
      return document.querySelector("#government").appendChild(box);
    }
    return document.querySelector("#others").appendChild(box);
  });
};

fetchData();
