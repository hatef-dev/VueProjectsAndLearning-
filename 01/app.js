const app = Vue.createApp({
    data() {
        return{
            firstName: "Hatef",
            lastName: "Sanati",
            url: "https://google.com",
            raw_html: '<a href="https://bing.com">Bing</a>'
            
        }
    },
    methods: {
        fullName() {
            return this.firstName+ " " + this.lastName.toUpperCase();
        }
    }
}).mount('#app')

