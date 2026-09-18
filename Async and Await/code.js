const p = new Promise((res, rej) => {
  res("Promise Resolved value");
});
async function handlePromise() {
  const val = await p;
  console.log(val);
}
handlePromise();


// OUTPUT
// Promise Resolved value
