# Kata SG.

### Context of scenario

As a client of the bank , I want to withdraw money from my account In order to have cash


# Stack & dependencies

- Nodejs 10.x
- Npm 6.x
- CucumberJs with a small REST APIs with ES6 (Express) ,
- Report the CucumberJS tests result in html format
- Additional unit tests for controllers methods with Mocha/Chai


# Folders & files

- `./index.js` : start server (express.js)

- `./controllers/**/*.js` : all controllers [*createAccount , addNewTransaction, getBalance, getAccount*]

- `./features/**/*`  : all files for cumcuberjs tests (CucumberJS)

- `./report/**/*` : Generate Cucumber HTML reports with pie charts

- `./report.js` : Cucumber report generator

- `./test/**/*js` : Addition unit tests for controllers methods (Mocha / Chai)

# Controllers

- createAccount : (name@string, amount@int, devise@string)
- addNewTransaction : (type@string, value@int, name@string)
- getBalance : (name@string)
- getAccount : (name@string)

# Steps

Reminder of CucumberJS scenario:

```yml
# Scenario (Cucumber)
Scenario: An existing client withdraws from his account
    Given an existing client named "pierre-jean" with 100 EUR in his account
    Given the account of "pierre-jean" has 100 EUR
    When he withdraws 10 EUR from his account
    Then the new balance is 90 EUR
```

# Install
```
npm install
```

# Run tests Cucumber with report
```
npm run test
```

# Run unit tests for controllers methods
```
npm run unit
```
