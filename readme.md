# course-management-crud-operations

course-management-crud-operations project with web and server

# Setup project in local enviornment
1. Git Clone Repo in local from url using below command
   ```bash
   git clone [git@github.com:VarunProg/course-management-system.git]
   ```
### Setup in local development enviornment with enviornment config
## open 2 terminal one for web and one for server 

#### For Client 
1. In new terminal go to web folder 
2. run npm i - this will install dev dependencies in local inside node_modules folder
3. run pnpm dev - this will launch application on http://localhost:5174/ (check browser)

#### For Sever 
1. In new terminal go to sevrer folder 
2. run -> npm i - this will install dev dependencies in local inside node_modules folder
3. run -> npm start - this will launch server on port 3000 (keep it running for server api calls)

#### For MongoDB Setup:
1. MongoDB Credentials:
. in server folder go to .env file 
. Inside the .env file, you will find an environment variable named MONGO_URI. This variable holds the credentials required to connect to the MongoDB database.

2. Edit the .env File:
. Update the MONGO_URI value with your MongoDB connection string.
. Replace the existing connection string
 (mongodb+srv://varunchaudhary578:Varun123@coursemanagement.fop18cg.mongodb.net/?retryWrites=true&w=majority) with your own MongoDB connection string.

. MONGO_URI = YOUR_MONGODB_CONNECTION_STRING

3. MongoDB Connection String:
. The MongoDB connection string typically consists of:
. mongodb+srv://: The connection protocol.
. USERNAME:PASSWORD: Your MongoDB username and password.
. @cluster-name.mongodb.net/: The MongoDB cluster name.
. DATABASE_NAME: The name of your MongoDB database.