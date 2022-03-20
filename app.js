new Vue({
    el: '#app',
    data:{
        title:'you used this title',
        link: 'http://google.com',
        finishedLink:'<a href="https://google.com" target="_blank">Google</a>',
        counter: 0,
        x:0,
        y:0, 
    },
    methods:{
        changeTitle: function(event){
            this.title = event.target.value;
        },
        sayHello: function(){
            return this.title;
        },
        testFunc: () => {
            return console.log("test");
        },
        increase: function() {
            this.counter++;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        /* dummy: function(event){
            event.stopPropagation();
        } */
        
    }
});