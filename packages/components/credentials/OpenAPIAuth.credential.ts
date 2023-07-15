import { INodeParams, INodeCredential } from '../src/Interface'

class OpenAPIAuth implements INodeCredential {
    label: string
    name: string
    description: string
    inputs: INodeParams[]

    constructor() {
        this.label = 'OpenAPI Auth Token'
        this.name = 'openAPIAuth'
        this.inputs = [
            {
                label: 'OpenAPI Token',
                name: 'openAPIToken',
                type: 'password',
                description: 'Auth Token. For example: Bearer <TOKEN>'
            }
        ]
    }
}

module.exports = { credClass: OpenAPIAuth }
