import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppService } from './app.service';

@Module({
  imports: [
    AlumnosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
