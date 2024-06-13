import { Pipe, PipeTransform } from '@angular/core';
import { job } from '../services/job.model'; 

@Pipe({
  name: 'filterdata'
})
export class SearchfilterPipe implements PipeTransform {

 /* transform(value: stud[], ...args: string[]): stud[] {     
    if(value.length==0 || args[0]=='') return value;
    return value.filter((eachStudent)=>eachStudent.studGender.toLowerCase()==args[0].toLowerCase())
     
  }*/
  transform(value: job[], ...args: string[]): job[] {     
    if(value.length==0 || args[0]=='') return value;
    return value.filter((eachBook)=>eachBook.jobDesigntion.toLowerCase()==args[0].toLowerCase())
     
  }
}