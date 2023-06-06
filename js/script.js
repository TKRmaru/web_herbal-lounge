/* Lightbox Luminous */
new LuminousGallery(document.querySelectorAll(".grid-gallery"));
  
/* Fadeup Animation AOS */
// AOS.init();
AOS.init({
    duration: 900
});

// ハンバーガーメニュー
$(function(){
    $('#nav-toggle').click(function() {
        $('body').toggleClass('open');
    });
});

// ハンバーガーメニュー&TOPページアイコン スクロール
$(function switchByWidth(){
    $(window).scroll(function(){
        const scrollVal = $(this).scrollTop();
        console.log(scrollVal);
        if(scrollVal > 400){
            $('body').addClass("on");
        }
        else{
            $('body').removeClass("on");
        }
    });
});

//ローディング
const loadingAreaGrey = document.querySelector('#loading');
const loadingSpinner = document.querySelector('.spinner');
window.addEventListener('load', () => {
    loadingAreaGrey.animate(
        {
            opacity:[1,0],
            visibility:'hidden',
        },
        {
            duration: 2000,
            delay:1100,
            easing:'ease',
            fill:'forwards',
        }
    );
    loadingSpinner.animate(
        {
            opacity:[1, 0],
            offset: [0.8, 1],
            visibility:'hidden',
        },
        {
            duration: 1300,
            easing:'ease',
            fill:'forwards',
        }
    )
});

//ボタン（利用規約）
const isAgreed = document.querySelector('#check input');
const btn = document.querySelector('#btn-submit');
isAgreed.addEventListener('change',()=>{
    btn.disabled =! isAgreed.checked;
    if(isAgreed.checked){
        btn.style.color = `#fff`;
        btn.style.backgroundColor = `var(--yellow)`;
        btn.style.transform = `translateY(2px)`;
        btn.style.boxShadow = `none`;
    }else{
        btn.style.color = `var(--text)`;
        btn.style.backgroundColor = `rgba(255, 255, 255, .7)`;
        btn.style.transform = `translateY(0px)`;
        btn.style.boxShadow = `2px 2px 5px rgba(48, 56, 56, 0.3)`;
    }
});
const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const modal = document.querySelector('#modal');
const mask = document.querySelector('#mask');
const showKeyframes = {
    opacity:[0,1],
    visibility:'visible',
};
const hideKeyframes = {
    opacity:[1,0],
    visibility:'hidden',
};
const options = {
    duration: 1000,
    easing:'ease',
    fill:'forwards',
}
open.addEventListener('click',()=>{
    modal.animate(showKeyframes, options)
    mask.animate(showKeyframes, options)
});
close.addEventListener('click',()=>{
    modal.animate(hideKeyframes, options)
    mask.animate(hideKeyframes, options)
});
mask.addEventListener('click',()=>{
    close.click();
});


