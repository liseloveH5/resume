requirejs.config({
    baseUrl:"./app",
    paths:{
        jquery:'http://cdn.bootcss.com/jquery/2.2.0/jquery.min',
        tether:'http://cdn.bootcss.com/tether/1.1.1/js/tether.min',
        bootstrap:'http://cdn.bootcss.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min',
        spinning: './js/spinning',
        main:'./js/main',
        progressbar: './plugin/progressbar/js/bootstrap-progressbar.min'

    },
    shim: {
        'bootstrap': {
            deps: ['jquery','tether']
        },
        'main': {
            deps: ['jquery','bootstrap','spinning','tether'],
        },
        progressbar: {
            deps: ['jquery','bootstrap']
        }
    }


})


