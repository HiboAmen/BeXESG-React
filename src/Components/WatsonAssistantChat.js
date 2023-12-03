import React, { useEffect } from 'react';

const WatsonAssistantChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "e89fc1ff-eab7-4405-afe0-9f0592d30b50",
      region: "au-syd",
      serviceInstanceID: "ecd46e9f-254b-437a-88b0-0ecfb92a416d",
      onLoad: async (instance) => { await instance.render(); }
    };

    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      window.watsonAssistantChatOptions.clientVersion || 'latest'
    }/WatsonAssistantChatEntry.js`;

    document.head.appendChild(script);

    // Clean up function
    return () => {
      // Remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <div id="watson-assistant-chat-container" />;
};

export default WatsonAssistantChat;
