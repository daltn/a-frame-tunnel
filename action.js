
let scene = document.body.querySelector('a-scene')

console.log('here')

for( i=-5; i > -16; i-=2 ) {
    console.log(i)

    scene.insertAdjacentHTML( 'beforeend',
    `
        <a-torus
            color="#43A367"
            position="0 1.6 ${i}"
            arc="360"
            radius="5"
            radius-tubular="0.5"
            src="#square"
            >
            </a-torus>
    `
    )
}

