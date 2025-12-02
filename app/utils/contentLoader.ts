import fs from 'fs'
import path from 'path'
import YAML from 'js-yaml'

export function loadYamlContent(filename: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', `${filename}.yaml`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return YAML.load(fileContents)
  } catch (error) {
    console.error(`Error loading ${filename}:`, error)
    return null
  }
}
