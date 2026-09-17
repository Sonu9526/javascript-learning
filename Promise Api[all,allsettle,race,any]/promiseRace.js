// Returns the first settled Promise — fulfilled (use fulfilled, not resolved, because a Promise can settle as either fulfilled or rejected.) or rejected.  
// 0r
// Promise.race() returns the result of the Promise that settles first (fulfilled or rejected).


const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P1 success");
  }, 1000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P2 failed");
  }, 2000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P3 success");
  }, 2000);
});
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });


// OUTPUT
// P1 success       --after 1 second




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
  }, 2000);
});
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });



// OUTPUT
// P2 success       --after 1 second



