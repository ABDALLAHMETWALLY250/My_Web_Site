<template>
  <div class="Footer">
    <div class="text">
      <p>
        Made With <i class="fa-solid fa-heart"></i> By Abdallah Mohamed © 2023
      </p>
    </div>
    <div class="social text-center">
      <a
        href="https://www.facebook.com/abdallah.metwally.925/"
        target="_blank"
        title="facebook"
        class="hvr-bob"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-facebook"></i
      ></a>
      <a
        href="https://wa.me/+201282488136"
        target="_blank"
        title="whatsapp"
        class="hvr-bob"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-whatsapp"></i
      ></a>
      <a
        href="https://www.linkedin.com/in/abdallah-mohamed-5b9924224"
        target="_blank"
        title="linkedin"
        class="hvr-bob"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i
      ></a>
      <a
        href="mailto:abdometwaly250@gmail.com"
        target="_blank"
        title="Mail Me"
        class="hvr-bob"
        rel="noopener noreferrer"
      >
        <i class="fa-regular fa-envelope"></i
      ></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .Footer {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    background-color: #021b40;
    padding: 5px;
  }
  p {
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
  .Footer {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    background-color: #021b40;
    padding: 5px;
  }
  p {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 1024px) {
  .Footer {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    background-color: #052e6b;
    padding: 5px;
  }
  p {
    margin-bottom: 0;
  }
}
p {
  font-size: 18px;
}
.Footer {
  border-top: 3px solid #000;
}
.dark-theme .Footer {
  border-top: 3px solid #fff;
  background-color: #000;
}
.fa-brands,
.fa-regular {
  font-size: 35px;
  margin-right: 25px;
  font-weight: normal !important;
}
.fa-heart {
  color: red;
  font-size: 15px;
}
a {
  color: #fff;
}
a:hover .fa-facebook {
  color: #0d6efd;
}
a:hover .fa-linkedin {
  color: #0d6efd;
}
a:hover .fa-envelope {
  color: #0d6efd;
}
a:hover .fa-whatsapp {
  color: green;
}
</style>
