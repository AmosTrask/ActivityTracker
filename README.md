# ExpressTemplate [![Build Status](https://travis-ci.org/AmosTrask/ExpressTemplate.svg?branch=master)](https://travis-ci.org/AmosTrask/ExpressTemplate) [![codecov](https://codecov.io/gh/AmosTrask/ExpressTemplate/branch/master/graph/badge.svg)](https://codecov.io/gh/AmosTrask/ExpressTemplate) [![Maintainability](https://api.codeclimate.com/v1/badges/8d0c08e846d49fad2cf0/maintainability)](https://codeclimate.com/github/AmosTrask/ExpressTemplate/maintainability) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/03dbd4c86c964f68ab93ac8ba1d8dd07)](https://app.codacy.com/app/AmosTrask/ExpressTemplate?utm_source=github.com&utm_medium=referral&utm_content=AmosTrask/ExpressTemplate&utm_campaign=Badge_Grade_Dashboard)

Basic REST API with Express, TypeScript, MongoDB and Jest.

## Execution

You will require on your machine:
-   NodeJS and npm
-   MongoDB

1.  Install required dependencies with `npm install`
2.  Create a `db` folder in the project root and start MongoDB with `mongod --dbpath=db`
3.  Create a `.env` file based on the `.env.example`. You can change the parameters if you want
4.  Initialize the database data by running `npm run init-db`
5.  Start the server with `npm start`
