window.beforeunload = () => {
  window.scrollTo(0, 0)
}

function enableSubmit(token) {
  document.getElementById('submit').disabled = false
}

window.onload = () => {
document.getElementById('submit').disabled = true
  
function lerp(v0, v1, t) {
  t = Math.min(1, t)
  t = Math.max(0, t)
  return (v0 * (1 - t)) + (v1 * t)
}

const wait = ms => () => new Promise(resolve => setTimeout(resolve, ms))

var scrollSteps = [
  0,
  850,
  1750,
  2650,
  3000,
]
const initialScrollSteps = [
  0,
  850,
  1750,
  2650,
  3000,
]

const ilustras = {
  firstBig: document.querySelector('.animation-1'),
  secondBig: document.querySelector('.animation-2'),
  thirdBig: document.querySelector('.animation-3'),
  fourthBig: document.querySelector('.animation-4'),
}

const towers = [
  document.querySelector('.t1'),
  document.querySelector('.t2'),
  document.querySelector('.t3'),
  document.querySelector('.t4'),
  document.querySelector('.t5'),
  document.querySelector('.t6'),
]

// const towersInitialXY = towers.map(tower => {
//   return {
//     x: parseInt(
//       window
//         .getComputedStyle(tower)
//         .getPropertyValue('transform')
//         .split(',')[4]
//     ),
//     y: parseInt(
//       window
//         .getComputedStyle(tower)
//         .getPropertyValue('transform')
//         .split(',')[5]
//     ),
//   }
// })

const towersInitialXY = [
  { x: -197, y: -74, },
  { x: -115, y: -115, },
  { x: -31, y: -158, },
  { x: 4, y: 55, },
  { x: 90, y: 2, },
  { x: 171, y: -46, },
]
const towerMiddleXY = [
  { x: -220, y: -149, },
  { x: -222, y: -324, },
  { x: 0, y: -318, },
  { x: 0, y: -137, },
  { x: 220, y: -137, },
  { x: 220, y: -320, },
]

const startY = 55
const secondY = 290

Promise.resolve()
.then(wait(500))
.then(() => {
  if (window.scrollY !== 0 || window.innerWidth < 1070) { throw 0 }
  ilustras.fourthBig.style.transform = `translate(0, ${startY}px)`
})
.then(wait(120))
.then(() => {
  if (window.scrollY !== 0 || window.innerWidth < 1070) { throw 0 }
  ilustras.thirdBig.style.transform = `translate(0, ${startY}px)`
})
.then(wait(120))
.then(() => {
  if (window.scrollY !== 0 || window.innerWidth < 1070) { throw 0 }
  ilustras.secondBig.style.transform = `translate(0, ${startY}px)`
})
.then(wait(120))
.then(() => {
  if (window.scrollY !== 0 || window.innerWidth < 1070) { throw 0 }
  ilustras.firstBig.style.transform = `translate(0, ${startY}px)`
})
.catch(() => {
  scrollTriggered()
})

var thirdSquareShown = false
var secondSquareShown = false
var firstSquareShown = true
window.onscroll = scrollTriggered

var snapTimer = null

function firstSquareTest (scroll, opacity, translateY) {
  if (window.innerWidth < 1070) {
    return
  }
  firstSquareShown = !!opacity
  Promise.resolve()
    .then(wait(100))
    .then(() => { document.querySelector('.bg1-1').style.opacity = opacity })
    .then(() => { document.querySelector('.bg1-1').style.transform = `translate(${translateY}px, 0)` })
    .then(wait(100))
    .then(() => { document.querySelector('.bg1-2').style.opacity = opacity })
    .then(() => { document.querySelector('.bg1-2').style.transform = `translate(${translateY}px, 0)` })
    .then(wait(100))
    .then(() => { document.querySelector('.bg1-3').style.opacity = opacity })
    .then(() => { document.querySelector('.bg1-3').style.transform = `translate(${translateY}px, 0)` })
}
firstSquareTest(0, 1, 20)

function secondSquareTest (scroll, opacity, translateY) {
  secondSquareShown = !!opacity
  Promise.resolve()
    .then(wait(100))
    .then(() => { document.querySelector('.bg2-1').style.opacity = 1 })
    .then(() => { document.querySelector('.bg2-1').style.transform = `translate(20px, 0)` })
    .then(wait(100))
    .then(() => { document.querySelector('.bg2-2').style.opacity = 1 })
    .then(() => { document.querySelector('.bg2-2').style.transform = `translate(20px, 0)` })
    .then(wait(100))
    .then(() => { document.querySelector('.bg2-3').style.opacity = 1 })
    .then(() => { document.querySelector('.bg2-3').style.transform = `translate(20px, 0)` })
}

function secondSquareTestTexts (scroll, opacity, translateY) {
  Promise.resolve()
    .then(wait(150 * opacity))
    .then(() => { document.querySelector('.box1-3').style.opacity = opacity })
    .then(() => { document.querySelector('.box1-3').style.transform = `translate(0, ${translateY}px)` })
    .then(wait(150 * opacity))
    .then(() => { document.querySelector('.box2-3').style.opacity = opacity })
    .then(() => { document.querySelector('.box2-3').style.transform = `translate(0, ${translateY}px)` })
    .then(wait(150 * opacity))
    .then(() => { document.querySelector('.box3-3').style.opacity = opacity })
    .then(() => { document.querySelector('.box3-3').style.transform = `translate(0, ${translateY}px)` })
}

function thirdSquareTestTexts (scroll, opacity, translateY) {
  thirdSquareShown = !!opacity
  Promise.resolve()
    .then(wait(75))
    .then(() => { document.querySelector('.box1-6').style.opacity = opacity })
    .then(() => { document.querySelector('.box1-6').style.transform = `translate(0, ${opacity * 10}px)` })
    .then(wait(75))
    .then(() => { document.querySelector('.box2-6').style.opacity = opacity })
    .then(() => { document.querySelector('.box2-6').style.transform = `translate(0, ${opacity * 10}px)` })
    .then(wait(75))
    .then(() => { document.querySelector('.box3-6').style.opacity = opacity })
    .then(() => { document.querySelector('.box3-6').style.transform = `translate(0, ${opacity * 10}px)` })
    .then(wait(75))
    .then(() => { document.querySelector('.box4-6').style.opacity = opacity })
    .then(() => { document.querySelector('.box4-6').style.transform = `translate(0, ${opacity * 10}px)` })
    .then(wait(75))
    .then(() => { document.querySelector('.box5-6').style.opacity = opacity })
    .then(() => { document.querySelector('.box5-6').style.transform = `translate(0, ${opacity * 10}px)` })
    .then(wait(75))
    .then(() => { document.querySelector('.box6-6').style.opacity = opacity })
    .then(() => { document.querySelector('.box6-6').style.transform = `translate(0, ${opacity * 10}px)` })

}

function thirdSquareTest (scroll, opacity, translateY) {
  Promise.resolve()
    .then(wait(100))
    .then(() => { document.querySelector('.bg3-1').style.opacity = 1 })
    .then(() => { document.querySelector('.bg3-1').style.transform = `translate(20px, 0)` })
    .then(wait(100))
    .then(() => { document.querySelector('.bg3-2').style.opacity = 1 })
    .then(() => { document.querySelector('.bg3-2').style.transform = `translate(20px, 0)` })
}

function scrollTriggered () {
  if (window.innerWidth < 1070) { return }
  const scroll = window.scrollY

  firstSquareTest(scroll, 1, 20)

  if (
    scroll > scrollSteps[1] - 500 &&
    scroll < scrollSteps[1] + 500
  ) {
    if (!secondSquareShown) {
      secondSquareTest(scroll, 1, 20)
    }
  } else {
    if (secondSquareShown) {
      secondSquareTest(scroll, 0, 0)
    }
  }
  if (
    scroll > scrollSteps[2] - 500 &&
    scroll < scrollSteps[2] + 500
  ) {
    if (!thirdSquareShown) {
      thirdSquareTest(scroll, 1, 20)
    }
  } else {
    if (thirdSquareShown) {
      thirdSquareTest(scroll, 0, 0)
    }
  }
  if (
    scroll > scrollSteps[2] - 85 &&
    scroll < scrollSteps[2] + 85
  ) {
    if (!thirdSquareShown) {
      thirdSquareTestTexts(scroll, 1, 20)
    }
  } else {
    if (thirdSquareShown) {
      thirdSquareTestTexts(scroll, 0, 0)
    }
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
  const t3 = (scroll - scrollSteps[2]) / (scrollSteps[4] - scrollSteps[2])
  const t4 = (scroll - scrollSteps[3]) / (scrollSteps[4] - scrollSteps[3])

  document.querySelector('.home').className =
    document.querySelector('.home').className
      .split(' ').filter(className => className !== 'blue-color-only').join(' ')
  document.querySelector('.about').className =
    document.querySelector('.about').className
      .split(' ').filter(className => className !== 'blue-color-only').join(' ')
  document.querySelector('.specs').className =
    document.querySelector('.specs').className
      .split(' ').filter(className => className !== 'blue-color-only').join(' ')
  document.querySelector('.contact').className =
    document.querySelector('.contact').className
      .split(' ').filter(className => className !== 'blue-color-only').join(' ')
  if (t4 >= 0) {
    document.querySelector('.contact').className += ' blue-color-only'
  }
  else if (t3 >= 0) {
    document.querySelector('.specs').className += ' blue-color-only'
  }
  else if (t2 >= 0) {
    document.querySelector('.about').className += ' blue-color-only'
  }
  else if (t1 >= 0) {
    document.querySelector('.home').className += ' blue-color-only'
  }

  firstAnimation(t1, t2, t3, t4)
  secondAnimation(t1, t2, t3, t4)
  thirdAnimation(t1, t2, t3, t4)
  fourthAnimation(t1, t2, t3, t4)
  animateTowers(t1, t2, t3, t4)
}

function firstAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.firstBig.style.transform = `translate(0, ${
      lerp(startY, -1000, t1)
    }px)`
    return
  }

  ilustras.firstBig.style.transform = `translate(0, -1500px)`
}

function secondAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.secondBig.style.transform = `translate(0, ${
      lerp(startY, secondY, t1 - 0.3 * (1 - t1) + 0.1 * (t1))
    }px)`
    return
  }
  ilustras.secondBig.style.transform = `translate(0, ${
    lerp(secondY, -1500, t2)
  }px)`
}

function animateTowers (t1, t2, t3, t4) {
  towers.forEach((tower, index) => {
    const { x, y } = towersInitialXY[index]
    const { x: x2, y: y2 } = towerMiddleXY[index]
    if (t1 <= 1) {
      tower.style.transform = `translate(${x}px, ${
        lerp(y + 10, 250 + y, t1 - 0.2 * (1 - t1) + 0.15 * (t1))
      }px)`
      return
    }
    if (t2 <= 1) {
      tower.style.transform = `translate(${
        lerp(x, x2, t2 - ((1-t2) * 0.5))
      }px, ${
        lerp(250 + y, y2, t2 - ((1-t2) * 0.13))
      }px)`
      return
    }
    tower.style.transform = `translate(${x2}px, ${
        lerp(y2, -1500, t3)
    }px)`
  })
}

function thirdAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.thirdBig.style.transform = `translate(0, ${
      lerp(startY, secondY, t1 - 0.2 * (1 - t1) + 0.15 * (t1))
    }px)`
    return
  }
  if (t2 < 1) {
    ilustras.thirdBig.style.transform = `translate(0, ${
      lerp(secondY, 250, t2 - 0.2 * (1 - t2) + 0.5 * (t2))
    }px)`
    return
  }
  ilustras.thirdBig.style.transform = `translate(0, ${
    lerp(250, -1000, t3)
  }px)`
}

