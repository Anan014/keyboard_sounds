class AudioController {
    constructor() {
        this.key_1_sound = new Audio('sounds/boom.wav');
        this.key_2_sound = new Audio('sounds/clap.wav');
        this.key_3_sound = new Audio('sounds/hihat.wav');
        this.key_4_sound = new Audio('sounds/kick.wav');
        this.key_5_sound = new Audio('sounds/openhat.wav');
        this.key_6_sound = new Audio('sounds/ride.wav');
        this.key_7_sound = new Audio('sounds/snare.wav');
        this.key_8_sound = new Audio('sounds/tink.wav');
        this.key_9_sound = new Audio('sounds/tom.wav');
    }
    key1_func() {
        this.key_1_sound.play();
    }
    key2_func() {
        this.key_2_sound.play();
    }
    key3_func() {
        this.key_3_sound.play();
    }
    key4_func() {
        this.key_4_sound.play();
    }
    key5_func() {
        this.key_5_sound.play();
    }
    key6_func() {
        this.key_6_sound.play();
    }
    key7_func() {
        this.key_7_sound.play();
    }
    key8_func() {
        this.key_8_sound.play();
    }
    key9_func() {
        this.key_9_sound.play();
    }
}

let audioController = new AudioController();

let key_1 = document.querySelector('.key_1'),
    key_2 = document.querySelector('.key_2'),
    key_3 = document.querySelector('.key_3'),
    key_4 = document.querySelector('.key_4'),
    key_5 = document.querySelector('.key_5'),
    key_6 = document.querySelector('.key_6'),
    key_7 = document.querySelector('.key_7'),
    key_8 = document.querySelector('.key_8'),
    key_9 = document.querySelector('.key_9');

console.log(key_1.value);

document.addEventListener('keydown', logkey);

const err = document.createElement('p');

function logkey(e) {
    switch (e.code) {
        case "KeyA":
            audioController.key1_func();
            err.innerHTML = '';
            break;
        case "KeyS":
            audioController.key2_func();
            err.innerHTML = '';
            break;
        case "KeyD":
            audioController.key3_func();
            err.innerHTML = '';
            break;
        case "KeyF":
            audioController.key4_func();
            err.innerHTML = '';
            break;
        case "KeyG":
            audioController.key5_func();
            err.innerHTML = '';
            break;
        case "KeyH":
            audioController.key6_func();
            err.innerHTML = '';
            break;
        case "KeyJ":
            audioController.key7_func();
            err.innerHTML = '';
            break;
        case "KeyK":
            audioController.key8_func();
            err.innerHTML = '';
            break;
        case "KeyL":
            audioController.key9_func();
            err.innerHTML = '';
            break;

        default:
            err.innerHTML = 'Key not available';
            document.body.appendChild(err);
            break;
    }
}

key_1.addEventListener('click', () => {
    audioController.key1_func();
})

key_2.addEventListener('click', () => {
    audioController.key2_func();
})

key_3.addEventListener('click', () => {
    audioController.key3_func();
})

key_4.addEventListener('click', () => {
    audioController.key4_func();
})

key_5.addEventListener('click', () => {
    audioController.key5_func();
})

key_6.addEventListener('click', () => {
    audioController.key6_func();
})

key_7.addEventListener('click', () => {
    audioController.key7_func();
})

key_8.addEventListener('click', () => {
    audioController.key8_func();
})

key_9.addEventListener('click', () => {
    audioController.key9_func();
})