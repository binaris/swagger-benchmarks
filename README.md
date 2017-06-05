To run the benchmarks you'll need:

1. Docker-Compsoe
2. Docker

For example, to compare swagger-express to plain old express, run:

```
docker-compose up express-swagger ab
```

And then compare its output to:

```
docker-compose up express-vanilla ab
```

Take a look at the `docker-compose.yml` file to see all the variants.


# Notes on how it's tested

Running on ec2 m4.large instance.

Using host networking to eliminate Docker network related noise.

No concurrency in the tests. Single core, serialized requests.

Using keepalive with apache-bench (`-k`), because TCP connection establishment is irrelevant to this benchmark.

The tests are basically HTTP Get of the Hello World example endpoint `swagger` creates when you use `swagger project create`. I generated the example projects for each supported framework, and then created a "vanilla" version for each - one that does not use swagger, just defines the simplest handler for `/hello` that returns the same JSON results as the example.

