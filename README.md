# DevNet React Web App boilerplate

Boilerplate for DevNet React Web App

## Exercise 1 : 

Make sure you have installed the latest [Node.js](https://nodejs.org/en/) installed.

1. `Fork` this repo to your github account : `https://github.com/CiscoDevNet/React-Web-App-Boilerplate`
1. `git clone` your repo to local. `git clone https://github.com/[YOUR_GITHUB_ACCOUNT]/React-Web-App-Boilerplate`
2. Run `npm install`
3. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)


## Exercise 2 : 

Modify `/app/Router.js`

1. Import new page at the top : `import Album from './pages/Album';`
2. Add routing in between `<Switch>` tag : `<Route path="/album" component={Album}/>`
3. Click `Album` link at the top



## Exercise 3:

### Build production code:

Run `npm run production`

### Build docker image:

Run : `docker build -t webapp .`

### Run container image:

Run : `docker run --name webapp -p 8080:80 -it --rm webapp`  

### Stop container: 

Run `docker rm -f webapp`

### Tag your image:

1. Register to [dockerhub.com](https://hub.docker.com/)
2. Create a [repository](https://hub.docker.com/add/repository/) with the name : webapp.
3. Run `docker tag webapp [YOUR_DOCKERHUB_ACCOUNT]/webapp:latest` at your local.


### Push your image:
1. login to dockerhub. run `docker login`
2. Run `docker push [YOUR_DOCKERHUB_ACCOUNT]/webapp:latest`
