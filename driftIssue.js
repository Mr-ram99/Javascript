// The drift issue occurs when timers like setTimeout and setInterval do not
// execute exactly at the specified interval due to delays introduced by
// CPU workload, browser scheduling, or JavaScript's single-threaded nature.

let start = Date.now();

setInterval(() => {
  console.log(`Elapsed time: ${Date.now() - start}ms`);
}, 1000);
