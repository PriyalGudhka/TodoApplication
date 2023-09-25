Web Design & User Experience Assignment 6

Name: Priyal Vimal Gudhka
NU ID No.: 002747680
Email Id: gudhka.p@northeastern.edu


About the Assignment : -

As a part of this assignment, I have created a to-do application wherein user can add a new task by entering title, description, due date and due time

Once the user adds the data that task is displayed but will hide all the details.  Details will be displayed if a task is selected

User can also mark a task as completed by clicking on the completed button

User can also delete both the completed and the pending tasks


Following is the folder strcuture of the project:

1. data folder contains the todo.json file having various input

2. node_modules folder is generated by executing npm commands

3. styles folder contains all the SCSS files which is used for styling the website. Following are the files present in the folder: -

 * main.scss - Used in the HTML page which imports all the other SCSS files

* todo.scss - Used for storing all the variables along with the styles

4. dist folder contains the css file which is generated using SCSS commands

5. package.json & package-lock.json is generated using SCSS commands

6. todo.HTML contains all the elements used for designing the todo application


Steps for setting up SCSS: -

1. Open terminal -> npm install -g sass

2. Type npm init which will generate package.json

3. git init used for initializing the git repository

4. Type npm i sass --save  will generate the node_modules folder

5. To complie the CSS file run command npx sass --watch styles/main.scss dist/main.css
