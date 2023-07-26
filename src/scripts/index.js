
const sectionProfile = document.querySelector(".suggest__profiles")

    function suggestProfile(list){
        sectionProfile.innerHTML = ""
    for(let i = 0; i < list.length; i++){
        let card = document.createElement("li")
        card.id = list[i].id
        card.classList.add("card__profile")

        let organize = document.createElement("div")
        organize.id =list[i].id
        organize.classList.add("organize_container")
        
        let organizeInfo = document.createElement("div")
        organizeInfo.id =list[i].id
        organizeInfo.classList.add("info_container")

        let buttonDiv = document.createElement("div")
        buttonDiv.id =list[i].id
        buttonDiv.classList.add("button_container")

        let img = document.createElement("img")
        img.src = list[i].img
        img.alt = "Foto de Perfil"
        img.classList.add("profile__pic")
        organize.appendChild(img)

        let user = document.createElement("h2")
        user.innerText = list[i].user
        user.classList.add("profile__name")
        organizeInfo.appendChild(user)

        let stack = document.createElement("legend")
        stack.innerText = list[i].stack
        stack.classList.add("profile__stack")
        organizeInfo.appendChild(stack)
        
        card.appendChild(organize)
        organize.appendChild(organizeInfo)
        card.appendChild(buttonDiv)

        let following = document.createElement("button")
        following.innerText = "Seguir"
        following.classList = "follow__button"
        card.appendChild(following)

        sectionProfile.appendChild(card)
        
    }
}
suggestProfile(suggestUsers)

const sectionProfileAside = document.querySelector(".suggest__profiles--aside")

    function suggestProfileAside(list){
      sectionProfileAside.innerHTML = ""
    for(let i = 0; i < list.length; i++){
        let card = document.createElement("li")
        card.id = list[i].id
        card.classList.add("card__profile")

        let organize = document.createElement("div")
        organize.id =list[i].id
        organize.classList.add("organize_container")
        
        let organizeInfo = document.createElement("div")
        organizeInfo.id =list[i].id
        organizeInfo.classList.add("info_container")

        let buttonDiv = document.createElement("div")
        buttonDiv.id =list[i].id
        buttonDiv.classList.add("button_container")

        let img = document.createElement("img")
        img.src = list[i].img
        img.alt = "Foto de Perfil"
        img.classList.add("profile__pic")
        organize.appendChild(img)

        let user = document.createElement("h2")
        user.innerText = list[i].user
        user.classList.add("profile__name")
        organizeInfo.appendChild(user)

        let stack = document.createElement("legend")
        stack.innerText = list[i].stack
        stack.classList.add("profile__stack")
        organizeInfo.appendChild(stack)
        
        card.appendChild(organize)
        organize.appendChild(organizeInfo)
        card.appendChild(buttonDiv)

        let following = document.createElement("button")
        following.innerText = "Seguir"
        following.classList = "follow__button"
        card.appendChild(following)

        sectionProfileAside.appendChild(card)
        
    }
}
suggestProfileAside(suggestUsers)

const sectionPost = document.querySelector(".post__container")

function postSpace(list){
    sectionPost.innerHTML = ""

    for(let i = 0; i < list.length; i++){
        let post = document.createElement("li")
        post.id = list[i].id
        post.classList.add("main__post")

        let card = document.createElement("div")
        card.id = list[i].id
        card.classList.add("post__container")

        let organize = document.createElement("div")
        organize.id =list[i].id
        organize.classList.add("organize_container")
        
        let organizeInfo = document.createElement("div")
        organizeInfo.id =list[i].id
        organizeInfo.classList.add("info_container")

        let footer = document.createElement("div")
        footer.id =list[i].id
        footer.classList.add("post__footer")

        let img = document.createElement("img")
        img.src = list[i].img
        img.alt = "Foto de Perfil"
        img.classList.add("profile__pic")
        organize.appendChild(img)

        let user = document.createElement("h2")
        user.innerText = list[i].user
        user.classList.add("profile__name")
        organizeInfo.appendChild(user)

        let stack = document.createElement("legend")
        stack.innerText = list[i].stack
        stack.classList.add("profile__stack")
        organizeInfo.appendChild(stack)
        
        card.appendChild(organize)
        organize.appendChild(organizeInfo)
        
        post.appendChild(card)

        let title = document.createElement("h1")
        title.innerText = list[i].title
        title.classList.add("post__title")
        post.appendChild(title)

        let text = document.createElement("p")
        text.innerText = list[i].text
        text.classList.add("postSection__post")
        post.appendChild(text)

        
        let expand = document.createElement("button")
        expand.innerText = "Abrir Post"
        expand.classList = "post__button"
        footer.appendChild(expand)

        let likeButton = document.createElement("img")
        likeButton.src = list[i].button
        likeButton.alt = "Botão de like"
        likeButton.classList.add ("like__button")
        footer.appendChild(likeButton)

        let likes = document.createElement("div")
        likes.innerText = list[i].likes
        likes.classList.add("postSection__likes")
        footer.appendChild(likes)

        post.appendChild(footer)

        sectionPost.appendChild(post)
    }
}

postSpace(posts)

function handleModal() {
    const buttons = document.querySelectorAll('.post__button')
    const modalController = document.querySelector('.modal__controller')
  
    for(let i = 0; i < buttons.length; i++) {
      const button = buttons[i]
  
      button.addEventListener('click', () => {
        modalController.showModal()
    
        closeModal()
      })
    }
  
  }
  
  function closeModal() {
    const button = document.querySelector('.modal__close')
    const modalController = document.querySelector('.modal__controller')
  
    button.addEventListener('click', () => {
      modalController.close()
    })
  }
  
  handleModal()
  


  