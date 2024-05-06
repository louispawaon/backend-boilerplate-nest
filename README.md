# BACKEND-BOILERPLATE-NESTJS
With my discovery of NestJS and its wide array of features, I begin to pivot my personal backend projects from NodeJS-Express to NestJS, which offers more structure and control and a better experience. 

## Technologies Used
- NestJS - Back-End Framework
- Prisma - Object Relational Mapping Tool
- Swagger - API Endpoint Documentation and Testing

## Getting Started
1. Clone the Repository
```
https://github.com/louispawaon/backend-boilerplate-nest.git
```
2. Install dependencies
```
npm i
```
3. Setup the environment variables
   - Create a `.env file` and follow the format given at the `.env.example` file, then configure environment variables as needed.

4. Configure `schema.prisma` to your desired Database of choice
5. Compile TypeScript code
```
npm run build
```
6. Run the Server
   - Without Hot-Reloading 
    ```
    npm run start
    ```
    - With Hot-Reloading 
    ```
    npm run start:hot
    ```
The server will start running at http://localhost:3000

## About Prisma
1. Set-up Prisma Configuration: Define your database connection in the `schema.prisma` file located in the `prisma` directory

```javascript
datasource db {
  provider = "postgresql" //Replace with Database of Choice
  url      = env("DATABASE_URL")
}
```
2. Generate Prisma Client

```
npx prisma generate
```

3. Database Migrations
```
npx prisma migrate dev --name <migration-name>
```

[Prisma Official Documentation](https://www.prisma.io/docs)

## Contributing
Contributions are welcome! Feel free to open issues and pull requests for any improvements or additional features.