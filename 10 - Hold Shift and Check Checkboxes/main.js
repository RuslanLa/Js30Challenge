
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const onCheck = (function () {
    let lastChecked;
    return ((e) => {
        if (!e.shiftKey || !e.target.checked) {
            lastChecked = null;
            return;
        }
        if (!lastChecked) {
            lastChecked = e.target;
            return;
        }
        let isBetween = false;
        checkBoxes.forEach((checkbox) => {
            if (e.target == checkbox || lastChecked == checkbox) {
                isBetween = !isBetween;
            }
            if (!isBetween) {
                return;
            }
            checkbox.checked = true;
        });
        lastChecked = null;
    });
})();
checkBoxes.forEach((el) => {
    el.addEventListener('click', onCheck);
});