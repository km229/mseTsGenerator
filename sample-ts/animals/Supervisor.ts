///<reference path='Teacher.ts'/>
///<reference path='Student.ts'/>
///<reference path='IWork.ts'/>

module MyNamespace {
    export class Supervisor {

        constructor(inst:IWork) {
            inst.work();

            if(inst instanceof Teacher) {
                var teacher:Teacher = <Teacher>inst;
                console.log('Has tenure:', teacher.tenure);
            }

            if(inst instanceof Student) {
                var student:Student = <Student>inst;
                console.log('Average grade is:', student.averageGrade);
            }
        }

    }
}