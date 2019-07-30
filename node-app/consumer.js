var amqp = require('amqplib/callback_api');
const os = require('os')

setTimeout(() => {
    amqp.connect('amqp://rabbitmq:rabbitmq@node_es_rabbitmq_1', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error11;
            }
            var queue = 'hello';

            channel.assertQueue(queue, {
                durable: false,
            });

            console.log(" [*] Waiting for messages in %s. To exit press CRTL+C.", queue);
            channel.consume(queue, function (msg) {
                console.log(" [x] Consumer %s received %s.", os.hostname(), msg.content.toString());
                channel.ack(msg);
            }, {
                    noAck: false, //make sure that task is consumed and processed
                });
        });
    });
}, 20000); // wait for rabbitmq to start up