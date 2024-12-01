const app = Vue.createApp({
    data() {
        return{
            firstName: "Hatef",
            middleName: '',
            lastName: "Sanati",
            url: "https://google.com",
            raw_html: '<a href="https://bing.com">Bing</a>',
            age: 22,
            
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        changeLastName(msg,e){
            console.log(msg)
            console.log(e)
            this.lastName = e.target.value;
        },
        addTomiddleName(e){
            this.middleName = e.target.value
        } 
    }
}).mount('#app')

