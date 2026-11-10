&#x20;HTTP Methods – Employee Management API



&#x20;1. GET – Retrieve employee details



Endpoint: GET /api/employees



Purpose: Retrieve the list of employees.



Expected status code: 200 OK



&#x20;2. POST – Create an employee



Endpoint: POST /api/employees



Request Body:

{

&#x20; "name": "Rahul",

&#x20; "department": "Engineering"

}



Purpose: Create a new employee record.



Expected status code: 201 Created



&#x20;3. PUT – Replace employee details



Endpoint: PUT /api/employees/101



Purpose: Replace the employee's existing details.



Expected status code: 200 OK



&#x20;4. PATCH – Partially update employee details



Endpoint: PATCH /api/employees/101



Request Body:

{

&#x20; "department": "HR"

}



Purpose: Update only the specified employee field.



Expected status code: 200 OK



&#x20;5. DELETE – Remove an employee



Endpoint: DELETE /api/employees/101



Purpose: Delete the specified employee record.



Expected status code: 204 No Content

