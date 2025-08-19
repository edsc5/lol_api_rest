const championId = localStorage.getItem("selectedChampion");
const contentDiv = document.getElementById("champion-content");
const nameH1 = document.getElementById("champion-name");

function loadItemsManual() {
  const champData = championsData[championId];

  if (champData && champData.items) {
    const items = champData.items;
    nameH1.textContent = championId;
    contentDiv.innerHTML = `
      <h3>Itens de ${championId}</h3>
      <p><strong>Itens principais:</strong> ${items.mainItems.join(", ")}</p>
      <p><strong>Itens situacionais:</strong> ${items.situationalItems.join(", ")}</p>
    `;
  } else {
    contentDiv.innerHTML = "<p>Itens não encontrados.</p>";
  }
}

loadItemsManual();