import React, {useRef, useEffect} from 'react';
import '@smile_identity/smart-camera-web';

// @ts-ignore
const SelfieCapture = ({hideInstructions, showNavigation, onCapture}) => {
    const smartCameraRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref

    useEffect(() => {
        // Dynamically add and manage the smart-camera-web component
        const smartCamera = document.createElement('smart-camera-web');

        // Set attributes dynamically
        if (hideInstructions) {
            smartCamera.setAttribute('hide-instructions', '');
        }
        if (showNavigation) {
            smartCamera.setAttribute('show-navigation', '');
        }

        // Append the smart-camera-web component to the container div
        if (smartCameraRef.current) {
            smartCameraRef.current.appendChild(smartCamera); // No more TypeScript error
        }

        // Listen for custom events emitted by the component
        const handleImagesComputed = (event: CustomEvent) => {
            if (onCapture) {
                onCapture(event.detail.images); // Pass captured images to the parent
            }
            console.log('Captured images:', event.detail.images);
        };

        // @ts-ignore
        smartCamera.addEventListener('imagesComputed', handleImagesComputed);

        // Cleanup on component unmount
        return () => {
            // @ts-ignore
            smartCamera.removeEventListener('imagesComputed', handleImagesComputed);
            if (smartCameraRef.current) {
                smartCameraRef.current.removeChild(smartCamera);
            }
        };
    }, [hideInstructions, showNavigation, onCapture]);

    // @ts-ignore
    return (
        <div>
            <h1>Smile Identity Camera</h1>
            {/* The container for the smart-camera-web element */}
            <div ref={smartCameraRef}></div>
        </div>
    );
};

export default SelfieCapture;