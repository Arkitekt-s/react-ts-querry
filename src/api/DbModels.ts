export interface Activity {

    id?: number,
    name: string;
    description: string;
    imageName: string;
    //? means optional property in interface
    instructor?: Instructor;
}
export interface Instructor{
    id?: number,
    firstName: string;
    lastName: string;
}