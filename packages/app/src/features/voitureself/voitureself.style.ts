import styled from "styled-components";

export const VoitureSelfContainer = styled.div`
  .carousel.carousel-slider .control-arrow {
    width: 60px !important;
    height: 60px !important;
  }
`;

export const VoitureSelfCarouselImg = styled.img`
  height: 50vh;
  object-fit: contain;
`;

export const VoitureSelfPrice = styled.div`
  background-color: var(--bs-info);
  padding: 7px;
  color: var(--bs-white);
  border-radius: 5px;
  font-weight: bold;
`;