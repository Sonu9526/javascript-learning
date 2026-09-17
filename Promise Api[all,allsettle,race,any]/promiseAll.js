const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P1 success");
  }, 3000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P2 success");
  }, 1000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P3 success");
  }, 2000);
});
Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});


// OUTPUT
// [ 'P1 success', 'P2 success', 'P3 success' ]
