FROM python:3.10.4-bullseye
WORKDIR /usr/src/backend

COPY . .

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

ENTRYPOINT ["python", "app.py"]
