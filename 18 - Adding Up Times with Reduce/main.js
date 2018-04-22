const videos = document.querySelectorAll(".videos li");
const totalTime = [...videos].reduce((total, el) => {
  const [mins, seconds] = el.dataset.time.split(":").map(parseFloat);
  total += mins * 60 + seconds;
  return total;
}, 0);
console.log(
  `${Math.floor(totalTime / 3600)} hours ${Math.floor(
    (totalTime % 3600) / 60
  )} minutes ${totalTime % 60} seconds`
);
