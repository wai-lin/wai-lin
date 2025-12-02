import YAML from 'js-yaml'

export const useContent = () => {
  const loadYaml = async (filename: string) => {
    try {
      const response = await fetch(`/content/${filename}.yaml`)
      if (!response.ok) {
        throw new Error(`Failed to load ${filename}.yaml`)
      }
      const yamlText = await response.text()
      const data = YAML.load(yamlText)
      return data
    } catch (error) {
      console.error(`Error loading ${filename}:`, error)
      return null
    }
  }

  return {
    loadYaml,
  }
}
