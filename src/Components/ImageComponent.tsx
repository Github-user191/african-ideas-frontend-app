import React, { FC, MouseEventHandler, useState} from 'react'
import Image from './Image';



interface Props {
  data: string;
  onClick(index: any) : void;
}

const ImageComponent: FC<Props> = ({data, onClick}: Props) => {

  return (

        <div className="col-md-4 mt-3 col-lg-3" >
            <Image data={data} onClick={onClick}/>
        </div>
     

  )
}

export default ImageComponent