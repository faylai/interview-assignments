import './index.css';
import {ReactNode, useEffect, useRef, useState, Children} from 'react'

type Props = { children: ReactNode [] | ReactNode, className: string, speed?: number, [key: string]: any };

function Carousel(props: Props) {
    let children: ReactNode[] = Children.toArray(props.children)
    let [activeIndex, setActiveIndex] = useState(0)
    const childSizeRef = useRef(children.length)
    childSizeRef.current = children.length

    useEffect(function () {
        const stub = setInterval(function () {
            setActiveIndex(prevState => (prevState + 1) % childSizeRef.current)
        }, 2000)
        return function () {
            console.log("destroyed")
            clearInterval(stub)
        }
    }, [])


    return <div className={props.className + " carousel"} style={{display: 'inline-block'}}>
        <div className='container'>
            {
                children.map((node, index) => {
                    return <div
                        className={['item', index === activeIndex ? 'active' : '', (index === activeIndex - 1 ? 'inactive' : '')].join(' ')}
                        key={index}>
                        {node}
                    </div>

                })
            }
        </div>
        <div className='bar-ct'>
            {
                children.map((node, index) => {
                    return <span key={index}
                                 className={['item', (index === activeIndex ? 'active' : '')].join(' ')}></span>
                })
            }
        </div>
    </div>
}

export default Carousel
