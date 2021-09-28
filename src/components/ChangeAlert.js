import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return <p>Changes!</p>;
    } else {
        return <p>Changes?</p>
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
