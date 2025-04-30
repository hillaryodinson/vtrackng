FROM node:alpine AS base
# Set argument for default environment
ARG NODE_ENV=development
# Make it available at runtime
ENV NODE_ENV=$NODE_ENV
WORKDIR /usr/src/app/
COPY package*.json ./

FROM base AS development
RUN npm install
COPY . .
CMD ["npm","run","dev"]

FROM base AS production
RUN npm ci --only=production
COPY . .
CMD ["npm","run","start"]

# Use this for production: docker build --build-arg NODE_ENV=production --target production .
# Use this for development: docker build --target development .