const app = Vue.createApp({
    data() {
        return{
            firstName: "Hatef",
            lastName: "Sanati",
            url: "https://google.com"
            
        }
    },
    methods: {
        fullName() {
            return this.firstName+ " " + this.lastName.toUpperCase();
        }
    }
}).mount('#app')

