var amqp = require('amqplib/callback_api')
const os = require('os')

setTimeout(() => {
    amqp.connect('amqp://rabbitmq:rabbitmq@node_es_rabbitmq_1', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'hello';
            var msg = 'hello from ' + os.hostname();

            channel.assertQueue(queue, {
                durable: false,
            });

            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent from %s.", os.hostname())
        });
        setTimeout(function () {
            connection.close();
            process.exit(0);
        }, 500);
    });
}, 20000); // wait for rabbitmq to start up






