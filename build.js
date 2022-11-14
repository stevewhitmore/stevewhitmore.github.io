const fs = require('fs');
const path = require('path');

const blatheringsPath = 'src/assets/blatherings';
const files = fs.readdirSync(blatheringsPath);

const mdFiles = [];
files.forEach(file => {
    if (path.extname(file) == ".md" && !file.includes('index.md')) {
        mdFiles.push(file);
    }
  })

filesListJson = [];
mdFiles.forEach(file => {
    const contents = fs.readFileSync(`${blatheringsPath}/${file}`, {encoding:'utf8', flag:'r'});
    const firstLine = contents.split(/\r?\n/)[0];
    const tagsLineDirty = contents.match(/\>.+?\</g)[0];
    const tagsLine = tagsLineDirty.substring(1, tagsLineDirty.length -1);

    const fileMeta = {
        name: file,
        title: firstLine.slice(2),
        tags: tagsLine,
        date: file.match(/(\d{4})-(\d{2})-(\d{2})/g).join(''),
    };
    filesListJson.push(fileMeta);
})
filesListJson.reverse();

fs.writeFileSync(`${blatheringsPath}/files.json`, JSON.stringify(filesListJson));
