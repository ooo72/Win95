Dos(document.getElementById("dosbox"), {
  w: 1054,
  h: 768,
  wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js"
}).ready(async (fs, main) => {
  const waitMessage = document.createElement("div");
  waitMessage.textContent = "Please wait, win95 is loading...";
  waitMessage.style.position = "absolute";
  waitMessage.style.top = "50%";
  waitMessage.style.left = "50%";
  waitMessage.style.transform = "translate(-50%, -50%)";
  waitMessage.style.fontSize = "24px";
  waitMessage.style.fontWeight = "bold";
  waitMessage.style.color = "white";
  waitMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  waitMessage.style.padding = "20px";
  waitMessage.style.borderRadius = "10px";
  document.body.appendChild(waitMessage);

  try {
    const archiveUrl = "https://archive.org/download/win95_in_dosbox/package.zip";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/" + archiveUrl;
    const zipResponse = await fetch(proxyUrl);
    if (!zipResponse.ok) {
      throw new Error(`Failed to download ZIP: ${zipResponse.statusText}`);
    }
    const zipArrayBuffer = await zipResponse.arrayBuffer();
    await fs.extract(new Uint8Array(zipArrayBuffer));
    main(["AUTOEXEC.BAT"]);
    document.body.removeChild(waitMessage);
  } catch (error) {
    console.error("Error:", error);
    waitMessage.textContent = "An error occurred. Please try again.";
    waitMessage.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
  }
});

setInterval(() => {
  document.title = "Win95";
}, 100);

console.log(window.location.href);
