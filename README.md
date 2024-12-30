# **E-Commerce Backend with TypeScript**

This project is a backend for an e-commerce application built using **Node.js** and **TypeScript**. It supports user authentication, product management, and cart operations.

---

## **Setup Instructions**

1. **Initialize the Project**  
   ```bash
   npm init -y
   ```
2. **Install Dependencies**  
   ```bash
   npm install express typescript @types/node @types/express
   npm install mongoose @types/mongoose
   npm install jsonwebtoken @types/jsonwebtoken
   npm install bcryptjs @types/bcryptjs
   npm install cookie-parser @types/cookie-parser
 
   ```
3. **Setup TypeScript Configuration**  
   Initialize TypeScript:  
   ```bash
   tsc --init
   ```
4. **Key TypeScript Configurations**  
   - **`noEmitOnError: true`**  
     Prevents compilation if there are TypeScript errors.  
   - **`removeComments: true`**  
     Removes comments from compiled JavaScript files.  
   - **`noUnusedParameters: true` & `noUnusedLocals: true`**  
     Ensures no unused parameters or variables in the code.  
   - **`noImplicitReturns: true`**  
     Forces functions to have explicit return values, avoiding undefined.  

5. **Folder Structure**  
   TypeScript code is located in the `src` folder, and the compiled JavaScript code is outputted to the `dist` folder.

---

## **Project Structure**

```
src/
├── index.ts        // Initializes server, connects to DB, and sets up routes/middleware.
├── controllers/    // Handles authentication, product, and cart operations.
├── routes/         // Defines API endpoints (e.g., /login, /products, /cart).
├── models/         // Database models (e.g., User, Product, Cart).
├── services/       // Contains business logic (e.g., stock deduction, payments).
└── middlewares/    // Handles authentication, logging, and request validation.
```

---

## **Features**

- **TypeScript**: Ensures type safety and cleaner code.  
- **Error Prevention**: Configurations like `noEmitOnError` and `noImplicitReturns` help maintain high code quality.  
- **E-Commerce Functionality**:  
  - User login and registration.  
  - Product management (view, add to cart, purchase).  
  - Admin operations (edit products).  

---
## **Impliments**:
- **Mongo db atlas**
- **Jsonwebtoken**
- **Bcryptjs**
---
## **Key topic**:
- **json array of objects**
---
## **Extra**:
- **Lotary functionality in lotary folder**
- **Credit functionality in wallet folder**
- **Withdraw functionality in withdraw folder**
---
## **Issues**:
- **Post request body undefined**:
    - `npm install body-parser`
---
## **tsconfig.json**:
```
{
  "compilerOptions": {
    "target": "es2016",  //the version that gets set after tsc --init                                 
    "module": "commonjs",                                
    "rootDir": "./src",                                  
    "outDir": "./dist",                                  
    "esModuleInterop": true,                             
    "forceConsistentCasingInFileNames": true,           
    "strict": true,                                     
    "skipLibCheck": true                                 
  }
}

```
---
## **used versions**:
```
{
  "dependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cookie-parser": "^1.4.8",
    "@types/express": "^5.0.0",
    "@types/jsonwebtoken": "^9.0.7",
    "@types/mongoose": "^5.11.96",
    "@types/node": "^22.10.2",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.3",
    "cookie-parser": "^1.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.2",
    "typescript": "^5.7.2"
  }
}
node 22.11.0
tsc 5.7.2
```
---
## **How to Run**

1. **Compile TypeScript:**  
   ```bash
   npx tsc
   ```

2. **Start the Server:**  
   ```bash
   node dist/index.js
   ```
