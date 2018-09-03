import React from 'react';
import './LoadingIndicator.css';
export default function LoadingIndicator() {
    return (
        <div class="loader">
             <svg viewBox="0 0 32 32" width="32" height="32">
               <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
             </svg>
        </div>
    );
}