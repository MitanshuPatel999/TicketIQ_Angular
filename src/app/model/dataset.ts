export interface Dataset
{
    id: number;
    title: string;
    labels: string[];
    data1: number[];
    data2: number[];
    dataLoaded: boolean;
}