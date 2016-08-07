const tsc = require('typescript');

module.exports = {
  process(src, path) {
    console.log(src);
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React,
        },
        path,
        []
      );
    }
    return src;
  },
};