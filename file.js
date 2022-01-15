const fs = require("fs");

//writeFile
fs.writeFileSync("./docs/blog.txt", "hello world", () => {
    console.log("File was written");
});

//readFile
fs.readFile("./docs/blog.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

//directories

//This checks if a particular file directory doesn't exisits
//If it doesn't exist then run
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder created");
    });
} else {
    fs.rmdir("/assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder deleted");
    });
}

//delete files
if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) console.log(err);
        console.log("File deleted");
    });
}