module.exports.get = (filename, cb) => {
  let data = []
  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(filename)
  })

  lineReader.on('line', function (line) {
    data.push(line)
  })

  lineReader.on('close', function () {
    cb(data)
  })
}
