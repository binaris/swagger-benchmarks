To run the benchmarks you'll need:

1. Docker-Compsoe
2. Docker

For example, to compare swagger-express to plain old express, run:

```
docker-compose up swagger-express ab
```

And then compare its output to:

```
docker-compose up swagger-vanilla ab
```

Take a look at the `docker-compose.yml` file to see all the variants.
