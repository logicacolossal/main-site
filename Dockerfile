FROM node:22-alpine AS build_image

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Add args if necessary

RUN yarn build
RUN npm prune --production

FROM node:22-alpine

WORKDIR /app

COPY --from=build_image /app/package.json ./package.json
COPY --from=build_image /app/node_modules ./node_modules
COPY --from=build_image /app/.next ./.next
COPY --from=build_image /app/public ./public

CMD ["yarn", "start"]