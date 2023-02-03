import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          port: config.get('MAIL_PORT'),
          secure: false,
          ignoreTLS: true,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASS'),
          },
        },
        defaults: {
          from: `No Reply ${config.get('MAIL_FROM')}`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
