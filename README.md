# Project Name

> FriendChef

## Team
  
  - Team Members: Me, Myself and I (aka June Won)

## Table of Contents

<!-- 1. [Usage](#Usage) -->
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
<!--     1. [Tasks](#tasks) -->
1. [Team](#team)
<!-- 1. [Contributing](#contributing) -->

<!-- ## Usage

> Some usage instructions -->
## Requirements

- Node 4.4.7
- MySQL

## Development

### Installing Dependencies

From within the root directory:

Install all npm dependencies.
```sh
npm install
```

Setting up local database (if you have MySQL)
```sh
npm run initDB
```

Start webpack
```sh
npm run build:dev
```

Open the server with Nodemon.
```sh
npm start
```

In your root directory, create a .env file.
```sh
touch .env
```

Inside of the .env file
```sh
DATABASE_URL=<your-database>
```

If you choose to run Webpack on production on Heroku, run the following command to allow heroku to install devDependencies

```sh
heroku config:set --app <your app name> NPM_CONFIG_PRODUCTION=false
```

<!-- ### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines. -->
