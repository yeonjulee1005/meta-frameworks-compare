import autocannon from 'autocannon';
import http from 'http';

const port = process.env.PORT || 3008;
const url = `http://localhost:${port}`;

// 서버가 준비될 때까지 대기
function waitForServer(maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const checkServer = () => {
      attempts++;
      const req = http.get(url, { timeout: 1000 }, (res) => {
        console.log(`Server is ready! Status: ${res.statusCode}`);
        resolve(true);
      });
      req.on('error', () => {
        if (attempts >= maxAttempts) {
          reject(
            new Error(`Server did not start after ${maxAttempts} attempts`),
          );
        } else {
          setTimeout(checkServer, 1000);
        }
      });
      req.on('timeout', () => {
        req.destroy();
        if (attempts >= maxAttempts) {
          reject(
            new Error(`Server did not start after ${maxAttempts} attempts`),
          );
        } else {
          setTimeout(checkServer, 1000);
        }
      });
    };
    console.log(`Waiting for server at ${url}...`);
    checkServer();
  });
}

async function runBenchmark() {
  try {
    await waitForServer();
    console.log(`Starting autocannon benchmark for ${url}...`);

    const instance = autocannon(
      {
        url,
        connections: 10,
        pipelining: 1,
        duration: 10,
        requests: [
          {
            method: 'GET',
            path: '/',
          },
          {
            method: 'GET',
            path: '/data',
          },
          {
            method: 'GET',
            path: '/counter',
          },
        ],
      },
      (err, result) => {
        if (err) {
          console.error('Benchmark failed:', err);
          process.exit(1);
        }

        console.log('\n=== Benchmark Results ===');
        console.log(
          `Requests: ${result.requests.total} (${result.requests.average} req/s)`,
        );
        console.log(
          `Latency: ${result.latency.average}ms (avg), ${result.latency.min}ms (min), ${result.latency.max}ms (max)`,
        );
        console.log(
          `Throughput: ${(result.throughput.total / 1024 / 1024).toFixed(2)} MB/s`,
        );
        console.log(`Errors: ${result.errors}`);
        console.log(`Timeouts: ${result.timeouts}`);
      },
    );

    autocannon.track(instance, {
      renderProgressBar: true,
      renderResultsTable: true,
      renderLatencyTable: true,
    });
  } catch (error) {
    console.error('Failed to run benchmark:', error.message);
    process.exit(1);
  }
}

runBenchmark();
