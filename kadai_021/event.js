const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    setTimeout(() => {
    const element = document.getElementById('text');
    element.textContent ='ボタンをクリックしました';
    }, 2000)
});