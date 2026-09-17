// Promise.any() returns the result of the first fulfilled Promise.


const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P1 success");
  }, 2000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P2 failed");
  }, 1000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P3 success");
  }, 1000);
});
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });


// OUTPUT
// P3 success
