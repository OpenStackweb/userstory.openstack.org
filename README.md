# OpenStack Cross-project Dashboard
The OpenStack Cross-project Dashboard provides a centralized dashboard in the community to track multi-project initiatives (which may even take multiple releases).
This dashboard will leverage user story trackers to associate cross-project specs with the concepts they are crafted to deliver.

## Technologies
* Angular.js
* Express
* Node.js
* MongoDB (coming soon!)

## Installation

##### Install and Run MongoDB
https://docs.mongodb.org/manual/installation/

##### Install Node.js and npm
https://nodejs.org/en/download/

For Ubuntu:
```
  $ sudo apt-get install nodejs
  $ sudo apt-get install nodejs-legacy
  $ sudo apt-get install npm
```

##### Install Strongloop + Grunt + Bower
```
$ sudo npm install -g strongloop
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower
```

##### Clone the repository
```
$ git clone https://github.com/OpenStackweb/userstory.openstack.org.git
```

##### Database

Creates a database and import the UserStory collection

```
$ cd dashboard-project-api/db
$ mongoimport --db <name-database> --collection UserStory --file UserStory.json
```

##### Configure MongoDB

In the file dashboard-project-api/server/datasources.json, modify the variable mongodbConnect to add the data of your server

```
"mongodbConnect": {
    ...
    "host": "localhost",
    "port": 27017,
    "database": "dashboard-dev",
    "username": "myUser",
    "password": "mySuperSecretPass"
  }

```

##### Running the API
```
$ cd dashboard-project-api/
$ npm install
$ npm run build-sdk
$ node .
```
You should get something like this:
```
Browse your REST API at http://0.0.0.0:3004/explorer
```

##### Running the application
```
$ cd dashboard-project-app/
$ chmod +x install.sh
$ sh install.sh
$ sh build-sdk.sh
```

Finally, the explorer will open automatically on port 9000.
