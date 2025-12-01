import { useState, useEffect } from "react";

export const isTankiYohou = (metadata) => (metadata && metadata.title === "短期予報解説資料")

export const useFetchKaisetsuData = ( metadata, dir ) => {
  const [kaisetsu, setKaisetsu] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isTankiYohou(metadata)) {
      fetch(`/${dir}/kaisetsu_tanki.json`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch kaisetsu data')
          return response.json()
        })
        .then(data => {
          const tracks = []
          tracks.push([
            data[0].name,
            data[0].sentences[0]
          ].join("\n"))
          tracks.push(data[1].name)
          data[1].subsections.forEach(item => {
            const texts = []
            texts.push(item.name)
            item.sentences.forEach(sentence => texts.push(sentence))
            tracks.push(texts.join("\n"))
          })
          tracks.push(data[2].name)
          data[2].subsections.forEach(item => {
            const texts =[]
            texts.push(item.name)
            item.sentences.forEach(sentence => texts.push(sentence))
            tracks.push(texts.join("\n"))
          })
          setKaisetsu(tracks)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching kaisetsu data:', error)
        })
    }
  }, [metadata])

  return {
    kaisetsu,
    loading
  }
}
