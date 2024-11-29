const app = Vue.createApp({
    data() {
        return{
            firstName: "Hatef",
            lastName: "Sanati"
            
        }
    },
    methods: {
        fullName() {
            return this.firstName+ " " + this.lastName.toUpperCase();
        }
    }
}).mount('#app')

