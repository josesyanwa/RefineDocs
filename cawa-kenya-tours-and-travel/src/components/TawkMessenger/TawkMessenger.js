"use client";

import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function TawkMessenger() {
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}

            <TawkMessengerReact
                propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}
                widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}
                ref={tawkMessengerRef}
            />
        </div>
    );
}

export default TawkMessenger;
