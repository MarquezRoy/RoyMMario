// TODO
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings){
        settings.image = "Mario";
        settings.spritewidth = "128";
        settings.spriteheight = "128";
        settings.width = 128;
        settings.height = 128;
        this._super(me.Entity, 'init', [x, y, settings]);
        
        
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        
        this.body.setVelocity(5, 20);
      },
    
    update: function(delta){
//        if(me.input.isKeyPressed("right")){
//            this.body.vel.x += this.body.accel.x * me.timer.tick;
//        }else{
//             this.body.vel.x = 0;
//        }
//        this.body.update(delta);
//        return true;
    }
    
});