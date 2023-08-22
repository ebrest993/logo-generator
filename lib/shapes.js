class Shapes {
    constructor(shape) {
        this.shape = shape;
    }

    render(){
        throw new Error('Shape class is missing its render() method. Best get on it.')
    }
}

module.exports = Shapes;