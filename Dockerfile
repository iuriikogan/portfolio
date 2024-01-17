# syntax=docker/dockerfile:1
# build stage
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/var/cache/apt \
    npm install

COPY . .

RUN --mount=type=cache,target=/var/cache/apt \
    npm run build

# final Stage

FROM nginx:1.21.0-alpine as production
# set nologin shell for root user
RUN chsh -sd /usr/sbin/nologin root
# add non-priveleged user and group and use that to run the container
RUN groupadd -r portfolio \
    && useradd -r -g portfolio portfolio
USER portfolio:portfolio
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]