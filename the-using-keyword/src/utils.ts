import fs from 'node:fs'

export class FileWriter {
  private filePath: string = ''

  constructor(filePath: string) {
    this.filePath = filePath
  }

  write(data: string) {
    fs.writeFileSync(this.filePath, data)
  }

  [Symbol.dispose]() {
    // Comment this line if you don't want your temp file to be cleaned up.
    fs.unlinkSync(this.filePath)
  }
}
