import { useState, useEffect } from "react";

export const useFetchMetaData = ( dir ) => {
  const [metadata, setMetadata] = useState(null)
  const [loading, setLoading] = useState(true)
  // 環境変数 VITE_CONTENTS_PATH を参照
  const contentsPath = import.meta.env.VITE_CONTENTS_PATH || "/"

  useEffect(() => {
    fetch(`${contentsPath}${dir}/metadata.json`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch metadata')
        return response.json()
      })
      .then(data => {
        setMetadata(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching metadata:', error)
        setLoading(false)
      })
  }, [dir])

  return {
    metadata,
    loading
  }
}
