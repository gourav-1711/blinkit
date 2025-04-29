"use client"

    // use this 
    // <div div className = "mb-8" >
    //     <ImageMagnifier
    //         src="/placeholder.svg?height=400&width=600"
    //         width={600}
    //         height={400}
    //         magnifierHeight={300}
    //         magnifierWidth={300}
    //         zoomLevel={2.5}
    //     />
    //   </div >
import { useState, useRef } from "react"

export default function ImageMagnifier({
    src,
    width = 400,
    height = 300,
    magnifierHeight = 300, // Increased from 150 to 300
    magnifierWidth = 300, // Increased from 150 to 300
    zoomLevel = 2.5,
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
            </div>

            {showMagnifier && (
                <div
                    className=" fixed   z-[50] border-gray-300 bg-white  pointer-events-none"
                    style={{
                        // Position the magnifier to the right of the image
                        left: `${width + 20}px`,
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

