//******************** Added By Abhishek - displaying teachers with their properties*********

          // Creating an object for the details of each teacher
          const PROFFESSORS = {
            //'Suresh Dara': ["Awesome Teacher, Go with him for sure","#00ff00"],

            'Priyank Nema':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Manoj Acharya':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Good',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Ujjwal Kumar Mishra':{
              'Teaching': 'Medium',
              'Evaluation': 'Bad',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Bad',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'Aanjan Kumar':{
              'Teaching': 'Bad',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Chandrama Swain':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },
           
            'Satyam Ravi':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Govind Prasad Pandya':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Medium',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Saurabh Bhargava':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Good',
              'Average': 'Low',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Suchismita Patra':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Good',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Pooja Lalwani':{
              'Teaching': 'Bad',
              'Evaluation': 'Low',
              'Behaviour': 'Average',
              'Internals': 'Good',
              'Average': 'Average',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Ravi Bhatt':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Sharmila Joseph':{
              'Teaching': 'Bad',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Dondu Harish':{
              'Teaching': 'Bad',
              'Evaluation': 'Strict',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'S. Periyanagi':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Rajdeep Singh Payal':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Good',
              'Internals': 'Medium',
              'Average': 'Good',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'D.S Devraju':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Virendra Singh Kushwaha':{
              'Teaching': 'Good',
              'Evaluation': 'Strict',
              'Behaviour': 'Medium',
              'Internals': 'Strict',
              'Average': 'Medium',
              'Overall': 'Bad',
              'Color': 'red',
            },


            'Arindam Gosh':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Medium',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
            
            'Hemant Nashine':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Anita Yadav':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Nikhil Pateria':{
              'Teaching': 'Medium',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Bhavana Bhagerwal':{
              'Teaching': 'Bad',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Ankit Pal':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Javed Khan':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Priyanka Roy':{
              'Teaching': 'Bad',
              'Evaluation': 'Bad',
              'Behaviour': 'Medium',
              'Internals': 'Medium',
              'Average': 'Bad',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'KK Nair':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Vinod Bhatt':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Strict',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Ashok Kumar Baral':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },
            
            'Rajeev Saxena':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
            
            'Suresh Dara':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Strict',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Aakash Saxena':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Soma Saha':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Rabia Musheer':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Low',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Kirti Chaudhary':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Bhumika Choksi':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Strict',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Palash Jain':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Siddharth K.V':{
              'Teaching': 'Medium',
              'Evaluation': 'Bad',
              'Behaviour': 'Bad',
              'Internals': 'Bad',
              'Average': 'Bad',
              'Overall': 'Bad',
              'Color': 'Red',
            },

            'Lokesh Malviya':{
              'Teaching': 'Medium',
              'Evaluation': 'Medium',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },
            
            'Sucheta Sadukhan':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Strict',
              'Internals': 'Medium',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Sandeep Sahu':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            
            'Akshay Jadav':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            
            'P. Narendra Babu':{
              'Teaching': 'Medium',
              'Evaluation': 'Medium',
              'Behaviour': 'Strict',
              'Internals': 'Medium',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },
            
            
            'Uday Kumar':{
              'Teaching': 'Medium',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'Low',
              'Overall': 'Average',
              'Color': 'Orange',
            },

            'Arindham Ghosh':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Good',
              'Internals': 'Good',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Sadanand Singh':{
              'Teaching': 'Good',
              'Evaluation': 'Medium',
              'Behaviour': 'Medium',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
            },

          };

          //capturing the selected value in the dropdown
          document.getElementById("submit").addEventListener('click', function () {
            let dropdown = document.getElementById("dropdown");
            let selectedProf = dropdown.value;
          
            // checking whether the selected Proffessors detail is present in our Object or not
            if( selectedProf in PROFFESSORS){
              let selectedOption = document.getElementById("selectedOption");
              let Teaching = PROFFESSORS[selectedProf]['Teaching'];        
              let Evaluation = PROFFESSORS[selectedProf]['Evaluation'];
              let Behaviour = PROFFESSORS[selectedProf]['Behaviour'];
              let Internals = PROFFESSORS[selectedProf]['Internals'];
              let Average = PROFFESSORS[selectedProf]['Average'];
              let Overall = PROFFESSORS[selectedProf]['Overall'].toUpperCase();
              let Color = PROFFESSORS[selectedProf]['Color'];

              
              
            //   Fetching Review of the selected Proffessor
              selectedOption.innerHTML = `Teaching: ${Teaching} <br>
              Evaluation : ${Evaluation} <br>
              Behaviour : ${Behaviour} <br>
              Internals : ${Internals} <br>
              Average : ${Average} <br><br>
              Overall : ${Overall} <br>`
              
              ;
              selectedOption.setAttribute("style", `background-color:${Color};`);

              
          }
          else{
            let selectedOption = document.getElementById("selectedOption");
            selectedOption.innerHTML = `Please Select a Professor from the above Dropdown list`;
            selectedOption.setAttribute("style", `color: #f0ff00;`);
          }
          })



