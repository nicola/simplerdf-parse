module.exports = Parser

function Parser (parsers) {
  if (!(this instanceof Parser)) {
    return new Parser(parsers)
  }
  this.parsers = parsers
}

Parser.prototype.parse = function (data, contentType, subjectUri) {
  subjectUri = subjectUri || document.documentURI;
  return this.parsers[contentType].parse(data, null, subjectUri)
}
