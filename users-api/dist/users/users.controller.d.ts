import { UsersService } from './users.service';
import { UserDTO } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    find(id: any): Promise<User>;
    create(user: UserDTO): Promise<User>;
    update(id: any, user: UserDTO): Promise<User>;
    delete(id: any): Promise<User>;
}
