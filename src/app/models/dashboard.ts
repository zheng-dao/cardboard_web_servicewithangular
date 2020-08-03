export interface Job {
    url: string;
    career: string;
    inc_name: string;
    nat_name: string;
}

export interface RecommendJob {
    url: string;
    career: string;
    inc_name: string;
    nat_name: string;
}

export interface Member {
    photoUrl: string,
    name: string,
    career: string,
    experience: string,
    studies: string,
    age: string
    country: string,
    languages: string
}

export interface Company {
    url: string;
    career: string;
    inc_name: string;
    nat_name: string;
}
export interface JobBranch {
    url: string;
    branch: string;
}

export interface JobChartModel {
    x: string;
    y: number;
}

export interface SearchChartModel {
    x: string;
    y: number;
}