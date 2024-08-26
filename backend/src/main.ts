import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200', // URL of your Angular app
    methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  });
  await app.listen(3000);
}
bootstrap();
