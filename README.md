## Project Overview

This is a sample dashboard application used to track customer orders of footwear in-store.

Details of orders can be viewed along with their status in the line, and there are methods for creation of new orders and deletion of existing ones.

The primary technologies used to create this application are React/Typescript for the frontend and Node.js/Express for the backend. The database is Sqlite managed by Knex.js abstraction. Uploaded images are stored on Cloudinary.


## Installation

- Install dependencies `yarn`
- Start development server `start-dev`


## API Endpoints

#### Fetch all orders endpoint 

- Method: GET
- URL path: \[server\]/products/all

#### Create order endpoint

- Method: POST
- URL path: \[server\]/products/create
- Example request body: `{ "product_name":"Nike Air VaporMax Flyknit 3", "category":"Men", "size":"UK 9", "colour":"Gry/Wht", "status":"ontheway", "customers_initials":"JH", "product_image":"https://example.com/pic.jpg" }`

#### Delete order endpoint

- Method: PUT
- URL path: \[server\]/products/delete
- Example request body: `{ "id":"13" }`

#### Delete all orders endpoint

- Method: PUT
- URL path: \[server\]/products/reset


## Available Scripts

In the project directory, you can run several scripts (sorted in alphabetical order):

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn build-front`

Builds the application for front end using React Scripts.

#### `yarn eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.

#### `yarn knex`

Run Knex.js CLI commands.

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn start-server`

Starts the Node server on [http://localhost:4001](http://localhost:4001) and watches for file changes.

#### `yarn start-front`

Starts the React frontend using react-scripts.

#### `yarn start-dev`

Starts both the frontend and backend using Concurrently for local testing as a developer.

#### `yarn test-frontend`

Launches tests for frontend.<br />

#### `yarn test-server:unit`

Run tests on the API and server functionality.


## Bugs

- There are some bugs with pagination displaying products incorrectly.


## TODO

- Add validation to form
- Fix pagination issues
- Expand unit tests (currently just snapshots)
- Add integration tests
- Add end to end tests
- Tidy up props and hooks 
- Add docker 

