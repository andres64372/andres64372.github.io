const users = [ { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null }, { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } }, { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } } ];
let channel = {};
for(let user of users){
    if(user.application){
        if(channel[user.channel]){
            channel[user.channel]++;
        }else{
            channel[user.channel] = 1;
        }
    }
}
console.log(channel)
