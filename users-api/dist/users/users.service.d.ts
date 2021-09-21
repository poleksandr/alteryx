import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    find(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    delete(id: string): Promise<User>;
}
