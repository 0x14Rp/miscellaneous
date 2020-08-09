# Initial Project - RXJS Course

* The first thing we must do after downloading the code is to execute the command:

`` ''
npm install
`` ''
That command will download all the node modules needed to run the project.


* When I finish installing the node_modules, then we can execute the project with the following command

`` ''
npm start
`` ''
For that to work, remember that you must execute that command in the same directory where the `` `package.json```

## Change port
By default, the port I configured for this project is `` `8081```, but if you need to change it because that port may be used by your computer, you can change it by opening the` `` package.json``` >> scripts . There you will see the instruction launched by the development server

`` ''
"start": "webpack-dev-server --mode development --open --port = 8081"
`` ''

They simply change the port for the one you need and that's it. (logically they save the changes before executing the `` `npm start``` again)