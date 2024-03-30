FROM python:3.11-alpine3.18

ARG WITH_PLUGINS=true

ENV PACKAGES="/usr/local/lib/python3.11/site-packages"
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

COPY . /app

RUN apk upgrade --update-cache -a && \
    apk add --no-cache tini && \
    pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt && \
    if [ "${WITH_PLUGINS}" = "true" ]; then \
      pip install --no-cache-dir mkdocs-material[recommended] mkdocs-material[imaging]; \
    fi && \
    find ${PACKAGES} -type f -path "*/__pycache__/*" -exec rm -f {} \;

EXPOSE 8000

# Use tini to manage zombie processes and signal forwarding
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
