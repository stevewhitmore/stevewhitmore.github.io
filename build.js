const fs = require('fs');
const path = require('path');

const blatheringsPath = 'src/assets/blatherings';
const files = fs.readdirSync(blatheringsPath);

const mdFiles = [];
files.forEach(file => {
    if (path.extname(file) == ".md")
      mdFiles.push(file);
  })

filesListJson = [];
mdFiles.forEach(file => {
    const contents = fs.readFileSync(`${blatheringsPath}/${file}`, {encoding:'utf8', flag:'r'});
    const firstLine = contents.split(/\r?\n/)[0];
    const fileMeta = {
        name: file,
        title: firstLine.slice(2),
    };
    filesListJson.push(fileMeta);
    filesListJson.reverse();
})

fs.writeFileSync(`${blatheringsPath}/files.json`, JSON.stringify(filesListJson));
