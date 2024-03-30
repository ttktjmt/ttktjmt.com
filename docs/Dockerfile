
FROM python:3.11-alpine3.18

# Build-time flags
ARG WITH_PLUGINS=true

# Environment variables
ENV PACKAGES="/usr/local/lib/python3.11/site-packages"
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

COPY ./docs /app

# RUN apk upgrade --update-cache -a && \
#     apk add --no-cache \
#       cairo \
#       freetype-dev \
#       git \
#       git-fast-import \
#       jpeg-dev \
#       openssh \
#       tini \
#       zlib-dev && \
#     apk add --no-cache --virtual .build-deps \
#       gcc \
#       libffi-dev \
#       musl-dev && \
#     pip install --no-cache-dir --upgrade pip && \
#     pip install --no-cache-dir mkdocs mkdocs-material && \
#     if [ "${WITH_PLUGINS}" = "true" ]; then \
#       pip install --no-cache-dir mkdocs-material[recommended] mkdocs-material[imaging]; \
#     fi && \
#     apk del .build-deps && \
#     find ${PACKAGES} -type f -path "*/__pycache__/*" -exec rm -f {} \; && \
#     git config --system --add safe.directory /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

# Use tini to manage zombie processes and signal forwarding
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
