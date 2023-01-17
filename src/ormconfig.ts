export const postgres_config = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "postgres-db",
  port: process.env.POSTGRES_PORT || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: true,
  migration: false,
  logging: true,
  migrationsTableName: "migration",
  migrations: [__dirname + '/**/*.ts', __dirname + '/migration/**/*.js'],
  cli: {
    migrationsDir: "src/migration"
  }
};
