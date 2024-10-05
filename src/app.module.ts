import { TransactionsModule } from './transactions/transactions.module';
import { ProductsModule }     from './products/products.module';
import { UsersModule }        from './users/users.module';
import { Module }             from '@nestjs/common';
import { ConfigModule }       from '@nestjs/config';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    TransactionsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

  ],
})
export class AppModule {}
