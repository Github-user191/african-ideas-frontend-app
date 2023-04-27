import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import ImageService from '../Services/ImageService'
import Footer from './Footer'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import Sidebar from './Sidebar'
import { PulseLoader } from 'react-spinners';
import ImageSkeleton from '../Skeleton/ImageSkeleton';
import { TopicContext } from '../Context/TopicContext';
import PhotoAlbum from "react-photo-album";
import ErrorContainer from './ErrorContainer';

const Landing = () => {
    const { topics } = React.useContext(TopicContext);
    const [currentTopic, setCurrentTopic] = useState<string>('nature')

    const [images, setImages] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')


    const [pageCount, setPageCount] = useState(5);
    const [index, setIndex] = React.useState(-1);

    const zoomRef = useRef(null);
    const captionsRef = useRef(null);
    const scrollToBottomRef = useRef<any>();

    const scrollToBottom = () => {
        scrollToBottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    

    const slides = images.map(({ id, height, width, urls, user }:  { id: string, height: number, width: number, urls: string | any, user: string | any }) => ({
        id: id,
        height: height,
        width: width,
        src: urls.regular,
        title: user.name
    }));


    const fetchImagesByTopic = (topic: string): void => {
        setIsLoading(true)
     
        ImageService.fetchImagesByTopic(topic.replace(' ', '-'), pageCount)
            .then(res => {
                setImages(res)
           
            }).catch(err => {
                setError("There was en error retriveing the data.. Please try again shortly")
                setIsLoading(false);
            }).finally(() => {
                setIsLoading(false)
            })
    }


    const loadMoreImages = (): void => {
        setPageCount(pageCount + 4);
    }


    const changeTopic = (topic: string): void => {
        setCurrentTopic(topic.replace('-', ' '))
        fetchImagesByTopic(topic)
    }

    useEffect(() => {
       
        setIsLoading(true)
        fetchImagesByTopic(currentTopic)
    }, [pageCount])

    return (
        <div className='landing row no-padding'>

            <div className="left-section col-auto col-md-3 col-xl-2 no-padding">
                <Sidebar topics={topics} changeTopic={changeTopic} />
            </div>


            <div className="right-section col no-padding">
                <Navbar topics={topics} changeTopic={changeTopic} />
                <div className="content">
                    <div className="header">
                        <h2>African Ideas App</h2>
                        <p>View images ranging from various topics</p>
                        <button onClick={scrollToBottom}>
                            Start Browsing
                        </button>
                    </div>

                    <div className="gallery-header">
                        <h4>{error ? 'Error' : currentTopic}</h4>
                        <p>{error ? 'Error' : `Images related to ${currentTopic}`}</p>
                    </div>

                    <div className="gallery-container row">

                        {error && (
                            <ErrorContainer error={error} />
                        )}

                        {isLoading ?
                            <ImageSkeleton /> :
                            <PhotoAlbum layout="rows" photos={slides}  targetRowHeight={310} onClick={({ index }) => setIndex(index)} />
                        }
          
                    </div>
                
                    <Lightbox
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        slides={slides}
                        plugins={[Captions, Zoom]}
                        zoom={{ref: zoomRef}}
                        captions={{ref: captionsRef}}
                    />

                    <div className="btn-container">
                        <button className='load-more-images-btn mt-4' onClick={loadMoreImages}>
                            {isLoading ? <PulseLoader color='#fff' size={9} /> : 'Load more'}
                        </button>
                    </div>

                </div>

           
            </div>
            <div ref={scrollToBottomRef} />
            <Footer />
        </div>
    )
}

export default Landing