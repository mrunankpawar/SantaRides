score = 0;
cross = true;

audio = new Audio('christmas.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e){
    console.log("Key Code is: ", e.key)
    if(e.key=="ArrowUp"){
        santa = document.querySelector('.santa');
        santa.classList.add('animateSanta');
        setTimeout(() => {
            santa.classList.remove('animateSanta')
        }, 700);
    }   

    if(e.key=="ArrowRight"){
        santa = document.querySelector('.santa');
        santaX = parseInt(window.getComputedStyle(santa, null).getPropertyValue('left'));
        santa.style.left = santaX + 112 + "px";
    } 

    if(e.key=="ArrowLeft"){
        santa = document.querySelector('.santa');
        santaX = parseInt(window.getComputedStyle(santa, null).getPropertyValue('left'));
        santa.style.left = santaX - 112 + "px";
    } 
}

setInterval(() => {
    santa = document.querySelector('.santa');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(santa, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(santa, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX, offsetY)
    if(offsetX<93 && offsetY<52){
        gameOver.innerHTML = "GAME OVER - Reload to start over";
        obstacle.classList.remove('obstacleAni');
        setTimeout(() => {
            audio.pause();
        }, 1000);
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration =newDur + 's';
        }, 500);
        
    }

}, 100);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}