const linuxVersionElement = document.getElementById("linuxVersion");
const macVersionElement = document.getElementById("macVersion");
const windowsVersionElement = document.getElementById("windowsVersion");

const linuxDownloadButton = document.getElementById("linuxDownloadButton");
const macDownloadButton = document.getElementById("macDownloadButton");
const windowsDownloadButton = document.getElementById("windowsDownloadButton");

async function setDesktopVersionLabels() {
    const json = await fetch("downloads/desktop-versions.json").then((response) => response.json());

    if (json) {
        linuxVersionElement.innerHTML = json["linux"];
        macVersionElement.innerHTML = json["macOS"];
        windowsVersionElement.innerHTML = json["windows"];

        linuxDownloadButton.href = `downloads/linux-binary/InterShare-${json["linux"]}.tar.gz`;
        macDownloadButton.href = `downloads/macOS/InterShare-${json["macOS"]}.zip`;
        windowsDownloadButton.href = `downloads/windows/InterShare-${json["windows"]}.zip`;
    }
}

setDesktopVersionLabels();