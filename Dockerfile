# Check node version with node --v command
FROM node:14.15.5 

# Container directory
WORKDIR /

# Install app dependencies
COPY ["package.json", "./"]

RUN npm install 
RUN npm update

# Bundle app source
COPY . .

# To have PORT 5000 mapped by the docker daemon:
EXPOSE 5000

# Run the app 
CMD [ "npm", "start" ]