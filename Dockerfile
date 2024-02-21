# syntax=docker/dockerfile:1

# build stage
FROM node:16-bullseye-slim as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/app/cache/apt \
    npm install

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY . .

RUN --mount=type=cache,target=/app/cache/apt \
    npm run build

# final Stage
# expose port ARG
ARG PORT=80
# Use nginx as base image alpine 3.18-slim as the production base image
FROM nginx:1.25.2 as production
# Copy static output from npm build to nginx html directory
COPY --from=builder --chown=nging:nginx /app/build /usr/share/nginx/html
# Add  nginx configuration to the default dir in the container
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port ARG
EXPOSE ${PORT}
# Start nginx
ENTRYPOINT [ "nginx", "-g", "daemon off;"]