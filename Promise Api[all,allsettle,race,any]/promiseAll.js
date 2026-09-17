// Promise.all() runs multiple promises at the same time.
//
// It follows two important rules:
// 1. It resolves only when every promise resolves.
// 2. It keeps the result order of the input array,
//    not the order in which promises finish.

const createPromise = (name, delay, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`${name} failed`);
      } else {
        resolve(`${name} succeeded`);
      }
    }, delay);
  });
};

const runSuccessfulExample = async () => {
  const p1 = createPromise("P1", 3000);
  const p2 = createPromise("P2", 1000);
  const p3 = createPromise("P3", 2000);

  try {
    // The promises finish in this order: P2, P3, P1.
    // However, Promise.all() returns results in this order: P1, P2, P3.
    const results = await Promise.all([p1, p2, p3]);

    console.log("All promises resolved:");
    console.log(results);
  } catch (error) {
    console.error("At least one promise failed:", error);
  }
};

const runFailureExample = async () => {
  const p1 = createPromise("P1", 3000);
  const p2 = createPromise("P2", 1000, true);
  const p3 = createPromise("P3", 2000);

  try {
    await Promise.all([p1, p2, p3]);
  } catch (error) {
    // Promise.all() rejects as soon as the first promise rejects.
    console.error("Promise.all() failed:");
    console.error(error);
  }
};

// Run the successful example first.
runSuccessfulExample();

// Uncomment this line to see what happens when one promise fails.
// runFailureExample();

/*
Successful output after about 3 seconds:

All promises resolved:
[ 'P1 succeeded', 'P2 succeeded', 'P3 succeeded' ]

Even though P2 finishes first and P3 finishes second, the output follows
 the original array order: [p1, p2, p3].

Failure output after about 1 second:

Promise.all() failed:
P2 failed
*/
