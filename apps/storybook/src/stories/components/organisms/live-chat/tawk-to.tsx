"use client";

export const LiveChatTawkTo = () => {
  const { VITE_TAWK_PROPERTY_ID, VITE_TAWK_WIDGET_ID } = import.meta.env;
  const propertyId = VITE_TAWK_PROPERTY_ID || "YOUR_PROPERTY_ID";
  const widgetId = VITE_TAWK_WIDGET_ID || "YOUR_WIDGET_ID";
  const tawkUrl = `https://tawk.to/chat/${propertyId}/${widgetId}`;

  return (
    <iframe
      src={tawkUrl}
      title="Tawk.to Chat"
      className="w-full h-full overflow-auto"
      style={{ width: "100%", height: "100%", border: "none", position: "relative", top: 0, left: 0, zIndex: 9999 }}
      allow="microphone; camera"
    />
  );
};
