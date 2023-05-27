FROM python:3.9
WORKDIR /app
ADD . /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000
COPY src/ .
CMD ["python", "src/app.py"]