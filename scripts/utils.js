const Utils = {
  navigateTo: function(postId) {
    window.location.hash = postId ? postId : "";
  },

  buildStyle: function(elementId, styleText) {
    if (document.getElementById(elementId)) {
      return;
    }
    
    const style = document.createElement("style");
    
    style.id = elementId;
    style.textContent = styleText;
    
    document.head.appendChild(style);
  }
};