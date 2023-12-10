<template>
    <div id="contactbody" class="component-container contact-page">
        
      <article id="contact-article">
        
        <div class="contact-form-container">
            <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" v-model="contact.name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="_replyto" v-model="contact.email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" v-model="contact.message" required></textarea>
            </div>
            <input type="hidden" name="_subject" value="New submission from your website!">
            <button type="submit">Send</button>
            </form>
            <div v-if="showThankYouMessage" class="thank-you-overlay">
            <img src="../assets/mailbox.gif" alt="An image of a mailbox receiving a letter" />
            <h2>Thank you for your message!</h2>
            </div>
        </div>
      </article>
    </div>
  </template>
  
  
  
  
  
  
  <script>
  export default {
    name: "ContactsPage",
    data() {
      return {
        showThankYouMessage: false,
        contact: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        fetch('https://formspree.io/f/xdorqdyo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.contact.name,
            _replyto: this.contact.email,
            message: this.contact.message
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(() => {
          this.showThankYouMessage = true;
          this.contact = { name: '', email: '', message: '' };
          setTimeout(() => {
            this.showThankYouMessage = false;
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    }
  };
  </script>
  


  
<style scoped>

h1 {
    margin-left: 200px;
    text-align: left;
}
#contactbody {
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: auto;
}

#contact-article {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 0;
}

#contact-article h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  padding-top: 20px;
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project-card {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 30%;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%; 
  max-height: 100%; 
  object-fit: cover; 
  border-radius: 10px;
}

.project-info {
  text-align: center;
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.project-info h2, .project-info p, .project-info a {
  margin-bottom: 10px; 
}

@media screen and (max-width: 850px) {
  .project-card {
    width: 45%;
  }
  h1 {
    margin-left: 10px;
  }
}

@media screen and (max-width: 450px) {
  #contact-article h1 {
    font-size: 1.5em;
    margin-top: 0;
    margin-left: 20px;
  }
  .project-card {
    width: 80%;
  }
  h1 {
    margin-left: 10px;
  }
}

.contact-form-container {
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical; 
}

button {
  background-color: #007BA7;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.thank-you-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  .thank-you-overlay img {
    max-width: 50%; 
    margin-bottom: 20px;
  }
</style>






