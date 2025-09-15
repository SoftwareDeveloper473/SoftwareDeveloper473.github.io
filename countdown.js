(function () {
    // ---- HARD CODE YOUR DATE HERE ----
    const hardcodedDate = new Date("December 22, 2025");
    // Display the hardcoded date
    document.getElementById('hardcoded-date').textContent = hardcodedDate.toDateString();

    function updateDays() {
        const now = new Date();

        // Calculate the difference in milliseconds
        const diffMs = hardcodedDate - now;
        // Convert milliseconds to days, hours, mins, secs left
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) - (diffDays * 24));
        const diffMins = Math.floor((diffMs / (1000 * 60)) - ((diffDays * 24 * 60) + (diffHours * 60)));
        const diffSecs = Math.floor((diffMs / 1000 - ((diffDays * 24 * 60 * 60) + (diffHours * 60 * 60) + (diffMins * 60))));

        //Display the differences
        document.getElementById('days').textContent = diffDays;
        document.getElementById('hours').textContent = diffHours;
        document.getElementById('mins').textContent = diffMins;
        document.getElementById('secs').textContent = diffSecs;
    }

    setInterval(updateDays, 1000);
}());