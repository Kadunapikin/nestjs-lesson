import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')  //this is like the parent route to handle /user request
export class UsersController {
    /*
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get()      // GET /ussers
    findAll() {
        return []
    }

}
