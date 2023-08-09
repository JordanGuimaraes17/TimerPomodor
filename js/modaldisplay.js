import Music from './music.js'
//let clickCount = 0
const modalDisplay = {
  buttonTreeOn: document.querySelector('.tree-on'),
  buttonTreeOff: document.querySelector('.tree-off'),
  buttonRainOn: document.querySelector('.rain-on'),
  buttonRainOff: document.querySelector('.rain-off'),
  buttonHouseOn: document.querySelector('.house-on'),
  buttonHouseOff: document.querySelector('.house-off'),
  buttonFireOn: document.querySelector('.fire-on'),
  buttonFireOff: document.querySelector('.fire-off'),
  buttonSoundOn: document.querySelector('.sound-on'),
  buttonSoundOff: document.querySelector('.sound-off'),
  buttonSun: document.querySelector('.sun'),
  buttonMoon: document.querySelector('.moon'),
  buttonBody: document.querySelector('.body'),
  buttonTimer: document.querySelector('#controls'),
  buttonPause: document.querySelector('.pause'),
  clear() {
    modalDisplay.buttonSun.classList.add('hide')
    modalDisplay.buttonMoon.classList.remove('hide')
    modalDisplay.buttonBody.classList.add('dark')
    modalDisplay.buttonTimer.classList.add('dark')
    modalDisplay.buttonSoundOff.classList.add('dark')
  },
  dark() {
    modalDisplay.buttonSun.classList.remove('hide')
    modalDisplay.buttonMoon.classList.add('hide')
    modalDisplay.buttonBody.classList.remove('dark')
    modalDisplay.buttonTimer.classList.remove('dark')
    modalDisplay.buttonSoundOff.classList.remove('dark')
  },

  /*  secondClick() {
    clickCount++

    if (clickCount === 2) {
      modalDisplay.reset()
      clickCount = 0
    }
  },*/

  treeOff() {
    modalDisplay.reset()
    Music.buttonPressFlorest.play()
    Music.bgAudio.pause()
    modalDisplay.buttonTreeOn.classList.toggle('hide')
    modalDisplay.buttonTreeOff.classList.toggle('hide')
  },
  treeOn() {
    Music.buttonPressFlorest.pause()

    modalDisplay.buttonTreeOn.classList.add('hide')
    modalDisplay.buttonTreeOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  rainOff() {
    modalDisplay.reset()
    Music.buttonPressRain.play()
    Music.bgAudio.pause()
    modalDisplay.buttonRainOn.classList.remove('hide')
    modalDisplay.buttonRainOff.classList.add('hide')
  },
  rainOn() {
    Music.buttonPressRain.pause()
    modalDisplay.buttonRainOn.classList.add('hide')
    modalDisplay.buttonRainOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  houseOff() {
    modalDisplay.reset()
    Music.buttonPressHouse.play()
    Music.bgAudio.pause()
    modalDisplay.buttonHouseOn.classList.remove('hide')
    modalDisplay.buttonHouseOff.classList.add('hide')
  },
  houseOn() {
    Music.buttonPressHouse.pause()
    modalDisplay.buttonHouseOn.classList.add('hide')
    modalDisplay.buttonHouseOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  fireOff() {
    modalDisplay.reset()
    Music.buttonPressFire.play()
    Music.bgAudio.pause()
    modalDisplay.buttonFireOn.classList.remove('hide')
    modalDisplay.buttonFireOff.classList.add('hide')
  },
  fireOn() {
    Music.buttonPressFire.pause()
    modalDisplay.buttonFireOn.classList.add('hide')
    modalDisplay.buttonFireOff.classList.remove('hide')
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')
  },
  soundOnButtonAction() {
    modalDisplay.buttonSoundOn.classList.add('hide')
    modalDisplay.buttonSoundOff.classList.remove('hide')

    Music.bgAudio.pause()
  },
  soundOffButtonAction() {
    modalDisplay.reset()
    modalDisplay.buttonSoundOn.classList.remove('hide')
    modalDisplay.buttonSoundOff.classList.add('hide')

    Music.bgAudio.play()
  },
  reset() {
    modalDisplay.treeOn()
    modalDisplay.rainOn()
    modalDisplay.houseOn()
    modalDisplay.fireOn()
  }
}
export default modalDisplay
