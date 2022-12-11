
        // optionally, set maximum number of captcha validation on event:
        const maxNumberOfTries = 2;

        // captcha initial setup
        var myCaptcha = new jCaptcha({
            el: '.jCaptcha',
            canvasClass: 'jCaptchaCanvas',
            canvasStyle: {
                // properties for captcha stylings
                width: 100,
                height: 15,
                textBaseline: 'top',
                font: '15px Arial',
                textAlign: 'left',
                fillStyle: '#000',
                left:'15px'
            },

            // set callback function
            callback: function (response, $captchaInputElement, numberOfTries) {
                if (maxNumberOfTries < numberOfTries) {
                    document.getElementById("captcha").placeholder = "Intentos agotados";
                    document.getElementById("btn-click").disabled = true;
                }

                if (response == 'success') {
                  var element = document.getElementById("pop-up");
                  element.classList.add("show_pop-up");
                }

                if (response == 'error') {

                    //alert("error");

                }

            }

        });

        document.getElementById("btn-click").addEventListener("click",formSubmit);

        function formSubmit(e){
          e.preventDefault();
          myCaptcha.validate();
        }

        //Function to close PopUp when closebutton clicked
        function closePopup(){
          var element = document.getElementById("pop-up");
          element.classList.remove("show_pop-up");
        }
