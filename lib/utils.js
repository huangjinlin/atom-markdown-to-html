var fs = require('fs');
var path = require('path');
var marked = require('marked');
var cheerio = require('cheerio');
var atom = require('atom');
function canMarded(data) {
  return (data.indexOf('<!--not to html-->')>-1)?false:true;
}
function saveToHtml(editor) {
  const URI = editor.getURI();
  const basename = path.basename(URI, '.md');
  const dirname = path.dirname(URI);
  const ext = '.html'
  const filePath = `${dirname}\\${basename}${ext}`;
  // console.log("basename",basename)
  // console.log("dirname",dirname)
  // console.log("filePath",filePath)
  var $ = cheerio.load(fs.readFileSync(path.resolve(__dirname, 'template.html')), 'utf-8');
  // console.log("editor",editor)
  fs.readFile(URI,'utf-8',function(err1,data1){
    if(err1){
      atom.notifications.addError('error', {detail: err1, dismissable: true});
    }else{
      if(data1 && canMarded(data1)){
        marked(data1, {}, function (err2, data2) {
          if (err2) {
            atom.notifications.addError('error', {detail: err2, dismissable: true});
            return;
          }
          $('article').empty().append(data2);
          const content = $.html()
          // console.log("content",content);
          fs.writeFile(filePath,content,function(err3){
            if (err3) {
              atom.notifications.addError('error', {detail: err3, dismissable: true});
              return;
            }
          })
        });
      }
    }
  });
}
module.exports = {
  saveToHtml
}
