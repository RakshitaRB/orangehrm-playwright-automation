\# OrangeHRM UI Automation Framework



\## 📌 Project Overview

This project is an end-to-end UI automation framework developed to test core functionalities of the \*\*OrangeHRM\*\* web application.  

The framework is built using \*\*Playwright with TypeScript\*\* and follows industry best practices for UI test automation.



It validates critical user workflows such as authentication, dashboard navigation, and logout functionality to ensure application stability and correctness.



---



\## 🛠️ Tech Stack

\- \*\*Playwright\*\* – End-to-end test automation

\- \*\*TypeScript\*\* – Strongly typed test development

\- \*\*Node.js\*\* – Runtime environment

\- \*\*Git \& GitHub\*\* – Version control and collaboration



---



\## ✅ Automated Test Scenarios

The following scenarios are automated:



\- User Login with valid credentials

\- Dashboard page verification

\- Navigation across application modules

\- User Logout functionality

\- UI validation using assertions



---



\## 📂 Project Structure

├── tests/

│ ├── login.spec.ts # Login validation

│ ├── dashboard.spec.ts # Dashboard navigation tests

│ └── logout.spec.ts # Logout flow validation

│

├── playwright.config.ts # Playwright configuration

├── package.json # Project dependencies

├── .gitignore # Ignored files and folders

└── README.md # Project documentation



---

yaml

---



\## ▶️ How to Run the Tests

```bash

npm install

npx playwright test



\#Run Tests in Headed Mode

npx playwright test --headed



\#To view the test report:

**npx playwright show-report**



