import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './Tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
@Module({
  imports: [TaskModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
