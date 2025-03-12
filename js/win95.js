Dos(document.getElementById("dosbox"), {
  w: 1054,
  h: 768,
  wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js"
}).ready(async (fs, main) => {
  await fs.extract("https://dn790004.ca.archive.org/0/items/win95_in_dosbox/package.zip");
  main(["AUTOEXEC.BAT"]);
});
setInterval(() => {
  document.title = "Win95";
}, 100);
console.log(window.location.href);
