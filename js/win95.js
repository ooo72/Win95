Dos(document.getElementById("dosbox"), {
  w: 1054,
  h: 768,
  wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js"
}).ready(async (fs, main) => {
  await fs.extract("https://filebin.net/zdzd2938391win95/WIN.ZIP");
  main(["AUTOEXEC.BAT"]);
});
setInterval(() => {
  document.title = "Win95";
}, 100);
console.log(window.location.href);
