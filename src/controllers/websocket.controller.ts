import { FastifyRequest } from 'fastify';
import { Controller, GET } from 'fastify-decorators';
import { SocketStream } from 'fastify-websocket';

@Controller('/websocket')
export default class WebsocketController {
    @GET({
        url: '/:id',
        options: {
            websocket: true,
        },
    })
    async exampleHandler(connection: SocketStream, request: FastifyRequest, params: { [key: string]: any }) {
        const id = params.id;
        connection.socket.send(JSON.stringify({ id }));
    }
}
