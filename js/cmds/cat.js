export default function(output, _history, ...args) {
    args.forEach(file => {
        switch (file) {
            case "about.txt":
                output.innerHTML += `\
This Is A Site For People To Get A Taste Of The Linux Terminal
Made By <a href="https://sx9.is-a.dev">sx9dev</a>
`;
                break;
            case "quotes.txt":
                output.innerHTML += `\
"Programming Is Painful And Fun!"
`;
                break;
            case "todo.txt":
                output.innerHTML += `\
1. Make More Commands
2. Add A Working File System
3. Add A Package Manager
`;
                break;
            case "": break;
            default: output.innerHTML += "No Such File: " + file;
        }
    });
}