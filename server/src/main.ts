import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //get port
  const configService = app.get(ConfigService);
  const port = configService.get("APP_PORT") || 8000;

  //get allowed origin for CORS
  const allowedOrigin = configService.get("ALLOWED_ORIGIN");

  app.enableCors({
	origin: allowedOrigin
  });

  await app.listen(port);
}
bootstrap();
