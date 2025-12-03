import { useState, useEffect } from "react";

export const useFetchDirList = ( dir ) => {
  const [directories, setDirectories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // public/directory_list.json を取得
    fetch('/directory_list.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch directory list')
        }
        return response.json()
      })
      .then(data => {
        setDirectories(data || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching directory list:', error)
        setLoading(false)
      })
  }, [])

  return {
    directories,
    loading
  }
}
