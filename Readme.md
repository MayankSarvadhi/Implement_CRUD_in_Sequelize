# Sequelize CRUD Implementation

This project demonstrates a CRUD implementation using Express, PostgreSQL, and Sequelize ORM for the Employee, Department, and Designation models.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL installed locally or remote connection details

### Installation

- 1. Clone the repository:

   ```
   git clone https://github.com/MayankSarvadhi/Implement_CRUD_in_Sequelize.gitÏ
   ```

- 2. Navigate to the project directory:

   ``` shell
    cd sequelize_crud_implementation
   ```

- 3. Install the dependencies:

   ``` shell
     npm install
   ```

- 4. Set up the database configuration:

   - Create a \`.env\` file in the project root directory.
   - Configure the environment variables based on your PostgreSQL setup. Here's an example:

     ``` plaintext
     PORT = process.env.PORT
     DB_NAME = process.env.DB_NAME
     DB_PASSWORD = process.env.DB_PASSWORD
     DB_USER = process.env.DB_USER
     DB_DIALECT = process.env.DB_DIALECT,
     DB_HOST = process.env.DB_HOST,
     DB_PORT = process.env.DB_PORT
     ```

- 5. Run the application:

   ```shell
    npm test
  ```
- 6. Project Run This Url:
   ```
    http://localhost:8200
   ```  

## Usage

- The API provides endpoints for performing CRUD operations on the Employee, Department, and Designation models. The available routes are as follows:

### **Employee Routes**:
- **post**: /Employee
- **delete**: /Employee/:id
- **put**: /Employee/:id

### **Department Routes**: 
- **post**: /Department
- **delete**: /Department/:id
- **put**: /Department/:id

### **Designation Routes**:
- **post**: /Designation
- **delete**: /Designation/:id
- **put**: /Designation/:id

- Refer to the respective route files for more details on the available endpoints and their usage.

## Contributing

- Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.
