## Boilerplate Express - Core

### Instalação
- Clonar projeto:
-- ```git clone https://github.com/Genial-Ideias/boilerplate-express.git```

- Instalar dependências:
-- com yarn ```yarn```
-- com npm ```npm i```

- Criar arquivo de conexão com banco de dados baseado no ```ormconfig.example.json```
    ```json
    {
      "type": "postgres",
      "port": 5432,
      "host": "localhost",
      "username": "postgres",
      "password": "123",
      "database": "boilerplate_core",
      "migrations": ["./migrations/*.ts"],
      "entities": ["./src/infra/orm/entities/*.ts"],
      "cli": {
        "migrationsDir": "./migrations"
      }
    }
    ```

- rodar projeto:
-- com yarn ```yarn dev```
-- com npm ```npm run dev```
