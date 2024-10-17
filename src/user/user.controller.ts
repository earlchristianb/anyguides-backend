import {Body, Controller, Get, Post} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";

@Controller('user')
export class UserController {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    @Get()
    async getUsers() {
        return await this.userRepository.find();
    }

    @Post()
    async createUser() {
        const user = this.userRepository.create({
            username: 'John Doe',
            email: 'myemail@gmail.com',
        });

        return await this.userRepository.save(user);
    }
}
