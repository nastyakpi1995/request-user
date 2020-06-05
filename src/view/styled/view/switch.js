import styled from "styled-components";

export const BoxSwitch = styled.div`
  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: #678bb7;
      transition: .4s;
      border-radius: 50%;
    }
    &:after {
      content: "";
      opacity: 0;
      position: absolute;
      right: 4px;
      top: 7px;
      width: 20px;
      height: 20px;
      z-index: 1;
      background-size: 100%;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAAAAAA7VNdtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBgUQHRbuAYybAAABPElEQVRIx2P8z0AqYCJZx6iWUS0DouWSjyUjIyOjsEfXA6zp/D8m2AiX5G3+himNTQsEfHu8yJSBoeM3CVr+////wp9B8wqGKF7vi8cxXL9CYoiJMzBwkqjlJYOmMmlaXi5i8FIhKpCh4N9ZH4bQF8QH8ud7i3wY5Pu+/CdSy89CBgYGBgb5iS//E6vlnTcs9qs+keCwx9uzhRgYGNLfkxT7r8p5GRi6/pCi5f/vDgYG/Rskafn/zIWBYQW6IP7YF9ZlYLhHWoJhE2Rg+EOaFgYGBgZ50rR8f8ogqU2alkcnGGyUSEiW////rmLg3UlSVP6ezEti3n+VxcCQjyUp49Ly736jEPYyCZuWfx/ubak0ZGBgcD/+7z9RWv5UQtJ93JHf/7ECFowgZLYQ0pc3NdfixBXyjKOti0GpBQC/3hB3eSeulQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNi0wNVQxNjoyOToyMiswMzowMLWFpe0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDYtMDVUMTY6Mjk6MjIrMDM6MDDE2B1RAAAAAElFTkSuQmCC");
      transition: .4s;
    }
  }

  input:checked + span:before {
    background-color: white;
  }

  input:checked + span:after {
    opacity: 1;
  }

  input:focus + span {
    box-shadow: 0 0 1px black;
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;
