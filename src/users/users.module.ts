// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// // import { UserModel } from '../models/user.model';
// import { User, UserModel } from '../models/user.model';
// import { UsersService } from './users.service';

// @Module({
//   imports: [MongooseModule.forFeature([{ name: User.name, schema: UserModel.schema }])],
//   providers: [UsersService],
//   exports: [UsersService]
// })
// export class UsersModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserModel } from '../models/user.model';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserModel.schema }])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}