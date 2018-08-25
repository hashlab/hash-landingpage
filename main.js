
function lerp(v0, v1, t) {
  t = Math.min(1, t)
  t = Math.max(0, t)
  return (v0 * (1 - t)) + (v1 * t)
}

const wait = ms => () => new Promise(resolve => setTimeout(resolve, ms))

const scrollSteps = [
  0,
  850,
  1750,
  2650,
  3050,
]

const ilustras = {
  firstBig: document.querySelector('.animation-1'),
  secondBig: document.querySelector('.animation-2'),
  thirdBig: document.querySelector('.animation-3'),
  fourthBig: document.querySelector('.animation-4'),
}

const startY = -50

Promise.resolve()
.then(wait(120))
.then(() => {
  if (window.scrollY !== 0) { throw 0 }
  ilustras.fourthBig.style.transform = `translate(0, ${startY}px)`
})
.then(wait(120))
.then(() => {
  if (window.scrollY !== 0) { throw 0 }
  ilustras.thirdBig.style.transform = `translate(0, ${startY}px)`
})
.then(wait(120))
.then(() => {
  if (window.scrollY !== 0) { throw 0 }
  ilustras.secondBig.style.transform = `translate(0, ${startY}px)`
})
.then(wait(120))
.then(() => {
  if (window.scrollY !== 0) { throw 0 }
  ilustras.firstBig.style.transform = `translate(0, ${startY}px)`
})
.catch(() => {
  scrollTriggered()
})

window.onscroll = scrollTriggered

var snapTimer = null

function scrollTriggered () {
  const scroll = window.scrollY
  ilustras.fourthBig.style.transition = 'none'
  ilustras.thirdBig.style.transition = 'none'
  ilustras.secondBig.style.transition = 'none'
  ilustras.firstBig.style.transition = 'none'
  if (scroll === 0) {
    ilustras.fourthBig.style.transform = `translate(0, ${startY}px)`
    ilustras.thirdBig.style.transform = `translate(0, ${startY}px)`
    ilustras.secondBig.style.transform = `translate(0, ${startY}px)`
    ilustras.firstBig.style.transform = `translate(0, ${startY}px)`
    return
  }
  const t1 = (scroll - scrollSteps[0]) / (scrollSteps[1] - scrollSteps[0])
  const t2 = (scroll - scrollSteps[1]) / (scrollSteps[2] - scrollSteps[1])
  const t3 = (scroll - scrollSteps[2]) / (scrollSteps[3] - scrollSteps[2])
  const t4 = (scroll - scrollSteps[3]) / (scrollSteps[4] - scrollSteps[3])

  firstAnimation(t1, t2, t3, t4)
  secondAnimation(t1, t2, t3, t4)
  thirdAnimation(t1, t2, t3, t4)
  fourthAnimation(t1, t2, t3, t4)
}

function firstAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.firstBig.style.transform = `translate(0, ${
      lerp(startY, -1500, t1)
    }px)`
    return
  }

  ilustras.firstBig.style.transform = `translate(0, -1500px)`
}

function secondAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.secondBig.style.transform = `translate(0, ${
      lerp(startY, 250, t1 - 0.3 * (1 - t1) + 0.1 * (t1))
    }px)`
    return
  }
  ilustras.secondBig.style.transform = `translate(0, ${
    lerp(250, -1500, t2)
  }px)`
}

function thirdAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.thirdBig.style.transform = `translate(0, ${
      lerp(startY, 250, t1 - 0.2 * (1 - t1) + 0.15 * (t1))
    }px)`
    return
  }
  ilustras.thirdBig.style.transform = `translate(0, ${
    lerp(250, -1500, t3)
  }px)`
}

function fourthAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.fourthBig.style.transform = `translate(0, ${
      lerp(startY, 250, t1 - 0.1 * (1 - t1) + 0.2 * (t1))
    }px)`
    return
  }
  ilustras.fourthBig.style.transform = `translate(0, ${
    lerp(250, 40, t4)
  }px)`
}
if (window.scrollY !== 0) {
  scrollTriggered()
}












