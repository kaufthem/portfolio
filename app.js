var iframeWrap = document.getElementsByClassName("iframe-wrap");
modal = document.getElementsByClassName("modal")[0],
modalCard = document.getElementsByClassName("modal-card")[0],
xbtn = document.getElementsByClassName("modal-xbutton")[0];

for (i = 0; i < iframeWrap.length; i++) { 
  iframeWrap[i].onclick = function(event) { openModal(event); }
  iframeWrap[i].getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
}

function openModal(e) {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  if (vw < 768) return;
  var modalIframe = e.currentTarget.cloneNode(true);
  var overlay = modalIframe.getElementsByClassName("iframe-overlay")[0], iframe = modalIframe.getElementsByTagName("iframe")[0];
  if (iframe.src === "https://kaufthem.github.io/project-5/") 
    overlay.style.opacity = "0";
  else {
    iframe.setAttribute("scrolling", "yes");
    overlay.style.display = "none";
  }
  modalIframe.style.transform = "scale(3)";
  modalIframe.style.width = "30%";
  modalIframe.style.marginTop = "12rem";
  modalCard.appendChild(modalIframe);
  modal.style.display = "block";
}

function closeModal() {
  modalCard.removeChild(modalCard.lastChild);
  modal.style.display = "none";
}

xbtn.onclick = function() {
  closeModal();
}

window.onclick = function(event) {
  if (event.target == modal) {
      closeModal();
  }
}