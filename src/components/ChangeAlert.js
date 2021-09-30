import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Changes!</p>
                {console.log('changes!')}
                <button onClick={() => toggleShow(false)}>Refresh</button>
            </div>
        );
    } else {
        return <p>Changes?</p>;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
