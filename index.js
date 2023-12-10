import player from "./player.js"
import inscricao from "./inscricao.js"

window.onload = () => {
    player.elements()
    inscricao.elements()
    player.playPauseVideo()
}