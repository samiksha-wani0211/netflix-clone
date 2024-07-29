document.addEventListener('DOMContentLoaded', function() {
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            // Collapse all other items
            for (let j = 0; j < items.length; j++) {
                if (i !== j) {
                    const otherPara = items[j].querySelector('.para1');
                    otherPara.style.maxHeight = null;
                    items[j].classList.remove('active');
                }
            }
            // Toggle the clicked item
            const para = this.querySelector('.para1');
            if (this.classList.contains('active')) {
                para.style.maxHeight = null;
                this.classList.remove('active');
            }else {
                para.style.maxHeight = para.scrollHeight + "px";
                this.classList.add('active');
            }
        });
    }
});

