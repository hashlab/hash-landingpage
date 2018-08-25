window.onload = () => {

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
.then(wait(500))
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

Promise.resolve()
.then(wait(100))
.then(() => { document.querySelector('.bg1-1').style.opacity = 1 })
.then(() => { document.querySelector('.bg1-1').style.transform = 'translate(20px, 0)' })
.then(wait(100))
.then(() => { document.querySelector('.bg1-2').style.opacity = 1 })
.then(() => { document.querySelector('.bg1-2').style.transform = 'translate(20px, 0)' })
.then(wait(100))
.then(() => { document.querySelector('.bg1-3').style.opacity = 1 })
.then(() => { document.querySelector('.bg1-3').style.transform = 'translate(20px, 0)' })

window.onscroll = scrollTriggered

var snapTimer = null
var threeTextsShown = false

function threeTextsTest (scroll) {
  if (scroll > 700) {
    threeTextsShown = true
    Promise.resolve()
      .then(wait(150))
      .then(() => { document.querySelector('.box1-3').style.opacity = 1 })
      .then(() => { document.querySelector('.box1-3').style.transform = 'translate(0, 20px)' })
      .then(wait(150))
      .then(() => { document.querySelector('.box2-3').style.opacity = 1 })
      .then(() => { document.querySelector('.box2-3').style.transform = 'translate(0, 20px)' })
      .then(wait(150))
      .then(() => { document.querySelector('.box3-3').style.opacity = 1 })
      .then(() => { document.querySelector('.box3-3').style.transform = 'translate(0, 20px)' })

    Promise.resolve()
      .then(wait(100))
      .then(() => { document.querySelector('.bg2-1').style.opacity = 1 })
      .then(() => { document.querySelector('.bg2-1').style.transform = 'translate(20px, 0)' })
      .then(wait(100))
      .then(() => { document.querySelector('.bg2-2').style.opacity = 1 })
      .then(() => { document.querySelector('.bg2-2').style.transform = 'translate(20px, 0)' })
      .then(wait(100))
      .then(() => { document.querySelector('.bg2-3').style.opacity = 1 })
      .then(() => { document.querySelector('.bg2-3').style.transform = 'translate(20px, 0)' })
  }
}

function scrollTriggered () {
  const scroll = window.scrollY

  if (!threeTextsShown) {
    threeTextsTest(scroll)
  }

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
  if (t2 < 1) {
    ilustras.thirdBig.style.transform = `translate(0, ${
      lerp(250, 150, t2 - 0.2 * (1 - t2) + 0.15 * (t2))
    }px)`
    return
  }
  ilustras.thirdBig.style.transform = `translate(0, ${
    lerp(150, -1500, t3)
  }px)`
}

function fourthAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.fourthBig.style.transform = `translate(0, ${
      lerp(startY, 250, t1 - 0.1 * (1 - t1) + 0.2 * (t1))
    }px)`
    return
  }
  if (t2 < 1) {
    ilustras.fourthBig.style.transform = `translate(0, ${
      lerp(250, 150, t2 - 0.3 * (1 - t2) + 0.1 * (t2))
    }px)`
    return
  }
  ilustras.fourthBig.style.transform = `translate(0, ${
    lerp(150, 40, t3)
  }px)`
}
if (window.scrollY !== 0) {
  scrollTriggered()
}

var scrollingTimer;
window.addEventListener('scroll', () => {
	window.clearTimeout( scrollingTimer )
	scrollingTimer = setTimeout(() => {
    const snap = scrollSteps.find(s =>
      s - 150 < scrollY &&
      s + 150 > scrollY &&
      s < 2650
    )
    if (snap) {
      window.scroll({ top: snap, behavior: 'smooth'})
    }
	}, 66)
}, false)

const frame = document.createElement('iframe')
console.table(frame)
frame.src = 'http://app.pipefy.com/public/form/Gp5ojRgJ?embedded=true'
frame.frameBorder = 0
frame.classList = 'pipefy-form' 
document.querySelector('.bg-squares-4').appendChild(frame)

}