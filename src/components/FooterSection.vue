<template>
     <footer>
        <p>Copyright Franklin Jester 2023</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection'
  }
  </script>
  
  <style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}


.main-content {
  flex: 1;
  padding-bottom: 30px; 
}

footer {
  position: absolute; 
  bottom: 0; 
  left: 0; 
  width: 100%; 
  background-color: transparent; 
  color: lightgray; 
  text-align: right; 
  padding-bottom: 5px;
  box-sizing: border-box;
  margin-top: auto; 
  height: 20px;
}

footer p {
  margin: 0; 
  font-size: small;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 450px) {
  footer {
    position: relative;
  }
}
</style>

  