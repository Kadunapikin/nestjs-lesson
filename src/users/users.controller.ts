import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')  //this is like the parent route to handle /user request
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()      // GET /ussers  or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return []
    }

    //any route before the params route will be seein as an id thats why is very important to put all routes before the params route
    // @Get('interns')      // GET /ussers/interns
    // findAllInterns() {
    //     return ['Bobai', 'Isaac']
    // }

    @Get(':id')    // GET /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post() //     POST /users
    create(@Body() user: {}) {
        return user
    } 

    @Patch(':id')    // PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete(':id')    // DELETE /users/:id
    delete(@Param('id') id: string) {
        return { id }
    }

}
