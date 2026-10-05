import { FileWriter } from '#/utils'

function main() {
  using fileWriter = new FileWriter('some-temp-file.txt')
  fileWriter.write('Hello')
}

main()
