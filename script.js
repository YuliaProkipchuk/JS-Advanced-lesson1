const People = (function () {
    let user = [];
    function init() {
        bindEvent();
    }
    function cacheDom() {
        const form = document.forms.addPeople;
        const inputName = form.inputName;
        const addBtn = form.add;
        const box = document.querySelector('.nameList');
        const del = document.querySelector('.del');
        return {
            form: form,
            inputName: inputName,
            addBtn: addBtn,
            del: del,
            box: box,
        }
    }
    function bindEvent() {
        cacheDom().addBtn.addEventListener('click', addPersonName);
        cacheDom().box.addEventListener('click', delPersonName);
    }
    function render(arr) {
        cacheDom().box.innerHTML = '';
        for (us of arr) {
            cacheDom().box.innerHTML += `<p class="name">${us} <span class="del">x</span></p>`;
        }
        cacheDom().form.reset();
    }
    function addPersonName() {
        event.preventDefault();
        user.push(cacheDom().inputName.value);
        render(user);
    }
    function delPersonName() {
        console.log(event.target.parentElement.innerHTML);
        console.log(event.target.classList);
        let i;
        if (event.target.classList.contains('del')) {
            for (i = 0; i < user.length; i++) {
                if (event.target.parentElement.innerHTML.includes(user[i])) {
                    break;
                }
            }
            user.splice(i, 1);
            render(user);
        }

    }
    return {
        init: init
    };
})();
let person = People.init();
