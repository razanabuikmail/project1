
   var scoreCard=document.getElementById('scoreCard');  
   var quisBox=document.getElementById('questionBox');
   //li
   var op1=document.getElementById('op1');
   var op2=document.getElementById('op2');
   var op3=document.getElementById('op3');
   var op4=document.getElementById('op4');
   var input=document.getElementById('input');
   var namee=document.getElementById('namee');


   var app={questions:[
                          {
                                 q:    ' What is the longest that an elephant has ever lived?',
                           options:      ['17 years','49 years','86 years','None of these'],
                            answer:       3
                          },

                          {
                                q: ' Which planet is the hottest ?',
                          options:  ['Venus','Saturn','Mercury','Mars'],
                           answer:    1
                          },
                          
                          {
                                q:  'Correct HTML tag for the largest heading is ?',
                          options:   ['h4', 'h1', 'h8', 'h9'],
                           answer:     2
                          },


                           {
                                q:  'two fore two two = ?',
                          options:  ['2422','4422','24222','nth'],
                          answer:     1
                        },


                          {
                                q:  ' my name is ',
                          options:  ['razan','ra zan','rasan','nth'],
                          answer:     1
                        },

                          ],
                          
                           
                index:0,
                load:function(){
                	   if(this.index <= this.questions.length-1){
                      //box question

                        quisBox.innerHTML= this.questions[this.index].q; 

                       // options ; 
                       
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else
                        {
                        quisBox.innerHTML="Quiz Over , well done";
                        // +namee.value() ;
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        input.style.display="none";
                        namee.style.display="none";
                        }
                }, 

                 next:function()
                 {
                    this.index++;
                    this.load();
                 },

                 check:function (checked)
                 {
                    var id = checked.id ;
                    if(id[id.length-1]==this.questions[this.index].answer)
                    {
                   	this.score++;
                    //  alert(" ✔ Excellent");
                  	this.scoreCard();
                          app.next();
                         }
                else{
                        	alert(" ✖ nop !");
                          app.next();
                         }
                },

                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length +"/" +this.score;
                }
 
           }


          document.onload = app.load();

           function button(turn){
                 app.check(turn);
              
           }
 


