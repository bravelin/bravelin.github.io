// canvas 精灵对象
class Sprite {
    constructor (options) {
        this.name = options.name || 'sprite'
        this.painter = options.painter

        this.top = options.top || 0
        this.left = options.left || 0
        this.width = options.width || 0
        this.height = options.height || 0
        this.velocityX = options.velocityX || 0
        this.velocityY = options.velocityY || 0
        this.visible = options.visible || true
        this.animating = options.animating || false
        this.behaviors = options.behaviors || []
    }
    paint (context) {
        if (this.painter && this.visible) {
            this.painter.paint(this, context)
        }
    }
    update (context, time) {
        this.behaviors.forEach(behavior => {
            behavior.execute(this, context, time)
        })
    }
}
export default Sprite
