"use client"


// use this
    // <div div div className = "mb-8" >
    //     <ImageMagnifier
    //         src={BigImg}
    //         width={600}
    //         height={400}
    //         magnifierHeight={500}
    //         magnifierWidth={600}
    //         zoomLevel={3.5}
    //         spotlightSize={120} // Size of the spotlight area
    //     />
    //               </div >

import { useState, useRef } from "react"

export default function ImageMagnifier({
    src,
    width = 400,
    height = 300,
    magnifierHeight = 300,
    magnifierWidth = 300,
    zoomLevel = 2.5,
    spotlightSize = 100, // Size of the spotlight area
}) {
    const [showMagnifier, setShowMagnifier] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const imgRef = useRef(null)

    const handleMouseMove = (e) => {
        // Get the position of the image element
        const { left, top } = imgRef.current?.getBoundingClientRect() || { left: 0, top: 0 }

        // Calculate cursor position on the image
        const x = e.clientX - left
        const y = e.clientY - top

        setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
        setShowMagnifier(true)
    }

    const handleMouseLeave = () => {
        setShowMagnifier(false)
    }

    return (
        <div className="relative inline-block">
            <div
                className="relative cursor-crosshair"
                style={{ width: `${width}px`, height: `${height}px` }}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    ref={imgRef}
                    src={src || "/placeholder.svg"}
                    alt="Magnifiable image"
                    className="w-full h-full object-cover"
                />

                {/* Semi-transparent overlay with spotlight effect */}
                {showMagnifier && (
                    <div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        style={{
                            background: `radial-gradient(
                circle ${spotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px,
                transparent 0%,
                transparent 50%,
                rgba(0, 0, 0, 0.5) 51%,
                rgba(0, 0, 0, 0.5) 100%
              )`,
                        }}
                    />
                )}
            </div>

            {showMagnifier && (
                <div
                    className=" fixed zoom top-[200px] left-0 z-[99] border border-gray-300 bg-white shadow-lg pointer-events-none"
                    style={{
                        // Position the magnifier to the right of the image
                        left: `${width + 150}px`,
                        top: "0",
                        width: `${magnifierWidth}px`,
                        height: `${magnifierHeight}px`,
                        backgroundImage: `url(${src})`,
                        backgroundPosition: `
              ${-mousePosition.x * zoomLevel + magnifierWidth / 2}px 
              ${-mousePosition.y * zoomLevel + magnifierHeight / 2}px
            `,
                        backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
                        backgroundRepeat: "no-repeat",
                    }}
                />
            )}
        </div>
    )
}
