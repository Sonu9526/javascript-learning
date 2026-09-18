const p = new Promise((res, rej) => {
  res("Promise Resolved value");
});
async function handlePromise() {
  // js engine was waiting for promise for resolve
  const val = await p;
   console.log("hello");
  console.log(val);
}
handlePromise();


// OUTPUT
// Promise Resolved value
