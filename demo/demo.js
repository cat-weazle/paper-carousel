document.addEventListener('DOMContentLoaded', (event) => {
    console.log(event);
    const repeater = document.querySelector('dom-repeat');
    repeater.items = [
        {text: '#1', color: 'indigo'}, 
        {text: '#2', color: 'pink'}, 
        {text: '#3', color: 'teal'},
        {text: '#4', color: 'amber'},
        {text: '#5', color: 'blue'},
        {text: '#6', color: 'green'}
    ];
    const domRepeatPaperCarouselDemo = document.getElementById('domRepeatPaperCarouselDemo');
    setTimeout(() => {
        domRepeatPaperCarouselDemo.refresh();
    }, 1000)
});
