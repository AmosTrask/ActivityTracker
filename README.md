# ActivityTracker [![Build Status](https://travis-ci.org/AmosTrask/ActivityTracker.svg?branch=master)](https://travis-ci.org/AmosTrask/ActivityTracker) [![codecov](https://codecov.io/gh/AmosTrask/ExpressTemplate/branch/master/graph/badge.svg)](https://codecov.io/gh/AmosTrask/ExpressTemplate) [![Maintainability](https://api.codeclimate.com/v1/badges/98bd0ccc761a84fe5de0/maintainability)](https://codeclimate.com/github/AmosTrask/ActivityTracker/maintainability) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/308abc090f394be2b3037edef29c0e06)](https://www.codacy.com/app/AmosTrask/ActivityTracker?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AmosTrask/ActivityTracker&amp;utm_campaign=Badge_Grade)

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
