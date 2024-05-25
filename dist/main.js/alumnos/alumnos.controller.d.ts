import { AlumnosService } from './alumnos.service';
export declare class AlumnosController {
    private readonly alumnosService;
    constructor(alumnosService: AlumnosService);
    create(alumnoData: any): Promise<any>;
    findAll(): Promise<any[]>;
}
