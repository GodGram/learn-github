// import { prop, getModelForClass } from '@typegoose/typegoose';
// import * as bcrypt from 'bcrypt';

// class User {
//   @prop({ required: true, unique: true })
//   email: string;

//   @prop({ required: true })
//   password: string;
// }

// const UserModel = getModelForClass(User);

// UserModel.schema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// export { User, UserModel };


import { prop, getModelForClass } from '@typegoose/typegoose';
import * as bcrypt from 'bcrypt';

export class User {
  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
});

// UserModel.schema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });
UserModel.schema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});