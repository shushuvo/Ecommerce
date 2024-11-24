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

## **How to Run**

1. **Compile TypeScript:**  
   ```bash
   npx tsc
   ```

2. **Start the Server:**  
   ```bash
   node dist/index.js
   ```
