FROM python:3.11-alpine3.18

ENV PACKAGES="/usr/local/lib/python3.11/site-packages"

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN find ${PACKAGES} -type f -path "*/__pycache__/*" -exec rm -f {} \;

EXPOSE 8000

CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
