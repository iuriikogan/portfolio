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

ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    portfolio
USER portfolio

ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]