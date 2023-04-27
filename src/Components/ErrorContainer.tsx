import React from 'react'
import emptyIllustration from '../Assets/empty-illustration.svg';

interface Props {
    error: string
}

const ErrorContainer : React.FC<Props> = ({error}: Props) => {
  return (
    <div className='error-container text-center'>
        <img src={emptyIllustration} alt='Empty illustration image'/>
        <h2 className='mt-3 mb-2'>{error}</h2>
        <p>Please try again later</p>
    </div>
  )
}

export default ErrorContainer