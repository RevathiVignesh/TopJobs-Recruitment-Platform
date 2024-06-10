import { empdetails } from "./empdetails.model";
export class job{
    jobId:number=0;
    employeeId:number=0;
    employerdetails?:empdetails;
    jobDesigntion:string="";
    jobSalary:string="";
    jobCountry:string="";
    jobState:string="";
    jobCity:string="";
    jobStatus:string="";
}