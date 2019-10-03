var app = new Vue({
    el: '#app',
    data: {
        headerImageStyle: {
            'background-image': 'url(sample/header.jpg)'
        },
        title: sample.title,
        address: sample.address,
        about: sample.about,
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false
    },
    methods: {
        escapeKeyListener: function (evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            //Modal opens
            if (this.modalOpen) {
                document.body.classList.add(className);
            }
            //Modal closes
            else {
                document.body.classList.remove(className);
            }
        }
    },
    created: function () {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});