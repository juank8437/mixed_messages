// Mixed Messages Creator
const message = {
    intro: ["Hola", "Buenos dias", "Buenas tardes", "Buenas noches"],
    middle: ["como estas?", "como le va?", "como le ha ido?", "como ha estado?"],
    end: ["que gusto verlo", "un placer encontralo nuevamente", "feliz de verlo", "contento de verlo"]
}
let generateMessage = (intro,middle,end) => console.log(intro+", "+middle+", "+end)

let intro = message.intro[Math.floor(Math.random()*message.intro.length)]
let middle = message.middle[Math.floor(Math.random()*message.middle.length)]
let end = message.end[Math.floor(Math.random()*message.end.length)]

generateMessage(intro,middle,end)