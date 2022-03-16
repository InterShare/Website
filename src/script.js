const linuxVersionElement = document.getElementById("linuxVersion");
const macVersionElement = document.getElementById("macVersion");
const windowsVersionElement = document.getElementById("windowsVersion");

async function setDesktopVersionLabels() {
    const json = await fetch("downloads/desktop-versions.json").then((response) => response.json());

    if (json) {
        linuxVersionElement.innerHTML = json["linux"];
        macVersionElement.innerHTML = json["macOS"];
        windowsVersionElement.innerHTML = json["windows"];
    }
}

setDesktopVersionLabels();