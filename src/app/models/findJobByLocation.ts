export interface JobByLocationModel{
    country_name:string;
    flag:string;
    total_count:number;
    cities: JobByCityModel[];
}
export interface JobByCityModel{
    name:string;
    count:number;
}

export interface JobForInterModel{
    name:string;
    count:number;
}