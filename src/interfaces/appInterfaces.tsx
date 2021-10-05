export interface Location {
    latitude: number;
    longitude: number;
}

export interface LoginData {
    dni: string;
    password: string;
}


export interface RegistrationData {
    apellidos: string;
    nombres: string;
    dni: string;
    email: string;
    telefono: string;
    password: string;
}



export interface LoginResponse {
    usuario: any;
}

