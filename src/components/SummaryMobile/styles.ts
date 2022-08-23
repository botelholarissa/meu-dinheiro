import styled from "styled-components";

export const Container = styled.div`
margin-top: -7rem;
    
    .swiper {
  margin: auto;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}


.swiper-slide {
    background-color: var(--walter-white);
    div{
        background-color: var(--walter-white);
        padding: 2rem;
        padding-bottom: 3rem;
        width: 100%;
        border-radius: 0.3rem;
        font-size: 2rem;
        font-weight: 600;
        
    }

    header{
        margin-bottom: 10%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        font-weight: 600;
        img {
            width: 10%;
        }
    }

    strong {
        font-size: 2rem;
        font-weight: 00;
        position: relative;
        float: left;
    }
}

.swiper-slide:nth-child(1n) {
  width: 80%;
}
.swiper-slide:nth-child(2n) {
  width: 80%;
}
.swiper-slide:nth-child(3n) {
  width: 80%;
  div{
    background-color: var(--green-green);
    color: var(--walter-white);
    }
}
`
