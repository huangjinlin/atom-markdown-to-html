'use babel';

import { CompositeDisposable } from 'atom';

let utils
function getUtils () {
  if (!utils) utils = require('./utils')
  return utils
}

function isMarkdownEditor (editor) {
  return ['source.gfm', 'text.md'].includes(editor.getGrammar().scopeName)
}

export default {

  subscriptions: null,

  activate(state) {
    console.log("markdown-to-html.activate")
    this.subscriptionByURL = new Map()
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-to-html:toggle': () => this.toggle()
    }));

    this.subscriptions.add(
      atom.workspace.observeTextEditors(editor => {
        if (!isMarkdownEditor(editor)) return
        const URI = editor.getURI()
        console.log("URI",URI)
        // editor.buffer.onWillSave(() => {
        // })
        editor.onDidSave(()=>{
          console.log("onDidSave")
          getUtils().saveToHtml(editor)
        })
      })
    );
  },

  deactivate() {
    console.log("markdown-to-html.deactivate")
    this.subscriptions.dispose()
    this.subscriptionByURL.forEach(disposable => disposable.dispose())
    this.subscriptionByURL.clear()
  },

  toggle() {
    console.log('MarkdownToHtml was toggled!');
  }

};
