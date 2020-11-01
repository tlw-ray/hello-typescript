class BirdWhisperer{
    chirping: string
    constructor(message: string){
        this.chirping = message;
    }
    chirp(){
        return 'Ah~ oh~ ' + this.chirping;
    }
}

let birdWisperer = new BirdWhisperer('coo-coo-coo...')
document.body.innerHTML = birdWisperer.chirp();