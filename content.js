function getNoteTitle() {
    const visibleTextBoxes = Array.from(document.querySelectorAll('div[role="textbox"]'))
        .filter(el => el.getBoundingClientRect().width > 0);

    if (visibleTextBoxes.length === 0) {
        return "Google Keep";
    }

    const maxWidth = Math.max(...visibleTextBoxes.map(el => el.getBoundingClientRect().width));
    const widestElements = visibleTextBoxes.filter(el => el.getBoundingClientRect().width === maxWidth);

    if (widestElements.length === 1) {
        const titleElement = widestElements[0];
        const title = titleElement.innerText.trim();
        return title.split('\n')[0] || "Google Keep";
    } else {
        return "Google Keep";
    }
}

setInterval(() => {
    const title = getNoteTitle();
    if (document.title !== title) {
        document.title = title;
    }
}, 500);
