"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./models/user.model");
const seedUsers = async () => {
    try {
        const users = [
            {
                "email": "Alan@example.com",
                "password": "password01"
            },
            {
                "email": "Albert@example.com",
                "password": "password02"
            },
            {
                "email": "Wayne@example.com",
                "password": "password03"
            },
            {
                "email": "Mason@example.com",
                "password": "password04"
            },
            {
                "email": "Philip@example.com",
                "password": "password05"
            }
        ];
        for (const user of users) {
            const newUser = new user_model_1.UserModel(user);
            await newUser.save();
            console.log('Created user:', user.email);
        }
        console.log('Seeding completed!');
    }
    catch (err) {
        console.error('Error seeding users:', err);
    }
};
seedUsers();
//# sourceMappingURL=information_user.js.map