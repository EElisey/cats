import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchCatImage = async () => {
  const response = await axios.get('https://api.thecatapi.com/v1/images/search')
  return response.data[0].url
}

export const useCatImage = () => {
  const [enabled, setEnabled] = useState(true)
  const [autoRefresh, setAutoRefresh] = useState(false)
  
  const { data: catImage, isLoading, error, refetch } = useQuery<string, Error>({
    queryKey: ['catImage'],
    queryFn: fetchCatImage,
    refetchOnWindowFocus: false,
    enabled: false
  })

  useEffect(() => {
    if (!autoRefresh || !enabled) return
    
    const intervalId = setInterval(() => {
      refetch()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [autoRefresh, enabled, refetch])

  const toggleEnabled = () => {
    setEnabled(prev => !prev)
  }

  const toggleAutoRefresh = () => {
    setAutoRefresh(prev => !prev)
  }

  return {
    catImage: catImage || null,
    isLoading,
    error: error?.message || null,
    refetch,
    enabled,
    toggleEnabled,
    autoRefresh,
    toggleAutoRefresh
  }
}