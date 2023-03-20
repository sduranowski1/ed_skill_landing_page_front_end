import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'

function LottieAnimation2() {

    const container = useRef(null)

    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('/Users/szymonduranowski/Downloads/Restaurant-Landing-Page-Tutorial-main/src/Assets/138450-color-loader.json')
        })

        // Return clean up function here
        return () => instance.destroy();
    }, [])

  return (

    <div className="container" ref={container}></div>

  )
}

export default LottieAnimation2