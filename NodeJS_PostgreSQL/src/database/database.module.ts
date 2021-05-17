import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        // username: 'postgres',
        // password: '12345678',
        // database: 'test_db',
        username: 'postgres',
        password: '12345678',
        database: 'test',
        entities: [__dirname + '/../**/*.entity.ts'],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
