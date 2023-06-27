# Sequelize CRUD Implementation

This project demonstrates a CRUD implementation using Express, PostgreSQL, and Sequelize ORM for the Employee, Department, and Designation models.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL installed locally or remote connection details

### Installation

1. Clone the repository:

   \`\`\`shell
   git clone <repository_url>
   \`\`\`

2. Navigate to the project directory:

   \`\`\`shell
   cd sequelize_crud_implementation
   \`\`\`

3. Install the dependencies:

   \`\`\`shell
   npm install
   \`\`\`

4. Set up the database configuration:

   - Create a \`.env\` file in the project root directory.
   - Configure the environment variables based on your PostgreSQL setup. Here's an example:

     \`\`\`plaintext
     PORT=8200
     DB_NAME=impliment_crud_sequelize
     DB_PASSWORD=Sarvadhi@Mayank
     DB_USER=sarvadhi
     DB_DIALECT=postgres
     DB_HOST=localhost
     DB_PORT=5431
     \`\`\`

5. Run the application:

   \`\`\`shell
   npm start
   \`\`\`

## Usage

The API provides endpoints for performing CRUD operations on the Employee, Department, and Designation models. The available routes are as follows:

- **Employee Routes**: \`/api/Employee\`
- **Department Routes**: \`/api/Department\`
- **Designation Routes**: \`/api/Designation\`

Refer to the respective route files for more details on the available endpoints and their usage.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
