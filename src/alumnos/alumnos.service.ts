import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AlumnosService {
  async create(alumnoData): Promise<any> {
      const response = {id:1, nombre: "Juan", apellidos:"Pérez"}
      return response;
  }

  async findAll(): Promise<any[]> {
    const response = [
      {id:1, nombre: "Juan", apellidos:"Pérez"}, 
      {id:1, nombre: "Roberto", apellidos:"Fernandez"}]
    return response;
  }

}