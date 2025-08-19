const championListContainer = document.getElementById("champion-list");
const searchInput = document.getElementById("search");

function displayChampions(champions) {
  championListContainer.innerHTML = "";

  champions.forEach(champ => {
    const card = document.createElement("div");
    card.className = "champion-card";

    card.innerHTML = `
      <img src="https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champ.image.full}" alt="${champ.name}">
      <p>${champ.name}</p>
      <div class="card-options">
        <button class="btn-info">Informações</button>
        <button class="btn-runes">Runas</button>
        <button class="btn-items">Itens</button>
      </div>
    `;

    card.querySelector(".btn-info").addEventListener("click", e => {
      e.stopPropagation();
      localStorage.setItem("selectedChampion", champ.id);
      window.location.href = "info.html";
    });

    card.querySelector(".btn-runes").addEventListener("click", e => {
      e.stopPropagation();
      localStorage.setItem("selectedChampion", champ.id);
      window.location.href = "runas.html";
    });

    card.querySelector(".btn-items").addEventListener("click", e => {
      e.stopPropagation();
      localStorage.setItem("selectedChampion", champ.id);
      window.location.href = "itens.html";
    });

    championListContainer.appendChild(card);
  });
}

async function fetchChampions() {
  try {
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/13.23.1/data/pt_BR/champion.json");
    const data = await response.json();
    const championsArray = Object.values(data.data);
    displayChampions(championsArray);

    // Filtro de pesquisa
    searchInput.addEventListener("input", () => {
      const filtered = championsArray.filter(champ =>
        champ.name.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      displayChampions(filtered);
    });
  } catch (err) {
    console.error("Erro ao carregar campeões:", err);
  }
}

fetchChampions();