function debounce(fn,delay) {
  let timer
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this)
    }, delay);
  }
}


export default debounce