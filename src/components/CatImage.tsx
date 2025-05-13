import styled from 'styled-components'

const ImageContainer = styled.div`
  margin: 20px 0;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CatImg = styled.img`
  max-width: 100%;
  max-height: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Loading = styled.div`
  font-size: 18px;
  color: #666;
`

const Error = styled.div`
  font-size: 18px;
  color: #ff3333;
`

interface CatImageProps {
  image: string | null
  isLoading: boolean
  error: string | null
}

export const CatImage = ({ image, isLoading, error }: CatImageProps) => {
  if (isLoading) return <Loading>Загрузка...</Loading>
  if (error) return <Error>Ошибка: {error}</Error>
  
  return (
    <ImageContainer>
      {image && <CatImg src={image} alt="КОт" />}
    </ImageContainer>
  )
}