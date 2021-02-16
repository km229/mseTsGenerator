import { ClassDeclaration, Project } from "ts-morph";

let id: number = 1;

const project = new Project();

const famixPrefix = "Famix-Java-Entities";

let mseFile:string = '(\n';

project.addSourceFilesAtPaths("sample-ts/**/*.ts");

project.getSourceFiles().forEach(sourceFile => {

    console.log('Source file: ' + sourceFile.getBaseName());

    const hasClasses = sourceFile.getClasses().length > 0;
    const hasInterfaces = sourceFile.getInterfaces().length > 0;

    if (hasClasses) {
        console.log('Found classes:');
        sourceFile.getClasses().forEach(clazz => {
            console.log('Class ' + clazz.getName());
            if (clazz.getConstructors().length > 0) {
                clazz.getConstructors().forEach(construct => {
                    console.log(" Constructor: ");
                    construct.getParameters().forEach(param => {
                        console.log('  Parameter: ' + param.getName() + ', type: ' + param.getType().getText());
                    })
                })
            }
            addClassToMSE(clazz, mseFile);
        });
    }

    if (hasInterfaces) {
        console.log('Found interfaces:');
        sourceFile.getInterfaces().forEach(interfaze => {
            console.log('Interface ' + interfaze.getName());
        });
    }
});

mseFile += ')';

console.log('MSEFile: \n' + mseFile);

function addClassToMSE(clazz: ClassDeclaration, mseDocument: string) {
    mseFile += "    (" + famixPrefix + ".Class (id: " + id++ + ")\n";
    mseFile += "        (name: '" + clazz.getName() + "')";
    // Does TypeContainer (from Java) make sense in TypeScript?
    mseFile += ")\n";
}