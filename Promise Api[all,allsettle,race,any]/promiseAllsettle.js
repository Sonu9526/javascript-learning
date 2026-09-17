const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P1 success");
  }, 3000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P2 failed");
  }, 1000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P3 success");
  }, 2000);
});
Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });



// OUTPUT

// [
//   { status: 'fulfilled', value: 'P1 success' },
//   { status: 'rejected', reason: 'P2 failed' },                            --after 3 second
//   { status: 'fulfilled', value: 'P3 success' }
// ]
