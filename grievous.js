var forearm_length = 50;
var lightsaber_length = 100;

function grievous(x, y, vx, vy)
  {
      // context == canvas object
//         this.context = context;
    // this.context = context
    // this.canvas = canvas

    this.x = x;
    this.y = y;
    this.velocity_x = vx;
    this.velocity_y = vy;

    this.upper_left_forearm_angle = Math.PI * 3 / 2;
    this.lower_left_forearm_angle = Math.PI * 1 / 2;

    this.upper_right_forearm_angle = Math.PI * 1 / 2;
    this.lower_right_forearm_angle = -1 * Math.PI * 1 / 2;

    this.upper_left_forearm_velocity = - 1 * Math.PI / 60;
    this.lower_left_forearm_velocity = 1 * Math.PI / 60;

    this.upper_right_forearm_velocity = 1 * Math.PI / 60;
    this.lower_right_forearm_velocity = -1 * Math.PI / 60;

    // this.upper_left_forearm_velocity = 0;
    // this.lower_left_forearm_velocity = 0;
    
    //   this.upper_right_forearm_velocity = Math.PI / 20;
    //   this.lower_right_forearm_velocity = -1 * Math.PI / 20;
    
    

    this.lightsaber1_pos = Math.PI;
    this.lightsaber2_pos = Math.PI/2;
    this.lightsaber3_pos = Math.PI;
    this.lightsaber4_pos = Math.PI/ 2;
    
//         this.upper_right_forearm_velocity = Math.PI / 20;
//         this.lower_right_forearm_velocity = Math.PI / 20;
  }
  
  grievous.prototype.draw_head = function() {
      context.translate(0, -130);

      context.beginPath();
      context.fillStyle = "black";
      context.arc(0, 0, 30, 0, Math.PI * 2, true);  //200,180
      context.fill(); //fill the circle 
  }
  
  grievous.prototype.draw_body = function() {
    
//       body
//       context.moveTo(0, -100);
    context.beginPath();
    context.lineWidth = 6;
    context.moveTo(0, -100);
    context.lineTo(0, 0);
    context.strokeStyle = "black";
    context.stroke();
  
  }
  
  grievous.prototype.draw_legs = function() {
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "black";
    context.moveTo(0, 0);
    context.lineTo(- 50, 100);
    context.moveTo(0, 0);
    context.lineTo(50, 100);
    context.stroke();
    
  }
  
  grievous.prototype.draw_lightsaber = function(color, angle)
  {
    context.translate(forearm_length, 0);
    context.rotate(angle);
    
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = color;
    context.moveTo(0, 0);
    context.lineTo(lightsaber_length, 0);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = color;
    context.moveTo(lightsaber_length / 10, lightsaber_length / 10);
    context.lineTo(lightsaber_length/ 10, -1 * lightsaber_length/10);
    context.stroke();
  }
  
  grievous.prototype.draw_left_arms = function() {
    context.save();
    this.draw_upper_left_arm();
    context.restore();
    
    context.save();
    this.draw_lower_left_arm();
    context.restore();
  }
  
  grievous.prototype.draw_upper_left_arm = function() {
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "black";
    context.moveTo(0,-80);
    context.lineTo(-50, - 100);
    context.stroke();
    
    context.save();
    this.draw_upper_left_forearm();
    context.restore();
  }
  
  grievous.prototype.draw_upper_left_forearm = function()
  {
    context.translate(-50, -100);
    context.rotate(this.upper_left_forearm_angle);
    
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "gray";
    context.moveTo(0, 0);
    context.lineTo(forearm_length, 0);
    context.stroke();
    
    context.save();
    this.draw_lightsaber("blue", this.lightsaber1_pos);
    context.restore();
  }

  grievous.prototype.draw_lower_left_arm = function() {
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "black";
    context.moveTo(0,-80);
    context.lineTo(-80, - 50);
    context.stroke();
    
    context.save();
    this.draw_lower_left_forearm();
    context.restore();
  }
  
  grievous.prototype.draw_lower_left_forearm = function()
  {
    context.translate(-80, -50);
    context.rotate(this.lower_left_forearm_angle);
    
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "gray";
    context.moveTo(0, 0);
    context.lineTo(forearm_length, 0);
    context.stroke();
    
    context.save();
    this.draw_lightsaber("green", this.lightsaber2_pos);
    context.restore();
  }

  grievous.prototype.draw_right_arms = function() {
    context.save();
    this.draw_upper_right_arm();
    context.restore();
    
    context.save();
    this.draw_lower_right_arm();
    context.restore();
  }
  
  grievous.prototype.draw_upper_right_arm = function() {
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "black";
    context.moveTo(0,-80);
    context.lineTo(50, -100);
    context.stroke();
    
    context.save();
    this.draw_upper_right_forearm();
    context.restore();
  }
  
  grievous.prototype.draw_upper_right_forearm = function()
  {
    context.translate(50, -100);
    context.rotate(this.upper_right_forearm_angle);
    
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "gray";
    context.moveTo(0, 0);
    context.lineTo(forearm_length, 0);
    context.stroke();
    
    context.save();
    this.draw_lightsaber("green", this.lightsaber3_pos);
    context.restore();
  }

  grievous.prototype.draw_lower_right_arm = function() {
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "black";
    context.moveTo(0,-80);
    context.lineTo(80, - 50);
    context.stroke();
    
    context.save();
    this.draw_lower_right_forearm();
    context.restore();
  }
  
  grievous.prototype.draw_lower_right_forearm = function()
  {
    context.translate(80, -50);
    context.rotate(this.lower_right_forearm_angle);
    
    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = "gray";
    context.moveTo(0, 0);
    context.lineTo(forearm_length, 0);
    context.stroke();
    
    context.save();
    this.draw_lightsaber("blue", this.lightsaber4_pos);
    context.restore();
  }
  
  
  grievous.prototype.draw_arms = function() {
    context.save();
    this.draw_left_arms();
    context.restore();
    
    context.save();
    this.draw_right_arms();
    context.restore();
  }
  
  grievous.prototype.draw_full = function() {
    context.translate(this.x, this.y);

    context.save();
    this.draw_head();
    context.restore();
    
    context.save();
    this.draw_arms();
    context.restore();

    context.save();
    this.draw_body();
    context.restore();
    
    context.save();
    this.draw_legs();
    context.restore();
  }
  
  grievous.prototype.update = function() {
    this.x += this.velocity_x;
    this.y += this.velocity_y;

    this.upper_left_forearm_angle += this.upper_left_forearm_velocity;
    this.lightsaber1_pos += Math.PI / 30;

    this.lower_left_forearm_angle += this.lower_left_forearm_velocity;
    this.lightsaber2_pos -= Math.PI / 30;

    this.upper_right_forearm_angle += this.upper_right_forearm_velocity;
    this.lightsaber3_pos -= Math.PI / 30;

    this.lower_right_forearm_angle += this.lower_right_forearm_velocity;
    this.lightsaber4_pos += Math.PI / 30;

    // this.upper_right_forearm_angle
//   this.upper_left_forearm_angle += this.upper_left_forearm_velocity;
//     this.lightsaber1_pos += Math.random() * (Math.PI / 15 - Math.PI / 60) + Math.PI/60

    if(this.x - 50 < 0){
    this.velocity_x *= -1;
    }
    
    if(this.x + 50 > canvas.width){
    this.velocity_x *= -1;
    }
    
    if(this.y - 130 < 0){
    this.velocity_y *= -1;
    }

    if(this.y + 100 > canvas.height){
    this.velocity_y *= -1;
    }

    if(this.upper_left_forearm_angle > Math.PI * 3 /2 || this.upper_left_forearm_angle < Math.PI / 2)
        this.upper_left_forearm_velocity *= -1;

    if(this.lower_left_forearm_angle > Math.PI * 3 /2 || this.lower_left_forearm_angle < Math.PI / 2)
        this.lower_left_forearm_velocity *= -1;

    if(this.upper_right_forearm_angle > Math.PI * 1 /2 || this.upper_right_forearm_angle < -1 * Math.PI / 2)
        this.upper_right_forearm_velocity *= -1;

    if(this.lower_right_forearm_angle > Math.PI * 1 /2 || this.lower_right_forearm_angle < -1 * Math.PI / 2)
        this.lower_right_forearm_velocity *= -1;
  }