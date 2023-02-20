import * as filehandle from "node:fs";

const data = "test.txt";

const content = "WELL HELLO THERE...."
filehandle.writeFile(data, content, error => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`First string was added in ${data}`);



    const content2 = "General Kenobi...."
    filehandle.writeFile(data, `${content} \n${content2}`, error => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(`Second string was added in ${data}`);
    });


});
