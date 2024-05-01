// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//   imports: [MongooseModule.forRoot('mongodb+srv://thanapat:<K6UyBWMRuP5ZvZ7p>@thanapat.q6w4ttk.mongodb.net/?retryWrites=true&w=majority')],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { AuthModule } from './auth/auth.module'; // Import AuthModule

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://thanapat:K6UyBWMRuP5ZvZ7p@thanapat.q6w4ttk.mongodb.net/?retryWrites=true&w=majority'), // Your MongoDB connection string
    // AuthModule, // Add AuthModule to imports array
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
src/app.module.ts



// // app.module.ts
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AuthModule } from './auth/auth.module';
// import { UserController } from './user.controller';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://your-mongodb-atlas-connection-string'),
//     AuthModule,
//   ],
//   controllers: [UserController],
// })
// export class AppModule {}