# Open-API-Response

The project is decoupled into backend and frontend, following the concept of headless architecture. Thus making the frontend and backend
independant of each other. Such architecture provides more flexibility to the teams. 

Both the frontend and backend communicate through API's (Application Programmer Interface) where backend is responsible for wrapping all the
required data at specific address and frontend is responsible to use the url to fetch and operate on the data. Sometimes communication through
API require authentication and authorization, since all the API's used were open we didn't require such policy

## FrontEnd 
Following tech stack has been used to develop the Frontend
1. EJS
2. Express
3. AJAX
4. Vanilla JS

MVC architecture has been used for seamless design and smooth flow of data. MVC arch. defines the use of each and every module and makes the complete flow easy to understand

Important data like keys, ports, urls, etc which needs to be hidden from the outside world is stored in config.js and config.example.js is pushed with all the required key names

Following steps needs to be taken to install the frontend
1. Clone the repository using the following command
   ```
   git clone https://github.com/komekez/Open-API-Response
   ```
2. Go inside the frontend folder using
   ```
   cd /frontend
   ```
3. Install the required dependencies
   ```
   npm install
   ```
4. If you want to run the project in dev mode, than I have defined the project in nodemon, which automatically refreshes the server after each change
  ```
  npm run dev
  ```
 5. If you want to run the project in production mode, than I have defined the project in node
  ```
  npm run start
  ```
