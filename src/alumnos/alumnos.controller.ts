import { Controller, Get, Post, Put, Delete, Param, Body,Patch, Query } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post()
  create(@Body() alumnoData): Promise<any> {
    return this.alumnosService.create(alumnoData);
  }

  @Get()
  findAll(): Promise<any[]> {
    return this.alumnosService.findAll();
  }
}