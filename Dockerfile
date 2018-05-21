FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g yarn

COPY package.json ./
COPY yarn.lock .

RUN yarn install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]