(function(){
    window.plugin_filmix_pro = true;

    Lampa.Plugins.add({
        type: 'video',
        name: 'Filmix Pro',
        component: 'filmix_pro',
        version: '1.0.0',
        author: 'Ты',
        description: 'Плагин для подключения Filmix Pro',
        onRender: function() {
            Lampa.Activity.push({
                url: '',
                title: 'Filmix Pro',
                component: 'start',
                search_on: true
            });
        }
    });
})();