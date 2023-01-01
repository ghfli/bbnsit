FROM node:19.2

WORKDIR /bbworker

COPY . ./

# handle node-gyp
RUN apt-get update && apt-get install -y python3 make g++ \
    && yarn --ignore-engines && yarn build

EXPOSE 4001

# have to add node environment production after install
# due to this causing yarn to stop installing dev dependencies
# which are actually needed to get this environment up and running
ENV NODE_ENV=production
ENV CLUSTER_MODE=${CLUSTER_MODE}
ENV SERVICE=worker-service
ENV POSTHOG_TOKEN=phc_bIjZL7oh2GEUd2vqvTBH8WvrX0fWTFQMs6H5KQxiUxU
ENV TENANT_FEATURE_FLAGS=*:LICENSING,*:USER_GROUPS
ENV ACCOUNT_PORTAL_URL=https://account.budibase.app
ENV JWT_SECRET=jwt_secret_xxxxxx

CMD ["./docker_run.sh"]
