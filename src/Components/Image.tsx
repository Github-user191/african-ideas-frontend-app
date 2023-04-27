import { FC } from 'react'

interface Props {
    data: string;
    onClick(index: any) : void;
}

const Image: FC<Props> = ({data, onClick}:Props) => {
  return (
   
        <img className='topic-image img-fluid' onClick={onClick} src={data} alt='Image of a certain topic'/>
    
  )
}

export default Image