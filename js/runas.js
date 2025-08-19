const championId = localStorage.getItem("selectedChampion");
const contentDiv = document.getElementById("champion-content");
const nameH1 = document.getElementById("champion-name");

function loadRunesManual() {
  const champData = championsData[championId];

  if (champData && champData.runes) {
    const runes = champData.runes;
    nameH1.textContent = championId;
    contentDiv.innerHTML = `
      <h3>Runas de ${championId}</h3>
      <p><strong>Primária:</strong> ${runes.primary}</p>
      <p><strong>Secundária:</strong> ${runes.secondary}</p>
      <p><strong>Essenciais:</strong> ${runes.essential.join(", ")}</p>
      <p><strong>Adicionais:</strong> ${runes.additional.join(", ")}</p>
    `;
  } else {
    contentDiv.innerHTML = "<p>Runas não encontradas.</p>";
  }
}

loadRunesManual();