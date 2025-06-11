import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for frontend access
  app.enableCors({
    origin: 'http://localhost:5173', // your Vue dev server
    credentials: true,
  });

  // ✅ Global validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3100);
}
bootstrap();