function fourthAnimation (t1, t2, t3, t4) {
  if (t1 < 1) {
    ilustras.fourthBig.style.transform = `translate(0, ${
      lerp(startY, secondY, t1 - 0.1 * (1 - t1) + 0.2 * (t1))
    }px)`
    return
  }
  if (t2 < 1) {
    ilustras.fourthBig.style.transform = `translate(0, ${
      lerp(secondY, 250, t2 - 0.3 * (1 - t2) + 0.05 * (t2))
    }px)`
    return
  }
  ilustras.fourthBig.style.transform = `translate(0, ${
    lerp(250, -200, t3)
  }px)`
}

if (window.scrollY !== 0) {
  scrollTriggered()
}

var scrollingTimer;
window.addEventListener('scroll', () => {
  if (window.innerWidth < 1070) {
    return
  }
  const scroll = window.scrollY
	window.clearTimeout( scrollingTimer )
	scrollingTimer = setTimeout(() => {
    const snap = scrollSteps.concat().reverse().find(s =>
      scroll > 10 &&
      s - 250 < scroll &&
      s + 250 > scroll &&
      s <= 2650 * parseFloat(document.body.style.zoom) &&
      scroll <= 2650 * parseFloat(document.body.style.zoom)
    )
    if (snap) {
      window.scroll({ top: snap, behavior: 'smooth'})
    }
	}, 66)
}, false)

// const frame = document.createElement('iframe')
// frame.src = 'https://app.pipefy.com/public/form/Gp5ojRgJ?embedded=true'
// frame.frameBorder = 0
// frame.classList = 'pipefy-form' 
// document.querySelector('.bg-squares-4 .pipe').appendChild(frame)


const checkSize = e => {
  if (window.innerWidth < 1070) {
    document.body.style.zoom = 1
    scrollSteps = initialScrollSteps
    return
  }
  window.innerWidth
  if (window.innerWidth < 1450) {
    document.body.style.zoom = 0.8
    scrollSteps = initialScrollSteps.map(s => s * parseFloat(document.body.style.zoom))
    scrollTriggered()
    return
  }
  document.body.style.zoom = 1
  scrollSteps = initialScrollSteps
  scrollTriggered()
}

window.onresize = checkSize
checkSize()

setInterval(() => {
  if (
    scrollY > scrollSteps[1] - 70 &&
    scrollY < scrollSteps[1] + 70
  ) {
    secondSquareTestTexts(scrollY, 1, 20)
  } else {
    secondSquareTestTexts(scrollY, 0, 0)
  }
}, 200)

}