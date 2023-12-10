import data from "./data.js"
import { path, secondsToMinutes } from "./utils.js"
import elements from "./elements.js"

export default {
    videoList: data,
    videoPlaying: 0,
    currentVideo: {},
    elements() {
        elements.get.call(this)
        this.update()
    },
    next() {
        this.videoPlaying++

        if (this.videoPlaying == this.videoList.length) {
            this.restart()
        }
        this.update()
        this.playVideo()
    },
    playVideo() {
        this.play.style.display = 'none'
        this.pause.style.display = 'block'
        this.video.play()
    },
    pauseVideo() {
        this.play.style.display = 'block'
        this.pause.style.display = 'none'
        this.video.pause()
    },
    isMute() {
        this.volBar.value == 0 ?
            this.volButton.classList.add('fa-volume-xmark') :
            this.volButton.classList.remove('fa-volume-xmark')
    },
    setVolume(value) {
        this.video.volume = value / 100
    },
    setSeek(value) {
        this.video.currentTime = value
    },
    timeUpdate() {
        this.duration.innerText = secondsToMinutes(this.video.currentTime)
        this.seekbar.value = this.video.currentTime
    },
    touchVideo() {
        this.controls.style.opacity = 1
    },
    update() {
        this.currentVideo = this.videoList[this.videoPlaying]
        if (this.videoPlaying == this.videoList.length - 1) {
            this.imagePreview.style.background = `url('${path(this.videoList[0].videoPreview)}') center / cover no-repeat`
            this.titlePreview.textContent = this.videoList[0].titlePreview
        } else {
            this.imagePreview.style.background = `url('${path(this.videoList[this.videoPlaying + 1].videoPreview)}') center / cover no-repeat`
            this.titlePreview.textContent = this.videoList[this.videoPlaying + 1].titlePreview
        }
        this.video.src = path(this.currentVideo.video)
        this.title.textContent = this.currentVideo.title
        this.video.onloadeddata = () => {
            elements.actionsPlayer.call(this)
        }
    },
    restart() {
        this.videoPlaying = 0
        this.update()
    }
}