# syntax=docker/dockerfile:1

# build stage
FROM node:16-bullseye-slim as builder

RUN apt-get update && apt-get install -y --no-install-recommends

WORKDIR /app

COPY --chown=node:node package.json package-lock.json ./

RUN --mount=type=cache,target=/app/cache/apt \
    npm ci --omit=dev

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --chown=node:node . .

RUN --mount=type=cache,target=/app/cache/apt \
    npm run build

# final Stage
ARG PORT=80

FROM nginx:mainline-alpine3.18-slim as production

# Copy built assets from `builder` image
COPY --from=builder --chown=nging:nginx /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE ${PORT}
# Start nginx
ENTRYPOINT [ "nginx", "-g", "daemon off;"]