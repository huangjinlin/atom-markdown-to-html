<!--not to html-->
# atom-markdown-to-html

a atom package for save markdown to html

## features
- press "ctrl+s" to convert markdown to html in same path
- the html style from github and has toTop button
- ignore some md file,when have `<!--not to html-->`/`<!-- not to html -->` in file

## installation

``` bash
apm install markdown-to-html
```
## create
``` bash
# command palette
Ctrl+Shift+P
input "Generate Package"
```

## debug

``` bash
#open devtool
Ctrl+Shift+I
#reload
Ctrl+Shift+F5/window reload(in command pannel)/Ctrl+R(in devtool)
#clear console
Ctrl+L(in devtool)
```

## publish

``` bash
# first time
git tag -a v0.0.1 -m "release 0.0.1 version"
git push origin --tags
apm publish minor
# other time
apm publish minor
```

## tip
- how to active when init
remove activationCommands in package.json
``` json
"activationCommands": {
  "atom-workspace": "markdown-to-html:toggle"
},
```
## refer to
- [Atom插件开发入门教程](https://blog.csdn.net/xujiayin/article/details/54135100)
- [package-word-count](https://flight-manual.atom.io/hacking-atom/sections/package-word-count/)
- [package-generator](https://github.com/atom/package-generator)
- [atom-markdown-toc-auto](https://github.com/t9md/atom-markdown-toc-auto)
- [uglify-on-save](https://github.com/aadityataparia/uglify-on-save)
- [git 打标签并推送tag到托管服务器](https://www.cnblogs.com/ShaYeBlog/p/5576601.html)

##todo
- 配置页面-保存文件执行转换的开关
- 通过命令执行
