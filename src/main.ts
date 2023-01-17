import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import "dotenv/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const port = process.env.PORT;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  console.log('App running on port: ', port);
  
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Papers to call')
    .setDescription('API for request presentation of papers')
    .setVersion('1.0')
    .addTag('Call2Papers')
    .build()

    const document = SwaggerModule.createDocument(app, options)

  await app.listen(port);
}
bootstrap();
