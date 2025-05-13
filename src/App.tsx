import styled from 'styled-components'
import { Controls } from './components/Controls'
import { CatImage } from './components/CatImage'
import { useCatImage } from './hooks/useCatImage'

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`
function App() {
  const { 
    catImage, 
    isLoading, 
    error, 
    refetch,
    enabled,
    autoRefresh,
    toggleEnabled,
    toggleAutoRefresh
  } = useCatImage()

  return (
    <AppContainer>
      <Controls 
        onRefresh={refetch}
        enabled={enabled}
        onToggleEnabled={toggleEnabled}
        autoRefresh={autoRefresh} 
        onToggleAutoRefresh={toggleAutoRefresh} 
        isLoading={isLoading}
      />
      <CatImage image={catImage} isLoading={isLoading} error={error} />
    </AppContainer>
  )
}

export default App