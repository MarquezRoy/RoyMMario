// This code adds the "Mario" character into the game.
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
               image: "Mario",
               spritewidth: "128",
               spriteheight: "128",
               width: 128,
               height: 128,
               getShape: function(){
                    return (new me.Rect(0, 0, 128, 128)).toPolygon();    
                }
        }]);
    
    this.body.update(delta);
        me.collision.check(this, true, this.collideHandler.bind(this), true);
        this._super(me.Entity, "update", [delta]);
        return true;
    
       this.renderable.addAnimation("idle", [3]);
       this.renderable.addAnimation("smallWalk", [9, 10, 11, 12, 13], 80);
       
       this.renderable.setCurrentAnimation("idle");
       
        this.body.setVelocity(5, 20);
      },
    
    update: function(delta){
        //This code reads the correct keys for the movements.
          if(me.input.isKeyPressed("right")){
              this.body.vel.x += this.body.accel.x * me.timer.tick;
              this.renderable.setCurrentAnimation("smallWalk");
          }
          //For the left movement to work you must put "-=" instead of "+=".
        else if (me.input.isKeyPressed("left")) {
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
        } else {
            this.body.vel.x = 0;
        }
 
        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
            }
        }else{
            this.renderable.setCurrentAnimation("idle");
        }

    }

});


game.LevelTrigger = me.Entity.extend({
    knit: function(x, y, settings) {
     this._super(me.Entity, 'init', [x, y, settings]);
     this.body.onCollision = this.onCollision.bind(this);
     this.level = settings.level;
    },
    
    onCollision: function(){
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
    }
    
});