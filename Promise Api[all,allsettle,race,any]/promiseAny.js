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




const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P1 failed");
  }, 2000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P2 Success");
  }, 5000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P3 failed");
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
// P2 success    --it wait for 5 second because the other two promise is rejected Promise.any() only return the fullfiled promise





