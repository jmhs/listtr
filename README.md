# listtr
*Manage your RSVPs with listtr* <br/>
A fullstack web application built with Node.js & Express.js as the server, React.js for frontend and mongoDB for the Backend

Background
----------
Why listtr? <br/>
Flipping through pages of RSVPs for your events can be a tedious process. Listtr provides a simple platform for hosts to create their guest lists, send out invites, and manage their RSVPs in real-time as the event goes live. 

How to install
-------------
Open your terminal and type the following command:

    $ git clone https://github.com/jmhs/listtr.git
    $ cd listtr
    $ cd backend
    $ npm install
    $ cd ..
    $ cd frontend
    $ yarn install

To run the web application, you will need to setup:

 1. Cloudinary account - for image upload
 2. Sendgrid - to send email invitation
 3. mLab - for database

Collect all the secret keys and save them in .env file under the backend folder

To run the code:

    $ cd backend
    $ nodemon --exec npm start
    $ cd ..
    $ cd frontend
    $ yarn start

Contribution
----------
listtr is open-source. Feel free to fork and contribute

Current contributors:

 - <a href="https://github.com/dheamariesta">Dhea Mariesta</a>
 - <a href="https://github.com/jczjdeveloper">Justin Cheong</a>
 - <a href="https://github.com/jmhs">Han</a>
