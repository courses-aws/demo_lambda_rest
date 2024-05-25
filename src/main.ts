import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@codegenie/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, Tkn-Auth,Accept, Accept-Encoding, Accept-Language, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Origin,Referer, Sec-Ch-Ua, Sec-Ch-Ua-Mobile, Sec-Ch-Ua-Platform, Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site");
    next();
  });
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};