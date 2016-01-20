module.exports = parse

function Parser (options) {
  if (!(this instanceof Parser)) {
    return new Parser(options)
  }
  this.parsers = options.parsers
}

Parser.prototype.parse = function (data, contentType, subjectUri) {
  return this.parsers[contentType].parse(data)
}
