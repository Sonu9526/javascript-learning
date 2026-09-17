// Promise.any() returns the result of the first fulfilled Promise.
//  If all Promises are rejected, Promise.any() rejects with an AggregateError containing all the rejection reasons. ✅

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



// If all the promise rejected

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P1 failed");
  }, 2000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("P2 failed");
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

// [AggregateError: All promises were rejected] {
//   [errors]: [ 'P1 failed', 'P2 failed', 'P3 failed' ]         --if the all promise is rejected promise.any return a aggregateError with all the rejected result
// }





