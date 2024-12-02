const app = Vue.createApp({
  data() {
    return {
      firstName: "Hatef",
      middleName: "",
      lastName: "Sanati",
      url: "https://google.com",
      raw_html: '<a href="https://bing.com">Bing</a>',
      age: 22,
      selectedOptions: "",
      people: [
        { name: "hatef", age: 22 },
        { name: "haniye", age: 22 },
      ],
    };
  },
  methods: {
    fullName() {
      console.log("it's work");
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    changeLastName(msg, e) {
      console.log(msg);
      console.log(e);
      // console.log("it's work2")
      this.lastName = e.target.value;
    },
    addTomiddleName(e) {
      this.middleName = e.target.value;
    },
  },
  computed: {
    fullNameC() {
      console.log("it's work from computed");
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      console.log(newVal + oldVal);
    },
  },
}).mount("#app");
