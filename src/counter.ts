export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number)=> {
    counter = count
    element.innerHTML = `count is ${counter}`
    if(counter===1){
console.log('counter is 1')
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
