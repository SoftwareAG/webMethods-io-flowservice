export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This tutorial has been updated. ` +
    `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const onInitialClientRender = () => {
  setTimeout(function () {
    const elementById = document.getElementById("___loader");

    if (elementById && elementById.style) {
      elementById.style.display = "none";
    }
  }, 1000)
}
