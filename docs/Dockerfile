# Run the following command to build and push the image to the Docker Hub manually:
# docker login
# docker buildx build --platform linux/arm64 -t ttktjmt/ttktjmt-mkdocs:v0.0.0 . --push

FROM python:3.11-alpine3.18

ENV PACKAGES="/usr/local/lib/python3.11/site-packages"

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN find ${PACKAGES} -type f -path "*/__pycache__/*" -exec rm -f {} \;

EXPOSE 8000

CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
