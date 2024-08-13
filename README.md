# Overview
This repository contains a setup for web automation using Playwright, a powerful framework for end-to-end testing, in conjunction with the Page Object Model (POM) design pattern. POM is a widely used design pattern in test automation that helps to create an object repository for web UI elements. It enhances test maintenance and reduces code duplication by encapsulating the web elements and interactions into reusable classes.

# Folder Description
### pages/: Contains the Page Object Model classes. Each class represents a different page in the application.
### tests/: Contains the test scripts that use the Page Objects to interact with the web application.
### utils/: Utility classes and functions that are used across the tests, like configuration files.
### playwright.config.js: Configuration file for Playwright.

## Getting Started
### Prerequisites
> Ensure that you have the following installed:

- Node.js 
- npm (Node Package Manager)
- VisualStudio 

### Installation

1 Clone the repository :

```bash 
git clone https://github.com/SSonali026/PlayWrightUIAutomation.git
```

2 Open the VisualStudio editor and open the project

3 open terminal and Install playwright:

```bash 
run npm init playwright
```

### Running Tests
To execute the tests, run:

```bash 
npx playwright test
```
- This will run all the tests located in the tests/ directory.

### Test Configuration
The Playwright configuration is defined in the playwright.config.js file. You can specify test options such as browser type, viewport size, and more.

##  Writing Tests
Creating a Page Object

1. Create a new file in the pages/ directory for the page you want to model, e.g., loginPage.js.

2. Define a class representing the page.


## Creating a Test
1. Create a new file in the tests/ directory, e.g., login.test.js.

2. Write the test using the Page Object.


## Running  Test
#### To run a specific test file:

```bash 
npx playwright test tests/login.test.js
```

### Running Tests in a Headless Browser

To run tests in headless mode (without UI):

```bash 
npx playwright test --headless
```

To run tests in specific browser:

```bash 
npx playwright test --project=chromium
```

## Reporting 
After running tests, a detailed report is generated automatically. By default, it will be available in the reports/ directory.

To view the report:
```bash
npx playwright show-report
```

## Playwright Features

### Trace Viewer
Playwright includes a trace viewer that allows you to trace the test execution for debugging purposes.

To view the trace:
```bash 
npx playwright show-trace trace.zip
```
### Screenshots and Videos
You can capture screenshots and videos for each test:


## Best Practices
- Use of Page Objects: Keep test code clean and maintainable by using Page Objects for interacting with web elements.
- Modular Tests: Write small, independent tests that focus on specific functionality.
- Avoid Hard-Coding: Use configuration files or environment variables to manage test data and URLs.
- Parallel Testing: Leverage Playwright’s ability to run tests in parallel to reduce test execution time.

### Troubleshooting
#### Common Issues
- Timeouts: Increase the timeout duration in playwright.config.js if tests fail due to slow network or heavy load times.
- Element Not Found: Ensure selectors are correct and that the page has fully loaded before interacting with elements.

### Debugging
Use the --debug flag to run Playwright in debug mode:

```bash 
npx playwright test --debug
```

This will open the browser in non-headless mode and pause the test execution, allowing you to inspect the DOM and interact with the page.

