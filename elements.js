import { secondsToMinutes } from "./utils.js"

export default {
    get() {
        this.video = document.querySelector('.video')
        this.title = document.querySelector('.title')
        this.nextButton = document.querySelector('.fa-forward')
        this.play = document.querySelector('.fa-play')
        this.pause = document.querySelector('.fa-pause')
        this.imagePreview = document.querySelector('.imageVideo-preview')
        this.titlePreview = document.querySelector('.title-preview')
        this.volButton = document.querySelector('.fa-volume-high')
        this.volBar = document.querySelector('#vol-bar')
        this.seekbar = document.querySelector('#seekbar')
        this.duration = document.querySelector('.duration')
        this.totalDuration = document.querySelector('.total-duration')
        this.control = document.querySelector('.controls')
        this.inscreverButton = document.querySelector('button.inscrever')
        this.boxInscrever = document.querySelector('.inscrito-area')
    },
    actionsPlayer() {
        this.video.ontouch = () => this.touchVideo()
        this.video.onended = () => this.next()
        this.video.ontimeupdate = () => this.timeUpdate()
        this.nextButton.onclick = () => this.next()
        this.play.onclick = () => this.playVideo()
        this.pause.onclick = () => this.pauseVideo()
        this.volBar.oninput = () => {
            this.setVolume(this.volBar.value)
            this.isMute()
        }
        this.volBar.onchange = () => {
            this.setVolume(this.volBar.value)
            this.isMute()
        }
        window.onclick = () => this.spacePlayPause()
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value)
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value)
        this.seekbar.max = this.video.duration
        this.totalDuration.innerText = secondsToMinutes(this.video.duration)
    },
    actionsButtons() {
        this.inscreverButton.onclick = () => this.inscrever()
    }
}