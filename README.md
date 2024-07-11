# Back-end Answers

## Q1: Assuming the system currently has three microservices: Customer API, Master Data API, and Transaction Data API, there is a new feature that requires data from all three microservices to be displayed in near real-time. The current technology stack includes REST APIs and an RDBMS database. How would you design a new API for this feature ?

Answer:

1. Create Api Gateway which handle requests and call microservices correctly.
2. Create New Microservices to implement data which contains information from three microservices(Customer, Master data and Transactional data) by sending HTTP request to each service and return the result data to client user.
3. Use cache to collect data which use frequently.

---

## Q2: Assuming the team has started planning a new project, the project manager asks you for a performance test strategy plan for this release. How would you recommend proceeding to the project manager?

Answers:

1. Set Project Performance Goals based on user requirements.
2. Setup production likely test environments.
3. Create and execute test scenarios then analyze the results.
4. Integrate with CI/CD.

---

## Q3: Additional Requirements

### Validation: Outline how you will validate data inputs in both APIs to ensure data integrity.

Answers:

-In **Multilingual Product API** validate product name and description (in CreateProductDto) to be string type and not an empty value using _class-validatior_ library.

-In **Multilingual Product Search API** validate keyword which is name to be not empty string value (in SearchProductDto) and pagination attributes like page and limit be optional string query using _class-validatior_ library.

### Database Design: Describe the database schema and the approach you will use to handle multilingual support for product information.

Answers:

- Multilingual Product Information Table

| Key            | Type   | Description                       |
| -------------- | ------ | --------------------------------- |
| id             | uuid   | primary key                       |
| name_th        | string | name of product in Thai           |
| description_th | string | description of product in Thai    |
| name_en        | string | name of product in English        |
| description_en | string | description of product in English |
| name_es        | string | name of product in Spanish        |
| description_es | string | description of product in Spanish |

- Multilingual support handling

1. Fetch Multilingual Product by selecting from specified language columns.

2. Lookup for product in every language column which matches the keyword.

### Testing Strategy: Explain your strategy for testing these APIs, including how you will handle unit tests, integration tests, and any end-to-end testing considerations.

Answers:

- Unit Tests:

  - Create Product API

    1. Mock product data and database call then fetch create service to see results.

  - Search Product API
    1. Mock product data list and database call then fetch search service with keyword(product name) in any language and see result if service can response the correct results with pagination value.

- Integration tests:

  - Setup postgres database for testing
  - **Product Create API** try to create a product by sending request to create service.
  - **Product Search API** after create products try to search product name.
  - Checking service response handling.

- End-to-End tests:
  - Try to send request product information to create service and see that service response success status.
  - Try to search product name and see that service response the correct result.
