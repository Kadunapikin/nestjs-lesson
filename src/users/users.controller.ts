import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')  //this is like the parent route to handle /user request
export class UsersController {
    /*
    DELETE /users/:id
    */

    @Get()      // GET /ussers
    findAll() {
        // return ['daniel', 'Emmanuel', 'Bobai', 'Isaac']
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
