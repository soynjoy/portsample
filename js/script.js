let curPos = 0; // 처음에는 0번 인덱스부터 보고 있다!

function init(){
    new WOW().init();
    $('.item').hide(); // active 포함 모든 item 을 감춘 다음
    $('.active').show(); // active 만 다시 보이게 하기
}

function onClickPrev(){
    if(curPos > 0){
        document.querySelectorAll('.item')[curPos].classList.toggle('active')
        $('.item').hide()
        curPos -= 1;
        document.querySelectorAll('.item')[curPos].classList.toggle('active')
        $('.active').show()
    }
}

function onClickNext(){
    if(curPos < 3){
        document.querySelectorAll('.item')[curPos].classList.toggle('active')
        $('.item').hide()
        curPos += 1;
        document.querySelectorAll('.item')[curPos].classList.toggle('active')
        $('.active').show()
    }
}

$(document).ready(function(){
    init()
    $('.prev').click(onClickPrev)
    $('.next').click(onClickNext)
})