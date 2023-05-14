FROM python:3.9-slim
COPY index.js .
COPY jq.js .
COPY style.css .
COPY index.html .
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
