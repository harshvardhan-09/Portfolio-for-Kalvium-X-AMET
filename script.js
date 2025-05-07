function showSquad(squadId) {
    // Hide all squads
    document.querySelectorAll(".squad-container").forEach(squad => {
        squad.classList.add("hidden");
    });

    if (squadId) {
        document.getElementById(squadId).classList.remove("hidden");
    }
}
