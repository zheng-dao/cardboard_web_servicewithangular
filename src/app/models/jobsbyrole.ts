export interface JobsByRoleModel {
    count: number;
    role: string;
    expert: string;
    ratio: number;
    is_up: boolean;
}

export interface JobsByCompaniesModel {
    com_mark: string;
    com_name: string;
    count: number;
}

export interface JobsByCountryModel {
    country_photo: string;
    country_name: string;
    count: number;
}