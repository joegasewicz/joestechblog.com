FROM node:22-slim AS assets

WORKDIR /server

ENV BLOG_DOMAIN=https://townchange.com
ENV BLOG_API_URL=https://townchange.com/api/v0

COPY package.json package-lock.json ./
RUN npm ci
COPY webpack.config.js tsconfig.json ./
COPY src ./src
COPY static ./static

RUN npm run build

FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    POETRY_VERSION=2.1.4

WORKDIR /server

RUN pip install --no-cache-dir "poetry==${POETRY_VERSION}"

COPY pyproject.toml poetry.lock README.md ./
RUN poetry config virtualenvs.create false \
    && poetry install --only main --no-root --no-interaction --no-ansi

COPY app ./app
COPY main.py ./main.py
COPY static ./static
COPY --from=assets /server/static ./static

EXPOSE 8888

CMD ["python", "main.py"]
