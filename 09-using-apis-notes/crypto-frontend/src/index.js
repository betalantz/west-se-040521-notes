

main()


function createFormListener(){
  const form = document.querySelector('form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const comment = event.target['comment-field'].value


    const pTag = document.createElement('p')
    pTag.innerText = comment

    const commentsContainer = document.querySelector('#comments-container')
    commentsContainer.append(pTag)


    form.reset()
  })
}





// create a var that holds the form element
// bind the form to an event listener (submit)
//  once submitted:
//     scrape the userinput from the form and store in a var
//     create a new node with that user input
//     and add that node to the DOM








function createAlertBtnListener(){

  const alertBtn = document.querySelector('#alert-btn')

  alertBtn.addEventListener('click', function(event){
    alert('hello')
  })

}


function main(){
  createFormListener()
  createAlertBtnListener()
}


