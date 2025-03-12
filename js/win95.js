Dos(document.getElementById("dosbox"), {
  w: 1054,
  h: 768,
  wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js"
}).ready(async (fs, main) => {
  try {
    const archiveUrl = "https://archive.org/download/win95_in_dosbox/package.zip";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/" + archiveUrl;
    const zipResponse = await fetch(proxyUrl);
    
    if (!zipResponse.ok) {
      throw new Error(`Failed to download Win95: ${zipResponse.statusText}`);
    }
    const zipArrayBuffer = await zipResponse.arrayBuffer();
    await fs.extract(new Uint8Array(zipArrayBuffer));
    main(["AUTOEXEC.BAT"]);
  } catch (error) {
    console.error("Error:", error);
  }
});

setInterval(() => {
  document.title = "Win95";
}, 100);

console.log(window.location.href);
