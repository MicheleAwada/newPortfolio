FROM python:alpine

WORKDIR /app

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# RUN python manage.py collectstatic --noinput