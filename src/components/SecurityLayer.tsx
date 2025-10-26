"use client"

import { useEffect } from 'react';

export default function SecurityLayer() {
  useEffect(() => {
    // Disable right-click globally
    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection copy
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for copy/cut/paste
    const preventKeyboardCopy = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Ctrl+C
        (e.ctrlKey && (e.key === 'x' || e.key === 'X')) || // Ctrl+X
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // Ctrl+U (view source)
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) || // Ctrl+Shift+I (DevTools)
        (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) || // Ctrl+Shift+J (Console)
        (e.key === 'F12') || // F12 (DevTools)
        (e.metaKey && (e.key === 'c' || e.key === 'C')) || // Cmd+C (Mac)
        (e.metaKey && (e.key === 'x' || e.key === 'X')) || // Cmd+X (Mac)
        (e.metaKey && e.altKey && (e.key === 'i' || e.key === 'I')) // Cmd+Option+I (Mac DevTools)
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const preventSelection = () => {
      if (window.getSelection) {
        window.getSelection()?.removeAllRanges();
      }
    };

    // Disable drag and drop
    const preventDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('keydown', preventKeyboardCopy);
    document.addEventListener('selectstart', preventSelection);
    document.addEventListener('dragstart', preventDrag);

    // Add CSS to disable text selection
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
      }
      
      /* Allow selection for input fields */
      input, textarea {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('keydown', preventKeyboardCopy);
      document.removeEventListener('selectstart', preventSelection);
      document.removeEventListener('dragstart', preventDrag);
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything
}
