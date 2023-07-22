import { Movie } from './entities/movie.entity';

import {
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(
    @Query('year') searchingYear: string,
    @Query('month') searchingMonth: string,
  ) {
    return `We are searching for a movie made after : ${searchingYear}y ${searchingMonth}m`;
  }

  @Get('/:id')
  getOne(@Param('id') movieID: number): Movie {
    return this.moviesService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieID: number) {
    return this.moviesService.deleteOne(movieID);
  }

  @Patch('/:id')
  patch(@Param('id') movieID: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieID, updateData);
  }
}
