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


