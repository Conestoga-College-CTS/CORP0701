async function delayedHello(name: string, delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      resolve();
    }, delay);
  });
}

// Function to run the async operation
async function runAsyncTest() {
  console.log('Async test started');
  await delayedHello('TypeScript', 2000); // 2000 ms delay
  console.log('Async test completed');
}

runAsyncTest().catch(console.error);
