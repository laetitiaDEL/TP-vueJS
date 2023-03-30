Vue.createApp({
data(){
    return {
        nom : "Mario",
        age : 45,
        image : 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
    };
},

methods: {
    number(){
        return Math.floor(Math.random()*100);
    },

    plusDix(){
        return "Age + 10 = "+(this.age+10)+" ans";
    }
},

}).mount('#tp');
