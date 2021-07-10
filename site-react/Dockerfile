# Check out https://hub.docker.com/_/node to select a new base image
FROM node:14-slim

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node  . /home/node/app

RUN npm ci
RUN npm run build

ENV HOST=0.0.0.0 PORT=3000
EXPOSE ${PORT}

CMD ["npm", "start"]