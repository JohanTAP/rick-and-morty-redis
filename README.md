<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

# Rick and Morty API con Redis Cache

API REST construida con NestJS que consume la Rick and Morty API y utiliza Redis como sistema de caché.

## Descripción

Esta aplicación proporciona endpoints para obtener información sobre personajes de Rick and Morty, implementando un sistema de caché con Redis para mejorar el rendimiento. El proyecto está construido con NestJS, utilizando Fastify como servidor, Axios para las peticiones HTTP y Redis para el almacenamiento en caché.

## Requisitos Previos

- Node.js
- Docker y Docker Compose (para Redis)
- npm

## Configuración del Proyecto

1. Instalar dependencias:

```bash
$ npm install
```

2. Levantar Redis:

```bash
$ docker compose up -d
```

3. Ejecutar la aplicación NestJS:

```bash
$ npm run start:dev
```
