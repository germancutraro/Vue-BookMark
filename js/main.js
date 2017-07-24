const app = new Vue({
    el: '#app',
    data: {
      page_name: null,
      page_url: null,
      pages: [{name: 'GitHub', url: 'https://github.com', date: '19:00'}, {name: 'Spotify', url: 'https://www.spotify.com', date: '19:03'}]
    },
    methods: {
      addPage() {
        let date = new Date(),
            hour = date.getHours(),
            minutes = date.getMinutes(),
            finalDate =  hour + ":" + minutes;
        if (this.page_name != null && this.page_url != null) { //If not null create the page
            this.pages.push({name: this.page_name, url: this.page_url, 'date': finalDate}); //attached
            //Clean inputs
            this.page_name = null;
            this.page_url = null;
        }
      },
    }
});
