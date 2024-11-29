const app = Vue.createApp({
    data() {
        return{
            firstName: "Hatef",
            lastName: "Sanati"
            
        }
    }
}).mount('#app')

setTimeout(() => {
    app.firstName = "Bob";
    //proxies 
}, 2000)