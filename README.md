# Nestjs Request Response Pipeline
Implement [Middleware](https://docs.nestjs.com/middleware), [Gard](https://docs.nestjs.com/guards), [Interceptor](https://docs.nestjs.com/interceptors), [Pipes](https://docs.nestjs.com/pipes) and [Filters](https://docs.nestjs.com/exception-filters) in Nestjs.

[See Diagram](https://i.stack.imgur.com/2lFhd.jpg)
## Installation

```bash
git clone https://github.com/amirkangarloo/nestjs-request-response-pipeline.git
```

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## URL

```bash
curl --location --request GET 'http://localhost:4000?userId=10' /n
```

```bash
curl --location --request GET 'http://localhost:4000/error' \
--data-raw '' /n
```

## License

[MIT licensed](LICENSE).
