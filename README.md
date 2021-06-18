# e2e-test-challenge

Automated tests for UI and API

# Tools

- WebdriverIO
- Supertest
- Mocha
- Chai


# Installation

Run cmd:

```
$ npm install
```


# Test Execution

Run tests by command line:

- API

```
$ npx mocha test/api/tests.js
```


- Frontend

```
$ npx wdio run ./wdio.conf.js
```

- Allure report
Need to have Allure server installed. After installed, run 

```
$ allure serve
```