const tagPTBR = {
  "Assassin": "Assassino",
  "Fighter": "Lutador",
  "Mage": "Mago",
  "Marksman": "Atirador",
  "Support": "Suporte",
  "Tank": "Tanque"
};

const championId = localStorage.getItem("selectedChampion");
const contentDiv = document.getElementById("champion-content");
const nameH1 = document.getElementById("champion-name");

const notesSection = document.getElementById("notes-section");
const noteForm = document.getElementById("note-form");
const noteText = document.getElementById("note-text");

async function fetchNotes() {
    notesSection.innerHTML = "Carregando anotações...";
    try {
        const response = await fetch(`http://localhost:3000/notes?championId=${championId}`);
        const notes = await response.json();

        notesSection.innerHTML = "";
        if (notes.length === 0) {
            notesSection.innerHTML = "<p>Nenhuma anotação ainda.</p>";
            return;
        }

        notes.forEach(note => {
            const noteEl = document.createElement("div");
            noteEl.style.border = "1px solid #555";
            noteEl.style.padding = "10px";
            noteEl.style.marginBottom = "10px";
            noteEl.innerHTML = `
                <p>${note.text}</p>
                <button data-id="${note.id}" class="delete-btn">Apagar</button>
            `;
            notesSection.appendChild(noteEl);
        });

    } catch (error) {
        notesSection.innerHTML = "<p>Erro ao carregar anotações.</p>";
        console.error("Falha ao buscar anotações:", error);
    }
}

noteForm.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    const newNote = {
        championId: championId,
        text: noteText.value
    };

    try {
        await fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        });

        noteText.value = ""; 
        fetchNotes();

    } catch (error) {
        console.error("Erro ao salvar anotação:", error);
    }
});

notesSection.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const noteId = e.target.getAttribute("data-id");

        try {
            await fetch(`http://localhost:3000/notes/${noteId}`, {
                method: 'DELETE'
            });
            fetchNotes(); 
        } catch(error) {
            console.error("Erro ao apagar anotação:", error);
        }
    }
});

async function loadPage() {
    try {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/15.16.1/data/pt_BR/champion/${championId}.json`);
        const data = await response.json();
        const champ = data.data[championId];

        nameH1.textContent = `${champ.name} - ${champ.title}`;
        contentDiv.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg" width="100%">
            <p>${champ.lore}</p>
            <p><strong>Funções:</strong> ${champ.tags.map(tag => tagPTBR[tag] || tag).join(", ")}</p>
            <p><strong>HP:</strong> ${champ.stats.hp} | <strong>Mana:</strong> ${champ.stats.mp}</p>
        `;
    } catch (error) {
        contentDiv.innerHTML = "<p>Erro ao carregar informações.</p>";
        console.error("Falha ao buscar dados do campeão:", error);
    }

    fetchNotes();
}

loadPage();