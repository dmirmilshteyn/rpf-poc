
// Based on https://stackoverflow.com/a/15316132
// Input data is mostly an ini file that uses `:` as a delimiter instead of `=`
export function parse(data: string) {
  var regex = {
    section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
    param: /^\s*([\w\.\-\_]+)\s*:\s*(.*?)\s*$/,
    comment: /^\s*;.*$/
  };
  var value = {};
  var lines = data.split(/\r\n|\r|\n/);
  var section = null;

  for (let x = 0; x < lines.length; x++) {
    if (regex.comment.test(lines[x])) {
      return;
    } else if (regex.param.test(lines[x])) {
      var match = lines[x].match(regex.param);

      // Gatsby doesn't like keys with '.'
      const key = match[1].replaceAll('.', '_');

      if (section) {
        value[section][key] = match[2];
      } else {
        value[key] = match[2];
      }
    } else if (regex.section.test(lines[x])) {
      var match = lines[x].match(regex.section);
      value[match[1]] = {};
      section = match[1];
    } else if (lines.length == 0 && section) {//changed line to lines to fix bug.
      section = null;
    }
  }

  return value;
}
